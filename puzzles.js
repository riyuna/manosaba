// tools/gen_puzzles.py 가 만든 파일. 손으로 고치지 말 것.
window.PUZZLES = {
 "tiers": {
  "easy": [
   {
    "id": "easy-1",
    "key": "cc10fe95e821",
    "tier": "easy",
    "incident": "matches",
    "n": 1,
    "speakers": [
     "reia",
     "anan",
     "ema"
    ],
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
    "magic_ids": [],
    "answer": "ema",
    "false_cards": [
     "reia"
    ],
    "worlds": 1
   },
   {
    "id": "easy-2",
    "key": "fd4835a8f693",
    "tier": "easy",
    "incident": "diary",
    "n": 1,
    "speakers": [
     "arisa",
     "coco",
     "hanna"
    ],
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
    "magic_ids": [],
    "answer": "coco",
    "false_cards": [
     "coco"
    ],
    "worlds": 1
   },
   {
    "id": "easy-3",
    "key": "f1e6291d5059",
    "tier": "easy",
    "incident": "stream",
    "n": 1,
    "speakers": [
     "sherry",
     "hanna",
     "noah"
    ],
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
    "magic_ids": [],
    "answer": "hanna",
    "false_cards": [
     "hanna"
    ],
    "worlds": 1
   },
   {
    "id": "easy-4",
    "key": "9b0bd484e364",
    "tier": "easy",
    "incident": "hairpin",
    "n": 1,
    "speakers": [
     "meruru",
     "reia",
     "noah",
     "margo"
    ],
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
    "magic_ids": [],
    "answer": "meruru",
    "false_cards": [
     "margo"
    ],
    "worlds": 1
   },
   {
    "id": "easy-5",
    "key": "b6fdc37241f6",
    "tier": "easy",
    "incident": "mirror",
    "n": 1,
    "speakers": [
     "arisa",
     "hanna",
     "nanoka",
     "coco"
    ],
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
    "magic_ids": [],
    "answer": "coco",
    "false_cards": [
     "nanoka"
    ],
    "worlds": 1
   },
   {
    "id": "easy-6",
    "key": "37a4fcdf1fc8",
    "tier": "easy",
    "incident": "sweets",
    "n": 1,
    "speakers": [
     "noah",
     "hanna",
     "reia",
     "miria"
    ],
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
    "magic_ids": [],
    "answer": "noah",
    "false_cards": [
     "hanna"
    ],
    "worlds": 1
   },
   {
    "id": "easy-7",
    "key": "72cea2a92b97",
    "tier": "easy",
    "incident": "ribbon",
    "n": 1,
    "speakers": [
     "anan",
     "nanoka",
     "margo",
     "coco"
    ],
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
    "magic_ids": [],
    "answer": "margo",
    "false_cards": [
     "anan"
    ],
    "worlds": 1
   },
   {
    "id": "easy-8",
    "key": "3370885691f8",
    "tier": "easy",
    "incident": "hairpin",
    "n": 1,
    "speakers": [
     "arisa",
     "reia",
     "anan"
    ],
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
    "magic_ids": [],
    "answer": "anan",
    "false_cards": [
     "arisa"
    ],
    "worlds": 1
   },
   {
    "id": "easy-9",
    "key": "9cefb6fd302c",
    "tier": "easy",
    "incident": "matches",
    "n": 1,
    "speakers": [
     "coco",
     "ema",
     "noah",
     "sherry"
    ],
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
    "magic_ids": [],
    "answer": "ema",
    "false_cards": [
     "noah"
    ],
    "worlds": 1
   },
   {
    "id": "easy-10",
    "key": "dfc90344a413",
    "tier": "easy",
    "incident": "sweets",
    "n": 1,
    "speakers": [
     "hanna",
     "miria",
     "arisa"
    ],
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
    "magic_ids": [],
    "answer": "hanna",
    "false_cards": [
     "hanna"
    ],
    "worlds": 1
   }
  ],
  "normal": [
   {
    "id": "normal-1",
    "key": "3df2047012d0",
    "tier": "normal",
    "incident": "mirror",
    "n": 1,
    "speakers": [
     "anan",
     "arisa",
     "coco",
     "ema"
    ],
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
    ],
    "answer": "ema",
    "false_cards": [
     "arisa",
     "ema"
    ],
    "worlds": 2
   },
   {
    "id": "normal-2",
    "key": "91b6e6417fd6",
    "tier": "normal",
    "incident": "pot",
    "n": 1,
    "speakers": [
     "meruru",
     "reia",
     "miria",
     "anan"
    ],
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
    ],
    "answer": "reia",
    "false_cards": [
     "miria",
     "anan"
    ],
    "worlds": 1
   },
   {
    "id": "normal-3",
    "key": "2981b999006b",
    "tier": "normal",
    "incident": "stream",
    "n": 1,
    "speakers": [
     "margo",
     "nanoka",
     "noah",
     "hanna",
     "ema"
    ],
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
    ],
    "answer": "nanoka",
    "false_cards": [
     "margo",
     "ema"
    ],
    "worlds": 1
   },
   {
    "id": "normal-4",
    "key": "b4886e0d7474",
    "tier": "normal",
    "incident": "sweets",
    "n": 2,
    "speakers": [
     "hanna",
     "anan",
     "sherry",
     "miria"
    ],
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
    ],
    "answer": "hanna",
    "false_cards": [
     "hanna",
     "anan",
     "sherry"
    ],
    "worlds": 2
   },
   {
    "id": "normal-5",
    "key": "ea5abb19c25b",
    "tier": "normal",
    "incident": "stream",
    "n": 1,
    "speakers": [
     "hanna",
     "reia",
     "anan",
     "margo"
    ],
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
    ],
    "answer": "hanna",
    "false_cards": [
     "hanna",
     "margo"
    ],
    "worlds": 2
   },
   {
    "id": "normal-6",
    "key": "579818967712",
    "tier": "normal",
    "incident": "mirror",
    "n": 1,
    "speakers": [
     "margo",
     "nanoka",
     "ema",
     "arisa",
     "anan"
    ],
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
    ],
    "answer": "margo",
    "false_cards": [
     "margo",
     "nanoka"
    ],
    "worlds": 1
   },
   {
    "id": "normal-7",
    "key": "955267d93174",
    "tier": "normal",
    "incident": "matches",
    "n": 1,
    "speakers": [
     "reia",
     "sherry",
     "margo",
     "coco",
     "meruru"
    ],
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
    ],
    "answer": "coco",
    "false_cards": [
     "reia",
     "margo"
    ],
    "worlds": 1
   },
   {
    "id": "normal-8",
    "key": "b341f38b901f",
    "tier": "normal",
    "incident": "ribbon",
    "n": 1,
    "speakers": [
     "anan",
     "reia",
     "nanoka",
     "arisa",
     "miria"
    ],
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
    ],
    "answer": "anan",
    "false_cards": [
     "anan",
     "nanoka"
    ],
    "worlds": 1
   },
   {
    "id": "normal-9",
    "key": "09360e941450",
    "tier": "normal",
    "incident": "sweets",
    "n": 1,
    "speakers": [
     "ema",
     "anan",
     "margo",
     "reia",
     "hanna"
    ],
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
    ],
    "answer": "ema",
    "false_cards": [
     "margo",
     "hanna"
    ],
    "worlds": 1
   },
   {
    "id": "normal-10",
    "key": "a075c262a3af",
    "tier": "normal",
    "incident": "pot",
    "n": 1,
    "speakers": [
     "ema",
     "arisa",
     "margo",
     "miria"
    ],
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
    ],
    "answer": "ema",
    "false_cards": [
     "ema"
    ],
    "worlds": 1
   }
  ],
  "hard": [
   {
    "id": "hard-1",
    "key": "649191d11574",
    "tier": "hard",
    "incident": "bandage",
    "n": 2,
    "speakers": [
     "noah",
     "coco",
     "arisa",
     "nanoka",
     "margo",
     "anan"
    ],
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
    ],
    "answer": "arisa",
    "false_cards": [
     "noah",
     "nanoka",
     "margo",
     "anan"
    ],
    "worlds": 4
   },
   {
    "id": "hard-2",
    "key": "f2571a0b87ca",
    "tier": "hard",
    "incident": "sweets",
    "n": 2,
    "speakers": [
     "hanna",
     "miria",
     "noah",
     "anan",
     "meruru",
     "margo"
    ],
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
    ],
    "answer": "hanna",
    "false_cards": [
     "miria",
     "noah",
     "margo"
    ],
    "worlds": 3
   },
   {
    "id": "hard-3",
    "key": "59af8df9ec38",
    "tier": "hard",
    "incident": "stream",
    "n": 2,
    "speakers": [
     "hanna",
     "anan",
     "miria",
     "meruru",
     "noah"
    ],
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
    ],
    "answer": "noah",
    "false_cards": [
     "hanna",
     "meruru",
     "noah"
    ],
    "worlds": 3
   },
   {
    "id": "hard-4",
    "key": "7e4b1a1fe5cf",
    "tier": "hard",
    "incident": "mirror",
    "n": 2,
    "speakers": [
     "coco",
     "miria",
     "nanoka",
     "anan",
     "meruru"
    ],
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
    ],
    "answer": "nanoka",
    "false_cards": [
     "miria",
     "nanoka",
     "meruru"
    ],
    "worlds": 2
   },
   {
    "id": "hard-5",
    "key": "51ff6c28d072",
    "tier": "hard",
    "incident": "pot",
    "n": 2,
    "speakers": [
     "noah",
     "hanna",
     "anan",
     "miria",
     "nanoka"
    ],
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
    ],
    "answer": "miria",
    "false_cards": [
     "hanna",
     "nanoka"
    ],
    "worlds": 1
   },
   {
    "id": "hard-6",
    "key": "7152cc4a4c41",
    "tier": "hard",
    "incident": "pot",
    "n": 2,
    "speakers": [
     "nanoka",
     "miria",
     "reia",
     "anan",
     "hanna",
     "arisa"
    ],
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
    ],
    "answer": "anan",
    "false_cards": [
     "reia",
     "arisa"
    ],
    "worlds": 1
   },
   {
    "id": "hard-7",
    "key": "5e00f891f1b1",
    "tier": "hard",
    "incident": "books",
    "n": 2,
    "speakers": [
     "nanoka",
     "noah",
     "miria",
     "anan",
     "ema",
     "hanna"
    ],
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
    ],
    "answer": "anan",
    "false_cards": [
     "miria",
     "ema"
    ],
    "worlds": 1
   },
   {
    "id": "hard-8",
    "key": "223cc3c5ae0b",
    "tier": "hard",
    "incident": "books",
    "n": 2,
    "speakers": [
     "hanna",
     "anan",
     "sherry",
     "miria",
     "coco",
     "meruru"
    ],
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
    ],
    "answer": "coco",
    "false_cards": [
     "miria",
     "coco",
     "meruru"
    ],
    "worlds": 3
   },
   {
    "id": "hard-9",
    "key": "1adfaa7b7c6b",
    "tier": "hard",
    "incident": "pot",
    "n": 2,
    "speakers": [
     "ema",
     "arisa",
     "miria",
     "anan",
     "reia",
     "margo"
    ],
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
    ],
    "answer": "ema",
    "false_cards": [
     "miria",
     "anan"
    ],
    "worlds": 1
   },
   {
    "id": "hard-10",
    "key": "d1e8a8c2729e",
    "tier": "hard",
    "incident": "hairpin",
    "n": 2,
    "speakers": [
     "margo",
     "meruru",
     "noah",
     "arisa",
     "anan",
     "ema"
    ],
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
    ],
    "answer": "margo",
    "false_cards": [
     "margo",
     "meruru",
     "anan",
     "ema"
    ],
    "worlds": 4
   }
  ]
 },
 "daily": [
  {
   "id": "daily-1",
   "key": "1e6cfcf79d8a",
   "tier": "normal",
   "incident": "sketch",
   "n": 1,
   "speakers": [
    "ema",
    "sherry",
    "arisa",
    "hanna",
    "miria"
   ],
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
   ],
   "answer": "hanna",
   "false_cards": [
    "hanna"
   ],
   "worlds": 1
  },
  {
   "id": "daily-2",
   "key": "b70496436538",
   "tier": "hard",
   "incident": "sweets",
   "n": 2,
   "speakers": [
    "margo",
    "reia",
    "coco",
    "miria",
    "ema",
    "sherry"
   ],
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
   ],
   "answer": "miria",
   "false_cards": [
    "margo",
    "reia",
    "ema"
   ],
   "worlds": 2
  },
  {
   "id": "daily-3",
   "key": "19cc5f7f9fa8",
   "tier": "normal",
   "incident": "diary",
   "n": 1,
   "speakers": [
    "margo",
    "noah",
    "anan",
    "nanoka",
    "coco"
   ],
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
   ],
   "answer": "coco",
   "false_cards": [
    "margo",
    "coco"
   ],
   "worlds": 1
  },
  {
   "id": "daily-4",
   "key": "71104382a2e9",
   "tier": "hard",
   "incident": "matches",
   "n": 2,
   "speakers": [
    "ema",
    "sherry",
    "meruru",
    "miria",
    "margo",
    "anan"
   ],
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
   ],
   "answer": "meruru",
   "false_cards": [
    "ema",
    "meruru",
    "miria",
    "margo"
   ],
   "worlds": 9
  },
  {
   "id": "daily-5",
   "key": "3c5c8f64f67f",
   "tier": "normal",
   "incident": "sweets",
   "n": 1,
   "speakers": [
    "miria",
    "sherry",
    "arisa",
    "reia",
    "margo"
   ],
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
   ],
   "answer": "margo",
   "false_cards": [
    "reia"
   ],
   "worlds": 1
  },
  {
   "id": "daily-6",
   "key": "f58d234f582c",
   "tier": "hard",
   "incident": "diary",
   "n": 2,
   "speakers": [
    "noah",
    "margo",
    "coco",
    "sherry",
    "reia",
    "anan"
   ],
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
   ],
   "answer": "sherry",
   "false_cards": [
    "noah",
    "sherry",
    "reia"
   ],
   "worlds": 3
  },
  {
   "id": "daily-7",
   "key": "42a88c9f256e",
   "tier": "normal",
   "incident": "stream",
   "n": 2,
   "speakers": [
    "meruru",
    "miria",
    "anan",
    "noah",
    "ema"
   ],
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
   ],
   "answer": "anan",
   "false_cards": [
    "anan",
    "noah",
    "ema"
   ],
   "worlds": 2
  },
  {
   "id": "daily-8",
   "key": "dd07b0e374a9",
   "tier": "hard",
   "incident": "sweets",
   "n": 2,
   "speakers": [
    "miria",
    "margo",
    "coco",
    "reia",
    "hanna"
   ],
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
   ],
   "answer": "reia",
   "false_cards": [
    "margo",
    "coco",
    "reia"
   ],
   "worlds": 2
  },
  {
   "id": "daily-9",
   "key": "ee90295f34b7",
   "tier": "normal",
   "incident": "stream",
   "n": 1,
   "speakers": [
    "miria",
    "nanoka",
    "noah",
    "meruru"
   ],
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
   ],
   "answer": "meruru",
   "false_cards": [
    "noah"
   ],
   "worlds": 1
  },
  {
   "id": "daily-10",
   "key": "8ace8b40b649",
   "tier": "hard",
   "incident": "hairpin",
   "n": 2,
   "speakers": [
    "hanna",
    "meruru",
    "arisa",
    "anan",
    "noah"
   ],
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
   ],
   "answer": "noah",
   "false_cards": [
    "hanna",
    "anan",
    "noah"
   ],
   "worlds": 2
  },
  {
   "id": "daily-11",
   "key": "316e0c39016f",
   "tier": "normal",
   "incident": "diary",
   "n": 1,
   "speakers": [
    "nanoka",
    "coco",
    "reia",
    "anan",
    "margo"
   ],
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
   ],
   "answer": "anan",
   "false_cards": [
    "reia",
    "margo"
   ],
   "worlds": 1
  },
  {
   "id": "daily-12",
   "key": "947d9ae5201f",
   "tier": "hard",
   "incident": "sketch",
   "n": 2,
   "speakers": [
    "meruru",
    "miria",
    "hanna",
    "anan",
    "reia"
   ],
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
   ],
   "answer": "hanna",
   "false_cards": [
    "miria",
    "anan",
    "reia"
   ],
   "worlds": 2
  },
  {
   "id": "daily-13",
   "key": "cdffa8710bf6",
   "tier": "normal",
   "incident": "ribbon",
   "n": 1,
   "speakers": [
    "nanoka",
    "anan",
    "noah",
    "margo",
    "reia"
   ],
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
   ],
   "answer": "reia",
   "false_cards": [
    "margo",
    "reia"
   ],
   "worlds": 1
  },
  {
   "id": "daily-14",
   "key": "3a676307f231",
   "tier": "hard",
   "incident": "mirror",
   "n": 2,
   "speakers": [
    "margo",
    "anan",
    "hanna",
    "ema",
    "coco",
    "miria"
   ],
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
   ],
   "answer": "hanna",
   "false_cards": [
    "hanna",
    "ema"
   ],
   "worlds": 1
  },
  {
   "id": "daily-15",
   "key": "2cd17ec0491c",
   "tier": "normal",
   "incident": "ribbon",
   "n": 2,
   "speakers": [
    "miria",
    "anan",
    "margo",
    "meruru",
    "arisa"
   ],
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
   ],
   "answer": "meruru",
   "false_cards": [
    "miria",
    "meruru",
    "arisa"
   ],
   "worlds": 3
  },
  {
   "id": "daily-16",
   "key": "6740508e9f14",
   "tier": "hard",
   "incident": "tea",
   "n": 2,
   "speakers": [
    "hanna",
    "margo",
    "noah",
    "ema",
    "reia",
    "meruru"
   ],
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
   ],
   "answer": "meruru",
   "false_cards": [
    "hanna",
    "margo",
    "ema"
   ],
   "worlds": 2
  },
  {
   "id": "daily-17",
   "key": "3dbecb4bd945",
   "tier": "normal",
   "incident": "matches",
   "n": 1,
   "speakers": [
    "reia",
    "coco",
    "noah",
    "margo",
    "hanna"
   ],
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
   ],
   "answer": "margo",
   "false_cards": [
    "noah",
    "margo"
   ],
   "worlds": 1
  },
  {
   "id": "daily-18",
   "key": "0592f04b78ab",
   "tier": "hard",
   "incident": "pot",
   "n": 2,
   "speakers": [
    "anan",
    "miria",
    "meruru",
    "reia",
    "margo"
   ],
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
   ],
   "answer": "meruru",
   "false_cards": [
    "miria",
    "meruru",
    "margo"
   ],
   "worlds": 3
  },
  {
   "id": "daily-19",
   "key": "3d745591fc12",
   "tier": "normal",
   "incident": "tea",
   "n": 1,
   "speakers": [
    "margo",
    "sherry",
    "nanoka",
    "miria",
    "ema"
   ],
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
   ],
   "answer": "sherry",
   "false_cards": [
    "ema"
   ],
   "worlds": 1
  },
  {
   "id": "daily-20",
   "key": "44c3b9cfeb95",
   "tier": "hard",
   "incident": "sketch",
   "n": 2,
   "speakers": [
    "arisa",
    "margo",
    "coco",
    "anan",
    "hanna"
   ],
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
   ],
   "answer": "arisa",
   "false_cards": [
    "margo",
    "anan",
    "hanna"
   ],
   "worlds": 1
  },
  {
   "id": "daily-21",
   "key": "61122c0c4ff9",
   "tier": "normal",
   "incident": "pot",
   "n": 1,
   "speakers": [
    "margo",
    "anan",
    "hanna",
    "coco"
   ],
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
   ],
   "answer": "coco",
   "false_cards": [
    "margo",
    "hanna"
   ],
   "worlds": 1
  },
  {
   "id": "daily-22",
   "key": "dd4748d850ae",
   "tier": "hard",
   "incident": "sketch",
   "n": 2,
   "speakers": [
    "anan",
    "coco",
    "hanna",
    "miria",
    "reia",
    "margo"
   ],
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
   ],
   "answer": "miria",
   "false_cards": [
    "anan",
    "coco",
    "hanna"
   ],
   "worlds": 2
  },
  {
   "id": "daily-23",
   "key": "257f16d9a6e0",
   "tier": "normal",
   "incident": "mirror",
   "n": 1,
   "speakers": [
    "anan",
    "meruru",
    "sherry",
    "ema"
   ],
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
   ],
   "answer": "anan",
   "false_cards": [
    "anan",
    "sherry"
   ],
   "worlds": 1
  },
  {
   "id": "daily-24",
   "key": "412e4b03e846",
   "tier": "hard",
   "incident": "bandage",
   "n": 2,
   "speakers": [
    "anan",
    "coco",
    "miria",
    "ema",
    "nanoka"
   ],
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
   ],
   "answer": "ema",
   "false_cards": [
    "coco",
    "ema",
    "nanoka"
   ],
   "worlds": 3
  },
  {
   "id": "daily-25",
   "key": "35dc74449863",
   "tier": "normal",
   "incident": "sweets",
   "n": 2,
   "speakers": [
    "reia",
    "hanna",
    "ema",
    "meruru",
    "miria"
   ],
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
   ],
   "answer": "meruru",
   "false_cards": [
    "hanna",
    "ema"
   ],
   "worlds": 1
  },
  {
   "id": "daily-26",
   "key": "637d7dd6479f",
   "tier": "hard",
   "incident": "diary",
   "n": 2,
   "speakers": [
    "coco",
    "margo",
    "anan",
    "meruru",
    "hanna"
   ],
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
   ],
   "answer": "hanna",
   "false_cards": [
    "margo",
    "meruru",
    "hanna"
   ],
   "worlds": 2
  },
  {
   "id": "daily-27",
   "key": "7f74be30806f",
   "tier": "normal",
   "incident": "mirror",
   "n": 1,
   "speakers": [
    "anan",
    "hanna",
    "coco",
    "miria"
   ],
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
   ],
   "answer": "hanna",
   "false_cards": [
    "anan",
    "hanna"
   ],
   "worlds": 1
  },
  {
   "id": "daily-28",
   "key": "913a8fca0a22",
   "tier": "hard",
   "incident": "sketch",
   "n": 2,
   "speakers": [
    "margo",
    "anan",
    "ema",
    "hanna",
    "reia"
   ],
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
   ],
   "answer": "ema",
   "false_cards": [
    "margo",
    "ema",
    "reia"
   ],
   "worlds": 2
  },
  {
   "id": "daily-29",
   "key": "6a4f5d9cdcd5",
   "tier": "normal",
   "incident": "pot",
   "n": 1,
   "speakers": [
    "nanoka",
    "meruru",
    "arisa",
    "margo",
    "reia"
   ],
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
   ],
   "answer": "nanoka",
   "false_cards": [
    "meruru",
    "margo"
   ],
   "worlds": 1
  },
  {
   "id": "daily-30",
   "key": "681346ca3e7b",
   "tier": "hard",
   "incident": "mirror",
   "n": 2,
   "speakers": [
    "sherry",
    "miria",
    "hanna",
    "anan",
    "meruru",
    "ema"
   ],
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
   ],
   "answer": "sherry",
   "false_cards": [
    "sherry",
    "anan",
    "meruru"
   ],
   "worlds": 2
  },
  {
   "id": "daily-31",
   "key": "e2facb7c0a63",
   "tier": "normal",
   "incident": "matches",
   "n": 1,
   "speakers": [
    "meruru",
    "noah",
    "ema",
    "hanna",
    "miria"
   ],
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
   ],
   "answer": "ema",
   "false_cards": [
    "hanna"
   ],
   "worlds": 1
  },
  {
   "id": "daily-32",
   "key": "945cc5824760",
   "tier": "hard",
   "incident": "sweets",
   "n": 2,
   "speakers": [
    "meruru",
    "miria",
    "hanna",
    "anan",
    "sherry"
   ],
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
   ],
   "answer": "sherry",
   "false_cards": [
    "miria",
    "anan",
    "sherry"
   ],
   "worlds": 2
  },
  {
   "id": "daily-33",
   "key": "6853a73acfd0",
   "tier": "normal",
   "incident": "pot",
   "n": 1,
   "speakers": [
    "anan",
    "coco",
    "arisa",
    "miria"
   ],
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
   ],
   "answer": "arisa",
   "false_cards": [
    "arisa",
    "miria"
   ],
   "worlds": 2
  },
  {
   "id": "daily-34",
   "key": "5147bc6c45ee",
   "tier": "hard",
   "incident": "stream",
   "n": 2,
   "speakers": [
    "hanna",
    "miria",
    "sherry",
    "anan",
    "reia",
    "arisa"
   ],
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
   ],
   "answer": "arisa",
   "false_cards": [
    "miria",
    "reia",
    "arisa"
   ],
   "worlds": 3
  },
  {
   "id": "daily-35",
   "key": "8895cec44d94",
   "tier": "normal",
   "incident": "pot",
   "n": 1,
   "speakers": [
    "nanoka",
    "reia",
    "ema",
    "miria"
   ],
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
   ],
   "answer": "nanoka",
   "false_cards": [
    "nanoka"
   ],
   "worlds": 1
  },
  {
   "id": "daily-36",
   "key": "a68b6ede1f1f",
   "tier": "hard",
   "incident": "diary",
   "n": 2,
   "speakers": [
    "arisa",
    "anan",
    "nanoka",
    "reia",
    "meruru"
   ],
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
   ],
   "answer": "nanoka",
   "false_cards": [
    "arisa",
    "anan",
    "reia"
   ],
   "worlds": 2
  },
  {
   "id": "daily-37",
   "key": "ef1fea828e12",
   "tier": "normal",
   "incident": "sweets",
   "n": 1,
   "speakers": [
    "arisa",
    "coco",
    "margo",
    "anan",
    "sherry"
   ],
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
   ],
   "answer": "anan",
   "false_cards": [
    "margo",
    "sherry"
   ],
   "worlds": 1
  },
  {
   "id": "daily-38",
   "key": "70bc73b06e38",
   "tier": "hard",
   "incident": "hairpin",
   "n": 2,
   "speakers": [
    "anan",
    "hanna",
    "meruru",
    "ema",
    "margo"
   ],
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
   ],
   "answer": "meruru",
   "false_cards": [
    "anan",
    "meruru",
    "margo"
   ],
   "worlds": 1
  },
  {
   "id": "daily-39",
   "key": "c41f141360fc",
   "tier": "normal",
   "incident": "diary",
   "n": 2,
   "speakers": [
    "miria",
    "coco",
    "noah",
    "anan"
   ],
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
   ],
   "answer": "anan",
   "false_cards": [
    "coco",
    "noah",
    "anan"
   ],
   "worlds": 2
  },
  {
   "id": "daily-40",
   "key": "85e6e006c861",
   "tier": "hard",
   "incident": "bandage",
   "n": 2,
   "speakers": [
    "sherry",
    "nanoka",
    "arisa",
    "anan",
    "miria",
    "reia"
   ],
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
   ],
   "answer": "reia",
   "false_cards": [
    "sherry",
    "anan"
   ],
   "worlds": 1
  },
  {
   "id": "daily-41",
   "key": "78a1f4bc823b",
   "tier": "normal",
   "incident": "pot",
   "n": 1,
   "speakers": [
    "reia",
    "miria",
    "noah",
    "nanoka",
    "meruru"
   ],
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
   ],
   "answer": "meruru",
   "false_cards": [
    "reia"
   ],
   "worlds": 1
  },
  {
   "id": "daily-42",
   "key": "37703101a393",
   "tier": "hard",
   "incident": "bandage",
   "n": 2,
   "speakers": [
    "noah",
    "miria",
    "arisa",
    "anan",
    "margo"
   ],
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
   ],
   "answer": "anan",
   "false_cards": [
    "noah",
    "arisa",
    "anan"
   ],
   "worlds": 2
  },
  {
   "id": "daily-43",
   "key": "cd0bd20ee0c2",
   "tier": "normal",
   "incident": "books",
   "n": 1,
   "speakers": [
    "miria",
    "sherry",
    "meruru",
    "ema",
    "anan"
   ],
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
   ],
   "answer": "anan",
   "false_cards": [
    "anan"
   ],
   "worlds": 1
  },
  {
   "id": "daily-44",
   "key": "8f3508b672c0",
   "tier": "hard",
   "incident": "mirror",
   "n": 2,
   "speakers": [
    "sherry",
    "noah",
    "anan",
    "ema",
    "margo"
   ],
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
   ],
   "answer": "margo",
   "false_cards": [
    "sherry",
    "noah",
    "anan",
    "margo"
   ],
   "worlds": 4
  },
  {
   "id": "daily-45",
   "key": "6a53704833c8",
   "tier": "normal",
   "incident": "books",
   "n": 2,
   "speakers": [
    "sherry",
    "arisa",
    "ema",
    "anan"
   ],
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
   ],
   "answer": "ema",
   "false_cards": [
    "sherry",
    "arisa",
    "ema"
   ],
   "worlds": 3
  },
  {
   "id": "daily-46",
   "key": "c5707d0c6935",
   "tier": "hard",
   "incident": "sketch",
   "n": 2,
   "speakers": [
    "nanoka",
    "anan",
    "sherry",
    "coco",
    "margo",
    "ema"
   ],
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
   ],
   "answer": "nanoka",
   "false_cards": [
    "nanoka",
    "sherry",
    "margo",
    "ema"
   ],
   "worlds": 9
  },
  {
   "id": "daily-47",
   "key": "8f833a584425",
   "tier": "normal",
   "incident": "pot",
   "n": 2,
   "speakers": [
    "ema",
    "coco",
    "nanoka",
    "hanna",
    "margo"
   ],
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
   ],
   "answer": "coco",
   "false_cards": [
    "coco",
    "hanna",
    "margo"
   ],
   "worlds": 2
  },
  {
   "id": "daily-48",
   "key": "08653c5155e1",
   "tier": "hard",
   "incident": "sketch",
   "n": 2,
   "speakers": [
    "arisa",
    "hanna",
    "miria",
    "coco",
    "anan"
   ],
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
   ],
   "answer": "coco",
   "false_cards": [
    "arisa",
    "hanna",
    "coco"
   ],
   "worlds": 3
  },
  {
   "id": "daily-49",
   "key": "e10294f54090",
   "tier": "normal",
   "incident": "matches",
   "n": 1,
   "speakers": [
    "noah",
    "anan",
    "coco",
    "hanna"
   ],
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
   ],
   "answer": "hanna",
   "false_cards": [
    "anan",
    "hanna"
   ],
   "worlds": 1
  },
  {
   "id": "daily-50",
   "key": "5fb1bd00ab58",
   "tier": "hard",
   "incident": "stream",
   "n": 2,
   "speakers": [
    "noah",
    "anan",
    "arisa",
    "miria",
    "margo"
   ],
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
   ],
   "answer": "miria",
   "false_cards": [
    "noah",
    "arisa",
    "miria"
   ],
   "worlds": 3
  },
  {
   "id": "daily-51",
   "key": "b6afb9d8b9f4",
   "tier": "normal",
   "incident": "stream",
   "n": 1,
   "speakers": [
    "anan",
    "sherry",
    "noah",
    "reia",
    "miria"
   ],
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
   ],
   "answer": "sherry",
   "false_cards": [
    "reia"
   ],
   "worlds": 1
  },
  {
   "id": "daily-52",
   "key": "8767223c6a4a",
   "tier": "hard",
   "incident": "diary",
   "n": 2,
   "speakers": [
    "coco",
    "reia",
    "anan",
    "margo",
    "arisa",
    "miria"
   ],
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
   ],
   "answer": "margo",
   "false_cards": [
    "coco",
    "reia",
    "margo",
    "arisa"
   ],
   "worlds": 9
  },
  {
   "id": "daily-53",
   "key": "0f6604591b5a",
   "tier": "normal",
   "incident": "bandage",
   "n": 1,
   "speakers": [
    "reia",
    "coco",
    "anan",
    "hanna"
   ],
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
   ],
   "answer": "anan",
   "false_cards": [
    "anan",
    "hanna"
   ],
   "worlds": 1
  },
  {
   "id": "daily-54",
   "key": "780f7291d890",
   "tier": "hard",
   "incident": "sweets",
   "n": 2,
   "speakers": [
    "reia",
    "noah",
    "arisa",
    "meruru",
    "anan"
   ],
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
   ],
   "answer": "meruru",
   "false_cards": [
    "reia",
    "noah",
    "arisa"
   ],
   "worlds": 3
  },
  {
   "id": "daily-55",
   "key": "547e0d2af464",
   "tier": "normal",
   "incident": "diary",
   "n": 2,
   "speakers": [
    "reia",
    "anan",
    "sherry",
    "nanoka"
   ],
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
   ],
   "answer": "nanoka",
   "false_cards": [
    "reia",
    "anan",
    "nanoka"
   ],
   "worlds": 2
  },
  {
   "id": "daily-56",
   "key": "4ec7e609ef5b",
   "tier": "hard",
   "incident": "matches",
   "n": 2,
   "speakers": [
    "coco",
    "hanna",
    "anan",
    "noah",
    "meruru",
    "nanoka"
   ],
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
   ],
   "answer": "nanoka",
   "false_cards": [
    "coco",
    "anan",
    "nanoka"
   ],
   "worlds": 2
  },
  {
   "id": "daily-57",
   "key": "01234b314e74",
   "tier": "normal",
   "incident": "bandage",
   "n": 1,
   "speakers": [
    "ema",
    "reia",
    "miria",
    "sherry"
   ],
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
   ],
   "answer": "miria",
   "false_cards": [
    "miria"
   ],
   "worlds": 1
  },
  {
   "id": "daily-58",
   "key": "273be75334e8",
   "tier": "hard",
   "incident": "sweets",
   "n": 2,
   "speakers": [
    "miria",
    "ema",
    "noah",
    "sherry",
    "margo",
    "meruru"
   ],
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
   ],
   "answer": "ema",
   "false_cards": [
    "noah",
    "meruru"
   ],
   "worlds": 1
  },
  {
   "id": "daily-59",
   "key": "3b4b1392c5a2",
   "tier": "normal",
   "incident": "tea",
   "n": 1,
   "speakers": [
    "sherry",
    "miria",
    "coco",
    "margo"
   ],
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
   ],
   "answer": "sherry",
   "false_cards": [
    "coco"
   ],
   "worlds": 1
  },
  {
   "id": "daily-60",
   "key": "d944c73d1e16",
   "tier": "hard",
   "incident": "pot",
   "n": 2,
   "speakers": [
    "anan",
    "reia",
    "hanna",
    "noah",
    "arisa"
   ],
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
   ],
   "answer": "noah",
   "false_cards": [
    "anan",
    "reia",
    "hanna"
   ],
   "worlds": 2
  }
 ],
 "tutorial": {
  "id": "tutorial",
  "key": "f46eb84af510",
  "tier": "tutorial",
  "incident": "sweets",
  "n": 1,
  "speakers": [
   "ema",
   "sherry",
   "coco"
  ],
  "logic": {
   "ema": [
    "accuse",
    [
     "sherry"
    ]
   ],
   "sherry": [
    "deny",
    [
     "ema"
    ]
   ],
   "coco": [
    "culprit_is",
    [
     "ema"
    ]
   ]
  },
  "magic_ids": [],
  "answer": "sherry",
  "false_cards": [
   "coco"
  ],
  "worlds": 1
 },
 "gen": {
  "people": [
   "ema",
   "nanoka",
   "coco",
   "sherry",
   "hanna",
   "noah",
   "reia",
   "miria",
   "margo",
   "anan",
   "arisa",
   "meruru"
  ],
  "incidents": [
   {
    "id": "sweets",
    "owner": "nanoka"
   },
   {
    "id": "pot",
    "owner": "sherry"
   },
   {
    "id": "sketch",
    "owner": "noah"
   },
   {
    "id": "tea",
    "owner": "anan"
   },
   {
    "id": "stream",
    "owner": "coco"
   },
   {
    "id": "books",
    "owner": "margo"
   },
   {
    "id": "ribbon",
    "owner": "hanna"
   },
   {
    "id": "diary",
    "owner": "ema"
   },
   {
    "id": "mirror",
    "owner": "reia"
   },
   {
    "id": "matches",
    "owner": "arisa"
   },
   {
    "id": "bandage",
    "owner": "meruru"
   },
   {
    "id": "hairpin",
    "owner": "miria"
   }
  ],
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
 },
 "lang": {
  "ko": {
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
     "self": "저",
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
   "incidents": {
    "sweets": {
     "text": "나노카가 만들어 둔 과자가 감쪽같이 사라졌다.",
     "did": "먹었어",
     "didnt": "안 먹었어",
     "line": "...내가 만든 과자를 먹은 사람은 누구지? 어서 나오도록."
    },
    "pot": {
     "text": "셰리가 아끼는 화분이 엎어져 있었다.",
     "did": "엎었어",
     "didnt": "안 엎었어",
     "line": "사건이에요! 이건 명탐정 셰리쨩에게 보내는 도전장이에요!"
    },
    "sketch": {
     "text": "노아의 스케치북에 누가 낙서를 했다.",
     "did": "낙서했어",
     "didnt": "낙서 안 했어",
     "line": "노아 스케치북에 누가 그렸어~? 으음~ 근데 이 선, 나쁘지 않은데~"
    },
    "tea": {
     "text": "안안이 아껴 마시던 홍차가 한 방울도 남지 않았다.",
     "did": "다 마셨어",
     "didnt": "안 마셨어",
     "line": "이 몸이 아껴 두었던 홍차가 사라졌노라. 범인은 이 몸 앞에 나와 고하라."
    },
    "stream": {
     "text": "방송 중이던 코코의 장비 전원을 누군가 꺼 버렸다.",
     "did": "껐어",
     "didnt": "안 껐어",
     "line": "여러분 잠깐~ 야 누가 내 방송 껐어? 당장 안 나올래?! 으, 역시 나랑 최애 이외에는 다 죽어버렸으면 좋겠어!"
    },
    "books": {
     "text": "마고가 정리해 둔 도서실 책이 전부 거꾸로 꽂혀 있었다.",
     "did": "거꾸로 꽂았어",
     "didnt": "안 그랬어",
     "line": "어머, 내가 정리해 둔 책이 전부 거꾸로네. 후후, 이런 장난을 친 아이는 나중에 천천히 혼내 줘야겠어♡"
    },
    "ribbon": {
     "text": "한나의 리본 하나가 없어졌다.",
     "did": "가져갔어",
     "didnt": "안 가져갔어",
     "line": "제 리본이 없어졌사와요! 어떻게 저에게 그런 짓을 쳐 할수가 있는 것이와요?!"
    },
    "diary": {
     "text": "에마의 일기장이 누군가에게 몰래 펼쳐져 있었다.",
     "did": "펼쳐 봤어",
     "didnt": "안 봤어",
     "line": "으앗! 내 일기장 펼쳐 본 사람 누구야!? 이, 이상한 건 하나도 안 적었으니까!"
    },
    "mirror": {
     "text": "레이아의 거울에 립스틱으로 낙서가 되어 있었다.",
     "did": "낙서했어",
     "didnt": "안 그랬어",
     "line": "이상한 무대 연출이 되었구나! 이런 짓을 저지를 범인으로부터 나는 모두를 지키겠어!"
    },
    "matches": {
     "text": "아리사의 성냥갑이 텅 비어 있었다.",
     "did": "가져갔어",
     "didnt": "안 가져갔어",
     "line": "어떤 새끼야, 죽을래?! 내 성냥 건드린 놈, 당장 튀어나와!"
    },
    "bandage": {
     "text": "메루루의 반창고 상자가 텅 비어 있었다.",
     "did": "다 썼어",
     "didnt": "안 썼어",
     "line": "흑흑... 반창고가 다 떨어졌어요. 누가 다치면 어떡하죠?"
    },
    "hairpin": {
     "text": "미리아의 머리핀이 짝짝이로 바뀌어 있었다.",
     "did": "바꿔 놨어",
     "didnt": "안 바꿨어",
     "line": "으왓! 아저씨 머리핀이 짝짝이가 됐어! 어쩌지..."
    }
   },
   "magic": {
    "anan": {
     "name": "세뇌",
     "text": "안안은 누군가 한 명(안안 말고)을 세뇌했다. 세뇌당한 사람은 자기도 모르게 틀린 말을 한다. 그 사람은 거짓말쟁이로 세지 않는다."
    },
    "margo": {
     "name": "흉내내기",
     "text": "마고가 다른 한 사람의 목소리를 흉내 냈을 수도 있다. 그랬다면 그 사람 이름으로 나온 말은 사실 마고의 말이고(맞고 틀림도 마고 몫), 그 사람은 아무 말도 하지 않은 것이다. 흉내니까 말투도, 말 속의 \"나\"도 그 사람 것이다. (안안은 필담이라 흉내 낼 수 없다.)"
    },
    "miria": {
     "name": "뒤바뀜",
     "text": "미리아는 다른 한 사람과 영혼이 뒤바뀌었을 수도 있다. 그랬다면 두 사람은 서로 상대인 척 말한다. 말투도, 말 속의 \"나\"도 상대 것이지만, 맞고 틀림은 실제로 말한 사람 몫이다. \"영혼이 바뀌어 있다\"는 말 자체가 거짓말일 수도 있다."
    }
   }
  }
 }
};
