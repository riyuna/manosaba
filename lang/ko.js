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

  // 카드 하나의 말. 카드에 적힌 사람(shown)의 말투로 쓴다(흉내·뒤바뀜 모두 상대인 척 말한다).
  function render(st, shown, inc) {
    const [kind, args] = st;
    const v = V[shown];
    const sty = v.style;
    const tag = args.length && v.nick && v.nick[args[0]] ? "" : (v.tag && v.tag[kind]) || "";     // 별명 뒤에는 안 붙인다
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

  // ---- 해설 ----

  function explainWrong(p, c) {
    const counts = Core.liarCounts(p, c);
    const who = j(NAMES[c], "이", "가");
    let tail = "";
    if (p.magic.length) {
      const parts = [];
      if (p.magic.includes("anan")) parts.push("안안의 세뇌를 누구에게 걸었다고 해도");
      if (p.magic.includes("margo")) parts.push("마고가 누구 흉내를 냈다고 해도");
      if (p.magic.includes("miria")) parts.push("미리아가 누구와 뒤바뀌었다고 해도");
      tail = ` (${parts.join(", ")})`;
    }
    if (!counts.length) return `${who} 범인이라면 말들이 서로 어긋나 버린다${tail}.`;
    return `${who} 범인이라면 거짓말하는 사람이 ${counts.join("명 또는 ")}명이 되어 버린다${tail}. ${p.n}명이어야 해.`;
  }

  function explainRight(p, ws) {
    const order = (xs) => [...xs].sort((a, b) => p.speakers.indexOf(a) - p.speakers.indexOf(b));
    const fc = Core.falseCards(p, ws[0]);
    const lines = ["틀린 말을 한 카드: " + (fc.length ? fc.map((x) => NAMES[x]).join(", ") : "없음")];
    if (p.magic.includes("anan")) {
      const bs = new Set(ws.map((w) => w.b));
      if (bs.size === 1) lines.push(`${j(NAMES[[...bs][0]], "은", "는")} 안안에게 세뇌당해 제멋대로 말했을 뿐, 거짓말쟁이가 아니다.`);
      else lines.push(`${order(bs).map((x) => NAMES[x]).join(", ")} 중 한 명은 안안에게 세뇌당해 제멋대로 말했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.`);
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
      magic: q.magic_ids.map((x) => ({ who: NAMES[x], name: K.magic[x].name, text: K.magic[x].text })),
      suspects: q.speakers.map((s) => ({ id: s, name: NAMES[s], full: FULL[s], written: !!V[s].written,
                                         says: render(q.logic[s], s, inc) })),
      answer: q.answer, why_not: whyNot, solution: explainRight(p, ws),
      false_cards: q.false_cards.slice(), worlds: ws.length, logic: q.logic, magic_ids: q.magic_ids.slice(),
    };
    if (q.seed !== undefined) out.seed = q.seed;
    return out;
  }

  // 자기를 "나·저" 말고 다르게 부르는 사람: [{ name, word }]
  function selfWords(q) {
    return q.speakers.filter((s) => !["나", "저"].includes(V[s].self)).map((s) => ({ name: NAMES[s], word: V[s].self }));
  }

  // ---- 화면 문구 ----
  // html 이 붙은 항목은 팩이 만든 믿을 수 있는 글만 넣는다(퍼즐 글은 화면에서 이스케이프한다).
  const TIER = { easy: "쉬움", normal: "보통", hard: "어려움", daily: "오늘의 재판", tutorial: "튜토리얼" };
  const ui = {
    lang: "ko",
    title: "감옥저택의 번외재판",
    eyebrow: "마녀재판 비공식 팬메이드 · 논리 퍼즐",
    titleParts: ["감옥저택의 ", "번외재판"],
    intro: "감옥 저택에서 '올바르지 않은' 일들이 일어나고 있다. 이를 바로잡는 건 바로 나, 니카이도 히로. 소녀들의 말 중 몇 개는 거짓이다. 말들이 모두 맞아떨어지는 경우는 하나뿐이니, 그 경우의 범인을 찾아 판결하자.",
    noticeHtml: [
      "<b>비공식 팬메이드</b> 작품입니다. 공식 이미지·음성·텍스트는 쓰지 않았고, 사건과 대사는 원작 대사를 옮기지 않고 새로 썼습니다.",
      "<b>AI 이용</b>: 프로그래밍(퍼즐 생성기, 정답 검산, 화면)은 AI(Claude)의 도움을 받아 만들었습니다. 일부 대사와 문구도 AI의 도움을 받아 썼습니다.",
      "원작의 줄거리는 다루지 않지만, 캐릭터와 마법(히로의 마법 포함) 등 원작 설정이 나오므로 <b>스포일러에 주의</b>해 주세요.",
    ],
    noticeJa: "非公式のファンメイド作品・ネタバレあり・AI利用",
    tier: TIER,
    tierNote: {
      easy: "용의자 3~4명, 거짓말쟁이 1명. 마법 없음",
      normal: "마법 규칙이 하나 붙는다",
      hard: "용의자가 늘고, 말에 대한 말과 마법이 섞인다",
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
    recordsNote: "판결을 끝낸 사건에는 도장이, 한 번도 돌아오지 않고 끝냈다면 붉게 찬 도장이 찍힌다",
    tileLabel: (tier, i, rec) => `${TIER[tier]} ${i}번${rec ? `, 판결 끝, 최소 회귀 ${rec.r}번` : ""}`,
    back: "사건 기록으로",
    where: (q, index, date) => q.tier === "tutorial" ? "튜토리얼"
      : q.seed !== undefined ? `무작위 재판 · ${TIER[q.tier]} · 문제 번호 ${q.seed}`
      : date ? `오늘의 재판 · ${ui.dateLabel(date)} · ${TIER[q.tier]}` : `${TIER[q.tier]} ${index}번`,
    ruleLiarsHtml: (n) => `이 중 딱 <strong>${n}명</strong>이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.`,
    ruleCulprit: "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다.",
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
    markFalse: "틀린 말",
    accuse: "범인으로 지목",
    notCulprit: "범인 아님",
    memory: (t) => `회귀의 기억: ${t}`,
    nbTitle: "히로의 수첩",
    nbSub: "가정 표와 메모. 이 브라우저에만 남는다",
    nbHelp: "열마다 \"이 사람이 범인이라면\"을 가정하고, 칸을 눌러 그때 각 카드의 말이 맞는지(○) 틀린지(×) 적는다. 맨 아래 줄에 × 수가 나온다.",
    nbCorner: "범인이라면 →",
    nbRow: (name) => `${name}의 말`,
    nbFoot: "× 수",
    nbCell: (c, r, v) => `${j(c, "이", "가")} 범인이라면 ${r}의 말: ${v === "o" ? "맞음" : v === "x" ? "틀림" : "비어 있음"}`,
    nbMemo: "메모",
    nbPlaceholder: "예: 셰리가 범인이면 코코의 말은 틀린다. 그러면 거짓말쟁이는…",
    nbClear: "수첩 비우기",
    nbClearConfirm: "한 번 더 누르면 지운다",
    nbClearWarn: "이 문제의 가정 표와 메모가 지워진다.",
    judgeIdle: "범인을 고르면 판결할 수 있다",
    accusation: (name) => `「${name}, 네가 바로 이 사건의 범인이다.」`,
    rewind: "되감는다: 범인이 아닌 사람 하나를 알아 온다",
    tally: (r, m) => `회귀 ${r}번 · 틀린 말 표시 ${m}개`,
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
    hiroWrong: "…내 판결이 틀렸어. 다시 한다.",      // 임시(Claude). 원작 대사와 겹치지 않는 사용자 문장으로 바꿀 것
    next: { random: "같은 난이도로 하나 더", daily: "지난 재판 목록으로", fixed: "다음 사건", tutorial: "쉬움 1번으로", last: "사건 기록으로" },
    footer: [
      "『魔法少女ノ魔女裁判』의 비공식 2차창작 팬게임 데모입니다. 원작의 권리는 원작자에게 있습니다.",
      "퍼즐은 프로그램이 만듭니다. 사건 기록의 퍼즐은 답(범인)이 하나뿐인지 두 가지 방법으로 검산했고, 무작위 재판은 만들 때마다 전수 조사로 확인합니다.",
      "프로그래밍은 AI(Claude)의 도움을 받아 진행했습니다.",
    ],
    // 튜토리얼 판에서만 각 구역 앞에 나오는 안내(순서대로 읽는다)
    guide: {
      incident: "사건과 피해자의 한마디. 이번에 풀 사건이다.",
      rules: "규칙. 이 판은 거짓말쟁이가 딱 1명이다. 거짓말쟁이와 범인은 다를 수 있다. 붉은 칸은 히로의 마법, 누런 칸은 소녀들의 마법 규칙이다(이 판에는 없다).",
      cards: "용의자들의 말. 「틀린 말」은 거짓 같은 말에 줄을 긋는 메모용이라 정답에 영향이 없다. 범인 같은 사람에게 「범인으로 지목」을 누른다.",
      notebook: "히로의 수첩에서 가정해 본다. 예: 에마가 범인이라면 에마의 말(셰리가 먹었다) ×, 셰리의 말(에마는 안 먹었다) ×, 코코의 말(범인은 에마) ○. × 가 2개인데 거짓말쟁이는 1명이어야 하니, 에마는 범인이 아니다. 셰리와 코코의 열도 채워 보자.",
      bar: "범인을 골랐으면 아래의 판결 버튼을 누른다. 틀려도 끝나지 않는다. 히로가 그날 아침으로 돌아가고 회귀가 1번 늘 뿐이다. 막히면 「되감는다」로 범인이 아닌 사람 하나를 알아 올 수 있다.",
    },
  };

  root.TrialLang = root.TrialLang || {};
  // 사건 글만(목록용. decorate 처럼 세계를 계산하지 않는다)
  const incidentText = (q) => K.incidents[q.incident].text;

  root.TrialLang.ko = { decorate, ui, josa: j, incidentText };
})(typeof window !== "undefined" ? window : globalThis);
