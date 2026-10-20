// tools/gen_puzzles.py 가 만든 파일. 손으로 고치지 말 것.
window.PUZZLES = {
 "tiers": {
  "easy": [
   {
    "id": "easy-1",
    "tier": "easy",
    "incident": "아리사의 성냥갑이 텅 비어 있었다.",
    "verb": "가져갔어",
    "victim": {
     "id": "arisa",
     "name": "시토 아리사",
     "line": "어떤 새끼야, 죽을래?! 내 성냥 건드린 놈, 당장 튀어나와!",
     "written": false
    },
    "n": 1,
    "rules": [
     "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
     "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
    ],
    "magic": [],
    "suspects": [
     {
      "id": "reia",
      "name": "레이아",
      "full": "하스미 레이아",
      "written": false,
      "says": "에마는 안 가져갔다!"
     },
     {
      "id": "anan",
      "name": "안안",
      "full": "나츠메 안안",
      "written": true,
      "says": "에마 아니면 레이아가 가져갔노라."
     },
     {
      "id": "ema",
      "name": "에마",
      "full": "사쿠라바 에마",
      "written": false,
      "says": "안안쨩은 안 가져갔어!"
     }
    ],
    "answer": "ema",
    "why_not": {
     "reia": "레이아가 범인이라면 거짓말하는 사람이 0명이 되어 버린다. 1명이어야 해.",
     "anan": "안안이 범인이라면 거짓말하는 사람이 2명이 되어 버린다. 1명이어야 해."
    },
    "solution": [
     "거짓말을 한 사람: 레이아",
     "범인: 에마"
    ],
    "false_cards": [
     "reia"
    ],
    "worlds": 1,
    "logic": {
     "reia": [
      "deny",
      [
       "ema"
      ]
     ],
     "anan": [
      "either",
      [
       "ema",
       "reia"
      ]
     ],
     "ema": [
      "deny",
      [
       "anan"
      ]
     ]
    },
    "magic_ids": []
   },
   {
    "id": "easy-2",
    "tier": "easy",
    "incident": "에마의 일기장이 누군가에게 몰래 펼쳐져 있었다.",
    "verb": "펼쳐 봤어",
    "victim": {
     "id": "ema",
     "name": "사쿠라바 에마",
     "line": "으앗! 내 일기장 펼쳐 본 사람 누구야!? 이, 이상한 건 하나도 안 적었으니까!",
     "written": false
    },
    "n": 1,
    "rules": [
     "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
     "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
    ],
    "magic": [],
    "suspects": [
     {
      "id": "arisa",
      "name": "아리사",
      "full": "시토 아리사",
      "written": false,
      "says": "토노는 안 봤어."
     },
     {
      "id": "coco",
      "name": "코코",
      "full": "사와타리 코코",
      "written": false,
      "says": "아리사 아니면 한나가 펼쳐 봤음 ㅇㅇ"
     },
     {
      "id": "hanna",
      "name": "한나",
      "full": "토노 한나",
      "written": false,
      "says": "아리사 씨 아니면 코코 씨가 펼쳐 봤사와요!"
     }
    ],
    "answer": "coco",
    "why_not": {
     "arisa": "아리사가 범인이라면 거짓말하는 사람이 0명이 되어 버린다. 1명이어야 해.",
     "hanna": "한나가 범인이라면 거짓말하는 사람이 2명이 되어 버린다. 1명이어야 해."
    },
    "solution": [
     "거짓말을 한 사람: 코코",
     "범인: 코코"
    ],
    "false_cards": [
     "coco"
    ],
    "worlds": 1,
    "logic": {
     "arisa": [
      "deny",
      [
       "hanna"
      ]
     ],
     "coco": [
      "either",
      [
       "arisa",
       "hanna"
      ]
     ],
     "hanna": [
      "either",
      [
       "arisa",
       "coco"
      ]
     ]
    },
    "magic_ids": []
   },
   {
    "id": "easy-3",
    "tier": "easy",
    "incident": "방송 중이던 코코의 장비 전원을 누군가 꺼 버렸다.",
    "verb": "껐어",
    "victim": {
     "id": "coco",
     "name": "사와타리 코코",
     "line": "여러분 잠깐~ 야 누가 내 방송 껐어? 당장 안 나올래?! 으, 역시 나랑 최애 이외에는 다 죽어버렸으면 좋겠어!",
     "written": false
    },
    "n": 1,
    "rules": [
     "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
     "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
    ],
    "magic": [],
    "suspects": [
     {
      "id": "sherry",
      "name": "셰리",
      "full": "타치바나 셰리",
      "written": false,
      "says": "저 아니면 한나 씨가 껐어요!"
     },
     {
      "id": "hanna",
      "name": "한나",
      "full": "토노 한나",
      "written": false,
      "says": "범인은 셰리 씨이와요!"
     },
     {
      "id": "noah",
      "name": "노아",
      "full": "죠가사키 노아",
      "written": false,
      "says": "노아는 안 껐어~"
     }
    ],
    "answer": "hanna",
    "why_not": {
     "sherry": "셰리가 범인이라면 거짓말하는 사람이 0명이 되어 버린다. 1명이어야 해.",
     "noah": "노아가 범인이라면 거짓말하는 사람이 3명이 되어 버린다. 1명이어야 해."
    },
    "solution": [
     "거짓말을 한 사람: 한나",
     "범인: 한나"
    ],
    "false_cards": [
     "hanna"
    ],
    "worlds": 1,
    "logic": {
     "sherry": [
      "self_or",
      [
       "hanna"
      ]
     ],
     "hanna": [
      "culprit_is",
      [
       "sherry"
      ]
     ],
     "noah": [
      "deny_self",
      []
     ]
    },
    "magic_ids": []
   },
   {
    "id": "easy-4",
    "tier": "easy",
    "incident": "미리아의 머리핀이 짝짝이로 바뀌어 있었다.",
    "verb": "바꿔 놨어",
    "victim": {
     "id": "miria",
     "name": "사에키 미리아",
     "line": "으왓! 아저씨 머리핀이 짝짝이가 됐어! 어쩌지...",
     "written": false
    },
    "n": 1,
    "rules": [
     "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
     "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
    ],
    "magic": [],
    "suspects": [
     {
      "id": "meruru",
      "name": "메루루",
      "full": "히카미 메루루",
      "written": false,
      "says": "노, 노아 씨는 안 바꿨어요…"
     },
     {
      "id": "reia",
      "name": "레이아",
      "full": "하스미 레이아",
      "written": false,
      "says": "단언하지! 메루루가 바꿔 놨다!"
     },
     {
      "id": "noah",
      "name": "노아",
      "full": "죠가사키 노아",
      "written": false,
      "says": "노아 아니면 메루루쨩이 바꿔 놨어~"
     },
     {
      "id": "margo",
      "name": "마고",
      "full": "호쇼 마고",
      "written": false,
      "says": "레이아쨩이 바꿔 놨어♡"
     }
    ],
    "answer": "meruru",
    "why_not": {
     "reia": "레이아가 범인이라면 거짓말하는 사람이 2명이 되어 버린다. 1명이어야 해.",
     "noah": "노아가 범인이라면 거짓말하는 사람이 3명이 되어 버린다. 1명이어야 해.",
     "margo": "마고가 범인이라면 거짓말하는 사람이 3명이 되어 버린다. 1명이어야 해."
    },
    "solution": [
     "거짓말을 한 사람: 마고",
     "범인: 메루루"
    ],
    "false_cards": [
     "margo"
    ],
    "worlds": 1,
    "logic": {
     "meruru": [
      "deny",
      [
       "noah"
      ]
     ],
     "reia": [
      "accuse",
      [
       "meruru"
      ]
     ],
     "noah": [
      "self_or",
      [
       "meruru"
      ]
     ],
     "margo": [
      "accuse",
      [
       "reia"
      ]
     ]
    },
    "magic_ids": []
   },
   {
    "id": "easy-5",
    "tier": "easy",
    "incident": "레이아의 거울에 립스틱으로 낙서가 되어 있었다.",
    "verb": "낙서했어",
    "victim": {
     "id": "reia",
     "name": "하스미 레이아",
     "line": "이상한 무대 연출이 되었구나! 이런 짓을 저지를 범인으로부터 나는 모두를 지키겠어!",
     "written": false
    },
    "n": 1,
    "rules": [
     "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
     "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
    ],
    "magic": [],
    "suspects": [
     {
      "id": "arisa",
      "name": "아리사",
      "full": "시토 아리사",
      "written": false,
      "says": "사와타리 아니면 쿠로베가 낙서했어."
     },
     {
      "id": "hanna",
      "name": "한나",
      "full": "토노 한나",
      "written": false,
      "says": "아리사 씨 아니면 코코 씨가 낙서했사와요!"
     },
     {
      "id": "nanoka",
      "name": "나노카",
      "full": "쿠로베 나노카",
      "written": false,
      "says": "나 아니면 한나가 낙서했어."
     },
     {
      "id": "coco",
      "name": "코코",
      "full": "사와타리 코코",
      "written": false,
      "says": "나노카는 안 그랬음"
     }
    ],
    "answer": "coco",
    "why_not": {
     "arisa": "아리사가 범인이라면 거짓말하는 사람이 2명이 되어 버린다. 1명이어야 해.",
     "hanna": "한나가 범인이라면 거짓말하는 사람이 2명이 되어 버린다. 1명이어야 해.",
     "nanoka": "나노카가 범인이라면 거짓말하는 사람이 2명이 되어 버린다. 1명이어야 해."
    },
    "solution": [
     "거짓말을 한 사람: 나노카",
     "범인: 코코"
    ],
    "false_cards": [
     "nanoka"
    ],
    "worlds": 1,
    "logic": {
     "arisa": [
      "either",
      [
       "coco",
       "nanoka"
      ]
     ],
     "hanna": [
      "either",
      [
       "arisa",
       "coco"
      ]
     ],
     "nanoka": [
      "self_or",
      [
       "hanna"
      ]
     ],
     "coco": [
      "deny",
      [
       "nanoka"
      ]
     ]
    },
    "magic_ids": []
   },
   {
    "id": "easy-6",
    "tier": "easy",
    "incident": "나노카가 만들어 둔 과자가 감쪽같이 사라졌다.",
    "verb": "먹었어",
    "victim": {
     "id": "nanoka",
     "name": "쿠로베 나노카",
     "line": "...내가 만든 과자를 먹은 사람은 누구지? 어서 나오도록.",
     "written": false
    },
    "n": 1,
    "rules": [
     "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
     "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
    ],
    "magic": [],
    "suspects": [
     {
      "id": "noah",
      "name": "노아",
      "full": "죠가사키 노아",
      "written": false,
      "says": "노아 아니면 한나쨩이 먹었어~"
     },
     {
      "id": "hanna",
      "name": "한나",
      "full": "토노 한나",
      "written": false,
      "says": "나 아니면 레이아 씨가 먹었사와요!"
     },
     {
      "id": "reia",
      "name": "레이아",
      "full": "하스미 레이아",
      "written": false,
      "says": "미리아 아니면 노아가 먹었다!"
     },
     {
      "id": "miria",
      "name": "미리아",
      "full": "사에키 미리아",
      "written": false,
      "says": "아저씨 아니면 노아쨩이 먹었어."
     }
    ],
    "answer": "noah",
    "why_not": {
     "hanna": "한나가 범인이라면 거짓말하는 사람이 2명이 되어 버린다. 1명이어야 해.",
     "reia": "레이아가 범인이라면 거짓말하는 사람이 3명이 되어 버린다. 1명이어야 해.",
     "miria": "미리아가 범인이라면 거짓말하는 사람이 2명이 되어 버린다. 1명이어야 해."
    },
    "solution": [
     "거짓말을 한 사람: 한나",
     "범인: 노아"
    ],
    "false_cards": [
     "hanna"
    ],
    "worlds": 1,
    "logic": {
     "noah": [
      "self_or",
      [
       "hanna"
      ]
     ],
     "hanna": [
      "self_or",
      [
       "reia"
      ]
     ],
     "reia": [
      "either",
      [
       "miria",
       "noah"
      ]
     ],
     "miria": [
      "self_or",
      [
       "noah"
      ]
     ]
    },
    "magic_ids": []
   },
   {
    "id": "easy-7",
    "tier": "easy",
    "incident": "한나의 리본 하나가 없어졌다.",
    "verb": "가져갔어",
    "victim": {
     "id": "hanna",
     "name": "토노 한나",
     "line": "제 리본이 없어졌사와요! 어떻게 저에게 그런 짓을 쳐 할수가 있는 것이와요?!",
     "written": false
    },
    "n": 1,
    "rules": [
     "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
     "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
    ],
    "magic": [],
    "suspects": [
     {
      "id": "anan",
      "name": "안안",
      "full": "나츠메 안안",
      "written": true,
      "says": "코코 아니면 나노카가 가져갔노라."
     },
     {
      "id": "nanoka",
      "name": "나노카",
      "full": "쿠로베 나노카",
      "written": false,
      "says": "코코 아니면 마고가 가져갔어."
     },
     {
      "id": "margo",
      "name": "마고",
      "full": "호쇼 마고",
      "written": false,
      "says": "코코쨩은 안 가져갔어."
     },
     {
      "id": "coco",
      "name": "코코",
      "full": "사와타리 코코",
      "written": false,
      "says": "범인은 마고임 빼박"
     }
    ],
    "answer": "margo",
    "why_not": {
     "anan": "안안이 범인이라면 거짓말하는 사람이 3명이 되어 버린다. 1명이어야 해.",
     "nanoka": "나노카가 범인이라면 거짓말하는 사람이 2명이 되어 버린다. 1명이어야 해.",
     "coco": "코코가 범인이라면 거짓말하는 사람이 2명이 되어 버린다. 1명이어야 해."
    },
    "solution": [
     "거짓말을 한 사람: 안안",
     "범인: 마고"
    ],
    "false_cards": [
     "anan"
    ],
    "worlds": 1,
    "logic": {
     "anan": [
      "either",
      [
       "coco",
       "nanoka"
      ]
     ],
     "nanoka": [
      "either",
      [
       "coco",
       "margo"
      ]
     ],
     "margo": [
      "deny",
      [
       "coco"
      ]
     ],
     "coco": [
      "culprit_is",
      [
       "margo"
      ]
     ]
    },
    "magic_ids": []
   },
   {
    "id": "easy-8",
    "tier": "easy",
    "incident": "미리아의 머리핀이 짝짝이로 바뀌어 있었다.",
    "verb": "바꿔 놨어",
    "victim": {
     "id": "miria",
     "name": "사에키 미리아",
     "line": "으왓! 아저씨 머리핀이 짝짝이가 됐어! 어쩌지...",
     "written": false
    },
    "n": 1,
    "rules": [
     "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
     "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
    ],
    "magic": [],
    "suspects": [
     {
      "id": "arisa",
      "name": "아리사",
      "full": "시토 아리사",
      "written": false,
      "says": "범인은 하스미야. 됐냐?"
     },
     {
      "id": "reia",
      "name": "레이아",
      "full": "하스미 레이아",
      "written": false,
      "says": "나 아니면 안안이 바꿔 놨다!"
     },
     {
      "id": "anan",
      "name": "안안",
      "full": "나츠메 안안",
      "written": true,
      "says": "아리사는 안 바꿨노라."
     }
    ],
    "answer": "anan",
    "why_not": {
     "arisa": "아리사가 범인이라면 거짓말하는 사람이 3명이 되어 버린다. 1명이어야 해.",
     "reia": "레이아가 범인이라면 거짓말하는 사람이 0명이 되어 버린다. 1명이어야 해."
    },
    "solution": [
     "거짓말을 한 사람: 아리사",
     "범인: 안안"
    ],
    "false_cards": [
     "arisa"
    ],
    "worlds": 1,
    "logic": {
     "arisa": [
      "culprit_is",
      [
       "reia"
      ]
     ],
     "reia": [
      "self_or",
      [
       "anan"
      ]
     ],
     "anan": [
      "deny",
      [
       "arisa"
      ]
     ]
    },
    "magic_ids": []
   },
   {
    "id": "easy-9",
    "tier": "easy",
    "incident": "아리사의 성냥갑이 텅 비어 있었다.",
    "verb": "가져갔어",
    "victim": {
     "id": "arisa",
     "name": "시토 아리사",
     "line": "어떤 새끼야, 죽을래?! 내 성냥 건드린 놈, 당장 튀어나와!",
     "written": false
    },
    "n": 1,
    "rules": [
     "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
     "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
    ],
    "magic": [],
    "suspects": [
     {
      "id": "coco",
      "name": "코코",
      "full": "사와타리 코코",
      "written": false,
      "says": "나 아니면 에마가 가져갔음"
     },
     {
      "id": "ema",
      "name": "에마",
      "full": "사쿠라바 에마",
      "written": false,
      "says": "코코쨩은 안 가져갔어!"
     },
     {
      "id": "noah",
      "name": "노아",
      "full": "죠가사키 노아",
      "written": false,
      "says": "노아 아니면 셰리쨩이 가져갔어~"
     },
     {
      "id": "sherry",
      "name": "셰리",
      "full": "타치바나 셰리",
      "written": false,
      "says": "명탐정의 추리로는, 범인은 에마 씨예요!"
     }
    ],
    "answer": "ema",
    "why_not": {
     "coco": "코코가 범인이라면 거짓말하는 사람이 3명이 되어 버린다. 1명이어야 해.",
     "noah": "노아가 범인이라면 거짓말하는 사람이 2명이 되어 버린다. 1명이어야 해.",
     "sherry": "셰리가 범인이라면 거짓말하는 사람이 2명이 되어 버린다. 1명이어야 해."
    },
    "solution": [
     "거짓말을 한 사람: 노아",
     "범인: 에마"
    ],
    "false_cards": [
     "noah"
    ],
    "worlds": 1,
    "logic": {
     "coco": [
      "self_or",
      [
       "ema"
      ]
     ],
     "ema": [
      "deny",
      [
       "coco"
      ]
     ],
     "noah": [
      "self_or",
      [
       "sherry"
      ]
     ],
     "sherry": [
      "culprit_is",
      [
       "ema"
      ]
     ]
    },
    "magic_ids": []
   },
   {
    "id": "easy-10",
    "tier": "easy",
    "incident": "나노카가 만들어 둔 과자가 감쪽같이 사라졌다.",
    "verb": "먹었어",
    "victim": {
     "id": "nanoka",
     "name": "쿠로베 나노카",
     "line": "...내가 만든 과자를 먹은 사람은 누구지? 어서 나오도록.",
     "written": false
    },
    "n": 1,
    "rules": [
     "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
     "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
    ],
    "magic": [],
    "suspects": [
     {
      "id": "hanna",
      "name": "한나",
      "full": "토노 한나",
      "written": false,
      "says": "아리사 씨 아니면 미리아 씨가 먹었사와요!"
     },
     {
      "id": "miria",
      "name": "미리아",
      "full": "사에키 미리아",
      "written": false,
      "says": "아리사쨩은 안 먹었어."
     },
     {
      "id": "arisa",
      "name": "아리사",
      "full": "시토 아리사",
      "written": false,
      "says": "난 안 먹었어. 꺼져."
     }
    ],
    "answer": "hanna",
    "why_not": {
     "miria": "미리아가 범인이라면 거짓말하는 사람이 0명이 되어 버린다. 1명이어야 해.",
     "arisa": "아리사가 범인이라면 거짓말하는 사람이 2명이 되어 버린다. 1명이어야 해."
    },
    "solution": [
     "거짓말을 한 사람: 한나",
     "범인: 한나"
    ],
    "false_cards": [
     "hanna"
    ],
    "worlds": 1,
    "logic": {
     "hanna": [
      "either",
      [
       "arisa",
       "miria"
      ]
     ],
     "miria": [
      "deny",
      [
       "arisa"
      ]
     ],
     "arisa": [
      "deny_self",
      []
     ]
    },
    "magic_ids": []
   }
  ],
  "normal": [
   {
    "id": "normal-1",
    "tier": "normal",
    "incident": "레이아의 거울에 립스틱으로 낙서가 되어 있었다.",
    "verb": "낙서했어",
    "victim": {
     "id": "reia",
     "name": "하스미 레이아",
     "line": "이상한 무대 연출이 되었구나! 이런 짓을 저지를 범인으로부터 나는 모두를 지키겠어!",
     "written": false
    },
    "n": 1,
    "rules": [
     "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
     "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
    ],
    "magic": [
     {
      "who": "안안",
      "name": "세뇌",
      "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
     }
    ],
    "suspects": [
     {
      "id": "anan",
      "name": "안안",
      "full": "나츠메 안안",
      "written": true,
      "says": "코코는 안 그랬노라."
     },
     {
      "id": "arisa",
      "name": "아리사",
      "full": "시토 아리사",
      "written": false,
      "says": "나츠메 아니면 사와타리가 낙서했어."
     },
     {
      "id": "coco",
      "name": "코코",
      "full": "사와타리 코코",
      "written": false,
      "says": "범인은 에마임 빼박"
     },
     {
      "id": "ema",
      "name": "에마",
      "full": "사쿠라바 에마",
      "written": false,
      "says": "안안쨩이 낙서했어!"
     }
    ],
    "answer": "ema",
    "why_not": {
     "anan": "안안이 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해.",
     "arisa": "아리사가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해.",
     "coco": "코코가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 아리사, 에마",
     "아리사, 에마 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
     "범인: 에마"
    ],
    "false_cards": [
     "arisa",
     "ema"
    ],
    "worlds": 2,
    "logic": {
     "anan": [
      "deny",
      [
       "coco"
      ]
     ],
     "arisa": [
      "either",
      [
       "anan",
       "coco"
      ]
     ],
     "coco": [
      "culprit_is",
      [
       "ema"
      ]
     ],
     "ema": [
      "accuse",
      [
       "anan"
      ]
     ]
    },
    "magic_ids": [
     "anan"
    ]
   },
   {
    "id": "normal-2",
    "tier": "normal",
    "incident": "셰리가 아끼는 화분이 엎어져 있었다.",
    "verb": "엎었어",
    "victim": {
     "id": "sherry",
     "name": "타치바나 셰리",
     "line": "사건이에요! 이건 명탐정 셰리쨩에게 보내는 도전장이에요!",
     "written": false
    },
    "n": 1,
    "rules": [
     "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
     "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
    ],
    "magic": [
     {
      "who": "안안",
      "name": "세뇌",
      "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
     }
    ],
    "suspects": [
     {
      "id": "meruru",
      "name": "메루루",
      "full": "히카미 메루루",
      "written": false,
      "says": "미, 미리아 씨는 안 엎었어요…"
     },
     {
      "id": "reia",
      "name": "레이아",
      "full": "하스미 레이아",
      "written": false,
      "says": "아아, 메루루의 말은 맞다!"
     },
     {
      "id": "miria",
      "name": "미리아",
      "full": "사에키 미리아",
      "written": false,
      "says": "메루루쨩이 엎었어."
     },
     {
      "id": "anan",
      "name": "안안",
      "full": "나츠메 안안",
      "written": true,
      "says": "레이아는 안 엎었노라."
     }
    ],
    "answer": "reia",
    "why_not": {
     "meruru": "메루루가 범인이라면 말들이 서로 어긋나 버린다 (안안의 세뇌를 누구에게 걸었다고 해도).",
     "miria": "미리아가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해.",
     "anan": "안안이 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 미리아, 안안",
     "미리아는 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다.",
     "범인: 레이아"
    ],
    "false_cards": [
     "miria",
     "anan"
    ],
    "worlds": 1,
    "logic": {
     "meruru": [
      "deny",
      [
       "miria"
      ]
     ],
     "reia": [
      "meta_true",
      [
       "meruru"
      ]
     ],
     "miria": [
      "accuse",
      [
       "meruru"
      ]
     ],
     "anan": [
      "deny",
      [
       "reia"
      ]
     ]
    },
    "magic_ids": [
     "anan"
    ]
   },
   {
    "id": "normal-3",
    "tier": "normal",
    "incident": "방송 중이던 코코의 장비 전원을 누군가 꺼 버렸다.",
    "verb": "껐어",
    "victim": {
     "id": "coco",
     "name": "사와타리 코코",
     "line": "여러분 잠깐~ 야 누가 내 방송 껐어? 당장 안 나올래?! 으, 역시 나랑 최애 이외에는 다 죽어버렸으면 좋겠어!",
     "written": false
    },
    "n": 1,
    "rules": [
     "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
     "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
    ],
    "magic": [
     {
      "who": "마고",
      "name": "흉내내기",
      "text": "마고가 다른 한 사람의 목소리를 흉내 냈을 수도 있다. 그랬다면 그 사람 이름으로 나온 말은 사실 마고의 말이고(맞고 틀림도 마고 몫), 그 사람은 아무 말도 하지 않은 것이다. 흉내니까 말투도, 말 속의 \"나\"도 그 사람 것이다. (안안은 필담이라 흉내 낼 수 없다.)"
     }
    ],
    "suspects": [
     {
      "id": "margo",
      "name": "마고",
      "full": "호쇼 마고",
      "written": false,
      "says": "에마쨩 아니면 한나쨩이 껐어."
     },
     {
      "id": "nanoka",
      "name": "나노카",
      "full": "쿠로베 나노카",
      "written": false,
      "says": "에마는 안 껐어."
     },
     {
      "id": "noah",
      "name": "노아",
      "full": "죠가사키 노아",
      "written": false,
      "says": "범인은 나노카쨩이야~"
     },
     {
      "id": "hanna",
      "name": "한나",
      "full": "토노 한나",
      "written": false,
      "says": "오호호, 마고 씨의 말은 틀렸사와요!"
     },
     {
      "id": "ema",
      "name": "에마",
      "full": "사쿠라바 에마",
      "written": false,
      "says": "범인은 한나쨩이야!"
     }
    ],
    "answer": "nanoka",
    "why_not": {
     "margo": "마고가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
     "noah": "노아가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
     "hanna": "한나가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
     "ema": "에마가 범인이라면 거짓말하는 사람이 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 마고, 에마",
     "에마 이름으로 나온 말은 사실 마고의 흉내였다.",
     "범인: 나노카"
    ],
    "false_cards": [
     "margo",
     "ema"
    ],
    "worlds": 1,
    "logic": {
     "margo": [
      "either",
      [
       "ema",
       "hanna"
      ]
     ],
     "nanoka": [
      "deny",
      [
       "ema"
      ]
     ],
     "noah": [
      "culprit_is",
      [
       "nanoka"
      ]
     ],
     "hanna": [
      "meta_false",
      [
       "margo"
      ]
     ],
     "ema": [
      "culprit_is",
      [
       "hanna"
      ]
     ]
    },
    "magic_ids": [
     "margo"
    ]
   },
   {
    "id": "normal-4",
    "tier": "normal",
    "incident": "나노카가 만들어 둔 과자가 감쪽같이 사라졌다.",
    "verb": "먹었어",
    "victim": {
     "id": "nanoka",
     "name": "쿠로베 나노카",
     "line": "...내가 만든 과자를 먹은 사람은 누구지? 어서 나오도록.",
     "written": false
    },
    "n": 2,
    "rules": [
     "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
     "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
    ],
    "magic": [
     {
      "who": "안안",
      "name": "세뇌",
      "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
     }
    ],
    "suspects": [
     {
      "id": "hanna",
      "name": "한나",
      "full": "토노 한나",
      "written": false,
      "says": "나는 안 먹었사와요!"
     },
     {
      "id": "anan",
      "name": "안안",
      "full": "나츠메 안안",
      "written": true,
      "says": "미리아의 말은 그릇되었도다."
     },
     {
      "id": "sherry",
      "name": "셰리",
      "full": "타치바나 셰리",
      "written": false,
      "says": "명탐정의 추리로는, 범인은 안안 씨예요!"
     },
     {
      "id": "miria",
      "name": "미리아",
      "full": "사에키 미리아",
      "written": false,
      "says": "안안쨩 아니면 한나쨩이 먹었어."
     }
    ],
    "answer": "hanna",
    "why_not": {
     "anan": "안안이 범인이라면 말들이 서로 어긋나 버린다 (안안의 세뇌를 누구에게 걸었다고 해도).",
     "sherry": "셰리가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
     "miria": "미리아가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 한나, 안안, 셰리",
     "한나, 셰리 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
     "범인: 한나"
    ],
    "false_cards": [
     "hanna",
     "anan",
     "sherry"
    ],
    "worlds": 2,
    "logic": {
     "hanna": [
      "deny_self",
      []
     ],
     "anan": [
      "meta_false",
      [
       "miria"
      ]
     ],
     "sherry": [
      "culprit_is",
      [
       "anan"
      ]
     ],
     "miria": [
      "either",
      [
       "anan",
       "hanna"
      ]
     ]
    },
    "magic_ids": [
     "anan"
    ]
   },
   {
    "id": "normal-5",
    "tier": "normal",
    "incident": "방송 중이던 코코의 장비 전원을 누군가 꺼 버렸다.",
    "verb": "껐어",
    "victim": {
     "id": "coco",
     "name": "사와타리 코코",
     "line": "여러분 잠깐~ 야 누가 내 방송 껐어? 당장 안 나올래?! 으, 역시 나랑 최애 이외에는 다 죽어버렸으면 좋겠어!",
     "written": false
    },
    "n": 1,
    "rules": [
     "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
     "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
    ],
    "magic": [
     {
      "who": "안안",
      "name": "세뇌",
      "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
     }
    ],
    "suspects": [
     {
      "id": "hanna",
      "name": "한나",
      "full": "토노 한나",
      "written": false,
      "says": "레이아 씨가 껐사와요!"
     },
     {
      "id": "reia",
      "name": "레이아",
      "full": "하스미 레이아",
      "written": false,
      "says": "아아, 마고의 말은 틀렸다!"
     },
     {
      "id": "anan",
      "name": "안안",
      "full": "나츠메 안안",
      "written": true,
      "says": "한나 아니면 레이아가 껐노라."
     },
     {
      "id": "margo",
      "name": "마고",
      "full": "호쇼 마고",
      "written": false,
      "says": "범인은 안안쨩이야♡"
     }
    ],
    "answer": "hanna",
    "why_not": {
     "reia": "레이아가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해.",
     "anan": "안안이 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해.",
     "margo": "마고가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 한나, 마고",
     "한나, 마고 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
     "범인: 한나"
    ],
    "false_cards": [
     "hanna",
     "margo"
    ],
    "worlds": 2,
    "logic": {
     "hanna": [
      "accuse",
      [
       "reia"
      ]
     ],
     "reia": [
      "meta_false",
      [
       "margo"
      ]
     ],
     "anan": [
      "either",
      [
       "hanna",
       "reia"
      ]
     ],
     "margo": [
      "culprit_is",
      [
       "anan"
      ]
     ]
    },
    "magic_ids": [
     "anan"
    ]
   },
   {
    "id": "normal-6",
    "tier": "normal",
    "incident": "레이아의 거울에 립스틱으로 낙서가 되어 있었다.",
    "verb": "낙서했어",
    "victim": {
     "id": "reia",
     "name": "하스미 레이아",
     "line": "이상한 무대 연출이 되었구나! 이런 짓을 저지를 범인으로부터 나는 모두를 지키겠어!",
     "written": false
    },
    "n": 1,
    "rules": [
     "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
     "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
    ],
    "magic": [
     {
      "who": "마고",
      "name": "흉내내기",
      "text": "마고가 다른 한 사람의 목소리를 흉내 냈을 수도 있다. 그랬다면 그 사람 이름으로 나온 말은 사실 마고의 말이고(맞고 틀림도 마고 몫), 그 사람은 아무 말도 하지 않은 것이다. 흉내니까 말투도, 말 속의 \"나\"도 그 사람 것이다. (안안은 필담이라 흉내 낼 수 없다.)"
     }
    ],
    "suspects": [
     {
      "id": "margo",
      "name": "마고",
      "full": "호쇼 마고",
      "written": false,
      "says": "안안쨩 아니면 아리사쨩이 낙서했어."
     },
     {
      "id": "nanoka",
      "name": "나노카",
      "full": "쿠로베 나노카",
      "written": false,
      "says": "에마가 낙서했어."
     },
     {
      "id": "ema",
      "name": "에마",
      "full": "사쿠라바 에마",
      "written": false,
      "says": "나는 안 그랬어!"
     },
     {
      "id": "arisa",
      "name": "아리사",
      "full": "시토 아리사",
      "written": false,
      "says": "호쇼 새끼가 낙서했어."
     },
     {
      "id": "anan",
      "name": "안안",
      "full": "나츠메 안안",
      "written": true,
      "says": "아리사 아니면 마고가 낙서했노라."
     }
    ],
    "answer": "margo",
    "why_not": {
     "nanoka": "나노카가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
     "ema": "에마가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
     "arisa": "아리사가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
     "anan": "안안이 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 마고, 나노카",
     "나노카 이름으로 나온 말은 사실 마고의 흉내였다.",
     "범인: 마고"
    ],
    "false_cards": [
     "margo",
     "nanoka"
    ],
    "worlds": 1,
    "logic": {
     "margo": [
      "either",
      [
       "anan",
       "arisa"
      ]
     ],
     "nanoka": [
      "accuse",
      [
       "ema"
      ]
     ],
     "ema": [
      "deny_self",
      []
     ],
     "arisa": [
      "accuse",
      [
       "margo"
      ]
     ],
     "anan": [
      "either",
      [
       "arisa",
       "margo"
      ]
     ]
    },
    "magic_ids": [
     "margo"
    ]
   },
   {
    "id": "normal-7",
    "tier": "normal",
    "incident": "아리사의 성냥갑이 텅 비어 있었다.",
    "verb": "가져갔어",
    "victim": {
     "id": "arisa",
     "name": "시토 아리사",
     "line": "어떤 새끼야, 죽을래?! 내 성냥 건드린 놈, 당장 튀어나와!",
     "written": false
    },
    "n": 1,
    "rules": [
     "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
     "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
    ],
    "magic": [
     {
      "who": "마고",
      "name": "흉내내기",
      "text": "마고가 다른 한 사람의 목소리를 흉내 냈을 수도 있다. 그랬다면 그 사람 이름으로 나온 말은 사실 마고의 말이고(맞고 틀림도 마고 몫), 그 사람은 아무 말도 하지 않은 것이다. 흉내니까 말투도, 말 속의 \"나\"도 그 사람 것이다. (안안은 필담이라 흉내 낼 수 없다.)"
     }
    ],
    "suspects": [
     {
      "id": "reia",
      "name": "레이아",
      "full": "하스미 레이아",
      "written": false,
      "says": "단언하지! 메루루가 가져갔다!"
     },
     {
      "id": "sherry",
      "name": "셰리",
      "full": "타치바나 셰리",
      "written": false,
      "says": "저는 안 가져갔어요!"
     },
     {
      "id": "margo",
      "name": "마고",
      "full": "호쇼 마고",
      "written": false,
      "says": "후후, 코코쨩의 말은 틀렸어."
     },
     {
      "id": "coco",
      "name": "코코",
      "full": "사와타리 코코",
      "written": false,
      "says": "메루루는 안 가져갔음"
     },
     {
      "id": "meruru",
      "name": "메루루",
      "full": "히카미 메루루",
      "written": false,
      "says": "코, 코코 씨가 가져갔어요…"
     }
    ],
    "answer": "coco",
    "why_not": {
     "reia": "레이아가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
     "sherry": "셰리가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
     "margo": "마고가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
     "meruru": "메루루가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 레이아, 마고",
     "레이아 이름으로 나온 말은 사실 마고의 흉내였다.",
     "범인: 코코"
    ],
    "false_cards": [
     "reia",
     "margo"
    ],
    "worlds": 1,
    "logic": {
     "reia": [
      "accuse",
      [
       "meruru"
      ]
     ],
     "sherry": [
      "deny_self",
      []
     ],
     "margo": [
      "meta_false",
      [
       "coco"
      ]
     ],
     "coco": [
      "deny",
      [
       "meruru"
      ]
     ],
     "meruru": [
      "accuse",
      [
       "coco"
      ]
     ]
    },
    "magic_ids": [
     "margo"
    ]
   },
   {
    "id": "normal-8",
    "tier": "normal",
    "incident": "한나의 리본 하나가 없어졌다.",
    "verb": "가져갔어",
    "victim": {
     "id": "hanna",
     "name": "토노 한나",
     "line": "제 리본이 없어졌사와요! 어떻게 저에게 그런 짓을 쳐 할수가 있는 것이와요?!",
     "written": false
    },
    "n": 1,
    "rules": [
     "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
     "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
    ],
    "magic": [
     {
      "who": "안안",
      "name": "세뇌",
      "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
     }
    ],
    "suspects": [
     {
      "id": "anan",
      "name": "안안",
      "full": "나츠메 안안",
      "written": true,
      "says": "나노카가 가져갔노라."
     },
     {
      "id": "reia",
      "name": "레이아",
      "full": "하스미 레이아",
      "written": false,
      "says": "단언하지! 안안이 가져갔다!"
     },
     {
      "id": "nanoka",
      "name": "나노카",
      "full": "쿠로베 나노카",
      "written": false,
      "says": "미리아 말은 틀렸어."
     },
     {
      "id": "arisa",
      "name": "아리사",
      "full": "시토 아리사",
      "written": false,
      "says": "범인은 나츠메야. 됐냐?"
     },
     {
      "id": "miria",
      "name": "미리아",
      "full": "사에키 미리아",
      "written": false,
      "says": "안안쨩 아니면 나노카쨩이 가져갔어."
     }
    ],
    "answer": "anan",
    "why_not": {
     "reia": "레이아가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해.",
     "nanoka": "나노카가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해.",
     "arisa": "아리사가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해.",
     "miria": "미리아가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 안안, 나노카",
     "나노카는 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다.",
     "범인: 안안"
    ],
    "false_cards": [
     "anan",
     "nanoka"
    ],
    "worlds": 1,
    "logic": {
     "anan": [
      "accuse",
      [
       "nanoka"
      ]
     ],
     "reia": [
      "accuse",
      [
       "anan"
      ]
     ],
     "nanoka": [
      "meta_false",
      [
       "miria"
      ]
     ],
     "arisa": [
      "culprit_is",
      [
       "anan"
      ]
     ],
     "miria": [
      "either",
      [
       "anan",
       "nanoka"
      ]
     ]
    },
    "magic_ids": [
     "anan"
    ]
   },
   {
    "id": "normal-9",
    "tier": "normal",
    "incident": "나노카가 만들어 둔 과자가 감쪽같이 사라졌다.",
    "verb": "먹었어",
    "victim": {
     "id": "nanoka",
     "name": "쿠로베 나노카",
     "line": "...내가 만든 과자를 먹은 사람은 누구지? 어서 나오도록.",
     "written": false
    },
    "n": 1,
    "rules": [
     "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
     "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
    ],
    "magic": [
     {
      "who": "마고",
      "name": "흉내내기",
      "text": "마고가 다른 한 사람의 목소리를 흉내 냈을 수도 있다. 그랬다면 그 사람 이름으로 나온 말은 사실 마고의 말이고(맞고 틀림도 마고 몫), 그 사람은 아무 말도 하지 않은 것이다. 흉내니까 말투도, 말 속의 \"나\"도 그 사람 것이다. (안안은 필담이라 흉내 낼 수 없다.)"
     }
    ],
    "suspects": [
     {
      "id": "ema",
      "name": "에마",
      "full": "사쿠라바 에마",
      "written": false,
      "says": "한나쨩의 말은 틀렸어!"
     },
     {
      "id": "anan",
      "name": "안안",
      "full": "나츠메 안안",
      "written": true,
      "says": "이 몸 아니면 에마가 먹었노라."
     },
     {
      "id": "margo",
      "name": "마고",
      "full": "호쇼 마고",
      "written": false,
      "says": "안안쨩 아니면 레이아쨩이 먹었어."
     },
     {
      "id": "reia",
      "name": "레이아",
      "full": "하스미 레이아",
      "written": false,
      "says": "에마 아니면 한나가 먹었다!"
     },
     {
      "id": "hanna",
      "name": "한나",
      "full": "토노 한나",
      "written": false,
      "says": "에마 씨는 안 먹었사와요!"
     }
    ],
    "answer": "ema",
    "why_not": {
     "anan": "안안이 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
     "margo": "마고가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
     "reia": "레이아가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
     "hanna": "한나가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 마고, 한나",
     "한나 이름으로 나온 말은 사실 마고의 흉내였다.",
     "범인: 에마"
    ],
    "false_cards": [
     "margo",
     "hanna"
    ],
    "worlds": 1,
    "logic": {
     "ema": [
      "meta_false",
      [
       "hanna"
      ]
     ],
     "anan": [
      "self_or",
      [
       "ema"
      ]
     ],
     "margo": [
      "either",
      [
       "anan",
       "reia"
      ]
     ],
     "reia": [
      "either",
      [
       "ema",
       "hanna"
      ]
     ],
     "hanna": [
      "deny",
      [
       "ema"
      ]
     ]
    },
    "magic_ids": [
     "margo"
    ]
   },
   {
    "id": "normal-10",
    "tier": "normal",
    "incident": "셰리가 아끼는 화분이 엎어져 있었다.",
    "verb": "엎었어",
    "victim": {
     "id": "sherry",
     "name": "타치바나 셰리",
     "line": "사건이에요! 이건 명탐정 셰리쨩에게 보내는 도전장이에요!",
     "written": false
    },
    "n": 1,
    "rules": [
     "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
     "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
    ],
    "magic": [
     {
      "who": "미리아",
      "name": "뒤바뀜",
      "text": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
     }
    ],
    "suspects": [
     {
      "id": "ema",
      "name": "에마",
      "full": "사쿠라바 에마",
      "written": false,
      "says": "아리사쨩의 말은 틀렸어!"
     },
     {
      "id": "arisa",
      "name": "아리사",
      "full": "시토 아리사",
      "written": false,
      "says": "사쿠라바 아니면 호쇼가 엎었어."
     },
     {
      "id": "margo",
      "name": "마고",
      "full": "호쇼 마고",
      "written": false,
      "says": "에마쨩이 엎었어♡"
     },
     {
      "id": "miria",
      "name": "미리아",
      "full": "사에키 미리아",
      "written": false,
      "says": "아저씨는 아리사쨩과 영혼이 바뀌어 있어."
     }
    ],
    "answer": "ema",
    "why_not": {
     "arisa": "아리사가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
     "margo": "마고가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
     "miria": "미리아가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 에마",
     "미리아와 아리사는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 아리사의 말, 아리사 이름의 말은 미리아의 말이었다.",
     "범인: 에마"
    ],
    "false_cards": [
     "ema"
    ],
    "worlds": 1,
    "logic": {
     "ema": [
      "meta_false",
      [
       "arisa"
      ]
     ],
     "arisa": [
      "either",
      [
       "ema",
       "margo"
      ]
     ],
     "margo": [
      "accuse",
      [
       "ema"
      ]
     ],
     "miria": [
      "swap_claim",
      [
       "arisa"
      ]
     ]
    },
    "magic_ids": [
     "miria"
    ]
   }
  ],
  "hard": [
   {
    "id": "hard-1",
    "tier": "hard",
    "incident": "메루루의 반창고 상자가 텅 비어 있었다.",
    "verb": "다 썼어",
    "victim": {
     "id": "meruru",
     "name": "히카미 메루루",
     "line": "흑흑... 반창고가 다 떨어졌어요. 누가 다치면 어떡하죠?",
     "written": false
    },
    "n": 2,
    "rules": [
     "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
     "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
    ],
    "magic": [
     {
      "who": "안안",
      "name": "세뇌",
      "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
     },
     {
      "who": "마고",
      "name": "흉내내기",
      "text": "마고가 다른 한 사람의 목소리를 흉내 냈을 수도 있다. 그랬다면 그 사람 이름으로 나온 말은 사실 마고의 말이고(맞고 틀림도 마고 몫), 그 사람은 아무 말도 하지 않은 것이다. 흉내니까 말투도, 말 속의 \"나\"도 그 사람 것이다. (안안은 필담이라 흉내 낼 수 없다.)"
     }
    ],
    "suspects": [
     {
      "id": "noah",
      "name": "노아",
      "full": "죠가사키 노아",
      "written": false,
      "says": "노아 아니면 나노카쨩이 다 썼어~"
     },
     {
      "id": "coco",
      "name": "코코",
      "full": "사와타리 코코",
      "written": false,
      "says": "마고 말은 틀렸음 ㅋㅋ"
     },
     {
      "id": "arisa",
      "name": "아리사",
      "full": "시토 아리사",
      "written": false,
      "says": "나 아니면 사와타리가 다 썼어."
     },
     {
      "id": "nanoka",
      "name": "나노카",
      "full": "쿠로베 나노카",
      "written": false,
      "says": "마고 아니면 노아가 다 썼어."
     },
     {
      "id": "margo",
      "name": "마고",
      "full": "호쇼 마고",
      "written": false,
      "says": "아리사쨩은 안 썼어."
     },
     {
      "id": "anan",
      "name": "안안",
      "full": "나츠메 안안",
      "written": true,
      "says": "범인은 노아로다."
     }
    ],
    "answer": "arisa",
    "why_not": {
     "noah": "노아가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
     "coco": "코코가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
     "nanoka": "나노카가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
     "margo": "마고가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
     "anan": "안안이 범인이라면 거짓말하는 사람이 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 노아, 나노카, 마고, 안안",
     "노아, 나노카, 마고 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
     "마고가 누구 흉내를 냈는지(냈는지 아닌지도)는 말만으로는 정해지지 않는다.",
     "범인: 아리사"
    ],
    "false_cards": [
     "noah",
     "nanoka",
     "margo",
     "anan"
    ],
    "worlds": 4,
    "logic": {
     "noah": [
      "self_or",
      [
       "nanoka"
      ]
     ],
     "coco": [
      "meta_false",
      [
       "margo"
      ]
     ],
     "arisa": [
      "self_or",
      [
       "coco"
      ]
     ],
     "nanoka": [
      "either",
      [
       "margo",
       "noah"
      ]
     ],
     "margo": [
      "deny",
      [
       "arisa"
      ]
     ],
     "anan": [
      "culprit_is",
      [
       "noah"
      ]
     ]
    },
    "magic_ids": [
     "anan",
     "margo"
    ]
   },
   {
    "id": "hard-2",
    "tier": "hard",
    "incident": "나노카가 만들어 둔 과자가 감쪽같이 사라졌다.",
    "verb": "먹었어",
    "victim": {
     "id": "nanoka",
     "name": "쿠로베 나노카",
     "line": "...내가 만든 과자를 먹은 사람은 누구지? 어서 나오도록.",
     "written": false
    },
    "n": 2,
    "rules": [
     "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
     "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
    ],
    "magic": [
     {
      "who": "안안",
      "name": "세뇌",
      "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
     },
     {
      "who": "미리아",
      "name": "뒤바뀜",
      "text": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
     }
    ],
    "suspects": [
     {
      "id": "hanna",
      "name": "한나",
      "full": "토노 한나",
      "written": false,
      "says": "나 아니면 미리아 씨가 먹었사와요!"
     },
     {
      "id": "miria",
      "name": "미리아",
      "full": "사에키 미리아",
      "written": false,
      "says": "범인은 노아쨩이야."
     },
     {
      "id": "noah",
      "name": "노아",
      "full": "죠가사키 노아",
      "written": false,
      "says": "범인은 마고쨩이야~"
     },
     {
      "id": "anan",
      "name": "안안",
      "full": "나츠메 안안",
      "written": true,
      "says": "범인은 한나로다."
     },
     {
      "id": "meruru",
      "name": "메루루",
      "full": "히카미 메루루",
      "written": false,
      "says": "미, 미리아 씨와 마고 씨는 영혼이 바뀌어 있어요…"
     },
     {
      "id": "margo",
      "name": "마고",
      "full": "호쇼 마고",
      "written": false,
      "says": "메루루쨩이 먹었어♡"
     }
    ],
    "answer": "hanna",
    "why_not": {
     "miria": "미리아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "noah": "노아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "anan": "안안이 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "meruru": "메루루가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "margo": "마고가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 미리아, 노아, 마고",
     "미리아, 노아, 마고 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
     "미리아와 마고는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 마고의 말, 마고 이름의 말은 미리아의 말이었다.",
     "범인: 한나"
    ],
    "false_cards": [
     "miria",
     "noah",
     "margo"
    ],
    "worlds": 3,
    "logic": {
     "hanna": [
      "self_or",
      [
       "miria"
      ]
     ],
     "miria": [
      "culprit_is",
      [
       "noah"
      ]
     ],
     "noah": [
      "culprit_is",
      [
       "margo"
      ]
     ],
     "anan": [
      "culprit_is",
      [
       "hanna"
      ]
     ],
     "meruru": [
      "swap_claim",
      [
       "margo"
      ]
     ],
     "margo": [
      "accuse",
      [
       "meruru"
      ]
     ]
    },
    "magic_ids": [
     "anan",
     "miria"
    ]
   },
   {
    "id": "hard-3",
    "tier": "hard",
    "incident": "방송 중이던 코코의 장비 전원을 누군가 꺼 버렸다.",
    "verb": "껐어",
    "victim": {
     "id": "coco",
     "name": "사와타리 코코",
     "line": "여러분 잠깐~ 야 누가 내 방송 껐어? 당장 안 나올래?! 으, 역시 나랑 최애 이외에는 다 죽어버렸으면 좋겠어!",
     "written": false
    },
    "n": 2,
    "rules": [
     "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
     "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
    ],
    "magic": [
     {
      "who": "안안",
      "name": "세뇌",
      "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
     }
    ],
    "suspects": [
     {
      "id": "hanna",
      "name": "한나",
      "full": "토노 한나",
      "written": false,
      "says": "안안 씨 아니면 미리아 씨가 껐사와요!"
     },
     {
      "id": "anan",
      "name": "안안",
      "full": "나츠메 안안",
      "written": true,
      "says": "한나 아니면 노아가 껐노라."
     },
     {
      "id": "miria",
      "name": "미리아",
      "full": "사에키 미리아",
      "written": false,
      "says": "한나쨩은 안 껐어."
     },
     {
      "id": "meruru",
      "name": "메루루",
      "full": "히카미 메루루",
      "written": false,
      "says": "노, 노아 씨는 안 껐어요…"
     },
     {
      "id": "noah",
      "name": "노아",
      "full": "죠가사키 노아",
      "written": false,
      "says": "노아는 안 껐어~"
     }
    ],
    "answer": "noah",
    "why_not": {
     "hanna": "한나가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
     "anan": "안안이 범인이라면 말들이 서로 어긋나 버린다 (안안의 세뇌를 누구에게 걸었다고 해도).",
     "miria": "미리아가 범인이라면 말들이 서로 어긋나 버린다 (안안의 세뇌를 누구에게 걸었다고 해도).",
     "meruru": "메루루가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 한나, 메루루, 노아",
     "한나, 메루루, 노아 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
     "범인: 노아"
    ],
    "false_cards": [
     "hanna",
     "meruru",
     "noah"
    ],
    "worlds": 3,
    "logic": {
     "hanna": [
      "either",
      [
       "anan",
       "miria"
      ]
     ],
     "anan": [
      "either",
      [
       "hanna",
       "noah"
      ]
     ],
     "miria": [
      "deny",
      [
       "hanna"
      ]
     ],
     "meruru": [
      "deny",
      [
       "noah"
      ]
     ],
     "noah": [
      "deny_self",
      []
     ]
    },
    "magic_ids": [
     "anan"
    ]
   },
   {
    "id": "hard-4",
    "tier": "hard",
    "incident": "레이아의 거울에 립스틱으로 낙서가 되어 있었다.",
    "verb": "낙서했어",
    "victim": {
     "id": "reia",
     "name": "하스미 레이아",
     "line": "이상한 무대 연출이 되었구나! 이런 짓을 저지를 범인으로부터 나는 모두를 지키겠어!",
     "written": false
    },
    "n": 2,
    "rules": [
     "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
     "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
    ],
    "magic": [
     {
      "who": "안안",
      "name": "세뇌",
      "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
     },
     {
      "who": "미리아",
      "name": "뒤바뀜",
      "text": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
     }
    ],
    "suspects": [
     {
      "id": "coco",
      "name": "코코",
      "full": "사와타리 코코",
      "written": false,
      "says": "안안 말은 맞음 ㅇㅈ"
     },
     {
      "id": "miria",
      "name": "미리아",
      "full": "사에키 미리아",
      "written": false,
      "says": "아저씨 아니면 안안쨩이 낙서했어."
     },
     {
      "id": "nanoka",
      "name": "나노카",
      "full": "쿠로베 나노카",
      "written": false,
      "says": "메루루 아니면 미리아가 낙서했어."
     },
     {
      "id": "anan",
      "name": "안안",
      "full": "나츠메 안안",
      "written": true,
      "says": "이 몸은 미리아와 영혼이 바뀌어 있노라."
     },
     {
      "id": "meruru",
      "name": "메루루",
      "full": "히카미 메루루",
      "written": false,
      "says": "코, 코코 씨 아니면 미리아 씨가 낙서했어요…"
     }
    ],
    "answer": "nanoka",
    "why_not": {
     "coco": "코코가 범인이라면 거짓말하는 사람이 1명 또는 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "miria": "미리아가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "anan": "안안이 범인이라면 거짓말하는 사람이 1명 또는 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "meruru": "메루루가 범인이라면 거짓말하는 사람이 1명 또는 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 미리아, 나노카, 메루루",
     "나노카, 메루루 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
     "미리아와 안안은 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 안안의 말, 안안 이름의 말은 미리아의 말이었다.",
     "범인: 나노카"
    ],
    "false_cards": [
     "miria",
     "nanoka",
     "meruru"
    ],
    "worlds": 2,
    "logic": {
     "coco": [
      "meta_true",
      [
       "anan"
      ]
     ],
     "miria": [
      "self_or",
      [
       "anan"
      ]
     ],
     "nanoka": [
      "either",
      [
       "meruru",
       "miria"
      ]
     ],
     "anan": [
      "swap_claim",
      [
       "anan"
      ]
     ],
     "meruru": [
      "either",
      [
       "coco",
       "miria"
      ]
     ]
    },
    "magic_ids": [
     "anan",
     "miria"
    ]
   },
   {
    "id": "hard-5",
    "tier": "hard",
    "incident": "셰리가 아끼는 화분이 엎어져 있었다.",
    "verb": "엎었어",
    "victim": {
     "id": "sherry",
     "name": "타치바나 셰리",
     "line": "사건이에요! 이건 명탐정 셰리쨩에게 보내는 도전장이에요!",
     "written": false
    },
    "n": 2,
    "rules": [
     "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
     "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
    ],
    "magic": [
     {
      "who": "미리아",
      "name": "뒤바뀜",
      "text": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
     }
    ],
    "suspects": [
     {
      "id": "noah",
      "name": "노아",
      "full": "죠가사키 노아",
      "written": false,
      "says": "미리아쨩의 말은 맞아~"
     },
     {
      "id": "hanna",
      "name": "한나",
      "full": "토노 한나",
      "written": false,
      "says": "안안 씨가 엎었사와요!"
     },
     {
      "id": "anan",
      "name": "안안",
      "full": "나츠메 안안",
      "written": true,
      "says": "한나의 말은 그릇되었도다."
     },
     {
      "id": "miria",
      "name": "미리아",
      "full": "사에키 미리아",
      "written": false,
      "says": "아저씨는 나노카쨩과 영혼이 바뀌어 있어."
     },
     {
      "id": "nanoka",
      "name": "나노카",
      "full": "쿠로베 나노카",
      "written": false,
      "says": "미리아는 안 엎었어."
     }
    ],
    "answer": "miria",
    "why_not": {
     "noah": "노아가 범인이라면 거짓말하는 사람이 1명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "hanna": "한나가 범인이라면 거짓말하는 사람이 1명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "anan": "안안이 범인이라면 거짓말하는 사람이 1명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "nanoka": "나노카가 범인이라면 거짓말하는 사람이 1명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 한나, 나노카",
     "미리아와 나노카는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 나노카의 말, 나노카 이름의 말은 미리아의 말이었다.",
     "범인: 미리아"
    ],
    "false_cards": [
     "hanna",
     "nanoka"
    ],
    "worlds": 1,
    "logic": {
     "noah": [
      "meta_true",
      [
       "miria"
      ]
     ],
     "hanna": [
      "accuse",
      [
       "anan"
      ]
     ],
     "anan": [
      "meta_false",
      [
       "hanna"
      ]
     ],
     "miria": [
      "swap_claim",
      [
       "nanoka"
      ]
     ],
     "nanoka": [
      "deny",
      [
       "miria"
      ]
     ]
    },
    "magic_ids": [
     "miria"
    ]
   },
   {
    "id": "hard-6",
    "tier": "hard",
    "incident": "셰리가 아끼는 화분이 엎어져 있었다.",
    "verb": "엎었어",
    "victim": {
     "id": "sherry",
     "name": "타치바나 셰리",
     "line": "사건이에요! 이건 명탐정 셰리쨩에게 보내는 도전장이에요!",
     "written": false
    },
    "n": 2,
    "rules": [
     "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
     "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
    ],
    "magic": [
     {
      "who": "미리아",
      "name": "뒤바뀜",
      "text": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
     }
    ],
    "suspects": [
     {
      "id": "nanoka",
      "name": "나노카",
      "full": "쿠로베 나노카",
      "written": false,
      "says": "미리아 말은 맞아."
     },
     {
      "id": "miria",
      "name": "미리아",
      "full": "사에키 미리아",
      "written": false,
      "says": "안안쨩 아니면 아리사쨩이 엎었어."
     },
     {
      "id": "reia",
      "name": "레이아",
      "full": "하스미 레이아",
      "written": false,
      "says": "아아, 미리아의 말은 틀렸다!"
     },
     {
      "id": "anan",
      "name": "안안",
      "full": "나츠메 안안",
      "written": true,
      "says": "이 몸 아니면 한나가 엎었노라."
     },
     {
      "id": "hanna",
      "name": "한나",
      "full": "토노 한나",
      "written": false,
      "says": "나는 미리아 씨와 영혼이 바뀌어 있사와요!"
     },
     {
      "id": "arisa",
      "name": "아리사",
      "full": "시토 아리사",
      "written": false,
      "says": "사에키 새끼가 엎었어."
     }
    ],
    "answer": "anan",
    "why_not": {
     "nanoka": "나노카가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "miria": "미리아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "reia": "레이아가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "hanna": "한나가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "arisa": "아리사가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 레이아, 아리사",
     "미리아와 한나는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 한나의 말, 한나 이름의 말은 미리아의 말이었다.",
     "범인: 안안"
    ],
    "false_cards": [
     "reia",
     "arisa"
    ],
    "worlds": 1,
    "logic": {
     "nanoka": [
      "meta_true",
      [
       "miria"
      ]
     ],
     "miria": [
      "either",
      [
       "anan",
       "arisa"
      ]
     ],
     "reia": [
      "meta_false",
      [
       "miria"
      ]
     ],
     "anan": [
      "self_or",
      [
       "hanna"
      ]
     ],
     "hanna": [
      "swap_claim",
      [
       "hanna"
      ]
     ],
     "arisa": [
      "accuse",
      [
       "miria"
      ]
     ]
    },
    "magic_ids": [
     "miria"
    ]
   },
   {
    "id": "hard-7",
    "tier": "hard",
    "incident": "마고가 정리해 둔 도서실 책이 전부 거꾸로 꽂혀 있었다.",
    "verb": "거꾸로 꽂았어",
    "victim": {
     "id": "margo",
     "name": "호쇼 마고",
     "line": "어머, 내가 정리해 둔 책이 전부 거꾸로네. 후후, 이런 장난을 친 아이는 나중에 천천히 혼내 줘야겠어♡",
     "written": false
    },
    "n": 2,
    "rules": [
     "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
     "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
    ],
    "magic": [
     {
      "who": "미리아",
      "name": "뒤바뀜",
      "text": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
     }
    ],
    "suspects": [
     {
      "id": "nanoka",
      "name": "나노카",
      "full": "쿠로베 나노카",
      "written": false,
      "says": "난 미리아와 영혼이 바뀌어 있어."
     },
     {
      "id": "noah",
      "name": "노아",
      "full": "죠가사키 노아",
      "written": false,
      "says": "미리아쨩의 말은 틀렸어~"
     },
     {
      "id": "miria",
      "name": "미리아",
      "full": "사에키 미리아",
      "written": false,
      "says": "아저씨는 에마쨩과 영혼이 바뀌어 있어."
     },
     {
      "id": "anan",
      "name": "안안",
      "full": "나츠메 안안",
      "written": true,
      "says": "이 몸 아니면 노아가 거꾸로 꽂았노라."
     },
     {
      "id": "ema",
      "name": "에마",
      "full": "사쿠라바 에마",
      "written": false,
      "says": "미리아쨩이 거꾸로 꽂았어!"
     },
     {
      "id": "hanna",
      "name": "한나",
      "full": "토노 한나",
      "written": false,
      "says": "범인은 안안 씨이와요!"
     }
    ],
    "answer": "anan",
    "why_not": {
     "nanoka": "나노카가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "noah": "노아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "miria": "미리아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "ema": "에마가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "hanna": "한나가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 미리아, 에마",
     "미리아와 나노카는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 나노카의 말, 나노카 이름의 말은 미리아의 말이었다.",
     "범인: 안안"
    ],
    "false_cards": [
     "miria",
     "ema"
    ],
    "worlds": 1,
    "logic": {
     "nanoka": [
      "swap_claim",
      [
       "nanoka"
      ]
     ],
     "noah": [
      "meta_false",
      [
       "miria"
      ]
     ],
     "miria": [
      "swap_claim",
      [
       "ema"
      ]
     ],
     "anan": [
      "self_or",
      [
       "noah"
      ]
     ],
     "ema": [
      "accuse",
      [
       "miria"
      ]
     ],
     "hanna": [
      "culprit_is",
      [
       "anan"
      ]
     ]
    },
    "magic_ids": [
     "miria"
    ]
   },
   {
    "id": "hard-8",
    "tier": "hard",
    "incident": "마고가 정리해 둔 도서실 책이 전부 거꾸로 꽂혀 있었다.",
    "verb": "거꾸로 꽂았어",
    "victim": {
     "id": "margo",
     "name": "호쇼 마고",
     "line": "어머, 내가 정리해 둔 책이 전부 거꾸로네. 후후, 이런 장난을 친 아이는 나중에 천천히 혼내 줘야겠어♡",
     "written": false
    },
    "n": 2,
    "rules": [
     "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
     "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
    ],
    "magic": [
     {
      "who": "안안",
      "name": "세뇌",
      "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
     },
     {
      "who": "미리아",
      "name": "뒤바뀜",
      "text": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
     }
    ],
    "suspects": [
     {
      "id": "hanna",
      "name": "한나",
      "full": "토노 한나",
      "written": false,
      "says": "나는 미리아 씨와 영혼이 바뀌어 있사와요!"
     },
     {
      "id": "anan",
      "name": "안안",
      "full": "나츠메 안안",
      "written": true,
      "says": "범인은 코코로다."
     },
     {
      "id": "sherry",
      "name": "셰리",
      "full": "타치바나 셰리",
      "written": false,
      "says": "저는 안 그랬어요!"
     },
     {
      "id": "miria",
      "name": "미리아",
      "full": "사에키 미리아",
      "written": false,
      "says": "안안쨩이 거꾸로 꽂았어."
     },
     {
      "id": "coco",
      "name": "코코",
      "full": "사와타리 코코",
      "written": false,
      "says": "범인은 안안임 빼박"
     },
     {
      "id": "meruru",
      "name": "메루루",
      "full": "히카미 메루루",
      "written": false,
      "says": "코, 코코 씨의 말은 맞아요…"
     }
    ],
    "answer": "coco",
    "why_not": {
     "hanna": "한나가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "anan": "안안이 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "sherry": "셰리가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "miria": "미리아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "meruru": "메루루가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 미리아, 코코, 메루루",
     "한나, 코코, 메루루 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
     "미리아와 한나는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 한나의 말, 한나 이름의 말은 미리아의 말이었다.",
     "범인: 코코"
    ],
    "false_cards": [
     "miria",
     "coco",
     "meruru"
    ],
    "worlds": 3,
    "logic": {
     "hanna": [
      "swap_claim",
      [
       "hanna"
      ]
     ],
     "anan": [
      "culprit_is",
      [
       "coco"
      ]
     ],
     "sherry": [
      "deny_self",
      []
     ],
     "miria": [
      "accuse",
      [
       "anan"
      ]
     ],
     "coco": [
      "culprit_is",
      [
       "anan"
      ]
     ],
     "meruru": [
      "meta_true",
      [
       "coco"
      ]
     ]
    },
    "magic_ids": [
     "anan",
     "miria"
    ]
   },
   {
    "id": "hard-9",
    "tier": "hard",
    "incident": "셰리가 아끼는 화분이 엎어져 있었다.",
    "verb": "엎었어",
    "victim": {
     "id": "sherry",
     "name": "타치바나 셰리",
     "line": "사건이에요! 이건 명탐정 셰리쨩에게 보내는 도전장이에요!",
     "written": false
    },
    "n": 2,
    "rules": [
     "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
     "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
    ],
    "magic": [
     {
      "who": "미리아",
      "name": "뒤바뀜",
      "text": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
     }
    ],
    "suspects": [
     {
      "id": "ema",
      "name": "에마",
      "full": "사쿠라바 에마",
      "written": false,
      "says": "안안쨩의 말은 틀렸어!"
     },
     {
      "id": "arisa",
      "name": "아리사",
      "full": "시토 아리사",
      "written": false,
      "says": "난 안 엎었어. 꺼져."
     },
     {
      "id": "miria",
      "name": "미리아",
      "full": "사에키 미리아",
      "written": false,
      "says": "아리사쨩이 엎었어."
     },
     {
      "id": "anan",
      "name": "안안",
      "full": "나츠메 안안",
      "written": true,
      "says": "이 몸 아니면 아리사가 엎었노라."
     },
     {
      "id": "reia",
      "name": "레이아",
      "full": "하스미 레이아",
      "written": false,
      "says": "미리아와 아리사는 영혼이 바뀌어 있다!"
     },
     {
      "id": "margo",
      "name": "마고",
      "full": "호쇼 마고",
      "written": false,
      "says": "에마쨩이 엎었어♡"
     }
    ],
    "answer": "ema",
    "why_not": {
     "arisa": "아리사가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "miria": "미리아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "anan": "안안이 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "reia": "레이아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "margo": "마고가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 미리아, 안안",
     "미리아와 아리사는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 아리사의 말, 아리사 이름의 말은 미리아의 말이었다.",
     "범인: 에마"
    ],
    "false_cards": [
     "miria",
     "anan"
    ],
    "worlds": 1,
    "logic": {
     "ema": [
      "meta_false",
      [
       "anan"
      ]
     ],
     "arisa": [
      "deny_self",
      []
     ],
     "miria": [
      "accuse",
      [
       "arisa"
      ]
     ],
     "anan": [
      "self_or",
      [
       "arisa"
      ]
     ],
     "reia": [
      "swap_claim",
      [
       "arisa"
      ]
     ],
     "margo": [
      "accuse",
      [
       "ema"
      ]
     ]
    },
    "magic_ids": [
     "miria"
    ]
   },
   {
    "id": "hard-10",
    "tier": "hard",
    "incident": "미리아의 머리핀이 짝짝이로 바뀌어 있었다.",
    "verb": "바꿔 놨어",
    "victim": {
     "id": "miria",
     "name": "사에키 미리아",
     "line": "으왓! 아저씨 머리핀이 짝짝이가 됐어! 어쩌지...",
     "written": false
    },
    "n": 2,
    "rules": [
     "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
     "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
    ],
    "magic": [
     {
      "who": "안안",
      "name": "세뇌",
      "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
     },
     {
      "who": "마고",
      "name": "흉내내기",
      "text": "마고가 다른 한 사람의 목소리를 흉내 냈을 수도 있다. 그랬다면 그 사람 이름으로 나온 말은 사실 마고의 말이고(맞고 틀림도 마고 몫), 그 사람은 아무 말도 하지 않은 것이다. 흉내니까 말투도, 말 속의 \"나\"도 그 사람 것이다. (안안은 필담이라 흉내 낼 수 없다.)"
     }
    ],
    "suspects": [
     {
      "id": "margo",
      "name": "마고",
      "full": "호쇼 마고",
      "written": false,
      "says": "후후, 노아쨩의 말은 틀렸어."
     },
     {
      "id": "meruru",
      "name": "메루루",
      "full": "히카미 메루루",
      "written": false,
      "says": "안, 안안 씨의 말은 맞아요…"
     },
     {
      "id": "noah",
      "name": "노아",
      "full": "죠가사키 노아",
      "written": false,
      "says": "마고쨩 아니면 메루루쨩이 바꿔 놨어~"
     },
     {
      "id": "arisa",
      "name": "아리사",
      "full": "시토 아리사",
      "written": false,
      "says": "히카미는 안 바꿨어."
     },
     {
      "id": "anan",
      "name": "안안",
      "full": "나츠메 안안",
      "written": true,
      "says": "이 몸 아니면 메루루가 바꿔 놨노라."
     },
     {
      "id": "ema",
      "name": "에마",
      "full": "사쿠라바 에마",
      "written": false,
      "says": "메루루쨩이 바꿔 놨어!"
     }
    ],
    "answer": "margo",
    "why_not": {
     "meruru": "메루루가 범인이라면 거짓말하는 사람이 0명 또는 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
     "noah": "노아가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
     "arisa": "아리사가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
     "anan": "안안이 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
     "ema": "에마가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 마고, 메루루, 안안, 에마",
     "마고, 메루루, 에마 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
     "마고가 누구 흉내를 냈는지(냈는지 아닌지도)는 말만으로는 정해지지 않는다.",
     "범인: 마고"
    ],
    "false_cards": [
     "margo",
     "meruru",
     "anan",
     "ema"
    ],
    "worlds": 4,
    "logic": {
     "margo": [
      "meta_false",
      [
       "noah"
      ]
     ],
     "meruru": [
      "meta_true",
      [
       "anan"
      ]
     ],
     "noah": [
      "either",
      [
       "margo",
       "meruru"
      ]
     ],
     "arisa": [
      "deny",
      [
       "meruru"
      ]
     ],
     "anan": [
      "self_or",
      [
       "meruru"
      ]
     ],
     "ema": [
      "accuse",
      [
       "meruru"
      ]
     ]
    },
    "magic_ids": [
     "anan",
     "margo"
    ]
   }
  ]
 },
 "daily": [
  {
   "id": "daily-1",
   "tier": "normal",
   "incident": "노아의 스케치북에 누가 낙서를 했다.",
   "verb": "낙서했어",
   "victim": {
    "id": "noah",
    "name": "죠가사키 노아",
    "line": "노아 스케치북에 누가 그렸어~? 으음~ 근데 이 선, 나쁘지 않은데~",
    "written": false
   },
   "n": 1,
   "rules": [
    "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "미리아",
     "name": "뒤바뀜",
     "text": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
    }
   ],
   "suspects": [
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "한나쨩이 낙서했어!"
    },
    {
     "id": "sherry",
     "name": "셰리",
     "full": "타치바나 셰리",
     "written": false,
     "says": "에마 씨의 말은 맞아요!"
    },
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "사쿠라바는 낙서 안 했어."
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "아리사 씨 아니면 셰리 씨가 낙서했사와요!"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "아저씨는 셰리쨩과 영혼이 바뀌어 있어."
    }
   ],
   "answer": "hanna",
   "why_not": {
    "ema": "에마가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "sherry": "셰리가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 한나",
    "미리아와 셰리는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 셰리의 말, 셰리 이름의 말은 미리아의 말이었다.",
    "범인: 한나"
   ],
   "false_cards": [
    "hanna"
   ],
   "worlds": 1,
   "logic": {
    "ema": [
     "accuse",
     [
      "hanna"
     ]
    ],
    "sherry": [
     "meta_true",
     [
      "ema"
     ]
    ],
    "arisa": [
     "deny",
     [
      "ema"
     ]
    ],
    "hanna": [
     "either",
     [
      "arisa",
      "sherry"
     ]
    ],
    "miria": [
     "swap_claim",
     [
      "sherry"
     ]
    ]
   },
   "magic_ids": [
    "miria"
   ]
  },
  {
   "id": "daily-2",
   "tier": "hard",
   "incident": "나노카가 만들어 둔 과자가 감쪽같이 사라졌다.",
   "verb": "먹었어",
   "victim": {
    "id": "nanoka",
    "name": "쿠로베 나노카",
    "line": "...내가 만든 과자를 먹은 사람은 누구지? 어서 나오도록.",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "마고",
     "name": "흉내내기",
     "text": "마고가 다른 한 사람의 목소리를 흉내 냈을 수도 있다. 그랬다면 그 사람 이름으로 나온 말은 사실 마고의 말이고(맞고 틀림도 마고 몫), 그 사람은 아무 말도 하지 않은 것이다. 흉내니까 말투도, 말 속의 \"나\"도 그 사람 것이다. (안안은 필담이라 흉내 낼 수 없다.)"
    }
   ],
   "suspects": [
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "코코쨩 아니면 에마쨩이 먹었어."
    },
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "단언하지! 에마가 먹었다!"
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "마고 말은 틀렸음 ㅋㅋ"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "에마쨩의 말은 틀렸어."
    },
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "나 아니면 셰리쨩이 먹었어!"
    },
    {
     "id": "sherry",
     "name": "셰리",
     "full": "타치바나 셰리",
     "written": false,
     "says": "코코 씨 아니면 미리아 씨가 먹었어요!"
    }
   ],
   "answer": "miria",
   "why_not": {
    "margo": "마고가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "reia": "레이아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "coco": "코코가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "ema": "에마가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "sherry": "셰리가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 마고, 레이아, 에마",
    "마고가 누구 흉내를 냈는지(냈는지 아닌지도)는 말만으로는 정해지지 않는다.",
    "범인: 미리아"
   ],
   "false_cards": [
    "margo",
    "reia",
    "ema"
   ],
   "worlds": 2,
   "logic": {
    "margo": [
     "either",
     [
      "coco",
      "ema"
     ]
    ],
    "reia": [
     "accuse",
     [
      "ema"
     ]
    ],
    "coco": [
     "meta_false",
     [
      "margo"
     ]
    ],
    "miria": [
     "meta_false",
     [
      "ema"
     ]
    ],
    "ema": [
     "self_or",
     [
      "sherry"
     ]
    ],
    "sherry": [
     "either",
     [
      "coco",
      "miria"
     ]
    ]
   },
   "magic_ids": [
    "margo"
   ]
  },
  {
   "id": "daily-3",
   "tier": "normal",
   "incident": "에마의 일기장이 누군가에게 몰래 펼쳐져 있었다.",
   "verb": "펼쳐 봤어",
   "victim": {
    "id": "ema",
    "name": "사쿠라바 에마",
    "line": "으앗! 내 일기장 펼쳐 본 사람 누구야!? 이, 이상한 건 하나도 안 적었으니까!",
    "written": false
   },
   "n": 1,
   "rules": [
    "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "마고",
     "name": "흉내내기",
     "text": "마고가 다른 한 사람의 목소리를 흉내 냈을 수도 있다. 그랬다면 그 사람 이름으로 나온 말은 사실 마고의 말이고(맞고 틀림도 마고 몫), 그 사람은 아무 말도 하지 않은 것이다. 흉내니까 말투도, 말 속의 \"나\"도 그 사람 것이다. (안안은 필담이라 흉내 낼 수 없다.)"
    }
   ],
   "suspects": [
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "후후, 나 아니면 나노카쨩이 펼쳐 봤어."
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "코코쨩이 펼쳐 봤어~"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "노아는 안 봤노라."
    },
    {
     "id": "nanoka",
     "name": "나노카",
     "full": "쿠로베 나노카",
     "written": false,
     "says": "범인은 코코야."
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "나노카 아니면 노아가 펼쳐 봤음 ㅇㅇ"
    }
   ],
   "answer": "coco",
   "why_not": {
    "margo": "마고가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "noah": "노아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "nanoka": "나노카가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 마고, 코코",
    "코코 이름으로 나온 말은 사실 마고의 흉내였다.",
    "범인: 코코"
   ],
   "false_cards": [
    "margo",
    "coco"
   ],
   "worlds": 1,
   "logic": {
    "margo": [
     "self_or",
     [
      "nanoka"
     ]
    ],
    "noah": [
     "accuse",
     [
      "coco"
     ]
    ],
    "anan": [
     "deny",
     [
      "noah"
     ]
    ],
    "nanoka": [
     "culprit_is",
     [
      "coco"
     ]
    ],
    "coco": [
     "either",
     [
      "nanoka",
      "noah"
     ]
    ]
   },
   "magic_ids": [
    "margo"
   ]
  },
  {
   "id": "daily-4",
   "tier": "hard",
   "incident": "아리사의 성냥갑이 텅 비어 있었다.",
   "verb": "가져갔어",
   "victim": {
    "id": "arisa",
    "name": "시토 아리사",
    "line": "어떤 새끼야, 죽을래?! 내 성냥 건드린 놈, 당장 튀어나와!",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "안안",
     "name": "세뇌",
     "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
    },
    {
     "who": "마고",
     "name": "흉내내기",
     "text": "마고가 다른 한 사람의 목소리를 흉내 냈을 수도 있다. 그랬다면 그 사람 이름으로 나온 말은 사실 마고의 말이고(맞고 틀림도 마고 몫), 그 사람은 아무 말도 하지 않은 것이다. 흉내니까 말투도, 말 속의 \"나\"도 그 사람 것이다. (안안은 필담이라 흉내 낼 수 없다.)"
    }
   ],
   "suspects": [
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "마고쨩 아니면 미리아쨩이 가져갔어!"
    },
    {
     "id": "sherry",
     "name": "셰리",
     "full": "타치바나 셰리",
     "written": false,
     "says": "안안 씨 아니면 메루루 씨가 가져갔어요!"
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "미, 미리아 씨가 가져갔어요…"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "메루루쨩의 말은 맞아."
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "후후, 에마쨩의 말은 맞아."
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "범인은 메루루로다."
    }
   ],
   "answer": "meruru",
   "why_not": {
    "ema": "에마가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "sherry": "셰리가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "margo": "마고가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 에마, 메루루, 미리아, 마고",
    "에마, 메루루, 미리아, 마고 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "마고가 누구 흉내를 냈는지(냈는지 아닌지도)는 말만으로는 정해지지 않는다.",
    "범인: 메루루"
   ],
   "false_cards": [
    "ema",
    "meruru",
    "miria",
    "margo"
   ],
   "worlds": 9,
   "logic": {
    "ema": [
     "either",
     [
      "margo",
      "miria"
     ]
    ],
    "sherry": [
     "either",
     [
      "anan",
      "meruru"
     ]
    ],
    "meruru": [
     "accuse",
     [
      "miria"
     ]
    ],
    "miria": [
     "meta_true",
     [
      "meruru"
     ]
    ],
    "margo": [
     "meta_true",
     [
      "ema"
     ]
    ],
    "anan": [
     "culprit_is",
     [
      "meruru"
     ]
    ]
   },
   "magic_ids": [
    "anan",
    "margo"
   ]
  },
  {
   "id": "daily-5",
   "tier": "normal",
   "incident": "나노카가 만들어 둔 과자가 감쪽같이 사라졌다.",
   "verb": "먹었어",
   "victim": {
    "id": "nanoka",
    "name": "쿠로베 나노카",
    "line": "...내가 만든 과자를 먹은 사람은 누구지? 어서 나오도록.",
    "written": false
   },
   "n": 1,
   "rules": [
    "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "미리아",
     "name": "뒤바뀜",
     "text": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
    }
   ],
   "suspects": [
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "셰리쨩의 말은 맞아."
    },
    {
     "id": "sherry",
     "name": "셰리",
     "full": "타치바나 셰리",
     "written": false,
     "says": "아리사 씨 아니면 마고 씨가 먹었어요!"
    },
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "사에키와 타치바나는 영혼이 바뀌어 있어."
    },
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "단언하지! 셰리가 먹었다!"
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "후후, 나 아니면 레이아쨩이 먹었어."
    }
   ],
   "answer": "margo",
   "why_not": {
    "miria": "미리아가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "sherry": "셰리가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "reia": "레이아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 레이아",
    "미리아와 셰리는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 셰리의 말, 셰리 이름의 말은 미리아의 말이었다.",
    "범인: 마고"
   ],
   "false_cards": [
    "reia"
   ],
   "worlds": 1,
   "logic": {
    "miria": [
     "meta_true",
     [
      "sherry"
     ]
    ],
    "sherry": [
     "either",
     [
      "arisa",
      "margo"
     ]
    ],
    "arisa": [
     "swap_claim",
     [
      "sherry"
     ]
    ],
    "reia": [
     "accuse",
     [
      "sherry"
     ]
    ],
    "margo": [
     "self_or",
     [
      "reia"
     ]
    ]
   },
   "magic_ids": [
    "miria"
   ]
  },
  {
   "id": "daily-6",
   "tier": "hard",
   "incident": "에마의 일기장이 누군가에게 몰래 펼쳐져 있었다.",
   "verb": "펼쳐 봤어",
   "victim": {
    "id": "ema",
    "name": "사쿠라바 에마",
    "line": "으앗! 내 일기장 펼쳐 본 사람 누구야!? 이, 이상한 건 하나도 안 적었으니까!",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "안안",
     "name": "세뇌",
     "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
    }
   ],
   "suspects": [
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "셰리쨩은 안 봤어~"
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "후후, 레이아쨩의 말은 틀렸어."
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "안안 말은 맞음 ㅇㅈ"
    },
    {
     "id": "sherry",
     "name": "셰리",
     "full": "타치바나 셰리",
     "written": false,
     "says": "코코 씨 아니면 마고 씨가 펼쳐 봤어요!"
    },
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "단언하지! 범인은 노아다!"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "이 몸은 안 봤노라."
    }
   ],
   "answer": "sherry",
   "why_not": {
    "noah": "노아가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "margo": "마고가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "coco": "코코가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "reia": "레이아가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 노아, 셰리, 레이아",
    "노아, 셰리, 레이아 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "범인: 셰리"
   ],
   "false_cards": [
    "noah",
    "sherry",
    "reia"
   ],
   "worlds": 3,
   "logic": {
    "noah": [
     "deny",
     [
      "sherry"
     ]
    ],
    "margo": [
     "meta_false",
     [
      "reia"
     ]
    ],
    "coco": [
     "meta_true",
     [
      "anan"
     ]
    ],
    "sherry": [
     "either",
     [
      "coco",
      "margo"
     ]
    ],
    "reia": [
     "culprit_is",
     [
      "noah"
     ]
    ],
    "anan": [
     "deny_self",
     []
    ]
   },
   "magic_ids": [
    "anan"
   ]
  },
  {
   "id": "daily-7",
   "tier": "normal",
   "incident": "방송 중이던 코코의 장비 전원을 누군가 꺼 버렸다.",
   "verb": "껐어",
   "victim": {
    "id": "coco",
    "name": "사와타리 코코",
    "line": "여러분 잠깐~ 야 누가 내 방송 껐어? 당장 안 나올래?! 으, 역시 나랑 최애 이외에는 다 죽어버렸으면 좋겠어!",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "안안",
     "name": "세뇌",
     "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
    }
   ],
   "suspects": [
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "미, 미리아 씨는 안 껐어요…"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "에마쨩은 안 껐어."
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "노아의 말은 옳도다."
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "노아 아니면 메루루쨩이 껐어~"
    },
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "범인은 노아쨩이야!"
    }
   ],
   "answer": "anan",
   "why_not": {
    "meruru": "메루루가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "noah": "노아가 범인이라면 말들이 서로 어긋나 버린다 (안안의 세뇌를 누구에게 걸었다고 해도).",
    "ema": "에마가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 안안, 노아, 에마",
    "노아, 에마 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "범인: 안안"
   ],
   "false_cards": [
    "anan",
    "noah",
    "ema"
   ],
   "worlds": 2,
   "logic": {
    "meruru": [
     "deny",
     [
      "miria"
     ]
    ],
    "miria": [
     "deny",
     [
      "ema"
     ]
    ],
    "anan": [
     "meta_true",
     [
      "noah"
     ]
    ],
    "noah": [
     "self_or",
     [
      "meruru"
     ]
    ],
    "ema": [
     "culprit_is",
     [
      "noah"
     ]
    ]
   },
   "magic_ids": [
    "anan"
   ]
  },
  {
   "id": "daily-8",
   "tier": "hard",
   "incident": "나노카가 만들어 둔 과자가 감쪽같이 사라졌다.",
   "verb": "먹었어",
   "victim": {
    "id": "nanoka",
    "name": "쿠로베 나노카",
    "line": "...내가 만든 과자를 먹은 사람은 누구지? 어서 나오도록.",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "마고",
     "name": "흉내내기",
     "text": "마고가 다른 한 사람의 목소리를 흉내 냈을 수도 있다. 그랬다면 그 사람 이름으로 나온 말은 사실 마고의 말이고(맞고 틀림도 마고 몫), 그 사람은 아무 말도 하지 않은 것이다. 흉내니까 말투도, 말 속의 \"나\"도 그 사람 것이다. (안안은 필담이라 흉내 낼 수 없다.)"
    }
   ],
   "suspects": [
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "한나쨩 아니면 레이아쨩이 먹었어."
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "후후, 나 아니면 한나쨩이 먹었어."
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "마고가 먹었음 ㅋㅋ"
    },
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "단언하지! 범인은 마고다!"
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "나는 안 먹었사와요!"
    }
   ],
   "answer": "reia",
   "why_not": {
    "miria": "미리아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "margo": "마고가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "coco": "코코가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "hanna": "한나가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 마고, 코코, 레이아",
    "마고가 누구 흉내를 냈는지(냈는지 아닌지도)는 말만으로는 정해지지 않는다.",
    "범인: 레이아"
   ],
   "false_cards": [
    "margo",
    "coco",
    "reia"
   ],
   "worlds": 2,
   "logic": {
    "miria": [
     "either",
     [
      "hanna",
      "reia"
     ]
    ],
    "margo": [
     "self_or",
     [
      "hanna"
     ]
    ],
    "coco": [
     "accuse",
     [
      "margo"
     ]
    ],
    "reia": [
     "culprit_is",
     [
      "margo"
     ]
    ],
    "hanna": [
     "deny_self",
     []
    ]
   },
   "magic_ids": [
    "margo"
   ]
  },
  {
   "id": "daily-9",
   "tier": "normal",
   "incident": "방송 중이던 코코의 장비 전원을 누군가 꺼 버렸다.",
   "verb": "껐어",
   "victim": {
    "id": "coco",
    "name": "사와타리 코코",
    "line": "여러분 잠깐~ 야 누가 내 방송 껐어? 당장 안 나올래?! 으, 역시 나랑 최애 이외에는 다 죽어버렸으면 좋겠어!",
    "written": false
   },
   "n": 1,
   "rules": [
    "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "미리아",
     "name": "뒤바뀜",
     "text": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
    }
   ],
   "suspects": [
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "범인은 메루루쨩이야."
    },
    {
     "id": "nanoka",
     "name": "나노카",
     "full": "쿠로베 나노카",
     "written": false,
     "says": "미리아와 노아는 영혼이 바뀌어 있어."
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "범인은 미리아쨩이야~"
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "미, 미리아 씨의 말은 맞아요…"
    }
   ],
   "answer": "meruru",
   "why_not": {
    "miria": "미리아가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "nanoka": "나노카가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "noah": "노아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 노아",
    "미리아와 노아는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 노아의 말, 노아 이름의 말은 미리아의 말이었다.",
    "범인: 메루루"
   ],
   "false_cards": [
    "noah"
   ],
   "worlds": 1,
   "logic": {
    "miria": [
     "culprit_is",
     [
      "meruru"
     ]
    ],
    "nanoka": [
     "swap_claim",
     [
      "noah"
     ]
    ],
    "noah": [
     "culprit_is",
     [
      "miria"
     ]
    ],
    "meruru": [
     "meta_true",
     [
      "miria"
     ]
    ]
   },
   "magic_ids": [
    "miria"
   ]
  },
  {
   "id": "daily-10",
   "tier": "hard",
   "incident": "미리아의 머리핀이 짝짝이로 바뀌어 있었다.",
   "verb": "바꿔 놨어",
   "victim": {
    "id": "miria",
    "name": "사에키 미리아",
    "line": "으왓! 아저씨 머리핀이 짝짝이가 됐어! 어쩌지...",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "안안",
     "name": "세뇌",
     "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
    }
   ],
   "suspects": [
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "노아 씨는 안 바꿨사와요!"
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "아, 아리사 씨는 안 바꿨어요…"
    },
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "나츠메 말은 틀렸어. 닥쳐."
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "이 몸 아니면 아리사가 바꿔 놨노라."
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "안안쨩의 말은 맞아~"
    }
   ],
   "answer": "noah",
   "why_not": {
    "hanna": "한나가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "meruru": "메루루가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 한나, 안안, 노아",
    "한나, 노아 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "범인: 노아"
   ],
   "false_cards": [
    "hanna",
    "anan",
    "noah"
   ],
   "worlds": 2,
   "logic": {
    "hanna": [
     "deny",
     [
      "noah"
     ]
    ],
    "meruru": [
     "deny",
     [
      "arisa"
     ]
    ],
    "arisa": [
     "meta_false",
     [
      "anan"
     ]
    ],
    "anan": [
     "self_or",
     [
      "arisa"
     ]
    ],
    "noah": [
     "meta_true",
     [
      "anan"
     ]
    ]
   },
   "magic_ids": [
    "anan"
   ]
  },
  {
   "id": "daily-11",
   "tier": "normal",
   "incident": "에마의 일기장이 누군가에게 몰래 펼쳐져 있었다.",
   "verb": "펼쳐 봤어",
   "victim": {
    "id": "ema",
    "name": "사쿠라바 에마",
    "line": "으앗! 내 일기장 펼쳐 본 사람 누구야!? 이, 이상한 건 하나도 안 적었으니까!",
    "written": false
   },
   "n": 1,
   "rules": [
    "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "마고",
     "name": "흉내내기",
     "text": "마고가 다른 한 사람의 목소리를 흉내 냈을 수도 있다. 그랬다면 그 사람 이름으로 나온 말은 사실 마고의 말이고(맞고 틀림도 마고 몫), 그 사람은 아무 말도 하지 않은 것이다. 흉내니까 말투도, 말 속의 \"나\"도 그 사람 것이다. (안안은 필담이라 흉내 낼 수 없다.)"
    }
   ],
   "suspects": [
    {
     "id": "nanoka",
     "name": "나노카",
     "full": "쿠로베 나노카",
     "written": false,
     "says": "코코는 안 봤어."
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "레이아 말은 틀렸음 ㅋㅋ"
    },
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "단언하지! 나노카가 펼쳐 봤다!"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "이 몸 아니면 코코가 펼쳐 봤노라."
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "후후, 나 아니면 나노카쨩이 펼쳐 봤어."
    }
   ],
   "answer": "anan",
   "why_not": {
    "nanoka": "나노카가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "coco": "코코가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "reia": "레이아가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "margo": "마고가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 레이아, 마고",
    "레이아 이름으로 나온 말은 사실 마고의 흉내였다.",
    "범인: 안안"
   ],
   "false_cards": [
    "reia",
    "margo"
   ],
   "worlds": 1,
   "logic": {
    "nanoka": [
     "deny",
     [
      "coco"
     ]
    ],
    "coco": [
     "meta_false",
     [
      "reia"
     ]
    ],
    "reia": [
     "accuse",
     [
      "nanoka"
     ]
    ],
    "anan": [
     "self_or",
     [
      "coco"
     ]
    ],
    "margo": [
     "self_or",
     [
      "nanoka"
     ]
    ]
   },
   "magic_ids": [
    "margo"
   ]
  },
  {
   "id": "daily-12",
   "tier": "hard",
   "incident": "노아의 스케치북에 누가 낙서를 했다.",
   "verb": "낙서했어",
   "victim": {
    "id": "noah",
    "name": "죠가사키 노아",
    "line": "노아 스케치북에 누가 그렸어~? 으음~ 근데 이 선, 나쁘지 않은데~",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "안안",
     "name": "세뇌",
     "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
    },
    {
     "who": "미리아",
     "name": "뒤바뀜",
     "text": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
    }
   ],
   "suspects": [
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "한, 한나 씨 아니면 레이아 씨가 낙서했어요…"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "범인은 레이아쨩이야."
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "미리아 씨와 레이아 씨는 영혼이 바뀌어 있사와요!"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "레이아가 낙서했노라."
    },
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "아아, 안안의 말은 맞다!"
    }
   ],
   "answer": "hanna",
   "why_not": {
    "meruru": "메루루가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "reia": "레이아가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 미리아, 안안, 레이아",
    "미리아, 레이아 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "미리아와 레이아는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 레이아의 말, 레이아 이름의 말은 미리아의 말이었다.",
    "범인: 한나"
   ],
   "false_cards": [
    "miria",
    "anan",
    "reia"
   ],
   "worlds": 2,
   "logic": {
    "meruru": [
     "either",
     [
      "hanna",
      "reia"
     ]
    ],
    "miria": [
     "culprit_is",
     [
      "reia"
     ]
    ],
    "hanna": [
     "swap_claim",
     [
      "reia"
     ]
    ],
    "anan": [
     "accuse",
     [
      "reia"
     ]
    ],
    "reia": [
     "meta_true",
     [
      "anan"
     ]
    ]
   },
   "magic_ids": [
    "anan",
    "miria"
   ]
  },
  {
   "id": "daily-13",
   "tier": "normal",
   "incident": "한나의 리본 하나가 없어졌다.",
   "verb": "가져갔어",
   "victim": {
    "id": "hanna",
    "name": "토노 한나",
    "line": "제 리본이 없어졌사와요! 어떻게 저에게 그런 짓을 쳐 할수가 있는 것이와요?!",
    "written": false
   },
   "n": 1,
   "rules": [
    "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "마고",
     "name": "흉내내기",
     "text": "마고가 다른 한 사람의 목소리를 흉내 냈을 수도 있다. 그랬다면 그 사람 이름으로 나온 말은 사실 마고의 말이고(맞고 틀림도 마고 몫), 그 사람은 아무 말도 하지 않은 것이다. 흉내니까 말투도, 말 속의 \"나\"도 그 사람 것이다. (안안은 필담이라 흉내 낼 수 없다.)"
    }
   ],
   "suspects": [
    {
     "id": "nanoka",
     "name": "나노카",
     "full": "쿠로베 나노카",
     "written": false,
     "says": "난 안 가져갔어."
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "마고의 말은 그릇되었도다."
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "레이아쨩이 가져갔어~"
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "범인은 노아쨩이야♡"
    },
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "단언하지! 노아가 가져갔다!"
    }
   ],
   "answer": "reia",
   "why_not": {
    "nanoka": "나노카가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "noah": "노아가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "margo": "마고가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 마고, 레이아",
    "레이아 이름으로 나온 말은 사실 마고의 흉내였다.",
    "범인: 레이아"
   ],
   "false_cards": [
    "margo",
    "reia"
   ],
   "worlds": 1,
   "logic": {
    "nanoka": [
     "deny_self",
     []
    ],
    "anan": [
     "meta_false",
     [
      "margo"
     ]
    ],
    "noah": [
     "accuse",
     [
      "reia"
     ]
    ],
    "margo": [
     "culprit_is",
     [
      "noah"
     ]
    ],
    "reia": [
     "accuse",
     [
      "noah"
     ]
    ]
   },
   "magic_ids": [
    "margo"
   ]
  },
  {
   "id": "daily-14",
   "tier": "hard",
   "incident": "레이아의 거울에 립스틱으로 낙서가 되어 있었다.",
   "verb": "낙서했어",
   "victim": {
    "id": "reia",
    "name": "하스미 레이아",
    "line": "이상한 무대 연출이 되었구나! 이런 짓을 저지를 범인으로부터 나는 모두를 지키겠어!",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "미리아",
     "name": "뒤바뀜",
     "text": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
    }
   ],
   "suspects": [
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "후후, 미리아쨩의 말은 맞아."
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "미리아와 코코는 영혼이 바뀌어 있노라."
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "에마 씨 아니면 미리아 씨가 낙서했사와요!"
    },
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "미리아쨩이 낙서했어!"
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "한나 아니면 미리아가 낙서했음 ㅇㅇ"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "아저씨 아니면 한나쨩이 낙서했어."
    }
   ],
   "answer": "hanna",
   "why_not": {
    "margo": "마고가 범인이라면 거짓말하는 사람이 5명 또는 6명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 5명 또는 6명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "ema": "에마가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "coco": "코코가 범인이라면 거짓말하는 사람이 5명 또는 6명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 0명 또는 1명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 한나, 에마",
    "미리아와 코코는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 코코의 말, 코코 이름의 말은 미리아의 말이었다.",
    "범인: 한나"
   ],
   "false_cards": [
    "hanna",
    "ema"
   ],
   "worlds": 1,
   "logic": {
    "margo": [
     "meta_true",
     [
      "miria"
     ]
    ],
    "anan": [
     "swap_claim",
     [
      "coco"
     ]
    ],
    "hanna": [
     "either",
     [
      "ema",
      "miria"
     ]
    ],
    "ema": [
     "accuse",
     [
      "miria"
     ]
    ],
    "coco": [
     "either",
     [
      "hanna",
      "miria"
     ]
    ],
    "miria": [
     "self_or",
     [
      "hanna"
     ]
    ]
   },
   "magic_ids": [
    "miria"
   ]
  },
  {
   "id": "daily-15",
   "tier": "normal",
   "incident": "한나의 리본 하나가 없어졌다.",
   "verb": "가져갔어",
   "victim": {
    "id": "hanna",
    "name": "토노 한나",
    "line": "제 리본이 없어졌사와요! 어떻게 저에게 그런 짓을 쳐 할수가 있는 것이와요?!",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "안안",
     "name": "세뇌",
     "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
    }
   ],
   "suspects": [
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "아저씨 아니면 아리사쨩이 가져갔어."
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "마고의 말은 옳도다."
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "후후, 나는 안 가져갔어."
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "범, 범인은 마고 씨예요…"
    },
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "나츠메 새끼가 가져갔어."
    }
   ],
   "answer": "meruru",
   "why_not": {
    "miria": "미리아가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "margo": "마고가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 미리아, 메루루, 아리사",
    "미리아, 메루루, 아리사 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "범인: 메루루"
   ],
   "false_cards": [
    "miria",
    "meruru",
    "arisa"
   ],
   "worlds": 3,
   "logic": {
    "miria": [
     "self_or",
     [
      "arisa"
     ]
    ],
    "anan": [
     "meta_true",
     [
      "margo"
     ]
    ],
    "margo": [
     "deny_self",
     []
    ],
    "meruru": [
     "culprit_is",
     [
      "margo"
     ]
    ],
    "arisa": [
     "accuse",
     [
      "anan"
     ]
    ]
   },
   "magic_ids": [
    "anan"
   ]
  },
  {
   "id": "daily-16",
   "tier": "hard",
   "incident": "안안이 아껴 마시던 홍차가 한 방울도 남지 않았다.",
   "verb": "다 마셨어",
   "victim": {
    "id": "anan",
    "name": "나츠메 안안",
    "line": "이 몸이 아껴 두었던 홍차가 사라졌노라. 범인은 이 몸 앞에 나와 고하라.",
    "written": true
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "마고",
     "name": "흉내내기",
     "text": "마고가 다른 한 사람의 목소리를 흉내 냈을 수도 있다. 그랬다면 그 사람 이름으로 나온 말은 사실 마고의 말이고(맞고 틀림도 마고 몫), 그 사람은 아무 말도 하지 않은 것이다. 흉내니까 말투도, 말 속의 \"나\"도 그 사람 것이다. (안안은 필담이라 흉내 낼 수 없다.)"
    }
   ],
   "suspects": [
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "범인은 에마 씨이와요!"
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "후후, 나 아니면 한나쨩이 다 마셨어."
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "마고쨩 아니면 메루루쨩이 다 마셨어~"
    },
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "마고쨩 아니면 노아쨩이 다 마셨어!"
    },
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "아아, 메루루의 말은 맞다!"
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "노, 노아 씨의 말은 맞아요…"
    }
   ],
   "answer": "meruru",
   "why_not": {
    "hanna": "한나가 범인이라면 거짓말하는 사람이 5명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "margo": "마고가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "noah": "노아가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "ema": "에마가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "reia": "레이아가 범인이라면 거짓말하는 사람이 5명 또는 6명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 한나, 마고, 에마",
    "마고가 누구 흉내를 냈는지(냈는지 아닌지도)는 말만으로는 정해지지 않는다.",
    "범인: 메루루"
   ],
   "false_cards": [
    "hanna",
    "margo",
    "ema"
   ],
   "worlds": 2,
   "logic": {
    "hanna": [
     "culprit_is",
     [
      "ema"
     ]
    ],
    "margo": [
     "self_or",
     [
      "hanna"
     ]
    ],
    "noah": [
     "either",
     [
      "margo",
      "meruru"
     ]
    ],
    "ema": [
     "either",
     [
      "margo",
      "noah"
     ]
    ],
    "reia": [
     "meta_true",
     [
      "meruru"
     ]
    ],
    "meruru": [
     "meta_true",
     [
      "noah"
     ]
    ]
   },
   "magic_ids": [
    "margo"
   ]
  },
  {
   "id": "daily-17",
   "tier": "normal",
   "incident": "아리사의 성냥갑이 텅 비어 있었다.",
   "verb": "가져갔어",
   "victim": {
    "id": "arisa",
    "name": "시토 아리사",
    "line": "어떤 새끼야, 죽을래?! 내 성냥 건드린 놈, 당장 튀어나와!",
    "written": false
   },
   "n": 1,
   "rules": [
    "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "마고",
     "name": "흉내내기",
     "text": "마고가 다른 한 사람의 목소리를 흉내 냈을 수도 있다. 그랬다면 그 사람 이름으로 나온 말은 사실 마고의 말이고(맞고 틀림도 마고 몫), 그 사람은 아무 말도 하지 않은 것이다. 흉내니까 말투도, 말 속의 \"나\"도 그 사람 것이다. (안안은 필담이라 흉내 낼 수 없다.)"
    }
   ],
   "suspects": [
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "나 아니면 마고가 가져갔다!"
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "범인은 마고임 빼박"
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "범인은 코코쨩이야~"
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "범인은 노아쨩이야♡"
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "오호호, 노아 씨의 말은 틀렸사와요!"
    }
   ],
   "answer": "margo",
   "why_not": {
    "reia": "레이아가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "coco": "코코가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "noah": "노아가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "hanna": "한나가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 노아, 마고",
    "노아 이름으로 나온 말은 사실 마고의 흉내였다.",
    "범인: 마고"
   ],
   "false_cards": [
    "noah",
    "margo"
   ],
   "worlds": 1,
   "logic": {
    "reia": [
     "self_or",
     [
      "margo"
     ]
    ],
    "coco": [
     "culprit_is",
     [
      "margo"
     ]
    ],
    "noah": [
     "culprit_is",
     [
      "coco"
     ]
    ],
    "margo": [
     "culprit_is",
     [
      "noah"
     ]
    ],
    "hanna": [
     "meta_false",
     [
      "noah"
     ]
    ]
   },
   "magic_ids": [
    "margo"
   ]
  },
  {
   "id": "daily-18",
   "tier": "hard",
   "incident": "셰리가 아끼는 화분이 엎어져 있었다.",
   "verb": "엎었어",
   "victim": {
    "id": "sherry",
    "name": "타치바나 셰리",
    "line": "사건이에요! 이건 명탐정 셰리쨩에게 보내는 도전장이에요!",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "안안",
     "name": "세뇌",
     "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
    }
   ],
   "suspects": [
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "이 몸은 안 엎었노라."
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "아저씨 아니면 마고쨩이 엎었어."
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "마, 마고 씨 아니면 미리아 씨가 엎었어요…"
    },
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "단언하지! 범인은 메루루다!"
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "범인은 미리아쨩이야♡"
    }
   ],
   "answer": "meruru",
   "why_not": {
    "anan": "안안이 범인이라면 거짓말하는 사람이 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "reia": "레이아가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "margo": "마고가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 미리아, 메루루, 마고",
    "미리아, 메루루, 마고 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "범인: 메루루"
   ],
   "false_cards": [
    "miria",
    "meruru",
    "margo"
   ],
   "worlds": 3,
   "logic": {
    "anan": [
     "deny_self",
     []
    ],
    "miria": [
     "self_or",
     [
      "margo"
     ]
    ],
    "meruru": [
     "either",
     [
      "margo",
      "miria"
     ]
    ],
    "reia": [
     "culprit_is",
     [
      "meruru"
     ]
    ],
    "margo": [
     "culprit_is",
     [
      "miria"
     ]
    ]
   },
   "magic_ids": [
    "anan"
   ]
  },
  {
   "id": "daily-19",
   "tier": "normal",
   "incident": "안안이 아껴 마시던 홍차가 한 방울도 남지 않았다.",
   "verb": "다 마셨어",
   "victim": {
    "id": "anan",
    "name": "나츠메 안안",
    "line": "이 몸이 아껴 두었던 홍차가 사라졌노라. 범인은 이 몸 앞에 나와 고하라.",
    "written": true
   },
   "n": 1,
   "rules": [
    "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "미리아",
     "name": "뒤바뀜",
     "text": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
    }
   ],
   "suspects": [
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "후후, 셰리쨩의 말은 맞아."
    },
    {
     "id": "sherry",
     "name": "셰리",
     "full": "타치바나 셰리",
     "written": false,
     "says": "미리아 씨와 에마 씨는 영혼이 바뀌어 있어요!"
    },
    {
     "id": "nanoka",
     "name": "나노카",
     "full": "쿠로베 나노카",
     "written": false,
     "says": "에마 아니면 셰리가 다 마셨어."
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "범인은 셰리쨩이야."
    },
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "미리아쨩과 나노카쨩은 영혼이 바뀌어 있어!"
    }
   ],
   "answer": "sherry",
   "why_not": {
    "margo": "마고가 범인이라면 거짓말하는 사람이 3명 또는 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "nanoka": "나노카가 범인이라면 거짓말하는 사람이 3명 또는 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 3명 또는 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "ema": "에마가 범인이라면 거짓말하는 사람이 2명 또는 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 에마",
    "미리아와 에마는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 에마의 말, 에마 이름의 말은 미리아의 말이었다.",
    "범인: 셰리"
   ],
   "false_cards": [
    "ema"
   ],
   "worlds": 1,
   "logic": {
    "margo": [
     "meta_true",
     [
      "sherry"
     ]
    ],
    "sherry": [
     "swap_claim",
     [
      "ema"
     ]
    ],
    "nanoka": [
     "either",
     [
      "ema",
      "sherry"
     ]
    ],
    "miria": [
     "culprit_is",
     [
      "sherry"
     ]
    ],
    "ema": [
     "swap_claim",
     [
      "nanoka"
     ]
    ]
   },
   "magic_ids": [
    "miria"
   ]
  },
  {
   "id": "daily-20",
   "tier": "hard",
   "incident": "노아의 스케치북에 누가 낙서를 했다.",
   "verb": "낙서했어",
   "victim": {
    "id": "noah",
    "name": "죠가사키 노아",
    "line": "노아 스케치북에 누가 그렸어~? 으음~ 근데 이 선, 나쁘지 않은데~",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "마고",
     "name": "흉내내기",
     "text": "마고가 다른 한 사람의 목소리를 흉내 냈을 수도 있다. 그랬다면 그 사람 이름으로 나온 말은 사실 마고의 말이고(맞고 틀림도 마고 몫), 그 사람은 아무 말도 하지 않은 것이다. 흉내니까 말투도, 말 속의 \"나\"도 그 사람 것이다. (안안은 필담이라 흉내 낼 수 없다.)"
    }
   ],
   "suspects": [
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "호쇼는 낙서 안 했어."
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "후후, 코코쨩의 말은 틀렸어."
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "범인은 아리사임 빼박"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "범인은 코코로다."
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "오호호, 안안 씨의 말은 맞사와요!"
    }
   ],
   "answer": "arisa",
   "why_not": {
    "margo": "마고가 범인이라면 거짓말하는 사람이 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "coco": "코코가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "hanna": "한나가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 마고, 안안, 한나",
    "한나 이름으로 나온 말은 사실 마고의 흉내였다.",
    "범인: 아리사"
   ],
   "false_cards": [
    "margo",
    "anan",
    "hanna"
   ],
   "worlds": 1,
   "logic": {
    "arisa": [
     "deny",
     [
      "margo"
     ]
    ],
    "margo": [
     "meta_false",
     [
      "coco"
     ]
    ],
    "coco": [
     "culprit_is",
     [
      "arisa"
     ]
    ],
    "anan": [
     "culprit_is",
     [
      "coco"
     ]
    ],
    "hanna": [
     "meta_true",
     [
      "anan"
     ]
    ]
   },
   "magic_ids": [
    "margo"
   ]
  },
  {
   "id": "daily-21",
   "tier": "normal",
   "incident": "셰리가 아끼는 화분이 엎어져 있었다.",
   "verb": "엎었어",
   "victim": {
    "id": "sherry",
    "name": "타치바나 셰리",
    "line": "사건이에요! 이건 명탐정 셰리쨩에게 보내는 도전장이에요!",
    "written": false
   },
   "n": 1,
   "rules": [
    "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "마고",
     "name": "흉내내기",
     "text": "마고가 다른 한 사람의 목소리를 흉내 냈을 수도 있다. 그랬다면 그 사람 이름으로 나온 말은 사실 마고의 말이고(맞고 틀림도 마고 몫), 그 사람은 아무 말도 하지 않은 것이다. 흉내니까 말투도, 말 속의 \"나\"도 그 사람 것이다. (안안은 필담이라 흉내 낼 수 없다.)"
    }
   ],
   "suspects": [
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "한나쨩이 엎었어♡"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "코코 아니면 마고가 엎었노라."
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "범인은 안안 씨이와요!"
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "마고는 안 엎었음"
    }
   ],
   "answer": "coco",
   "why_not": {
    "margo": "마고가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "hanna": "한나가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 마고, 한나",
    "한나 이름으로 나온 말은 사실 마고의 흉내였다.",
    "범인: 코코"
   ],
   "false_cards": [
    "margo",
    "hanna"
   ],
   "worlds": 1,
   "logic": {
    "margo": [
     "accuse",
     [
      "hanna"
     ]
    ],
    "anan": [
     "either",
     [
      "coco",
      "margo"
     ]
    ],
    "hanna": [
     "culprit_is",
     [
      "anan"
     ]
    ],
    "coco": [
     "deny",
     [
      "margo"
     ]
    ]
   },
   "magic_ids": [
    "margo"
   ]
  },
  {
   "id": "daily-22",
   "tier": "hard",
   "incident": "노아의 스케치북에 누가 낙서를 했다.",
   "verb": "낙서했어",
   "victim": {
    "id": "noah",
    "name": "죠가사키 노아",
    "line": "노아 스케치북에 누가 그렸어~? 으음~ 근데 이 선, 나쁘지 않은데~",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "안안",
     "name": "세뇌",
     "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
    },
    {
     "who": "미리아",
     "name": "뒤바뀜",
     "text": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
    }
   ],
   "suspects": [
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "코코의 말은 옳도다."
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "한나 말은 맞음 ㅇㅈ"
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "코코 씨가 낙서했사와요!"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "아저씨는 코코쨩과 영혼이 바뀌어 있어."
    },
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "단언하지! 범인은 미리아다!"
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "후후, 나는 낙서 안 했어."
    }
   ],
   "answer": "miria",
   "why_not": {
    "anan": "안안이 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "coco": "코코가 범인이라면 거짓말하는 사람이 0명 또는 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "hanna": "한나가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "reia": "레이아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "margo": "마고가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 안안, 코코, 한나",
    "한나, 미리아 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "미리아와 코코는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 코코의 말, 코코 이름의 말은 미리아의 말이었다.",
    "범인: 미리아"
   ],
   "false_cards": [
    "anan",
    "coco",
    "hanna"
   ],
   "worlds": 2,
   "logic": {
    "anan": [
     "meta_true",
     [
      "coco"
     ]
    ],
    "coco": [
     "meta_true",
     [
      "hanna"
     ]
    ],
    "hanna": [
     "accuse",
     [
      "coco"
     ]
    ],
    "miria": [
     "swap_claim",
     [
      "coco"
     ]
    ],
    "reia": [
     "culprit_is",
     [
      "miria"
     ]
    ],
    "margo": [
     "deny_self",
     []
    ]
   },
   "magic_ids": [
    "anan",
    "miria"
   ]
  },
  {
   "id": "daily-23",
   "tier": "normal",
   "incident": "레이아의 거울에 립스틱으로 낙서가 되어 있었다.",
   "verb": "낙서했어",
   "victim": {
    "id": "reia",
    "name": "하스미 레이아",
    "line": "이상한 무대 연출이 되었구나! 이런 짓을 저지를 범인으로부터 나는 모두를 지키겠어!",
    "written": false
   },
   "n": 1,
   "rules": [
    "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "안안",
     "name": "세뇌",
     "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
    }
   ],
   "suspects": [
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "범인은 메루루로다."
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "에, 에마 씨는 안 그랬어요…"
    },
    {
     "id": "sherry",
     "name": "셰리",
     "full": "타치바나 셰리",
     "written": false,
     "says": "저 아니면 메루루 씨가 낙서했어요!"
    },
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "메루루쨩은 안 그랬어!"
    }
   ],
   "answer": "anan",
   "why_not": {
    "meruru": "메루루가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해.",
    "sherry": "셰리가 범인이라면 말들이 서로 어긋나 버린다 (안안의 세뇌를 누구에게 걸었다고 해도).",
    "ema": "에마가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 안안, 셰리",
    "셰리는 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다.",
    "범인: 안안"
   ],
   "false_cards": [
    "anan",
    "sherry"
   ],
   "worlds": 1,
   "logic": {
    "anan": [
     "culprit_is",
     [
      "meruru"
     ]
    ],
    "meruru": [
     "deny",
     [
      "ema"
     ]
    ],
    "sherry": [
     "self_or",
     [
      "meruru"
     ]
    ],
    "ema": [
     "deny",
     [
      "meruru"
     ]
    ]
   },
   "magic_ids": [
    "anan"
   ]
  },
  {
   "id": "daily-24",
   "tier": "hard",
   "incident": "메루루의 반창고 상자가 텅 비어 있었다.",
   "verb": "다 썼어",
   "victim": {
    "id": "meruru",
    "name": "히카미 메루루",
    "line": "흑흑... 반창고가 다 떨어졌어요. 누가 다치면 어떡하죠?",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "안안",
     "name": "세뇌",
     "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
    },
    {
     "who": "미리아",
     "name": "뒤바뀜",
     "text": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
    }
   ],
   "suspects": [
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "미리아와 코코는 영혼이 바뀌어 있노라."
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "에마 말은 맞음 ㅇㅈ"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "나노카쨩은 안 썼어."
    },
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "나노카쨩의 말은 맞아!"
    },
    {
     "id": "nanoka",
     "name": "나노카",
     "full": "쿠로베 나노카",
     "written": false,
     "says": "에마는 안 썼어."
    }
   ],
   "answer": "ema",
   "why_not": {
    "anan": "안안이 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "coco": "코코가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "nanoka": "나노카가 범인이라면 거짓말하는 사람이 0명 또는 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 코코, 에마, 나노카",
    "미리아, 에마, 나노카 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "미리아와 코코는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 코코의 말, 코코 이름의 말은 미리아의 말이었다.",
    "범인: 에마"
   ],
   "false_cards": [
    "coco",
    "ema",
    "nanoka"
   ],
   "worlds": 3,
   "logic": {
    "anan": [
     "swap_claim",
     [
      "coco"
     ]
    ],
    "coco": [
     "meta_true",
     [
      "ema"
     ]
    ],
    "miria": [
     "deny",
     [
      "nanoka"
     ]
    ],
    "ema": [
     "meta_true",
     [
      "nanoka"
     ]
    ],
    "nanoka": [
     "deny",
     [
      "ema"
     ]
    ]
   },
   "magic_ids": [
    "anan",
    "miria"
   ]
  },
  {
   "id": "daily-25",
   "tier": "normal",
   "incident": "나노카가 만들어 둔 과자가 감쪽같이 사라졌다.",
   "verb": "먹었어",
   "victim": {
    "id": "nanoka",
    "name": "쿠로베 나노카",
    "line": "...내가 만든 과자를 먹은 사람은 누구지? 어서 나오도록.",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "미리아",
     "name": "뒤바뀜",
     "text": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
    }
   ],
   "suspects": [
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "나는 미리아와 영혼이 바뀌어 있다!"
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "미리아 씨가 먹었사와요!"
    },
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "나 아니면 한나쨩이 먹었어!"
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "레, 레이아 씨의 말은 맞아요…"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "레이아쨩은 안 먹었어."
    }
   ],
   "answer": "meruru",
   "why_not": {
    "reia": "레이아가 범인이라면 거짓말하는 사람이 3명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "hanna": "한나가 범인이라면 거짓말하는 사람이 1명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "ema": "에마가 범인이라면 거짓말하는 사람이 1명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 1명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 한나, 에마",
    "미리아와 레이아는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 레이아의 말, 레이아 이름의 말은 미리아의 말이었다.",
    "범인: 메루루"
   ],
   "false_cards": [
    "hanna",
    "ema"
   ],
   "worlds": 1,
   "logic": {
    "reia": [
     "swap_claim",
     [
      "reia"
     ]
    ],
    "hanna": [
     "accuse",
     [
      "miria"
     ]
    ],
    "ema": [
     "self_or",
     [
      "hanna"
     ]
    ],
    "meruru": [
     "meta_true",
     [
      "reia"
     ]
    ],
    "miria": [
     "deny",
     [
      "reia"
     ]
    ]
   },
   "magic_ids": [
    "miria"
   ]
  },
  {
   "id": "daily-26",
   "tier": "hard",
   "incident": "에마의 일기장이 누군가에게 몰래 펼쳐져 있었다.",
   "verb": "펼쳐 봤어",
   "victim": {
    "id": "ema",
    "name": "사쿠라바 에마",
    "line": "으앗! 내 일기장 펼쳐 본 사람 누구야!? 이, 이상한 건 하나도 안 적었으니까!",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "마고",
     "name": "흉내내기",
     "text": "마고가 다른 한 사람의 목소리를 흉내 냈을 수도 있다. 그랬다면 그 사람 이름으로 나온 말은 사실 마고의 말이고(맞고 틀림도 마고 몫), 그 사람은 아무 말도 하지 않은 것이다. 흉내니까 말투도, 말 속의 \"나\"도 그 사람 것이다. (안안은 필담이라 흉내 낼 수 없다.)"
    }
   ],
   "suspects": [
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "안안 말은 맞음 ㅇㅈ"
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "안안쨩 아니면 메루루쨩이 펼쳐 봤어."
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "범인은 한나로다."
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "저, 저 아니면 안안 씨가 펼쳐 봤어요…"
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "범인은 마고 씨이와요!"
    }
   ],
   "answer": "hanna",
   "why_not": {
    "coco": "코코가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "margo": "마고가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "meruru": "메루루가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 마고, 메루루, 한나",
    "마고가 누구 흉내를 냈는지(냈는지 아닌지도)는 말만으로는 정해지지 않는다.",
    "범인: 한나"
   ],
   "false_cards": [
    "margo",
    "meruru",
    "hanna"
   ],
   "worlds": 2,
   "logic": {
    "coco": [
     "meta_true",
     [
      "anan"
     ]
    ],
    "margo": [
     "either",
     [
      "anan",
      "meruru"
     ]
    ],
    "anan": [
     "culprit_is",
     [
      "hanna"
     ]
    ],
    "meruru": [
     "self_or",
     [
      "anan"
     ]
    ],
    "hanna": [
     "culprit_is",
     [
      "margo"
     ]
    ]
   },
   "magic_ids": [
    "margo"
   ]
  },
  {
   "id": "daily-27",
   "tier": "normal",
   "incident": "레이아의 거울에 립스틱으로 낙서가 되어 있었다.",
   "verb": "낙서했어",
   "victim": {
    "id": "reia",
    "name": "하스미 레이아",
    "line": "이상한 무대 연출이 되었구나! 이런 짓을 저지를 범인으로부터 나는 모두를 지키겠어!",
    "written": false
   },
   "n": 1,
   "rules": [
    "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "안안",
     "name": "세뇌",
     "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
    }
   ],
   "suspects": [
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "한나는 안 그랬노라."
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "코코 씨가 낙서했사와요!"
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "미리아는 안 그랬음"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "아저씨는 안 그랬어."
    }
   ],
   "answer": "hanna",
   "why_not": {
    "anan": "안안이 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해.",
    "coco": "코코가 범인이라면 말들이 서로 어긋나 버린다 (안안의 세뇌를 누구에게 걸었다고 해도).",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 안안, 한나",
    "한나는 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다.",
    "범인: 한나"
   ],
   "false_cards": [
    "anan",
    "hanna"
   ],
   "worlds": 1,
   "logic": {
    "anan": [
     "deny",
     [
      "hanna"
     ]
    ],
    "hanna": [
     "accuse",
     [
      "coco"
     ]
    ],
    "coco": [
     "deny",
     [
      "miria"
     ]
    ],
    "miria": [
     "deny_self",
     []
    ]
   },
   "magic_ids": [
    "anan"
   ]
  },
  {
   "id": "daily-28",
   "tier": "hard",
   "incident": "노아의 스케치북에 누가 낙서를 했다.",
   "verb": "낙서했어",
   "victim": {
    "id": "noah",
    "name": "죠가사키 노아",
    "line": "노아 스케치북에 누가 그렸어~? 으음~ 근데 이 선, 나쁘지 않은데~",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "마고",
     "name": "흉내내기",
     "text": "마고가 다른 한 사람의 목소리를 흉내 냈을 수도 있다. 그랬다면 그 사람 이름으로 나온 말은 사실 마고의 말이고(맞고 틀림도 마고 몫), 그 사람은 아무 말도 하지 않은 것이다. 흉내니까 말투도, 말 속의 \"나\"도 그 사람 것이다. (안안은 필담이라 흉내 낼 수 없다.)"
    }
   ],
   "suspects": [
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "후후, 한나쨩의 말은 틀렸어."
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "범인은 에마로다."
    },
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "범인은 한나쨩이야!"
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "에마 씨가 낙서했사와요!"
    },
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "나 아니면 마고가 낙서했다!"
    }
   ],
   "answer": "ema",
   "why_not": {
    "margo": "마고가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "hanna": "한나가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "reia": "레이아가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 마고, 에마, 레이아",
    "마고가 누구 흉내를 냈는지(냈는지 아닌지도)는 말만으로는 정해지지 않는다.",
    "범인: 에마"
   ],
   "false_cards": [
    "margo",
    "ema",
    "reia"
   ],
   "worlds": 2,
   "logic": {
    "margo": [
     "meta_false",
     [
      "hanna"
     ]
    ],
    "anan": [
     "culprit_is",
     [
      "ema"
     ]
    ],
    "ema": [
     "culprit_is",
     [
      "hanna"
     ]
    ],
    "hanna": [
     "accuse",
     [
      "ema"
     ]
    ],
    "reia": [
     "self_or",
     [
      "margo"
     ]
    ]
   },
   "magic_ids": [
    "margo"
   ]
  },
  {
   "id": "daily-29",
   "tier": "normal",
   "incident": "셰리가 아끼는 화분이 엎어져 있었다.",
   "verb": "엎었어",
   "victim": {
    "id": "sherry",
    "name": "타치바나 셰리",
    "line": "사건이에요! 이건 명탐정 셰리쨩에게 보내는 도전장이에요!",
    "written": false
   },
   "n": 1,
   "rules": [
    "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "마고",
     "name": "흉내내기",
     "text": "마고가 다른 한 사람의 목소리를 흉내 냈을 수도 있다. 그랬다면 그 사람 이름으로 나온 말은 사실 마고의 말이고(맞고 틀림도 마고 몫), 그 사람은 아무 말도 하지 않은 것이다. 흉내니까 말투도, 말 속의 \"나\"도 그 사람 것이다. (안안은 필담이라 흉내 낼 수 없다.)"
    }
   ],
   "suspects": [
    {
     "id": "nanoka",
     "name": "나노카",
     "full": "쿠로베 나노카",
     "written": false,
     "says": "마고 말은 틀렸어."
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "마, 마고 씨 아니면 레이아 씨가 엎었어요…"
    },
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "히카미 아니면 쿠로베가 엎었어."
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "후후, 나 아니면 아리사쨩이 엎었어."
    },
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "아리사 아니면 나노카가 엎었다!"
    }
   ],
   "answer": "nanoka",
   "why_not": {
    "meruru": "메루루가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "margo": "마고가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "reia": "레이아가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 메루루, 마고",
    "메루루 이름으로 나온 말은 사실 마고의 흉내였다.",
    "범인: 나노카"
   ],
   "false_cards": [
    "meruru",
    "margo"
   ],
   "worlds": 1,
   "logic": {
    "nanoka": [
     "meta_false",
     [
      "margo"
     ]
    ],
    "meruru": [
     "either",
     [
      "margo",
      "reia"
     ]
    ],
    "arisa": [
     "either",
     [
      "meruru",
      "nanoka"
     ]
    ],
    "margo": [
     "self_or",
     [
      "arisa"
     ]
    ],
    "reia": [
     "either",
     [
      "arisa",
      "nanoka"
     ]
    ]
   },
   "magic_ids": [
    "margo"
   ]
  },
  {
   "id": "daily-30",
   "tier": "hard",
   "incident": "레이아의 거울에 립스틱으로 낙서가 되어 있었다.",
   "verb": "낙서했어",
   "victim": {
    "id": "reia",
    "name": "하스미 레이아",
    "line": "이상한 무대 연출이 되었구나! 이런 짓을 저지를 범인으로부터 나는 모두를 지키겠어!",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "안안",
     "name": "세뇌",
     "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
    }
   ],
   "suspects": [
    {
     "id": "sherry",
     "name": "셰리",
     "full": "타치바나 셰리",
     "written": false,
     "says": "안안 씨가 낙서했어요!"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "아저씨는 안 그랬어."
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "메루루 씨 아니면 셰리 씨가 낙서했사와요!"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "메루루의 말은 옳도다."
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "저, 저 아니면 안안 씨가 낙서했어요…"
    },
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "셰리쨩의 말은 틀렸어!"
    }
   ],
   "answer": "sherry",
   "why_not": {
    "miria": "미리아가 범인이라면 거짓말하는 사람이 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "hanna": "한나가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "meruru": "메루루가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "ema": "에마가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 셰리, 안안, 메루루",
    "셰리, 메루루 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "범인: 셰리"
   ],
   "false_cards": [
    "sherry",
    "anan",
    "meruru"
   ],
   "worlds": 2,
   "logic": {
    "sherry": [
     "accuse",
     [
      "anan"
     ]
    ],
    "miria": [
     "deny_self",
     []
    ],
    "hanna": [
     "either",
     [
      "meruru",
      "sherry"
     ]
    ],
    "anan": [
     "meta_true",
     [
      "meruru"
     ]
    ],
    "meruru": [
     "self_or",
     [
      "anan"
     ]
    ],
    "ema": [
     "meta_false",
     [
      "sherry"
     ]
    ]
   },
   "magic_ids": [
    "anan"
   ]
  },
  {
   "id": "daily-31",
   "tier": "normal",
   "incident": "아리사의 성냥갑이 텅 비어 있었다.",
   "verb": "가져갔어",
   "victim": {
    "id": "arisa",
    "name": "시토 아리사",
    "line": "어떤 새끼야, 죽을래?! 내 성냥 건드린 놈, 당장 튀어나와!",
    "written": false
   },
   "n": 1,
   "rules": [
    "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "미리아",
     "name": "뒤바뀜",
     "text": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
    }
   ],
   "suspects": [
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "에, 에마 씨 아니면 노아 씨가 가져갔어요…"
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "에마쨩 아니면 한나쨩이 가져갔어~"
    },
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "미리아쨩과 한나쨩은 영혼이 바뀌어 있어!"
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "나 아니면 미리아 씨가 가져갔사와요!"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "아저씨 아니면 에마쨩이 가져갔어."
    }
   ],
   "answer": "ema",
   "why_not": {
    "meruru": "메루루가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "noah": "노아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "hanna": "한나가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 한나",
    "미리아와 한나는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 한나의 말, 한나 이름의 말은 미리아의 말이었다.",
    "범인: 에마"
   ],
   "false_cards": [
    "hanna"
   ],
   "worlds": 1,
   "logic": {
    "meruru": [
     "either",
     [
      "ema",
      "noah"
     ]
    ],
    "noah": [
     "either",
     [
      "ema",
      "hanna"
     ]
    ],
    "ema": [
     "swap_claim",
     [
      "hanna"
     ]
    ],
    "hanna": [
     "self_or",
     [
      "miria"
     ]
    ],
    "miria": [
     "self_or",
     [
      "ema"
     ]
    ]
   },
   "magic_ids": [
    "miria"
   ]
  },
  {
   "id": "daily-32",
   "tier": "hard",
   "incident": "나노카가 만들어 둔 과자가 감쪽같이 사라졌다.",
   "verb": "먹었어",
   "victim": {
    "id": "nanoka",
    "name": "쿠로베 나노카",
    "line": "...내가 만든 과자를 먹은 사람은 누구지? 어서 나오도록.",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "안안",
     "name": "세뇌",
     "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
    },
    {
     "who": "미리아",
     "name": "뒤바뀜",
     "text": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
    }
   ],
   "suspects": [
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "한, 한나 씨의 말은 맞아요…"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "한나쨩이 먹었어."
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "미리아 씨와 메루루 씨는 영혼이 바뀌어 있사와요!"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "범인은 한나로다."
    },
    {
     "id": "sherry",
     "name": "셰리",
     "full": "타치바나 셰리",
     "written": false,
     "says": "저는 안 먹었어요!"
    }
   ],
   "answer": "sherry",
   "why_not": {
    "meruru": "메루루가 범인이라면 거짓말하는 사람이 1명 또는 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 1명 또는 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "hanna": "한나가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 1명 또는 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 미리아, 안안, 셰리",
    "메루루, 셰리 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "미리아와 메루루는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 메루루의 말, 메루루 이름의 말은 미리아의 말이었다.",
    "범인: 셰리"
   ],
   "false_cards": [
    "miria",
    "anan",
    "sherry"
   ],
   "worlds": 2,
   "logic": {
    "meruru": [
     "meta_true",
     [
      "hanna"
     ]
    ],
    "miria": [
     "accuse",
     [
      "hanna"
     ]
    ],
    "hanna": [
     "swap_claim",
     [
      "meruru"
     ]
    ],
    "anan": [
     "culprit_is",
     [
      "hanna"
     ]
    ],
    "sherry": [
     "deny_self",
     []
    ]
   },
   "magic_ids": [
    "anan",
    "miria"
   ]
  },
  {
   "id": "daily-33",
   "tier": "normal",
   "incident": "셰리가 아끼는 화분이 엎어져 있었다.",
   "verb": "엎었어",
   "victim": {
    "id": "sherry",
    "name": "타치바나 셰리",
    "line": "사건이에요! 이건 명탐정 셰리쨩에게 보내는 도전장이에요!",
    "written": false
   },
   "n": 1,
   "rules": [
    "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "안안",
     "name": "세뇌",
     "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
    }
   ],
   "suspects": [
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "이 몸 아니면 아리사가 엎었노라."
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "나는 안 엎었음 억까 ㄴㄴ"
    },
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "나츠메 새끼가 엎었어."
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "코코쨩의 말은 틀렸어."
    }
   ],
   "answer": "arisa",
   "why_not": {
    "anan": "안안이 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해.",
    "coco": "코코가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 아리사, 미리아",
    "아리사, 미리아 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "범인: 아리사"
   ],
   "false_cards": [
    "arisa",
    "miria"
   ],
   "worlds": 2,
   "logic": {
    "anan": [
     "self_or",
     [
      "arisa"
     ]
    ],
    "coco": [
     "deny_self",
     []
    ],
    "arisa": [
     "accuse",
     [
      "anan"
     ]
    ],
    "miria": [
     "meta_false",
     [
      "coco"
     ]
    ]
   },
   "magic_ids": [
    "anan"
   ]
  },
  {
   "id": "daily-34",
   "tier": "hard",
   "incident": "방송 중이던 코코의 장비 전원을 누군가 꺼 버렸다.",
   "verb": "껐어",
   "victim": {
    "id": "coco",
    "name": "사와타리 코코",
    "line": "여러분 잠깐~ 야 누가 내 방송 껐어? 당장 안 나올래?! 으, 역시 나랑 최애 이외에는 다 죽어버렸으면 좋겠어!",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "안안",
     "name": "세뇌",
     "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
    },
    {
     "who": "미리아",
     "name": "뒤바뀜",
     "text": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
    }
   ],
   "suspects": [
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "오호호, 셰리 씨의 말은 맞사와요!"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "아리사쨩의 말은 맞아."
    },
    {
     "id": "sherry",
     "name": "셰리",
     "full": "타치바나 셰리",
     "written": false,
     "says": "미리아 씨와 아리사 씨는 영혼이 바뀌어 있어요!"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "이 몸 아니면 아리사가 껐노라."
    },
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "단언하지! 안안이 껐다!"
    },
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "토노 새끼가 껐어."
    }
   ],
   "answer": "arisa",
   "why_not": {
    "hanna": "한나가 범인이라면 거짓말하는 사람이 1명 또는 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 3명 또는 5명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "sherry": "셰리가 범인이라면 거짓말하는 사람이 3명 또는 5명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 1명 또는 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "reia": "레이아가 범인이라면 거짓말하는 사람이 3명 또는 5명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 미리아, 레이아, 아리사",
    "미리아, 레이아, 아리사 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "미리아와 아리사는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 아리사의 말, 아리사 이름의 말은 미리아의 말이었다.",
    "범인: 아리사"
   ],
   "false_cards": [
    "miria",
    "reia",
    "arisa"
   ],
   "worlds": 3,
   "logic": {
    "hanna": [
     "meta_true",
     [
      "sherry"
     ]
    ],
    "miria": [
     "meta_true",
     [
      "arisa"
     ]
    ],
    "sherry": [
     "swap_claim",
     [
      "arisa"
     ]
    ],
    "anan": [
     "self_or",
     [
      "arisa"
     ]
    ],
    "reia": [
     "accuse",
     [
      "anan"
     ]
    ],
    "arisa": [
     "accuse",
     [
      "hanna"
     ]
    ]
   },
   "magic_ids": [
    "anan",
    "miria"
   ]
  },
  {
   "id": "daily-35",
   "tier": "normal",
   "incident": "셰리가 아끼는 화분이 엎어져 있었다.",
   "verb": "엎었어",
   "victim": {
    "id": "sherry",
    "name": "타치바나 셰리",
    "line": "사건이에요! 이건 명탐정 셰리쨩에게 보내는 도전장이에요!",
    "written": false
   },
   "n": 1,
   "rules": [
    "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "미리아",
     "name": "뒤바뀜",
     "text": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
    }
   ],
   "suspects": [
    {
     "id": "nanoka",
     "name": "나노카",
     "full": "쿠로베 나노카",
     "written": false,
     "says": "레이아가 엎었어."
    },
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "미리아 아니면 나노카가 엎었다!"
    },
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "나는 미리아쨩과 영혼이 바뀌어 있어!"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "에마쨩 아니면 나노카쨩이 엎었어."
    }
   ],
   "answer": "nanoka",
   "why_not": {
    "reia": "레이아가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "ema": "에마가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 나노카",
    "미리아와 에마는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 에마의 말, 에마 이름의 말은 미리아의 말이었다.",
    "범인: 나노카"
   ],
   "false_cards": [
    "nanoka"
   ],
   "worlds": 1,
   "logic": {
    "nanoka": [
     "accuse",
     [
      "reia"
     ]
    ],
    "reia": [
     "either",
     [
      "miria",
      "nanoka"
     ]
    ],
    "ema": [
     "swap_claim",
     [
      "ema"
     ]
    ],
    "miria": [
     "either",
     [
      "ema",
      "nanoka"
     ]
    ]
   },
   "magic_ids": [
    "miria"
   ]
  },
  {
   "id": "daily-36",
   "tier": "hard",
   "incident": "에마의 일기장이 누군가에게 몰래 펼쳐져 있었다.",
   "verb": "펼쳐 봤어",
   "victim": {
    "id": "ema",
    "name": "사쿠라바 에마",
    "line": "으앗! 내 일기장 펼쳐 본 사람 누구야!? 이, 이상한 건 하나도 안 적었으니까!",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "안안",
     "name": "세뇌",
     "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
    }
   ],
   "suspects": [
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "나 아니면 나츠메가 펼쳐 봤어."
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "아리사가 펼쳐 봤노라."
    },
    {
     "id": "nanoka",
     "name": "나노카",
     "full": "쿠로베 나노카",
     "written": false,
     "says": "안안은 안 봤어."
    },
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "단언하지! 범인은 메루루다!"
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "저, 저 아니면 나노카 씨가 펼쳐 봤어요…"
    }
   ],
   "answer": "nanoka",
   "why_not": {
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "reia": "레이아가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "meruru": "메루루가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 아리사, 안안, 레이아",
    "아리사, 레이아 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "범인: 나노카"
   ],
   "false_cards": [
    "arisa",
    "anan",
    "reia"
   ],
   "worlds": 2,
   "logic": {
    "arisa": [
     "self_or",
     [
      "anan"
     ]
    ],
    "anan": [
     "accuse",
     [
      "arisa"
     ]
    ],
    "nanoka": [
     "deny",
     [
      "anan"
     ]
    ],
    "reia": [
     "culprit_is",
     [
      "meruru"
     ]
    ],
    "meruru": [
     "self_or",
     [
      "nanoka"
     ]
    ]
   },
   "magic_ids": [
    "anan"
   ]
  },
  {
   "id": "daily-37",
   "tier": "normal",
   "incident": "나노카가 만들어 둔 과자가 감쪽같이 사라졌다.",
   "verb": "먹었어",
   "victim": {
    "id": "nanoka",
    "name": "쿠로베 나노카",
    "line": "...내가 만든 과자를 먹은 사람은 누구지? 어서 나오도록.",
    "written": false
   },
   "n": 1,
   "rules": [
    "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "마고",
     "name": "흉내내기",
     "text": "마고가 다른 한 사람의 목소리를 흉내 냈을 수도 있다. 그랬다면 그 사람 이름으로 나온 말은 사실 마고의 말이고(맞고 틀림도 마고 몫), 그 사람은 아무 말도 하지 않은 것이다. 흉내니까 말투도, 말 속의 \"나\"도 그 사람 것이다. (안안은 필담이라 흉내 낼 수 없다.)"
    }
   ],
   "suspects": [
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "사와타리 말은 맞아."
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "나 아니면 안안이 먹었음"
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "아리사쨩 아니면 셰리쨩이 먹었어."
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "코코는 안 먹었노라."
    },
    {
     "id": "sherry",
     "name": "셰리",
     "full": "타치바나 셰리",
     "written": false,
     "says": "저 아니면 코코 씨가 먹었어요!"
    }
   ],
   "answer": "anan",
   "why_not": {
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "coco": "코코가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "margo": "마고가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "sherry": "셰리가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 마고, 셰리",
    "셰리 이름으로 나온 말은 사실 마고의 흉내였다.",
    "범인: 안안"
   ],
   "false_cards": [
    "margo",
    "sherry"
   ],
   "worlds": 1,
   "logic": {
    "arisa": [
     "meta_true",
     [
      "coco"
     ]
    ],
    "coco": [
     "self_or",
     [
      "anan"
     ]
    ],
    "margo": [
     "either",
     [
      "arisa",
      "sherry"
     ]
    ],
    "anan": [
     "deny",
     [
      "coco"
     ]
    ],
    "sherry": [
     "self_or",
     [
      "coco"
     ]
    ]
   },
   "magic_ids": [
    "margo"
   ]
  },
  {
   "id": "daily-38",
   "tier": "hard",
   "incident": "미리아의 머리핀이 짝짝이로 바뀌어 있었다.",
   "verb": "바꿔 놨어",
   "victim": {
    "id": "miria",
    "name": "사에키 미리아",
    "line": "으왓! 아저씨 머리핀이 짝짝이가 됐어! 어쩌지...",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "마고",
     "name": "흉내내기",
     "text": "마고가 다른 한 사람의 목소리를 흉내 냈을 수도 있다. 그랬다면 그 사람 이름으로 나온 말은 사실 마고의 말이고(맞고 틀림도 마고 몫), 그 사람은 아무 말도 하지 않은 것이다. 흉내니까 말투도, 말 속의 \"나\"도 그 사람 것이다. (안안은 필담이라 흉내 낼 수 없다.)"
    }
   ],
   "suspects": [
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "범인은 에마로다."
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "안안 씨 아니면 메루루 씨가 바꿔 놨사와요!"
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "안, 안안 씨가 바꿔 놨어요…"
    },
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "나는 안 바꿨어!"
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "안안쨩 아니면 한나쨩이 바꿔 놨어."
    }
   ],
   "answer": "meruru",
   "why_not": {
    "anan": "안안이 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "hanna": "한나가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "ema": "에마가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "margo": "마고가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 안안, 메루루, 마고",
    "메루루 이름으로 나온 말은 사실 마고의 흉내였다.",
    "범인: 메루루"
   ],
   "false_cards": [
    "anan",
    "meruru",
    "margo"
   ],
   "worlds": 1,
   "logic": {
    "anan": [
     "culprit_is",
     [
      "ema"
     ]
    ],
    "hanna": [
     "either",
     [
      "anan",
      "meruru"
     ]
    ],
    "meruru": [
     "accuse",
     [
      "anan"
     ]
    ],
    "ema": [
     "deny_self",
     []
    ],
    "margo": [
     "either",
     [
      "anan",
      "hanna"
     ]
    ]
   },
   "magic_ids": [
    "margo"
   ]
  },
  {
   "id": "daily-39",
   "tier": "normal",
   "incident": "에마의 일기장이 누군가에게 몰래 펼쳐져 있었다.",
   "verb": "펼쳐 봤어",
   "victim": {
    "id": "ema",
    "name": "사쿠라바 에마",
    "line": "으앗! 내 일기장 펼쳐 본 사람 누구야!? 이, 이상한 건 하나도 안 적었으니까!",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "안안",
     "name": "세뇌",
     "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
    }
   ],
   "suspects": [
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "아저씨는 안 봤어."
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "나 아니면 노아가 펼쳐 봤음"
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "코코쨩 아니면 미리아쨩이 펼쳐 봤어~"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "미리아의 말은 그릇되었도다."
    }
   ],
   "answer": "anan",
   "why_not": {
    "miria": "미리아가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "coco": "코코가 범인이라면 말들이 서로 어긋나 버린다 (안안의 세뇌를 누구에게 걸었다고 해도).",
    "noah": "노아가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 코코, 노아, 안안",
    "코코, 노아 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "범인: 안안"
   ],
   "false_cards": [
    "coco",
    "noah",
    "anan"
   ],
   "worlds": 2,
   "logic": {
    "miria": [
     "deny_self",
     []
    ],
    "coco": [
     "self_or",
     [
      "noah"
     ]
    ],
    "noah": [
     "either",
     [
      "coco",
      "miria"
     ]
    ],
    "anan": [
     "meta_false",
     [
      "miria"
     ]
    ]
   },
   "magic_ids": [
    "anan"
   ]
  },
  {
   "id": "daily-40",
   "tier": "hard",
   "incident": "메루루의 반창고 상자가 텅 비어 있었다.",
   "verb": "다 썼어",
   "victim": {
    "id": "meruru",
    "name": "히카미 메루루",
    "line": "흑흑... 반창고가 다 떨어졌어요. 누가 다치면 어떡하죠?",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "미리아",
     "name": "뒤바뀜",
     "text": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
    }
   ],
   "suspects": [
    {
     "id": "sherry",
     "name": "셰리",
     "full": "타치바나 셰리",
     "written": false,
     "says": "안안 씨가 다 썼어요!"
    },
    {
     "id": "nanoka",
     "name": "나노카",
     "full": "쿠로베 나노카",
     "written": false,
     "says": "미리아 말은 맞아."
    },
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "쿠로베 말은 맞아."
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "셰리가 다 썼노라."
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "범인은 레이아쨩이야."
    },
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "미리아와 나노카는 영혼이 바뀌어 있다!"
    }
   ],
   "answer": "reia",
   "why_not": {
    "sherry": "셰리가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "nanoka": "나노카가 범인이라면 거짓말하는 사람이 5명 또는 6명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 5명 또는 6명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 5명 또는 6명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 셰리, 안안",
    "미리아와 나노카는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 나노카의 말, 나노카 이름의 말은 미리아의 말이었다.",
    "범인: 레이아"
   ],
   "false_cards": [
    "sherry",
    "anan"
   ],
   "worlds": 1,
   "logic": {
    "sherry": [
     "accuse",
     [
      "anan"
     ]
    ],
    "nanoka": [
     "meta_true",
     [
      "miria"
     ]
    ],
    "arisa": [
     "meta_true",
     [
      "nanoka"
     ]
    ],
    "anan": [
     "accuse",
     [
      "sherry"
     ]
    ],
    "miria": [
     "culprit_is",
     [
      "reia"
     ]
    ],
    "reia": [
     "swap_claim",
     [
      "nanoka"
     ]
    ]
   },
   "magic_ids": [
    "miria"
   ]
  },
  {
   "id": "daily-41",
   "tier": "normal",
   "incident": "셰리가 아끼는 화분이 엎어져 있었다.",
   "verb": "엎었어",
   "victim": {
    "id": "sherry",
    "name": "타치바나 셰리",
    "line": "사건이에요! 이건 명탐정 셰리쨩에게 보내는 도전장이에요!",
    "written": false
   },
   "n": 1,
   "rules": [
    "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "미리아",
     "name": "뒤바뀜",
     "text": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
    }
   ],
   "suspects": [
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "단언하지! 범인은 나노카다!"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "메루루쨩 아니면 노아쨩이 엎었어."
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "노아는 안 엎었어~"
    },
    {
     "id": "nanoka",
     "name": "나노카",
     "full": "쿠로베 나노카",
     "written": false,
     "says": "레이아 말은 틀렸어."
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "미, 미리아 씨와 노아 씨는 영혼이 바뀌어 있어요…"
    }
   ],
   "answer": "meruru",
   "why_not": {
    "reia": "레이아가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "noah": "노아가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "nanoka": "나노카가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 레이아",
    "미리아와 노아는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 노아의 말, 노아 이름의 말은 미리아의 말이었다.",
    "범인: 메루루"
   ],
   "false_cards": [
    "reia"
   ],
   "worlds": 1,
   "logic": {
    "reia": [
     "culprit_is",
     [
      "nanoka"
     ]
    ],
    "miria": [
     "either",
     [
      "meruru",
      "noah"
     ]
    ],
    "noah": [
     "deny_self",
     []
    ],
    "nanoka": [
     "meta_false",
     [
      "reia"
     ]
    ],
    "meruru": [
     "swap_claim",
     [
      "noah"
     ]
    ]
   },
   "magic_ids": [
    "miria"
   ]
  },
  {
   "id": "daily-42",
   "tier": "hard",
   "incident": "메루루의 반창고 상자가 텅 비어 있었다.",
   "verb": "다 썼어",
   "victim": {
    "id": "meruru",
    "name": "히카미 메루루",
    "line": "흑흑... 반창고가 다 떨어졌어요. 누가 다치면 어떡하죠?",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "안안",
     "name": "세뇌",
     "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
    },
    {
     "who": "미리아",
     "name": "뒤바뀜",
     "text": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
    }
   ],
   "suspects": [
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "마고쨩이 다 썼어~"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "아저씨는 노아쨩과 영혼이 바뀌어 있어."
    },
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "나츠메 말은 맞아."
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "노아의 말은 옳도다."
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "후후, 나 아니면 안안쨩이 다 썼어."
    }
   ],
   "answer": "anan",
   "why_not": {
    "noah": "노아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "margo": "마고가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 노아, 아리사, 안안",
    "미리아, 아리사 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "미리아와 노아는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 노아의 말, 노아 이름의 말은 미리아의 말이었다.",
    "범인: 안안"
   ],
   "false_cards": [
    "noah",
    "arisa",
    "anan"
   ],
   "worlds": 2,
   "logic": {
    "noah": [
     "accuse",
     [
      "margo"
     ]
    ],
    "miria": [
     "swap_claim",
     [
      "noah"
     ]
    ],
    "arisa": [
     "meta_true",
     [
      "anan"
     ]
    ],
    "anan": [
     "meta_true",
     [
      "noah"
     ]
    ],
    "margo": [
     "self_or",
     [
      "anan"
     ]
    ]
   },
   "magic_ids": [
    "anan",
    "miria"
   ]
  },
  {
   "id": "daily-43",
   "tier": "normal",
   "incident": "마고가 정리해 둔 도서실 책이 전부 거꾸로 꽂혀 있었다.",
   "verb": "거꾸로 꽂았어",
   "victim": {
    "id": "margo",
    "name": "호쇼 마고",
    "line": "어머, 내가 정리해 둔 책이 전부 거꾸로네. 후후, 이런 장난을 친 아이는 나중에 천천히 혼내 줘야겠어♡",
    "written": false
   },
   "n": 1,
   "rules": [
    "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "미리아",
     "name": "뒤바뀜",
     "text": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
    }
   ],
   "suspects": [
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "아저씨는 안 그랬어."
    },
    {
     "id": "sherry",
     "name": "셰리",
     "full": "타치바나 셰리",
     "written": false,
     "says": "명탐정의 추리로는, 범인은 안안 씨예요!"
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "저, 저는 미리아 씨와 영혼이 바뀌어 있어요…"
    },
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "셰리쨩의 말은 맞아!"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "메루루가 거꾸로 꽂았노라."
    }
   ],
   "answer": "anan",
   "why_not": {
    "miria": "미리아가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "sherry": "셰리가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "meruru": "메루루가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "ema": "에마가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 안안",
    "미리아와 메루루는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 메루루의 말, 메루루 이름의 말은 미리아의 말이었다.",
    "범인: 안안"
   ],
   "false_cards": [
    "anan"
   ],
   "worlds": 1,
   "logic": {
    "miria": [
     "deny_self",
     []
    ],
    "sherry": [
     "culprit_is",
     [
      "anan"
     ]
    ],
    "meruru": [
     "swap_claim",
     [
      "meruru"
     ]
    ],
    "ema": [
     "meta_true",
     [
      "sherry"
     ]
    ],
    "anan": [
     "accuse",
     [
      "meruru"
     ]
    ]
   },
   "magic_ids": [
    "miria"
   ]
  },
  {
   "id": "daily-44",
   "tier": "hard",
   "incident": "레이아의 거울에 립스틱으로 낙서가 되어 있었다.",
   "verb": "낙서했어",
   "victim": {
    "id": "reia",
    "name": "하스미 레이아",
    "line": "이상한 무대 연출이 되었구나! 이런 짓을 저지를 범인으로부터 나는 모두를 지키겠어!",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "안안",
     "name": "세뇌",
     "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
    },
    {
     "who": "마고",
     "name": "흉내내기",
     "text": "마고가 다른 한 사람의 목소리를 흉내 냈을 수도 있다. 그랬다면 그 사람 이름으로 나온 말은 사실 마고의 말이고(맞고 틀림도 마고 몫), 그 사람은 아무 말도 하지 않은 것이다. 흉내니까 말투도, 말 속의 \"나\"도 그 사람 것이다. (안안은 필담이라 흉내 낼 수 없다.)"
    }
   ],
   "suspects": [
    {
     "id": "sherry",
     "name": "셰리",
     "full": "타치바나 셰리",
     "written": false,
     "says": "명탐정의 추리로는, 범인은 안안 씨예요!"
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "에마쨩의 말은 틀렸어~"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "마고의 말은 옳도다."
    },
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "나 아니면 마고쨩이 낙서했어!"
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "후후, 나는 안 그랬어."
    }
   ],
   "answer": "margo",
   "why_not": {
    "sherry": "셰리가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "noah": "노아가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "ema": "에마가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 셰리, 노아, 안안, 마고",
    "셰리, 노아, 마고 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "마고가 누구 흉내를 냈는지(냈는지 아닌지도)는 말만으로는 정해지지 않는다.",
    "범인: 마고"
   ],
   "false_cards": [
    "sherry",
    "noah",
    "anan",
    "margo"
   ],
   "worlds": 4,
   "logic": {
    "sherry": [
     "culprit_is",
     [
      "anan"
     ]
    ],
    "noah": [
     "meta_false",
     [
      "ema"
     ]
    ],
    "anan": [
     "meta_true",
     [
      "margo"
     ]
    ],
    "ema": [
     "self_or",
     [
      "margo"
     ]
    ],
    "margo": [
     "deny_self",
     []
    ]
   },
   "magic_ids": [
    "anan",
    "margo"
   ]
  },
  {
   "id": "daily-45",
   "tier": "normal",
   "incident": "마고가 정리해 둔 도서실 책이 전부 거꾸로 꽂혀 있었다.",
   "verb": "거꾸로 꽂았어",
   "victim": {
    "id": "margo",
    "name": "호쇼 마고",
    "line": "어머, 내가 정리해 둔 책이 전부 거꾸로네. 후후, 이런 장난을 친 아이는 나중에 천천히 혼내 줘야겠어♡",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "안안",
     "name": "세뇌",
     "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
    }
   ],
   "suspects": [
    {
     "id": "sherry",
     "name": "셰리",
     "full": "타치바나 셰리",
     "written": false,
     "says": "명탐정의 추리로는, 범인은 안안 씨예요!"
    },
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "사쿠라바 말은 맞아."
    },
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "나는 안 그랬어!"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "셰리는 안 그랬노라."
    }
   ],
   "answer": "ema",
   "why_not": {
    "sherry": "셰리가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 말들이 서로 어긋나 버린다 (안안의 세뇌를 누구에게 걸었다고 해도)."
   },
   "solution": [
    "틀린 말을 한 카드: 셰리, 아리사, 에마",
    "셰리, 아리사, 에마 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "범인: 에마"
   ],
   "false_cards": [
    "sherry",
    "arisa",
    "ema"
   ],
   "worlds": 3,
   "logic": {
    "sherry": [
     "culprit_is",
     [
      "anan"
     ]
    ],
    "arisa": [
     "meta_true",
     [
      "ema"
     ]
    ],
    "ema": [
     "deny_self",
     []
    ],
    "anan": [
     "deny",
     [
      "sherry"
     ]
    ]
   },
   "magic_ids": [
    "anan"
   ]
  },
  {
   "id": "daily-46",
   "tier": "hard",
   "incident": "노아의 스케치북에 누가 낙서를 했다.",
   "verb": "낙서했어",
   "victim": {
    "id": "noah",
    "name": "죠가사키 노아",
    "line": "노아 스케치북에 누가 그렸어~? 으음~ 근데 이 선, 나쁘지 않은데~",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "안안",
     "name": "세뇌",
     "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
    },
    {
     "who": "마고",
     "name": "흉내내기",
     "text": "마고가 다른 한 사람의 목소리를 흉내 냈을 수도 있다. 그랬다면 그 사람 이름으로 나온 말은 사실 마고의 말이고(맞고 틀림도 마고 몫), 그 사람은 아무 말도 하지 않은 것이다. 흉내니까 말투도, 말 속의 \"나\"도 그 사람 것이다. (안안은 필담이라 흉내 낼 수 없다.)"
    }
   ],
   "suspects": [
    {
     "id": "nanoka",
     "name": "나노카",
     "full": "쿠로베 나노카",
     "written": false,
     "says": "에마 말은 맞아."
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "마고의 말은 그릇되었도다."
    },
    {
     "id": "sherry",
     "name": "셰리",
     "full": "타치바나 셰리",
     "written": false,
     "says": "코코 씨가 낙서했어요!"
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "마고 아니면 나노카가 낙서했음 ㅇㅇ"
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "범인은 셰리쨩이야♡"
    },
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "코코쨩 아니면 마고쨩이 낙서했어!"
    }
   ],
   "answer": "nanoka",
   "why_not": {
    "anan": "안안이 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "sherry": "셰리가 범인이라면 거짓말하는 사람이 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "coco": "코코가 범인이라면 거짓말하는 사람이 0명 또는 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "margo": "마고가 범인이라면 거짓말하는 사람이 0명 또는 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "ema": "에마가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 나노카, 셰리, 마고, 에마",
    "나노카, 셰리, 마고, 에마 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "마고가 누구 흉내를 냈는지(냈는지 아닌지도)는 말만으로는 정해지지 않는다.",
    "범인: 나노카"
   ],
   "false_cards": [
    "nanoka",
    "sherry",
    "margo",
    "ema"
   ],
   "worlds": 9,
   "logic": {
    "nanoka": [
     "meta_true",
     [
      "ema"
     ]
    ],
    "anan": [
     "meta_false",
     [
      "margo"
     ]
    ],
    "sherry": [
     "accuse",
     [
      "coco"
     ]
    ],
    "coco": [
     "either",
     [
      "margo",
      "nanoka"
     ]
    ],
    "margo": [
     "culprit_is",
     [
      "sherry"
     ]
    ],
    "ema": [
     "either",
     [
      "coco",
      "margo"
     ]
    ]
   },
   "magic_ids": [
    "anan",
    "margo"
   ]
  },
  {
   "id": "daily-47",
   "tier": "normal",
   "incident": "셰리가 아끼는 화분이 엎어져 있었다.",
   "verb": "엎었어",
   "victim": {
    "id": "sherry",
    "name": "타치바나 셰리",
    "line": "사건이에요! 이건 명탐정 셰리쨩에게 보내는 도전장이에요!",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "마고",
     "name": "흉내내기",
     "text": "마고가 다른 한 사람의 목소리를 흉내 냈을 수도 있다. 그랬다면 그 사람 이름으로 나온 말은 사실 마고의 말이고(맞고 틀림도 마고 몫), 그 사람은 아무 말도 하지 않은 것이다. 흉내니까 말투도, 말 속의 \"나\"도 그 사람 것이다. (안안은 필담이라 흉내 낼 수 없다.)"
    }
   ],
   "suspects": [
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "코코쨩 아니면 마고쨩이 엎었어!"
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "범인은 마고임 빼박"
    },
    {
     "id": "nanoka",
     "name": "나노카",
     "full": "쿠로베 나노카",
     "written": false,
     "says": "에마 말은 맞아."
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "나 아니면 마고 씨가 엎었사와요!"
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "후후, 나 아니면 에마쨩이 엎었어."
    }
   ],
   "answer": "coco",
   "why_not": {
    "ema": "에마가 범인이라면 거짓말하는 사람이 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "nanoka": "나노카가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "hanna": "한나가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "margo": "마고가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 코코, 한나, 마고",
    "마고가 누구 흉내를 냈는지(냈는지 아닌지도)는 말만으로는 정해지지 않는다.",
    "범인: 코코"
   ],
   "false_cards": [
    "coco",
    "hanna",
    "margo"
   ],
   "worlds": 2,
   "logic": {
    "ema": [
     "either",
     [
      "coco",
      "margo"
     ]
    ],
    "coco": [
     "culprit_is",
     [
      "margo"
     ]
    ],
    "nanoka": [
     "meta_true",
     [
      "ema"
     ]
    ],
    "hanna": [
     "self_or",
     [
      "margo"
     ]
    ],
    "margo": [
     "self_or",
     [
      "ema"
     ]
    ]
   },
   "magic_ids": [
    "margo"
   ]
  },
  {
   "id": "daily-48",
   "tier": "hard",
   "incident": "노아의 스케치북에 누가 낙서를 했다.",
   "verb": "낙서했어",
   "victim": {
    "id": "noah",
    "name": "죠가사키 노아",
    "line": "노아 스케치북에 누가 그렸어~? 으음~ 근데 이 선, 나쁘지 않은데~",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "안안",
     "name": "세뇌",
     "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
    },
    {
     "who": "미리아",
     "name": "뒤바뀜",
     "text": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
    }
   ],
   "suspects": [
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "토노 말은 맞아."
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "범인은 미리아 씨이와요!"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "안안쨩의 말은 맞아."
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "나는 낙서 안 했음 억까 ㄴㄴ"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "미리아와 아리사는 영혼이 바뀌어 있노라."
    }
   ],
   "answer": "coco",
   "why_not": {
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 1명 또는 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "hanna": "한나가 범인이라면 거짓말하는 사람이 1명 또는 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 1명 또는 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 아리사, 한나, 코코",
    "한나, 미리아, 코코 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "미리아와 아리사는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 아리사의 말, 아리사 이름의 말은 미리아의 말이었다.",
    "범인: 코코"
   ],
   "false_cards": [
    "arisa",
    "hanna",
    "coco"
   ],
   "worlds": 3,
   "logic": {
    "arisa": [
     "meta_true",
     [
      "hanna"
     ]
    ],
    "hanna": [
     "culprit_is",
     [
      "miria"
     ]
    ],
    "miria": [
     "meta_true",
     [
      "anan"
     ]
    ],
    "coco": [
     "deny_self",
     []
    ],
    "anan": [
     "swap_claim",
     [
      "arisa"
     ]
    ]
   },
   "magic_ids": [
    "anan",
    "miria"
   ]
  },
  {
   "id": "daily-49",
   "tier": "normal",
   "incident": "아리사의 성냥갑이 텅 비어 있었다.",
   "verb": "가져갔어",
   "victim": {
    "id": "arisa",
    "name": "시토 아리사",
    "line": "어떤 새끼야, 죽을래?! 내 성냥 건드린 놈, 당장 튀어나와!",
    "written": false
   },
   "n": 1,
   "rules": [
    "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "안안",
     "name": "세뇌",
     "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
    }
   ],
   "suspects": [
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "코코쨩의 말은 맞아~"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "범인은 노아로다."
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "한나 아니면 노아가 가져갔음 ㅇㅇ"
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "나는 안 가져갔사와요!"
    }
   ],
   "answer": "hanna",
   "why_not": {
    "noah": "노아가 범인이라면 말들이 서로 어긋나 버린다 (안안의 세뇌를 누구에게 걸었다고 해도).",
    "anan": "안안이 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해.",
    "coco": "코코가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 안안, 한나",
    "한나는 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다.",
    "범인: 한나"
   ],
   "false_cards": [
    "anan",
    "hanna"
   ],
   "worlds": 1,
   "logic": {
    "noah": [
     "meta_true",
     [
      "coco"
     ]
    ],
    "anan": [
     "culprit_is",
     [
      "noah"
     ]
    ],
    "coco": [
     "either",
     [
      "hanna",
      "noah"
     ]
    ],
    "hanna": [
     "deny_self",
     []
    ]
   },
   "magic_ids": [
    "anan"
   ]
  },
  {
   "id": "daily-50",
   "tier": "hard",
   "incident": "방송 중이던 코코의 장비 전원을 누군가 꺼 버렸다.",
   "verb": "껐어",
   "victim": {
    "id": "coco",
    "name": "사와타리 코코",
    "line": "여러분 잠깐~ 야 누가 내 방송 껐어? 당장 안 나올래?! 으, 역시 나랑 최애 이외에는 다 죽어버렸으면 좋겠어!",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "안안",
     "name": "세뇌",
     "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
    },
    {
     "who": "미리아",
     "name": "뒤바뀜",
     "text": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
    }
   ],
   "suspects": [
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "안안쨩 아니면 아리사쨩이 껐어~"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "이 몸은 안 껐노라."
    },
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "사에키는 안 껐어."
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "아리사쨩의 말은 맞아."
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "나는 미리아쨩과 영혼이 바뀌어 있어."
    }
   ],
   "answer": "miria",
   "why_not": {
    "noah": "노아가 범인이라면 거짓말하는 사람이 0명 또는 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "margo": "마고가 범인이라면 거짓말하는 사람이 0명 또는 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 노아, 아리사, 미리아",
    "노아, 아리사, 마고 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "미리아와 마고는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 마고의 말, 마고 이름의 말은 미리아의 말이었다.",
    "범인: 미리아"
   ],
   "false_cards": [
    "noah",
    "arisa",
    "miria"
   ],
   "worlds": 3,
   "logic": {
    "noah": [
     "either",
     [
      "anan",
      "arisa"
     ]
    ],
    "anan": [
     "deny_self",
     []
    ],
    "arisa": [
     "deny",
     [
      "miria"
     ]
    ],
    "miria": [
     "meta_true",
     [
      "arisa"
     ]
    ],
    "margo": [
     "swap_claim",
     [
      "margo"
     ]
    ]
   },
   "magic_ids": [
    "anan",
    "miria"
   ]
  },
  {
   "id": "daily-51",
   "tier": "normal",
   "incident": "방송 중이던 코코의 장비 전원을 누군가 꺼 버렸다.",
   "verb": "껐어",
   "victim": {
    "id": "coco",
    "name": "사와타리 코코",
    "line": "여러분 잠깐~ 야 누가 내 방송 껐어? 당장 안 나올래?! 으, 역시 나랑 최애 이외에는 다 죽어버렸으면 좋겠어!",
    "written": false
   },
   "n": 1,
   "rules": [
    "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "미리아",
     "name": "뒤바뀜",
     "text": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
    }
   ],
   "suspects": [
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "미리아와 노아는 영혼이 바뀌어 있노라."
    },
    {
     "id": "sherry",
     "name": "셰리",
     "full": "타치바나 셰리",
     "written": false,
     "says": "미리아 씨의 말은 맞아요!"
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "노아는 안 껐어~"
    },
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "단언하지! 범인은 미리아다!"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "범인은 셰리쨩이야."
    }
   ],
   "answer": "sherry",
   "why_not": {
    "anan": "안안이 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "noah": "노아가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "reia": "레이아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 레이아",
    "미리아와 노아는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 노아의 말, 노아 이름의 말은 미리아의 말이었다.",
    "범인: 셰리"
   ],
   "false_cards": [
    "reia"
   ],
   "worlds": 1,
   "logic": {
    "anan": [
     "swap_claim",
     [
      "noah"
     ]
    ],
    "sherry": [
     "meta_true",
     [
      "miria"
     ]
    ],
    "noah": [
     "deny_self",
     []
    ],
    "reia": [
     "culprit_is",
     [
      "miria"
     ]
    ],
    "miria": [
     "culprit_is",
     [
      "sherry"
     ]
    ]
   },
   "magic_ids": [
    "miria"
   ]
  },
  {
   "id": "daily-52",
   "tier": "hard",
   "incident": "에마의 일기장이 누군가에게 몰래 펼쳐져 있었다.",
   "verb": "펼쳐 봤어",
   "victim": {
    "id": "ema",
    "name": "사쿠라바 에마",
    "line": "으앗! 내 일기장 펼쳐 본 사람 누구야!? 이, 이상한 건 하나도 안 적었으니까!",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "안안",
     "name": "세뇌",
     "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
    },
    {
     "who": "마고",
     "name": "흉내내기",
     "text": "마고가 다른 한 사람의 목소리를 흉내 냈을 수도 있다. 그랬다면 그 사람 이름으로 나온 말은 사실 마고의 말이고(맞고 틀림도 마고 몫), 그 사람은 아무 말도 하지 않은 것이다. 흉내니까 말투도, 말 속의 \"나\"도 그 사람 것이다. (안안은 필담이라 흉내 낼 수 없다.)"
    }
   ],
   "suspects": [
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "미리아 아니면 레이아가 펼쳐 봤음 ㅇㅇ"
    },
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "아리사 아니면 미리아가 펼쳐 봤다!"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "마고가 펼쳐 봤노라."
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "후후, 나는 안 봤어."
    },
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "나츠메 아니면 사에키가 펼쳐 봤어."
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "마고쨩의 말은 틀렸어."
    }
   ],
   "answer": "margo",
   "why_not": {
    "coco": "코코가 범인이라면 거짓말하는 사람이 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "reia": "레이아가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 코코, 레이아, 마고, 아리사",
    "코코, 레이아, 마고, 아리사 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "마고가 누구 흉내를 냈는지(냈는지 아닌지도)는 말만으로는 정해지지 않는다.",
    "범인: 마고"
   ],
   "false_cards": [
    "coco",
    "reia",
    "margo",
    "arisa"
   ],
   "worlds": 9,
   "logic": {
    "coco": [
     "either",
     [
      "miria",
      "reia"
     ]
    ],
    "reia": [
     "either",
     [
      "arisa",
      "miria"
     ]
    ],
    "anan": [
     "accuse",
     [
      "margo"
     ]
    ],
    "margo": [
     "deny_self",
     []
    ],
    "arisa": [
     "either",
     [
      "anan",
      "miria"
     ]
    ],
    "miria": [
     "meta_false",
     [
      "margo"
     ]
    ]
   },
   "magic_ids": [
    "anan",
    "margo"
   ]
  },
  {
   "id": "daily-53",
   "tier": "normal",
   "incident": "메루루의 반창고 상자가 텅 비어 있었다.",
   "verb": "다 썼어",
   "victim": {
    "id": "meruru",
    "name": "히카미 메루루",
    "line": "흑흑... 반창고가 다 떨어졌어요. 누가 다치면 어떡하죠?",
    "written": false
   },
   "n": 1,
   "rules": [
    "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "안안",
     "name": "세뇌",
     "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
    }
   ],
   "suspects": [
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "아아, 코코의 말은 맞다!"
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "레이아는 안 썼음"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "이 몸은 안 썼노라."
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "범인은 코코 씨이와요!"
    }
   ],
   "answer": "anan",
   "why_not": {
    "reia": "레이아가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해.",
    "coco": "코코가 범인이라면 말들이 서로 어긋나 버린다 (안안의 세뇌를 누구에게 걸었다고 해도).",
    "hanna": "한나가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 안안, 한나",
    "한나는 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다.",
    "범인: 안안"
   ],
   "false_cards": [
    "anan",
    "hanna"
   ],
   "worlds": 1,
   "logic": {
    "reia": [
     "meta_true",
     [
      "coco"
     ]
    ],
    "coco": [
     "deny",
     [
      "reia"
     ]
    ],
    "anan": [
     "deny_self",
     []
    ],
    "hanna": [
     "culprit_is",
     [
      "coco"
     ]
    ]
   },
   "magic_ids": [
    "anan"
   ]
  },
  {
   "id": "daily-54",
   "tier": "hard",
   "incident": "나노카가 만들어 둔 과자가 감쪽같이 사라졌다.",
   "verb": "먹었어",
   "victim": {
    "id": "nanoka",
    "name": "쿠로베 나노카",
    "line": "...내가 만든 과자를 먹은 사람은 누구지? 어서 나오도록.",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "안안",
     "name": "세뇌",
     "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
    }
   ],
   "suspects": [
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "안안 아니면 노아가 먹었다!"
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "레이아쨩의 말은 맞아~"
    },
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "하스미 새끼가 먹었어."
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "레, 레이아 씨의 말은 틀렸어요… 죄, 죄송해요…"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "아리사는 안 먹었노라."
    }
   ],
   "answer": "meruru",
   "why_not": {
    "reia": "레이아가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "noah": "노아가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 레이아, 노아, 아리사",
    "레이아, 노아, 아리사 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "범인: 메루루"
   ],
   "false_cards": [
    "reia",
    "noah",
    "arisa"
   ],
   "worlds": 3,
   "logic": {
    "reia": [
     "either",
     [
      "anan",
      "noah"
     ]
    ],
    "noah": [
     "meta_true",
     [
      "reia"
     ]
    ],
    "arisa": [
     "accuse",
     [
      "reia"
     ]
    ],
    "meruru": [
     "meta_false",
     [
      "reia"
     ]
    ],
    "anan": [
     "deny",
     [
      "arisa"
     ]
    ]
   },
   "magic_ids": [
    "anan"
   ]
  },
  {
   "id": "daily-55",
   "tier": "normal",
   "incident": "에마의 일기장이 누군가에게 몰래 펼쳐져 있었다.",
   "verb": "펼쳐 봤어",
   "victim": {
    "id": "ema",
    "name": "사쿠라바 에마",
    "line": "으앗! 내 일기장 펼쳐 본 사람 누구야!? 이, 이상한 건 하나도 안 적었으니까!",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "안안",
     "name": "세뇌",
     "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
    }
   ],
   "suspects": [
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "아아, 안안의 말은 맞다!"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "나노카는 안 봤노라."
    },
    {
     "id": "sherry",
     "name": "셰리",
     "full": "타치바나 셰리",
     "written": false,
     "says": "나노카 씨 아니면 레이아 씨가 펼쳐 봤어요!"
    },
    {
     "id": "nanoka",
     "name": "나노카",
     "full": "쿠로베 나노카",
     "written": false,
     "says": "난 안 봤어."
    }
   ],
   "answer": "nanoka",
   "why_not": {
    "reia": "레이아가 범인이라면 말들이 서로 어긋나 버린다 (안안의 세뇌를 누구에게 걸었다고 해도).",
    "anan": "안안이 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "sherry": "셰리가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 레이아, 안안, 나노카",
    "레이아, 나노카 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "범인: 나노카"
   ],
   "false_cards": [
    "reia",
    "anan",
    "nanoka"
   ],
   "worlds": 2,
   "logic": {
    "reia": [
     "meta_true",
     [
      "anan"
     ]
    ],
    "anan": [
     "deny",
     [
      "nanoka"
     ]
    ],
    "sherry": [
     "either",
     [
      "nanoka",
      "reia"
     ]
    ],
    "nanoka": [
     "deny_self",
     []
    ]
   },
   "magic_ids": [
    "anan"
   ]
  },
  {
   "id": "daily-56",
   "tier": "hard",
   "incident": "아리사의 성냥갑이 텅 비어 있었다.",
   "verb": "가져갔어",
   "victim": {
    "id": "arisa",
    "name": "시토 아리사",
    "line": "어떤 새끼야, 죽을래?! 내 성냥 건드린 놈, 당장 튀어나와!",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "안안",
     "name": "세뇌",
     "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
    }
   ],
   "suspects": [
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "한나 말은 틀렸음 ㅋㅋ"
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "노아 씨는 안 가져갔사와요!"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "범인은 노아로다."
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "메루루쨩의 말은 맞아~"
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "안, 안안 씨는 안 가져갔어요…"
    },
    {
     "id": "nanoka",
     "name": "나노카",
     "full": "쿠로베 나노카",
     "written": false,
     "says": "난 안 가져갔어."
    }
   ],
   "answer": "nanoka",
   "why_not": {
    "coco": "코코가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "hanna": "한나가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "noah": "노아가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "meruru": "메루루가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 코코, 안안, 나노카",
    "코코, 나노카 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "범인: 나노카"
   ],
   "false_cards": [
    "coco",
    "anan",
    "nanoka"
   ],
   "worlds": 2,
   "logic": {
    "coco": [
     "meta_false",
     [
      "hanna"
     ]
    ],
    "hanna": [
     "deny",
     [
      "noah"
     ]
    ],
    "anan": [
     "culprit_is",
     [
      "noah"
     ]
    ],
    "noah": [
     "meta_true",
     [
      "meruru"
     ]
    ],
    "meruru": [
     "deny",
     [
      "anan"
     ]
    ],
    "nanoka": [
     "deny_self",
     []
    ]
   },
   "magic_ids": [
    "anan"
   ]
  },
  {
   "id": "daily-57",
   "tier": "normal",
   "incident": "메루루의 반창고 상자가 텅 비어 있었다.",
   "verb": "다 썼어",
   "victim": {
    "id": "meruru",
    "name": "히카미 메루루",
    "line": "흑흑... 반창고가 다 떨어졌어요. 누가 다치면 어떡하죠?",
    "written": false
   },
   "n": 1,
   "rules": [
    "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "미리아",
     "name": "뒤바뀜",
     "text": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
    }
   ],
   "suspects": [
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "미리아쨩과 셰리쨩은 영혼이 바뀌어 있어!"
    },
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "미리아 아니면 셰리가 다 썼다!"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "셰리쨩이 다 썼어."
    },
    {
     "id": "sherry",
     "name": "셰리",
     "full": "타치바나 셰리",
     "written": false,
     "says": "에마 씨의 말은 맞아요!"
    }
   ],
   "answer": "miria",
   "why_not": {
    "ema": "에마가 범인이라면 거짓말하는 사람이 2명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "reia": "레이아가 범인이라면 거짓말하는 사람이 2명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "sherry": "셰리가 범인이라면 거짓말하는 사람이 0명 또는 2명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 미리아",
    "미리아와 셰리는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 셰리의 말, 셰리 이름의 말은 미리아의 말이었다.",
    "범인: 미리아"
   ],
   "false_cards": [
    "miria"
   ],
   "worlds": 1,
   "logic": {
    "ema": [
     "swap_claim",
     [
      "sherry"
     ]
    ],
    "reia": [
     "either",
     [
      "miria",
      "sherry"
     ]
    ],
    "miria": [
     "accuse",
     [
      "sherry"
     ]
    ],
    "sherry": [
     "meta_true",
     [
      "ema"
     ]
    ]
   },
   "magic_ids": [
    "miria"
   ]
  },
  {
   "id": "daily-58",
   "tier": "hard",
   "incident": "나노카가 만들어 둔 과자가 감쪽같이 사라졌다.",
   "verb": "먹었어",
   "victim": {
    "id": "nanoka",
    "name": "쿠로베 나노카",
    "line": "...내가 만든 과자를 먹은 사람은 누구지? 어서 나오도록.",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "미리아",
     "name": "뒤바뀜",
     "text": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
    }
   ],
   "suspects": [
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "노아쨩의 말은 틀렸어."
    },
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "나는 미리아쨩과 영혼이 바뀌어 있어!"
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "노아 아니면 셰리쨩이 먹었어~"
    },
    {
     "id": "sherry",
     "name": "셰리",
     "full": "타치바나 셰리",
     "written": false,
     "says": "명탐정의 추리로는, 범인은 에마 씨예요!"
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "후후, 나는 안 먹었어."
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "마, 마고 씨가 먹었어요…"
    }
   ],
   "answer": "ema",
   "why_not": {
    "miria": "미리아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "noah": "노아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "sherry": "셰리가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "margo": "마고가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "meruru": "메루루가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 노아, 메루루",
    "미리아와 에마는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 에마의 말, 에마 이름의 말은 미리아의 말이었다.",
    "범인: 에마"
   ],
   "false_cards": [
    "noah",
    "meruru"
   ],
   "worlds": 1,
   "logic": {
    "miria": [
     "meta_false",
     [
      "noah"
     ]
    ],
    "ema": [
     "swap_claim",
     [
      "ema"
     ]
    ],
    "noah": [
     "self_or",
     [
      "sherry"
     ]
    ],
    "sherry": [
     "culprit_is",
     [
      "ema"
     ]
    ],
    "margo": [
     "deny_self",
     []
    ],
    "meruru": [
     "accuse",
     [
      "margo"
     ]
    ]
   },
   "magic_ids": [
    "miria"
   ]
  },
  {
   "id": "daily-59",
   "tier": "normal",
   "incident": "안안이 아껴 마시던 홍차가 한 방울도 남지 않았다.",
   "verb": "다 마셨어",
   "victim": {
    "id": "anan",
    "name": "나츠메 안안",
    "line": "이 몸이 아껴 두었던 홍차가 사라졌노라. 범인은 이 몸 앞에 나와 고하라.",
    "written": true
   },
   "n": 1,
   "rules": [
    "이 중 딱 1명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "미리아",
     "name": "뒤바뀜",
     "text": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
    }
   ],
   "suspects": [
    {
     "id": "sherry",
     "name": "셰리",
     "full": "타치바나 셰리",
     "written": false,
     "says": "미리아 씨와 마고 씨는 영혼이 바뀌어 있어요!"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "마고쨩 아니면 셰리쨩이 다 마셨어."
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "미리아가 다 마셨음 ㅋㅋ"
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "코코쨩 아니면 셰리쨩이 다 마셨어."
    }
   ],
   "answer": "sherry",
   "why_not": {
    "miria": "미리아가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "coco": "코코가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "margo": "마고가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 코코",
    "미리아와 마고는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 마고의 말, 마고 이름의 말은 미리아의 말이었다.",
    "범인: 셰리"
   ],
   "false_cards": [
    "coco"
   ],
   "worlds": 1,
   "logic": {
    "sherry": [
     "swap_claim",
     [
      "margo"
     ]
    ],
    "miria": [
     "either",
     [
      "margo",
      "sherry"
     ]
    ],
    "coco": [
     "accuse",
     [
      "miria"
     ]
    ],
    "margo": [
     "either",
     [
      "coco",
      "sherry"
     ]
    ]
   },
   "magic_ids": [
    "miria"
   ]
  },
  {
   "id": "daily-60",
   "tier": "hard",
   "incident": "셰리가 아끼는 화분이 엎어져 있었다.",
   "verb": "엎었어",
   "victim": {
    "id": "sherry",
    "name": "타치바나 셰리",
    "line": "사건이에요! 이건 명탐정 셰리쨩에게 보내는 도전장이에요!",
    "written": false
   },
   "n": 2,
   "rules": [
    "이 중 딱 2명이 거짓말을 하고 있다. 거짓말쟁이의 말은 틀리고, 나머지의 말은 맞다.",
    "범인은 딱 한 명. 거짓말쟁이가 범인이라는 법은 없다."
   ],
   "magic": [
    {
     "who": "안안",
     "name": "세뇌",
     "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
    }
   ],
   "suspects": [
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "아리사가 엎었노라."
    },
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "아아, 안안의 말은 맞다!"
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "나 아니면 레이아 씨가 엎었사와요!"
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "안안쨩은 안 엎었어~"
    },
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "난 안 엎었어. 꺼져."
    }
   ],
   "answer": "noah",
   "why_not": {
    "anan": "안안이 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "reia": "레이아가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "hanna": "한나가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 안안, 레이아, 한나",
    "레이아, 한나 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "범인: 노아"
   ],
   "false_cards": [
    "anan",
    "reia",
    "hanna"
   ],
   "worlds": 2,
   "logic": {
    "anan": [
     "accuse",
     [
      "arisa"
     ]
    ],
    "reia": [
     "meta_true",
     [
      "anan"
     ]
    ],
    "hanna": [
     "self_or",
     [
      "reia"
     ]
    ],
    "noah": [
     "deny",
     [
      "anan"
     ]
    ],
    "arisa": [
     "deny_self",
     []
    ]
   },
   "magic_ids": [
    "anan"
   ]
  }
 ],
 "gen": {
  "names": {
   "ema": "에마",
   "nanoka": "나노카",
   "coco": "코코",
   "sherry": "셰리",
   "hanna": "한나",
   "noah": "노아",
   "reia": "레이아",
   "miria": "미리아",
   "margo": "마고",
   "anan": "안안",
   "arisa": "아리사",
   "meruru": "메루루"
  },
  "full_names": {
   "ema": "사쿠라바 에마",
   "nanoka": "쿠로베 나노카",
   "coco": "사와타리 코코",
   "sherry": "타치바나 셰리",
   "hanna": "토노 한나",
   "noah": "죠가사키 노아",
   "reia": "하스미 레이아",
   "miria": "사에키 미리아",
   "margo": "호쇼 마고",
   "anan": "나츠메 안안",
   "arisa": "시토 아리사",
   "meruru": "히카미 메루루"
  },
  "voices": {
   "ema": {
    "self": "나",
    "call": "쨩",
    "style": "ban",
    "end": "!"
   },
   "anan": {
    "self": "이 몸",
    "call": "",
    "style": "nora",
    "end": ".",
    "written": true
   },
   "noah": {
    "self": "노아",
    "call": "쨩",
    "style": "ban",
    "end": "~"
   },
   "reia": {
    "self": "나",
    "call": "",
    "style": "hada",
    "end": "!",
    "pre": {
     "accuse": "단언하지! ",
     "culprit_is": "단언하지! ",
     "meta_false": "아아, ",
     "meta_true": "아아, "
    },
    "post": {
     "deny_self": " 이 무대에 맹세하지!"
    }
   },
   "miria": {
    "self": "아저씨",
    "call": "쨩",
    "style": "ban",
    "end": "."
   },
   "margo": {
    "self": "나",
    "call": "쨩",
    "style": "ban",
    "end": ".",
    "endk": {
     "accuse": "♡",
     "culprit_is": "♡"
    },
    "pre": {
     "deny_self": "후후, ",
     "meta_false": "후후, ",
     "meta_true": "후후, ",
     "self_or": "후후, "
    }
   },
   "nanoka": {
    "self": "나",
    "topic": "난",
    "call": "",
    "style": "ban",
    "end": ".",
    "casual": true
   },
   "arisa": {
    "self": "나",
    "topic": "난",
    "call": "surname",
    "style": "ban",
    "end": ".",
    "casual": true,
    "tag": {
     "accuse": " 새끼"
    },
    "post": {
     "deny_self": " 꺼져.",
     "meta_false": " 닥쳐.",
     "culprit_is": " 됐냐?"
    }
   },
   "sherry": {
    "self": "저",
    "call": "씨",
    "style": "haeyo",
    "end": "!",
    "pre": {
     "culprit_is": "명탐정의 추리로는, "
    }
   },
   "hanna": {
    "self": "나",
    "call": "씨",
    "style": "sawayo",
    "end": "!",
    "pre": {
     "meta_false": "오호호, ",
     "meta_true": "오호호, "
    }
   },
   "coco": {
    "self": "나",
    "call": "",
    "style": "eum",
    "end": "",
    "casual": true,
    "post": {
     "accuse": " ㅋㅋ",
     "culprit_is": " 빼박",
     "deny_self": " 억까 ㄴㄴ",
     "either": " ㅇㅇ",
     "meta_false": " ㅋㅋ",
     "meta_true": " ㅇㅈ",
     "swap_claim": " ㄹㅇ"
    }
   },
   "meruru": {
    "self": "저",
    "call": "씨",
    "style": "haeyo",
    "end": "…",
    "stutter": true,
    "post": {
     "meta_false": " 죄, 죄송해요…"
    }
   }
  },
  "incidents": [
   {
    "id": "sweets",
    "owner": "nanoka",
    "text": "나노카가 만들어 둔 과자가 감쪽같이 사라졌다.",
    "did": "먹었어",
    "didnt": "안 먹었어",
    "line": "...내가 만든 과자를 먹은 사람은 누구지? 어서 나오도록."
   },
   {
    "id": "pot",
    "owner": "sherry",
    "text": "셰리가 아끼는 화분이 엎어져 있었다.",
    "did": "엎었어",
    "didnt": "안 엎었어",
    "line": "사건이에요! 이건 명탐정 셰리쨩에게 보내는 도전장이에요!"
   },
   {
    "id": "sketch",
    "owner": "noah",
    "text": "노아의 스케치북에 누가 낙서를 했다.",
    "did": "낙서했어",
    "didnt": "낙서 안 했어",
    "line": "노아 스케치북에 누가 그렸어~? 으음~ 근데 이 선, 나쁘지 않은데~"
   },
   {
    "id": "tea",
    "owner": "anan",
    "text": "안안이 아껴 마시던 홍차가 한 방울도 남지 않았다.",
    "did": "다 마셨어",
    "didnt": "안 마셨어",
    "line": "이 몸이 아껴 두었던 홍차가 사라졌노라. 범인은 이 몸 앞에 나와 고하라."
   },
   {
    "id": "stream",
    "owner": "coco",
    "text": "방송 중이던 코코의 장비 전원을 누군가 꺼 버렸다.",
    "did": "껐어",
    "didnt": "안 껐어",
    "line": "여러분 잠깐~ 야 누가 내 방송 껐어? 당장 안 나올래?! 으, 역시 나랑 최애 이외에는 다 죽어버렸으면 좋겠어!"
   },
   {
    "id": "books",
    "owner": "margo",
    "text": "마고가 정리해 둔 도서실 책이 전부 거꾸로 꽂혀 있었다.",
    "did": "거꾸로 꽂았어",
    "didnt": "안 그랬어",
    "line": "어머, 내가 정리해 둔 책이 전부 거꾸로네. 후후, 이런 장난을 친 아이는 나중에 천천히 혼내 줘야겠어♡"
   },
   {
    "id": "ribbon",
    "owner": "hanna",
    "text": "한나의 리본 하나가 없어졌다.",
    "did": "가져갔어",
    "didnt": "안 가져갔어",
    "line": "제 리본이 없어졌사와요! 어떻게 저에게 그런 짓을 쳐 할수가 있는 것이와요?!"
   },
   {
    "id": "diary",
    "owner": "ema",
    "text": "에마의 일기장이 누군가에게 몰래 펼쳐져 있었다.",
    "did": "펼쳐 봤어",
    "didnt": "안 봤어",
    "line": "으앗! 내 일기장 펼쳐 본 사람 누구야!? 이, 이상한 건 하나도 안 적었으니까!"
   },
   {
    "id": "mirror",
    "owner": "reia",
    "text": "레이아의 거울에 립스틱으로 낙서가 되어 있었다.",
    "did": "낙서했어",
    "didnt": "안 그랬어",
    "line": "이상한 무대 연출이 되었구나! 이런 짓을 저지를 범인으로부터 나는 모두를 지키겠어!"
   },
   {
    "id": "matches",
    "owner": "arisa",
    "text": "아리사의 성냥갑이 텅 비어 있었다.",
    "did": "가져갔어",
    "didnt": "안 가져갔어",
    "line": "어떤 새끼야, 죽을래?! 내 성냥 건드린 놈, 당장 튀어나와!"
   },
   {
    "id": "bandage",
    "owner": "meruru",
    "text": "메루루의 반창고 상자가 텅 비어 있었다.",
    "did": "다 썼어",
    "didnt": "안 썼어",
    "line": "흑흑... 반창고가 다 떨어졌어요. 누가 다치면 어떡하죠?"
   },
   {
    "id": "hairpin",
    "owner": "miria",
    "text": "미리아의 머리핀이 짝짝이로 바뀌어 있었다.",
    "did": "바꿔 놨어",
    "didnt": "안 바꿨어",
    "line": "으왓! 아저씨 머리핀이 짝짝이가 됐어! 어쩌지..."
   }
  ],
  "magic_name": {
   "anan": "세뇌",
   "margo": "흉내내기",
   "miria": "뒤바뀜"
  },
  "magic_text": {
   "anan": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다.",
   "margo": "마고가 다른 한 사람의 목소리를 흉내 냈을 수도 있다. 그랬다면 그 사람 이름으로 나온 말은 사실 마고의 말이고(맞고 틀림도 마고 몫), 그 사람은 아무 말도 하지 않은 것이다. 흉내니까 말투도, 말 속의 \"나\"도 그 사람 것이다. (안안은 필담이라 흉내 낼 수 없다.)",
   "miria": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
  },
  "tiers": {
   "easy": {
    "sizes": [
     3,
     4
    ],
    "ns": [
     1
    ],
    "max_meta": 0,
    "magics": [
     []
    ]
   },
   "normal": {
    "sizes": [
     4,
     5
    ],
    "ns": [
     1,
     2
    ],
    "max_meta": 1,
    "magics": [
     [
      "anan"
     ],
     [
      "margo"
     ],
     [
      "miria"
     ]
    ]
   },
   "hard": {
    "sizes": [
     5,
     6
    ],
    "ns": [
     2
    ],
    "max_meta": 2,
    "magics": [
     [
      "anan"
     ],
     [
      "margo"
     ],
     [
      "miria"
     ],
     [
      "anan",
      "margo"
     ],
     [
      "anan",
      "miria"
     ]
    ]
   }
  }
 }
};
