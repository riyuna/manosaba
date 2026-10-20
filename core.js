// 「감옥저택의 번외재판」 논리 핵심: 세계 계산과 무작위 재판 생성. 글자는 하나도 없다(언어 팩 web/lang/*.js 가 맡는다).
// tools/gen_puzzles.py 의 규칙을 그대로 옮긴 것이다. 규칙을 고치면 두 파일을 같이 고칠 것(tests/test_puzzles.py 가 대조한다).
// 퍼즐(논리) = { id, key, tier, incident(사건 id), n, speakers, logic{카드: [[kind, args], …]}, magic_ids, answer, false_cards, worlds }
// 아주 어려움은 false_cards 대신 t(트롤러 수), mode("shown" 수를 알려 줌 / "hidden" 숨김)가 있다.
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
    return { next, choice, shuffle, sample };
  }

  // ---- 말(진술): [kind, args]. 카드 하나 = 말들의 배열 ----
  // 카드의 말투 주인(= 말 속의 "나")은 보통 카드에 적힌 사람, 「사실 나는 ○○다」(iam)가 있으면 그 사람.

  const VH_KINDS = ["role_is", "culprit_role", "count_is", "hearsay", "vision", "alibi"];

  // x 몸에 든 영혼. 미리아와 s 가 뒤바뀌었으면 서로 바뀐다.
  function soulIn(x, s) {
    if (s !== null && x === "miria") return s;
    if (s !== null && x === s) return "miria";
    return x;
  }

  function voiceOf(sts, x) {
    for (const [kind, args] of sts) if (kind === "iam") return args[0];
    return x;
  }

  // x 카드의 말 st 의 내용이 맞는가. me: 말 속의 "나", honestOf(y): y 카드의 말이 맞는가, s: 미리아와 뒤바뀐 사람.
  function content(st, x, me, c, honestOf, s) {
    const [kind, args] = st;
    switch (kind) {
      case "accuse": case "culprit_is": return c === args[0];
      case "deny": return c !== args[0];
      case "deny_self": return c !== me;
      case "either": return args.includes(c);
      case "self_or": return c === me || c === args[0];
      case "meta_false": return !honestOf(args[0]);
      case "meta_true": return honestOf(args[0]);
      case "swap_claim": return s === args[0];          // (남이 하는 말) 미리아와 args[0] 의 영혼이 뒤바뀌어 있다
      case "iam": return soulIn(x, s) === args[0];      // 이 몸(x)에 든 영혼은 사실 args[0] 이다
      case "swap_deny": return soulIn(x, s) === x;      // 이 몸의 영혼은 몸 주인 그대로다
    }
    throw new Error(kind);
  }

  function randomStatement(r, me, speakers, metaOk, swapOk, avoid) {
    const others = speakers.filter((s) => s !== me && !avoid.includes(s));
    let kinds = ["accuse", "culprit_is", "deny", "deny_self", "either", "self_or"].concat(metaOk ? ["meta_false", "meta_true"] : []);
    if (swapOk) kinds = kinds.concat(me === "miria" ? ["swap_deny"] : ["swap_claim", "swap_deny"]);
    const kind = r.choice(kinds);
    if (kind === "deny_self" || kind === "swap_deny") return [kind, []];
    if (kind === "either") return [kind, r.sample(others, 2).sort()];
    if (kind === "swap_claim") return [kind, [r.choice(speakers.filter((x) => x !== "miria" && x !== me))]];   // 거짓 주장도 된다
    return [kind, [r.choice(others)]];
  }

  // ---- 세계 = 범인 c, 거짓말쟁이 L(말한 사람 순서의 비트), 세뇌 b, 흉내 대상 m, 미리아와 뒤바뀐 사람 s ----
  // p = { speakers, statements, n, magic } (아주 어려움은 t, mode 도)

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

  // x 이름으로 나온 말을 실제로 한 사람. 마고의 흉내만 바꾼다(뒤바뀜은 몸 기준이라 그대로).
  const speaker = (x, m) => (x === m ? "margo" : x);

  const popcount = (x) => { let k = 0; for (; x; x &= x - 1) k++; return k; };

  // 규칙에 맞는 (거짓말쟁이 L, 틀린 카드 F) 전부(말한 사람 순서의 비트). 세뇌당한 사람(트롤러)의 카드는
  // 맞든 틀리든 상관없어서 둘 다 놓아 본다. 어느 쪽이든 말의 맞고 틀림은 그 내용과 같아야 한다.
  // 정직한 사람은 자기 영혼의 말투로 말한다(뒤바뀜).
  function consistent(sp, st, c, b, m, s) {
    const idx = (x) => sp.indexOf(x);
    const troll = b === null ? [] : sp.filter((x) => speaker(x, m) === b);
    const voice = Object.fromEntries(sp.map((x) => [x, voiceOf(st[x], x)]));
    const out = [];
    for (let L = 0; L < 1 << sp.length; L++) {
      if (b !== null && L & (1 << idx(b))) continue;     // 세뇌당한 사람·말하지 않은 사람은 거짓말쟁이가 아니다
      if (m !== null && L & (1 << idx(m))) continue;
      for (let g = 0; g < 1 << troll.length; g++) {
        const tg = new Map(troll.map((x, i) => [x, !(g & (1 << i))]));
        const truth = (x) => (tg.has(x) ? tg.get(x) : !(L & (1 << idx(speaker(x, m)))));
        if (!sp.every((x) => st[x].every((q) => content(q, x, voice[x], c, truth, s) === truth(x)))) continue;
        if (!sp.every((x) => tg.has(x) || !truth(x) || soulIn(x, s) === voice[x])) continue;
        let F = 0;
        sp.forEach((x, i) => { if (!truth(x)) F |= 1 << i; });
        out.push({ L, F });
      }
    }
    return out;
  }

  function worlds(p) {
    if (p.mode) return worldsVH(p);
    const out = [];
    for (const c of p.speakers) {
      for (const [b, m, s] of hiddenConfigs(p.speakers, p.magic)) {
        for (const { L, F } of consistent(p.speakers, p.statements, c, b, m, s)) {
          if (popcount(L) === p.n) out.push({ c, L, b, m, s, F });
        }
      }
    }
    return out;
  }

  // c 가 범인이라고 가정했을 때 가능한 거짓말쟁이 수들(오름차순). 빈 배열이면 말들이 어긋난다.
  function liarCounts(p, c) {
    const counts = new Set();
    for (const [b, m, s] of hiddenConfigs(p.speakers, p.magic)) {
      for (const { L } of consistent(p.speakers, p.statements, c, b, m, s)) counts.add(popcount(L));
    }
    return [...counts].sort((a, b) => a - b);
  }

  // 이 세계에서 틀린 말이 적힌 카드(이름표 기준), 말한 사람 순서로.
  function falseCards(p, w) {
    return p.speakers.filter((x, i) => w.F & (1 << i));
  }

  // ---- 아주 어려움: 세계 = 범인 c, 역할 문자열 roles(H 정직 / L 거짓말쟁이 / T 트롤러), 전해 들은 말이 정말 있었는가 h ----

  function contentVH(st, me, c, role, heard) {
    const [kind, args] = st;
    switch (kind) {
      case "role_is": return role[args[0]] === args[1];
      case "culprit_role": return role[c] === args[0];
      case "count_is": return Object.values(role).filter((r) => r === args[0]).length === args[1];
      case "vision": return args.includes(c);
      case "alibi": return !args.includes(c);
      case "hearsay": return heard[args[0]];          // args[0] 이 정말 그 말을 했다
    }
    return content(st, me, me, c, null, null);
  }

  const fits = (r, t) => r === "T" || (r === "H") === t;     // 역할 r 인 사람이 맞고 틀림 t 인 말을 할 수 있는가

  function rolesOk(p, roles) {
    const count = (r) => roles.split("").filter((x) => x === r).length;
    if (p.mode === "shown") return count("L") === p.n && count("T") === p.t;
    return count("H") * 2 > roles.length;           // 수를 숨긴 판: 정직한 사람이 과반
  }

  // 전해 들은 말들: [{ by: 전한 사람, who: 잘 안 들린 사람, st: 그 사람이 했다는 말 }]
  function reports(p) {
    const out = [];
    for (const x of p.speakers) for (const [kind, args] of p.statements[x]) {
      if (kind === "hearsay") out.push({ by: x, who: args[0], st: args[1] });
    }
    return out;
  }

  function allRoles(k) {
    let out = [""];
    for (let i = 0; i < k; i++) out = out.flatMap((r) => ["H", "L", "T"].map((x) => r + x));
    return out;
  }

  function worldsVH(p) {
    const sp = p.speakers, st = p.statements;
    const rep = reports(p);
    const roleSets = allRoles(sp.length).filter((r) => rolesOk(p, r));
    const out = [];
    for (const c of sp) {
      for (const roles of roleSets) {
        const role = Object.fromEntries(sp.map((x, i) => [x, roles[i]]));
        for (let g = 0; g < 1 << rep.length; g++) {
          const h = rep.map((_, i) => !(g & (1 << i)));
          const heard = Object.fromEntries(rep.map((q, i) => [q.who, h[i]]));
          if (sp.every((x) => st[x].every((q) => fits(role[x], contentVH(q, x, c, role, heard))))
              && rep.every((q, i) => !h[i] || fits(role[q.who], contentVH(q.st, q.who, c, role, heard)))) {
            out.push({ c, roles, h });
          }
        }
      }
    }
    return out;
  }

  function randomStatementVH(r, me, speakers, hidden, heard) {
    const others = speakers.filter((s) => s !== me);
    let kinds = ["accuse", "culprit_is", "deny", "deny_self", "either", "self_or", "role_is", "role_is", "culprit_role"];
    if (hidden && !heard) kinds.push("count_is");
    if (me === "nanoka" && !heard) kinds = kinds.concat(["vision", "vision"]);
    if (me === "coco" && !heard) kinds = kinds.concat(["alibi", "alibi"]);
    const kind = r.choice(kinds);
    if (kind === "deny_self") return [kind, []];
    if (kind === "either" || kind === "alibi") return [kind, r.sample(others, 2).sort()];
    if (kind === "vision") return [kind, r.sample(others, 3).sort()];
    if (kind === "role_is") return [kind, [r.choice(others), r.choice(["H", "L", "T"])]];
    if (kind === "culprit_role") return [kind, [r.choice(["H", "L", "T"])]];
    if (kind === "count_is") return [kind, [r.choice(["L", "T"]), r.choice([0, 1, 2])]];
    return [kind, [r.choice(others)]];
  }

  // 논리 퍼즐 → 세계 계산용 모양
  const problem = (q) => ({ speakers: q.speakers, statements: q.logic, n: q.n, magic: q.magic_ids, t: q.t, mode: q.mode });

  const properSubsets = (magic) => magic.length === 2 ? [[], [magic[0]], [magic[1]]] : magic.length === 1 ? [[]] : [];

  function solvesWithout(p, culprit, rest) {
    const plain = worlds({ ...p, magic: rest });
    return new Set(plain.map((w) => w.c)).size === 1 && plain[0].c === culprit;
  }

  const cardKey = (sts) => JSON.stringify(sts);

  function* makeStepsVH(tier, seed, maxTries) {
    const spec = G.tiers.veryhard;
    const r = makeRng(seed);
    const mode = r.choice(spec.modes);
    const hidden = mode === "hidden";
    for (let t = 0; t < maxTries; t++) {
      if (t % 40 === 39) yield null;
      const k = r.choice(spec.sizes);
      const inc = r.choice(G.incidents);
      const speakers = r.sample(G.people.filter((x) => x !== inc.owner), k);
      const n = hidden ? null : r.choice(spec.ns);
      const tc = hidden ? null : r.choice(spec.ts);
      const statements = {};
      for (const s of speakers) {
        const m = r.next() < spec.two ? 2 : 1;
        statements[s] = [];
        for (let i = 0; i < m; i++) statements[s].push(randomStatementVH(r, s, speakers, hidden, false));
      }
      if (r.next() < spec.hearsay) {
        const a = r.choice(speakers.filter((x) => x !== "anan"));       // 안안은 필담이라 안 들릴 일이 없다
        const b = r.choice(speakers.filter((x) => x !== a));
        const q = ["hearsay", [a, randomStatementVH(r, a, speakers, hidden, true)]];
        statements[a] = [];
        statements[b] = r.next() < 0.5 ? [q] : statements[b].slice(0, 1).concat([q]);
      }
      const cards = speakers.filter((s) => statements[s].length).map((s) => cardKey(statements[s]));
      if (new Set(cards).size < cards.length) continue;
      if (speakers.reduce((a, s) => a + statements[s].filter((q) => VH_KINDS.includes(q[0])).length, 0) < 2) continue;
      const p = { speakers, statements, n, t: tc, mode, magic: [] };
      const ws = worldsVH(p);
      if (!ws.length || new Set(ws.map((w) => w.c)).size !== 1) continue;
      const id = `random-${tier}-${seed}`;
      return {
        id, key: id, tier, seed, incident: inc.id, n, t: tc, mode, speakers: speakers.slice(),
        logic: JSON.parse(JSON.stringify(statements)), magic_ids: [], answer: ws[0].c, worlds: ws.length,
      };
    }
    return null;
  }

  // 무작위 퍼즐 하나. 같은 (tier, seed)면 같은 퍼즐. 조건을 만족하는 것이 안 나오면 null.
  // 시도를 조금씩 나눠 할 수 있게 생성기로 쓴다(어려운 조합은 수천 번 시도해 화면이 멈출 수 있다).
  function* makeSteps(tier, seed, maxTries = 20000) {
    if (tier === "veryhard") return yield* makeStepsVH(tier, seed, maxTries);
    const spec = G.tiers[tier];
    const r = makeRng(seed);
    const magic = r.choice(spec.magics);    // 마법 조합을 먼저 정한다(조합마다 통과율이 달라 시도마다 고르면 안안만 많이 나온다)
    for (let t = 0; t < maxTries; t++) {
      if (t % 40 === 39) yield null;
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
        let iam = null;
        if (magic.includes("miria") && r.next() < G.iam_p) {      // 「사실 나는 ○○다」 + 다른 말 하나
          iam = s !== "miria" ? "miria" : r.choice(speakers.filter((y) => y !== "miria"));
        }
        const st = randomStatement(r, s, speakers, metas < spec.max_meta, magic.includes("miria") && iam === null, iam ? [iam] : []);
        if (st[0].startsWith("meta")) metas++;
        statements[s] = iam ? [["iam", [iam]], st] : [st];
      }
      if (new Set(speakers.map((s) => cardKey(statements[s]))).size < k) continue;
      const p = { speakers, statements, n, magic };
      const ws = worlds(p);
      if (!ws.length || new Set(ws.map((w) => w.c)).size !== 1) continue;
      if (new Set(ws.map((w) => falseCards(p, w).join(","))).size !== 1) continue;
      // 마법(의 일부)을 무시해도 같은 답이면 그 마법은 쓰이지 않은 것이다
      if (properSubsets(magic).some((rest) => solvesWithout(p, ws[0].c, rest))) continue;
      const id = `random-${tier}-${seed}`;
      return {
        id, key: id, tier, seed, incident: inc.id, n, speakers: speakers.slice(),
        logic: JSON.parse(JSON.stringify(statements)),
        magic_ids: magic.slice(), answer: ws[0].c, false_cards: falseCards(p, ws[0]), worlds: ws.length,
      };
    }
    return null;
  }

  function make(tier, seed, maxTries) {
    const it = makeSteps(tier, seed, maxTries);
    let r;
    do { r = it.next(); } while (!r.done);
    return r.value;
  }

  // 화면용: 30ms 씩 나눠 만들고 사이사이 화면에 양보한다.
  function makeAsync(tier, seed) {
    return new Promise((resolve) => {
      const it = makeSteps(tier, seed);
      const step = () => {
        const t0 = Date.now();
        let r;
        do { r = it.next(); } while (!r.done && Date.now() - t0 < 30);
        if (r.done) resolve(r.value); else setTimeout(step, 0);
      };
      step();
    });
  }

  root.TrialCore = { make, makeAsync, worlds, liarCounts, falseCards, problem, content, voiceOf, soulIn, reports };
})(typeof window !== "undefined" ? window : globalThis);
