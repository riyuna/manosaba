// 「감옥저택의 번외재판」 논리 핵심: 세계 계산과 무작위 재판 생성. 글자는 하나도 없다(언어 팩 web/lang/*.js 가 맡는다).
// tools/gen_puzzles.py 의 규칙을 그대로 옮긴 것이다. 규칙을 고치면 두 파일을 같이 고칠 것(tests/test_puzzles.py 가 대조한다).
// 퍼즐(논리) = { id, key, tier, incident(사건 id), n, t, mode, speakers, logic{카드: [[kind, args], …]}, magic_ids,
//               answer, false_says(틀린 말 칸 이름들, 정해지지 않으면 null), worlds }
// 난이도는 같은 규칙 위의 설정(gen.tiers) 차이다. 역할: H 정직 / L 거짓말쟁이 / T 트롤러.
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

  const VH_KINDS = ["role_is", "culprit_role", "count_is", "hearsay", "vision", "alibi"];    // 아주 어려움다운 말

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

  // 말 하나의 이름: 카드의 첫 말은 카드 이름, 두 번째 말은 「이름#2」(수첩 칸과 같다).
  const slotId = (x, i) => (i === 0 ? x : `${x}#${i + 1}`);

  // x 카드의 말 st 의 내용이 맞는가. me: 말 속의 "나", w: { c, role, s, heard, truth(y) → y 카드 말들의 맞고 틀림 }
  function content(st, x, me, w) {
    const [kind, args] = st;
    const c = w.c;
    switch (kind) {
      case "accuse": case "culprit_is": return c === args[0];
      case "deny": return c !== args[0];
      case "deny_self": return c !== me;
      case "either": return args.includes(c);
      case "self_or": return c === me || c === args[0];
      case "meta_false": return !w.truth(args[0]).some((v) => v);    // 그 카드의 말이 전부 틀렸다
      case "meta_true": return w.truth(args[0]).every((v) => v);     // 그 카드의 말이 전부 맞다
      case "swap_claim": return w.s === args[0];          // (남이 하는 말) 미리아와 args[0] 의 영혼이 뒤바뀌어 있다
      case "iam": return soulIn(x, w.s) === args[0];      // 이 몸(x)에 든 영혼은 사실 args[0] 이다
      case "swap_deny": return soulIn(x, w.s) === x;      // 이 몸의 영혼은 몸 주인 그대로다
      case "role_is": return w.role[args[0]] === args[1];
      case "culprit_role": return w.role[c] === args[0];
      case "count_is": return Object.values(w.role).filter((r) => r === args[0]).length === args[1];
      case "vision": return args.includes(c);             // 환시: 범인은 이 중 하나
      case "alibi": return !args.includes(c);             // 천리안: 이 사람들은 다른 곳에 있었다
      case "hearsay": return w.heard[args[0]];            // args[0] 이 정말 그 말을 했다
    }
    throw new Error(kind);
  }

  // me 카드의 말 하나. avoid: 말에 이름으로 넣지 않을 사람, heard: 전해 들은 말 속에 들어갈 말.
  function randomStatement(r, me, speakers, spec, metaOk, swapOk, avoid, hidden, heard) {
    const others = speakers.filter((s) => s !== me && !avoid.includes(s));
    let kinds = ["accuse", "culprit_is", "deny", "deny_self", "either", "self_or"];
    if (metaOk && !heard) kinds = kinds.concat(["meta_false", "meta_true"]);
    if (swapOk && !heard) kinds = kinds.concat(me === "miria" ? ["swap_deny"] : ["swap_claim", "swap_deny"]);
    if (spec.roles) kinds = kinds.concat(["role_is", "role_is", "culprit_role"], hidden && !heard ? ["count_is"] : []);
    if (spec.testimony && !heard) kinds = kinds.concat({ nanoka: ["vision", "vision"], coco: ["alibi", "alibi"] }[me] || []);
    const kind = r.choice(kinds);
    if (kind === "deny_self" || kind === "swap_deny") return [kind, []];
    if (kind === "either" || kind === "alibi") return [kind, r.sample(others, 2).sort()];
    if (kind === "vision") return [kind, r.sample(others, 3).sort()];
    if (kind === "swap_claim") return [kind, [r.choice(speakers.filter((x) => x !== "miria" && x !== me))]];   // 거짓 주장도 된다
    if (kind === "role_is") return [kind, [r.choice(others), r.choice(["H", "L", "T"])]];
    if (kind === "culprit_role") return [kind, [r.choice(["H", "L", "T"])]];
    if (kind === "count_is") return [kind, [r.choice(["L", "T"]), r.choice([0, 1, 2])]];
    return [kind, [r.choice(others)]];
  }

  // ---- 세계 = { c 범인, roles 역할 문자열(말한 사람 순서), m 흉내 대상, s 미리아와 뒤바뀐 사람, heard 전해 들은 말이 정말 있었나, F 틀린 말 칸 이름들 } ----
  // p = { tier, speakers, statements, n, t, mode, magic }

  // x 이름으로 나온 말을 실제로 한 사람. 마고의 흉내만 바꾼다(뒤바뀜은 몸 기준이라 그대로).
  const speaker = (x, m) => (x === m ? "margo" : x);

  // 전해 들은 말들: [{ by: 전한 사람, who: 잘 안 들린 사람, st: 그 사람이 했다는 말 }]
  function reports(p) {
    const out = [];
    for (const x of p.speakers) for (const [kind, args] of p.statements[x]) {
      if (kind === "hearsay") out.push({ by: x, who: args[0], st: args[1] });
    }
    return out;
  }

  // 수·과반·세뇌 규칙에 맞는 역할 문자열. n 이 null 이면 거짓말쟁이 수는 따지지 않는다(오답 해설용).
  function roleSets(p) {
    const sp = p.speakers;
    const anan = p.magic.includes("anan");
    let all = [""];
    for (let i = 0; i < sp.length; i++) all = all.flatMap((r) => [r + "H", r + "L", r + "T"]);
    const count = (roles, r) => roles.split("").filter((x) => x === r).length;
    return all.filter((roles) => {
      if (p.mode === "shown") {
        if (p.n !== null && count(roles, "L") !== p.n) return false;
        if (count(roles, "T") !== p.t + (anan ? 1 : 0)) return false;    // 따로 있는 트롤러 + 세뇌당한 한 명
      } else if (count(roles, "H") * 2 <= sp.length) return false;     // 수를 숨긴 판: 정직한 사람이 과반
      if (anan && !sp.some((x, i) => roles[i] === "T" && x !== "anan")) return false;   // 안안은 자기를 세뇌하지 않는다
      return true;
    });
  }

  function* bits(k) {
    for (let g = 0; g < 1 << k; g++) yield Array.from({ length: k }, (_, i) => !(g & (1 << i)));
  }

  function worlds(p) {
    const sp = p.speakers, st = p.statements, magic = p.magic;
    const voice = Object.fromEntries(sp.map((x) => [x, voiceOf(st[x], x)]));
    const rep = reports(p);
    const hasMeta = sp.some((x) => st[x].some((q) => q[0].startsWith("meta")));
    const slots = sp.flatMap((x) => st[x].map((_, i) => [x, i]));
    const mimic = magic.includes("margo") ? sp.filter((x) => x !== "margo" && x !== "anan" && st[x].length) : [];   // 안안은 필담
    const ss = magic.includes("miria") ? [null].concat(sp.filter((x) => x !== "miria")) : [null];
    const out = [];
    for (const roles of roleSets(p)) {
      const role = Object.fromEntries(sp.map((x, i) => [x, roles[i]]));
      // 흉내당한 사람은 말을 안 했으니 정직한 사람으로 센다
      for (const m of [null].concat(mimic.filter((x) => role[x] === "H"))) {
        const rOf = Object.fromEntries(sp.map((x) => [x, role[speaker(x, m)]]));
        const trolls = hasMeta ? slots.filter(([x]) => rOf[x] === "T") : [];
        for (const s of ss) {
          // 정직한 사람은 자기 영혼의 말투로 말한다(흉내 낸 카드는 마고의 연기라 빼고)
          if (!sp.every((x) => rOf[x] !== "H" || x === m || !st[x].length || soulIn(x, s) === voice[x])) continue;
          for (const c of sp) {
            for (const h of bits(rep.length)) {
              const heard = Object.fromEntries(rep.map((q, i) => [q.who, h[i]]));
              for (const guess of bits(trolls.length)) {
                const tv = new Map();
                const tg = new Map(trolls.map(([x, i], k) => [slotId(x, i), guess[k]]));
                for (const [x, i] of slots) {
                  const r = rOf[x];
                  tv.set(slotId(x, i), r === "H" ? true : r === "L" ? false : tg.has(slotId(x, i)) ? tg.get(slotId(x, i)) : null);
                }
                const w = { c, role, s, heard, truth: (y) => st[y].map((_, i) => tv.get(slotId(y, i))) };
                let ok = true;
                for (const [x, i] of slots) {
                  const v = content(st[x][i], x, voice[x], w);
                  const id = slotId(x, i);
                  if (tv.get(id) === null) tv.set(id, v);      // 트롤러의 말(말에 대한 말이 없는 판): 내용이 곧 맞고 틀림
                  else if (v !== tv.get(id)) { ok = false; break; }
                }
                if (!ok) continue;
                // 정말 그 말을 했다면, 그 말의 맞고 틀림은 원래 말한 사람의 역할대로
                if (!rep.every((q) => !heard[q.who] || role[q.who] === "T" || (role[q.who] === "H") === content(q.st, q.who, q.who, w))) continue;
                const F = slots.map(([x, i]) => slotId(x, i)).filter((id) => !tv.get(id));
                out.push({ c, roles, m, s, heard: h, F });
              }
            }
          }
        }
      }
    }
    return out;
  }

  // c 가 범인이라고 가정했을 때 가능한 거짓말쟁이 수들(오름차순). 빈 배열이면 말들이 어긋난다.
  function liarCounts(p, c) {
    const counts = new Set(worlds({ ...p, n: null }).filter((w) => w.c === c).map((w) => w.roles.split("").filter((r) => r === "L").length));
    return [...counts].sort((a, b) => a - b);
  }

  // 틀린 말(칸 이름)이 하나로 정해지면 그 배열, 아니면 null.
  function falseSays(ws) {
    const keys = new Set(ws.map((w) => w.F.join(",")));
    return keys.size === 1 ? ws[0].F.slice() : null;
  }

  // 논리 퍼즐 → 세계 계산용 모양
  const problem = (q) => ({ tier: q.tier, speakers: q.speakers, statements: q.logic, n: q.n, t: q.t, mode: q.mode, magic: q.magic_ids });

  function properSubsets(magic) {
    return magic.length === 2 ? [[], [magic[0]], [magic[1]]] : magic.length === 1 ? [[]] : [];
  }

  function solvesWithout(p, culprit, rest) {
    const plain = worlds({ ...p, magic: rest });
    return new Set(plain.map((w) => w.c)).size === 1 && plain[0].c === culprit;
  }

  const cardKey = (sts) => JSON.stringify(sts);

  // 무작위 퍼즐 하나. 같은 (tier, seed)면 같은 퍼즐. 조건을 만족하는 것이 안 나오면 null.
  // 시도를 조금씩 나눠 할 수 있게 생성기로 쓴다(어려운 조합은 수천 번 시도해 화면이 멈출 수 있다).
  function* makeSteps(tier, seed, maxTries = 20000) {
    const spec = G.tiers[tier];
    const r = makeRng(seed);
    const magic = r.choice(spec.magics);    // 마법 조합을 먼저 정한다(조합마다 통과율이 달라 시도마다 고르면 쉬운 조합만 많이 나온다)
    const mode = r.choice(spec.modes);
    const hidden = mode === "hidden";
    for (let t = 0; t < maxTries; t++) {
      if (t % 40 === 39) yield null;
      const k = r.choice(spec.sizes);
      const inc = r.choice(G.incidents);
      if (magic.includes(inc.owner)) continue;    // 피해자는 용의자가 아니다
      const pool = G.people.filter((x) => x !== inc.owner && !magic.includes(x));
      if (pool.length < k - magic.length) continue;
      const speakers = r.shuffle(magic.concat(r.sample(pool, k - magic.length)));
      const n = hidden ? null : r.choice(spec.ns);
      const tc = hidden ? null : r.choice(spec.ts);
      const statements = {};
      let metas = 0;
      for (const s of speakers) {
        let iam = null;
        if (magic.includes("miria") && r.next() < G.iam_p) {      // 「사실 나는 ○○다」 + 다른 말 하나
          iam = s !== "miria" ? "miria" : r.choice(speakers.filter((y) => y !== "miria"));
        }
        const sts = [];
        const m = iam || r.next() >= spec.two ? 1 : 2;
        for (let i = 0; i < m; i++) {
          const q = randomStatement(r, s, speakers, spec, metas < spec.meta, magic.includes("miria") && iam === null, iam ? [iam] : [], hidden, false);
          if (q[0].startsWith("meta")) metas++;
          sts.push(q);
        }
        statements[s] = (iam ? [["iam", [iam]]] : []).concat(sts);
      }
      if (r.next() < spec.hearsay) {
        const a = r.choice(speakers.filter((x) => x !== "anan"));       // 안안은 필담이라 안 들릴 일이 없다
        const b = r.choice(speakers.filter((x) => x !== a));
        const q = ["hearsay", [a, randomStatement(r, a, speakers, spec, false, false, [], hidden, true)]];
        statements[a] = [];
        const keep = r.next() < 0.5 || statements[b][0][0] === "iam";
        statements[b] = keep ? statements[b].slice(0, 1).concat([q]) : [q];
      }
      const cards = speakers.filter((s) => statements[s].length).map((s) => cardKey(statements[s]));
      if (new Set(cards).size < cards.length) continue;    // 같은 카드가 두 번 나오면 밋밋하다
      if (spec.roles && speakers.reduce((a, s) => a + statements[s].filter((q) => VH_KINDS.includes(q[0])).length, 0) < 2) continue;
      const p = { tier, speakers, statements, n, t: tc, mode, magic };
      const ws = worlds(p);
      if (!ws.length || new Set(ws.map((w) => w.c)).size !== 1) continue;
      if (spec.unique_false && falseSays(ws) === null) continue;
      // 마법(의 일부)을 무시해도 같은 답이면 그 마법은 쓰이지 않은 것이다
      if (properSubsets(magic).some((rest) => solvesWithout(p, ws[0].c, rest))) continue;
      const id = `random-${tier}-${seed}`;
      return {
        id, key: id, tier, seed, incident: inc.id, n, t: tc, mode, speakers: speakers.slice(),
        logic: JSON.parse(JSON.stringify(statements)), magic_ids: magic.slice(), answer: ws[0].c,
        false_says: falseSays(ws), worlds: ws.length,
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

  root.TrialCore = { make, makeAsync, worlds, liarCounts, falseSays, problem, content, voiceOf, soulIn, reports, slotId };
})(typeof window !== "undefined" ? window : globalThis);
