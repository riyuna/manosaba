// 「감옥저택의 번외재판」 논리 핵심: 세계 계산과 무작위 재판 생성. 글자는 하나도 없다(언어 팩 web/lang/*.js 가 맡는다).
// tools/gen_puzzles.py 의 규칙을 그대로 옮긴 것이다. 규칙을 고치면 두 파일을 같이 고칠 것(tests/test_puzzles.py 가 대조한다).
// 퍼즐(논리) = { id, key, tier, incident(사건 id), n, t, mode, speakers, logic{카드: [[kind, args], …]}, magic_ids,
//               answer, false_says(틀린 말 칸 이름들, 정해지지 않으면 null), worlds }
// 난이도는 같은 규칙 위의 설정(gen.tiers) 차이다. 역할: H 정직 / L 거짓말쟁이 / T 변덕쟁이.
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

  // x 카드의 말 st 의 내용이 맞는가. me: 말 속의 "나" = 그 말을 한 사람(뒤바뀌었으면 x 몸에 든 사람, 흉내면 흉내 낸 대상),
  // w: { c, role, s, heard, truth(y) → y 카드 말들의 맞고 틀림 }. 2026-10-21 사용자 방침: 사람 기준(범행은 뒤바뀌기 전).
  function content(st, x, me, w) {
    const [kind, args] = st;
    const c = w.c;
    switch (kind) {
      case "accuse": case "culprit_is": return c === args[0];
      case "deny": return c !== args[0];
      case "deny_self": return c !== me;
      case "either": return args.includes(c);
      case "self_or": return c === me || c === args[0];
      case "meta_false": return !w.truth(soulIn(args[0], w.s)).some((v) => v);    // 그 사람의 말(그 사람이 든 몸의 카드)이 전부 틀렸다
      case "meta_true": return w.truth(soulIn(args[0], w.s)).every((v) => v);     // 그 사람의 말이 전부 맞다
      case "swap_claim": return w.s === args[0];          // (남이 하는 말) 미리아와 args[0] 의 영혼이 뒤바뀌어 있다
      case "iam": return soulIn(x, w.s) === args[0];      // 이 몸(x)에 든 영혼은 사실 args[0] 이다
      case "swap_deny": return soulIn(x, w.s) === x;      // 이 몸의 영혼은 몸 주인 그대로다
      case "role_is": return w.role[args[0]] === args[1];
      case "culprit_role": return w.role[c] === args[0];
      case "count_is": return Object.values(w.role).filter((r) => r === args[0]).length === args[1];
      case "vision": return args.includes(c);             // 환시: 범인은 이 중 하나
      case "alibi": return !args.includes(c) && c !== me; // 천리안: 말에 나온 사람들과 방송 중이던 코코(나)는 범인이 아니다
      case "hearsay": return w.heard[args[0]];            // args[0] 이 정말 그 말을 했다
    }
    throw new Error(kind);
  }

  // me 카드의 말 하나. pair: 미리아와 뒤바뀜 이야기가 나오는 상대(그 둘 말고 남이 하는 「둘은 바뀌어 있다」만 여기서 나온다),
  // avoid: 말에 이름으로 넣지 않을 사람, heard: 전해 들은 말 속에 들어갈 말.
  function randomStatement(r, me, speakers, spec, metaOk, pair, avoid, hidden, heard) {
    const others = speakers.filter((s) => s !== me && !avoid.includes(s));
    let kinds = ["accuse", "culprit_is", "deny", "deny_self", "either", "self_or"];
    if (metaOk && !heard) kinds = kinds.concat(["meta_false", "meta_true"]);
    if (pair && me !== "miria" && me !== pair && !heard) kinds = kinds.concat(["swap_claim"]);
    if (spec.roles) kinds = kinds.concat(["role_is", "role_is", "culprit_role"], hidden && !heard ? ["count_is"] : []);
    if (spec.testimony && !heard && !avoid.length && !(pair && (me === "miria" || me === pair))) kinds = kinds.concat({ nanoka: ["vision", "vision"], coco: ["alibi", "alibi"] }[me] || []);
    const kind = r.choice(kinds);
    if (kind === "deny_self") return [kind, []];
    if (kind === "either" || kind === "alibi") return [kind, r.sample(others, 2).sort()];
    if (kind === "vision") return [kind, r.sample(others, 3).sort()];
    if (kind === "swap_claim") return [kind, [pair]];   // 거짓 주장도 된다
    if (kind === "role_is") return [kind, [r.choice(others), r.choice(["H", "L", "T"])]];
    if (kind === "culprit_role") return [kind, [r.choice(["H", "L", "T"])]];
    if (kind === "count_is") return [kind, [r.choice(["L", "T"]), r.choice([0, 1, 2])]];
    if (kind.startsWith("meta") && pair) {     // 「○○의 말」이 뒤바뀜 두 사람을 가리키면 어느 카드인지 헷갈린다
      const targets = others.filter((o) => o !== "miria" && o !== pair);
      return targets.length ? [kind, [r.choice(targets)]] : ["deny_self", []];
    }
    return [kind, [r.choice(others)]];
  }

  // ---- 세계 = { c 범인, roles 역할 문자열(말한 사람 순서), m 흉내 대상, s 미리아와 뒤바뀐 사람, heard 전해 들은 말이 정말 있었나, F 틀린 말 칸 이름들 } ----
  // p = { tier, speakers, statements, n, t, mode, magic }

  // 뒤바뀜 이야기가 나오는 미리아의 상대. 미리아가 정말 바뀌어 있다면 상대는 이 사람뿐이다(2026-10-21). 없으면 null.
  function swapPair(p) {
    for (const x of p.speakers) for (const [kind, args] of p.statements[x]) {
      if ((kind === "iam" || kind === "swap_deny") && x !== "miria") return x;
      if (kind === "swap_claim") return args[0];
    }
    return null;
  }

  // x 카드의 말을 실제로 한 사람: 마고가 흉내 냈으면 마고, 미리아와 뒤바뀌었으면 그 몸에 든 사람.
  const speaker = (x, m, s) => (x === m ? "margo" : soulIn(x, s));

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
        if (count(roles, "T") !== p.t + (anan ? 1 : 0)) return false;    // 따로 있는 변덕쟁이 + 세뇌당한 한 명
      } else if (!p.relax && count(roles, "H") * 2 <= sp.length) return false;     // 수를 숨긴 판: 정직한 사람이 과반(relax: 해설용으로 안 따짐)
      if (anan && !sp.some((x, i) => roles[i] === "T" && x !== "anan")) return false;   // 안안은 자기를 세뇌하지 않는다
      return true;
    });
  }

  function* bits(k) {
    for (let g = 0; g < 1 << k; g++) yield Array.from({ length: k }, (_, i) => !(g & (1 << i)));
  }

  function worlds(p) {
    const sp = p.speakers, st = p.statements, magic = p.magic;
    const rep = reports(p);
    const hasMeta = sp.some((x) => st[x].some((q) => q[0].startsWith("meta")));
    const slots = sp.flatMap((x) => st[x].map((_, i) => [x, i]));
    const mimic = magic.includes("margo") ? sp.filter((x) => x !== "margo" && x !== "anan" && st[x].length) : [];   // 안안은 필담
    const pair = swapPair(p);
    const ss = magic.includes("miria") ? (pair ? [null, pair] : [null].concat(sp.filter((x) => x !== "miria"))) : [null];
    const out = [];
    for (const roles of roleSets(p)) {
      const role = Object.fromEntries(sp.map((x, i) => [x, roles[i]]));
      // 흉내당한 사람은 말을 안 했으니 정직한 사람으로 센다
      for (const m of [null].concat(mimic.filter((x) => role[x] === "H"))) {
        for (const s of ss) {
          // 카드의 맞고 틀림은 그 말을 실제로 한 사람의 역할대로(흉내면 마고, 뒤바뀌었으면 그 몸에 든 사람)
          const rOf = Object.fromEntries(sp.map((x) => [x, role[speaker(x, m, s)]]));
          const me = Object.fromEntries(sp.map((x) => [x, soulIn(x, s)]));
          const trolls = hasMeta ? slots.filter(([x]) => rOf[x] === "T") : [];
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
                  const v = content(st[x][i], x, me[x], w);
                  const id = slotId(x, i);
                  if (tv.get(id) === null) tv.set(id, v);      // 변덕쟁이의 말(말에 대한 말이 없는 판): 내용이 곧 맞고 틀림
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

  // 카드마다 그 카드의 말을 실제로 한 사람(흉내면 마고, 뒤바뀌었으면 그 몸에 든 사람)의 역할. 하나로 안 정해지면 null.
  function cardRoles(p, ws) {
    const sp = p.speakers;
    const out = {};
    for (const x of sp) {
      const rs = new Set(ws.map((w) => w.roles[sp.indexOf(speaker(x, w.m, w.s))]));
      if (rs.size !== 1) return null;
      out[x] = [...rs][0];
    }
    return out;
  }

  // 세계 w 에서 마법 mg 가 실제로 걸렸나. 세뇌는 늘 걸린다.
  const magicActive = (w, mg) => mg === "anan" || (mg === "margo" && w.m !== null) || (mg === "miria" && w.s !== null);

  // 마법마다 실제로 걸렸나: true(모든 세계에서 걸림) / false(모든 세계에서 안 걸림) / null(말만으로는 모름).
  function magicUse(p, ws) {
    const out = {};
    for (const mg of p.magic) {
      const act = new Set(ws.map((w) => magicActive(w, mg)));
      out[mg] = act.size === 1 ? [...act][0] : null;
    }
    return out;
  }

  // 마법이 퍼즐에 맞게 쓰였는가. 걸렸는지 아닌지는 말들로 하나로 정해져야 하고, 실제로 걸린 마법은 빼면(같이 빼도)
  // 같은 답이 하나로 나오지 않아야 한다. 실제로는 안 걸린 마법은 「걸렸을지도 모른다」를 지워야 하는 함정이다.
  function magicOk(p, ws) {
    const use = magicUse(p, ws);
    if (Object.values(use).includes(null)) return false;
    const used = p.magic.filter((mg) => use[mg]);
    return !properSubsets(p.magic).some((rest) => used.some((mg) => !rest.includes(mg)) && solvesWithout(p, ws[0].c, rest));
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
    // 흉내·뒤바뀜을 실제로 걸 판인지 먼저 정한다. 마고가 흉내를 안 낸 판은 보통·어려움의 마고 단독에서만
    // (안안+마고는 거의 안 만들어지고, 아주 어려움은 한 문제에 최대 19초 걸렸다)
    const want = Object.fromEntries(magic.map((mg) => [mg,
      mg === "anan" || (mg === "margo" && (magic.includes("anan") || tier === "veryhard")) || r.next() < G.use_p]));
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
      // 미리아: 뒤바뀜 이야기가 나오는 상대 하나. 미리아와 그 상대는 둘 다 뒤바뀜에 대해 한마디씩 한다(2026-10-21 사용자)
      const pair = magic.includes("miria") ? r.choice(speakers.filter((y) => y !== "miria")) : null;
      const statements = {};
      let metas = 0;
      for (const s of speakers) {
        let swap = null;
        if (pair && (s === "miria" || s === pair)) {      // 「사실 나는 ○○다」(주장) 또는 「내가 진짜 ○○다」(부정) + 다른 말 하나
          swap = r.next() < G.claim_p ? ["iam", [s === "miria" ? pair : "miria"]] : ["swap_deny", []];
        }
        const claimed = swap && swap[0] === "iam" ? swap[1] : [];
        const sts = [];
        const m = swap || r.next() >= spec.two ? 1 : 2;
        for (let i = 0; i < m; i++) {
          const q = randomStatement(r, s, speakers, spec, metas < spec.meta, pair, claimed, hidden, false);
          if (q[0].startsWith("meta")) metas++;
          sts.push(q);
        }
        statements[s] = (swap ? [swap] : []).concat(sts);
      }
      if (r.next() < spec.hearsay) {
        const a = r.choice(speakers.filter((x) => x !== "anan" && x !== "miria" && x !== pair));   // 안안은 필담. 뒤바뀜 두 사람은 말이 있어야 한다
        const b = r.choice(speakers.filter((x) => x !== a));
        const q = ["hearsay", [a, randomStatement(r, a, speakers, spec, false, null, [], hidden, true)]];
        statements[a] = [];
        const keep = r.next() < 0.5 || b === "miria" || b === pair;
        statements[b] = keep ? statements[b].slice(0, 1).concat([q]) : [q];
      }
      const cards = speakers.filter((s) => statements[s].length).map((s) => cardKey(statements[s]));
      if (new Set(cards).size < cards.length) continue;    // 같은 카드가 두 번 나오면 밋밋하다
      if (spec.roles && speakers.reduce((a, s) => a + statements[s].filter((q) => VH_KINDS.includes(q[0])).length, 0) < 2) continue;
      const p = { tier, speakers, statements, n, t: tc, mode, magic };
      const ws = worlds(p);
      if (!ws.length || new Set(ws.map((w) => w.c)).size !== 1) continue;
      if (spec.unique_false && falseSays(ws) === null) continue;
      if (spec.unique_roles && cardRoles(p, ws) === null) continue;    // 아주 어려움: 카드마다 역할도 하나로 정해져야 판결할 수 있다
      const use = magicUse(p, ws);
      if (magic.some((mg) => use[mg] !== want[mg]) || !magicOk(p, ws)) continue;     // 정한 대로 걸리지(안 걸리지) 않았거나 마법이 쓰이지 않는다
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

  root.TrialCore = { make, makeAsync, worlds, liarCounts, falseSays, cardRoles, problem, content, voiceOf, soulIn, swapPair, reports, slotId };
})(typeof window !== "undefined" ? window : globalThis);
