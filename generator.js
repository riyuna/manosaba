// 「작은 재판」 무작위 재판 생성기. tools/gen_puzzles.py 의 규칙을 JS로 옮긴 것이다.
// 데이터(이름·사건·마법·난이도)는 puzzles.js 의 gen 에서 읽는다. 규칙을 고치면 두 파일을 같이 고칠 것.
// 퍼즐로 내는 조건도 같다: 범인이 하나, 틀린 카드도 하나로 정해지고, 마법이 있으면 마법을 빼고는 같은 답이 안 나온다.
// 검산: node tools/sample_random.js > out.json && python tools/check_puzzles.py --file out.json
(function (root) {
  "use strict";
  const G = root.PUZZLES.gen;
  const NAMES = G.names;

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

  const j = (w, a, b) => {
    const c = w.charCodeAt(w.length - 1);
    return w + (c >= 0xac00 && c <= 0xd7a3 && (c - 0xac00) % 28 ? a : b);
  };

  // ---- 말투 (docs/voices.md). 자료는 gen_puzzles.py 의 VOICES·FULL_NAMES ----
  // 말은 카드에 적힌 사람의 말투로 쓴다(흉내·뒤바뀜 모두 상대인 척 말한다).

  const V = G.voices;
  const FULL = G.full_names;
  const batchim = (w) => { const c = w.charCodeAt(w.length - 1); return c >= 0xac00 && c <= 0xd7a3 && (c - 0xac00) % 28 !== 0; };

  // 반말 해체 서술어(…어/…아)를 말투에 맞게.
  function conj(pred, style) {
    if (style === "ban") return pred;
    if (style === "haeyo") return pred + "요";
    if (style === "nora" && (pred === "맞아" || pred === "틀렸어")) return pred === "맞아" ? "옳도다" : "그릇되었도다";
    return pred.slice(0, -1) + { hada: "다", sawayo: "사와요", eum: "음", nora: "노라" }[style];
  }

  function copula(noun, style) {
    const b = batchim(noun);
    return noun + { ban: b ? "이야" : "야", hada: b ? "이다" : "다", haeyo: b ? "이에요" : "예요",
                    sawayo: "이와요", eum: "임", nora: b ? "이로다" : "로다" }[style];
  }

  // 말하는 사람(말투 v)이 x 를 부르는 말.
  function call(v, x) {
    if (v.call === "surname") return FULL[x].split(" ")[0];
    return NAMES[x] + (v.call === "씨" ? " 씨" : v.call);
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

  function render(st, shown, inc) {
    const [kind, args] = st;
    const v = V[shown];
    const sty = v.style;
    const tag = (v.tag && v.tag[kind]) || "";
    const n = args.map((a) => call(v, a));
    const me = v.topic || j(v.self, "은", "는");
    const of = (w) => w + (v.casual ? " " : "의 ");
    let core;
    switch (kind) {
      case "accuse": core = `${j(n[0] + tag, "이", "가")} ${conj(inc.did, sty)}`; break;
      case "culprit_is": core = `범인은 ${copula(n[0], sty)}`; break;
      case "deny": core = `${j(n[0], "은", "는")} ${conj(inc.didnt, sty)}`; break;
      case "deny_self": core = `${me} ${conj(inc.didnt, sty)}`; break;
      case "either": core = `${n[0]} 아니면 ${j(n[1], "이", "가")} ${conj(inc.did, sty)}`; break;
      case "self_or": core = `${v.self} 아니면 ${j(n[0], "이", "가")} ${conj(inc.did, sty)}`; break;
      case "meta_false": core = `${of(n[0])}말은 ${conj("틀렸어", sty)}`; break;
      case "meta_true": core = `${of(n[0])}말은 ${conj("맞아", sty)}`; break;
      case "swap_claim": {
        const swapped = conj("바뀌어 있어", sty);
        if (shown === "miria" || shown === args[0]) {
          const other = shown === "miria" ? n[0] : call(v, "miria");
          core = `${me} ${j(other, "과", "와")} 영혼이 ${swapped}`;
        } else {
          core = `${j(call(v, "miria"), "과", "와")} ${j(n[0], "은", "는")} 영혼이 ${swapped}`;
        }
        break;
      }
      default: throw new Error(kind);
    }
    if (v.stutter) core = `${core[0]}, ${core}`;
    const end = (v.endk && kind in v.endk) ? v.endk[kind] : v.end;
    return ((v.pre && v.pre[kind]) || "") + core + end + ((v.post && v.post[kind]) || "");
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

  // 이 세계에서 틀린 말이 적힌 카드(이름표 기준), 말한 사람 순서로.
  function falseCards(p, w) {
    return p.speakers.filter((x) => {
      const actual = speaker(x, w.m, w.s);
      return w.L & (1 << p.speakers.indexOf(actual)) || actual === w.b;
    });
  }

  function explainWrong(p, c) {
    const counts = new Set();
    for (const [b, m, s] of hiddenConfigs(p.speakers, p.magic)) {
      for (const L of liarSets(p.speakers, p.statements, c, b, m, s)) counts.add(popcount(L));
    }
    const who = j(NAMES[c], "이", "가");
    let tail = "";
    if (p.magic.length) {
      const parts = [];
      if (p.magic.includes("anan")) parts.push("안안의 세뇌를 누구에게 걸었다고 해도");
      if (p.magic.includes("margo")) parts.push("마고가 누구 흉내를 냈다고 해도");
      if (p.magic.includes("miria")) parts.push("미리아가 누구와 뒤바뀌었다고 해도");
      tail = ` (${parts.join(", ")})`;
    }
    if (!counts.size) return `${who} 범인이라면 말들이 서로 어긋나 버린다${tail}.`;
    const cs = [...counts].sort((a, b) => a - b).join("명 또는 ");
    return `${who} 범인이라면 거짓말하는 사람이 ${cs}명이 되어 버린다${tail}. ${p.n}명이어야 해.`;
  }

  function explainRight(p, ws) {
    const order = (xs) => [...xs].sort((a, b) => p.speakers.indexOf(a) - p.speakers.indexOf(b));
    const fc = falseCards(p, ws[0]);
    const lines = ["틀린 말을 한 카드: " + (fc.length ? fc.map((x) => NAMES[x]).join(", ") : "없음")];
    if (p.magic.includes("anan")) {
      const bs = new Set(ws.map((w) => w.b));
      if (bs.size === 1) lines.push(`${j(NAMES[[...bs][0]], "은", "는")} 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다.`);
      else lines.push(`${order(bs).map((x) => NAMES[x]).join(", ")} 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.`);
    }
    if (p.magic.includes("margo")) {
      const ms = new Set(ws.map((w) => w.m));
      if (ms.size === 1 && ms.has(null)) lines.push("마고는 아무의 흉내도 내지 않았다.");
      else if (ms.size === 1) lines.push(`${NAMES[[...ms][0]]} 이름으로 나온 말은 사실 마고의 흉내였다.`);
      else lines.push("마고가 누구 흉내를 냈는지(냈는지 아닌지도)는 말만으로는 정해지지 않는다.");
    }
    if (p.magic.includes("miria")) {
      const ss = new Set(ws.map((w) => w.s));
      if (ss.size === 1 && ss.has(null)) lines.push("미리아는 아무와도 뒤바뀌지 않았다.");
      else if (ss.size === 1) {
        const other = NAMES[[...ss][0]];
        lines.push(`미리아와 ${j(other, "은", "는")} 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 ${other}의 말, ${other} 이름의 말은 미리아의 말이었다.`);
      } else lines.push("미리아가 누구와 뒤바뀌었는지(뒤바뀌었는지 아닌지도)는 말만으로는 정해지지 않는다.");
    }
    if (!p.magic.length) lines[0] = lines[0].replace("틀린 말을 한 카드", "거짓말을 한 사람");
    lines.push(`범인: ${NAMES[ws[0].c]}`);
    return lines;
  }

  const properSubsets = (magic) => magic.length === 2 ? [[], [magic[0]], [magic[1]]] : magic.length === 1 ? [[]] : [];

  function solvesWithout(p, culprit, rest) {
    const plain = worlds({ ...p, magic: rest });
    return new Set(plain.map((w) => w.c)).size === 1 && plain[0].c === culprit;
  }

  // 퍼즐 하나. 같은 (tier, seed)면 같은 퍼즐. 조건을 만족하는 것이 안 나오면 null.
  function make(tier, seed, maxTries = 20000) {
    const spec = G.tiers[tier];
    const r = makeRng(seed);
    const magic = r.choice(spec.magics);    // 마법 조합을 먼저 정한다(조합마다 통과율이 달라 시도마다 고르면 안안만 많이 나온다)
    for (let t = 0; t < maxTries; t++) {
      const k = r.choice(spec.sizes);
      const n = r.choice(spec.ns);
      const inc = r.choice(G.incidents);
      if (magic.includes(inc.owner)) continue;    // 피해자는 용의자가 아니다
      const pool = Object.keys(NAMES).filter((x) => x !== inc.owner && !magic.includes(x));
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
      return toJson(inc, p, ws, tier, seed);
    }
    return null;
  }

  function toJson(inc, p, ws, tier, seed) {
    const sp = p.speakers;
    const answer = ws[0].c;
    const whyNot = {};
    for (const s of sp) if (s !== answer) whyNot[s] = explainWrong(p, s);
    const logic = {};
    for (const s of sp) logic[s] = [p.statements[s][0], p.statements[s][1].slice()];
    return {
      id: `random-${tier}-${seed}`,
      tier,
      seed,
      incident: inc.text,
      verb: inc.did,
      victim: { id: inc.owner, name: FULL[inc.owner], no: G.prisoner_no[inc.owner], line: inc.line, written: !!V[inc.owner].written },
      n: p.n,
      magic: p.magic.map((x) => ({ who: NAMES[x], name: G.magic_name[x], text: G.magic_text[x] })),
      suspects: sp.map((s) => ({ id: s, name: NAMES[s], full: FULL[s], no: G.prisoner_no[s], written: !!V[s].written,
                                 says: render(p.statements[s], s, inc) })),
      answer,
      why_not: whyNot,
      solution: explainRight(p, ws),
      false_cards: falseCards(p, ws[0]),
      worlds: ws.length,
      logic,
      magic_ids: p.magic.slice(),
    };
  }

  root.SmallTrialGen = { make };
})(typeof window !== "undefined" ? window : globalThis);
