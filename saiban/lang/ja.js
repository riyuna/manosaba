// 「牢屋敷の番外裁判」日本語パック(일본어 팩). 한국어 팩(lang/ko.js)과 같은 모양(decorate, ui, incidentText)이다.
// 퍼즐은 두 언어가 같다(논리만 puzzles.js 에서 공유). 일본어 자료(이름·말투·사건·마법 문구)와 문법은 전부 이 파일 안에 있다.
// 캐릭터 대사(히로·피해자·말투 견본)는 사용자가 쓴 것(docs/ja-lines.md, Claude 교정 포함), 화면 문구·규칙·해설은 Claude.
// 말투는 견본 6줄(① 누가 했다 ② 나는 안 했다 ③ 범인은 ④ 누구의 말은 틀렸다 ⑤ 내가 진짜 ⑥ 누구는 거짓말쟁이)을 그대로 내도록 만들었다.
(function (root) {
  "use strict";
  const G = root.PUZZLES.gen;
  const Core = root.TrialCore;

  // ---- 이름 (공식 표기, docs/canon.md §5) ----
  const NAMES = {
    ema: "エマ", nanoka: "ナノカ", coco: "ココ", sherry: "シェリー", hanna: "ハンナ", noah: "ノア",
    reia: "レイア", miria: "ミリア", margo: "マーゴ", anan: "アンアン", arisa: "アリサ", meruru: "メルル",
  };
  const SURNAME = {
    ema: "桜羽", nanoka: "黒部", coco: "沢渡", sherry: "橘", hanna: "遠野", noah: "城ヶ崎",
    reia: "蓮見", miria: "佐伯", margo: "宝生", anan: "夏目", arisa: "紫藤", meruru: "氷上",
  };
  const FULL = Object.fromEntries(Object.keys(NAMES).map((x) => [x, SURNAME[x] + NAMES[x]]));
  const OWNER = Object.fromEntries(G.incidents.map((i) => [i.id, i.owner]));

  // ---- 사건 [자작] ----
  // text: 사건 문장(Claude). 「|」는 말마디(文節) 경계로, 화면 제목은 여기서만 줄을 바꾼다(사용자 2026-10-24 「お菓/子」 줄바꿈 지적). line: 피해자의 한마디(사용자 문장). 동사: ta 과거, te て형, masu ます형 어간,
  // nakatta 과거 부정(에마의 「食べなかったよ！」), rta·rte·rmasu 거친 말(아리사·코코, 한나의 「食いました」), kana 마고의 「た。べ。て。な。い。」용(짧고 작은 글자가 없는 것만).
  const MOTTE = { ta: "持っていった", te: "持っていって", masu: "持っていき", rta: "持ってった", rte: "持ってって", nakatta: "持っていかなかった" };
  const INCIDENTS = {
    sweets: { text: "ナノカが|作っておいた|お菓子が、|跡形もなく|消えた。", ta: "食べた", te: "食べて", masu: "食べ", rta: "食った", rte: "食って", rmasu: "食い", kana: "たべてない", nakatta: "食べなかった",
      line: "…私が作ったお菓子を食べたのは誰だ？早く出てきなさいよ。" },
    pot: { text: "シェリーが|大切に|している|植木鉢が、|ひっくり返されていた。", ta: "ひっくり返した", te: "ひっくり返して", masu: "ひっくり返し", nakatta: "ひっくり返さなかった",
      line: "事件です！これは名探偵シェリーちゃんへの挑戦状です！" },
    sketch: { text: "ノアの|スケッチブックに、|誰かが|落書きを|した。", ta: "落書きした", te: "落書きして", masu: "落書きし", nakatta: "落書きしなかった",
      line: "のあのスケッチブック、汚れちゃった～。うーん…誰がやったんだろう～？" },
    tea: { text: "アンアンが|大事に|飲んでいた|紅茶が、|一滴も|残っていなかった。", ta: "飲み干した", te: "飲み干して", masu: "飲み干し", nakatta: "飲み干さなかった",
      line: "わがはいが飲むために、わざわざ取っておいた紅茶が消えておる。犯人は速やかにわがはいの前に出て、自首するのだ！" },
    stream: { text: "配信中だった|ココの|機材の|電源を、|誰かが|切ってしまった。", ta: "切った", te: "切って", masu: "切り", nakatta: "切らなかった",
      line: "みんな、ちょっと待ってね～！…おい、誰があてぃしの配信勝手に切ったの？今すぐ出てきなよ！うぅ…やっぱ、あてぃしと推し以外、みんな消えちゃえばいいのに！" },
    books: { text: "マーゴが|整理しておいた|図書室の|本が、|すべて|逆さまに|並べられていた。", ta: "逆さまにした", te: "逆さまにして", masu: "逆さまにし", nakatta: "逆さまにしなかった",
      line: "あら、私が整理しておいた本が、全部逆さまになってるわね。フフッ、こんないたずらをする子とは、あとで二人きりの時間を過ごさなきゃね♡" },
    ribbon: { text: "ハンナの|リボンが|一つ|なくなった。", ...MOTTE,
      line: "わたくしのリボンが消えちゃいましたわよ！ 一体どうして、このわたくしにそんな仕打ちができるのですか？！" },
    diary: { text: "エマの|日記帳が、|誰かに|こっそり|開かれていた。", ta: "のぞいた", te: "のぞいて", masu: "のぞき", kana: "のぞいてない", nakatta: "のぞかなかった",
      line: "ああっ！ボクの日記、誰が開いたの！？恥ずかしい！へ、変なことは書いてないけど…それでも…！" },
    mirror: { text: "レイアの|鏡に、|口紅で|落書きが|してあった。", ta: "落書きした", te: "落書きして", masu: "落書きし", nakatta: "落書きしなかった",
      line: "おかしな舞台演出になってしまったな！こんなことをした犯人から、私がみんなを守ってみせよう！" },
    matches: { text: "アリサの|マッチ箱が|空っぽに|なっていた。", ...MOTTE,
      line: "誰だ、死にてえのか！？ウチのマッチ箱に手ぇ出したやつ、ぶっ殺してやる！" },
    bandage: { text: "メルルの|絆創膏の|箱が|空っぽに|なっていた。", ta: "使い切った", te: "使い切って", masu: "使い切り", nakatta: "使い切らなかった",
      line: "しくしく…絆創膏が全部なくなってしまいました。誰かが怪我をしたら、どうしましょう…？" },
    hairpin: { text: "ミリアの|ヘアピンが、|左右|ちぐはぐに|すり替えられていた。", ta: "すり替えた", te: "すり替えて", masu: "すり替え", nakatta: "すり替えなかった",
      line: "うわっ！おじさんのヘアピンが、左右ちぐはぐになっちゃった！どうしよう…" },
    letter: { text: "エマが|みんなに|渡そうと|書いた|手紙が、|くしゃくしゃに|なっていた。", ta: "くしゃくしゃにした", te: "くしゃくしゃにして", masu: "くしゃくしゃにし", nakatta: "くしゃくしゃにしなかった",
      line: "ううっ、みんなのために書いた手紙なのに！誰がくしゃくしゃにしたの？ボ、ボク…嫌われるようなことはしてないと思ってたのに…しくしく" },
    goggles: { text: "ナノカの|ゴーグルに、|指の|跡が|べったり|ついていた。", ta: "触った", te: "触って", masu: "触り", nakatta: "触らなかった",
      line: "…ゴーグルについたこの汚れはなんだ？誰も勝手に触るなと言ったはずなのに。触った犯人が黒幕に違いない。" },
    headphones: { text: "ココの|ヘッドホンの|コードが、|ぐちゃぐちゃに|絡まっていた。", ta: "絡ませた", te: "絡ませて", masu: "絡ませ", nakatta: "絡ませなかった",
      line: "誰？あてぃしのヘッドホンのコード絡ませたやつ！さっさと自首しなよ！" },
    magnifier: { text: "シェリーの|虫眼鏡が|消えた。", ...MOTTE,
      line: "あれれ？！ 名探偵の虫眼鏡が消えちゃいました～！ でも問題なし！ シェリーちゃんは天才名探偵なので、虫眼鏡がなくても犯人は見つけられます！" },
    fan: { text: "ハンナの|羽根扇子が|壊されていた。", ta: "壊した", te: "壊して", masu: "壊し", kana: "こわしてない", nakatta: "壊さなかった",
      line: "わたくしの羽根扇子がめちゃくちゃになっておりますわよ！これはわたくしへの侮辱でございま…ぶ、侮辱でありますわよ！？" },
    paints: { text: "ノアの|絵の具が、|全部|ひとつに|混ざっていた。", ta: "混ぜた", te: "混ぜて", masu: "混ぜ", kana: "まぜてない", nakatta: "混ぜなかった",
      line: "のあの絵の具、ぜーんぶ混ざってぐちゃぐちゃになっちゃった～。また出すの、大変なのに～。誰がやったのかな～？" },
    costume: { text: "レイアが|用意しておいた|舞台衣装が、|すべて|消えた。", ...MOTTE,
      line: "私が用意した舞台衣装が、すべて消えてしまうとは！これでは劇を見せられない！だが安心したまえ。犯人からみんなを守るのは、この私だ！" },
    bookmarks: { text: "ミリアの|法律の|本から、|しおりが|全部|抜かれていた。", ta: "抜いた", te: "抜いて", masu: "抜き", kana: "ぬいてない", nakatta: "抜かなかった",
      line: "うわっ！おじさんが読んでいたところに挟んでおいたしおり、誰が抜いちゃったの？どうしよう……最初から読み直さなきゃいけないのかな……" },
    candles: { text: "マーゴの|燭台から、|ロウソクが|すべて|消えた。", ...MOTTE,
      line: "あら、私が用意しておいたロウソクがなくなって、燭台だけ残ってるわ。フフッ、犯人はく～らいところで何をしたかったのかしら？早く出てきて、ゆっくり深いお話をしない？♡" },
    sketchpage: { text: "アンアンの|スケッチブックの|最後の|ページが、|破られていた。", ta: "破った", te: "破って", masu: "破り", nakatta: "破らなかった",
      line: "わがはいのスケッチブックを、何者かが台無しにした。その罪、この身がしかと刻みつけ、断罪してくれよう。" },
    hoodie: { text: "アリサの|パーカーに、|コーヒーが|こぼされていた。", ta: "こぼした", te: "こぼして", masu: "こぼし", kana: "こぼしてない", nakatta: "こぼさなかった",
      line: "ウチのパーカーにコーヒーこぼしたのはどこのどいつだ！黙って出てこい！ぶっ殺してやる！" },
    handkerchief: { text: "メルルが|いつも|持ち歩いていた|ハンカチが|消えた。", ...MOTTE,
      line: "ぐすっ。ハンカチがなくなってしまいました…。皆さんの涙は、どうやって拭いて差し上げればいいのでしょうか……？それでも……そのハンカチが誰かの役に立ったのなら、私は大丈夫です……。" },
  };

  // 마법 규칙: 한 줄 = 한 뜻(한국어 팩과 같은 줄 나눔). 미리아의 4번째 줄부터는 사용자 규칙 글을 옮긴 것
  const MAGIC = {
    anan: { name: "洗脳", text: [
      "アンアンは、アンアン以外の誰か一人を洗脳した。",
      "洗脳された人は、気まぐれに話す気まぐれ屋になる。その人の証言は、正しいことも間違っていることもある。",
      "洗脳された人は、嘘つきではなく気まぐれ屋として数える。",
    ] },
    margo: { name: "モノマネ", text: [
      "マーゴは、ほかの誰か一人の声をモノマネしたかもしれないし、していないかもしれない。",
      "モノマネしていたなら、その人の名前で出たカードの証言は、実はマーゴが言ったものだ。正しいかどうかはマーゴの役割で決まる。",
      "モノマネされた人は、何も言っていないことになる。嘘つきでも気まぐれ屋でもない。",
      "その人になりすました言葉なので、証言の中の「私」のように自分を指す言葉は、マーゴではなくカードに書かれた人を指す。口調もその人のものだ。",
      "例：マーゴがシェリーのモノマネで「私はやってません！」と言ったなら、「シェリーはやっていない」という意味だ。この証言が正しいかどうかは、マーゴの役割で決まる。",
      "ミリアの入れ替わりとは違う。入れ替わりでは、「私」はその体に入っている人だ。",
      "アンアンは筆談なので、モノマネできない。",
    ] },
    miria: { name: "入れ替わり", text: [
      "ミリアは誰か一人と魂が入れ替わっているかもしれないし、いないかもしれない。",
      "ミリアとその一人は、二人とも入れ替わりについて必ず一言ずつ話す。入れ替わっているなら、その二人が入れ替わっている。",
      "カードの証言は、その体に入っている人が言ったものだ。口調は証拠にならない。",
      "入れ替わりについての証言そのものが嘘かもしれない。",
      "嘘つきや犯人は、「その人の元の体」にあたる人を選べばいい。",
      "犯行はすべて、「入れ替わり」のない状態で行われたものとする。",
      "たとえば、エマとミリアの体が入れ替わっていて、エマが犯行に及び、真実を言うシェリーが「エマさんは嘘つきですね！」と言ったなら、ミリアの体に入っているエマの証言が嘘だという意味だ。",
      "また、犯人がエマなら、「桜羽エマ」と書かれたカードを選べばいい。",
    ] },
    nanoka: { name: "幻視", text: [
      "ナノカは物に触れて、その物の過去を幻視で見る。",
      "幻視そのものは間違わないが、ぼんやりしていて、犯人を数人に絞るだけだ。",
      "それを伝えるナノカの証言は、ほかの証言と同じく、ナノカが正直者のときだけ正しい。",
      "その証言が間違っているなら、証言に出てきた人は全員犯人ではない。",
    ] },
    coco: { name: "千里眼", text: [
      "ココは千里眼で、自分を見ている人と、その人がいる場所がわかる。",
      "犯行時刻に別の場所でココの生配信を見ていた人は、犯人ではない。配信中だったココも犯人ではない。",
      "だからココの千里眼の証言は、「証言に出てきた人たちとココは、全員犯人ではない」という一つの証言だ。",
      "ココが正直者のときだけ正しい。間違っているなら、その中（ココを含む）の一人が犯人だ。犯人はいつも一人なので、「全員が犯人」はない。",
    ] },
  };

  const ROLES = { H: "正直者", L: "嘘つき", T: "気まぐれ屋" };
  const NUMS = { 1: "一人", 2: "二人", 3: "三人", 4: "四人", 5: "五人", 6: "六人" };
  const ON_AIR = "も、もちろん、あてぃしもあの時配信してたんだから、犯人じゃないってば！";    // 사용자 문장. 코코의 천리안 말 끝에 붙는다

  // ---- 말투 ----
  // 문체(reg)마다 서술어 꼴. wrong·right 의 "n" 은 명사(뒤에 n 끝맺음), "v" 는 용언(뒤에 v 끝맺음).
  const REG = {
    casual: { did: (i) => i.ta, neg: (i) => i.te + "ない", wrong: ["間違ってる", "v"], right: ["合ってる", "v"], swapped: "入れ替わってる",
              none: "いない", said: "って言ってた", saw: "見た", watched: "見てた", which: "どっちか" },
    formal: { did: (i) => i.ta, neg: (i) => i.te + "いない", wrong: ["間違っている", "v"], right: ["正しい", "v"], swapped: "入れ替わっている",
              none: "いない", said: "と言っていた", saw: "見た", watched: "見ていた", which: "どちらか" },
    polite: { did: (i) => i.masu + "ました", neg: (i) => i.te + "いません", wrong: ["間違っています", "v"], right: ["正しいです", "v"], swapped: "入れ替わっています",
              none: "いません", said: "と言っていました", saw: "見ました", watched: "見ていました", which: "どちらか" },
    desu: { did: (i) => i.masu + "ました", neg: (i) => i.te + "ません", wrong: ["間違ってます", "v"], right: ["正しいです", "v"], swapped: "入れ替わってます",
            none: "いません", said: "って言ってました", saw: "見ました", watched: "見てました", which: "どちらか" },
    rough: { did: (i) => i.rta || i.ta, neg: (i) => (i.rte || i.te) + "ねえ", wrong: ["デタラメ", "n"], right: ["合ってる", "v"], swapped: "入れ替わってる",
             none: "いねえ", said: "って言ってた", saw: "見た", watched: "見てた", which: "どっちか" },
  };

  // self: 1인칭(공식 호칭표), call: 남 부르는 법(ちゃん·さん·くん, "" 이름만, surname 성, full 풀네임), nick: 호칭표의 별명,
  // meta: 「○○の言ってることは」의 꼴, v·n: 용언·명사 뒤 끝맺음(vk·nk 로 말 종류별 덮어쓰기), pre·post: 말 종류별 앞뒤 덧말(배열이면 문제마다 하나),
  // tag: 이름 뒤에 붙는 말(별명 뒤에는 안 붙음), swapDeny: 「내가 진짜 ○○」 견본 그대로. 덧말은 아무것도 주장하지 않는 말만.
  const V = {
    ema: { self: "ボク", call: "ちゃん", reg: "casual", over: { neg: (i) => i.nakatta }, meta: "の言ってることは", v: "よ！", n: "だよ！",
           swapDeny: "ボクが本物のエマだよ！" },
    anan: { self: "わがはい", call: "", reg: "formal", over: { wrong: ["誤り", "n"] }, meta: "の言葉は", v: "のである。", n: "である。", written: true,
            swapDeny: "わがはいが本物のアンアンである。" },
    noah: { self: "のあ", selfIsName: true, call: "ちゃん", reg: "casual", meta: "の言ってること、", v: "よ～", n: "だよ～",
            swapDeny: "本物ののあは、こっちだよ～" },
    reia: { self: "私", call: "くん", reg: "formal", meta: "の言葉は", v: "！", n: "だ！",
            pre: { accuse: "宣言する！", culprit_is: "宣言する！", meta_false: "ああ、なんと！", meta_true: "ああ、なんと！" },
            post: { deny_self: "この舞台に、そしてみんなに告げる！" },
            swapDeny: "私こそが本物のレイアだ！" },
    miria: { self: "おじさん", call: "ちゃん", reg: "casual", meta: "の言ってること、", v: "よ。", n: "だよ。",
             vk: { accuse: "よ…", deny_self: "よ！" }, nk: { culprit_is: "だよ…。" },
             pre: { deny_self: "お…" }, post: { accuse: "あ、あはは…", culprit_is: "おじさん、こういうの苦手でさ…" },
             swapDeny: "本物のおじさんはこっちだよ。" },
    margo: { self: "私", call: "ちゃん", reg: "casual", meta: "の言ってること、", v: "わよ♡", n: "よ♡", nk: { role_is: "ね♡" },
             pre: { accuse: "あら、", deny_self: "フフッ、", meta_false: "フフッ、", meta_true: "フフッ、", self_or: "フフッ、" },
             syllables: true, swapDeny: "あら、本物のマーゴはこっちよ♡" },
    nanoka: { self: "私", call: "full", reg: "casual", over: { right: ["正しい", "v"] }, meta: "の言葉は", v: "。", n: "だ。",
              omae: true, swapDeny: "私が本物のナノカだ。" },
    arisa: { self: "ウチ", call: "surname", reg: "rough", meta: "の言ってることは", v: "。", n: "だ。",
             vk: { accuse: "ぞ。" }, nk: { role_is: "だ！" },
             nick: { miria: "おっさん", sherry: "ハエ女" }, tag: { accuse: "のやつ" },
             post: { deny_self: "失せろ。", meta_false: ["黙れ。", "うっせえ。"], culprit_is: "これでいいか？" },
             swapDeny: "おい、ウチが本物のアリサだ。" },
    sherry: { self: "私", selfName: "シェリーちゃん", call: "さん", reg: "desu", meta: "の証言は", v: "！", n: "です！",
              vk: { meta_false: "ね！", meta_true: "ね！" }, nk: { culprit_is: "ですよ！", role_is: "ですね！" },
              pre: { culprit_is: "はいはい！この名探偵シェリーちゃんの推理を発表します！", deny_self: "ふふん、" },
              inverted: true, swapDeny: "私が本物のシェリーちゃんですよ！" },
    hanna: { self: "わたくし", selfName: "遠野ハンナ", call: "さん", reg: "polite", over: { did: (i) => (i.rmasu || i.masu) + "ました" },
             meta: "の言ってることは", v: "わよ！", n: "ですわ！", vk: { deny_self: "！" },
             nick: { sherry: "ゴリラ女" }, nickPre: "あの", pre: { deny_self: "そ、その…" },
             swapDeny: "だぁっ、全く、わたくしが本物の遠野ハンナですわ！" },
    coco: { self: "あてぃし", call: "", reg: "casual", over: { did: (i) => i.rta || i.ta }, meta: "の言ってること、", v: "よ", n: "だよ",
            vk: { deny_self: "し！", either: "よ。", meta_false: "し", meta_true: "し、", swap_claim: "よ、" },
            nk: { culprit_is: "だよ、", role_is: "じゃん。", swap_claim: "だよ、" },
            nick: { ema: "エマっち", anan: "ヒッキー", noah: "ノアっち", reia: "レイアっち", miria: "おっさん", arisa: "ヤンキー",
                    sherry: "怪力ゴリラ女", hanna: "お嬢", meruru: "メルちゃん" },
            post: { accuse: "ｗｗ", culprit_is: "マジ", deny_self: "ディスらないでよね！", either: "草", meta_false: "ｗｗ", meta_true: "それな", swap_claim: "マジで" },
            zenzen: true, swapDeny: "あてぃしが本物のココだし！" },
    meruru: { self: "私", call: "さん", reg: "polite", meta: "の言っていることは", v: "…", n: "です…", vk: { deny_self: "…！" },
              pre: { accuse: "あの…" }, post: { meta_false: "あ…す、すみません！" }, kesshite: true, hesitant: true,
              swapDeny: "私が本物のメルルです…" },
  };
  // 자기를 「私」 말고 다르게 부르는 말 중 안내할 것(그 사람 자신이라는 게 바로 안 보일 수 있는 것)
  const SELF_GUIDE = ["anan", "noah", "miria", "coco"];

  const END = /[。！？…～♡]$/;
  // 별명·성 표시(화면에서 점선 밑줄·툴팁): \u0001누구\u0002글\u0003
  const mark = (x, w) => `\u0001${x}\u0002${w}\u0003`;
  const unmark = (w) => w.replace(/\u0001[a-z]+\u0002|\u0003/g, "");
  const stop = (s) => (END.test(s) ? s : s + "。");

  // 말하는 사람(말투 v)이 x 를 부르는 말
  function call(v, x) {
    if (v.nick && v.nick[x]) return (v.nickPre || "") + mark(x, v.nick[x]);
    if (v.call === "surname") return mark(x, SURNAME[x]);
    if (v.call === "full") return FULL[x];
    return NAMES[x] + v.call;
  }

  // x 카드의 말 하나를 voice 의 말투로 쓴다. plain 이면 앞뒤 덧말 없이(전해 들은 말 속에 넣을 때). ctx = { inc, alt }
  function say(st, x, voice, ctx, plain) {
    const [kind, args] = st;
    const inc = ctx.inc;
    const v = V[voice];
    const R = { ...REG[v.reg], ...(v.over || {}) };
    const dk = kind === "iam" ? "swap_claim" : kind;          // 정체 주장은 뒤바뀜 주장의 덧말·끝맺음을 같이 쓴다
    const a0 = args[0], a1 = args[1];
    const tag = typeof a0 === "string" && v.nick && v.nick[a0] ? "" : (v.tag && v.tag[dk]) || "";
    const nm = (y) => call(v, y);
    const vE = v.vk && dk in v.vk ? v.vk[dk] : v.v;
    const nE = v.nk && dk in v.nk ? v.nk[dk] : v.n;
    const pred = ([w, t]) => w + (t === "n" ? nE : vE);
    let core;
    let whole = false;            // 견본 문장 그대로(덧말을 더 붙이지 않는다)
    switch (kind) {
      case "accuse":
        core = v.inverted ? `${nm(a0)}${tag}ですね、${inc.ta}のは！` : `${nm(a0)}${tag}が${R.did(inc)}${vE}`;
        break;
      case "culprit_is":
        core = v.omae ? `犯人は${nm(a0)}、お前${nE}` : v.hesitant ? `犯人は…${nm(a0)}、${nE}` : `犯人は${nm(a0)}${nE}`;
        break;
      case "deny": core = `${nm(a0)}は${R.neg(inc)}${vE}`; break;
      case "deny_self":
        core = v.syllables && inc.kana ? `${v.self}は${[...inc.kana].join("。")}。♡`
          : `${v.self}は${v.kesshite ? "決して" : ""}${R.neg(inc)}${vE}`;
        break;
      case "either": core = `${nm(a0)}か${nm(a1)}の${R.which}が${R.did(inc)}${vE}`; break;
      case "self_or": core = `${v.self}か${nm(a0)}の${R.which}が${R.did(inc)}${vE}`; break;
      case "meta_false": core = `${nm(a0)}${v.meta}${v.zenzen ? "全然" : ""}${pred(R.wrong)}`; break;
      case "meta_true": core = `${nm(a0)}${v.meta}${pred(R.right)}`; break;
      case "swap_claim": core = `${nm("miria")}と${nm(a0)}は、魂が${R.swapped}${vE}`; break;
      case "iam": {                 // 「実はボクはエマだよ！」(이 카드의 말투 주인 = 주장하는 영혼)
        const mine = voice === a0;
        core = mine && v.selfIsName ? `実は、${v.self}${nE}` : `実は${v.self}は${(mine && v.selfName) || NAMES[a0]}${nE}`;
        break;
      }
      case "swap_deny":             // 「ボクが本物のエマだよ！」(견본 그대로)
        if (voice === x && v.swapDeny) { core = v.swapDeny; whole = true; }
        else core = `${v.self}が本物の${NAMES[x]}${nE}`;
        break;
      case "role_is": core = v.omae ? `${nm(a0)}、お前は${ROLES[a1]}${nE}` : `${nm(a0)}は${ROLES[a1]}${nE}`; break;
      case "culprit_role": core = `犯人は${ROLES[a0]}${nE}`; break;
      case "count_is": core = a1 === 0 ? `${ROLES[a0]}は${R.none}${vE}` : `${ROLES[a0]}は${NUMS[a1]}${nE}`; break;
      case "vision": core = `幻視で${R.saw}${stop(vE)}犯人は${args.map(nm).join("、")}のうちの誰か${nE}`; break;
      case "alibi": core = `千里眼で${R.saw}けど、あの時${nm(a0)}と${nm(a1)}は別の場所で${v.self}の配信を${R.watched}${vE}`; break;
      case "hearsay": {
        const [o, c] = v.written ? ["「", "」"] : ["『", "』"];     // 카드가 「」(필담은 『』)로 싸이므로 안쪽은 다른 괄호
        core = `${nm(a0)}は${o}${say(a1, a0, a0, ctx, true)}${c}${R.said}${vE}`;
        break;
      }
      default: throw new Error(kind);
    }
    if (plain || whole) return core;
    const pick = (p) => (Array.isArray(p) ? p[ctx.alt % p.length] : p || "");
    let out = pick(v.pre && v.pre[dk]) + core + pick(v.post && v.post[dk]);
    if (kind === "alibi") out = stop(out) + ON_AIR;      // 코코의 「あてぃしも配信中」는 천리안 말의 일부다
    return out;
  }

  // 카드 하나의 말들. 카드의 말투 주인의 말투로 쓴다.
  function render(sts, x, ctx) {
    const voice = Core.voiceOf(sts, x);
    return sts.map((st) => say(st, x, voice, ctx, false));
  }

  // ---- 해설 ----

  function magicTail(p) {
    const parts = [];
    if (p.magic.includes("anan")) parts.push("アンアンが誰を洗脳したとしても");
    if (p.magic.includes("margo")) parts.push("マーゴが誰のモノマネをしていても、していなくても");
    if (p.magic.includes("miria")) {
      const pair = Core.swapPair(p);
      parts.push(pair ? `ミリアと${NAMES[pair]}が入れ替わっていても、いなくても` : "ミリアが誰と入れ替わっていても、いなくても");
    }
    return parts.length ? `（${parts.join("、")}）` : "";
  }

  const cmp = (a, b) => { for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return a[i] < b[i] ? -1 : 1; return 0; };
  const minBy = (xs, key) => xs.reduce((best, x) => (cmp(key(x), key(best)) < 0 ? x : best));
  const countOf = (roles, r) => roles.split("").filter((x) => x === r).length;
  const magicN = (w) => (w.m !== null ? 1 : 0) + (w.s !== null ? 1 : 0);

  // その世界で使った魔法の仮定:「（レイアが洗脳されていて、ミリアとエマが入れ替わっていたと仮定しても）」
  function assumeNote(p, w) {
    const stems = [];          // [て形, た形]
    const ts = p.speakers.filter((x, i) => w.roles[i] === "T").map((x) => NAMES[x]);
    if (p.tier === "veryhard" && ts.length) stems.push([`${ts.join("、")}が気まぐれ屋で`, `${ts.join("、")}が気まぐれ屋だった`]);
    else if (p.magic.includes("anan") && ts.length) stems.push([`${ts[0]}が洗脳されていて`, `${ts[0]}が洗脳されていた`]);
    if (w.m) stems.push([`${NAMES[w.m]}のカードがマーゴのモノマネで`, `${NAMES[w.m]}のカードがマーゴのモノマネだった`]);
    if (w.s) stems.push([`ミリアと${NAMES[w.s]}が入れ替わっていて`, `ミリアと${NAMES[w.s]}が入れ替わっていた`]);
    if (!stems.length) return "";
    return `（${stems.slice(0, -1).map((s) => s[0] + "、").join("")}${stems[stems.length - 1][1]}と仮定しても）`;
  }

  function mixedCards(p, c, s) {
    return p.speakers.filter((x) => {
      const sts = p.statements[x];
      if (sts.length < 2 || sts.some(([k]) => k.startsWith("meta") || k === "hearsay")) return false;
      return new Set(sts.map((q) => Core.content(q, x, Core.soulIn(x, s), { c, role: {}, s, heard: {}, truth: null }))).size === 2;
    });
  }

  // 間違った判決の解説: どこで行き詰まるかを示す(한국어 팩 explainWrong 과 같은 판단)
  function explainWrong(p, c) {
    const who = `${NAMES[c]}が犯人なら`;
    const tail = magicTail(p);
    const said = (w) => { const label = falseLabel(p, w.F); return label ? `${label}${p.magic.includes("miria") ? "のカード" : ""}の証言が間違いになり` : "間違った証言が一つもなく"; };
    if (p.tier === "veryhard" && p.mode === "hidden") {
      const maj = Math.floor(p.speakers.length / 2) + 1;
      const ws = Core.worlds({ ...p, relax: true }).filter((w) => w.c === c);
      if (ws.length) {
        const w = minBy(ws, (w) => [-countOf(w.roles, "H"), magicN(w), w.roles, w.m || "", w.s || ""]);
        return `${who}、${said(w)}、正直者は${countOf(w.roles, "H")}人だけになる${assumeNote(p, w) || tail}。過半数（${maj}人以上）でなければならない。`;
      }
      return `${who}、正直者が過半数（${maj}人以上）になるように証言を組み合わせられない${tail}。`;
    }
    const ws = Core.worlds({ ...p, n: null }).filter((w) => w.c === c);
    if (ws.length) {
      const w = minBy(ws, (w) => [Math.abs(countOf(w.roles, "L") - p.n), magicN(w), countOf(w.roles, "L"), w.roles, w.m || "", w.s || ""]);
      return `${who}、${said(w)}、嘘つきが${countOf(w.roles, "L")}人になる${assumeNote(p, w) || tail}。${p.n}人でなければならない。`;
    }
    if (p.tier === "veryhard") return `${who}、嘘つき${p.n}人・気まぐれ屋${p.t + (p.magic.includes("anan") ? 1 : 0)}人では、証言のつじつまが合わない${tail}。`;
    const both = "正直者でも嘘つきでもありえない";
    const pair = p.magic.includes("miria") ? Core.swapPair(p) : null;
    if (!p.magic.includes("anan") && pair) {
      const a = mixedCards(p, c, null), b = mixedCards(p, c, pair);
      if (a.length && b.length) {
        if (a[0] === b[0]) return `${who}、ミリアと${NAMES[pair]}が入れ替わっていても、いなくても、${NAMES[a[0]]}のカードの二つの証言のうち一つだけが正しくなる。その証言をした人は${both}。`;
        return `${who}、ミリアと${NAMES[pair]}が入れ替わっていなければ${NAMES[a[0]]}のカードの、入れ替わっていれば${NAMES[b[0]]}のカードの、二つの証言のうち一つだけが正しくなる。その証言をした人は${both}。`;
      }
    } else if (!p.magic.includes("anan") && !p.magic.includes("miria")) {
      const a = mixedCards(p, c, null);
      if (a.length) return `${who}、${NAMES[a[0]]}の二つの証言のうち一つだけが正しくなる。${NAMES[a[0]]}は${both}${tail}。`;
    }
    return `${who}、証言どうしが食い違ってしまう${tail}。`;
  }

  // 間違った証言の一覧: 全部間違っているカードは名前だけ、一部だけなら「エマ（②）」
  function falseLabel(p, F) {
    const out = [];
    for (const x of p.speakers) {
      const n = p.statements[x].length;
      const bad = [...Array(n).keys()].filter((i) => F.includes(Core.slotId(x, i)));
      if (bad.length && bad.length === n) out.push(NAMES[x]);
      else if (bad.length) out.push(`${NAMES[x]}（${bad.map((i) => "①②③"[i]).join("")}）`);
    }
    return out.join("、");
  }

  function explainRight(p, ws) {
    const sp = p.speakers, magic = p.magic;
    const lines = [];
    const F = Core.falseSays(ws);
    if (F && F.length) lines.push((!magic.length && p.tier !== "veryhard" ? "嘘をついた人：" : "間違った証言をしたカード：") + falseLabel(p, F));
    if (p.tier === "veryhard") {
      const at = (i) => new Set(ws.map((w) => w.roles[i]));
      for (const r of ["H", "L", "T"]) {
        const fixed = sp.filter((x, i) => at(i).size === 1 && at(i).has(r));
        if (fixed.length) lines.push(`${ROLES[r]}：${fixed.map((x) => NAMES[x]).join("、")}`);
      }
      const loose = sp.map((x, i) => [x, ["H", "L", "T"].filter((r) => at(i).has(r))]).filter(([, rs]) => rs.length > 1);
      if (loose.length) {
        lines.push("証言だけでは役割が決まらない人："
          + loose.map(([x, rs]) => `${NAMES[x]}（${rs.map((r) => ROLES[r]).join("または")}）`).join("、"));
      }
      if (magic.includes("anan")) lines.push("気まぐれ屋のうち（アンアン以外の）一人は、アンアンに洗脳された人だ。");
    } else if (magic.includes("anan")) {
      const bs = sp.filter((x, i) => ws.some((w) => w.roles[i] === "T"));
      if (bs.length === 1) lines.push(`${NAMES[bs[0]]}はアンアンに洗脳されて気まぐれに話していただけで、嘘つきではない。`);
      else lines.push(`${bs.map((x) => NAMES[x]).join("、")}のうち一人は、アンアンに洗脳されて気まぐれに話していただけで、嘘つきではない。誰なのかは証言だけではわからない。`);
    }
    if (magic.includes("margo")) {
      const ms = new Set(ws.map((w) => w.m));
      if (ms.size === 1 && ms.has(null)) lines.push("マーゴは誰のモノマネもしていなかった。");
      else if (ms.size === 1) lines.push(`${NAMES[[...ms][0]]}の名前で出た証言は、実はマーゴのモノマネだった。`);
      else if (ms.has(null)) lines.push("マーゴが誰のモノマネをしたのか（したのかどうかも）は、証言だけでは決まらない。");
      else lines.push("マーゴがモノマネをしたのは確かだが、誰のモノマネだったのかは証言だけでは決まらない。");
    }
    if (magic.includes("miria")) {
      const ss = new Set(ws.map((w) => w.s));
      if (ss.size === 1 && ss.has(null)) lines.push("ミリアは誰とも入れ替わっていなかった。");
      else if (ss.size === 1) {
        const z = NAMES[[...ss][0]];
        lines.push(`ミリアと${z}は魂が入れ替わっていた。ミリアのカードの証言は${z}が、${z}のカードの証言はミリアが言ったものだ。`);
      }
      else lines.push("ミリアが誰と入れ替わったのか（入れ替わったのかどうかも）は、証言だけでは決まらない。");
    }
    Core.reports(p).forEach((q, i) => {
      const hs = new Set(ws.map((w) => w.heard[i]));
      const said = `${NAMES[q.by]}が伝えた${NAMES[q.who]}の証言`;
      if (hs.size === 1 && hs.has(true)) {
        const vs = new Set(ws.map((w) => Core.content(q.st, q.who, q.who,
          { c: w.c, role: Object.fromEntries(sp.map((x, k) => [x, w.roles[k]])), s: w.s, heard: null, truth: null })));
        const tail = vs.size > 1 ? "" : vs.has(true) ? "その証言は正しかった。" : "その証言は間違っていた。";
        lines.push(`${said}は、本当に${NAMES[q.who]}が言ったものだった。${tail}`);
      }
      else if (hs.size === 1) lines.push(`${said}は、作り話だった。`);
      else lines.push(`${said}が本当かどうかは、わからない。`);
    });
    lines.push(`犯人：${NAMES[ws[0].c]}`);
    return lines;
  }

  function magicView(q) {
    const kinds = new Set(q.speakers.flatMap((s) => q.logic[s].map((st) => st[0])));
    const ids = q.magic_ids.concat([["nanoka", "vision"], ["coco", "alibi"]].filter(([, k]) => kinds.has(k)).map(([x]) => x));
    return ids.map((x) => ({ who: NAMES[x], name: MAGIC[x].name, text: MAGIC[x].text }));
  }

  // 퍼즐마다 정해지는 덧말 고르기(아리사의 「黙れ。」/「うっせえ。」, 사용자 2026-10-23 「문제마다 둘 중 하나」)
  const altOf = (q) => [...String(q.key || q.id)].reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) >>> 0, 7);

  function decorate(q) {
    const inc = INCIDENTS[q.incident];
    const ctx = { inc, alt: altOf(q) };
    const owner = OWNER[q.incident];
    const p = Core.problem(q);
    const ws = Core.worlds(p);
    const whyNot = {};
    for (const s of q.speakers) {
      if (s === q.answer) continue;
      Object.defineProperty(whyNot, s, {
        enumerable: true, configurable: true,
        get() { const v = explainWrong(p, s); Object.defineProperty(whyNot, s, { value: v, enumerable: true }); return v; },
      });
    }
    const out = {
      id: q.id, key: q.key, tier: q.tier, incident: inc.text.replace(/\|/g, "\u200b"), verb: inc.ta,     // 줄바꿈 자리 = 폭 없는 공백
      victim: { id: owner, name: FULL[owner], line: inc.line, written: !!V[owner].written },
      n: q.n,
      magic: magicView(q),
      suspects: q.speakers.map((s) => {
        const voice = Core.voiceOf(q.logic[s], s);
        return { id: s, name: NAMES[s], full: FULL[s], written: !!V[voice].written, voice: voice !== s ? NAMES[voice] : null,
                 says: render(q.logic[s], s, ctx).map(unmark) };
      }),
      marked: Object.fromEntries(q.speakers.map((s) => [s, render(q.logic[s], s, ctx)])),     // 별명·성 표시가 든 말(화면용)
      answer: q.answer, why_not: whyNot, solution: explainRight(p, ws),
      false_says: Core.falseSays(ws), card_roles: Core.cardRoles(p, ws), worlds: ws.length, logic: q.logic, magic_ids: q.magic_ids.slice(),
    };
    if (q.seed !== undefined) out.seed = q.seed;
    return out;
  }

  function selfWords(q) {
    const voices = [...new Set(q.speakers.map((s) => Core.voiceOf(q.logic[s], s)))];
    return voices.filter((s) => SELF_GUIDE.includes(s)).map((s) => ({ name: NAMES[s], word: V[s].self }));
  }

  function nickWords(q) {
    const out = [];
    const seen = new Set();
    const visit = (st, voice) => {
      const [kind, args] = st;
      if (kind === "hearsay") { visit(args[1], args[0]); return; }
      const nicks = V[voice].nick || {};
      for (const a of args) {
        const nick = typeof a === "string" && nicks[a];
        if (nick && nick !== NAMES[a] && !seen.has(voice + a)) { seen.add(voice + a); out.push({ by: voice, nick, who: a }); }
      }
      if (kind === "swap_claim" && nicks.miria && !seen.has(voice + "miria")) { seen.add(voice + "miria"); out.push({ by: voice, nick: nicks.miria, who: "miria" }); }
    };
    for (const s of q.speakers) {
      const voice = Core.voiceOf(q.logic[s], s);
      for (const st of q.logic[s]) if (st[0] !== "iam") visit(st, voice);
    }
    return out;
  }

  // ---- 화면 문구 ----
  const TIER = { easy: "やさしい", normal: "ふつう", hard: "むずかしい", veryhard: "とてもむずかしい", daily: "今日の裁判", tutorial: "チュートリアル" };
  // 문제 번호: 「やさしい」の1番(사용자 2026-10-24: 「やさしい1番」은 '친절한 1번'으로 읽힐 수 있다. 「一番」은 '제일'이라 숫자로)
  const numbered = (tier, n) => `「${TIER[tier]}」の${n}番`;
  const VH_BAR = "「とてもむずかしい」では、犯人と一緒にすべてのカードに役割（真・偽・気まぐれ屋）の印をつけないと、判決ボタンが押せない。犯人が合っていても、役割が一つでも間違っていれば間違った判決になり、ヒロはその日の朝に戻る。";
  const ui = {
    lang: "ja",
    title: "牢屋敷の番外裁判",
    eyebrow: "魔法少女ノ魔女裁判 非公式ファンメイド・論理パズル",
    titleParts: ["牢屋敷の", "番外裁判"],
    intro: "牢屋敷で「正しくない」事件が起きている。それを正すのは私、二階堂ヒロだ。少女たちの証言のうち、いくつかは嘘だ。すべての証言が矛盾なく成り立つ場合は、ただ一つ。その場合の犯人を捜し出し、判決を下そう。",     // 사용자 문장
    noticeHtml: [
      "<b>非公式のファンメイド作品</b>です。公式の画像・音声・テキストは使っておらず、事件と台詞は原作の台詞を写さずに新しく書きました。",
      "<b>AI利用</b>：プログラミング（パズル生成、唯一解検証、UI）と一部の文章（ルール・解説・案内など）には、AI(Claude)を一部使っております。",
      "原作のストーリーには触れませんが、キャラクターや魔法（ヒロの魔法を含む）など原作の設定が出てくるので、<b>ネタバレにご注意</b>ください。",
    ],
    noticeJa: "非公式のファンメイド作品・ネタバレあり・AI利用",
    tier: TIER,
    tierNote: {
      easy: "容疑者3〜4人、嘘つき1人。魔法なし",
      normal: "魔法のルールが一つ加わる",
      hard: "容疑者が増え、証言についての証言と魔法が混ざる。ナノカの幻視、ココの千里眼も出てくる",
      veryhard: "気まぐれ屋が別にいて、証言が二つある人や伝聞の証言が登場する。出てくる魔法に制限はなく、人数を隠す回もある。判決のときにすべてのカードの役割も当てなければならない",
    },
    tutorialTitle: "チュートリアル",
    tutorialDesc: "初めてなら「基礎」から。何を押せばいいのかを一回で案内する。「応用」では、魔法と「とてもむずかしい」のルールを一つずつ練習する。",
    tutorials: [
      { id: "tutorial", label: "基礎" },
      { id: "tutorial-anan", label: "応用1・洗脳" },
      { id: "tutorial-margo", label: "応用2・モノマネ" },
      { id: "tutorial-miria", label: "応用3・入れ替わり" },
      { id: "tutorial-sight", label: "応用4・幻視と千里眼" },
      { id: "tutorial-veryhard", label: "応用5・気まぐれ屋" },
      { id: "tutorial-hearsay", label: "応用6・伝聞" },
    ],
    tutorialDone: "判決済み",
    dailyTitle: "今日の裁判",
    dailyOpen: "裁判を開く",
    dateLabel: (iso) => { const [y, m, d] = iso.split("-").map(Number); return `${y}年${m}月${d}日`; },
    duration: (ms) => {
      const s = Math.max(0, Math.floor(ms / 1000)), h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), r = s % 60;
      return h ? `${h}時間${m}分${r}秒` : m ? `${m}分${r}秒` : `${r}秒`;
    },
    archiveOpen: "過去の裁判",
    archiveTitle: "過去の今日の裁判",
    archiveNote: "2026年10月20日から、日付ごとに一問。日本時間（韓国時間と同じ）の午前0時に新しい問題が開く。",
    today: "今日",
    record: (rec, duration) => rec ? `判決済み・死に戻り${rec.r}回${rec.t == null ? "" : `・${duration(rec.t)}`}` : "まだ判決前",
    randomTitle: "ランダム裁判",
    preparing: "裁判を準備中…",
    randomDesc: "押すたびに、新しい事件をその場で作る。唯一解かどうかは検証するが、面白さと難しさは運まかせ。",
    records: "事件記録",
    recordsNote: "判決を終えた事件は赤い枠で、一度も死に戻らずに終えた事件は赤く塗って示す",
    tileLabel: (tier, i, rec) => `${numbered(tier, i)}${rec ? `、判決済み、最少死に戻り${rec.r}回` : ""}`,
    back: "事件記録へ",
    randomCode: (tier, seed) => numbered(tier, seed),
    copyLink: "この問題のリンクをコピー",
    copiedLink: "リンクをコピーした",
    copyFallback: "このURLをコピーして共有すれば、同じ問題が開く：",
    badLink: (code) => `リンクの問題（${code}）を作れなかった。事件記録に戻った。`,
    shareX: "Twitter（X）で共有",
    shareCopy: "結果をコピー",
    shareCopied: "結果をコピーした",
    shareLabel: (q, index, date) => q.seed !== undefined ? `ランダム裁判 ${ui.randomCode(q.tier, q.seed)}`
      : date ? `今日の裁判 ${ui.dateLabel(date)}（${TIER[q.tier]}）` : numbered(q.tier, index),
    shareText: (label, hints, wrongs, time) => `牢屋敷の番外裁判・${label}\n`
      + (hints ? `ヒント${hints}個` : "ヒントなし") + "、"
      + (wrongs ? `誤審${wrongs}回の末に` : "")
      + `${time}で解きました！`,
    shareTags: "#番外裁判",     // 사용자 2026-10-24: 결과 공유가 2차 창작 태그를 덮지 않게 전용 태그로(한국어·일본어 같은 태그)
    where: (q, index, date) => q.id.startsWith("tutorial") ? `チュートリアル・${ui.tutorials.find((t) => t.id === q.id).label}`
      : q.seed !== undefined ? `ランダム裁判・${ui.randomCode(q.tier, q.seed)}`
      : date ? `今日の裁判・${ui.dateLabel(date)}・${TIER[q.tier]}` : numbered(q.tier, index),
    ruleLiarsHtml: (n, anan) => `この中のちょうど<strong>${n}人</strong>が嘘をついている。嘘つきの証言は間違っていて、`
      + (anan ? "アンアンに洗脳された人の証言は正しいかどうかわからず、" : "") + "残りの人の証言は正しい。",
    ruleRolesHtml: (q) => (q.mode === "shown"
      ? `この中のちょうど<strong>${q.n}人</strong>が嘘つき、<strong>${q.t + (q.magic_ids.includes("anan") ? 1 : 0)}人</strong>が気まぐれ屋だ${q.magic_ids.includes("anan") ? "（アンアンに洗脳された人を含む）" : ""}。`
      : `嘘つきと気まぐれ屋が何人いるかはわからない。ただし<strong>正直者が過半数（半分より多い）</strong>だ。この裁判は${q.speakers.length}人なので、正直者は<strong>${Math.floor(q.speakers.length / 2) + 1}人以上</strong>だ${q.magic_ids.includes("anan") ? "（アンアンに洗脳された人は気まぐれ屋として数える）" : ""}。`)
      + "嘘つきの証言はすべて間違っていて、正直者の証言はすべて正しい。気まぐれ屋の証言は、一つ一つが正しいことも間違っていることもある。",
    ruleHearsay: "よく聞こえなかった証言は、ほかの人が伝えてくれる。伝えた人が正直者なら、本当にそう言ったということで（その証言が正しいかどうかは、もともと言った人しだい）、嘘つきが伝えたなら、そんな証言はなかったということだ。気まぐれ屋が伝えた証言は、どちらかわからない。",
    ruleCulprit: "犯人はちょうど一人。嘘つきが犯人とは限らない。",
    unheard: "（よく聞こえなかった）",
    voiceBadge: (name) => `${name}の口調`,
    num: (i) => "①②③"[i],
    nickWords: (q) => {
      const items = nickWords(q);
      if (!items.length) return "";
      const by = [...new Set(items.map((i) => i.by))];
      return "呼び名の解説：" + by.map((b) => `${NAMES[b]}の` + items.filter((i) => i.by === b)
        .map((i) => `「${i.nick}」は${NAMES[i.who]}`).join("、")).join("／") + "。";
    },
    selfWords: (q) => {
      const items = selfWords(q);
      if (!items.length) return "";
      // 사용자 2026-10-24: 「一人称の解説」, 「ココの一人称は「あてぃし」」 꼴로
      return "一人称の解説：" + (items.length === 1 ? `${items[0].name}の一人称は「${items[0].word}」。`
        : items.map((i) => `${i.name}は「${i.word}」`).join("、") + "。");
    },
    hiroTitle: "二階堂ヒロの死に戻り",
    hiroRule: "判決を間違えると、ヒロはその日の朝に戻る。戻っても記憶は残る。自分から死に戻って、犯人ではない人を一人知ることもできる。戻った回数は判決の記録に残る。",
    magicTitle: (m) => `${m.who}の${m.name}`,
    magicIntro: "この裁判にかかっている魔法：",
    noMagic: "この裁判には魔法がかかっていない。",
    ledgerTitle: "ヒロの手帳",
    tabs: { rules: "今回の裁判", hiro: "死に戻り" },
    workbenchTitle: "仮定表とメモ",
    workbenchGrid: "仮定表",
    workbenchMemo: "メモ",
    rulebookTitle: "ルールブック",
    close: "閉じる",
    langLabel: "言語",
    glossary: {
      "正直者": "証言がすべて正しい人。",
      "嘘つき": "証言がすべて間違っている人。",
      "気まぐれ屋": "証言の一つ一つが、正しいことも間違っていることもある人。アンアンに洗脳された人も気まぐれ屋として数える。",
    },
    updatesTitle: "更新履歴",
    updatesLatest: (iso) => `最終更新 ${ui.dateLabel(iso)}`,
    updatesNew: "新しいお知らせあり",
    updates: [
      { date: "2026-10-25", items: [
        ["画面", "カードの中のあだ名・名字（例：ココの「ノアっち」、アリサの「沢渡」）に、その人の色の点線を引きました。マウスを乗せるか押すと誰のことか表示され、その人のカードが光ります。"],
        ["画面", "魔法の説明を一行に一つずつ分けて、整理し直しました。ルールは変わっていません。説明の中の「嘘つき」「気まぐれ屋」などの言葉に、マウスを乗せるか押すと意味が出ます。"],
        ["修正", "仮定表の列の幅を名前の長さに関係なくそろえ、マスを押してもマスの大きさや行の高さが変わらないようにしました。"],
        ["修正", "広い画面で仮定表を押すたびに、右のパネルのスクロールバーが出たり消えたりしていた問題を直しました。ご報告ありがとうございました。"],
        ["画面", "手帳のヒロの台詞の上の余白を広げ、最初の画面のルールブックのボタンを手帳と同じリボンの形にしました。仮定表の列の名前は縦書きにしました。"],
      ] },
      { date: "2026-10-24", items: [
        ["機能", "結果を共有するときのハッシュタグを #番外裁判 にしました。結果の投稿で二次創作タグ（#まのさば二次創作）が埋もれないようにするためです。"],
        ["機能", "日本語版を公開しました。キャラクターの台詞は作者が書き、ルール・解説などの文章の翻訳には、AI(Claude)を一部使っております（台詞の日本語もAIで一部直しています）。不自然な日本語があれば、お知らせいただけるとうれしいです。"],
      ] },
    ],
    written: "筆談",
    marks: { t: "真", f: "偽", r: "気まぐれ屋" },
    markLabel: (name, m, on) => `${name}のカードに「${m}」の印${on ? "（オン）" : ""}`,
    accuse: "犯人として指名",
    notCulprit: "犯人ではない",
    memory: (t) => `死に戻りの記憶：${t}`,
    nbHelp: "列ごとに「この人が犯人なら」と仮定し、マスを押して、そのとき各証言が正しいか（○）間違っているか（×）を書き込む。",
    nbCorner: "犯人なら →",
    nbRow: (name, i, total) => `${name}の証言${total > 1 ? "①②③"[i] : ""}`,
    nbCell: (c, row, v) => `${c}が犯人なら ${row}：${v === "o" ? "正しい" : v === "x" ? "間違い" : "空欄"}`,
    nbMemo: "自由に書き込める。仮定表と一緒に、このブラウザにだけ保存される。",
    nbPlaceholder: "例：シェリーが犯人なら、ココの証言は間違いになる。すると嘘つきは…",
    nbClear: "仮定表・メモを消す",
    nbClearConfirm: "もう一度押すと消える",
    nbClearWarn: "この問題の仮定表とメモが消える。",
    judgeIdle: "犯人を選ぶと判決できる",
    judgeNeedMarks: (n) => `すべてのカードに役割の印をつけないと判決できない（残り${n}枚）`,
    ruleJudgeRoles: "判決のときは、犯人と一緒にすべてのカードに役割の印をつける。そのカードの証言を実際にした人が、正直者（真）・嘘つき（偽）・気まぐれ屋のどれか。モノマネされたカードはマーゴの、入れ替わったカードはその体に入っている人の、よく聞こえなかったカードはその人の役割だ。一つでも間違えると、間違った判決になる。",
    hiroRolesLine: "事件を起こした人以外にも、いつも正しくないことを言っている人たち、そして気まぐれなことを言っている人たちも断罪しなきゃ。そんな正しくないことを断罪するのは、私にしかできないんだ。",   // 사용자 문장
    wrongRoles: (n) => `犯人は合っていた。でも、役割の印が${n}枚間違っていた。`,
    // 히로의 말(전부 사용자 문장, docs/ja-lines.md B2·B3)
    hiroLines: {
      accuse: ["{name}、あなたがこの事件の犯人だ。", "正しくないのはお前だ、{name}。"],
      accuseEma: ["エマ、君はいつもそうだった。正しくない💢"],
      right0: [
        "…正しくないことを正した。この世の悪をなくすことこそ、私のなすべきことだ。",
        "この世界を正すことは私にしかできないことだ。",
        "正しいことをしただけだ。",
      ],
      rightN: [
        "正しい判決にたどり着けるなら、何度戻っても構わない。",
        "「死に戻り」で戻ってきたのは正しくなかったが、構わない。",
        "…これは正しくないことではない。「正しさ」を求めるための過程に過ぎない。",
      ],
      rewind: ["判明した事実を覚えておこう。今度こそ正しい答えにたどり着くんだ。"],
      rewindAgain: [
        "もう二度とこの方法は使いたくなかったけど…それでも、覚えておかないと。",
        "正しい答えを得るためにはこの方法しかない。",
      ],
      wrong: ["…私が…正しくなかった…。戻って、やり直さなきゃ。", "正しくなかったのは、私だったのか！"],
      wrongAgain: ["また正しくない答えを出すなんて。くうっ、正しくない！"],
      wrongEma: ["私ってずっと、思い違いをしてたのか？！ エマに謝らないと！"],
    },
    morningLines: {
      1: ["牢屋敷の牢屋、二段ベッドの上の段で、私はまた目を覚ました。"],
      2: ["…戻った。この感覚も初めてではない。"],
      many: ["また、ここに戻ってきた。これで何度目だろう。"],
    },
    pick: (xs, k) => xs[(k || 0) % xs.length],
    line: (kind, k, vars) => {
      let t = ui.pick(ui.hiroLines[kind], k);
      for (const [a, b] of Object.entries(vars || {})) t = t.replace(`{${a}}`, b);
      return t;
    },
    wrongLine: (n, k, id) => ui.line(id === "ema" ? "wrongEma" : n > 1 ? "wrongAgain" : "wrong", k),
    rewindLine: (n, k) => ui.line(n > 1 ? "rewindAgain" : "rewind", k),
    morning: (rewinds, k) => ui.pick(ui.morningLines[rewinds >= 3 ? "many" : rewinds === 2 ? 2 : 1], k),
    accusation: (name, k, id) => `「${ui.line(id === "ema" ? "accuseEma" : "accuse", k, { name })}」`,
    rewind: "死に戻る：犯人ではない人を一人知る",
    tally: (r, m) => `死に戻り${r}回・カードの印${m}個`,
    clockLabel: "経過時間",
    stamp: "判決",
    hiro: "二階堂ヒロ",
    recordRight: (n, time) => n === 0 ? `一度も死に戻らずに、${time}で判決した。` : `死に戻り${n}回、${time}で判決した。`,
    rewindInfo: (n, name) => `死に戻り${n}回目。${name}は犯人ではない。それは覚えている。`,
    wrongTitle: "正しくない判決だった。",
    wrongRecord: (n) => `死に戻り${n}回目。間違った判決の記憶は残っている。`,
    next: { random: "同じ難易度でもう一問", daily: "過去の裁判の一覧へ", fixed: "次の事件", tutorial: `${numbered("easy", 1)}へ`,
            tutorialNext: (label) => `次のチュートリアル：${label}`, tutorialLast: `${numbered("veryhard", 1)}へ`, last: "事件記録へ" },
    footer: [
      "『魔法少女ノ魔女裁判』の非公式二次創作ファンゲームのデモです。原作の権利は原作者に帰属します。",
      "パズルはプログラムが作っています。事件記録のパズルは唯一解かどうかを二通りの方法で検証し、ランダム裁判は作るたびに全数調査で検証しています。",
      "プログラミングと一部の文章には、AI(Claude)を一部使っております。日本語版のルール・解説などの翻訳にも、AIを一部使っております。",
      "iPhone（Safari）では直接確認できていないため、表示が崩れることがあります。",
    ],
    contactHtml: [
      'お問い合わせ・削除依頼：Twitter（X） <a href="https://x.com/riyuna_mano" target="_blank" rel="noopener">@riyuna_mano</a>',
      // 일본어판 전용 폼(사용자 2026-10-24 새로 만듦, 일본어 문항). 한국어판은 기존 폼 그대로
      'ご意見・バグ報告：<a href="https://docs.google.com/forms/d/e/1FAIpQLSc9Q21_zZy4RrJrHElNprxi8Oguxsq96vD9QBRl0SZEnGZbiw/viewform" target="_blank" rel="noopener">Googleフォーム</a>',
    ],
    guide: {
      common: {
        bar: "犯人を選んだら、下の判決ボタンを押す。間違えても、ヒロがその日の朝に戻るだけだ。行き詰まったら「死に戻る」で、犯人ではない人を一人知ることができる。",
      },
      tutorial: {
        incident: "事件と、被害者のひとこと。今回解く事件だ。",
        ledger: "ヒロの手帳。上のしおりを押すと、そのページが開く。「今回の裁判」にこの回のルールがある：嘘つきはちょうど1人で、嘘つきと犯人は別人かもしれない。「死に戻り」はヒロの魔法で、魔法がかかった回にはその魔法のしおりがつく。すべてのルールは「ルールブック」にまとまっている。仮定表とメモはカードの下（広い画面では右）にある。",
        cards: "容疑者たちの証言カード。「真」「偽」はカードにつけておく印で、正解には影響しない。犯人だと思う人の「犯人として指名」を押す。",
        grid: "「仮定表」で仮定してみる。例：エマが犯人なら、エマの証言（シェリーが食べた）×、シェリーの証言（エマは食べていない）×、ココの証言（犯人はエマ）○。×が2つあるのに嘘つきは1人のはずなので、エマは犯人ではない。シェリーとココの列も埋めてみよう。",
        bar: "犯人を選んだら、下の判決ボタンを押す。間違えても終わりではない。ヒロがその日の朝に戻って、死に戻りが1回増えるだけだ。行き詰まったら「死に戻る」で、犯人ではない人を一人知ることができる。",
      },
      "tutorial-anan": {
        incident: "応用1：アンアンの洗脳。この回には魔法が一つかかっている。",
        ledger: "「今回の裁判」には、嘘つきは1人と書いてある。ところがアンアンの魔法で、アンアン以外の誰か一人が洗脳されて気まぐれ屋になった。気まぐれ屋の証言は正しいことも間違っていることもあり、嘘つきではなく気まぐれ屋として数える。「洗脳」のしおりを開いて読んでみよう。",
        cards: "アンアンとレイアは、二人ともエマが犯人だと言っている。エマが犯人でなければ、二つの証言はどちらも間違いになる。嘘つきは1人だけなので、そのときは二人のうち一人が洗脳された気まぐれ屋でなければならない。アンアンは自分を洗脳しない。",
        grid: "エマが犯人なら、四つの証言がすべて正しくなって、嘘つきがいなくなる。嘘つきは1人のはずなので、エマは犯人ではない。すると、アンアンが嘘つき、レイアが洗脳された気まぐれ屋だ。残ったエマとノアの証言で、犯人を絞り込もう。",
      },
      "tutorial-margo": {
        incident: "応用2：マーゴのモノマネ。",
        ledger: "嘘つきは1人。マーゴはほかの誰か一人の声をモノマネしたかもしれない。モノマネしたカードは、見た目はその人の証言だが、正しいか間違っているかはマーゴしだいで、その人は何も言っていないことになる。その人になりすました言葉なので、証言の中の「私」のように自分を指す言葉はマーゴではなく、カードに書かれた人を指す。「モノマネ」のしおりに詳しく書いてある。",
        cards: "間違ったカードが二枚あるのに、嘘つきが1人しかいないなら？　二枚のカードを一人が言った、つまり一枚は嘘つきのマーゴのモノマネでなければならない。マーゴが正直者なら、モノマネしたカードも正しい証言になることも覚えておこう。",
        grid: "ココが犯人なら、マーゴの証言×、ココの証言×、エマ・ハンナの証言○。間違ったカードが二枚だが、ココのカードが嘘つきのマーゴのモノマネなら、嘘つきはマーゴ1人で合う。ほかの人が犯人の場合も確かめてみよう。",
      },
      "tutorial-miria": {
        incident: "応用3：ミリアの入れ替わり。",
        ledger: "嘘つきは1人。ミリアはほかの誰か一人と魂が入れ替わっているかもしれないし、いないかもしれない。カードの証言はその体に入っている人が言ったもので、嘘つきと犯人は人（元の体の名前）で選ぶ。「入れ替わり」のしおりを読んでみよう。",
        cards: "ミリアのカードはエマの口調で「実はボクはエマだよ！」と言い、エマのカードは「ボクが本物のエマだよ！」と言う。入れ替わっていてもいなくても、どちらか一方だけが正しいので、この二枚を言ったミリアとエマのどちらかは嘘つきだ。嘘つきは1人だけなので、シェリーとメルルは正直者だ。",
        grid: "メルルが正直者なので、犯人はメルルの証言どおりだ。では、ミリアのカードの「シェリーちゃんは落書きしてないよ！」は正しいだろうか？　そのカードを言った人が嘘つきだとわかれば、ミリアとエマが本当に入れ替わっていたかどうかもわかる。",
      },
      "tutorial-sight": {
        incident: "応用4：ナノカの幻視とココの千里眼。この二つはルールを変えず、特別な証言として出てくる。",
        ledger: "嘘つきは1人。「幻視」と「千里眼」のしおりを開いてみよう。幻視は犯人を数人に絞り込み、千里眼は別の場所でココの生配信を見ていた人を教えてくれる。ココの千里眼の証言は「その人たちと、配信中だった私（ココ）は犯人ではない」という一つの証言だ。どれも、言った人が正直者のときだけ正しい。ココが使う呼び名は、「今回の裁判」に誰のことか書いてある。",
        cards: "エマの「犯人はナノカ」とシェリーの「ナノカは混ぜていない」は、同時に正しくも、同時に間違いにもなれない。だから二人のうち一人が嘘つきで、残りは全員正直者だ。",
        grid: "ナノカとココは正直者だ。幻視で挙がった三人から、千里眼で別の場所にいた人と、配信中だったココを除いてみよう。",
      },
      "tutorial-veryhard": {
        incident: "応用5：「とてもむずかしい」の練習回。証言する人が、正直者・嘘つき・気まぐれ屋の三つに分かれる。",
        ledger: "手帳の「今回の裁判」：嘘つき1人、気まぐれ屋1人、残りは正直者だ。嘘つきの証言はすべて間違いで、正直者の証言はすべて正しい。気まぐれ屋は、証言を二つするなら、一つは真実で一つは嘘かもしれない。二つとも真実、または二つとも嘘ということも、もちろんありうる。同じことが「ルールブック」にも書いてある。",
        cards: "メルルは証言が二つある（①②）。「犯人はエマ」と「レイアが持っていった」は同時に正しくはなれないので、メルルは正直者ではない。シェリーの「エマは嘘つき」のように、役割についての証言も出てくる。カードの印に「気まぐれ屋」が増えた。「とてもむずかしい」では、この印も判決に入る。",
        grid: "メルルが嘘つきなら、二つの証言がどちらも間違いになり、犯人はエマでもレイアでもない。するとレイアの「犯人はエマ」も間違いなので、レイアが気まぐれ屋で、エマとシェリーは正直者でなければならない。ところが、正直者のシェリーが「エマは嘘つき」と言うことはできない。だからメルルが気まぐれ屋だ。次は、シェリーが正直者かどうか仮定してみよう。「仮定表」に書き込みながら解いてもいい。",
        bar: VH_BAR,
      },
      "tutorial-hearsay": {
        incident: "応用6：伝聞の証言と、人数を隠した回（とてもむずかしい）。",
        ledger: "今回は、嘘つき・気まぐれ屋が何人いるかわからない。ただし正直者が過半数（半分より多い）だ。4人なので正直者は3人以上、正直者でない人は多くても1人だ。よく聞こえなかった証言は、ほかの人が伝えてくれる。伝えた人が正直者なら本当にそう言ったということで、その証言が正しいかどうかは、もともと言った人しだいだ。",
        cards: "ノアのカードは空っぽで、ハンナのカードに、ノアが言ったという証言が入っている。エマの「レイアがすり替えた」と、ノアが本当に言ったのなら、ノアの「レイアはすり替えていない」はぶつかり合う。",
        grid: "正直者でない人は多くても1人。ハンナが作り話をしたなら、ハンナがその1人なのでレイアは正直者で、レイアの「ノアは嘘つき」も正しくなければならない。すると正直者でない人が二人になる。だからハンナは正直者で、ノアは本当にそう言った。次は、ノアが正直者かどうか考えてみよう。",
        bar: VH_BAR,
      },
    },
  };

  ui.rulebook = () => [
    { h: "裁判の基本", items: [
      "牢屋敷で、ささいな事件が起きた。犯人はいつも、容疑者のうちちょうど一人だ。",
      "容疑者たちの証言が「カード」の形で与えられる。すべての証言が矛盾なく成り立つ場合はただ一つなので、その場合の犯人を指名して判決する。",
      `判決するのは二階堂ヒロ。${ui.hiroRule}`,
    ] },
    { h: "証言する人", items: [
      "<b>正直者</b>：証言がすべて正しい。",
      "<b>嘘つき</b>：証言がすべて間違っている。",
      "<b>気まぐれ屋</b>：証言が正しいことも間違っていることもある。証言を二つするなら、一つは真実で一つは嘘かもしれない。二つとも真実、または二つとも嘘ということも、もちろんありうる。",
      "嘘つき・気まぐれ屋が何人いるかは、手帳の「今回の裁判」に書いてある。「とてもむずかしい」では隠されることもあるが、そのときも正直者が過半数（半分より多い）ということだけは教えてくれる。4人なら3人以上、5人なら3人以上、6人なら4人以上、8人なら5人以上が正直者だ。",
      "役割と犯人は別だ。正直者が犯人のこともあるし、嘘つきが犯人でないこともある。",
    ] },
    { h: "証言の種類", items: [
      "「○○の言ってることは間違ってる／合ってる」：その人の証言がすべて間違っている／すべて正しいという意味だ。",
      "「とてもむずかしい」には、「○○は嘘つきだ」のような役割についての証言、「犯人は嘘つきだ」のような犯人の役割についての証言、「気まぐれ屋は一人だ」のような人数についての証言も出てくる。",
      `伝聞の証言：${ui.ruleHearsay}`,
      "自分を「私」以外の言葉で呼ぶ人もいる：エマの「ボク」、ミリアの「おじさん」、アンアンの「わがはい」、ノアの「のあ」、アリサの「ウチ」、ハンナの「わたくし」、ココの「あてぃし」。アンアンはスケッチブックに書いて話すので、『』で書く。",
      "ほかの人をあだ名や名字で呼ぶ人もいる（ココの「ヤンキー」、アリサの「沢渡」など）。あだ名が出てきたら、「今回の裁判」に誰のことか書いてある。",
    ] },
    { h: "魔法", terms: true, items: ["anan", "margo", "miria", "nanoka", "coco"]
        .map((x) => `<b>${NAMES[x]}の${MAGIC[x].name}</b><ul class="lines">${MAGIC[x].text.map((l) => `<li>${l}</li>`).join("")}</ul>`)
        .concat(["マーゴのモノマネとミリアの入れ替わりは、同じ裁判に一緒にはかからない。ナノカの幻視とココの千里眼は「むずかしい」から出てくる。"]) },
    { h: "難易度", items: ["easy", "normal", "hard", "veryhard"].map((t) => `<b>${TIER[t]}</b>：${ui.tierNote[t]}`) },
    { h: "手帳とカードの印", items: [
      "「仮定表」：列ごとに「この人が犯人なら」と仮定して、各証言が正しいか（○）間違っているか（×）を書き込む。カードの下（広い画面では右）にある。",
      "「メモ」：自由に書き込める。仮定表とメモは、このブラウザにだけ保存される。",
      "カードの「真」「偽」「気まぐれ屋」の印は、「やさしい」〜「むずかしい」では整理用だ。「とてもむずかしい」では判決に入る：すべてのカードに、そのカードの証言を実際にした人の役割の印をつけなければならず、一つでも間違えると間違った判決になる（死に戻り）。",
      "行き詰まったら「死に戻る」で、犯人ではない人を一人知ることができる。そのかわり、死に戻りが1回増える。",
    ] },
  ];

  const incidentText = (q) => INCIDENTS[q.incident].text.replace(/\|/g, "");

  root.TrialLang = root.TrialLang || {};
  root.TrialLang.ja = { decorate, ui, incidentText, fullName: (x) => FULL[x], say: (st, x, voice, incident) => unmark(say(st, x, voice, { inc: INCIDENTS[incident], alt: 0 }, false)) };
})(typeof window !== "undefined" ? window : globalThis);
