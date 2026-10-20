// 「감옥저택의 번외재판」 논리 핵심: 세계 계산과 무작위 재판 생성. 글자는 하나도 없다(언어 팩 web/lang/*.js 가 맡는다).
// tools/gen_puzzles.py 의 규칙을 그대로 옮긴 것이다. 규칙을 고치면 두 파일을 같이 고칠 것(tests/test_puzzles.py 가 대조한다).
// 퍼즐(논리) = { id, key, tier, incident(사건 id), n, speakers, logic{카드: [kind, args]}, magic_ids, answer, false_cards, worlds }
(function (root) {
  "use strict";
  const G = root.PUZZLES.gen;

  // seed 하나로 같은 문제가 다시 나오게 한다(mulberry32).
  function makeRng(seed) {
    let a = seed >>> 0;
    const next = () => {
      a = (a + 0x6d2b79f5) >>> 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    const int = (n) => Math.floor(next() * n);
    const choice = (xs) => xs[int(xs.length)];
    const shuffle = (xs) => {
      for (let i = xs.length - 1; i > 0; i--) { const k = int(i + 1); [xs[i], xs[k]] = [xs[k], xs[i]]; }
      return xs;
    };
    const sample = (xs, k) => shuffle(xs.slice()).slice(0, k);
    return { choice, shuffle, sample };
  }

  // ---- 말(진술): [kind, args]. "나"는 카드에 적힌 사람(shown) ----

  function content(st, shown, c, honestOfShown, s) {
    const [kind, args] = st;
    switch (kind) {
      case "accuse": case "culprit_is": return c === args[0];
      case "deny": return c !== args[0];
      case "deny_self": return c !== shown;
      case "either": return args.includes(c);
      case "self_or": return c === shown || c === args[0];
      case "meta_false": return !honestOfShown(args[0]);
      case "meta_true": return honestOfShown(args[0]);
      case "swap_claim": return s === args[0];    // 미리아와 args[0] 의 영혼이 바뀌어 있다
    }
    throw new Error(kind);
  }

  function randomStatement(r, me, speakers, metaOk, swapOk) {
    const others = speakers.filter((s) => s !== me);
    const kinds = ["accuse", "culprit_is", "deny", "deny_self", "either", "self_or"]
      .concat(metaOk ? ["meta_false", "meta_true"] : [], swapOk ? ["swap_claim"] : []);
    const kind = r.choice(kinds);
    if (kind === "deny_self") return [kind, []];
    if (kind === "either") return [kind, r.sample(others, 2).sort()];
    if (kind === "swap_claim") return [kind, [r.choice(speakers.filter((x) => x !== "miria"))]];   // 거짓 주장도 된다
    return [kind, [r.choice(others)]];
  }

  // ---- 세계 = 범인 c, 거짓말쟁이 L(말한 사람 순서의 비트), 세뇌 b, 흉내 대상 m, 미리아와 뒤바뀐 사람 s ----
  // p = { speakers, statements, n, magic }

  function hiddenConfigs(sp, magic) {
    const bs = magic.includes("anan") ? sp.filter((x) => x !== "anan") : [null];
    const ms = magic.includes("margo") ? [null].concat(sp.filter((x) => x !== "margo" && x !== "anan")) : [null];   // 안안은 필담
    const ss = magic.includes("miria") ? [null].concat(sp.filter((x) => x !== "miria")) : [null];
    const out = [];
    for (const b of bs) for (const m of ms) {
      if (b !== null && b === m) continue;    // 아무 말도 안 한 사람은 세뇌가 드러날 말이 없다
      for (const s of ss) out.push([b, m, s]);
    }
    return out;
  }

  // x 이름으로 나온 말을 실제로 한 사람.
  function speaker(x, m, s) {
    if (x === m) return "margo";
    if (s !== null && x === "miria") return s;
    if (x === s) return "miria";
    return x;
  }

  const popcount = (x) => { let k = 0; for (; x; x &= x - 1) k++; return k; };

  // 규칙에 맞는 거짓말쟁이 집합 전부(크기 제한 없이).
  function liarSets(sp, st, c, b, m, s) {
    const idx = (x) => sp.indexOf(x);
    const out = [];
    for (let L = 0; L < 1 << sp.length; L++) {
      if (b !== null && L & (1 << idx(b))) continue;
      if (m !== null && L & (1 << idx(m))) continue;
      const honest = (x) => {
        const actual = speaker(x, m, s);
        return !(L & (1 << idx(actual))) && actual !== b;
      };
      // "나"는 카드에 적힌 사람(흉내·뒤바뀜 모두 상대인 척 말한다). 맞고 틀림은 실제로 말한 사람 몫
      if (sp.every((x) => content(st[x], x, c, honest, s) === honest(x))) out.push(L);
    }
    return out;
  }

  function worlds(p) {
    const out = [];
    for (const c of p.speakers) {
      for (const [b, m, s] of hiddenConfigs(p.speakers, p.magic)) {
        for (const L of liarSets(p.speakers, p.statements, c, b, m, s)) {
          if (popcount(L) === p.n) out.push({ c, L, b, m, s });
        }
      }
    }
    return out;
  }

  // c 가 범인이라고 가정했을 때 가능한 거짓말쟁이 수들(오름차순). 빈 배열이면 말들이 어긋난다.
  function liarCounts(p, c) {
    const counts = new Set();
    for (const [b, m, s] of hiddenConfigs(p.speakers, p.magic)) {
      for (const L of liarSets(p.speakers, p.statements, c, b, m, s)) counts.add(popcount(L));
    }
    return [...counts].sort((a, b) => a - b);
  }

  // 이 세계에서 틀린 말이 적힌 카드(이름표 기준), 말한 사람 순서로.
  function falseCards(p, w) {
    return p.speakers.filter((x) => {
      const actual = speaker(x, w.m, w.s);
      return w.L & (1 << p.speakers.indexOf(actual)) || actual === w.b;
    });
  }

  // 논리 퍼즐 → 세계 계산용 모양
  const problem = (q) => ({ speakers: q.speakers, statements: q.logic, n: q.n, magic: q.magic_ids });

  const properSubsets = (magic) => magic.length === 2 ? [[], [magic[0]], [magic[1]]] : magic.length === 1 ? [[]] : [];

  function solvesWithout(p, culprit, rest) {
    const plain = worlds({ ...p, magic: rest });
    return new Set(plain.map((w) => w.c)).size === 1 && plain[0].c === culprit;
  }

  // 무작위 퍼즐 하나. 같은 (tier, seed)면 같은 퍼즐. 조건을 만족하는 것이 안 나오면 null.
  function make(tier, seed, maxTries = 20000) {
    const spec = G.tiers[tier];
    const r = makeRng(seed);
    const magic = r.choice(spec.magics);    // 마법 조합을 먼저 정한다(조합마다 통과율이 달라 시도마다 고르면 안안만 많이 나온다)
    for (let t = 0; t < maxTries; t++) {
      const k = r.choice(spec.sizes);
      const n = r.choice(spec.ns);
      const inc = r.choice(G.incidents);
      if (magic.includes(inc.owner)) continue;    // 피해자는 용의자가 아니다
      const pool = G.people.filter((x) => x !== inc.owner && !magic.includes(x));
      if (pool.length < k - magic.length) continue;
      const speakers = r.shuffle(magic.concat(r.sample(pool, k - magic.length)));
      const statements = {};
      let metas = 0;
      for (const s of speakers) {
        const st = randomStatement(r, s, speakers, metas < spec.max_meta, magic.includes("miria"));
        if (st[0].startsWith("meta")) metas++;
        statements[s] = st;
      }
      if (new Set(speakers.map((s) => statements[s][0] + ":" + statements[s][1].join(","))).size < k) continue;
      const p = { speakers, statements, n, magic };
      const ws = worlds(p);
      if (!ws.length || new Set(ws.map((w) => w.c)).size !== 1) continue;
      if (new Set(ws.map((w) => falseCards(p, w).join(","))).size !== 1) continue;
      // 마법(의 일부)을 무시해도 같은 답이면 그 마법은 쓰이지 않은 것이다
      if (properSubsets(magic).some((rest) => solvesWithout(p, ws[0].c, rest))) continue;
      const id = `random-${tier}-${seed}`;
      return {
        id, key: id, tier, seed, incident: inc.id, n, speakers: speakers.slice(),
        logic: Object.fromEntries(speakers.map((s) => [s, [statements[s][0], statements[s][1].slice()]])),
        magic_ids: magic.slice(), answer: ws[0].c, false_cards: falseCards(p, ws[0]), worlds: ws.length,
      };
    }
    return null;
  }

  root.TrialCore = { make, worlds, liarCounts, falseCards, problem, content };
})(typeof window !== "undefined" ? window : globalThis);
