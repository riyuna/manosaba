// 「감옥저택의 번외재판」 한국어 팩. 논리 퍼즐(TrialCore 모양)을 받아 화면에 보일 글을 만든다.
// 자료(이름·말투·사건·마법 문구)는 tools/gen_puzzles.py 가 puzzles.js 의 lang.ko 로 내보낸다. 문법(조사·어미)은 여기.
// 파이썬 생성기의 한국어 글(to_json)과 글자까지 같아야 한다(tests/test_puzzles.py 가 대조한다).
// 다른 언어를 더하려면 이 파일과 같은 모양(decorate, ui)의 팩을 lang/<언어>.js 로 만든다.
(function (root) {
  "use strict";
  const K = root.PUZZLES.lang.ko;
  const G = root.PUZZLES.gen;
  const Core = root.TrialCore;
  const NAMES = K.names;
  const FULL = K.full_names;
  const V = K.voices;
  const OWNER = Object.fromEntries(G.incidents.map((i) => [i.id, i.owner]));

  // 별명·성 표시(화면에서 점선 밑줄·툴팁): \u0001누구\u0002글\u0003. 받침은 표시를 뺀 글로 본다
  const MARK = /\u0001[a-z]+\u0002|\u0003/g;
  const mark = (x, w) => `\u0001${x}\u0002${w}\u0003`;
  const unmark = (w) => w.replace(MARK, "");
  const batchim = (w) => { w = unmark(w); const c = w.charCodeAt(w.length - 1); return c >= 0xac00 && c <= 0xd7a3 && (c - 0xac00) % 28 !== 0; };
  // 받침에 따라 조사를 고른다: j("셰리", "을", "를") -> "셰리를"
  const j = (w, a, b) => w + (batchim(w) ? a : b);

  // ---- 말투 ----

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

  // 「나」·「저」를 주어로: 내가·제가, 그 밖에는 이/가.
  const subject = (self) => ({ 나: "내가", 저: "제가" })[self] || j(self, "이", "가");

  // 말하는 사람(말투 v)이 x 를 부르는 말.
  function call(v, x) {
    if (v.nick && v.nick[x]) return mark(x, v.nick[x]);           // 호칭표의 별명(코코의 「히키」 등)
    if (v.call === "surname") return mark(x, FULL[x].split(" ")[0]);
    if (v.call === "full") return FULL[x];
    return NAMES[x] + (v.call === "씨" || v.call === "군" ? " " + v.call : v.call);     // 쨩은 붙여, 씨·군은 띄어 쓴다
  }

  // x 카드의 말 하나를 voice 의 말투로 쓴다. plain 이면 앞뒤 덧말 없이(전해 들은 말 속에 넣을 때).
  function say(st, x, voice, inc, plain) {
    const [kind, args] = st;
    const v = V[voice];
    const sty = v.style;
    const dk = kind === "iam" ? "swap_claim" : kind;          // 정체 주장은 뒤바뀜 주장의 덧말을 같이 쓴다
    const tag = args.length && v.nick && v.nick[args[0]] ? "" : (v.tag && v.tag[dk]) || "";     // 별명 뒤에는 안 붙인다
    const nm = (y) => call(v, y);
    const me = v.topic || j(v.self, "은", "는");
    const of = (w) => w + (v.casual ? " " : "의 ");
    const role = (r) => K.roles[r];
    let core;
    switch (kind) {
      case "accuse": core = `${j(nm(args[0]) + tag, "이", "가")} ${conj(inc.did, sty)}`; break;
      case "culprit_is": core = `범인은 ${copula(nm(args[0]), sty)}`; break;
      case "deny": core = `${j(nm(args[0]), "은", "는")} ${conj(inc.didnt, sty)}`; break;
      case "deny_self": core = `${me} ${conj(inc.didnt, sty)}`; break;
      case "either": core = `${nm(args[0])} 아니면 ${j(nm(args[1]), "이", "가")} ${conj(inc.did, sty)}`; break;
      case "self_or": core = `${v.self} 아니면 ${j(nm(args[0]), "이", "가")} ${conj(inc.did, sty)}`; break;
      case "meta_false": core = `${of(nm(args[0]))}말은 ${conj("틀렸어", sty)}`; break;
      case "meta_true": core = `${of(nm(args[0]))}말은 ${conj("맞아", sty)}`; break;
      case "swap_claim": core = `${j(nm("miria"), "과", "와")} ${j(nm(args[0]), "은", "는")} 영혼이 ${conj("바뀌어 있어", sty)}`; break;
      case "iam": {                 // 「사실 저는 한나이와요!」(노아처럼 자기를 이름으로 부르면 「사실 노아야~」)
        const who = NAMES[args[0]];
        core = v.self === who ? `사실 ${copula(who, sty)}` : `사실 ${me} ${copula(who, sty)}`;
        break;
      }
      case "swap_deny": {           // 「진짜 아저씨는 이쪽이야」(사용자 예시) / 「제가 진짜 한나이와요!」
        const who = NAMES[x];
        core = x === "miria" ? `진짜 ${me} ${copula("이쪽", sty)}`
          : v.self === who ? `진짜 ${copula(who, sty)}` : `${subject(v.self)} 진짜 ${copula(who, sty)}`;
        break;
      }
      case "role_is": core = `${j(nm(args[0]), "은", "는")} ${copula(role(args[1]), sty)}`; break;
      case "culprit_role": core = `${j(role(args[0]), "이", "가")} ${copula("범인", sty)}`; break;
      case "count_is": {
        const w = j(role(args[0]), "은", "는");
        core = args[1] === 0 ? `${w} ${conj("없어", sty)}` : `${w} ${copula(K.nums[String(args[1])], sty)}`;
        break;
      }
      case "vision": core = `환시로 ${conj("봤어", sty)}. 범인은 ${args.map(nm).join(", ")} 중 ${copula("하나", sty)}`; break;
      case "alibi":
        core = `천리안으로 봤는데, 그때 ${j(nm(args[0]), "이랑", "랑")} ${j(nm(args[1]), "은", "는")} 다른 곳에서 내 방송을 보고 ${conj("있었어", sty)}`;
        break;
      case "hearsay": core = `${j(nm(args[0]), "은", "는")} '${say(args[1], args[0], args[0], inc, true)}'라고 ${conj("했어", sty)}`; break;
      default: throw new Error(kind);
    }
    if (v.stutter) core = `${core[0]}, ${core}`;
    const end = (v.endk && dk in v.endk) ? v.endk[dk] : v.end;
    if (plain) return core + end;
    let out = ((v.pre && v.pre[dk]) || "") + core + end + ((v.post && v.post[dk]) || "");
    if (kind === "alibi") out += (/[.!?~…]$/.test(out) ? " " : ". ") + K.on_air;    // 코코의 「나도 방송 중」은 천리안 말의 일부다
    return out;
  }

  // 카드 하나의 말들. 카드의 말투 주인의 말투로 쓴다.
  function render(sts, x, inc) {
    const voice = Core.voiceOf(sts, x);
    return sts.map((st) => say(st, x, voice, inc, false));
  }

  // ---- 해설 ----

  function magicTail(p) {
    const parts = [];
    if (p.magic.includes("anan")) parts.push("안안의 세뇌를 누구에게 걸었다고 해도");
    if (p.magic.includes("margo")) parts.push("마고가 누구 흉내를 냈든 안 냈든");
    if (p.magic.includes("miria")) {
      const pair = Core.swapPair(p);
      parts.push(pair ? `미리아와 ${j(NAMES[pair], "이", "가")} 뒤바뀌었든 아니든` : "미리아가 누구와 뒤바뀌었든 아니든");
    }
    return parts.length ? ` (${parts.join(", ")})` : "";
  }

  // 키 배열을 앞에서부터 비교해 가장 작은 세계(파이썬 min(key=…)과 같은 순서)
  const cmp = (a, b) => { for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return a[i] < b[i] ? -1 : 1; return 0; };
  const minBy = (xs, key) => xs.reduce((best, x) => (cmp(key(x), key(best)) < 0 ? x : best));
  const countOf = (roles, r) => roles.split("").filter((x) => x === r).length;
  const magicN = (w) => (w.m !== null ? 1 : 0) + (w.s !== null ? 1 : 0);

  // 그 세계에서 쓴 마법 가정: 「 (레이아가 세뇌당했고, 미리아와 에마가 뒤바뀌어 있었다고 쳐도)」. 없으면 빈 글.
  function assumeNote(p, w) {
    const stems = [];
    const ts = p.speakers.filter((x, i) => w.roles[i] === "T").map((x) => NAMES[x]);
    if (p.tier === "veryhard" && ts.length) stems.push(`${j(ts.join(", "), "이", "가")} 변덕쟁이였`);
    else if (p.magic.includes("anan") && ts.length) stems.push(`${j(ts[0], "이", "가")} 세뇌당했`);
    if (w.m) stems.push(`${NAMES[w.m]} 카드가 마고의 흉내였`);
    if (w.s) stems.push(`미리아와 ${j(NAMES[w.s], "이", "가")} 뒤바뀌어 있었`);
    return stems.length ? ` (${stems.join("고, ")}다고 쳐도)` : "";
  }

  // c 가 범인이고 미리아의 상대가 s 일 때 두 말 중 하나만 맞는 카드(말에 대한 말이 있는 카드는 빼고).
  function mixedCards(p, c, s) {
    return p.speakers.filter((x) => {
      const sts = p.statements[x];
      if (sts.length < 2 || sts.some(([k]) => k.startsWith("meta") || k === "hearsay")) return false;
      return new Set(sts.map((q) => Core.content(q, x, Core.soulIn(x, s), { c, role: {}, s, heard: {}, truth: null }))).size === 2;
    });
  }

  // 막히는 곳을 짚는다(2026-10-21 사용자). 수를 안 따지면 성립하는 세계가 있으면 거짓말쟁이(정직한 사람) 수가 가장 가까운 것을
  // 보여 주고, 없으면 정직한 사람도 거짓말쟁이도 될 수 없는 카드(두 말 중 하나만 맞는 카드)를 댄다.
  function explainWrong(p, c) {
    const who = j(NAMES[c], "이", "가");
    const tail = magicTail(p);
    const said = (w) => { const label = falseLabel(p, w.F); return label ? `${label}${p.magic.includes("miria") ? " 카드" : ""}의 말이 틀려` : "틀린 말이 하나도 없어"; };
    if (p.tier === "veryhard" && p.mode === "hidden") {
      const maj = Math.floor(p.speakers.length / 2) + 1;
      const ws = Core.worlds({ ...p, relax: true }).filter((w) => w.c === c);
      if (ws.length) {
        const w = minBy(ws, (w) => [-countOf(w.roles, "H"), magicN(w), w.roles, w.m || "", w.s || ""]);
        return `${who} 범인이라면 ${said(w)}, 정직한 사람이 ${countOf(w.roles, "H")}명뿐이다${assumeNote(p, w) || tail}. 과반(${maj}명 이상)이어야 해.`;
      }
      return `${who} 범인이라면 정직한 사람이 과반(${maj}명 이상)이 되게 말들을 맞출 수 없다${tail}.`;
    }
    const ws = Core.worlds({ ...p, n: null }).filter((w) => w.c === c);
    if (ws.length) {
      const w = minBy(ws, (w) => [Math.abs(countOf(w.roles, "L") - p.n), magicN(w), countOf(w.roles, "L"), w.roles, w.m || "", w.s || ""]);
      return `${who} 범인이라면 ${said(w)}, 거짓말쟁이가 ${countOf(w.roles, "L")}명이 된다${assumeNote(p, w) || tail}. ${p.n}명이어야 해.`;
    }
    if (p.tier === "veryhard") return `${who} 범인이라면 거짓말쟁이 ${p.n}명·변덕쟁이 ${p.t + (p.magic.includes("anan") ? 1 : 0)}명으로는 말들을 맞출 수 없다${tail}.`;
    const both = "정직한 사람도 거짓말쟁이도 될 수 없다";
    const pair = p.magic.includes("miria") ? Core.swapPair(p) : null;
    if (!p.magic.includes("anan") && pair) {
      const a = mixedCards(p, c, null), b = mixedCards(p, c, pair);
      if (a.length && b.length) {
        if (a[0] === b[0]) return `${who} 범인이라면 미리아와 ${j(NAMES[pair], "이", "가")} 뒤바뀌었든 아니든 ${NAMES[a[0]]} 카드의 두 말 중 하나만 맞게 된다. 그 말을 한 사람은 ${both}.`;
        return `${who} 범인이라면 미리아와 ${j(NAMES[pair], "이", "가")} 안 바뀌었을 때는 ${NAMES[a[0]]} 카드의, 바뀌었을 때는 ${NAMES[b[0]]} 카드의 두 말 중 하나만 맞게 된다. 그 말을 한 사람은 ${both}.`;
      }
    } else if (!p.magic.includes("anan") && !p.magic.includes("miria")) {
      const a = mixedCards(p, c, null);
      if (a.length) return `${who} 범인이라면 ${NAMES[a[0]]}의 두 말 중 하나만 맞게 된다. ${both}${tail}.`;
    }
    return `${who} 범인이라면 말들이 서로 어긋나 버린다${tail}.`;
  }

  // 틀린 말 목록: 말이 전부 틀린 카드는 이름만, 일부만 틀리면 「에마(②)」
  function falseLabel(p, F) {
    const out = [];
    for (const x of p.speakers) {
      const n = p.statements[x].length;
      const bad = [...Array(n).keys()].filter((i) => F.includes(Core.slotId(x, i)));
      if (bad.length && bad.length === n) out.push(NAMES[x]);
      else if (bad.length) out.push(`${NAMES[x]}(${bad.map((i) => "①②③"[i]).join("")})`);
    }
    return out.join(", ");
  }

  function explainRight(p, ws) {
    const sp = p.speakers, st = p.statements, magic = p.magic;
    const lines = [];
    const F = Core.falseSays(ws);
    if (F && F.length) lines.push((!magic.length && p.tier !== "veryhard" ? "거짓말을 한 사람: " : "틀린 말을 한 카드: ") + falseLabel(p, F));   // 틀린 말이 카드에 없으면 뺀다
    if (p.tier === "veryhard") {
      const at = (i) => new Set(ws.map((w) => w.roles[i]));
      for (const r of ["H", "L", "T"]) {
        const fixed = sp.filter((x, i) => at(i).size === 1 && at(i).has(r));
        if (fixed.length) lines.push(`${K.roles[r]}: ${fixed.map((x) => NAMES[x]).join(", ")}`);
      }
      const loose = sp.map((x, i) => [x, ["H", "L", "T"].filter((r) => at(i).has(r))]).filter(([, rs]) => rs.length > 1);
      if (loose.length) {
        lines.push("말만으로는 역할이 정해지지 않는 사람: "
          + loose.map(([x, rs]) => `${NAMES[x]}(${rs.map((r) => K.roles[r]).join(" 또는 ")})`).join(", "));
      }
      if (magic.includes("anan")) lines.push("변덕쟁이 중 (안안 이외) 한 명은 안안에게 세뇌당한 사람이다.");
    } else if (magic.includes("anan")) {
      const bs = sp.filter((x, i) => ws.some((w) => w.roles[i] === "T"));
      if (bs.length === 1) lines.push(`${j(NAMES[bs[0]], "은", "는")} 안안에게 세뇌당해 제멋대로 말했을 뿐, 거짓말쟁이가 아니다.`);
      else lines.push(`${bs.map((x) => NAMES[x]).join(", ")} 중 한 명은 안안에게 세뇌당해 제멋대로 말했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.`);
    }
    if (magic.includes("margo")) {
      const ms = new Set(ws.map((w) => w.m));
      if (ms.size === 1 && ms.has(null)) lines.push("마고는 아무의 흉내도 내지 않았다.");
      else if (ms.size === 1) lines.push(`${NAMES[[...ms][0]]} 이름으로 나온 말은 사실 마고의 흉내였다.`);
      else if (ms.has(null)) lines.push("마고가 누구 흉내를 냈는지(냈는지 아닌지도)는 말만으로는 정해지지 않는다.");
      else lines.push("마고가 흉내를 낸 것은 맞지만, 누구 흉내였는지는 말만으로는 정해지지 않는다.");
    }
    if (magic.includes("miria")) {
      const ss = new Set(ws.map((w) => w.s));
      if (ss.size === 1 && ss.has(null)) lines.push("미리아는 아무와도 뒤바뀌지 않았다.");
      else if (ss.size === 1) {
        const z = [...ss][0];
        lines.push(`미리아와 ${j(NAMES[z], "은", "는")} 영혼이 뒤바뀌어 있었다. 미리아 카드의 말은 ${j(NAMES[z], "이", "가")}, ${NAMES[z]} 카드의 말은 미리아가 한 것이다.`);
      }
      else lines.push("미리아가 누구와 뒤바뀌었는지(뒤바뀌었는지 아닌지도)는 말만으로는 정해지지 않는다.");
    }
    Core.reports(p).forEach((q, i) => {
      const hs = new Set(ws.map((w) => w.heard[i]));
      const said = `${j(NAMES[q.by], "이", "가")} 전한 ${NAMES[q.who]}의 말`;
      if (hs.size === 1 && hs.has(true)) {
        const vs = new Set(ws.map((w) => Core.content(q.st, q.who, q.who,
          { c: w.c, role: Object.fromEntries(sp.map((x, k) => [x, w.roles[k]])), s: w.s, heard: null, truth: null })));
        const tail = vs.size > 1 ? "" : vs.has(true) ? " 그 말은 맞았다." : " 그 말은 틀렸다.";
        lines.push(`${j(said, "은", "는")} 정말 ${j(NAMES[q.who], "이", "가")} 한 말이었다.${tail}`);
      }
      else if (hs.size === 1) lines.push(`${j(said, "은", "는")} 지어낸 말이었다.`);
      else lines.push(`${j(said, "이", "가")} 정말인지는 알 수 없다.`);
    });
    lines.push(`범인: ${NAMES[ws[0].c]}`);
    return lines;
  }

  // 규칙 칸의 마법 상자: 마법 규칙 + 환시·천리안 말이 있으면 그 안내.
  function magicView(q) {
    const kinds = new Set(q.speakers.flatMap((s) => q.logic[s].map((st) => st[0])));
    const ids = q.magic_ids.concat([["nanoka", "vision"], ["coco", "alibi"]].filter(([, k]) => kinds.has(k)).map(([x]) => x));
    return ids.map((x) => ({ who: NAMES[x], name: K.magic[x].name, text: K.magic[x].text }));
  }

  // 논리 퍼즐 → 화면용 글이 붙은 퍼즐
  function decorate(q) {
    const inc = K.incidents[q.incident];
    const owner = OWNER[q.incident];
    const p = Core.problem(q);
    const ws = Core.worlds(p);
    // 틀린 판결 해설은 그 사람을 지목했을 때 처음 계산한다(아주 어려움은 한 문제에 0.5초 넘게 걸려 문제를 열 때 다 만들면 멈춘다)
    const whyNot = {};
    for (const s of q.speakers) {
      if (s === q.answer) continue;
      Object.defineProperty(whyNot, s, {
        enumerable: true, configurable: true,
        get() { const v = explainWrong(p, s); Object.defineProperty(whyNot, s, { value: v, enumerable: true }); return v; },
      });
    }
    const out = {
      id: q.id, key: q.key, tier: q.tier, incident: inc.text, verb: inc.did,
      victim: { id: owner, name: FULL[owner], line: inc.line, written: !!V[owner].written },
      n: q.n,
      magic: magicView(q),
      suspects: q.speakers.map((s) => {
        const voice = Core.voiceOf(q.logic[s], s);
        return { id: s, name: NAMES[s], full: FULL[s], written: !!V[voice].written, voice: voice !== s ? NAMES[voice] : null,
                 says: render(q.logic[s], s, inc).map(unmark) };
      }),
      marked: Object.fromEntries(q.speakers.map((s) => [s, render(q.logic[s], s, inc)])),     // 별명·성 표시가 든 말(화면용)
      answer: q.answer, why_not: whyNot, solution: explainRight(p, ws),
      false_says: Core.falseSays(ws), card_roles: Core.cardRoles(p, ws), worlds: ws.length, logic: q.logic, magic_ids: q.magic_ids.slice(),
    };
    if (q.seed !== undefined) out.seed = q.seed;
    return out;
  }

  // 자기를 "나·저" 말고 다르게 부르는 말투(카드의 말투 주인 기준): [{ name, word }]
  function selfWords(q) {
    const voices = [...new Set(q.speakers.map((s) => Core.voiceOf(q.logic[s], s)))];   // 안 들린 사람의 말투도 전해 들은 말 속에 나온다
    return voices.filter((s) => !["나", "저"].includes(V[s].self)).map((s) => ({ name: NAMES[s], word: V[s].self }));
  }

  // 이 퍼즐의 말에 나온 별명: [{ by: 말투 주인, nick, who }] (전해 들은 말 속은 원래 말한 사람의 말투)
  function nickWords(q) {
    const out = [];
    const seen = new Set();
    const visit = (st, voice) => {
      const [kind, args] = st;
      if (kind === "hearsay") { visit(args[1], args[0]); return; }
      for (const a of args) {
        const nick = typeof a === "string" && V[voice].nick && V[voice].nick[a];
        if (nick && !seen.has(voice + a)) { seen.add(voice + a); out.push({ by: voice, nick, who: a }); }
      }
      if (kind === "swap_claim" || (kind === "swap_deny" && voice !== "miria")) {      // 「미리아」를 부르는 말도 별명일 수 있다
        const nick = V[voice].nick && V[voice].nick.miria;
        if (nick && !seen.has(voice + "miria")) { seen.add(voice + "miria"); out.push({ by: voice, nick, who: "miria" }); }
      }
    };
    for (const s of q.speakers) {
      const voice = Core.voiceOf(q.logic[s], s);
      for (const st of q.logic[s]) if (st[0] !== "iam") visit(st, voice);     // 「사실 나는 ○○다」는 자기 이름이라 별명이 없다
    }
    return out;
  }

  // ---- 화면 문구 ----
  // html 이 붙은 항목은 팩이 만든 믿을 수 있는 글만 넣는다(퍼즐 글은 화면에서 이스케이프한다).
  const TIER = { easy: "쉬움", normal: "보통", hard: "어려움", veryhard: "아주 어려움", daily: "오늘의 재판", tutorial: "튜토리얼" };
  const ui = {
    lang: "ko",
    title: "감옥저택의 번외재판",
    eyebrow: "마녀재판 비공식 팬메이드 · 논리 퍼즐",
    titleParts: ["감옥저택의 ", "번외재판"],
    intro: "감옥 저택에서 '올바르지 않은' 일들이 일어나고 있다. 이를 바로잡는 건 바로 나, 니카이도 히로. 소녀들의 말 중 몇 개는 거짓이다. 말들이 모두 맞아떨어지는 경우는 하나뿐이니, 그 경우의 범인을 찾아 판결하자.",
    noticeHtml: [
      "<b>비공식 팬메이드</b> 작품입니다. 공식 이미지·음성·텍스트는 쓰지 않았고, 사건과 대사는 원작 대사를 옮기지 않고 새로 썼습니다.",
      "<b>AI 이용</b>: 프로그래밍(퍼즐 생성기, 정답 검산, 화면)과 일부 문구(규칙·해설·안내 등)는 AI(Claude)의 도움을 받았습니다.",
      "원작의 줄거리는 다루지 않지만, 캐릭터와 마법(히로의 마법 포함) 등 원작 설정이 나오므로 <b>스포일러에 주의</b>해 주세요.",
    ],
    noticeJa: "非公式のファンメイド作品・ネタバレあり・AI利用",
    tier: TIER,
    tierNote: {
      easy: "용의자 3~4명, 거짓말쟁이 1명. 마법 없음",
      normal: "마법 규칙이 하나 붙는다",
      hard: "용의자가 늘고, 말에 대한 말과 마법이 섞인다. 나노카의 환시, 코코의 천리안도 나온다",
      veryhard: "변덕쟁이가 따로 있고 말이 둘인 사람, 전해 들은 말이 나온다. 나오는 마법에 제한이 없고, 수를 숨기는 판도 있다. 판결 때 모든 카드의 역할도 맞혀야 한다",
    },
    tutorialTitle: "튜토리얼",
    tutorialDesc: "처음이라면 「기초」부터. 무엇을 누르면 되는지 한 판으로 알려 준다. 「심화」는 마법과 아주 어려움의 규칙을 하나씩 판으로 익힌다.",
    tutorials: [
      { id: "tutorial", label: "기초" },
      { id: "tutorial-anan", label: "심화 1 · 세뇌" },
      { id: "tutorial-margo", label: "심화 2 · 흉내내기" },
      { id: "tutorial-miria", label: "심화 3 · 뒤바뀜" },
      { id: "tutorial-sight", label: "심화 4 · 환시와 천리안" },
      { id: "tutorial-veryhard", label: "심화 5 · 변덕쟁이" },
      { id: "tutorial-hearsay", label: "심화 6 · 전해 들은 말" },
    ],
    tutorialDone: "판결 끝",
    dailyTitle: "오늘의 재판",
    dailyOpen: "재판을 연다",
    dateLabel: (iso) => { const [y, m, d] = iso.split("-").map(Number); return `${y}. ${m}. ${d}`; },
    // 걸린 시간: 12초 / 3분 12초 / 1시간 4분 9초
    duration: (ms) => {
      const s = Math.max(0, Math.floor(ms / 1000)), h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), r = s % 60;
      return h ? `${h}시간 ${m}분 ${r}초` : m ? `${m}분 ${r}초` : `${r}초`;
    },
    archiveOpen: "지난 재판",
    archiveTitle: "지난 오늘의 재판",
    archiveNote: "2026년 10월 20일부터 날짜마다 한 문제. 한국 시간 자정에 새 문제가 열린다.",
    today: "오늘",
    record: (rec, duration) => rec ? `판결 끝 · 회귀 ${rec.r}번${rec.t == null ? "" : ` · ${duration(rec.t)}`}` : "아직 판결 전",
    randomTitle: "무작위 재판",
    preparing: "재판을 준비하는 중…",
    randomDesc: "누를 때마다 새 사건을 그 자리에서 만든다. 답이 하나뿐인지는 확인하지만, 재미와 난이도는 운에 맡긴다.",
    records: "사건 기록",
    recordsNote: "판결을 끝낸 사건은 붉은 테두리로, 한 번도 돌아오지 않고 끝냈다면 붉게 칠해 표시한다",
    tileLabel: (tier, i, rec) => `${TIER[tier]} ${i}번${rec ? `, 판결 끝, 최소 회귀 ${rec.r}번` : ""}`,
    back: "사건 기록으로",
    // 무작위 재판은 번호만으로는 난이도를 모른다(같은 번호도 난이도마다 다른 문제). 둘을 한 덩어리로 보이고, 주소(?r=hard-120302)로 연다(2026-10-22 사용자)
    randomCode: (tier, seed) => `${TIER[tier]} ${seed}번`,
    copyLink: "이 문제 링크 복사",
    copiedLink: "링크를 복사했다",
    copyFallback: "이 주소를 복사해 공유하면 같은 문제가 열린다:",
    badLink: (code) => `링크의 문제(${code})를 만들지 못했다. 사건 기록으로 돌아왔다.`,
    // 판결 뒤 공유(2026-10-23 사용자: 「감옥저택의 번외재판 XXX 난이도 XXXX번/오늘의 문제를 힌트 x개/힌트 없이 n분 nn초 안에 풀었어요!」).
    // 힌트 = 되감기. 틀린 판결이 있었으면 「오판 n번 끝에」를 붙인다(힌트 없이라고만 쓰면 틀린 판결이 감춰진다).
    shareX: "트위터(X)에 공유",          // 사용자 2026-10-23: 「X(트위터)」가 아니라 「트위터(X)」
    shareCopy: "결과 복사",
    shareCopied: "결과를 복사했다",
    shareLabel: (q, index, date) => q.seed !== undefined ? `무작위 재판 ${ui.randomCode(q.tier, q.seed)}`
      : date ? `오늘의 재판 ${ui.dateLabel(date)} (${TIER[q.tier]})` : `${TIER[q.tier]} ${index}번`,
    shareText: (label, hints, wrongs, time) => `감옥저택의 번외재판 · ${label}\n`
      + (hints ? `힌트 ${hints}개` : "힌트 없이")
      + (wrongs ? `${hints ? "," : ""} 오판 ${wrongs}번 끝에` : hints ? "로" : "")
      + ` ${time} 만에 풀었어요!`,
    shareTags: "#番外裁判",     // 사용자 2026-10-24: 결과 공유가 2차 창작 태그를 덮지 않게 전용 태그로(한국어·일본어 같은 태그)
    where: (q, index, date) => q.id.startsWith("tutorial") ? `튜토리얼 · ${ui.tutorials.find((t) => t.id === q.id).label}`
      : q.seed !== undefined ? `무작위 재판 · ${ui.randomCode(q.tier, q.seed)}`
      : date ? `오늘의 재판 · ${ui.dateLabel(date)} · ${TIER[q.tier]}` : `${TIER[q.tier]} ${index}번`,
    ruleLiarsHtml: (n, anan) => `이 중 딱 <strong>${n}명</strong>이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, `
      + (anan ? "안안에게 세뇌당한 사람의 말은 맞는지 틀린지 알 수 없고, " : "") + "나머지의 말은 맞다.",     // 세뇌 문구는 사용자 문장(2026-10-22)
    // 아주 어려움: 수를 알려 주는 판(shown)과 숨기는 판(hidden)
    ruleRolesHtml: (q) => (q.mode === "shown"
      ? `이 중 딱 <strong>${q.n}명</strong>이 거짓말쟁이, <strong>${q.t + (q.magic_ids.includes("anan") ? 1 : 0)}명</strong>이 변덕쟁이다${q.magic_ids.includes("anan") ? "(안안에게 세뇌당한 사람 포함)" : ""}. `
      : `거짓말쟁이와 변덕쟁이가 몇 명인지는 모른다. 다만 <strong>정직한 사람이 과반(절반을 초과)</strong>이다. 이 재판은 ${q.speakers.length}명이니 정직한 사람은 <strong>${Math.floor(q.speakers.length / 2) + 1}명 이상</strong>이다${q.magic_ids.includes("anan") ? "(안안에게 세뇌당한 사람은 변덕쟁이로 센다)" : ""}. `)
      + "거짓말쟁이의 말은 전부 틀리고, 정직한 사람의 말은 전부 맞다. 변덕쟁이의 말은 하나하나가 맞을 수도 틀릴 수도 있다.",
    ruleHearsay: "잘 들리지 않은 말은 다른 사람이 전해 준다. 전한 사람이 정직하면 정말 그렇게 말한 것이고(그 말의 맞고 틀림은 원래 말한 사람 몫), 거짓말쟁이가 전했다면 그런 말은 없었던 것이다. 변덕쟁이가 전한 말은 알 수 없다.",
    ruleCulprit: "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다.",
    unheard: "(잘 들리지 않았다)",
    voiceBadge: (name) => `${name}의 말투`,
    num: (i) => "①②③"[i],
    // 호칭표의 별명이 나오면 누구인지 알려 준다: 「코코의 「양아치」는 아리사, 「괴력 고릴라녀」는 셰리.」
    nickWords: (q) => {
      const items = nickWords(q);
      if (!items.length) return "";
      const by = [...new Set(items.map((i) => i.by))];
      return "부르는 말 안내: " + by.map((b) => `${NAMES[b]}의 ` + items.filter((i) => i.by === b)
        .map((i) => `「${i.nick}」${j(i.nick, "은", "는").slice(i.nick.length)} ${NAMES[i.who]}`).join(", ")).join(" / ") + ".";
    },
    selfWords: (q) => {
      const items = selfWords(q);
      if (!items.length) return "";
      const last = items[items.length - 1].word;
      return `말투 안내: ${items.map((i) => `${i.name}의 「${i.word}」`).join(", ")}${j(last, "은", "는").slice(last.length)} `
        + `${items.length > 1 ? "모두 " : ""}자기 자신을 가리키는 말이다.`;
    },
    hiroTitle: "니카이도 히로의 사망 회귀",
    hiroRule: "판결이 틀리면 히로는 그날 아침으로 돌아간다. 돌아와도 기억은 남는다. 스스로 되감아서 범인이 아닌 사람 하나를 알아 올 수도 있다. 돌아온 횟수는 판결 기록에 남는다.",
    magicTitle: (m) => `${m.who}의 ${m.name}`,
    magicIntro: "이 재판에 걸린 마법:",
    noMagic: "이 재판에는 마법이 걸려 있지 않다.",
    // 히로의 수첩: 책갈피(탭). 마법 책갈피의 이름은 마법 이름
    ledgerTitle: "히로의 수첩",
    tabs: { rules: "이번 재판", hiro: "사망 회귀" },
    // 수첩에서 떼어 낸 가정 표·메모(넓은 화면에서는 오른쪽, 좁은 화면에서는 카드 아래)
    workbenchTitle: "가정 표와 메모",
    workbenchGrid: "가정 표",
    workbenchMemo: "메모",
    rulebookTitle: "규칙집",
    close: "닫기",
    langLabel: "언어",
    // 규칙 낱말 툴팁(2026-10-25 사용자 전달 피드백: 「거짓말쟁이·변덕쟁이 같은 키워드를 커서를 올려 빠르게 확인」)
    glossary: {
      "정직한 사람": "말이 전부 맞는 사람.",
      "거짓말쟁이": "말이 전부 틀리는 사람.",
      "변덕쟁이": "말 하나하나가 맞을 수도 틀릴 수도 있는 사람. 안안에게 세뇌당한 사람도 변덕쟁이로 센다.",
    },
    // 업데이트 기록(2026-10-23 사용자: 패치 노트, 새 소식 붉은 점). 플레이어에게 보이는 변화만, 새것이 위. 날짜는 한국 시간.
    // 꼭 적는 것: 규칙 글이 바뀐 것(답이 그대로여도), 퍼즐이 다시 만들어져 기록이 사라진 것(문제 번호까지), 새 기능.
    updatesTitle: "업데이트 기록",
    updatesLatest: (iso) => `마지막 업데이트 ${ui.dateLabel(iso)}`,
    updatesNew: "새 소식 있음",
    updates: [
      { date: "2026-10-25", items: [
        ["화면", "카드 속 별명·성(예: 코코의 「노앗치」, 아리사의 「사와타리」)에 그 사람 색의 점선 밑줄을 그었습니다. 마우스를 올리거나 누르면 누구인지 나오고, 그 사람의 카드가 빛납니다."],
        ["화면", "마법 설명을 한 줄에 한 뜻씩 나눠 다시 정리했습니다. 규칙은 바뀌지 않았습니다. 설명 속 「거짓말쟁이」·「변덕쟁이」 같은 낱말에 마우스를 올리거나 누르면 뜻이 나옵니다."],
        ["수정", "가정 표의 열 폭을 이름 길이와 상관없이 고르게 맞추고, 칸을 눌러도 칸 크기와 줄 높이가 바뀌지 않게 했습니다."],
        ["수정", "넓은 화면에서 가정 표를 누를 때마다 오른쪽 패널의 스크롤바가 나왔다 사라지던 문제를 고쳤습니다. 제보해 주셔서 감사합니다."],
        ["화면", "수첩 속 히로 대사 상자의 위 여백을 넓히고, 첫 화면의 규칙집 버튼을 수첩과 같은 리본 모양으로 바꿨습니다."],
      ] },
      { date: "2026-10-24", items: [
        ["기능", "결과 공유 글의 해시태그를 #番外裁判 으로 바꿨습니다. 결과 글이 2차 창작 태그(#まのさば二次創作)를 덮지 않게 하려는 것입니다."],
        ["기능", "일본어판(日本語)을 열었습니다. 첫 화면 위나 화면 맨 아래의 「日本語」를 누르면 바뀝니다. 판결 기록과 메모는 두 언어가 같이 씁니다."],
      ] },
      { date: "2026-10-23", items: [
        ["화면", "대사 상자의 이름표 테두리를 캐릭터마다 다른 색으로 바꿨습니다."],
        ["수정", "버튼을 누를 때마다 화면 전체를 다시 그리던 것을, 바뀐 부분만 다시 그리게 고쳤습니다. 웹 번역 확장으로 번역한 글이 누를 때마다 원문으로 돌아가던 문제가 줄어듭니다. 제보해 주셔서 감사합니다."],
        ["기능", "판결을 끝내면 결과를 트위터(X)에 공유하거나 복사할 수 있습니다. 공유한 링크로 들어오면 같은 문제가 열립니다."],
        ["기능", "오늘의 재판과 사건 기록의 문제도 주소로 바로 열 수 있습니다."],
        ["규칙", "마고의 흉내내기: 흉내 낸 말 속의 「나」·「저」는 마고가 아니라 목소리 주인(카드에 적힌 사람)이라는 것을 예시와 함께 규칙에 적었습니다. 처음부터 이 규칙으로 만든 퍼즐이라 답은 바뀌지 않습니다. 제보해 주셔서 감사합니다."],
      ] },
      { date: "2026-10-22", items: [
        ["기능", "무작위 재판 번호를 「어려움 120302번」처럼 난이도와 함께 보여 줍니다."],
        ["기능", "무작위 재판을 링크로 공유할 수 있습니다(「이 문제 링크 복사」)."],
        ["", "공개했습니다."],
      ] },
    ],
    written: "필담",
    marks: { t: "진실", f: "거짓", r: "변덕쟁이" },
    markLabel: (name, m, on) => `${name}의 카드에 「${m}」 표시${on ? " (켜짐)" : ""}`,
    accuse: "범인으로 지목",
    notCulprit: "범인 아님",
    memory: (t) => `회귀의 기억: ${t}`,
    nbHelp: "열마다 \"이 사람이 범인이라면\"을 가정하고, 칸을 눌러 그때 각 말이 맞는지(○) 틀린지(×) 적는다.",
    nbCorner: "범인이라면 →",
    nbRow: (name, i, total) => `${name}의 말${total > 1 ? " " + "①②③"[i] : ""}`,
    nbCell: (c, row, v) => `${j(c, "이", "가")} 범인이라면 ${row}: ${v === "o" ? "맞음" : v === "x" ? "틀림" : "비어 있음"}`,
    nbMemo: "자유롭게 적는다. 가정 표와 함께 이 브라우저에만 남는다.",
    nbPlaceholder: "예: 셰리가 범인이면 코코의 말은 틀린다. 그러면 거짓말쟁이는…",
    nbClear: "가정 표·메모 비우기",
    nbClearConfirm: "한 번 더 누르면 지운다",
    nbClearWarn: "이 문제의 가정 표와 메모가 지워진다.",
    judgeIdle: "범인을 고르면 판결할 수 있다",
    // 아주 어려움: 판결에 역할 표시가 들어간다(2026-10-21 사용자: "역할이 틀리면 그것도 회귀하는 것")
    judgeNeedMarks: (n) => `모든 카드에 역할을 표시해야 판결할 수 있다 (남은 카드 ${n}장)`,
    ruleJudgeRoles: "판결할 때는 범인과 함께 모든 카드에 역할을 표시한다: 그 카드의 말을 실제로 한 사람이 정직한 사람(진실)·거짓말쟁이(거짓)·변덕쟁이 중 누구인지. 흉내 낸 카드는 마고의, 뒤바뀐 카드는 그 몸에 든 사람의, 잘 들리지 않은 카드는 그 사람의 역할이다. 하나라도 틀리면 틀린 판결이다.",
    hiroRolesLine: "사건을 일으킨 사람 말고도, 언제나 올바르지 않은 말을 하는 사람들, 제멋대로 말을 하는 사람들도 단죄해야 한다. 그런 올바르지 않음을 단죄하는 일은 오직 나만이 할 수 있다.",   // 사용자 문장
    wrongRoles: (n) => `범인은 맞았다. 하지만 역할 표시가 ${n}장 틀렸다.`,
    // 히로의 말(전부 사용자 문장, docs/hiro-lines.md). 상황마다 여러 개면 판결할 때 하나를 고른다(그 판결 동안은 그대로).
    // 범인 지목은 문제를 열 때 하나를 골라 판결 버튼과 정답 제목에 같이 쓴다. {name} 자리에 지목한 사람 이름.
    hiroLines: {
      accuse: ["{name}, 네가 바로 이 사건의 범인이다.", "올바르지 않은 건 바로 너야. {name}"],
      accuseEma: ["에마, 너는 언제나 그런 식이었지. 올바르지 않아💢"],        // 에마를 지목할 때만
      right0: [                                                            // 정답·회귀 0번
        "...올바르지 않은 일을 바로잡았다. 이 세상의 악을 없애는 것이야말로 내가 해야 할 일이지.",
        "이 세상을 바로잡는 것은 나만이 할 수 있는 일이야.",
        "올바른 일을 했을 뿐이다.",
      ],
      rightN: [                                                            // 정답·회귀 있음
        "올바른 판결에 닿을 수만 있다면, 몇번을 되돌아오더라도 상관없어.",
        "사망회귀로 다시 돌아온 것은 올바르지 않았지만, 상관 없어.",
        "...이건 올바르지 않은 일이 아니다. 올바름을 추구하기 위한 과정일 뿐이다.",
      ],
      rewind: ["알아낸 사실을 기억해 두자. 이번에야말로 올바른 답에 도달하겠다."],     // 첫 되감기
      rewindAgain: [                                                       // 두 번째 되감기부터
        "다시 이 방법을 사용하고 싶지는 않았는데... 그래도 기억해둬야 해.",
        "올바른 답을 얻기 위해서는 이 방법 뿐이야.",
      ],
      wrong: ["...내가... 올바르지 않았어. 되돌아가서 바로잡아야 해.", "틀렸던 건... 나였어..."],   // 첫 오판
      wrongAgain: ["또 다시 올바르지 않은 답을 내리다니. 크윽! 올바르지 않아!"],                 // 두 번째 오판부터
      wrongEma: ["내가... 내가 무슨 짓을......! 에마에게 사과해야만 해!"],                       // 에마를 잘못 지목했을 때는 언제나 이것
    },
    // 되돌아온 아침의 지문(사용자 문장): 이 문제에서 돌아온 횟수(오판·되감기 합)로 고른다
    morningLines: {
      1: ["감옥 저택 감방 2층 침대의 2층, 나는 다시 눈을 떴다."],
      2: ["...다시 돌아왔구나. 이 감각도 처음은 아니다."],
      many: ["'돌아왔다.'는 걸까. 이번이 몇번째일까."],                    // 3번째부터
    },
    pick: (xs, k) => xs[(k || 0) % xs.length],
    line: (kind, k, vars) => {
      let t = ui.pick(ui.hiroLines[kind], k);
      for (const [a, b] of Object.entries(vars || {})) t = t.replace(`{${a}}`, b);
      return t;
    },
    // n: 몇 번째 오판·되감기인지(1부터), id: 잘못 지목한 사람(역할만 틀린 판결이면 없음)
    wrongLine: (n, k, id) => ui.line(id === "ema" ? "wrongEma" : n > 1 ? "wrongAgain" : "wrong", k),
    rewindLine: (n, k) => ui.line(n > 1 ? "rewindAgain" : "rewind", k),
    morning: (rewinds, k) => ui.pick(ui.morningLines[rewinds >= 3 ? "many" : rewinds === 2 ? 2 : 1], k),
    accusation: (name, k, id) => `「${ui.line(id === "ema" ? "accuseEma" : "accuse", k, { name })}」`,
    rewind: "되감는다: 범인이 아닌 사람 하나를 알아 온다",
    tally: (r, m) => `회귀 ${r}번 · 카드 표시 ${m}개`,
    clockLabel: "걸린 시간",
    stamp: "판결",
    hiro: "니카이도 히로",
    recordRight: (n, time) => n === 0 ? `한 번도 돌아오지 않고 ${time} 만에 판결했다.` : `회귀 ${n}번, ${time} 만에 판결했다.`,
    rewindInfo: (n, name) => `회귀 ${n}번째. ${j(name, "은", "는")} 범인이 아니다. 그건 기억하고 있다.`,
    wrongTitle: "옳지 않은 판결이었다.",
    wrongRecord: (n) => `회귀 ${n}번째. 틀린 판결의 기억은 남아 있다.`,
    next: { random: "같은 난이도로 하나 더", daily: "지난 재판 목록으로", fixed: "다음 사건", tutorial: "쉬움 1번으로",
            tutorialNext: (label) => `다음 튜토리얼: ${label}`, tutorialLast: "아주 어려움 1번으로", last: "사건 기록으로" },
    footer: [
      "『魔法少女ノ魔女裁判』의 비공식 2차창작 팬게임 데모입니다. 원작의 권리는 원작자에게 있습니다.",
      "퍼즐은 프로그램이 만듭니다. 사건 기록의 퍼즐은 답(범인)이 하나뿐인지 두 가지 방법으로 검산했고, 무작위 재판은 만들 때마다 전수 조사로 확인합니다.",
      "프로그래밍과 일부 문구는 AI(Claude)의 도움을 받았습니다.",
      "아이폰(Safari)에서는 직접 확인하지 못해 화면이 어긋날 수 있습니다.",
    ],
    // 꼬리말 마지막 줄(링크가 있어 html. 팩이 만든 믿을 수 있는 글만)
    // 꼬리말 마지막 줄들(HTML). 사용자 2026-10-21: 공식 문의는 트위터, 버그 제보는 구글 폼.
    contactHtml: [
      '문의·삭제 요청: 트위터(현 X) <a href="https://x.com/riyuna_mano" target="_blank" rel="noopener">@riyuna_mano</a>',
      '버그·오류 제보: <a href="https://docs.google.com/forms/d/e/1FAIpQLSfksd0WrbKXEQB5IDFbvhnLRXxqHTqkOAtlBJHm5E3ZxQZv4g/viewform" target="_blank" rel="noopener">구글 폼</a>',
    ],
    // 튜토리얼 판에서만 각 구역 앞에 나오는 안내(순서대로 읽는다). 튜토리얼 id 별로, 없는 칸은 common
    guide: {
      common: {
        bar: "범인을 골랐으면 아래의 판결 버튼을 누른다. 틀려도 히로가 그날 아침으로 돌아갈 뿐이다. 막히면 「되감는다」로 범인이 아닌 사람 하나를 알아 올 수 있다.",
      },
      tutorial: {
        incident: "사건과 피해자의 한마디. 이번에 풀 사건이다.",
        ledger: "히로의 수첩. 위쪽 책갈피를 누르면 그 장이 펼쳐진다. 「이번 재판」에 이 판의 규칙이 있다: 거짓말쟁이가 딱 1명이고, 거짓말쟁이와 범인은 다를 수 있다. 「사망 회귀」는 히로의 마법이고, 마법이 걸린 판에는 그 마법의 책갈피가 붙는다. 모든 규칙은 「규칙집」에 모여 있다. 가정 표와 메모는 카드 아래(넓은 화면에서는 오른쪽)에 있다.",
        cards: "용의자들의 증언 카드. 「진실」·「거짓」은 카드에 해 두는 표시라 정답에 영향이 없다. 범인 같은 사람에게 「범인으로 지목」을 누른다.",
        grid: "「가정 표」에서 가정해 본다. 예: 에마가 범인이라면 에마의 말(셰리가 먹었다) ×, 셰리의 말(에마는 안 먹었다) ×, 코코의 말(범인은 에마) ○. × 가 2개인데 거짓말쟁이는 1명이어야 하니, 에마는 범인이 아니다. 셰리와 코코의 열도 채워 보자.",
        bar: "범인을 골랐으면 아래의 판결 버튼을 누른다. 틀려도 끝나지 않는다. 히로가 그날 아침으로 돌아가고 회귀가 1번 늘 뿐이다. 막히면 「되감는다」로 범인이 아닌 사람 하나를 알아 올 수 있다.",
      },
      "tutorial-anan": {
        incident: "심화 1: 안안의 세뇌. 이 판에는 마법이 하나 걸려 있다.",
        ledger: "「이번 재판」에 거짓말쟁이는 1명이라고 적혀 있다. 그런데 안안의 마법으로 안안 이외의 누군가 한 명이 세뇌당해 변덕쟁이가 되었다. 변덕쟁이의 말은 맞을 수도 틀릴 수도 있고, 거짓말쟁이가 아니라 변덕쟁이로 센다. 「세뇌」 책갈피를 펼쳐 읽어 보자.",
        cards: "안안과 레이아는 둘 다 에마가 범인이라고 한다. 에마가 범인이 아니라면 두 말이 다 틀린다. 거짓말쟁이는 1명뿐이니, 그때는 둘 중 한 명이 세뇌당한 변덕쟁이여야 한다. 안안은 자기를 세뇌하지 않는다.",
        grid: "에마가 범인이라면 네 말이 전부 맞아서 거짓말쟁이가 없다. 거짓말쟁이는 1명이어야 하니 에마는 범인이 아니다. 그러면 안안이 거짓말쟁이, 레이아가 세뇌당한 변덕쟁이다. 남은 에마와 노아의 말로 범인을 좁혀 보자.",
      },
      "tutorial-margo": {
        incident: "심화 2: 마고의 흉내내기.",
        ledger: "거짓말쟁이는 1명. 마고는 다른 한 사람의 목소리를 흉내 냈을 수도 있다. 흉내 낸 카드는 겉으로는 그 사람의 말로 보이지만, 맞고 틀림은 마고 몫이고 그 사람은 아무 말도 하지 않은 것이다. 그 사람인 척하는 말이라 말 속의 「나」·「저」처럼 자기를 가리키는 말은 마고가 아니라 카드에 적힌 사람이다. 「흉내내기」 책갈피에 자세히 있다.",
        cards: "틀린 카드가 둘인데 거짓말쟁이가 1명뿐이라면? 두 카드를 한 사람이 말한 것, 즉 하나는 거짓말쟁이 마고의 흉내여야 한다. 마고가 정직하다면 흉내 낸 카드도 맞는 말이 된다는 것도 기억해 두자.",
        grid: "코코가 범인이라면 마고의 말 ×, 코코의 말 ×, 에마·한나의 말 ○. 틀린 카드가 둘이지만, 코코의 카드가 거짓말쟁이 마고의 흉내라면 거짓말쟁이는 마고 1명으로 맞는다. 다른 사람이 범인인 경우도 확인해 보자.",
      },
      "tutorial-miria": {
        incident: "심화 3: 미리아의 뒤바뀜.",
        ledger: "거짓말쟁이는 1명. 미리아는 다른 한 사람과 영혼이 뒤바뀌어 있을 수도, 아닐 수도 있다. 카드의 말은 그 몸 안에 든 사람이 한 말이고, 거짓말쟁이와 범인은 사람(원래 몸의 이름)으로 고른다. 「뒤바뀜」 책갈피를 읽어 보자.",
        cards: "미리아 카드는 에마의 말투로 「사실 나는 에마야」라고 하고, 에마 카드는 「내가 진짜 에마야」라고 한다. 바뀌어 있든 아니든 둘 중 하나만 맞으니, 이 두 카드를 말한 미리아와 에마 중 한 명은 거짓말쟁이다. 거짓말쟁이는 1명뿐이니 셰리와 메루루는 정직하다.",
        grid: "메루루가 정직하니 범인은 메루루의 말대로다. 그렇다면 미리아 카드의 「셰리쨩은 낙서 안 했어」는 맞을까? 그 카드를 말한 사람이 거짓말쟁이라는 걸 알면, 미리아와 에마가 정말 뒤바뀌어 있었는지도 알 수 있다.",
      },
      "tutorial-sight": {
        incident: "심화 4: 나노카의 환시와 코코의 천리안. 이 둘은 규칙을 바꾸지 않고, 특별한 증언으로 나온다.",
        ledger: "거짓말쟁이는 1명. 「환시」와 「천리안」 책갈피를 펼쳐 보자. 환시는 범인을 몇 명으로 좁혀 주고, 천리안은 다른 곳에서 코코의 생방송을 보던 사람을 알려 준다. 코코의 천리안 말은 「그 사람들과 방송 중이던 나(코코)는 범인이 아니다」라는 말 하나다. 모두 말한 사람이 정직할 때만 맞다. 코코가 부르는 별명은 「이번 재판」에 누구인지 적혀 있다.",
        cards: "에마의 「범인은 나노카」와 셰리의 「나노카는 안 섞었다」는 동시에 맞을 수도, 동시에 틀릴 수도 없다. 그러니 둘 중 한 명이 거짓말쟁이고, 나머지는 모두 정직하다.",
        grid: "나노카와 코코는 정직하다. 환시가 말한 셋 중에서, 천리안으로 다른 곳에 있었던 사람과 방송 중이던 코코를 빼 보자.",
      },
      "tutorial-veryhard": {
        incident: "심화 5: 아주 어려움 연습 판. 증언하는 사람이 정직한 사람·거짓말쟁이·변덕쟁이 셋으로 나뉜다.",
        ledger: "수첩의 「이번 재판」: 거짓말쟁이 1명, 변덕쟁이 1명, 나머지는 정직한 사람이다. 거짓말쟁이의 말은 전부 틀리고 정직한 사람의 말은 전부 맞다. 변덕쟁이는 두 가지 증언을 한다면 하나는 진실이고 하나는 거짓일 수도 있다. 둘 모두 진실이거나 거짓인 것도 물론 가능하다. 같은 내용이 「규칙집」에도 있다.",
        cards: "메루루는 말이 둘이다(①②). 「범인은 에마」와 「레이아가 가져갔다」는 동시에 맞을 수 없으니 메루루는 정직한 사람이 아니다. 셰리의 「에마는 거짓말쟁이」처럼 역할에 대한 말도 나온다. 카드 표시에 「변덕쟁이」가 생겼다. 아주 어려움에서는 이 표시도 판결에 들어간다.",
        grid: "메루루가 거짓말쟁이라면 두 말이 다 틀려, 범인은 에마도 레이아도 아니다. 그러면 레이아의 「범인은 에마」도 틀리니 레이아가 변덕쟁이고, 에마와 셰리는 정직한 사람이어야 한다. 그런데 정직한 셰리가 「에마는 거짓말쟁이」라고 할 수는 없다. 그러니 메루루가 변덕쟁이다. 이제 셰리가 정직한지 가정해 보자. 「가정 표」에 적어 가며 풀어도 된다.",
        bar: "아주 어려움에서는 범인과 함께 모든 카드에 역할(진실·거짓·변덕쟁이)을 표시해야 판결 버튼이 켜진다. 범인이 맞아도 역할이 하나라도 틀리면 틀린 판결이고, 히로는 그날 아침으로 돌아간다.",
      },
      "tutorial-hearsay": {
        incident: "심화 6: 전해 들은 말과 수를 숨긴 판(아주 어려움).",
        ledger: "이번엔 거짓말쟁이·변덕쟁이가 몇 명인지 모른다. 다만 정직한 사람이 과반(절반을 초과)이다. 4명이니 정직한 사람은 3명 이상, 정직하지 않은 사람은 많아야 1명이다. 잘 들리지 않은 말은 다른 사람이 전해 준다. 전한 사람이 정직하면 정말 그렇게 말한 것이고, 그 말의 맞고 틀림은 원래 말한 사람 몫이다.",
        cards: "노아의 카드는 비어 있고, 한나의 카드에 노아가 했다는 말이 들어 있다. 에마의 「레이아가 바꿨다」와, 노아가 정말 했다면 노아의 「레이아는 안 바꿨다」는 서로 부딪친다.",
        grid: "정직하지 않은 사람은 많아야 1명. 한나가 지어냈다면 한나가 그 1명이니 레이아는 정직하고, 레이아의 「노아는 거짓말쟁이」도 맞아야 한다. 그러면 정직하지 않은 사람이 둘이 된다. 그러니 한나는 정직하고, 노아는 정말 그렇게 말했다. 이제 노아가 정직한지 따져 보자.",
        bar: "아주 어려움에서는 범인과 함께 모든 카드에 역할(진실·거짓·변덕쟁이)을 표시해야 판결 버튼이 켜진다. 범인이 맞아도 역할이 하나라도 틀리면 틀린 판결이고, 히로는 그날 아침으로 돌아간다.",
      },
    },
  };

  // 규칙집: 모든 규칙을 한곳에. [{ h: 제목, items: [믿을 수 있는 html] }]
  ui.rulebook = () => [
    { h: "재판의 기본", items: [
      "감옥 저택에서 소소한 사건이 일어났다. 범인은 용의자 중 언제나 딱 한 명이다.",
      "용의자들의 증언이 '카드'의 형태로 주어진다. 말들이 모두 맞아떨어지는 경우는 하나뿐이니, 그 경우의 범인을 지목해 판결한다.",
      `판결하는 사람은 니카이도 히로. ${ui.hiroRule}`,
    ] },
    { h: "증언하는 사람", items: [
      "<b>정직한 사람</b>: 말이 전부 맞다.",
      "<b>거짓말쟁이</b>: 말이 전부 틀리다.",
      "<b>변덕쟁이</b>: 말이 맞을 수도 틀릴 수도 있다. 두 가지 증언을 한다면 하나는 진실이고 하나는 거짓일 수도 있다. 둘 모두 진실이거나 거짓인 것도 물론 가능하다.",
      "거짓말쟁이·변덕쟁이가 몇 명인지는 수첩의 「이번 재판」에 적혀 있다. 아주 어려움에서는 숨겨지기도 하는데, 그때도 정직한 사람이 과반(절반을 초과)이라는 것만은 알려 준다. 4명이면 3명 이상, 5명이면 3명 이상, 6명이면 4명 이상, 8명이면 5명 이상이 정직한 사람이다.",
      "역할과 범인은 따로다. 정직한 사람이 범인일 수도 있고, 거짓말쟁이가 범인이 아닐 수도 있다.",
    ] },
    { h: "말의 종류", items: [
      "「○○의 말은 틀렸어 / 맞아」: 그 카드의 말이 전부 틀렸다 / 전부 맞다는 뜻이다.",
      "아주 어려움에는 「○○는 거짓말쟁이야」처럼 역할에 대한 말, 「거짓말쟁이가 범인이야」처럼 범인의 역할에 대한 말, 「변덕쟁이는 한 명이야」처럼 수에 대한 말도 나온다.",
      `전해 들은 말: ${ui.ruleHearsay}`,
      "자기를 「나·저」가 아닌 말로 부르는 사람도 있다: 미리아의 「아저씨」, 안안의 「이 몸」, 노아의 「노아」. 안안은 스케치북에 써서 말하므로 『』로 적는다.",
      "남을 별명이나 성으로 부르는 사람도 있다(코코의 「양아치」, 아리사의 「사와타리」 등). 별명이 나오면 「이번 재판」에 누구인지 적혀 있다.",
    ] },
    { h: "마법", terms: true, items: ["anan", "margo", "miria", "nanoka", "coco"]
        .map((x) => `<b>${NAMES[x]}의 ${K.magic[x].name}</b><ul class="lines">${K.magic[x].text.map((l) => `<li>${l}</li>`).join("")}</ul>`)
        .concat(["마고의 흉내내기와 미리아의 뒤바뀜은 한 재판에 같이 걸리지 않는다. 나노카의 환시와 코코의 천리안은 어려움부터 나온다."]) },
    { h: "난이도", items: ["easy", "normal", "hard", "veryhard"].map((t) => `<b>${TIER[t]}</b>: ${ui.tierNote[t]}`) },
    { h: "수첩과 카드 표시", items: [
      "「가정 표」: 열마다 \"이 사람이 범인이라면\"을 가정하고 각 말이 맞는지(○) 틀린지(×) 적는다. 카드 아래(넓은 화면에서는 오른쪽)에 있다.",
      "「메모」: 자유롭게 적는다. 가정 표와 메모는 이 브라우저에만 남는다.",
      "카드의 「진실」·「거짓」·「변덕쟁이」 표시는 쉬움~어려움에서는 정리용이다. 아주 어려움에서는 판결에 들어간다: 모든 카드에 그 카드의 말을 실제로 한 사람의 역할을 표시해야 하고, 하나라도 틀리면 틀린 판결이다(회귀).",
      "막히면 「되감는다」로 범인이 아닌 사람 하나를 알아 올 수 있다. 대신 회귀가 1번 는다.",
    ] },
  ];

  root.TrialLang = root.TrialLang || {};
  // 사건 글만(목록용. decorate 처럼 세계를 계산하지 않는다)
  const incidentText = (q) => K.incidents[q.incident].text;

  root.TrialLang.ko = { decorate, ui, josa: j, incidentText, fullName: (x) => FULL[x] };
})(typeof window !== "undefined" ? window : globalThis);
