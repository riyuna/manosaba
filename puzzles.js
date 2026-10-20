// tools/gen_puzzles.py 가 만든 파일. 손으로 고치지 말 것.
window.PUZZLES = {
 "tiers": {
  "easy": [
   {
    "id": "easy-1",
    "tier": "easy",
    "incident": "아리사의 성냥갑이 텅 비어 있었다.",
    "verb": "가져갔어",
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
    "incident": "식당의 홍차가 한 방울도 남지 않았다.",
    "verb": "다 마셨어",
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
      "says": "오호호, 메루루 씨의 말은 틀렸사와요!"
     },
     {
      "id": "anan",
      "name": "안안",
      "full": "나츠메 안안",
      "written": true,
      "says": "미리아가 다 마셨노라."
     },
     {
      "id": "ema",
      "name": "에마",
      "full": "사쿠라바 에마",
      "written": false,
      "says": "미리아쨩은 안 마셨어!"
     },
     {
      "id": "meruru",
      "name": "메루루",
      "full": "히카미 메루루",
      "written": false,
      "says": "저, 저 아니면 안안 씨가 다 마셨어요…"
     },
     {
      "id": "miria",
      "name": "미리아",
      "full": "사에키 미리아",
      "written": false,
      "says": "아저씨는 안 마셨어."
     }
    ],
    "answer": "miria",
    "why_not": {
     "hanna": "한나가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
     "anan": "안안이 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
     "ema": "에마가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
     "meruru": "메루루가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 에마, 메루루, 미리아",
     "에마, 메루루, 미리아 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
     "범인: 미리아"
    ],
    "false_cards": [
     "ema",
     "meruru",
     "miria"
    ],
    "worlds": 3,
    "logic": {
     "hanna": [
      "meta_false",
      [
       "meruru"
      ]
     ],
     "anan": [
      "accuse",
      [
       "miria"
      ]
     ],
     "ema": [
      "deny",
      [
       "miria"
      ]
     ],
     "meruru": [
      "self_or",
      [
       "anan"
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
    "id": "normal-2",
    "tier": "normal",
    "incident": "식당의 홍차가 한 방울도 남지 않았다.",
    "verb": "다 마셨어",
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
      "says": "저, 저 아니면 노아 씨가 다 마셨어요…"
     },
     {
      "id": "miria",
      "name": "미리아",
      "full": "사에키 미리아",
      "written": false,
      "says": "아저씨는 메루루쨩과 영혼이 바뀌어 있어."
     },
     {
      "id": "sherry",
      "name": "셰리",
      "full": "타치바나 셰리",
      "written": false,
      "says": "메루루 씨 아니면 미리아 씨가 다 마셨어요!"
     },
     {
      "id": "noah",
      "name": "노아",
      "full": "죠가사키 노아",
      "written": false,
      "says": "노아 아니면 마고쨩이 다 마셨어~"
     },
     {
      "id": "margo",
      "name": "마고",
      "full": "호쇼 마고",
      "written": false,
      "says": "미리아쨩 아니면 노아쨩이 다 마셨어."
     }
    ],
    "answer": "noah",
    "why_not": {
     "meruru": "메루루가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
     "miria": "미리아가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
     "sherry": "셰리가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
     "margo": "마고가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 셰리",
     "미리아와 메루루는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 메루루의 말, 메루루 이름의 말은 미리아의 말이었다.",
     "범인: 노아"
    ],
    "false_cards": [
     "sherry"
    ],
    "worlds": 1,
    "logic": {
     "meruru": [
      "self_or",
      [
       "noah"
      ]
     ],
     "miria": [
      "swap_claim",
      [
       "meruru"
      ]
     ],
     "sherry": [
      "either",
      [
       "meruru",
       "miria"
      ]
     ],
     "noah": [
      "self_or",
      [
       "margo"
      ]
     ],
     "margo": [
      "either",
      [
       "miria",
       "noah"
      ]
     ]
    },
    "magic_ids": [
     "miria"
    ]
   },
   {
    "id": "normal-3",
    "tier": "normal",
    "incident": "노아의 스케치북에 누가 낙서를 했다.",
    "verb": "낙서했어",
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
      "id": "meruru",
      "name": "메루루",
      "full": "히카미 메루루",
      "written": false,
      "says": "범, 범인은 안안 씨예요…"
     },
     {
      "id": "margo",
      "name": "마고",
      "full": "호쇼 마고",
      "written": false,
      "says": "후후, 메루루쨩의 말은 틀렸어."
     },
     {
      "id": "hanna",
      "name": "한나",
      "full": "토노 한나",
      "written": false,
      "says": "마고 씨가 낙서했사와요!"
     },
     {
      "id": "anan",
      "name": "안안",
      "full": "나츠메 안안",
      "written": true,
      "says": "이 몸 아니면 메루루가 낙서했노라."
     },
     {
      "id": "miria",
      "name": "미리아",
      "full": "사에키 미리아",
      "written": false,
      "says": "아저씨는 낙서 안 했어."
     }
    ],
    "answer": "anan",
    "why_not": {
     "meruru": "메루루가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
     "margo": "마고가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
     "hanna": "한나가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
     "miria": "미리아가 범인이라면 거짓말하는 사람이 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 마고, 한나",
     "한나 이름으로 나온 말은 사실 마고의 흉내였다.",
     "범인: 안안"
    ],
    "false_cards": [
     "margo",
     "hanna"
    ],
    "worlds": 1,
    "logic": {
     "meruru": [
      "culprit_is",
      [
       "anan"
      ]
     ],
     "margo": [
      "meta_false",
      [
       "meruru"
      ]
     ],
     "hanna": [
      "accuse",
      [
       "margo"
      ]
     ],
     "anan": [
      "self_or",
      [
       "meruru"
      ]
     ],
     "miria": [
      "deny_self",
      []
     ]
    },
    "magic_ids": [
     "margo"
    ]
   },
   {
    "id": "normal-4",
    "tier": "normal",
    "incident": "메루루의 반창고 상자가 텅 비어 있었다.",
    "verb": "다 썼어",
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
      "says": "아아, 노아의 말은 맞다!"
     },
     {
      "id": "noah",
      "name": "노아",
      "full": "죠가사키 노아",
      "written": false,
      "says": "레이아쨩이 다 썼어~"
     },
     {
      "id": "hanna",
      "name": "한나",
      "full": "토노 한나",
      "written": false,
      "says": "안안 씨 아니면 노아 씨가 다 썼사와요!"
     },
     {
      "id": "anan",
      "name": "안안",
      "full": "나츠메 안안",
      "written": true,
      "says": "이 몸은 안 썼노라."
     }
    ],
    "answer": "noah",
    "why_not": {
     "reia": "레이아가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해.",
     "hanna": "한나가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해.",
     "anan": "안안이 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 레이아, 노아",
     "레이아, 노아 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
     "범인: 노아"
    ],
    "false_cards": [
     "reia",
     "noah"
    ],
    "worlds": 2,
    "logic": {
     "reia": [
      "meta_true",
      [
       "noah"
      ]
     ],
     "noah": [
      "accuse",
      [
       "reia"
      ]
     ],
     "hanna": [
      "either",
      [
       "anan",
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
    "id": "normal-5",
    "tier": "normal",
    "incident": "방송 중이던 코코의 장비 전원을 누군가 꺼 버렸다.",
    "verb": "껐어",
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
      "says": "이 몸은 안 껐노라."
     },
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
      "says": "단언하지! 범인은 아리사다!"
     },
     {
      "id": "miria",
      "name": "미리아",
      "full": "사에키 미리아",
      "written": false,
      "says": "아리사쨩의 말은 틀렸어."
     }
    ],
    "answer": "anan",
    "why_not": {
     "arisa": "아리사가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
     "reia": "레이아가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
     "miria": "미리아가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 안안, 아리사, 레이아",
     "아리사, 레이아 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
     "범인: 안안"
    ],
    "false_cards": [
     "anan",
     "arisa",
     "reia"
    ],
    "worlds": 2,
    "logic": {
     "anan": [
      "deny_self",
      []
     ],
     "arisa": [
      "culprit_is",
      [
       "reia"
      ]
     ],
     "reia": [
      "culprit_is",
      [
       "arisa"
      ]
     ],
     "miria": [
      "meta_false",
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
    "id": "normal-6",
    "tier": "normal",
    "incident": "식당의 홍차가 한 방울도 남지 않았다.",
    "verb": "다 마셨어",
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
      "says": "에마쨩 아니면 나노카쨩이 다 마셨어."
     },
     {
      "id": "nanoka",
      "name": "나노카",
      "full": "쿠로베 나노카",
      "written": false,
      "says": "나 아니면 노아가 다 마셨어."
     },
     {
      "id": "sherry",
      "name": "셰리",
      "full": "타치바나 셰리",
      "written": false,
      "says": "에마 씨 아니면 노아 씨가 다 마셨어요!"
     },
     {
      "id": "noah",
      "name": "노아",
      "full": "죠가사키 노아",
      "written": false,
      "says": "범인은 셰리쨩이야~"
     },
     {
      "id": "ema",
      "name": "에마",
      "full": "사쿠라바 에마",
      "written": false,
      "says": "셰리쨩은 안 마셨어!"
     }
    ],
    "answer": "noah",
    "why_not": {
     "margo": "마고가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
     "nanoka": "나노카가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
     "sherry": "셰리가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
     "ema": "에마가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 마고, 노아",
     "노아 이름으로 나온 말은 사실 마고의 흉내였다.",
     "범인: 노아"
    ],
    "false_cards": [
     "margo",
     "noah"
    ],
    "worlds": 1,
    "logic": {
     "margo": [
      "either",
      [
       "ema",
       "nanoka"
      ]
     ],
     "nanoka": [
      "self_or",
      [
       "noah"
      ]
     ],
     "sherry": [
      "either",
      [
       "ema",
       "noah"
      ]
     ],
     "noah": [
      "culprit_is",
      [
       "sherry"
      ]
     ],
     "ema": [
      "deny",
      [
       "sherry"
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
    "incident": "한나의 리본 하나가 없어졌다.",
    "verb": "가져갔어",
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
      "id": "noah",
      "name": "노아",
      "full": "죠가사키 노아",
      "written": false,
      "says": "에마쨩이 가져갔어~"
     },
     {
      "id": "anan",
      "name": "안안",
      "full": "나츠메 안안",
      "written": true,
      "says": "노아는 안 가져갔노라."
     },
     {
      "id": "margo",
      "name": "마고",
      "full": "호쇼 마고",
      "written": false,
      "says": "후후, 안안쨩의 말은 틀렸어."
     },
     {
      "id": "ema",
      "name": "에마",
      "full": "사쿠라바 에마",
      "written": false,
      "says": "범인은 노아쨩이야!"
     }
    ],
    "answer": "ema",
    "why_not": {
     "noah": "노아가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
     "anan": "안안이 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
     "margo": "마고가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 마고, 에마",
     "에마 이름으로 나온 말은 사실 마고의 흉내였다.",
     "범인: 에마"
    ],
    "false_cards": [
     "margo",
     "ema"
    ],
    "worlds": 1,
    "logic": {
     "noah": [
      "accuse",
      [
       "ema"
      ]
     ],
     "anan": [
      "deny",
      [
       "noah"
      ]
     ],
     "margo": [
      "meta_false",
      [
       "anan"
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
     "margo"
    ]
   },
   {
    "id": "normal-8",
    "tier": "normal",
    "incident": "노아의 스케치북에 누가 낙서를 했다.",
    "verb": "낙서했어",
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
      "says": "코코의 말은 옳도다."
     },
     {
      "id": "coco",
      "name": "코코",
      "full": "사와타리 코코",
      "written": false,
      "says": "나노카 아니면 레이아가 낙서했음 ㅇㅇ"
     },
     {
      "id": "reia",
      "name": "레이아",
      "full": "하스미 레이아",
      "written": false,
      "says": "나 아니면 코코가 낙서했다!"
     },
     {
      "id": "nanoka",
      "name": "나노카",
      "full": "쿠로베 나노카",
      "written": false,
      "says": "레이아가 낙서했어."
     }
    ],
    "answer": "nanoka",
    "why_not": {
     "anan": "안안이 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해.",
     "coco": "코코가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해.",
     "reia": "레이아가 범인이라면 말들이 서로 어긋나 버린다 (안안의 세뇌를 누구에게 걸었다고 해도)."
    },
    "solution": [
     "틀린 말을 한 카드: 레이아, 나노카",
     "레이아, 나노카 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
     "범인: 나노카"
    ],
    "false_cards": [
     "reia",
     "nanoka"
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
      "either",
      [
       "nanoka",
       "reia"
      ]
     ],
     "reia": [
      "self_or",
      [
       "coco"
      ]
     ],
     "nanoka": [
      "accuse",
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
    "id": "normal-9",
    "tier": "normal",
    "incident": "도서실 책이 전부 거꾸로 꽂혀 있었다.",
    "verb": "거꾸로 꽂았어",
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
      "id": "margo",
      "name": "마고",
      "full": "호쇼 마고",
      "written": false,
      "says": "후후, 나는 안 그랬어."
     },
     {
      "id": "nanoka",
      "name": "나노카",
      "full": "쿠로베 나노카",
      "written": false,
      "says": "나 아니면 안안이 거꾸로 꽂았어."
     },
     {
      "id": "coco",
      "name": "코코",
      "full": "사와타리 코코",
      "written": false,
      "says": "안안 말은 틀렸음 ㅋㅋ"
     },
     {
      "id": "anan",
      "name": "안안",
      "full": "나츠메 안안",
      "written": true,
      "says": "범인은 코코로다."
     }
    ],
    "answer": "margo",
    "why_not": {
     "nanoka": "나노카가 범인이라면 말들이 서로 어긋나 버린다 (안안의 세뇌를 누구에게 걸었다고 해도).",
     "coco": "코코가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
     "anan": "안안이 범인이라면 말들이 서로 어긋나 버린다 (안안의 세뇌를 누구에게 걸었다고 해도)."
    },
    "solution": [
     "틀린 말을 한 카드: 마고, 나노카, 안안",
     "마고, 나노카 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
     "범인: 마고"
    ],
    "false_cards": [
     "margo",
     "nanoka",
     "anan"
    ],
    "worlds": 2,
    "logic": {
     "margo": [
      "deny_self",
      []
     ],
     "nanoka": [
      "self_or",
      [
       "anan"
      ]
     ],
     "coco": [
      "meta_false",
      [
       "anan"
      ]
     ],
     "anan": [
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
    "id": "normal-10",
    "tier": "normal",
    "incident": "식당의 홍차가 한 방울도 남지 않았다.",
    "verb": "다 마셨어",
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
      "says": "이 몸 아니면 아리사가 다 마셨노라."
     },
     {
      "id": "sherry",
      "name": "셰리",
      "full": "타치바나 셰리",
      "written": false,
      "says": "명탐정의 추리로는, 범인은 에마 씨예요!"
     },
     {
      "id": "ema",
      "name": "에마",
      "full": "사쿠라바 에마",
      "written": false,
      "says": "나 아니면 안안쨩이 다 마셨어!"
     },
     {
      "id": "arisa",
      "name": "아리사",
      "full": "시토 아리사",
      "written": false,
      "says": "사쿠라바는 안 마셨어."
     }
    ],
    "answer": "sherry",
    "why_not": {
     "anan": "안안이 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
     "ema": "에마가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
     "arisa": "아리사가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 안안, 셰리, 에마",
     "셰리, 에마 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
     "범인: 셰리"
    ],
    "false_cards": [
     "anan",
     "sherry",
     "ema"
    ],
    "worlds": 2,
    "logic": {
     "anan": [
      "self_or",
      [
       "arisa"
      ]
     ],
     "sherry": [
      "culprit_is",
      [
       "ema"
      ]
     ],
     "ema": [
      "self_or",
      [
       "anan"
      ]
     ],
     "arisa": [
      "deny",
      [
       "ema"
      ]
     ]
    },
    "magic_ids": [
     "anan"
    ]
   }
  ],
  "hard": [
   {
    "id": "hard-1",
    "tier": "hard",
    "incident": "아리사의 성냥갑이 텅 비어 있었다.",
    "verb": "가져갔어",
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
      "says": "미리아와 한나는 영혼이 바뀌어 있음 ㄹㅇ"
     },
     {
      "id": "miria",
      "name": "미리아",
      "full": "사에키 미리아",
      "written": false,
      "says": "아저씨 아니면 코코쨩이 가져갔어."
     },
     {
      "id": "reia",
      "name": "레이아",
      "full": "하스미 레이아",
      "written": false,
      "says": "안안 아니면 노아가 가져갔다!"
     },
     {
      "id": "anan",
      "name": "안안",
      "full": "나츠메 안안",
      "written": true,
      "says": "미리아 아니면 레이아가 가져갔노라."
     },
     {
      "id": "noah",
      "name": "노아",
      "full": "죠가사키 노아",
      "written": false,
      "says": "노아 아니면 안안쨩이 가져갔어~"
     }
    ],
    "answer": "anan",
    "why_not": {
     "hanna": "한나가 범인이라면 거짓말하는 사람이 5명 또는 6명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "coco": "코코가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "miria": "미리아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "reia": "레이아가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "noah": "노아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 미리아, 안안",
     "미리아와 한나는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 한나의 말, 한나 이름의 말은 미리아의 말이었다.",
     "범인: 안안"
    ],
    "false_cards": [
     "miria",
     "anan"
    ],
    "worlds": 1,
    "logic": {
     "hanna": [
      "culprit_is",
      [
       "anan"
      ]
     ],
     "coco": [
      "swap_claim",
      [
       "hanna"
      ]
     ],
     "miria": [
      "self_or",
      [
       "coco"
      ]
     ],
     "reia": [
      "either",
      [
       "anan",
       "noah"
      ]
     ],
     "anan": [
      "either",
      [
       "miria",
       "reia"
      ]
     ],
     "noah": [
      "self_or",
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
    "id": "hard-2",
    "tier": "hard",
    "incident": "셰리가 아끼는 화분이 엎어져 있었다.",
    "verb": "엎었어",
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
      "id": "meruru",
      "name": "메루루",
      "full": "히카미 메루루",
      "written": false,
      "says": "미, 미리아 씨 아니면 노아 씨가 엎었어요…"
     },
     {
      "id": "anan",
      "name": "안안",
      "full": "나츠메 안안",
      "written": true,
      "says": "범인은 미리아로다."
     },
     {
      "id": "miria",
      "name": "미리아",
      "full": "사에키 미리아",
      "written": false,
      "says": "안안쨩 아니면 마고쨩이 엎었어."
     },
     {
      "id": "noah",
      "name": "노아",
      "full": "죠가사키 노아",
      "written": false,
      "says": "범인은 한나쨩이야~"
     },
     {
      "id": "margo",
      "name": "마고",
      "full": "호쇼 마고",
      "written": false,
      "says": "후후, 미리아쨩의 말은 맞아."
     },
     {
      "id": "hanna",
      "name": "한나",
      "full": "토노 한나",
      "written": false,
      "says": "범인은 메루루 씨이와요!"
     }
    ],
    "answer": "miria",
    "why_not": {
     "meruru": "메루루가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
     "anan": "안안이 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
     "noah": "노아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
     "margo": "마고가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
     "hanna": "한나가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 미리아, 노아, 마고, 한나",
     "미리아, 노아, 마고, 한나 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
     "마고가 누구 흉내를 냈는지(냈는지 아닌지도)는 말만으로는 정해지지 않는다.",
     "범인: 미리아"
    ],
    "false_cards": [
     "miria",
     "noah",
     "margo",
     "hanna"
    ],
    "worlds": 9,
    "logic": {
     "meruru": [
      "either",
      [
       "miria",
       "noah"
      ]
     ],
     "anan": [
      "culprit_is",
      [
       "miria"
      ]
     ],
     "miria": [
      "either",
      [
       "anan",
       "margo"
      ]
     ],
     "noah": [
      "culprit_is",
      [
       "hanna"
      ]
     ],
     "margo": [
      "meta_true",
      [
       "miria"
      ]
     ],
     "hanna": [
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
    "id": "hard-3",
    "tier": "hard",
    "incident": "메루루의 반창고 상자가 텅 비어 있었다.",
    "verb": "다 썼어",
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
      "id": "reia",
      "name": "레이아",
      "full": "하스미 레이아",
      "written": false,
      "says": "나는 안 썼다! 이 무대에 맹세하지!"
     },
     {
      "id": "miria",
      "name": "미리아",
      "full": "사에키 미리아",
      "written": false,
      "says": "레이아쨩은 안 썼어."
     },
     {
      "id": "coco",
      "name": "코코",
      "full": "사와타리 코코",
      "written": false,
      "says": "나 아니면 레이아가 다 썼음"
     },
     {
      "id": "noah",
      "name": "노아",
      "full": "죠가사키 노아",
      "written": false,
      "says": "레이아쨩의 말은 맞아~"
     },
     {
      "id": "anan",
      "name": "안안",
      "full": "나츠메 안안",
      "written": true,
      "says": "미리아와 코코는 영혼이 바뀌어 있노라."
     }
    ],
    "answer": "reia",
    "why_not": {
     "miria": "미리아가 범인이라면 거짓말하는 사람이 0명 또는 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "coco": "코코가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "noah": "노아가 범인이라면 거짓말하는 사람이 0명 또는 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "anan": "안안이 범인이라면 거짓말하는 사람이 0명 또는 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 레이아, 미리아, 노아",
     "레이아, 코코, 노아 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
     "미리아와 코코는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 코코의 말, 코코 이름의 말은 미리아의 말이었다.",
     "범인: 레이아"
    ],
    "false_cards": [
     "reia",
     "miria",
     "noah"
    ],
    "worlds": 3,
    "logic": {
     "reia": [
      "deny_self",
      []
     ],
     "miria": [
      "deny",
      [
       "reia"
      ]
     ],
     "coco": [
      "self_or",
      [
       "reia"
      ]
     ],
     "noah": [
      "meta_true",
      [
       "reia"
      ]
     ],
     "anan": [
      "swap_claim",
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
    "id": "hard-4",
    "tier": "hard",
    "incident": "도서실 책이 전부 거꾸로 꽂혀 있었다.",
    "verb": "거꾸로 꽂았어",
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
      "says": "미리아와 레이아는 영혼이 바뀌어 있노라."
     },
     {
      "id": "margo",
      "name": "마고",
      "full": "호쇼 마고",
      "written": false,
      "says": "후후, 에마쨩의 말은 맞아."
     },
     {
      "id": "miria",
      "name": "미리아",
      "full": "사에키 미리아",
      "written": false,
      "says": "아저씨는 노아쨩과 영혼이 바뀌어 있어."
     },
     {
      "id": "reia",
      "name": "레이아",
      "full": "하스미 레이아",
      "written": false,
      "says": "나는 안 그랬다! 이 무대에 맹세하지!"
     },
     {
      "id": "ema",
      "name": "에마",
      "full": "사쿠라바 에마",
      "written": false,
      "says": "안안쨩의 말은 맞아!"
     },
     {
      "id": "noah",
      "name": "노아",
      "full": "죠가사키 노아",
      "written": false,
      "says": "노아 아니면 레이아쨩이 거꾸로 꽂았어~"
     }
    ],
    "answer": "noah",
    "why_not": {
     "anan": "안안이 범인이라면 거짓말하는 사람이 1명 또는 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "margo": "마고가 범인이라면 거짓말하는 사람이 1명 또는 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "miria": "미리아가 범인이라면 거짓말하는 사람이 1명 또는 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "reia": "레이아가 범인이라면 거짓말하는 사람이 1명 또는 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "ema": "에마가 범인이라면 거짓말하는 사람이 1명 또는 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 안안, 마고, 에마",
     "마고, 에마 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
     "미리아와 노아는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 노아의 말, 노아 이름의 말은 미리아의 말이었다.",
     "범인: 노아"
    ],
    "false_cards": [
     "anan",
     "margo",
     "ema"
    ],
    "worlds": 2,
    "logic": {
     "anan": [
      "swap_claim",
      [
       "reia"
      ]
     ],
     "margo": [
      "meta_true",
      [
       "ema"
      ]
     ],
     "miria": [
      "swap_claim",
      [
       "noah"
      ]
     ],
     "reia": [
      "deny_self",
      []
     ],
     "ema": [
      "meta_true",
      [
       "anan"
      ]
     ],
     "noah": [
      "self_or",
      [
       "reia"
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
    "incident": "에마의 일기장이 누군가에게 몰래 펼쳐져 있었다.",
    "verb": "펼쳐 봤어",
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
      "id": "arisa",
      "name": "아리사",
      "full": "시토 아리사",
      "written": false,
      "says": "히카미 말은 틀렸어. 닥쳐."
     },
     {
      "id": "margo",
      "name": "마고",
      "full": "호쇼 마고",
      "written": false,
      "says": "후후, 아리사쨩의 말은 맞아."
     },
     {
      "id": "meruru",
      "name": "메루루",
      "full": "히카미 메루루",
      "written": false,
      "says": "범, 범인은 안안 씨예요…"
     },
     {
      "id": "anan",
      "name": "안안",
      "full": "나츠메 안안",
      "written": true,
      "says": "레이아가 펼쳐 봤노라."
     },
     {
      "id": "reia",
      "name": "레이아",
      "full": "하스미 레이아",
      "written": false,
      "says": "안안은 안 봤다!"
     }
    ],
    "answer": "anan",
    "why_not": {
     "arisa": "아리사가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
     "margo": "마고가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
     "meruru": "메루루가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
     "reia": "레이아가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 아리사, 마고, 안안, 레이아",
     "아리사, 마고, 레이아 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
     "마고가 누구 흉내를 냈는지(냈는지 아닌지도)는 말만으로는 정해지지 않는다.",
     "범인: 안안"
    ],
    "false_cards": [
     "arisa",
     "margo",
     "anan",
     "reia"
    ],
    "worlds": 4,
    "logic": {
     "arisa": [
      "meta_false",
      [
       "meruru"
      ]
     ],
     "margo": [
      "meta_true",
      [
       "arisa"
      ]
     ],
     "meruru": [
      "culprit_is",
      [
       "anan"
      ]
     ],
     "anan": [
      "accuse",
      [
       "reia"
      ]
     ],
     "reia": [
      "deny",
      [
       "anan"
      ]
     ]
    },
    "magic_ids": [
     "anan",
     "margo"
    ]
   },
   {
    "id": "hard-6",
    "tier": "hard",
    "incident": "도서실 책이 전부 거꾸로 꽂혀 있었다.",
    "verb": "거꾸로 꽂았어",
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
      "says": "아리사쨩 아니면 미리아쨩이 거꾸로 꽂았어."
     },
     {
      "id": "reia",
      "name": "레이아",
      "full": "하스미 레이아",
      "written": false,
      "says": "단언하지! 미리아가 거꾸로 꽂았다!"
     },
     {
      "id": "nanoka",
      "name": "나노카",
      "full": "쿠로베 나노카",
      "written": false,
      "says": "나 아니면 미리아가 거꾸로 꽂았어."
     },
     {
      "id": "coco",
      "name": "코코",
      "full": "사와타리 코코",
      "written": false,
      "says": "아리사가 거꾸로 꽂았음 ㅋㅋ"
     },
     {
      "id": "arisa",
      "name": "아리사",
      "full": "시토 아리사",
      "written": false,
      "says": "사에키와 사와타리는 영혼이 바뀌어 있어."
     },
     {
      "id": "miria",
      "name": "미리아",
      "full": "사에키 미리아",
      "written": false,
      "says": "마고쨩 아니면 레이아쨩이 거꾸로 꽂았어."
     }
    ],
    "answer": "miria",
    "why_not": {
     "margo": "마고가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "reia": "레이아가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "nanoka": "나노카가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "coco": "코코가 범인이라면 거짓말하는 사람이 5명 또는 6명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "arisa": "아리사가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 코코, 미리아",
     "미리아와 코코는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 코코의 말, 코코 이름의 말은 미리아의 말이었다.",
     "범인: 미리아"
    ],
    "false_cards": [
     "coco",
     "miria"
    ],
    "worlds": 1,
    "logic": {
     "margo": [
      "either",
      [
       "arisa",
       "miria"
      ]
     ],
     "reia": [
      "accuse",
      [
       "miria"
      ]
     ],
     "nanoka": [
      "self_or",
      [
       "miria"
      ]
     ],
     "coco": [
      "accuse",
      [
       "arisa"
      ]
     ],
     "arisa": [
      "swap_claim",
      [
       "coco"
      ]
     ],
     "miria": [
      "either",
      [
       "margo",
       "reia"
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
    "incident": "도서실 책이 전부 거꾸로 꽂혀 있었다.",
    "verb": "거꾸로 꽂았어",
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
      "says": "후후, 셰리쨩의 말은 맞아."
     },
     {
      "id": "arisa",
      "name": "아리사",
      "full": "시토 아리사",
      "written": false,
      "says": "호쇼 말은 맞아."
     },
     {
      "id": "ema",
      "name": "에마",
      "full": "사쿠라바 에마",
      "written": false,
      "says": "나 아니면 한나쨩이 거꾸로 꽂았어!"
     },
     {
      "id": "coco",
      "name": "코코",
      "full": "사와타리 코코",
      "written": false,
      "says": "나는 안 그랬음 억까 ㄴㄴ"
     },
     {
      "id": "hanna",
      "name": "한나",
      "full": "토노 한나",
      "written": false,
      "says": "셰리 씨는 안 그랬사와요!"
     },
     {
      "id": "sherry",
      "name": "셰리",
      "full": "타치바나 셰리",
      "written": false,
      "says": "에마 씨가 거꾸로 꽂았어요!"
     }
    ],
    "answer": "hanna",
    "why_not": {
     "margo": "마고가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
     "arisa": "아리사가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
     "ema": "에마가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
     "coco": "코코가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
     "sherry": "셰리가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 마고, 아리사, 셰리",
     "마고가 누구 흉내를 냈는지(냈는지 아닌지도)는 말만으로는 정해지지 않는다.",
     "범인: 한나"
    ],
    "false_cards": [
     "margo",
     "arisa",
     "sherry"
    ],
    "worlds": 2,
    "logic": {
     "margo": [
      "meta_true",
      [
       "sherry"
      ]
     ],
     "arisa": [
      "meta_true",
      [
       "margo"
      ]
     ],
     "ema": [
      "self_or",
      [
       "hanna"
      ]
     ],
     "coco": [
      "deny_self",
      []
     ],
     "hanna": [
      "deny",
      [
       "sherry"
      ]
     ],
     "sherry": [
      "accuse",
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
    "id": "hard-8",
    "tier": "hard",
    "incident": "한나의 리본 하나가 없어졌다.",
    "verb": "가져갔어",
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
      "says": "후후, 나노카쨩의 말은 틀렸어."
     },
     {
      "id": "miria",
      "name": "미리아",
      "full": "사에키 미리아",
      "written": false,
      "says": "아저씨 아니면 마고쨩이 가져갔어."
     },
     {
      "id": "coco",
      "name": "코코",
      "full": "사와타리 코코",
      "written": false,
      "says": "나는 미리아와 영혼이 바뀌어 있음 ㄹㅇ"
     },
     {
      "id": "ema",
      "name": "에마",
      "full": "사쿠라바 에마",
      "written": false,
      "says": "코코쨩이 가져갔어!"
     },
     {
      "id": "meruru",
      "name": "메루루",
      "full": "히카미 메루루",
      "written": false,
      "says": "미, 미리아 씨의 말은 틀렸어요… 죄, 죄송해요…"
     },
     {
      "id": "nanoka",
      "name": "나노카",
      "full": "쿠로베 나노카",
      "written": false,
      "says": "범인은 마고야."
     }
    ],
    "answer": "coco",
    "why_not": {
     "margo": "마고가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "miria": "미리아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "ema": "에마가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "meruru": "메루루가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "nanoka": "나노카가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 미리아, 나노카",
     "미리아와 코코는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 코코의 말, 코코 이름의 말은 미리아의 말이었다.",
     "범인: 코코"
    ],
    "false_cards": [
     "miria",
     "nanoka"
    ],
    "worlds": 1,
    "logic": {
     "margo": [
      "meta_false",
      [
       "nanoka"
      ]
     ],
     "miria": [
      "self_or",
      [
       "margo"
      ]
     ],
     "coco": [
      "swap_claim",
      [
       "coco"
      ]
     ],
     "ema": [
      "accuse",
      [
       "coco"
      ]
     ],
     "meruru": [
      "meta_false",
      [
       "miria"
      ]
     ],
     "nanoka": [
      "culprit_is",
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
    "id": "hard-9",
    "tier": "hard",
    "incident": "에마의 일기장이 누군가에게 몰래 펼쳐져 있었다.",
    "verb": "펼쳐 봤어",
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
      "id": "miria",
      "name": "미리아",
      "full": "사에키 미리아",
      "written": false,
      "says": "아저씨 아니면 노아쨩이 펼쳐 봤어."
     },
     {
      "id": "hanna",
      "name": "한나",
      "full": "토노 한나",
      "written": false,
      "says": "범인은 미리아 씨이와요!"
     },
     {
      "id": "nanoka",
      "name": "나노카",
      "full": "쿠로베 나노카",
      "written": false,
      "says": "미리아 아니면 노아가 펼쳐 봤어."
     },
     {
      "id": "anan",
      "name": "안안",
      "full": "나츠메 안안",
      "written": true,
      "says": "한나 아니면 노아가 펼쳐 봤노라."
     },
     {
      "id": "noah",
      "name": "노아",
      "full": "죠가사키 노아",
      "written": false,
      "says": "미리아쨩과 나노카쨩은 영혼이 바뀌어 있어~"
     }
    ],
    "answer": "hanna",
    "why_not": {
     "miria": "미리아가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "nanoka": "나노카가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "anan": "안안이 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
     "noah": "노아가 범인이라면 거짓말하는 사람이 0명 또는 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
    },
    "solution": [
     "틀린 말을 한 카드: 미리아, 한나, 나노카",
     "미리아, 한나, 나노카 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
     "미리아와 나노카는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 나노카의 말, 나노카 이름의 말은 미리아의 말이었다.",
     "범인: 한나"
    ],
    "false_cards": [
     "miria",
     "hanna",
     "nanoka"
    ],
    "worlds": 3,
    "logic": {
     "miria": [
      "self_or",
      [
       "noah"
      ]
     ],
     "hanna": [
      "culprit_is",
      [
       "miria"
      ]
     ],
     "nanoka": [
      "either",
      [
       "miria",
       "noah"
      ]
     ],
     "anan": [
      "either",
      [
       "hanna",
       "noah"
      ]
     ],
     "noah": [
      "swap_claim",
      [
       "nanoka"
      ]
     ]
    },
    "magic_ids": [
     "anan",
     "miria"
    ]
   },
   {
    "id": "hard-10",
    "tier": "hard",
    "incident": "노아의 스케치북에 누가 낙서를 했다.",
    "verb": "낙서했어",
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
   }
  ]
 },
 "daily": [
  {
   "id": "daily-1",
   "tier": "normal",
   "incident": "노아의 스케치북에 누가 낙서를 했다.",
   "verb": "낙서했어",
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
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "에마의 말은 그릇되었도다."
    },
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "안안쨩이 낙서했어!"
    },
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "안안은 낙서 안 했다!"
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "범인은 레이아쨩이야♡"
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "안, 안안 씨 아니면 마고 씨가 낙서했어요…"
    }
   ],
   "answer": "margo",
   "why_not": {
    "anan": "안안이 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "ema": "에마가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "reia": "레이아가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "meruru": "메루루가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 에마, 마고",
    "에마 이름으로 나온 말은 사실 마고의 흉내였다.",
    "범인: 마고"
   ],
   "false_cards": [
    "ema",
    "margo"
   ],
   "worlds": 1,
   "logic": {
    "anan": [
     "meta_false",
     [
      "ema"
     ]
    ],
    "ema": [
     "accuse",
     [
      "anan"
     ]
    ],
    "reia": [
     "deny",
     [
      "anan"
     ]
    ],
    "margo": [
     "culprit_is",
     [
      "reia"
     ]
    ],
    "meruru": [
     "either",
     [
      "anan",
      "margo"
     ]
    ]
   },
   "magic_ids": [
    "margo"
   ]
  },
  {
   "id": "daily-2",
   "tier": "hard",
   "incident": "노아의 스케치북에 누가 낙서를 했다.",
   "verb": "낙서했어",
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
     "says": "마고 말은 맞음 ㅇㅈ"
    },
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "사와타리 말은 틀렸어. 닥쳐."
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "나는 낙서 안 했사와요!"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "코코 아니면 마고가 낙서했노라."
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "한나쨩은 낙서 안 했어."
    }
   ],
   "answer": "hanna",
   "why_not": {
    "coco": "코코가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "margo": "마고가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 코코, 한나, 안안, 마고",
    "코코, 한나, 마고 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "마고가 누구 흉내를 냈는지(냈는지 아닌지도)는 말만으로는 정해지지 않는다.",
    "범인: 한나"
   ],
   "false_cards": [
    "coco",
    "hanna",
    "anan",
    "margo"
   ],
   "worlds": 4,
   "logic": {
    "coco": [
     "meta_true",
     [
      "margo"
     ]
    ],
    "arisa": [
     "meta_false",
     [
      "coco"
     ]
    ],
    "hanna": [
     "deny_self",
     []
    ],
    "anan": [
     "either",
     [
      "coco",
      "margo"
     ]
    ],
    "margo": [
     "deny",
     [
      "hanna"
     ]
    ]
   },
   "magic_ids": [
    "anan",
    "margo"
   ]
  },
  {
   "id": "daily-3",
   "tier": "normal",
   "incident": "노아의 스케치북에 누가 낙서를 했다.",
   "verb": "낙서했어",
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
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "후후, 코코쨩의 말은 맞아."
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "마고 아니면 나노카가 낙서했노라."
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "범인은 나노카임 빼박"
    },
    {
     "id": "nanoka",
     "name": "나노카",
     "full": "쿠로베 나노카",
     "written": false,
     "says": "범인은 안안이야."
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "안안 씨 아니면 마고 씨가 낙서했사와요!"
    }
   ],
   "answer": "nanoka",
   "why_not": {
    "margo": "마고가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해.",
    "coco": "코코가 범인이라면 거짓말하는 사람이 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해.",
    "hanna": "한나가 범인이라면 거짓말하는 사람이 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 나노카, 한나",
    "나노카, 한나 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "범인: 나노카"
   ],
   "false_cards": [
    "nanoka",
    "hanna"
   ],
   "worlds": 2,
   "logic": {
    "margo": [
     "meta_true",
     [
      "coco"
     ]
    ],
    "anan": [
     "either",
     [
      "margo",
      "nanoka"
     ]
    ],
    "coco": [
     "culprit_is",
     [
      "nanoka"
     ]
    ],
    "nanoka": [
     "culprit_is",
     [
      "anan"
     ]
    ],
    "hanna": [
     "either",
     [
      "anan",
      "margo"
     ]
    ]
   },
   "magic_ids": [
    "anan"
   ]
  },
  {
   "id": "daily-4",
   "tier": "hard",
   "incident": "식당의 홍차가 한 방울도 남지 않았다.",
   "verb": "다 마셨어",
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
     "says": "저, 저 아니면 한나 씨가 다 마셨어요…"
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "노아 말은 맞음 ㅇㅈ"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "범인은 노아로다."
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "코코 씨가 다 마셨사와요!"
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "범인은 메루루쨩이야~"
    },
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "나 아니면 안안이 다 마셨다!"
    }
   ],
   "answer": "meruru",
   "why_not": {
    "coco": "코코가 범인이라면 거짓말하는 사람이 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "hanna": "한나가 범인이라면 거짓말하는 사람이 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "noah": "노아가 범인이라면 거짓말하는 사람이 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "reia": "레이아가 범인이라면 거짓말하는 사람이 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 안안, 한나, 레이아",
    "한나, 레이아 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "범인: 메루루"
   ],
   "false_cards": [
    "anan",
    "hanna",
    "reia"
   ],
   "worlds": 2,
   "logic": {
    "meruru": [
     "self_or",
     [
      "hanna"
     ]
    ],
    "coco": [
     "meta_true",
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
    "hanna": [
     "accuse",
     [
      "coco"
     ]
    ],
    "noah": [
     "culprit_is",
     [
      "meruru"
     ]
    ],
    "reia": [
     "self_or",
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
   "id": "daily-5",
   "tier": "normal",
   "incident": "레이아의 거울에 립스틱으로 낙서가 되어 있었다.",
   "verb": "낙서했어",
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
     "says": "마고 아니면 나노카가 낙서했노라."
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "후후, 안안쨩의 말은 틀렸어."
    },
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "나츠메 아니면 호쇼가 낙서했어."
    },
    {
     "id": "nanoka",
     "name": "나노카",
     "full": "쿠로베 나노카",
     "written": false,
     "says": "나 아니면 안안이 낙서했어."
    }
   ],
   "answer": "arisa",
   "why_not": {
    "anan": "안안이 범인이라면 말들이 서로 어긋나 버린다 (안안의 세뇌를 누구에게 걸었다고 해도).",
    "margo": "마고가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "nanoka": "나노카가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 안안, 아리사, 나노카",
    "아리사, 나노카 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "범인: 아리사"
   ],
   "false_cards": [
    "anan",
    "arisa",
    "nanoka"
   ],
   "worlds": 2,
   "logic": {
    "anan": [
     "either",
     [
      "margo",
      "nanoka"
     ]
    ],
    "margo": [
     "meta_false",
     [
      "anan"
     ]
    ],
    "arisa": [
     "either",
     [
      "anan",
      "margo"
     ]
    ],
    "nanoka": [
     "self_or",
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
   "id": "daily-6",
   "tier": "hard",
   "incident": "식당의 홍차가 한 방울도 남지 않았다.",
   "verb": "다 마셨어",
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
     "says": "단언하지! 범인은 아리사다!"
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "미, 미리아 씨 아니면 레이아 씨가 다 마셨어요…"
    },
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "노아쨩 아니면 레이아쨩이 다 마셨어!"
    },
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "난 사에키와 영혼이 바뀌어 있어."
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "에마쨩이 다 마셨어~"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "아저씨는 안 마셨어."
    }
   ],
   "answer": "reia",
   "why_not": {
    "meruru": "메루루가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "ema": "에마가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "noah": "노아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 레이아, 노아",
    "미리아와 아리사는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 아리사의 말, 아리사 이름의 말은 미리아의 말이었다.",
    "범인: 레이아"
   ],
   "false_cards": [
    "reia",
    "noah"
   ],
   "worlds": 1,
   "logic": {
    "reia": [
     "culprit_is",
     [
      "arisa"
     ]
    ],
    "meruru": [
     "either",
     [
      "miria",
      "reia"
     ]
    ],
    "ema": [
     "either",
     [
      "noah",
      "reia"
     ]
    ],
    "arisa": [
     "swap_claim",
     [
      "arisa"
     ]
    ],
    "noah": [
     "accuse",
     [
      "ema"
     ]
    ],
    "miria": [
     "deny_self",
     []
    ]
   },
   "magic_ids": [
    "miria"
   ]
  },
  {
   "id": "daily-7",
   "tier": "normal",
   "incident": "미리아의 머리핀이 짝짝이로 바뀌어 있었다.",
   "verb": "바꿔 놨어",
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
     "says": "노아쨩의 말은 틀렸어!"
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "범인은 레이아쨩이야♡"
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "나 아니면 노아가 바꿔 놨음"
    },
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "코코 아니면 마고가 바꿔 놨다!"
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "레이아쨩은 안 바꿨어~"
    }
   ],
   "answer": "coco",
   "why_not": {
    "ema": "에마가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "margo": "마고가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "reia": "레이아가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "noah": "노아가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 에마, 마고",
    "에마 이름으로 나온 말은 사실 마고의 흉내였다.",
    "범인: 코코"
   ],
   "false_cards": [
    "ema",
    "margo"
   ],
   "worlds": 1,
   "logic": {
    "ema": [
     "meta_false",
     [
      "noah"
     ]
    ],
    "margo": [
     "culprit_is",
     [
      "reia"
     ]
    ],
    "coco": [
     "self_or",
     [
      "noah"
     ]
    ],
    "reia": [
     "either",
     [
      "coco",
      "margo"
     ]
    ],
    "noah": [
     "deny",
     [
      "reia"
     ]
    ]
   },
   "magic_ids": [
    "margo"
   ]
  },
  {
   "id": "daily-8",
   "tier": "hard",
   "incident": "노아의 스케치북에 누가 낙서를 했다.",
   "verb": "낙서했어",
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
   "id": "daily-9",
   "tier": "normal",
   "incident": "레이아의 거울에 립스틱으로 낙서가 되어 있었다.",
   "verb": "낙서했어",
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
   "id": "daily-10",
   "tier": "hard",
   "incident": "나노카가 만들어 둔 과자가 감쪽같이 사라졌다.",
   "verb": "먹었어",
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
     "id": "sherry",
     "name": "셰리",
     "full": "타치바나 셰리",
     "written": false,
     "says": "안안 씨가 먹었어요!"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "셰리쨩의 말은 맞아."
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "미리아와 셰리는 영혼이 바뀌어 있노라."
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "오호호, 안안 씨의 말은 맞사와요!"
    },
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "나는 안 먹었다! 이 무대에 맹세하지!"
    }
   ],
   "answer": "reia",
   "why_not": {
    "sherry": "셰리가 범인이라면 거짓말하는 사람이 1명 또는 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 1명 또는 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "hanna": "한나가 범인이라면 거짓말하는 사람이 1명 또는 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 셰리, 미리아, 레이아",
    "셰리, 미리아, 레이아 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "미리아와 셰리는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 셰리의 말, 셰리 이름의 말은 미리아의 말이었다.",
    "범인: 레이아"
   ],
   "false_cards": [
    "sherry",
    "miria",
    "reia"
   ],
   "worlds": 3,
   "logic": {
    "sherry": [
     "accuse",
     [
      "anan"
     ]
    ],
    "miria": [
     "meta_true",
     [
      "sherry"
     ]
    ],
    "anan": [
     "swap_claim",
     [
      "sherry"
     ]
    ],
    "hanna": [
     "meta_true",
     [
      "anan"
     ]
    ],
    "reia": [
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
   "id": "daily-11",
   "tier": "normal",
   "incident": "셰리가 아끼는 화분이 엎어져 있었다.",
   "verb": "엎었어",
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
     "id": "nanoka",
     "name": "나노카",
     "full": "쿠로베 나노카",
     "written": false,
     "says": "안안 아니면 레이아가 엎었어."
    },
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "아아, 코코의 말은 틀렸다!"
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "나 아니면 나노카가 엎었음"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "아리사 아니면 레이아가 엎었노라."
    },
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "범인은 쿠로베야. 됐냐?"
    }
   ],
   "answer": "reia",
   "why_not": {
    "nanoka": "나노카가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해.",
    "coco": "코코가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해.",
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 코코, 아리사",
    "코코, 아리사 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "범인: 레이아"
   ],
   "false_cards": [
    "coco",
    "arisa"
   ],
   "worlds": 2,
   "logic": {
    "nanoka": [
     "either",
     [
      "anan",
      "reia"
     ]
    ],
    "reia": [
     "meta_false",
     [
      "coco"
     ]
    ],
    "coco": [
     "self_or",
     [
      "nanoka"
     ]
    ],
    "anan": [
     "either",
     [
      "arisa",
      "reia"
     ]
    ],
    "arisa": [
     "culprit_is",
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
   "id": "daily-12",
   "tier": "hard",
   "incident": "레이아의 거울에 립스틱으로 낙서가 되어 있었다.",
   "verb": "낙서했어",
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
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "노아의 말은 옳도다."
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "아저씨 아니면 마고쨩이 낙서했어."
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "후후, 나는 안 그랬어."
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "마고쨩은 안 그랬어~"
    },
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "마고쨩의 말은 맞아!"
    },
    {
     "id": "nanoka",
     "name": "나노카",
     "full": "쿠로베 나노카",
     "written": false,
     "says": "에마는 안 그랬어."
    }
   ],
   "answer": "margo",
   "why_not": {
    "anan": "안안이 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "miria": "미리아가 범인이라면 말들이 서로 어긋나 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도).",
    "noah": "노아가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "ema": "에마가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "nanoka": "나노카가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 안안, 마고, 노아, 에마",
    "마고, 노아, 에마 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "마고가 누구 흉내를 냈는지(냈는지 아닌지도)는 말만으로는 정해지지 않는다.",
    "범인: 마고"
   ],
   "false_cards": [
    "anan",
    "margo",
    "noah",
    "ema"
   ],
   "worlds": 4,
   "logic": {
    "anan": [
     "meta_true",
     [
      "noah"
     ]
    ],
    "miria": [
     "self_or",
     [
      "margo"
     ]
    ],
    "margo": [
     "deny_self",
     []
    ],
    "noah": [
     "deny",
     [
      "margo"
     ]
    ],
    "ema": [
     "meta_true",
     [
      "margo"
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
    "margo"
   ]
  },
  {
   "id": "daily-13",
   "tier": "normal",
   "incident": "노아의 스케치북에 누가 낙서를 했다.",
   "verb": "낙서했어",
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
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "메루루 씨는 낙서 안 했사와요!"
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "미, 미리아 씨의 말은 맞아요…"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "아저씨는 한나쨩과 영혼이 바뀌어 있어."
    },
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "나 아니면 한나쨩이 낙서했어!"
    }
   ],
   "answer": "miria",
   "why_not": {
    "hanna": "한나가 범인이라면 거짓말하는 사람이 0명 또는 2명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "meruru": "메루루가 범인이라면 거짓말하는 사람이 2명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "ema": "에마가 범인이라면 거짓말하는 사람이 0명 또는 2명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 에마",
    "미리아와 한나는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 한나의 말, 한나 이름의 말은 미리아의 말이었다.",
    "범인: 미리아"
   ],
   "false_cards": [
    "ema"
   ],
   "worlds": 1,
   "logic": {
    "hanna": [
     "deny",
     [
      "meruru"
     ]
    ],
    "meruru": [
     "meta_true",
     [
      "miria"
     ]
    ],
    "miria": [
     "swap_claim",
     [
      "hanna"
     ]
    ],
    "ema": [
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
   "id": "daily-14",
   "tier": "hard",
   "incident": "나노카가 만들어 둔 과자가 감쪽같이 사라졌다.",
   "verb": "먹었어",
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
     "says": "셰리의 말은 그릇되었도다."
    },
    {
     "id": "sherry",
     "name": "셰리",
     "full": "타치바나 셰리",
     "written": false,
     "says": "아리사 씨는 안 먹었어요!"
    },
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "나츠메는 안 먹었어."
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "아리사 말은 틀렸음 ㅋㅋ"
    },
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "코코쨩은 안 먹었어!"
    }
   ],
   "answer": "coco",
   "why_not": {
    "anan": "안안이 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "sherry": "셰리가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "ema": "에마가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 안안, 코코, 에마",
    "코코, 에마 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "범인: 코코"
   ],
   "false_cards": [
    "anan",
    "coco",
    "ema"
   ],
   "worlds": 2,
   "logic": {
    "anan": [
     "meta_false",
     [
      "sherry"
     ]
    ],
    "sherry": [
     "deny",
     [
      "arisa"
     ]
    ],
    "arisa": [
     "deny",
     [
      "anan"
     ]
    ],
    "coco": [
     "meta_false",
     [
      "arisa"
     ]
    ],
    "ema": [
     "deny",
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
   "id": "daily-15",
   "tier": "normal",
   "incident": "셰리가 아끼는 화분이 엎어져 있었다.",
   "verb": "엎었어",
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
     "says": "후후, 미리아쨩의 말은 틀렸어."
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "마, 마고 씨가 엎었어요…"
    },
    {
     "id": "nanoka",
     "name": "나노카",
     "full": "쿠로베 나노카",
     "written": false,
     "says": "아리사 아니면 메루루가 엎었어."
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "범인은 메루루쨩이야."
    },
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "호쇼는 안 엎었어."
    }
   ],
   "answer": "meruru",
   "why_not": {
    "margo": "마고가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "nanoka": "나노카가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 마고, 메루루",
    "메루루 이름으로 나온 말은 사실 마고의 흉내였다.",
    "범인: 메루루"
   ],
   "false_cards": [
    "margo",
    "meruru"
   ],
   "worlds": 1,
   "logic": {
    "margo": [
     "meta_false",
     [
      "miria"
     ]
    ],
    "meruru": [
     "accuse",
     [
      "margo"
     ]
    ],
    "nanoka": [
     "either",
     [
      "arisa",
      "meruru"
     ]
    ],
    "miria": [
     "culprit_is",
     [
      "meruru"
     ]
    ],
    "arisa": [
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
   "id": "daily-16",
   "tier": "hard",
   "incident": "도서실 책이 전부 거꾸로 꽂혀 있었다.",
   "verb": "거꾸로 꽂았어",
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
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "메루루쨩이 거꾸로 꽂았어."
    },
    {
     "id": "nanoka",
     "name": "나노카",
     "full": "쿠로베 나노카",
     "written": false,
     "says": "범인은 메루루야."
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "미리아의 말은 옳도다."
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "미리아쨩과 나노카쨩은 영혼이 바뀌어 있어~"
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "범, 범인은 나노카 씨예요…"
    }
   ],
   "answer": "nanoka",
   "why_not": {
    "miria": "미리아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "noah": "노아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "meruru": "메루루가 범인이라면 거짓말하는 사람이 0명 또는 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 미리아, 나노카, 안안",
    "미리아, 나노카 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "미리아와 나노카는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 나노카의 말, 나노카 이름의 말은 미리아의 말이었다.",
    "범인: 나노카"
   ],
   "false_cards": [
    "miria",
    "nanoka",
    "anan"
   ],
   "worlds": 2,
   "logic": {
    "miria": [
     "accuse",
     [
      "meruru"
     ]
    ],
    "nanoka": [
     "culprit_is",
     [
      "meruru"
     ]
    ],
    "anan": [
     "meta_true",
     [
      "miria"
     ]
    ],
    "noah": [
     "swap_claim",
     [
      "nanoka"
     ]
    ],
    "meruru": [
     "culprit_is",
     [
      "nanoka"
     ]
    ]
   },
   "magic_ids": [
    "anan",
    "miria"
   ]
  },
  {
   "id": "daily-17",
   "tier": "normal",
   "incident": "미리아의 머리핀이 짝짝이로 바뀌어 있었다.",
   "verb": "바꿔 놨어",
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
     "says": "에마 아니면 한나가 바꿔 놨노라."
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "에마쨩은 안 바꿨어."
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "에마 씨 아니면 마고 씨가 바꿔 놨사와요!"
    },
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "범인은 한나쨩이야!"
    }
   ],
   "answer": "anan",
   "why_not": {
    "margo": "마고가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "hanna": "한나가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "ema": "에마가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 안안, 한나, 에마",
    "한나, 에마 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "범인: 안안"
   ],
   "false_cards": [
    "anan",
    "hanna",
    "ema"
   ],
   "worlds": 2,
   "logic": {
    "anan": [
     "either",
     [
      "ema",
      "hanna"
     ]
    ],
    "margo": [
     "deny",
     [
      "ema"
     ]
    ],
    "hanna": [
     "either",
     [
      "ema",
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
    "anan"
   ]
  },
  {
   "id": "daily-18",
   "tier": "hard",
   "incident": "레이아의 거울에 립스틱으로 낙서가 되어 있었다.",
   "verb": "낙서했어",
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
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "범인은 쿠로베야. 됐냐?"
    },
    {
     "id": "nanoka",
     "name": "나노카",
     "full": "쿠로베 나노카",
     "written": false,
     "says": "마고가 낙서했어."
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "범인은 아리사쨩이야♡"
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "노아는 안 그랬어~"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "아저씨는 마고쨩과 영혼이 바뀌어 있어."
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "나, 나노카 씨의 말은 맞아요…"
    }
   ],
   "answer": "margo",
   "why_not": {
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "nanoka": "나노카가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "noah": "노아가 범인이라면 거짓말하는 사람이 5명 또는 6명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "meruru": "메루루가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 아리사, 마고",
    "미리아와 마고는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 마고의 말, 마고 이름의 말은 미리아의 말이었다.",
    "범인: 마고"
   ],
   "false_cards": [
    "arisa",
    "margo"
   ],
   "worlds": 1,
   "logic": {
    "arisa": [
     "culprit_is",
     [
      "nanoka"
     ]
    ],
    "nanoka": [
     "accuse",
     [
      "margo"
     ]
    ],
    "margo": [
     "culprit_is",
     [
      "arisa"
     ]
    ],
    "noah": [
     "deny_self",
     []
    ],
    "miria": [
     "swap_claim",
     [
      "margo"
     ]
    ],
    "meruru": [
     "meta_true",
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
   "id": "daily-19",
   "tier": "normal",
   "incident": "나노카가 만들어 둔 과자가 감쪽같이 사라졌다.",
   "verb": "먹었어",
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
     "says": "코코쨩이 먹었어."
    },
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "범인은 레이아쨩이야!"
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "나 아니면 미리아가 먹었음"
    },
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "나는 미리아와 영혼이 바뀌어 있다!"
    }
   ],
   "answer": "coco",
   "why_not": {
    "miria": "미리아가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "ema": "에마가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "reia": "레이아가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 에마",
    "미리아와 레이아는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 레이아의 말, 레이아 이름의 말은 미리아의 말이었다.",
    "범인: 코코"
   ],
   "false_cards": [
    "ema"
   ],
   "worlds": 1,
   "logic": {
    "miria": [
     "accuse",
     [
      "coco"
     ]
    ],
    "ema": [
     "culprit_is",
     [
      "reia"
     ]
    ],
    "coco": [
     "self_or",
     [
      "miria"
     ]
    ],
    "reia": [
     "swap_claim",
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
   "id": "daily-20",
   "tier": "hard",
   "incident": "셰리가 아끼는 화분이 엎어져 있었다.",
   "verb": "엎었어",
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
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "아아, 한나의 말은 맞다!"
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "마고 말은 틀렸음 ㅋㅋ"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "이 몸 아니면 레이아가 엎었노라."
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "나는 안 엎었사와요!"
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "안안쨩 아니면 레이아쨩이 엎었어."
    }
   ],
   "answer": "hanna",
   "why_not": {
    "reia": "레이아가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "coco": "코코가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "margo": "마고가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 레이아, 안안, 한나, 마고",
    "레이아, 한나, 마고 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "마고가 누구 흉내를 냈는지(냈는지 아닌지도)는 말만으로는 정해지지 않는다.",
    "범인: 한나"
   ],
   "false_cards": [
    "reia",
    "anan",
    "hanna",
    "margo"
   ],
   "worlds": 4,
   "logic": {
    "reia": [
     "meta_true",
     [
      "hanna"
     ]
    ],
    "coco": [
     "meta_false",
     [
      "margo"
     ]
    ],
    "anan": [
     "self_or",
     [
      "reia"
     ]
    ],
    "hanna": [
     "deny_self",
     []
    ],
    "margo": [
     "either",
     [
      "anan",
      "reia"
     ]
    ]
   },
   "magic_ids": [
    "anan",
    "margo"
   ]
  },
  {
   "id": "daily-21",
   "tier": "normal",
   "incident": "아리사의 성냥갑이 텅 비어 있었다.",
   "verb": "가져갔어",
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
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "나 아니면 미리아가 가져갔음"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "노아쨩의 말은 틀렸어."
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "미리아쨩과 코코쨩은 영혼이 바뀌어 있어~"
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "미리아 씨와 노아 씨는 영혼이 바뀌어 있사와요!"
    },
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "미리아쨩이 가져갔어!"
    }
   ],
   "answer": "miria",
   "why_not": {
    "coco": "코코가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "noah": "노아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "hanna": "한나가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "ema": "에마가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 노아",
    "미리아와 노아는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 노아의 말, 노아 이름의 말은 미리아의 말이었다.",
    "범인: 미리아"
   ],
   "false_cards": [
    "noah"
   ],
   "worlds": 1,
   "logic": {
    "coco": [
     "self_or",
     [
      "miria"
     ]
    ],
    "miria": [
     "meta_false",
     [
      "noah"
     ]
    ],
    "noah": [
     "swap_claim",
     [
      "coco"
     ]
    ],
    "hanna": [
     "swap_claim",
     [
      "noah"
     ]
    ],
    "ema": [
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
   "id": "daily-22",
   "tier": "hard",
   "incident": "방송 중이던 코코의 장비 전원을 누군가 꺼 버렸다.",
   "verb": "껐어",
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
   "id": "daily-23",
   "tier": "normal",
   "incident": "셰리가 아끼는 화분이 엎어져 있었다.",
   "verb": "엎었어",
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
   "id": "daily-24",
   "tier": "hard",
   "incident": "도서실 책이 전부 거꾸로 꽂혀 있었다.",
   "verb": "거꾸로 꽂았어",
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
     "says": "사와타리 아니면 토노가 거꾸로 꽂았어."
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "노아 씨는 안 그랬사와요!"
    },
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "범인은 노아쨩이야!"
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "안안쨩 아니면 코코쨩이 거꾸로 꽂았어~"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "이 몸은 안 그랬노라."
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "한나 아니면 노아가 거꾸로 꽂았음 ㅇㅇ"
    }
   ],
   "answer": "noah",
   "why_not": {
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "hanna": "한나가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "ema": "에마가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "coco": "코코가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 아리사, 한나, 노아",
    "아리사, 한나, 노아 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "범인: 노아"
   ],
   "false_cards": [
    "arisa",
    "hanna",
    "noah"
   ],
   "worlds": 3,
   "logic": {
    "arisa": [
     "either",
     [
      "coco",
      "hanna"
     ]
    ],
    "hanna": [
     "deny",
     [
      "noah"
     ]
    ],
    "ema": [
     "culprit_is",
     [
      "noah"
     ]
    ],
    "noah": [
     "either",
     [
      "anan",
      "coco"
     ]
    ],
    "anan": [
     "deny_self",
     []
    ],
    "coco": [
     "either",
     [
      "hanna",
      "noah"
     ]
    ]
   },
   "magic_ids": [
    "anan"
   ]
  },
  {
   "id": "daily-25",
   "tier": "normal",
   "incident": "셰리가 아끼는 화분이 엎어져 있었다.",
   "verb": "엎었어",
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
     "says": "단언하지! 범인은 코코다!"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "아저씨 아니면 코코쨩이 엎었어."
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "미리아 말은 맞음 ㅇㅈ"
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "미리아쨩은 안 엎었어."
    }
   ],
   "answer": "miria",
   "why_not": {
    "reia": "레이아가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "coco": "코코가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "margo": "마고가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 레이아, 마고",
    "레이아 이름으로 나온 말은 사실 마고의 흉내였다.",
    "범인: 미리아"
   ],
   "false_cards": [
    "reia",
    "margo"
   ],
   "worlds": 1,
   "logic": {
    "reia": [
     "culprit_is",
     [
      "coco"
     ]
    ],
    "miria": [
     "self_or",
     [
      "coco"
     ]
    ],
    "coco": [
     "meta_true",
     [
      "miria"
     ]
    ],
    "margo": [
     "deny",
     [
      "miria"
     ]
    ]
   },
   "magic_ids": [
    "margo"
   ]
  },
  {
   "id": "daily-26",
   "tier": "hard",
   "incident": "메루루의 반창고 상자가 텅 비어 있었다.",
   "verb": "다 썼어",
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
   "id": "daily-27",
   "tier": "normal",
   "incident": "도서실 책이 전부 거꾸로 꽂혀 있었다.",
   "verb": "거꾸로 꽂았어",
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
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "난 사에키와 영혼이 바뀌어 있어."
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
     "says": "아리사가 거꾸로 꽂았노라."
    }
   ],
   "answer": "anan",
   "why_not": {
    "miria": "미리아가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "sherry": "셰리가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "ema": "에마가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 안안",
    "미리아와 아리사는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 아리사의 말, 아리사 이름의 말은 미리아의 말이었다.",
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
    "arisa": [
     "swap_claim",
     [
      "arisa"
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
      "arisa"
     ]
    ]
   },
   "magic_ids": [
    "miria"
   ]
  },
  {
   "id": "daily-28",
   "tier": "hard",
   "incident": "식당의 홍차가 한 방울도 남지 않았다.",
   "verb": "다 마셨어",
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
     "says": "범인은 안안임 빼박"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "안안쨩의 말은 맞아."
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "코코의 말은 옳도다."
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "범인은 한나쨩이야♡"
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "미리아 씨가 다 마셨사와요!"
    }
   ],
   "answer": "miria",
   "why_not": {
    "coco": "코코가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 0명 또는 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "margo": "마고가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "hanna": "한나가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 코코, 미리아, 안안, 마고",
    "코코, 미리아, 마고 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "마고가 누구 흉내를 냈는지(냈는지 아닌지도)는 말만으로는 정해지지 않는다.",
    "범인: 미리아"
   ],
   "false_cards": [
    "coco",
    "miria",
    "anan",
    "margo"
   ],
   "worlds": 4,
   "logic": {
    "coco": [
     "culprit_is",
     [
      "anan"
     ]
    ],
    "miria": [
     "meta_true",
     [
      "anan"
     ]
    ],
    "anan": [
     "meta_true",
     [
      "coco"
     ]
    ],
    "margo": [
     "culprit_is",
     [
      "hanna"
     ]
    ],
    "hanna": [
     "accuse",
     [
      "miria"
     ]
    ]
   },
   "magic_ids": [
    "anan",
    "margo"
   ]
  },
  {
   "id": "daily-29",
   "tier": "normal",
   "incident": "에마의 일기장이 누군가에게 몰래 펼쳐져 있었다.",
   "verb": "펼쳐 봤어",
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
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "범인은 노아임 빼박"
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "코코쨩의 말은 틀렸어~"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "이 몸은 안 봤노라."
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "범인은 코코쨩이야♡"
    },
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "나츠메 아니면 호쇼가 펼쳐 봤어."
    }
   ],
   "answer": "margo",
   "why_not": {
    "coco": "코코가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "noah": "노아가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 코코, 마고",
    "코코 이름으로 나온 말은 사실 마고의 흉내였다.",
    "범인: 마고"
   ],
   "false_cards": [
    "coco",
    "margo"
   ],
   "worlds": 1,
   "logic": {
    "coco": [
     "culprit_is",
     [
      "noah"
     ]
    ],
    "noah": [
     "meta_false",
     [
      "coco"
     ]
    ],
    "anan": [
     "deny_self",
     []
    ],
    "margo": [
     "culprit_is",
     [
      "coco"
     ]
    ],
    "arisa": [
     "either",
     [
      "anan",
      "margo"
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
   "incident": "셰리가 아끼는 화분이 엎어져 있었다.",
   "verb": "엎었어",
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
     "says": "메루루쨩은 안 엎었어."
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "저, 저는 안 엎었어요…"
    },
    {
     "id": "nanoka",
     "name": "나노카",
     "full": "쿠로베 나노카",
     "written": false,
     "says": "한나 아니면 메루루가 엎었어."
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "메루루의 말은 옳도다."
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "범인은 마고 씨이와요!"
    }
   ],
   "answer": "meruru",
   "why_not": {
    "margo": "마고가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "nanoka": "나노카가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "hanna": "한나가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 마고가 누구 흉내를 냈다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 마고, 메루루, 안안, 한나",
    "마고, 메루루, 한나 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "마고가 누구 흉내를 냈는지(냈는지 아닌지도)는 말만으로는 정해지지 않는다.",
    "범인: 메루루"
   ],
   "false_cards": [
    "margo",
    "meruru",
    "anan",
    "hanna"
   ],
   "worlds": 4,
   "logic": {
    "margo": [
     "deny",
     [
      "meruru"
     ]
    ],
    "meruru": [
     "deny_self",
     []
    ],
    "nanoka": [
     "either",
     [
      "hanna",
      "meruru"
     ]
    ],
    "anan": [
     "meta_true",
     [
      "meruru"
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
    "anan",
    "margo"
   ]
  },
  {
   "id": "daily-31",
   "tier": "normal",
   "incident": "레이아의 거울에 립스틱으로 낙서가 되어 있었다.",
   "verb": "낙서했어",
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
     "says": "코, 코코 씨는 안 그랬어요…"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "아저씨 아니면 코코쨩이 낙서했어."
    },
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "나 아니면 메루루쨩이 낙서했어!"
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "미리아와 에마는 영혼이 바뀌어 있음 ㄹㅇ"
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "범인은 미리아쨩이야♡"
    }
   ],
   "answer": "miria",
   "why_not": {
    "meruru": "메루루가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "ema": "에마가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "coco": "코코가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "margo": "마고가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 에마",
    "미리아와 에마는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 에마의 말, 에마 이름의 말은 미리아의 말이었다.",
    "범인: 미리아"
   ],
   "false_cards": [
    "ema"
   ],
   "worlds": 1,
   "logic": {
    "meruru": [
     "deny",
     [
      "coco"
     ]
    ],
    "miria": [
     "self_or",
     [
      "coco"
     ]
    ],
    "ema": [
     "self_or",
     [
      "meruru"
     ]
    ],
    "coco": [
     "swap_claim",
     [
      "ema"
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
    "miria"
   ]
  },
  {
   "id": "daily-32",
   "tier": "hard",
   "incident": "레이아의 거울에 립스틱으로 낙서가 되어 있었다.",
   "verb": "낙서했어",
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
     "says": "한나쨩 아니면 메루루쨩이 낙서했어."
    },
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "마고쨩이 낙서했어!"
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "에마 씨 아니면 마고 씨가 낙서했사와요!"
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "저, 저 아니면 마고 씨가 낙서했어요…"
    },
    {
     "id": "nanoka",
     "name": "나노카",
     "full": "쿠로베 나노카",
     "written": false,
     "says": "한나 말은 맞아."
    }
   ],
   "answer": "ema",
   "why_not": {
    "margo": "마고가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "hanna": "한나가 범인이라면 거짓말하는 사람이 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "meruru": "메루루가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "nanoka": "나노카가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 마고, 에마, 메루루",
    "마고가 누구 흉내를 냈는지(냈는지 아닌지도)는 말만으로는 정해지지 않는다.",
    "범인: 에마"
   ],
   "false_cards": [
    "margo",
    "ema",
    "meruru"
   ],
   "worlds": 2,
   "logic": {
    "margo": [
     "either",
     [
      "hanna",
      "meruru"
     ]
    ],
    "ema": [
     "accuse",
     [
      "margo"
     ]
    ],
    "hanna": [
     "either",
     [
      "ema",
      "margo"
     ]
    ],
    "meruru": [
     "self_or",
     [
      "margo"
     ]
    ],
    "nanoka": [
     "meta_true",
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
   "id": "daily-33",
   "tier": "normal",
   "incident": "노아의 스케치북에 누가 낙서를 했다.",
   "verb": "낙서했어",
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
     "says": "아아, 셰리의 말은 맞다!"
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "저, 저는 낙서 안 했어요…"
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "범인은 메루루쨩이야♡"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "범인은 마고쨩이야."
    },
    {
     "id": "sherry",
     "name": "셰리",
     "full": "타치바나 셰리",
     "written": false,
     "says": "명탐정의 추리로는, 범인은 미리아 씨예요!"
    }
   ],
   "answer": "miria",
   "why_not": {
    "reia": "레이아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "meruru": "메루루가 범인이라면 거짓말하는 사람이 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "margo": "마고가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "sherry": "셰리가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 마고, 미리아",
    "미리아 이름으로 나온 말은 사실 마고의 흉내였다.",
    "범인: 미리아"
   ],
   "false_cards": [
    "margo",
    "miria"
   ],
   "worlds": 1,
   "logic": {
    "reia": [
     "meta_true",
     [
      "sherry"
     ]
    ],
    "meruru": [
     "deny_self",
     []
    ],
    "margo": [
     "culprit_is",
     [
      "meruru"
     ]
    ],
    "miria": [
     "culprit_is",
     [
      "margo"
     ]
    ],
    "sherry": [
     "culprit_is",
     [
      "miria"
     ]
    ]
   },
   "magic_ids": [
    "margo"
   ]
  },
  {
   "id": "daily-34",
   "tier": "hard",
   "incident": "레이아의 거울에 립스틱으로 낙서가 되어 있었다.",
   "verb": "낙서했어",
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
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "마고쨩의 말은 맞아!"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "노아쨩은 안 그랬어."
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "안안쨩의 말은 맞아~"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "미리아와 마고는 영혼이 바뀌어 있노라."
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "에마쨩이 낙서했어♡"
    }
   ],
   "answer": "noah",
   "why_not": {
    "ema": "에마가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 1명 또는 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 1명 또는 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "margo": "마고가 범인이라면 거짓말하는 사람이 1명 또는 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 에마, 미리아, 마고",
    "에마, 미리아, 마고 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "미리아와 마고는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 마고의 말, 마고 이름의 말은 미리아의 말이었다.",
    "범인: 노아"
   ],
   "false_cards": [
    "ema",
    "miria",
    "margo"
   ],
   "worlds": 3,
   "logic": {
    "ema": [
     "meta_true",
     [
      "margo"
     ]
    ],
    "miria": [
     "deny",
     [
      "noah"
     ]
    ],
    "noah": [
     "meta_true",
     [
      "anan"
     ]
    ],
    "anan": [
     "swap_claim",
     [
      "margo"
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
    "anan",
    "miria"
   ]
  },
  {
   "id": "daily-35",
   "tier": "normal",
   "incident": "나노카가 만들어 둔 과자가 감쪽같이 사라졌다.",
   "verb": "먹었어",
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
     "says": "한나는 안 먹었노라."
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "안안 말은 맞음 ㅇㅈ"
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "범인은 안안 씨이와요!"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "아저씨는 안 먹었어."
    }
   ],
   "answer": "hanna",
   "why_not": {
    "anan": "안안이 범인이라면 말들이 서로 어긋나 버린다 (안안의 세뇌를 누구에게 걸었다고 해도).",
    "coco": "코코가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 안안, 코코, 한나",
    "코코, 한나 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "범인: 한나"
   ],
   "false_cards": [
    "anan",
    "coco",
    "hanna"
   ],
   "worlds": 2,
   "logic": {
    "anan": [
     "deny",
     [
      "hanna"
     ]
    ],
    "coco": [
     "meta_true",
     [
      "anan"
     ]
    ],
    "hanna": [
     "culprit_is",
     [
      "anan"
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
   "id": "daily-36",
   "tier": "hard",
   "incident": "레이아의 거울에 립스틱으로 낙서가 되어 있었다.",
   "verb": "낙서했어",
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
     "says": "나 아니면 토노가 낙서했어."
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "안, 안안 씨의 말은 맞아요…"
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "나 아니면 메루루 씨가 낙서했사와요!"
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "메루루가 낙서했음 ㅋㅋ"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "범인은 메루루로다."
    }
   ],
   "answer": "hanna",
   "why_not": {
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "meruru": "메루루가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "coco": "코코가 범인이라면 거짓말하는 사람이 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 메루루, 코코, 안안",
    "메루루, 코코 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "범인: 한나"
   ],
   "false_cards": [
    "meruru",
    "coco",
    "anan"
   ],
   "worlds": 2,
   "logic": {
    "arisa": [
     "self_or",
     [
      "hanna"
     ]
    ],
    "meruru": [
     "meta_true",
     [
      "anan"
     ]
    ],
    "hanna": [
     "self_or",
     [
      "meruru"
     ]
    ],
    "coco": [
     "accuse",
     [
      "meruru"
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
    "anan"
   ]
  },
  {
   "id": "daily-37",
   "tier": "normal",
   "incident": "도서실 책이 전부 거꾸로 꽂혀 있었다.",
   "verb": "거꾸로 꽂았어",
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
     "says": "아리사 아니면 마고가 거꾸로 꽂았노라."
    },
    {
     "id": "nanoka",
     "name": "나노카",
     "full": "쿠로베 나노카",
     "written": false,
     "says": "코코 말은 틀렸어."
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "안안 아니면 아리사가 거꾸로 꽂았음 ㅇㅇ"
    },
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "사와타리는 안 그랬어."
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "후후, 나는 안 그랬어."
    }
   ],
   "answer": "coco",
   "why_not": {
    "anan": "안안이 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "nanoka": "나노카가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "margo": "마고가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 안안, 코코, 아리사",
    "코코, 아리사 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "범인: 코코"
   ],
   "false_cards": [
    "anan",
    "coco",
    "arisa"
   ],
   "worlds": 2,
   "logic": {
    "anan": [
     "either",
     [
      "arisa",
      "margo"
     ]
    ],
    "nanoka": [
     "meta_false",
     [
      "coco"
     ]
    ],
    "coco": [
     "either",
     [
      "anan",
      "arisa"
     ]
    ],
    "arisa": [
     "deny",
     [
      "coco"
     ]
    ],
    "margo": [
     "deny_self",
     []
    ]
   },
   "magic_ids": [
    "anan"
   ]
  },
  {
   "id": "daily-38",
   "tier": "hard",
   "incident": "한나의 리본 하나가 없어졌다.",
   "verb": "가져갔어",
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
     "says": "이 몸 아니면 메루루가 가져갔노라."
    },
    {
     "id": "nanoka",
     "name": "나노카",
     "full": "쿠로베 나노카",
     "written": false,
     "says": "범인은 미리아야."
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "미리아와 나노카는 영혼이 바뀌어 있음 ㄹㅇ"
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "안안쨩이 가져갔어~"
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "범, 범인은 코코 씨예요…"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "범인은 나노카쨩이야."
    }
   ],
   "answer": "anan",
   "why_not": {
    "nanoka": "나노카가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "coco": "코코가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "noah": "노아가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "meruru": "메루루가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 나노카, 메루루, 미리아",
    "나노카, 메루루, 미리아 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "미리아와 나노카는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 나노카의 말, 나노카 이름의 말은 미리아의 말이었다.",
    "범인: 안안"
   ],
   "false_cards": [
    "nanoka",
    "meruru",
    "miria"
   ],
   "worlds": 3,
   "logic": {
    "anan": [
     "self_or",
     [
      "meruru"
     ]
    ],
    "nanoka": [
     "culprit_is",
     [
      "miria"
     ]
    ],
    "coco": [
     "swap_claim",
     [
      "nanoka"
     ]
    ],
    "noah": [
     "accuse",
     [
      "anan"
     ]
    ],
    "meruru": [
     "culprit_is",
     [
      "coco"
     ]
    ],
    "miria": [
     "culprit_is",
     [
      "nanoka"
     ]
    ]
   },
   "magic_ids": [
    "anan",
    "miria"
   ]
  },
  {
   "id": "daily-39",
   "tier": "normal",
   "incident": "레이아의 거울에 립스틱으로 낙서가 되어 있었다.",
   "verb": "낙서했어",
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
     "id": "sherry",
     "name": "셰리",
     "full": "타치바나 셰리",
     "written": false,
     "says": "코코 씨 아니면 마고 씨가 낙서했어요!"
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "셰리 말은 틀렸음 ㅋㅋ"
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "범인은 코코쨩이야♡"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "이 몸 아니면 나노카가 낙서했노라."
    },
    {
     "id": "nanoka",
     "name": "나노카",
     "full": "쿠로베 나노카",
     "written": false,
     "says": "안안은 안 그랬어."
    }
   ],
   "answer": "nanoka",
   "why_not": {
    "sherry": "셰리가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "coco": "코코가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "margo": "마고가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 셰리, 마고",
    "셰리 이름으로 나온 말은 사실 마고의 흉내였다.",
    "범인: 나노카"
   ],
   "false_cards": [
    "sherry",
    "margo"
   ],
   "worlds": 1,
   "logic": {
    "sherry": [
     "either",
     [
      "coco",
      "margo"
     ]
    ],
    "coco": [
     "meta_false",
     [
      "sherry"
     ]
    ],
    "margo": [
     "culprit_is",
     [
      "coco"
     ]
    ],
    "anan": [
     "self_or",
     [
      "nanoka"
     ]
    ],
    "nanoka": [
     "deny",
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
   "id": "daily-40",
   "tier": "hard",
   "incident": "레이아의 거울에 립스틱으로 낙서가 되어 있었다.",
   "verb": "낙서했어",
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
     "says": "마고 말은 틀렸음 ㅋㅋ"
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "미리아 씨가 낙서했사와요!"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "한나쨩의 말은 맞아."
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "범, 범인은 코코 씨예요…"
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "코코쨩이 낙서했어♡"
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "노아 아니면 한나쨩이 낙서했어~"
    }
   ],
   "answer": "miria",
   "why_not": {
    "coco": "코코가 범인이라면 거짓말하는 사람이 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "hanna": "한나가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "meruru": "메루루가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "margo": "마고가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "noah": "노아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 메루루, 마고, 노아",
    "마고가 누구 흉내를 냈는지(냈는지 아닌지도)는 말만으로는 정해지지 않는다.",
    "범인: 미리아"
   ],
   "false_cards": [
    "meruru",
    "margo",
    "noah"
   ],
   "worlds": 2,
   "logic": {
    "coco": [
     "meta_false",
     [
      "margo"
     ]
    ],
    "hanna": [
     "accuse",
     [
      "miria"
     ]
    ],
    "miria": [
     "meta_true",
     [
      "hanna"
     ]
    ],
    "meruru": [
     "culprit_is",
     [
      "coco"
     ]
    ],
    "margo": [
     "accuse",
     [
      "coco"
     ]
    ],
    "noah": [
     "self_or",
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
   "id": "daily-41",
   "tier": "normal",
   "incident": "에마의 일기장이 누군가에게 몰래 펼쳐져 있었다.",
   "verb": "펼쳐 봤어",
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
     "says": "후후, 나노카쨩의 말은 틀렸어."
    },
    {
     "id": "nanoka",
     "name": "나노카",
     "full": "쿠로베 나노카",
     "written": false,
     "says": "마고는 안 봤어."
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "범인은 나노카 씨이와요!"
    },
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "범인은 호쇼야. 됐냐?"
    }
   ],
   "answer": "nanoka",
   "why_not": {
    "margo": "마고가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "hanna": "한나가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 마고, 아리사",
    "아리사 이름으로 나온 말은 사실 마고의 흉내였다.",
    "범인: 나노카"
   ],
   "false_cards": [
    "margo",
    "arisa"
   ],
   "worlds": 1,
   "logic": {
    "margo": [
     "meta_false",
     [
      "nanoka"
     ]
    ],
    "nanoka": [
     "deny",
     [
      "margo"
     ]
    ],
    "hanna": [
     "culprit_is",
     [
      "nanoka"
     ]
    ],
    "arisa": [
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
   "id": "daily-42",
   "tier": "hard",
   "incident": "미리아의 머리핀이 짝짝이로 바뀌어 있었다.",
   "verb": "바꿔 놨어",
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
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "안안쨩은 안 바꿨어."
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "안안쨩의 말은 맞아~"
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "마고 씨가 바꿔 놨사와요!"
    },
    {
     "id": "sherry",
     "name": "셰리",
     "full": "타치바나 셰리",
     "written": false,
     "says": "한나 씨 아니면 마고 씨가 바꿔 놨어요!"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "범인은 셰리로다."
    }
   ],
   "answer": "hanna",
   "why_not": {
    "margo": "마고가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "noah": "노아가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "sherry": "셰리가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 노아, 한나, 안안",
    "노아, 한나 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "범인: 한나"
   ],
   "false_cards": [
    "noah",
    "hanna",
    "anan"
   ],
   "worlds": 2,
   "logic": {
    "margo": [
     "deny",
     [
      "anan"
     ]
    ],
    "noah": [
     "meta_true",
     [
      "anan"
     ]
    ],
    "hanna": [
     "accuse",
     [
      "margo"
     ]
    ],
    "sherry": [
     "either",
     [
      "hanna",
      "margo"
     ]
    ],
    "anan": [
     "culprit_is",
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
   "id": "daily-43",
   "tier": "normal",
   "incident": "식당의 홍차가 한 방울도 남지 않았다.",
   "verb": "다 마셨어",
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
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "저, 저 아니면 마고 씨가 다 마셨어요…"
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "후후, 나는 안 마셨어."
    },
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "단언하지! 아리사가 다 마셨다!"
    },
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "호쇼 아니면 하스미가 다 마셨어."
    }
   ],
   "answer": "margo",
   "why_not": {
    "meruru": "메루루가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "reia": "레이아가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 마고, 레이아",
    "레이아 이름으로 나온 말은 사실 마고의 흉내였다.",
    "범인: 마고"
   ],
   "false_cards": [
    "margo",
    "reia"
   ],
   "worlds": 1,
   "logic": {
    "meruru": [
     "self_or",
     [
      "margo"
     ]
    ],
    "margo": [
     "deny_self",
     []
    ],
    "reia": [
     "accuse",
     [
      "arisa"
     ]
    ],
    "arisa": [
     "either",
     [
      "margo",
      "reia"
     ]
    ]
   },
   "magic_ids": [
    "margo"
   ]
  },
  {
   "id": "daily-44",
   "tier": "hard",
   "incident": "셰리가 아끼는 화분이 엎어져 있었다.",
   "verb": "엎었어",
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
     "says": "사와타리 새끼가 엎었어."
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "아리사 아니면 미리아가 엎었노라."
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "미리아 말은 맞음 ㅇㅈ"
    },
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "나 아니면 미리아가 엎었다!"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "안안쨩 아니면 아리사쨩이 엎었어."
    },
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "나 아니면 코코쨩이 엎었어!"
    }
   ],
   "answer": "arisa",
   "why_not": {
    "anan": "안안이 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "coco": "코코가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "reia": "레이아가 범인이라면 거짓말하는 사람이 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "ema": "에마가 범인이라면 거짓말하는 사람이 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 아리사, 레이아, 에마",
    "아리사, 레이아, 에마 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "범인: 아리사"
   ],
   "false_cards": [
    "arisa",
    "reia",
    "ema"
   ],
   "worlds": 3,
   "logic": {
    "arisa": [
     "accuse",
     [
      "coco"
     ]
    ],
    "anan": [
     "either",
     [
      "arisa",
      "miria"
     ]
    ],
    "coco": [
     "meta_true",
     [
      "miria"
     ]
    ],
    "reia": [
     "self_or",
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
    "ema": [
     "self_or",
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
   "id": "daily-45",
   "tier": "normal",
   "incident": "나노카가 만들어 둔 과자가 감쪽같이 사라졌다.",
   "verb": "먹었어",
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
     "says": "한나는 안 먹었노라."
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "아저씨 아니면 안안쨩이 먹었어."
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "미, 미리아 씨의 말은 틀렸어요… 죄, 죄송해요…"
    },
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "사에키와 나츠메는 영혼이 바뀌어 있어."
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "나 아니면 메루루 씨가 먹었사와요!"
    }
   ],
   "answer": "meruru",
   "why_not": {
    "anan": "안안이 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "hanna": "한나가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 미리아",
    "미리아와 안안은 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 안안의 말, 안안 이름의 말은 미리아의 말이었다.",
    "범인: 메루루"
   ],
   "false_cards": [
    "miria"
   ],
   "worlds": 1,
   "logic": {
    "anan": [
     "deny",
     [
      "hanna"
     ]
    ],
    "miria": [
     "self_or",
     [
      "anan"
     ]
    ],
    "meruru": [
     "meta_false",
     [
      "miria"
     ]
    ],
    "arisa": [
     "swap_claim",
     [
      "anan"
     ]
    ],
    "hanna": [
     "self_or",
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
   "id": "daily-46",
   "tier": "hard",
   "incident": "메루루의 반창고 상자가 텅 비어 있었다.",
   "verb": "다 썼어",
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
     "says": "범인은 코코쨩이야♡"
    },
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "범인은 사에키야. 됐냐?"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "이 몸 아니면 코코가 다 썼노라."
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "미리아쨩과 아리사쨩은 영혼이 바뀌어 있어~"
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "나 아니면 안안이 다 썼음"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "범인은 아리사쨩이야."
    }
   ],
   "answer": "coco",
   "why_not": {
    "margo": "마고가 범인이라면 거짓말하는 사람이 5명 또는 6명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "noah": "노아가 범인이라면 거짓말하는 사람이 5명 또는 6명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 아리사, 미리아",
    "미리아와 아리사는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 아리사의 말, 아리사 이름의 말은 미리아의 말이었다.",
    "범인: 코코"
   ],
   "false_cards": [
    "arisa",
    "miria"
   ],
   "worlds": 1,
   "logic": {
    "margo": [
     "culprit_is",
     [
      "coco"
     ]
    ],
    "arisa": [
     "culprit_is",
     [
      "miria"
     ]
    ],
    "anan": [
     "self_or",
     [
      "coco"
     ]
    ],
    "noah": [
     "swap_claim",
     [
      "arisa"
     ]
    ],
    "coco": [
     "self_or",
     [
      "anan"
     ]
    ],
    "miria": [
     "culprit_is",
     [
      "arisa"
     ]
    ]
   },
   "magic_ids": [
    "miria"
   ]
  },
  {
   "id": "daily-47",
   "tier": "normal",
   "incident": "메루루의 반창고 상자가 텅 비어 있었다.",
   "verb": "다 썼어",
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
     "says": "아리사쨩 아니면 마고쨩이 다 썼어!"
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "에마쨩의 말은 틀렸어~"
    },
    {
     "id": "sherry",
     "name": "셰리",
     "full": "타치바나 셰리",
     "written": false,
     "says": "저는 안 썼어요!"
    },
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "호쇼 새끼가 다 썼어."
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "아리사쨩 아니면 노아쨩이 다 썼어."
    }
   ],
   "answer": "margo",
   "why_not": {
    "ema": "에마가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "noah": "노아가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "sherry": "셰리가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해."
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
    "ema": [
     "either",
     [
      "arisa",
      "margo"
     ]
    ],
    "noah": [
     "meta_false",
     [
      "ema"
     ]
    ],
    "sherry": [
     "deny_self",
     []
    ],
    "arisa": [
     "accuse",
     [
      "margo"
     ]
    ],
    "margo": [
     "either",
     [
      "arisa",
      "noah"
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
   "incident": "방송 중이던 코코의 장비 전원을 누군가 꺼 버렸다.",
   "verb": "껐어",
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
     "says": "나 아니면 레이아 씨가 껐사와요!"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "이 몸은 안 껐노라."
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "미리아쨩의 말은 틀렸어~"
    },
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "아아, 노아의 말은 맞다!"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "안안쨩 아니면 노아쨩이 껐어."
    }
   ],
   "answer": "noah",
   "why_not": {
    "hanna": "한나가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "reia": "레이아가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 한나, 노아, 레이아",
    "한나, 노아, 레이아 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "범인: 노아"
   ],
   "false_cards": [
    "hanna",
    "noah",
    "reia"
   ],
   "worlds": 3,
   "logic": {
    "hanna": [
     "self_or",
     [
      "reia"
     ]
    ],
    "anan": [
     "deny_self",
     []
    ],
    "noah": [
     "meta_false",
     [
      "miria"
     ]
    ],
    "reia": [
     "meta_true",
     [
      "noah"
     ]
    ],
    "miria": [
     "either",
     [
      "anan",
      "noah"
     ]
    ]
   },
   "magic_ids": [
    "anan"
   ]
  },
  {
   "id": "daily-49",
   "tier": "normal",
   "incident": "노아의 스케치북에 누가 낙서를 했다.",
   "verb": "낙서했어",
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
     "id": "nanoka",
     "name": "나노카",
     "full": "쿠로베 나노카",
     "written": false,
     "says": "나 아니면 레이아가 낙서했어."
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "범인은 나노카로다."
    },
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "안안 아니면 코코가 낙서했다!"
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "안안 아니면 나노카가 낙서했음 ㅇㅇ"
    }
   ],
   "answer": "anan",
   "why_not": {
    "nanoka": "나노카가 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해.",
    "reia": "레이아가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해.",
    "coco": "코코가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 나노카, 안안",
    "나노카는 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다.",
    "범인: 안안"
   ],
   "false_cards": [
    "nanoka",
    "anan"
   ],
   "worlds": 1,
   "logic": {
    "nanoka": [
     "self_or",
     [
      "reia"
     ]
    ],
    "anan": [
     "culprit_is",
     [
      "nanoka"
     ]
    ],
    "reia": [
     "either",
     [
      "anan",
      "coco"
     ]
    ],
    "coco": [
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
   "id": "daily-50",
   "tier": "hard",
   "incident": "메루루의 반창고 상자가 텅 비어 있었다.",
   "verb": "다 썼어",
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
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "나노카쨩의 말은 맞아."
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "범인은 한나로다."
    },
    {
     "id": "nanoka",
     "name": "나노카",
     "full": "쿠로베 나노카",
     "written": false,
     "says": "안안 말은 맞아."
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "안안 씨가 다 썼사와요!"
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "노아는 미리아쨩과 영혼이 바뀌어 있어~"
    }
   ],
   "answer": "anan",
   "why_not": {
    "miria": "미리아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "nanoka": "나노카가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "hanna": "한나가 범인이라면 거짓말하는 사람이 0명 또는 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "noah": "노아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도, 미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 미리아, 안안, 나노카",
    "나노카, 노아 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "미리아와 노아는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 노아의 말, 노아 이름의 말은 미리아의 말이었다.",
    "범인: 안안"
   ],
   "false_cards": [
    "miria",
    "anan",
    "nanoka"
   ],
   "worlds": 2,
   "logic": {
    "miria": [
     "meta_true",
     [
      "nanoka"
     ]
    ],
    "anan": [
     "culprit_is",
     [
      "hanna"
     ]
    ],
    "nanoka": [
     "meta_true",
     [
      "anan"
     ]
    ],
    "hanna": [
     "accuse",
     [
      "anan"
     ]
    ],
    "noah": [
     "swap_claim",
     [
      "noah"
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
   "incident": "셰리가 아끼는 화분이 엎어져 있었다.",
   "verb": "엎었어",
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
     "says": "범인은 코코쨩이야♡"
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "오호호, 미리아 씨의 말은 틀렸사와요!"
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "마고가 엎었음 ㅋㅋ"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "코코쨩은 안 엎었어."
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "저, 저는 안 엎었어요…"
    }
   ],
   "answer": "margo",
   "why_not": {
    "hanna": "한나가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "coco": "코코가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "meruru": "메루루가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 마고, 한나",
    "한나 이름으로 나온 말은 사실 마고의 흉내였다.",
    "범인: 마고"
   ],
   "false_cards": [
    "margo",
    "hanna"
   ],
   "worlds": 1,
   "logic": {
    "margo": [
     "culprit_is",
     [
      "coco"
     ]
    ],
    "hanna": [
     "meta_false",
     [
      "miria"
     ]
    ],
    "coco": [
     "accuse",
     [
      "margo"
     ]
    ],
    "miria": [
     "deny",
     [
      "coco"
     ]
    ],
    "meruru": [
     "deny_self",
     []
    ]
   },
   "magic_ids": [
    "margo"
   ]
  },
  {
   "id": "daily-52",
   "tier": "hard",
   "incident": "메루루의 반창고 상자가 텅 비어 있었다.",
   "verb": "다 썼어",
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
     "says": "마고쨩의 말은 틀렸어."
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "미리아 씨와 마고 씨는 영혼이 바뀌어 있사와요!"
    },
    {
     "id": "sherry",
     "name": "셰리",
     "full": "타치바나 셰리",
     "written": false,
     "says": "코코 씨의 말은 틀렸어요!"
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "범인은 한나쨩이야~"
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "셰리쨩은 안 썼어."
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "미리아 아니면 노아가 다 썼음 ㅇㅇ"
    }
   ],
   "answer": "hanna",
   "why_not": {
    "miria": "미리아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "sherry": "셰리가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "noah": "노아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "margo": "마고가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "coco": "코코가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 미리아, 코코",
    "미리아와 마고는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 마고의 말, 마고 이름의 말은 미리아의 말이었다.",
    "범인: 한나"
   ],
   "false_cards": [
    "miria",
    "coco"
   ],
   "worlds": 1,
   "logic": {
    "miria": [
     "meta_false",
     [
      "margo"
     ]
    ],
    "hanna": [
     "swap_claim",
     [
      "margo"
     ]
    ],
    "sherry": [
     "meta_false",
     [
      "coco"
     ]
    ],
    "noah": [
     "culprit_is",
     [
      "hanna"
     ]
    ],
    "margo": [
     "deny",
     [
      "sherry"
     ]
    ],
    "coco": [
     "either",
     [
      "miria",
      "noah"
     ]
    ]
   },
   "magic_ids": [
    "miria"
   ]
  },
  {
   "id": "daily-53",
   "tier": "normal",
   "incident": "한나의 리본 하나가 없어졌다.",
   "verb": "가져갔어",
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
     "says": "미리아는 안 가져갔노라."
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "후후, 안안쨩의 말은 맞아."
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "안안쨩 아니면 마고쨩이 가져갔어."
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "마, 마고 씨는 안 가져갔어요…"
    }
   ],
   "answer": "miria",
   "why_not": {
    "anan": "안안이 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "margo": "마고가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해.",
    "meruru": "메루루가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 안안, 마고, 미리아",
    "미리아 이름으로 나온 말은 사실 마고의 흉내였다.",
    "범인: 미리아"
   ],
   "false_cards": [
    "anan",
    "margo",
    "miria"
   ],
   "worlds": 1,
   "logic": {
    "anan": [
     "deny",
     [
      "miria"
     ]
    ],
    "margo": [
     "meta_true",
     [
      "anan"
     ]
    ],
    "miria": [
     "either",
     [
      "anan",
      "margo"
     ]
    ],
    "meruru": [
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
   "id": "daily-54",
   "tier": "hard",
   "incident": "에마의 일기장이 누군가에게 몰래 펼쳐져 있었다.",
   "verb": "펼쳐 봤어",
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
     "says": "나 아니면 코코가 펼쳐 봤다!"
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "안안쨩은 안 봤어~"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "코코의 말은 그릇되었도다."
    },
    {
     "id": "sherry",
     "name": "셰리",
     "full": "타치바나 셰리",
     "written": false,
     "says": "코코 씨의 말은 맞아요!"
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "셰리가 펼쳐 봤음 ㅋㅋ"
    }
   ],
   "answer": "noah",
   "why_not": {
    "reia": "레이아가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "sherry": "셰리가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "coco": "코코가 범인이라면 거짓말하는 사람이 1명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 레이아, 셰리, 코코",
    "레이아, 셰리, 코코 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "범인: 노아"
   ],
   "false_cards": [
    "reia",
    "sherry",
    "coco"
   ],
   "worlds": 3,
   "logic": {
    "reia": [
     "self_or",
     [
      "coco"
     ]
    ],
    "noah": [
     "deny",
     [
      "anan"
     ]
    ],
    "anan": [
     "meta_false",
     [
      "coco"
     ]
    ],
    "sherry": [
     "meta_true",
     [
      "coco"
     ]
    ],
    "coco": [
     "accuse",
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
   "id": "daily-55",
   "tier": "normal",
   "incident": "레이아의 거울에 립스틱으로 낙서가 되어 있었다.",
   "verb": "낙서했어",
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
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "마고 말은 틀렸음 ㅋㅋ"
    },
    {
     "id": "ema",
     "name": "에마",
     "full": "사쿠라바 에마",
     "written": false,
     "says": "나 아니면 마고쨩이 낙서했어!"
    },
    {
     "id": "nanoka",
     "name": "나노카",
     "full": "쿠로베 나노카",
     "written": false,
     "says": "마고가 낙서했어."
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "노아 아니면 에마쨩이 낙서했어~"
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "코코쨩 아니면 에마쨩이 낙서했어."
    }
   ],
   "answer": "margo",
   "why_not": {
    "coco": "코코가 범인이라면 거짓말하는 사람이 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "ema": "에마가 범인이라면 거짓말하는 사람이 2명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "nanoka": "나노카가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해.",
    "noah": "노아가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (마고가 누구 흉내를 냈다고 해도). 1명이어야 해."
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
    "coco": [
     "meta_false",
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
    "nanoka": [
     "accuse",
     [
      "margo"
     ]
    ],
    "noah": [
     "self_or",
     [
      "ema"
     ]
    ],
    "margo": [
     "either",
     [
      "coco",
      "ema"
     ]
    ]
   },
   "magic_ids": [
    "margo"
   ]
  },
  {
   "id": "daily-56",
   "tier": "hard",
   "incident": "방송 중이던 코코의 장비 전원을 누군가 꺼 버렸다.",
   "verb": "껐어",
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
     "says": "범인은 한나쨩이야!"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "레이아쨩의 말은 틀렸어."
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "미, 미리아 씨와 에마 씨는 영혼이 바뀌어 있어요…"
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "미리아가 껐노라."
    },
    {
     "id": "hanna",
     "name": "한나",
     "full": "토노 한나",
     "written": false,
     "says": "안안 씨 아니면 미리아 씨가 껐사와요!"
    },
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "나는 안 껐다! 이 무대에 맹세하지!"
    }
   ],
   "answer": "miria",
   "why_not": {
    "ema": "에마가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "meruru": "메루루가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "hanna": "한나가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "reia": "레이아가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 에마, 미리아",
    "미리아와 에마는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 에마의 말, 에마 이름의 말은 미리아의 말이었다.",
    "범인: 미리아"
   ],
   "false_cards": [
    "ema",
    "miria"
   ],
   "worlds": 1,
   "logic": {
    "ema": [
     "culprit_is",
     [
      "hanna"
     ]
    ],
    "miria": [
     "meta_false",
     [
      "reia"
     ]
    ],
    "meruru": [
     "swap_claim",
     [
      "ema"
     ]
    ],
    "anan": [
     "accuse",
     [
      "miria"
     ]
    ],
    "hanna": [
     "either",
     [
      "anan",
      "miria"
     ]
    ],
    "reia": [
     "deny_self",
     []
    ]
   },
   "magic_ids": [
    "miria"
   ]
  },
  {
   "id": "daily-57",
   "tier": "normal",
   "incident": "방송 중이던 코코의 장비 전원을 누군가 꺼 버렸다.",
   "verb": "껐어",
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
     "says": "아리사 말은 틀렸어."
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "나노카쨩이 껐어♡"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "아저씨는 레이아쨩과 영혼이 바뀌어 있어."
    },
    {
     "id": "reia",
     "name": "레이아",
     "full": "하스미 레이아",
     "written": false,
     "says": "미리아 아니면 나노카가 껐다!"
    },
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "난 사에키와 영혼이 바뀌어 있어."
    }
   ],
   "answer": "nanoka",
   "why_not": {
    "margo": "마고가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 2명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "reia": "레이아가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해.",
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 1명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 아리사",
    "미리아와 레이아는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 레이아의 말, 레이아 이름의 말은 미리아의 말이었다.",
    "범인: 나노카"
   ],
   "false_cards": [
    "arisa"
   ],
   "worlds": 1,
   "logic": {
    "nanoka": [
     "meta_false",
     [
      "arisa"
     ]
    ],
    "margo": [
     "accuse",
     [
      "nanoka"
     ]
    ],
    "miria": [
     "swap_claim",
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
    "arisa": [
     "swap_claim",
     [
      "arisa"
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
   "incident": "메루루의 반창고 상자가 텅 비어 있었다.",
   "verb": "다 썼어",
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
     "says": "아아, 미리아의 말은 맞다!"
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "마고 아니면 미리아가 다 썼음 ㅇㅇ"
    },
    {
     "id": "arisa",
     "name": "아리사",
     "full": "시토 아리사",
     "written": false,
     "says": "하스미는 안 썼어."
    },
    {
     "id": "margo",
     "name": "마고",
     "full": "호쇼 마고",
     "written": false,
     "says": "후후, 레이아쨩의 말은 맞아."
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "코코는 안 썼노라."
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "아저씨 아니면 안안쨩이 다 썼어."
    }
   ],
   "answer": "margo",
   "why_not": {
    "reia": "레이아가 범인이라면 거짓말하는 사람이 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "coco": "코코가 범인이라면 거짓말하는 사람이 4명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "arisa": "아리사가 범인이라면 거짓말하는 사람이 3명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 0명이 되어 버린다 (안안의 세뇌를 누구에게 걸었다고 해도). 2명이어야 해.",
    "miria": "미리아가 범인이라면 말들이 서로 어긋나 버린다 (안안의 세뇌를 누구에게 걸었다고 해도)."
   },
   "solution": [
    "틀린 말을 한 카드: 레이아, 마고, 미리아",
    "레이아, 마고, 미리아 중 한 명은 안안에게 세뇌당했을 뿐, 거짓말쟁이가 아니다. 누구인지는 말만으로는 알 수 없다.",
    "범인: 마고"
   ],
   "false_cards": [
    "reia",
    "margo",
    "miria"
   ],
   "worlds": 3,
   "logic": {
    "reia": [
     "meta_true",
     [
      "miria"
     ]
    ],
    "coco": [
     "either",
     [
      "margo",
      "miria"
     ]
    ],
    "arisa": [
     "deny",
     [
      "reia"
     ]
    ],
    "margo": [
     "meta_true",
     [
      "reia"
     ]
    ],
    "anan": [
     "deny",
     [
      "coco"
     ]
    ],
    "miria": [
     "self_or",
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
   "id": "daily-59",
   "tier": "normal",
   "incident": "아리사의 성냥갑이 텅 비어 있었다.",
   "verb": "가져갔어",
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
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "범, 범인은 나노카 씨예요…"
    },
    {
     "id": "nanoka",
     "name": "나노카",
     "full": "쿠로베 나노카",
     "written": false,
     "says": "코코 말은 맞아."
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "미리아와 메루루는 영혼이 바뀌어 있음 ㄹㅇ"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "코코쨩 아니면 메루루쨩이 가져갔어."
    }
   ],
   "answer": "miria",
   "why_not": {
    "meruru": "메루루가 범인이라면 거짓말하는 사람이 1명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "nanoka": "나노카가 범인이라면 거짓말하는 사람이 1명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "coco": "코코가 범인이라면 거짓말하는 사람이 1명 또는 3명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 메루루, 미리아",
    "미리아와 메루루는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 메루루의 말, 메루루 이름의 말은 미리아의 말이었다.",
    "범인: 미리아"
   ],
   "false_cards": [
    "meruru",
    "miria"
   ],
   "worlds": 1,
   "logic": {
    "meruru": [
     "culprit_is",
     [
      "nanoka"
     ]
    ],
    "nanoka": [
     "meta_true",
     [
      "coco"
     ]
    ],
    "coco": [
     "swap_claim",
     [
      "meruru"
     ]
    ],
    "miria": [
     "either",
     [
      "coco",
      "meruru"
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
   "incident": "레이아의 거울에 립스틱으로 낙서가 되어 있었다.",
   "verb": "낙서했어",
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
     "says": "범인은 코코쨩이야♡"
    },
    {
     "id": "miria",
     "name": "미리아",
     "full": "사에키 미리아",
     "written": false,
     "says": "노아쨩은 안 그랬어."
    },
    {
     "id": "anan",
     "name": "안안",
     "full": "나츠메 안안",
     "written": true,
     "says": "미리아와 메루루는 영혼이 바뀌어 있노라."
    },
    {
     "id": "meruru",
     "name": "메루루",
     "full": "히카미 메루루",
     "written": false,
     "says": "저, 저 아니면 안안 씨가 낙서했어요…"
    },
    {
     "id": "noah",
     "name": "노아",
     "full": "죠가사키 노아",
     "written": false,
     "says": "메루루쨩이 낙서했어~"
    },
    {
     "id": "coco",
     "name": "코코",
     "full": "사와타리 코코",
     "written": false,
     "says": "범인은 마고임 빼박"
    }
   ],
   "answer": "meruru",
   "why_not": {
    "margo": "마고가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "miria": "미리아가 범인이라면 거짓말하는 사람이 4명 또는 5명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "anan": "안안이 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "noah": "노아가 범인이라면 거짓말하는 사람이 5명 또는 6명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해.",
    "coco": "코코가 범인이라면 거짓말하는 사람이 3명 또는 4명이 되어 버린다 (미리아가 누구와 뒤바뀌었다고 해도). 2명이어야 해."
   },
   "solution": [
    "틀린 말을 한 카드: 마고, 코코",
    "미리아와 메루루는 영혼이 뒤바뀌어 있었다. 미리아 이름의 말은 메루루의 말, 메루루 이름의 말은 미리아의 말이었다.",
    "범인: 메루루"
   ],
   "false_cards": [
    "margo",
    "coco"
   ],
   "worlds": 1,
   "logic": {
    "margo": [
     "culprit_is",
     [
      "coco"
     ]
    ],
    "miria": [
     "deny",
     [
      "noah"
     ]
    ],
    "anan": [
     "swap_claim",
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
    "noah": [
     "accuse",
     [
      "meruru"
     ]
    ],
    "coco": [
     "culprit_is",
     [
      "margo"
     ]
    ]
   },
   "magic_ids": [
    "miria"
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
    "didnt": "안 먹었어"
   },
   {
    "id": "pot",
    "owner": "sherry",
    "text": "셰리가 아끼는 화분이 엎어져 있었다.",
    "did": "엎었어",
    "didnt": "안 엎었어"
   },
   {
    "id": "sketch",
    "owner": "noah",
    "text": "노아의 스케치북에 누가 낙서를 했다.",
    "did": "낙서했어",
    "didnt": "낙서 안 했어"
   },
   {
    "id": "tea",
    "owner": null,
    "text": "식당의 홍차가 한 방울도 남지 않았다.",
    "did": "다 마셨어",
    "didnt": "안 마셨어"
   },
   {
    "id": "stream",
    "owner": "coco",
    "text": "방송 중이던 코코의 장비 전원을 누군가 꺼 버렸다.",
    "did": "껐어",
    "didnt": "안 껐어"
   },
   {
    "id": "books",
    "owner": null,
    "text": "도서실 책이 전부 거꾸로 꽂혀 있었다.",
    "did": "거꾸로 꽂았어",
    "didnt": "안 그랬어"
   },
   {
    "id": "ribbon",
    "owner": "hanna",
    "text": "한나의 리본 하나가 없어졌다.",
    "did": "가져갔어",
    "didnt": "안 가져갔어"
   },
   {
    "id": "diary",
    "owner": "ema",
    "text": "에마의 일기장이 누군가에게 몰래 펼쳐져 있었다.",
    "did": "펼쳐 봤어",
    "didnt": "안 봤어"
   },
   {
    "id": "mirror",
    "owner": "reia",
    "text": "레이아의 거울에 립스틱으로 낙서가 되어 있었다.",
    "did": "낙서했어",
    "didnt": "안 그랬어"
   },
   {
    "id": "matches",
    "owner": "arisa",
    "text": "아리사의 성냥갑이 텅 비어 있었다.",
    "did": "가져갔어",
    "didnt": "안 가져갔어"
   },
   {
    "id": "bandage",
    "owner": "meruru",
    "text": "메루루의 반창고 상자가 텅 비어 있었다.",
    "did": "다 썼어",
    "didnt": "안 썼어"
   },
   {
    "id": "hairpin",
    "owner": "miria",
    "text": "미리아의 머리핀이 짝짝이로 바뀌어 있었다.",
    "did": "바꿔 놨어",
    "didnt": "안 바꿨어"
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
