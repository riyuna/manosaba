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

  const batchim = (w) => { const c = w.charCodeAt(w.length - 1); return c >= 0xac00 && c <= 0xd7a3 && (c - 0xac00) % 28 !== 0; };
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

  // 말하는 사람(말투 v)이 x 를 부르는 말.
  function call(v, x) {
    if (v.nick && v.nick[x]) return v.nick[x];                    // 호칭표의 별명(코코의 「히키」 등)
    if (v.call === "surname") return FULL[x].split(" ")[0];
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
      case "iam": core = `${me} ${j(nm(x), "과", "와")} 영혼이 ${conj("바뀌어 있어", sty)}`; break;
      case "swap_deny":
        core = x === "miria" ? `${me} 아무와도 영혼이 ${conj("안 바뀌었어", sty)}`
          : `${me} ${j(nm("miria"), "과", "와")} 영혼이 ${conj("안 바뀌었어", sty)}`;
        break;
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
    return ((v.pre && v.pre[dk]) || "") + core + end + ((v.post && v.post[dk]) || "");
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
    if (p.magic.includes("margo")) parts.push("마고가 누구 흉내를 냈다고 해도");
    if (p.magic.includes("miria")) parts.push("미리아가 누구와 뒤바뀌었다고 해도");
    return parts.length ? ` (${parts.join(", ")})` : "";
  }

  function explainWrong(p, c) {
    const who = j(NAMES[c], "이", "가");
    const tail = magicTail(p);
    if (p.tier === "veryhard") {
      if (p.mode === "shown") return `${who} 범인이라면 거짓말쟁이 ${p.n}명·트롤러 ${p.t + (p.magic.includes("anan") ? 1 : 0)}명으로는 말들을 맞출 수 없다${tail}.`;
      return `${who} 범인이라면 정직한 사람이 과반이 되게 말들을 맞출 수 없다${tail}.`;
    }
    const counts = Core.liarCounts(p, c);
    if (!counts.length) return `${who} 범인이라면 말들이 서로 어긋나 버린다${tail}.`;
    return `${who} 범인이라면 거짓말하는 사람이 ${counts.join("명 또는 ")}명이 되어 버린다${tail}. ${p.n}명이어야 해.`;
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
    if (F) lines.push((!magic.length && p.tier !== "veryhard" ? "거짓말을 한 사람: " : "틀린 말을 한 카드: ") + (falseLabel(p, F) || "없음"));
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
      if (magic.includes("anan")) lines.push("트롤러 중 (안안 말고) 한 명은 안안에게 세뇌당한 사람이다.");
    } else if (magic.includes("anan")) {
      const bs = sp.filter((x, i) => ws.some((w) => w.roles[i] === "T"));
      if (bs.length === 1) lines.push(`${j(NAMES[bs[0]], "은", "는")} 안안에게 세뇌당해 제멋대로 말했을 뿐, 거짓말쟁이가 아니다.`);
      else lines.push(`${bs.map((x) => NAMES[x]).join(", ")} 중 한 명은 안안에게 세뇌당해 제멋대로 말했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.`);
    }
    if (magic.includes("margo")) {
      const ms = new Set(ws.map((w) => w.m));
      if (ms.size === 1 && ms.has(null)) lines.push("마고는 아무의 흉내도 내지 않았다.");
      else if (ms.size === 1) lines.push(`${NAMES[[...ms][0]]} 이름으로 나온 말은 사실 마고의 흉내였다.`);
      else lines.push("마고가 누구 흉내를 냈는지(냈는지 아닌지도)는 말만으로는 정해지지 않는다.");
    }
    if (magic.includes("miria")) {
      const ss = new Set(ws.map((w) => w.s));
      if (ss.size === 1 && ss.has(null)) lines.push("미리아는 아무와도 뒤바뀌지 않았다.");
      else if (ss.size === 1) lines.push(`미리아와 ${j(NAMES[[...ss][0]], "은", "는")} 영혼이 뒤바뀌어 있었다.`);
      else lines.push("미리아가 누구와 뒤바뀌었는지(뒤바뀌었는지 아닌지도)는 말만으로는 정해지지 않는다.");
      for (const x of sp) {        // 연기: 어느 세계에서나 자기 영혼이 아닌 말투로 말했다(정직한 사람은 못 한다)
        const k = Core.voiceOf(st[x], x);
        const souls = new Set(ws.map((w) => Core.soulIn(x, w.s)));
        if (!st[x].length || souls.has(k)) continue;
        if (k !== x) lines.push(`${NAMES[x]} 카드의 ${NAMES[k]} 말투는 연기였다.`);
        else if (souls.size === 1) lines.push(`${NAMES[x]} 카드는 ${NAMES[x]}의 몸에 든 ${j(NAMES[[...souls][0]], "이", "가")} ${NAMES[x]}인 척 말한 것이었다.`);
      }
    }
    Core.reports(p).forEach((q, i) => {
      const hs = new Set(ws.map((w) => w.heard[i]));
      const said = `${j(NAMES[q.by], "이", "가")} 전한 ${NAMES[q.who]}의 말`;
      if (hs.size === 1 && hs.has(true)) lines.push(`${j(said, "은", "는")} 정말 ${j(NAMES[q.who], "이", "가")} 한 말이었다.`);
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
    const whyNot = {};
    for (const s of q.speakers) if (s !== q.answer) whyNot[s] = explainWrong(p, s);
    const out = {
      id: q.id, key: q.key, tier: q.tier, incident: inc.text, verb: inc.did,
      victim: { id: owner, name: FULL[owner], line: inc.line, written: !!V[owner].written },
      n: q.n,
      magic: magicView(q),
      suspects: q.speakers.map((s) => {
        const voice = Core.voiceOf(q.logic[s], s);
        return { id: s, name: NAMES[s], full: FULL[s], written: !!V[voice].written, voice: voice !== s ? NAMES[voice] : null,
                 says: render(q.logic[s], s, inc) };
      }),
      answer: q.answer, why_not: whyNot, solution: explainRight(p, ws),
      false_says: Core.falseSays(ws), worlds: ws.length, logic: q.logic, magic_ids: q.magic_ids.slice(),
    };
    if (q.seed !== undefined) out.seed = q.seed;
    return out;
  }

  // 자기를 "나·저" 말고 다르게 부르는 말투(카드의 말투 주인 기준): [{ name, word }]
  function selfWords(q) {
    const voices = [...new Set(q.speakers.map((s) => Core.voiceOf(q.logic[s], s)))];   // 안 들린 사람의 말투도 전해 들은 말 속에 나온다
    return voices.filter((s) => !["나", "저"].includes(V[s].self)).map((s) => ({ name: NAMES[s], word: V[s].self }));
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
      veryhard: "트롤러가 따로 있고 말이 둘인 사람, 전해 들은 말이 나온다. 마법은 전부, 수를 숨기는 판도 있다",
    },
    tutorialTitle: "튜토리얼",
    tutorialDesc: "처음이라면 여기부터. 무엇을 누르면 되는지 한 판으로 알려 준다.",
    tutorialOpen: "튜토리얼 시작",
    tutorialDone: "· 판결 끝",
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
    where: (q, index, date) => q.tier === "tutorial" ? "튜토리얼"
      : q.seed !== undefined ? `무작위 재판 · ${TIER[q.tier]} · 문제 번호 ${q.seed}`
      : date ? `오늘의 재판 · ${ui.dateLabel(date)} · ${TIER[q.tier]}` : `${TIER[q.tier]} ${index}번`,
    ruleLiarsHtml: (n) => `이 중 딱 <strong>${n}명</strong>이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.`,
    // 아주 어려움: 수를 알려 주는 판(shown)과 숨기는 판(hidden)
    ruleRolesHtml: (q) => (q.mode === "shown"
      ? `이 중 딱 <strong>${q.n}명</strong>이 거짓말쟁이, <strong>${q.t + (q.magic_ids.includes("anan") ? 1 : 0)}명</strong>이 트롤러다${q.magic_ids.includes("anan") ? "(안안에게 세뇌당한 사람 포함)" : ""}. `
      : "거짓말쟁이와 트롤러가 몇 명인지는 모른다. 다만 <strong>정직한 사람이 과반</strong>이다. ")
      + "거짓말쟁이의 말은 전부 틀리고, 트롤러의 말은 맞든 틀리든 상관없고, 정직한 사람의 말은 전부 맞다.",
    ruleHearsay: "잘 들리지 않은 말은 다른 사람이 전해 준다. 전한 사람이 정직하면 정말 그렇게 말한 것이고(그 말의 맞고 틀림은 원래 말한 사람 몫), 거짓말쟁이가 전했다면 그런 말은 없었던 것이다. 트롤러가 전한 말은 알 수 없다.",
    ruleCulprit: "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다.",
    unheard: "(잘 들리지 않았다)",
    voiceBadge: (name) => `${name}의 말투`,
    num: (i) => "①②③"[i],
    selfWords: (q) => {
      const items = selfWords(q);
      if (!items.length) return "";
      const last = items[items.length - 1].word;
      return `말투 안내: ${items.map((i) => `${i.name}의 「${i.word}」`).join(", ")}${j(last, "은", "는").slice(last.length)} `
        + `${items.length > 1 ? "모두 " : ""}자기 자신을 가리키는 말이다.`;
    },
    hiroTag: "판결하는 사람 · 니카이도 히로의 사망 회귀",
    hiroRule: "판결이 틀리면 히로는 그날 아침으로 돌아간다. 돌아와도 기억은 남는다. 스스로 되감아서 범인이 아닌 사람 하나를 알아 올 수도 있다. 돌아온 횟수는 판결 기록에 남는다.",
    magicTag: (m) => `마법 규칙 · ${m.who}의 ${m.name}`,
    written: "필담",
    marks: { t: "진실", f: "거짓", r: "트롤러" },
    markLabel: (name, m, on) => `${name}의 카드에 「${m}」 표시${on ? " (켜짐)" : ""}`,
    accuse: "범인으로 지목",
    notCulprit: "범인 아님",
    memory: (t) => `회귀의 기억: ${t}`,
    nbTitle: "히로의 수첩",
    nbSub: "가정 표와 메모. 이 브라우저에만 남는다",
    nbHelp: "열마다 \"이 사람이 범인이라면\"을 가정하고, 칸을 눌러 그때 각 말이 맞는지(○) 틀린지(×) 적는다. 맨 아래 줄에 × 수가 나온다.",
    nbCorner: "범인이라면 →",
    nbRow: (name, i, total) => `${name}의 말${total > 1 ? " " + "①②③"[i] : ""}`,
    nbFoot: "× 수",
    nbCell: (c, row, v) => `${j(c, "이", "가")} 범인이라면 ${row}: ${v === "o" ? "맞음" : v === "x" ? "틀림" : "비어 있음"}`,
    nbMemo: "메모",
    nbPlaceholder: "예: 셰리가 범인이면 코코의 말은 틀린다. 그러면 거짓말쟁이는…",
    nbClear: "수첩 비우기",
    nbClearConfirm: "한 번 더 누르면 지운다",
    nbClearWarn: "이 문제의 가정 표와 메모가 지워진다.",
    judgeIdle: "범인을 고르면 판결할 수 있다",
    accusation: (name) => `「${name}, 네가 바로 이 사건의 범인이다.」`,
    rewind: "되감는다: 범인이 아닌 사람 하나를 알아 온다",
    tally: (r, m) => `회귀 ${r}번 · 카드 표시 ${m}개`,
    clockLabel: "걸린 시간",
    stamp: "판결",
    hiro: "니카이도 히로",
    recordRight: (n, time) => n === 0 ? `한 번도 돌아오지 않고 ${time} 만에 판결했다.` : `회귀 ${n}번, ${time} 만에 판결했다.`,
    hiroRight: (n) => n === 0 ? "...올바르지 않은 일을 바로잡았다. 이 세상의 악을 없애는 것이야말로 내가 해야 할 일이지." : "올바른 판결에 닿을 수만 있다면, 몇번을 되돌아오더라도 상관없어.",
    morning: "…눈을 뜨니 그날 아침이었다.",
    rewindInfo: (n, name) => `회귀 ${n}번째. ${j(name, "은", "는")} 범인이 아니다. 그건 기억하고 있다.`,
    hiroRewind: "알아낸 사실을 기억해 두자. 이번에야말로 올바른 답에 도달하겠다.",
    wrongTitle: "옳지 않은 판결이었다.",
    wrongRecord: (n) => `회귀 ${n}번째. 틀린 판결의 기억은 남아 있다.`,
    hiroWrong: "...내가... 올바르지 않았어. 되돌아가서 바로잡아야 해.",
    next: { random: "같은 난이도로 하나 더", daily: "지난 재판 목록으로", fixed: "다음 사건", tutorial: "쉬움 1번으로", last: "사건 기록으로" },
    footer: [
      "『魔法少女ノ魔女裁判』의 비공식 2차창작 팬게임 데모입니다. 원작의 권리는 원작자에게 있습니다.",
      "퍼즐은 프로그램이 만듭니다. 사건 기록의 퍼즐은 답(범인)이 하나뿐인지 두 가지 방법으로 검산했고, 무작위 재판은 만들 때마다 전수 조사로 확인합니다.",
      "프로그래밍과 일부 문구는 AI(Claude)의 도움을 받았습니다.",
    ],
    // 튜토리얼 판에서만 각 구역 앞에 나오는 안내(순서대로 읽는다)
    guide: {
      incident: "사건과 피해자의 한마디. 이번에 풀 사건이다.",
      rules: "규칙. 이 판은 거짓말쟁이가 딱 1명이다. 거짓말쟁이와 범인은 다를 수 있다. 붉은 칸은 히로의 마법, 누런 칸은 소녀들의 마법 규칙이다(이 판에는 없다).",
      cards: "용의자들의 말. 「진실」·「거짓」(트롤러가 나오는 판에는 「트롤러」도)은 카드에 해 두는 표시라 정답에 영향이 없다. 범인 같은 사람에게 「범인으로 지목」을 누른다.",
      notebook: "히로의 수첩에서 가정해 본다. 예: 에마가 범인이라면 에마의 말(셰리가 먹었다) ×, 셰리의 말(에마는 안 먹었다) ×, 코코의 말(범인은 에마) ○. × 가 2개인데 거짓말쟁이는 1명이어야 하니, 에마는 범인이 아니다. 셰리와 코코의 열도 채워 보자.",
      bar: "범인을 골랐으면 아래의 판결 버튼을 누른다. 틀려도 끝나지 않는다. 히로가 그날 아침으로 돌아가고 회귀가 1번 늘 뿐이다. 막히면 「되감는다」로 범인이 아닌 사람 하나를 알아 올 수 있다.",
    },
  };

  root.TrialLang = root.TrialLang || {};
  // 사건 글만(목록용. decorate 처럼 세계를 계산하지 않는다)
  const incidentText = (q) => K.incidents[q.incident].text;

  root.TrialLang.ko = { decorate, ui, josa: j, incidentText };
})(typeof window !== "undefined" ? window : globalThis);
