// tools/gen_puzzles.py 가 만든 파일. 손으로 고치지 말 것.
window.PUZZLES = {
 "tiers": {
  "easy": [
   {
    "id": "easy-1",
    "key": "cebac79edc8c",
    "tier": "easy",
    "incident": "bookmarks",
    "n": 1,
    "speakers": [
     "reia",
     "arisa",
     "ema"
    ],
    "logic": {
     "reia": [
      "deny",
      [
       "ema"
      ]
     ],
     "arisa": [
      "either",
      [
       "ema",
       "reia"
      ]
     ],
     "ema": [
      "deny",
      [
       "arisa"
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
    "key": "2f285f6aba11",
    "tier": "easy",
    "incident": "magnifier",
    "n": 1,
    "speakers": [
     "arisa",
     "nanoka",
     "hanna"
    ],
    "logic": {
     "arisa": [
      "deny",
      [
       "hanna"
      ]
     ],
     "nanoka": [
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
       "nanoka"
      ]
     ]
    },
    "magic_ids": [],
    "answer": "nanoka",
    "false_cards": [
     "nanoka"
    ],
    "worlds": 1
   },
   {
    "id": "easy-3",
    "key": "3501a7efdd5f",
    "tier": "easy",
    "incident": "matches",
    "n": 1,
    "speakers": [
     "coco",
     "sherry",
     "hanna"
    ],
    "logic": {
     "coco": [
      "self_or",
      [
       "sherry"
      ]
     ],
     "sherry": [
      "culprit_is",
      [
       "coco"
      ]
     ],
     "hanna": [
      "deny_self",
      []
     ]
    },
    "magic_ids": [],
    "answer": "sherry",
    "false_cards": [
     "sherry"
    ],
    "worlds": 1
   },
   {
    "id": "easy-4",
    "key": "b8b9fce6c574",
    "tier": "easy",
    "incident": "handkerchief",
    "n": 1,
    "speakers": [
     "arisa",
     "reia",
     "noah",
     "miria"
    ],
    "logic": {
     "arisa": [
      "deny",
      [
       "noah"
      ]
     ],
     "reia": [
      "accuse",
      [
       "arisa"
      ]
     ],
     "noah": [
      "self_or",
      [
       "arisa"
      ]
     ],
     "miria": [
      "accuse",
      [
       "reia"
      ]
     ]
    },
    "magic_ids": [],
    "answer": "arisa",
    "false_cards": [
     "miria"
    ],
    "worlds": 1
   },
   {
    "id": "easy-5",
    "key": "f3a53cb1d844",
    "tier": "easy",
    "incident": "paints",
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
    "key": "d633c3a5fc54",
    "tier": "easy",
    "incident": "goggles",
    "n": 1,
    "speakers": [
     "anan",
     "coco",
     "margo",
     "sherry"
    ],
    "logic": {
     "anan": [
      "either",
      [
       "coco",
       "sherry"
      ]
     ],
     "coco": [
      "either",
      [
       "margo",
       "sherry"
      ]
     ],
     "margo": [
      "deny",
      [
       "sherry"
      ]
     ],
     "sherry": [
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
    "key": "e1dc89868dd8",
    "tier": "easy",
    "incident": "hoodie",
    "n": 1,
    "speakers": [
     "anan",
     "reia",
     "margo"
    ],
    "logic": {
     "anan": [
      "culprit_is",
      [
       "reia"
      ]
     ],
     "reia": [
      "self_or",
      [
       "margo"
      ]
     ],
     "margo": [
      "deny",
      [
       "anan"
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
    "id": "easy-9",
    "key": "8014cf85cbd1",
    "tier": "easy",
    "incident": "bookmarks",
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
    "key": "97626362166e",
    "tier": "easy",
    "incident": "pot",
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
    "key": "9b745cd8f2d2",
    "tier": "normal",
    "incident": "ribbon",
    "n": 2,
    "speakers": [
     "noah",
     "anan",
     "ema",
     "meruru",
     "sherry"
    ],
    "logic": {
     "noah": [
      "meta_false",
      [
       "meruru"
      ]
     ],
     "anan": [
      "accuse",
      [
       "sherry"
      ]
     ],
     "ema": [
      "deny",
      [
       "sherry"
      ]
     ],
     "meruru": [
      "self_or",
      [
       "anan"
      ]
     ],
     "sherry": [
      "deny_self",
      []
     ]
    },
    "magic_ids": [
     "anan"
    ],
    "answer": "sherry",
    "false_cards": [
     "ema",
     "meruru",
     "sherry"
    ],
    "worlds": 3
   },
   {
    "id": "normal-2",
    "key": "e3ab1d7b9252",
    "tier": "normal",
    "incident": "goggles",
    "n": 1,
    "speakers": [
     "ema",
     "anan",
     "hanna",
     "margo",
     "miria"
    ],
    "logic": {
     "ema": [
      "either",
      [
       "hanna",
       "miria"
      ]
     ],
     "anan": [
      "swap_claim",
      [
       "anan"
      ]
     ],
     "hanna": [
      "deny",
      [
       "miria"
      ]
     ],
     "margo": [
      "meta_true",
      [
       "ema"
      ]
     ],
     "miria": [
      "culprit_is",
      [
       "margo"
      ]
     ]
    },
    "magic_ids": [
     "miria"
    ],
    "answer": "hanna",
    "false_cards": [
     "miria"
    ],
    "worlds": 1
   },
   {
    "id": "normal-3",
    "key": "f32dfe49ce0f",
    "tier": "normal",
    "incident": "pot",
    "n": 1,
    "speakers": [
     "noah",
     "miria",
     "nanoka",
     "ema",
     "hanna"
    ],
    "logic": {
     "noah": [
      "meta_false",
      [
       "nanoka"
      ]
     ],
     "miria": [
      "self_or",
      [
       "nanoka"
      ]
     ],
     "nanoka": [
      "deny_self",
      []
     ],
     "ema": [
      "swap_claim",
      [
       "noah"
      ]
     ],
     "hanna": [
      "culprit_is",
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
     "noah"
    ],
    "worlds": 1
   },
   {
    "id": "normal-4",
    "key": "30bf802a3246",
    "tier": "normal",
    "incident": "ribbon",
    "n": 1,
    "speakers": [
     "reia",
     "arisa",
     "miria",
     "noah"
    ],
    "logic": {
     "reia": [
      "self_or",
      [
       "noah"
      ]
     ],
     "arisa": [
      "swap_claim",
      [
       "noah"
      ]
     ],
     "miria": [
      "meta_true",
      [
       "arisa"
      ]
     ],
     "noah": [
      "deny",
      [
       "arisa"
      ]
     ]
    },
    "magic_ids": [
     "miria"
    ],
    "answer": "miria",
    "false_cards": [
     "reia"
    ],
    "worlds": 1
   },
   {
    "id": "normal-5",
    "key": "5190877d1d9a",
    "tier": "normal",
    "incident": "hoodie",
    "n": 1,
    "speakers": [
     "reia",
     "nanoka",
     "sherry",
     "ema",
     "miria"
    ],
    "logic": {
     "reia": [
      "deny_self",
      []
     ],
     "nanoka": [
      "swap_claim",
      [
       "reia"
      ]
     ],
     "sherry": [
      "culprit_is",
      [
       "nanoka"
      ]
     ],
     "ema": [
      "accuse",
      [
       "sherry"
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
     "ema"
    ],
    "worlds": 1
   },
   {
    "id": "normal-6",
    "key": "91b2f71856e4",
    "tier": "normal",
    "incident": "paints",
    "n": 1,
    "speakers": [
     "meruru",
     "ema",
     "sherry",
     "margo"
    ],
    "logic": {
     "meruru": [
      "meta_false",
      [
       "sherry"
      ]
     ],
     "ema": [
      "culprit_is",
      [
       "meruru"
      ]
     ],
     "sherry": [
      "self_or",
      [
       "ema"
      ]
     ],
     "margo": [
      "self_or",
      [
       "sherry"
      ]
     ]
    },
    "magic_ids": [
     "margo"
    ],
    "answer": "meruru",
    "false_cards": [
     "sherry",
     "margo"
    ],
    "worlds": 1
   },
   {
    "id": "normal-7",
    "key": "604cf81d868d",
    "tier": "normal",
    "incident": "letter",
    "n": 1,
    "speakers": [
     "nanoka",
     "arisa",
     "meruru",
     "anan",
     "miria"
    ],
    "logic": {
     "nanoka": [
      "swap_claim",
      [
       "anan"
      ]
     ],
     "arisa": [
      "meta_false",
      [
       "anan"
      ]
     ],
     "meruru": [
      "self_or",
      [
       "nanoka"
      ]
     ],
     "anan": [
      "accuse",
      [
       "arisa"
      ]
     ],
     "miria": [
      "accuse",
      [
       "meruru"
      ]
     ]
    },
    "magic_ids": [
     "miria"
    ],
    "answer": "meruru",
    "false_cards": [
     "anan"
    ],
    "worlds": 1
   },
   {
    "id": "normal-8",
    "key": "ee5651cfdbd0",
    "tier": "normal",
    "incident": "letter",
    "n": 1,
    "speakers": [
     "miria",
     "margo",
     "noah",
     "reia"
    ],
    "logic": {
     "miria": [
      "accuse",
      [
       "reia"
      ]
     ],
     "margo": [
      "swap_claim",
      [
       "margo"
      ]
     ],
     "noah": [
      "meta_false",
      [
       "reia"
      ]
     ],
     "reia": [
      "deny_self",
      []
     ]
    },
    "magic_ids": [
     "miria"
    ],
    "answer": "reia",
    "false_cards": [
     "reia"
    ],
    "worlds": 1
   },
   {
    "id": "normal-9",
    "key": "bcc9cb5c0243",
    "tier": "normal",
    "incident": "pot",
    "n": 2,
    "speakers": [
     "reia",
     "anan",
     "miria",
     "noah"
    ],
    "logic": {
     "reia": [
      "swap_claim",
      [
       "noah"
      ]
     ],
     "anan": [
      "self_or",
      [
       "noah"
      ]
     ],
     "miria": [
      "deny_self",
      []
     ],
     "noah": [
      "meta_true",
      [
       "anan"
      ]
     ]
    },
    "magic_ids": [
     "miria"
    ],
    "answer": "reia",
    "false_cards": [
     "anan",
     "noah"
    ],
    "worlds": 1
   },
   {
    "id": "normal-10",
    "key": "1fa9c9cf72a1",
    "tier": "normal",
    "incident": "paints",
    "n": 1,
    "speakers": [
     "miria",
     "ema",
     "hanna",
     "nanoka"
    ],
    "logic": {
     "miria": [
      "culprit_is",
      [
       "hanna"
      ]
     ],
     "ema": [
      "culprit_is",
      [
       "miria"
      ]
     ],
     "hanna": [
      "swap_claim",
      [
       "ema"
      ]
     ],
     "nanoka": [
      "accuse",
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
     "miria"
    ],
    "worlds": 1
   }
  ],
  "hard": [
   {
    "id": "hard-1",
    "key": "c46d4e03d25d",
    "tier": "hard",
    "incident": "handkerchief",
    "n": 2,
    "speakers": [
     "anan",
     "sherry",
     "noah",
     "ema",
     "arisa",
     "margo"
    ],
    "logic": {
     "anan": [
      "meta_false",
      [
       "arisa"
      ]
     ],
     "sherry": [
      "meta_true",
      [
       "ema"
      ]
     ],
     "noah": [
      "either",
      [
       "anan",
       "arisa"
      ]
     ],
     "ema": [
      "culprit_is",
      [
       "anan"
      ]
     ],
     "arisa": [
      "self_or",
      [
       "sherry"
      ]
     ],
     "margo": [
      "self_or",
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
     "anan",
     "sherry",
     "ema",
     "margo"
    ],
    "worlds": 4
   },
   {
    "id": "hard-2",
    "key": "dce43f804bfb",
    "tier": "hard",
    "incident": "books",
    "n": 2,
    "speakers": [
     "arisa",
     "miria",
     "reia",
     "nanoka",
     "anan"
    ],
    "logic": {
     "arisa": [
      "deny",
      [
       "anan"
      ]
     ],
     "miria": [
      "swap_claim",
      [
       "arisa"
      ]
     ],
     "reia": [
      "meta_true",
      [
       "arisa"
      ]
     ],
     "nanoka": [
      "self_or",
      [
       "reia"
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
     "anan",
     "miria"
    ],
    "answer": "anan",
    "false_cards": [
     "arisa",
     "reia",
     "nanoka"
    ],
    "worlds": 3
   },
   {
    "id": "hard-3",
    "key": "7f5ec94f4222",
    "tier": "hard",
    "incident": "handkerchief",
    "n": 2,
    "speakers": [
     "nanoka",
     "sherry",
     "hanna",
     "coco",
     "miria"
    ],
    "logic": {
     "nanoka": [
      "meta_true",
      [
       "hanna"
      ]
     ],
     "sherry": [
      "meta_true",
      [
       "coco"
      ]
     ],
     "hanna": [
      "swap_claim",
      [
       "hanna"
      ]
     ],
     "coco": [
      "either",
      [
       "miria",
       "sherry"
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
     "miria"
    ],
    "answer": "nanoka",
    "false_cards": [
     "sherry",
     "coco"
    ],
    "worlds": 1
   },
   {
    "id": "hard-4",
    "key": "3734d2cee831",
    "tier": "hard",
    "incident": "fan",
    "n": 2,
    "speakers": [
     "meruru",
     "margo",
     "miria",
     "sherry",
     "arisa"
    ],
    "logic": {
     "meruru": [
      "culprit_is",
      [
       "arisa"
      ]
     ],
     "margo": [
      "meta_true",
      [
       "arisa"
      ]
     ],
     "miria": [
      "self_or",
      [
       "sherry"
      ]
     ],
     "sherry": [
      "accuse",
      [
       "arisa"
      ]
     ],
     "arisa": [
      "accuse",
      [
       "margo"
      ]
     ]
    },
    "magic_ids": [
     "margo"
    ],
    "answer": "arisa",
    "false_cards": [
     "margo",
     "miria",
     "arisa"
    ],
    "worlds": 2
   },
   {
    "id": "hard-5",
    "key": "ca186b5e715a",
    "tier": "hard",
    "incident": "mirror",
    "n": 2,
    "speakers": [
     "anan",
     "ema",
     "miria",
     "margo",
     "nanoka",
     "arisa"
    ],
    "logic": {
     "anan": [
      "meta_true",
      [
       "miria"
      ]
     ],
     "ema": [
      "swap_claim",
      [
       "anan"
      ]
     ],
     "miria": [
      "either",
      [
       "anan",
       "ema"
      ]
     ],
     "margo": [
      "deny_self",
      []
     ],
     "nanoka": [
      "either",
      [
       "ema",
       "margo"
      ]
     ],
     "arisa": [
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
    "answer": "arisa",
    "false_cards": [
     "anan",
     "miria",
     "nanoka"
    ],
    "worlds": 2
   },
   {
    "id": "hard-6",
    "key": "264a5aa2f03e",
    "tier": "hard",
    "incident": "books",
    "n": 2,
    "speakers": [
     "miria",
     "anan",
     "meruru",
     "ema",
     "sherry",
     "nanoka"
    ],
    "logic": {
     "miria": [
      "either",
      [
       "ema",
       "sherry"
      ]
     ],
     "anan": [
      "accuse",
      [
       "nanoka"
      ]
     ],
     "meruru": [
      "swap_claim",
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
     "sherry": [
      "either",
      [
       "anan",
       "nanoka"
      ]
     ],
     "nanoka": [
      "self_or",
      [
       "meruru"
      ]
     ]
    },
    "magic_ids": [
     "anan",
     "miria"
    ],
    "answer": "meruru",
    "false_cards": [
     "miria",
     "anan",
     "sherry"
    ],
    "worlds": 2
   },
   {
    "id": "hard-7",
    "key": "049431f98904",
    "tier": "hard",
    "incident": "stream",
    "n": 2,
    "speakers": [
     "meruru",
     "miria",
     "noah",
     "anan",
     "reia"
    ],
    "logic": {
     "meruru": [
      "either",
      [
       "noah",
       "reia"
      ]
     ],
     "miria": [
      "culprit_is",
      [
       "reia"
      ]
     ],
     "noah": [
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
    "answer": "noah",
    "false_cards": [
     "miria",
     "anan",
     "reia"
    ],
    "worlds": 2
   },
   {
    "id": "hard-8",
    "key": "2772eca3e9f0",
    "tier": "hard",
    "incident": "ribbon",
    "n": 2,
    "speakers": [
     "nanoka",
     "miria",
     "arisa",
     "reia",
     "anan",
     "coco"
    ],
    "logic": {
     "nanoka": [
      "meta_true",
      [
       "arisa"
      ]
     ],
     "miria": [
      "meta_false",
      [
       "coco"
      ]
     ],
     "arisa": [
      "accuse",
      [
       "anan"
      ]
     ],
     "reia": [
      "swap_claim",
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
     "coco": [
      "swap_claim",
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
     "anan",
     "coco"
    ],
    "worlds": 1
   },
   {
    "id": "hard-9",
    "key": "8e77014a72cb",
    "tier": "hard",
    "incident": "bookmarks",
    "n": 2,
    "speakers": [
     "hanna",
     "arisa",
     "margo",
     "anan",
     "nanoka"
    ],
    "logic": {
     "hanna": [
      "deny",
      [
       "nanoka"
      ]
     ],
     "arisa": [
      "deny",
      [
       "anan"
      ]
     ],
     "margo": [
      "culprit_is",
      [
       "nanoka"
      ]
     ],
     "anan": [
      "deny_self",
      []
     ],
     "nanoka": [
      "meta_true",
      [
       "margo"
      ]
     ]
    },
    "magic_ids": [
     "anan",
     "margo"
    ],
    "answer": "anan",
    "false_cards": [
     "arisa",
     "margo",
     "anan",
     "nanoka"
    ],
    "worlds": 4
   },
   {
    "id": "hard-10",
    "key": "22a62081b94b",
    "tier": "hard",
    "incident": "diary",
    "n": 2,
    "speakers": [
     "arisa",
     "sherry",
     "anan",
     "meruru",
     "hanna"
    ],
    "logic": {
     "arisa": [
      "deny",
      [
       "anan"
      ]
     ],
     "sherry": [
      "self_or",
      [
       "hanna"
      ]
     ],
     "anan": [
      "accuse",
      [
       "meruru"
      ]
     ],
     "meruru": [
      "meta_false",
      [
       "hanna"
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
    "answer": "arisa",
    "false_cards": [
     "sherry",
     "anan",
     "meruru"
    ],
    "worlds": 2
   }
  ]
 },
 "daily": [
  {
   "id": "daily-1",
   "key": "d02f05fe0eed",
   "tier": "normal",
   "incident": "stream",
   "n": 1,
   "speakers": [
    "hanna",
    "miria",
    "anan",
    "meruru",
    "noah"
   ],
   "logic": {
    "hanna": [
     "culprit_is",
     [
      "miria"
     ]
    ],
    "miria": [
     "deny",
     [
      "anan"
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
      "hanna"
     ]
    ],
    "noah": [
     "meta_false",
     [
      "meruru"
     ]
    ]
   },
   "magic_ids": [
    "miria"
   ],
   "answer": "miria",
   "false_cards": [
    "meruru"
   ],
   "worlds": 1
  },
  {
   "id": "daily-2",
   "key": "03de35ed457e",
   "tier": "hard",
   "incident": "stream",
   "n": 2,
   "speakers": [
    "nanoka",
    "noah",
    "miria",
    "reia",
    "hanna",
    "ema"
   ],
   "logic": {
    "nanoka": [
     "either",
     [
      "ema",
      "noah"
     ]
    ],
    "noah": [
     "accuse",
     [
      "hanna"
     ]
    ],
    "miria": [
     "culprit_is",
     [
      "hanna"
     ]
    ],
    "reia": [
     "meta_true",
     [
      "nanoka"
     ]
    ],
    "hanna": [
     "swap_claim",
     [
      "nanoka"
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
    "miria"
   ],
   "answer": "noah",
   "false_cards": [
    "noah",
    "miria"
   ],
   "worlds": 1
  },
  {
   "id": "daily-3",
   "key": "584e4d7d804b",
   "tier": "normal",
   "incident": "handkerchief",
   "n": 2,
   "speakers": [
    "anan",
    "miria",
    "hanna",
    "ema"
   ],
   "logic": {
    "anan": [
     "either",
     [
      "ema",
      "hanna"
     ]
    ],
    "miria": [
     "deny",
     [
      "ema"
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
     "culprit_is",
     [
      "hanna"
     ]
    ]
   },
   "magic_ids": [
    "anan"
   ],
   "answer": "anan",
   "false_cards": [
    "anan",
    "hanna",
    "ema"
   ],
   "worlds": 2
  },
  {
   "id": "daily-4",
   "key": "1a29121a4fc0",
   "tier": "hard",
   "incident": "costume",
   "n": 2,
   "speakers": [
    "anan",
    "arisa",
    "sherry",
    "nanoka",
    "meruru",
    "miria"
   ],
   "logic": {
    "anan": [
     "meta_true",
     [
      "miria"
     ]
    ],
    "arisa": [
     "accuse",
     [
      "anan"
     ]
    ],
    "sherry": [
     "either",
     [
      "meruru",
      "nanoka"
     ]
    ],
    "nanoka": [
     "swap_claim",
     [
      "sherry"
     ]
    ],
    "meruru": [
     "culprit_is",
     [
      "nanoka"
     ]
    ],
    "miria": [
     "self_or",
     [
      "meruru"
     ]
    ]
   },
   "magic_ids": [
    "miria"
   ],
   "answer": "meruru",
   "false_cards": [
    "arisa",
    "meruru"
   ],
   "worlds": 1
  },
  {
   "id": "daily-5",
   "key": "891f94801f8d",
   "tier": "normal",
   "incident": "diary",
   "n": 1,
   "speakers": [
    "nanoka",
    "margo",
    "coco",
    "anan"
   ],
   "logic": {
    "nanoka": [
     "self_or",
     [
      "anan"
     ]
    ],
    "margo": [
     "meta_true",
     [
      "anan"
     ]
    ],
    "coco": [
     "deny",
     [
      "nanoka"
     ]
    ],
    "anan": [
     "either",
     [
      "coco",
      "nanoka"
     ]
    ]
   },
   "magic_ids": [
    "anan"
   ],
   "answer": "anan",
   "false_cards": [
    "margo",
    "anan"
   ],
   "worlds": 1
  },
  {
   "id": "daily-6",
   "key": "82d64acad037",
   "tier": "hard",
   "incident": "ribbon",
   "n": 2,
   "speakers": [
    "miria",
    "meruru",
    "margo",
    "anan",
    "sherry"
   ],
   "logic": {
    "miria": [
     "deny_self",
     []
    ],
    "meruru": [
     "deny",
     [
      "margo"
     ]
    ],
    "margo": [
     "meta_true",
     [
      "miria"
     ]
    ],
    "anan": [
     "meta_true",
     [
      "margo"
     ]
    ],
    "sherry": [
     "self_or",
     [
      "meruru"
     ]
    ]
   },
   "magic_ids": [
    "anan",
    "margo"
   ],
   "answer": "miria",
   "false_cards": [
    "miria",
    "margo",
    "anan",
    "sherry"
   ],
   "worlds": 4
  },
  {
   "id": "daily-7",
   "key": "24e119371890",
   "tier": "normal",
   "incident": "headphones",
   "n": 1,
   "speakers": [
    "hanna",
    "noah",
    "meruru",
    "ema",
    "miria"
   ],
   "logic": {
    "hanna": [
     "deny_self",
     []
    ],
    "noah": [
     "accuse",
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
    "ema": [
     "culprit_is",
     [
      "hanna"
     ]
    ],
    "miria": [
     "swap_claim",
     [
      "ema"
     ]
    ]
   },
   "magic_ids": [
    "miria"
   ],
   "answer": "meruru",
   "false_cards": [
    "ema"
   ],
   "worlds": 1
  },
  {
   "id": "daily-8",
   "key": "74836aefb757",
   "tier": "hard",
   "incident": "fan",
   "n": 2,
   "speakers": [
    "anan",
    "nanoka",
    "miria",
    "reia",
    "margo"
   ],
   "logic": {
    "anan": [
     "culprit_is",
     [
      "margo"
     ]
    ],
    "nanoka": [
     "culprit_is",
     [
      "reia"
     ]
    ],
    "miria": [
     "meta_true",
     [
      "margo"
     ]
    ],
    "reia": [
     "either",
     [
      "anan",
      "nanoka"
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
    "anan",
    "nanoka",
    "reia"
   ],
   "worlds": 2
  },
  {
   "id": "daily-9",
   "key": "e014d4121f3a",
   "tier": "normal",
   "incident": "costume",
   "n": 1,
   "speakers": [
    "sherry",
    "anan",
    "meruru",
    "arisa"
   ],
   "logic": {
    "sherry": [
     "culprit_is",
     [
      "anan"
     ]
    ],
    "anan": [
     "deny",
     [
      "arisa"
     ]
    ],
    "meruru": [
     "either",
     [
      "arisa",
      "sherry"
     ]
    ],
    "arisa": [
     "culprit_is",
     [
      "sherry"
     ]
    ]
   },
   "magic_ids": [
    "anan"
   ],
   "answer": "anan",
   "false_cards": [
    "meruru",
    "arisa"
   ],
   "worlds": 2
  },
  {
   "id": "daily-10",
   "key": "a99e0bfbcf4c",
   "tier": "hard",
   "incident": "sweets",
   "n": 2,
   "speakers": [
    "coco",
    "hanna",
    "anan",
    "margo",
    "arisa"
   ],
   "logic": {
    "coco": [
     "deny_self",
     []
    ],
    "hanna": [
     "meta_true",
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
    "margo": [
     "self_or",
     [
      "hanna"
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
    "anan"
   ],
   "answer": "hanna",
   "false_cards": [
    "hanna",
    "anan",
    "arisa"
   ],
   "worlds": 2
  },
  {
   "id": "daily-11",
   "key": "67dd6d7b3b49",
   "tier": "normal",
   "incident": "sweets",
   "n": 2,
   "speakers": [
    "coco",
    "anan",
    "miria",
    "meruru"
   ],
   "logic": {
    "coco": [
     "meta_false",
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
    "miria": [
     "either",
     [
      "anan",
      "coco"
     ]
    ],
    "meruru": [
     "culprit_is",
     [
      "coco"
     ]
    ]
   },
   "magic_ids": [
    "anan"
   ],
   "answer": "miria",
   "false_cards": [
    "anan",
    "miria",
    "meruru"
   ],
   "worlds": 2
  },
  {
   "id": "daily-12",
   "key": "b2d6c22d0ead",
   "tier": "hard",
   "incident": "stream",
   "n": 2,
   "speakers": [
    "sherry",
    "hanna",
    "noah",
    "anan",
    "reia",
    "miria"
   ],
   "logic": {
    "sherry": [
     "self_or",
     [
      "anan"
     ]
    ],
    "hanna": [
     "meta_false",
     [
      "sherry"
     ]
    ],
    "noah": [
     "either",
     [
      "reia",
      "sherry"
     ]
    ],
    "anan": [
     "self_or",
     [
      "sherry"
     ]
    ],
    "reia": [
     "deny",
     [
      "sherry"
     ]
    ],
    "miria": [
     "meta_false",
     [
      "hanna"
     ]
    ]
   },
   "magic_ids": [
    "anan"
   ],
   "answer": "reia",
   "false_cards": [
    "sherry",
    "anan",
    "miria"
   ],
   "worlds": 2
  },
  {
   "id": "daily-13",
   "key": "3c46624786f3",
   "tier": "normal",
   "incident": "matches",
   "n": 1,
   "speakers": [
    "noah",
    "anan",
    "sherry",
    "miria"
   ],
   "logic": {
    "noah": [
     "culprit_is",
     [
      "anan"
     ]
    ],
    "anan": [
     "meta_false",
     [
      "sherry"
     ]
    ],
    "sherry": [
     "either",
     [
      "anan",
      "miria"
     ]
    ],
    "miria": [
     "swap_claim",
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
    "anan"
   ],
   "worlds": 1
  },
  {
   "id": "daily-14",
   "key": "9b6e935f6466",
   "tier": "hard",
   "incident": "sketch",
   "n": 2,
   "speakers": [
    "coco",
    "margo",
    "hanna",
    "anan",
    "arisa"
   ],
   "logic": {
    "coco": [
     "meta_true",
     [
      "anan"
     ]
    ],
    "margo": [
     "accuse",
     [
      "coco"
     ]
    ],
    "hanna": [
     "accuse",
     [
      "arisa"
     ]
    ],
    "anan": [
     "deny",
     [
      "margo"
     ]
    ],
    "arisa": [
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
    "margo",
    "hanna",
    "anan"
   ],
   "worlds": 4
  },
  {
   "id": "daily-15",
   "key": "b422ca248b08",
   "tier": "normal",
   "incident": "bandage",
   "n": 1,
   "speakers": [
    "reia",
    "noah",
    "margo",
    "miria"
   ],
   "logic": {
    "reia": [
     "culprit_is",
     [
      "miria"
     ]
    ],
    "noah": [
     "either",
     [
      "miria",
      "reia"
     ]
    ],
    "margo": [
     "swap_claim",
     [
      "margo"
     ]
    ],
    "miria": [
     "meta_true",
     [
      "margo"
     ]
    ]
   },
   "magic_ids": [
    "miria"
   ],
   "answer": "reia",
   "false_cards": [
    "reia"
   ],
   "worlds": 1
  },
  {
   "id": "daily-16",
   "key": "58a4a98444d0",
   "tier": "hard",
   "incident": "ribbon",
   "n": 2,
   "speakers": [
    "coco",
    "anan",
    "miria",
    "noah",
    "nanoka",
    "margo"
   ],
   "logic": {
    "coco": [
     "accuse",
     [
      "miria"
     ]
    ],
    "anan": [
     "meta_true",
     [
      "coco"
     ]
    ],
    "miria": [
     "swap_claim",
     [
      "anan"
     ]
    ],
    "noah": [
     "deny",
     [
      "coco"
     ]
    ],
    "nanoka": [
     "meta_false",
     [
      "noah"
     ]
    ],
    "margo": [
     "accuse",
     [
      "coco"
     ]
    ]
   },
   "magic_ids": [
    "miria"
   ],
   "answer": "miria",
   "false_cards": [
    "nanoka",
    "margo"
   ],
   "worlds": 1
  },
  {
   "id": "daily-17",
   "key": "523467ee37b4",
   "tier": "normal",
   "incident": "handkerchief",
   "n": 1,
   "speakers": [
    "ema",
    "hanna",
    "sherry",
    "nanoka",
    "anan"
   ],
   "logic": {
    "ema": [
     "culprit_is",
     [
      "hanna"
     ]
    ],
    "hanna": [
     "deny",
     [
      "ema"
     ]
    ],
    "sherry": [
     "culprit_is",
     [
      "anan"
     ]
    ],
    "nanoka": [
     "accuse",
     [
      "anan"
     ]
    ],
    "anan": [
     "accuse",
     [
      "ema"
     ]
    ]
   },
   "magic_ids": [
    "anan"
   ],
   "answer": "anan",
   "false_cards": [
    "ema",
    "anan"
   ],
   "worlds": 1
  },
  {
   "id": "daily-18",
   "key": "f537b75db40a",
   "tier": "hard",
   "incident": "mirror",
   "n": 2,
   "speakers": [
    "meruru",
    "sherry",
    "miria",
    "arisa",
    "margo",
    "noah"
   ],
   "logic": {
    "meruru": [
     "meta_false",
     [
      "margo"
     ]
    ],
    "sherry": [
     "deny_self",
     []
    ],
    "miria": [
     "culprit_is",
     [
      "noah"
     ]
    ],
    "arisa": [
     "accuse",
     [
      "miria"
     ]
    ],
    "margo": [
     "meta_false",
     [
      "arisa"
     ]
    ],
    "noah": [
     "either",
     [
      "arisa",
      "sherry"
     ]
    ]
   },
   "magic_ids": [
    "margo"
   ],
   "answer": "miria",
   "false_cards": [
    "miria",
    "margo",
    "noah"
   ],
   "worlds": 2
  },
  {
   "id": "daily-19",
   "key": "87f424c92d66",
   "tier": "normal",
   "incident": "tea",
   "n": 1,
   "speakers": [
    "miria",
    "arisa",
    "sherry",
    "margo",
    "reia"
   ],
   "logic": {
    "miria": [
     "deny_self",
     []
    ],
    "arisa": [
     "culprit_is",
     [
      "margo"
     ]
    ],
    "sherry": [
     "meta_true",
     [
      "reia"
     ]
    ],
    "margo": [
     "accuse",
     [
      "miria"
     ]
    ],
    "reia": [
     "culprit_is",
     [
      "sherry"
     ]
    ]
   },
   "magic_ids": [
    "margo"
   ],
   "answer": "sherry",
   "false_cards": [
    "arisa",
    "margo"
   ],
   "worlds": 1
  },
  {
   "id": "daily-20",
   "key": "40eb7e964bd8",
   "tier": "hard",
   "incident": "letter",
   "n": 2,
   "speakers": [
    "coco",
    "miria",
    "reia",
    "anan",
    "hanna"
   ],
   "logic": {
    "coco": [
     "accuse",
     [
      "reia"
     ]
    ],
    "miria": [
     "meta_true",
     [
      "hanna"
     ]
    ],
    "reia": [
     "meta_false",
     [
      "hanna"
     ]
    ],
    "anan": [
     "either",
     [
      "coco",
      "hanna"
     ]
    ],
    "hanna": [
     "either",
     [
      "coco",
      "reia"
     ]
    ]
   },
   "magic_ids": [
    "anan"
   ],
   "answer": "hanna",
   "false_cards": [
    "coco",
    "miria",
    "hanna"
   ],
   "worlds": 3
  },
  {
   "id": "daily-21",
   "key": "6953fca865c8",
   "tier": "normal",
   "incident": "diary",
   "n": 1,
   "speakers": [
    "nanoka",
    "reia",
    "coco",
    "sherry",
    "margo"
   ],
   "logic": {
    "nanoka": [
     "either",
     [
      "coco",
      "reia"
     ]
    ],
    "reia": [
     "meta_false",
     [
      "nanoka"
     ]
    ],
    "coco": [
     "either",
     [
      "margo",
      "nanoka"
     ]
    ],
    "sherry": [
     "self_or",
     [
      "margo"
     ]
    ],
    "margo": [
     "either",
     [
      "nanoka",
      "reia"
     ]
    ]
   },
   "magic_ids": [
    "margo"
   ],
   "answer": "margo",
   "false_cards": [
    "nanoka",
    "margo"
   ],
   "worlds": 1
  },
  {
   "id": "daily-22",
   "key": "d7ab7520d626",
   "tier": "hard",
   "incident": "ribbon",
   "n": 2,
   "speakers": [
    "miria",
    "arisa",
    "anan",
    "reia",
    "meruru"
   ],
   "logic": {
    "miria": [
     "accuse",
     [
      "reia"
     ]
    ],
    "arisa": [
     "meta_true",
     [
      "meruru"
     ]
    ],
    "anan": [
     "swap_claim",
     [
      "reia"
     ]
    ],
    "reia": [
     "either",
     [
      "meruru",
      "miria"
     ]
    ],
    "meruru": [
     "self_or",
     [
      "reia"
     ]
    ]
   },
   "magic_ids": [
    "anan",
    "miria"
   ],
   "answer": "miria",
   "false_cards": [
    "miria",
    "arisa",
    "meruru"
   ],
   "worlds": 3
  },
  {
   "id": "daily-23",
   "key": "03c1e9f6ac24",
   "tier": "normal",
   "incident": "bookmarks",
   "n": 1,
   "speakers": [
    "noah",
    "reia",
    "margo",
    "meruru",
    "sherry"
   ],
   "logic": {
    "noah": [
     "accuse",
     [
      "margo"
     ]
    ],
    "reia": [
     "culprit_is",
     [
      "noah"
     ]
    ],
    "margo": [
     "self_or",
     [
      "meruru"
     ]
    ],
    "meruru": [
     "deny_self",
     []
    ],
    "sherry": [
     "either",
     [
      "noah",
      "reia"
     ]
    ]
   },
   "magic_ids": [
    "margo"
   ],
   "answer": "noah",
   "false_cards": [
    "noah",
    "margo"
   ],
   "worlds": 1
  },
  {
   "id": "daily-24",
   "key": "dff1952865af",
   "tier": "hard",
   "incident": "paints",
   "n": 2,
   "speakers": [
    "nanoka",
    "reia",
    "arisa",
    "miria",
    "anan"
   ],
   "logic": {
    "nanoka": [
     "meta_true",
     [
      "anan"
     ]
    ],
    "reia": [
     "self_or",
     [
      "miria"
     ]
    ],
    "arisa": [
     "self_or",
     [
      "nanoka"
     ]
    ],
    "miria": [
     "self_or",
     [
      "anan"
     ]
    ],
    "anan": [
     "accuse",
     [
      "reia"
     ]
    ]
   },
   "magic_ids": [
    "anan"
   ],
   "answer": "miria",
   "false_cards": [
    "nanoka",
    "arisa",
    "anan"
   ],
   "worlds": 2
  },
  {
   "id": "daily-25",
   "key": "ba221a429417",
   "tier": "normal",
   "incident": "ribbon",
   "n": 1,
   "speakers": [
    "meruru",
    "anan",
    "coco",
    "miria"
   ],
   "logic": {
    "meruru": [
     "deny",
     [
      "miria"
     ]
    ],
    "anan": [
     "meta_true",
     [
      "coco"
     ]
    ],
    "coco": [
     "deny_self",
     []
    ],
    "miria": [
     "accuse",
     [
      "meruru"
     ]
    ]
   },
   "magic_ids": [
    "anan"
   ],
   "answer": "miria",
   "false_cards": [
    "meruru",
    "miria"
   ],
   "worlds": 2
  },
  {
   "id": "daily-26",
   "key": "0cfc9649e0a9",
   "tier": "hard",
   "incident": "mirror",
   "n": 2,
   "speakers": [
    "anan",
    "noah",
    "sherry",
    "margo",
    "ema",
    "nanoka"
   ],
   "logic": {
    "anan": [
     "culprit_is",
     [
      "nanoka"
     ]
    ],
    "noah": [
     "deny",
     [
      "margo"
     ]
    ],
    "sherry": [
     "meta_true",
     [
      "nanoka"
     ]
    ],
    "margo": [
     "either",
     [
      "ema",
      "nanoka"
     ]
    ],
    "ema": [
     "meta_true",
     [
      "noah"
     ]
    ],
    "nanoka": [
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
    "anan",
    "noah",
    "margo",
    "ema"
   ],
   "worlds": 4
  },
  {
   "id": "daily-27",
   "key": "1db9afc55af3",
   "tier": "normal",
   "incident": "ribbon",
   "n": 2,
   "speakers": [
    "nanoka",
    "noah",
    "sherry",
    "anan",
    "meruru"
   ],
   "logic": {
    "nanoka": [
     "self_or",
     [
      "anan"
     ]
    ],
    "noah": [
     "either",
     [
      "meruru",
      "nanoka"
     ]
    ],
    "sherry": [
     "deny",
     [
      "noah"
     ]
    ],
    "anan": [
     "deny",
     [
      "nanoka"
     ]
    ],
    "meruru": [
     "deny",
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
    "nanoka",
    "noah",
    "sherry"
   ],
   "worlds": 3
  },
  {
   "id": "daily-28",
   "key": "0125767d0130",
   "tier": "hard",
   "incident": "headphones",
   "n": 2,
   "speakers": [
    "reia",
    "hanna",
    "anan",
    "nanoka",
    "noah",
    "miria"
   ],
   "logic": {
    "reia": [
     "meta_false",
     [
      "miria"
     ]
    ],
    "hanna": [
     "culprit_is",
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
     "accuse",
     [
      "miria"
     ]
    ],
    "noah": [
     "meta_true",
     [
      "anan"
     ]
    ],
    "miria": [
     "self_or",
     [
      "reia"
     ]
    ]
   },
   "magic_ids": [
    "anan"
   ],
   "answer": "hanna",
   "false_cards": [
    "hanna",
    "nanoka",
    "miria"
   ],
   "worlds": 3
  },
  {
   "id": "daily-29",
   "key": "c4f6c53b44f8",
   "tier": "normal",
   "incident": "sweets",
   "n": 1,
   "speakers": [
    "meruru",
    "arisa",
    "hanna",
    "miria"
   ],
   "logic": {
    "meruru": [
     "meta_true",
     [
      "miria"
     ]
    ],
    "arisa": [
     "swap_claim",
     [
      "hanna"
     ]
    ],
    "hanna": [
     "accuse",
     [
      "arisa"
     ]
    ],
    "miria": [
     "accuse",
     [
      "meruru"
     ]
    ]
   },
   "magic_ids": [
    "miria"
   ],
   "answer": "meruru",
   "false_cards": [
    "hanna"
   ],
   "worlds": 1
  },
  {
   "id": "daily-30",
   "key": "a3a8ecc894b1",
   "tier": "hard",
   "incident": "ribbon",
   "n": 2,
   "speakers": [
    "anan",
    "sherry",
    "arisa",
    "meruru",
    "reia",
    "miria"
   ],
   "logic": {
    "anan": [
     "swap_claim",
     [
      "meruru"
     ]
    ],
    "sherry": [
     "accuse",
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
    "meruru": [
     "culprit_is",
     [
      "arisa"
     ]
    ],
    "reia": [
     "self_or",
     [
      "sherry"
     ]
    ],
    "miria": [
     "accuse",
     [
      "arisa"
     ]
    ]
   },
   "magic_ids": [
    "anan",
    "miria"
   ],
   "answer": "arisa",
   "false_cards": [
    "sherry",
    "arisa",
    "reia"
   ],
   "worlds": 3
  },
  {
   "id": "daily-31",
   "key": "8e0be7083657",
   "tier": "normal",
   "incident": "paints",
   "n": 2,
   "speakers": [
    "sherry",
    "nanoka",
    "coco",
    "anan"
   ],
   "logic": {
    "sherry": [
     "culprit_is",
     [
      "nanoka"
     ]
    ],
    "nanoka": [
     "self_or",
     [
      "anan"
     ]
    ],
    "coco": [
     "either",
     [
      "anan",
      "sherry"
     ]
    ],
    "anan": [
     "self_or",
     [
      "nanoka"
     ]
    ]
   },
   "magic_ids": [
    "anan"
   ],
   "answer": "sherry",
   "false_cards": [
    "sherry",
    "nanoka",
    "anan"
   ],
   "worlds": 2
  },
  {
   "id": "daily-32",
   "key": "b7902950c8be",
   "tier": "hard",
   "incident": "diary",
   "n": 2,
   "speakers": [
    "meruru",
    "arisa",
    "margo",
    "hanna",
    "coco"
   ],
   "logic": {
    "meruru": [
     "deny",
     [
      "hanna"
     ]
    ],
    "arisa": [
     "meta_true",
     [
      "hanna"
     ]
    ],
    "margo": [
     "meta_false",
     [
      "coco"
     ]
    ],
    "hanna": [
     "accuse",
     [
      "margo"
     ]
    ],
    "coco": [
     "culprit_is",
     [
      "arisa"
     ]
    ]
   },
   "magic_ids": [
    "margo"
   ],
   "answer": "arisa",
   "false_cards": [
    "arisa",
    "margo",
    "hanna"
   ],
   "worlds": 2
  },
  {
   "id": "daily-33",
   "key": "0ee71632f92a",
   "tier": "normal",
   "incident": "ribbon",
   "n": 2,
   "speakers": [
    "noah",
    "coco",
    "anan",
    "reia"
   ],
   "logic": {
    "noah": [
     "self_or",
     [
      "anan"
     ]
    ],
    "coco": [
     "deny_self",
     []
    ],
    "anan": [
     "meta_false",
     [
      "coco"
     ]
    ],
    "reia": [
     "self_or",
     [
      "noah"
     ]
    ]
   },
   "magic_ids": [
    "anan"
   ],
   "answer": "coco",
   "false_cards": [
    "noah",
    "coco",
    "reia"
   ],
   "worlds": 3
  },
  {
   "id": "daily-34",
   "key": "6fe96eda1e2b",
   "tier": "hard",
   "incident": "paints",
   "n": 2,
   "speakers": [
    "margo",
    "hanna",
    "reia",
    "anan",
    "ema",
    "arisa"
   ],
   "logic": {
    "margo": [
     "meta_true",
     [
      "hanna"
     ]
    ],
    "hanna": [
     "meta_false",
     [
      "anan"
     ]
    ],
    "reia": [
     "accuse",
     [
      "hanna"
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
     "self_or",
     [
      "anan"
     ]
    ],
    "arisa": [
     "either",
     [
      "anan",
      "hanna"
     ]
    ]
   },
   "magic_ids": [
    "anan",
    "margo"
   ],
   "answer": "ema",
   "false_cards": [
    "margo",
    "hanna",
    "reia",
    "arisa"
   ],
   "worlds": 9
  },
  {
   "id": "daily-35",
   "key": "5651b66acb61",
   "tier": "normal",
   "incident": "bandage",
   "n": 1,
   "speakers": [
    "margo",
    "miria",
    "reia",
    "coco",
    "hanna"
   ],
   "logic": {
    "margo": [
     "either",
     [
      "miria",
      "reia"
     ]
    ],
    "miria": [
     "swap_claim",
     [
      "hanna"
     ]
    ],
    "reia": [
     "culprit_is",
     [
      "hanna"
     ]
    ],
    "coco": [
     "self_or",
     [
      "hanna"
     ]
    ],
    "hanna": [
     "meta_true",
     [
      "reia"
     ]
    ]
   },
   "magic_ids": [
    "miria"
   ],
   "answer": "hanna",
   "false_cards": [
    "margo"
   ],
   "worlds": 1
  },
  {
   "id": "daily-36",
   "key": "6bae097e59c2",
   "tier": "hard",
   "incident": "matches",
   "n": 2,
   "speakers": [
    "margo",
    "anan",
    "ema",
    "reia",
    "miria"
   ],
   "logic": {
    "margo": [
     "deny_self",
     []
    ],
    "anan": [
     "culprit_is",
     [
      "reia"
     ]
    ],
    "ema": [
     "meta_true",
     [
      "margo"
     ]
    ],
    "reia": [
     "deny",
     [
      "margo"
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
    "anan",
    "margo"
   ],
   "answer": "margo",
   "false_cards": [
    "margo",
    "anan",
    "ema",
    "reia"
   ],
   "worlds": 4
  },
  {
   "id": "daily-37",
   "key": "199a109c0fc9",
   "tier": "normal",
   "incident": "tea",
   "n": 1,
   "speakers": [
    "meruru",
    "reia",
    "sherry",
    "miria",
    "coco"
   ],
   "logic": {
    "meruru": [
     "deny",
     [
      "miria"
     ]
    ],
    "reia": [
     "deny",
     [
      "coco"
     ]
    ],
    "sherry": [
     "meta_false",
     [
      "meruru"
     ]
    ],
    "miria": [
     "accuse",
     [
      "sherry"
     ]
    ],
    "coco": [
     "swap_claim",
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
    "sherry"
   ],
   "worlds": 1
  },
  {
   "id": "daily-38",
   "key": "1cad653c911f",
   "tier": "hard",
   "incident": "paints",
   "n": 2,
   "speakers": [
    "anan",
    "sherry",
    "meruru",
    "miria",
    "coco",
    "margo"
   ],
   "logic": {
    "anan": [
     "either",
     [
      "margo",
      "meruru"
     ]
    ],
    "sherry": [
     "meta_false",
     [
      "coco"
     ]
    ],
    "meruru": [
     "deny_self",
     []
    ],
    "miria": [
     "meta_true",
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
    "margo": [
     "self_or",
     [
      "anan"
     ]
    ]
   },
   "magic_ids": [
    "margo"
   ],
   "answer": "meruru",
   "false_cards": [
    "meruru",
    "coco",
    "margo"
   ],
   "worlds": 2
  },
  {
   "id": "daily-39",
   "key": "ce6be52d1e43",
   "tier": "normal",
   "incident": "sketchpage",
   "n": 1,
   "speakers": [
    "miria",
    "arisa",
    "noah",
    "coco",
    "meruru"
   ],
   "logic": {
    "miria": [
     "meta_false",
     [
      "meruru"
     ]
    ],
    "arisa": [
     "either",
     [
      "meruru",
      "noah"
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
      "noah"
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
    "miria"
   ],
   "answer": "noah",
   "false_cards": [
    "meruru"
   ],
   "worlds": 1
  },
  {
   "id": "daily-40",
   "key": "df9fb0e4a8ee",
   "tier": "hard",
   "incident": "magnifier",
   "n": 2,
   "speakers": [
    "arisa",
    "anan",
    "miria",
    "margo",
    "hanna",
    "ema"
   ],
   "logic": {
    "arisa": [
     "culprit_is",
     [
      "miria"
     ]
    ],
    "anan": [
     "accuse",
     [
      "arisa"
     ]
    ],
    "miria": [
     "culprit_is",
     [
      "margo"
     ]
    ],
    "margo": [
     "self_or",
     [
      "anan"
     ]
    ],
    "hanna": [
     "either",
     [
      "arisa",
      "margo"
     ]
    ],
    "ema": [
     "meta_true",
     [
      "miria"
     ]
    ]
   },
   "magic_ids": [
    "anan",
    "margo"
   ],
   "answer": "arisa",
   "false_cards": [
    "arisa",
    "miria",
    "margo",
    "ema"
   ],
   "worlds": 9
  },
  {
   "id": "daily-41",
   "key": "ed6c7101b583",
   "tier": "normal",
   "incident": "hairpin",
   "n": 2,
   "speakers": [
    "noah",
    "nanoka",
    "anan",
    "ema"
   ],
   "logic": {
    "noah": [
     "meta_false",
     [
      "nanoka"
     ]
    ],
    "nanoka": [
     "accuse",
     [
      "anan"
     ]
    ],
    "anan": [
     "deny_self",
     []
    ],
    "ema": [
     "self_or",
     [
      "nanoka"
     ]
    ]
   },
   "magic_ids": [
    "anan"
   ],
   "answer": "anan",
   "false_cards": [
    "noah",
    "anan",
    "ema"
   ],
   "worlds": 2
  },
  {
   "id": "daily-42",
   "key": "7c778a03e3d4",
   "tier": "hard",
   "incident": "costume",
   "n": 2,
   "speakers": [
    "hanna",
    "miria",
    "anan",
    "meruru",
    "arisa"
   ],
   "logic": {
    "hanna": [
     "culprit_is",
     [
      "miria"
     ]
    ],
    "miria": [
     "deny",
     [
      "anan"
     ]
    ],
    "anan": [
     "deny_self",
     []
    ],
    "meruru": [
     "deny",
     [
      "miria"
     ]
    ],
    "arisa": [
     "swap_claim",
     [
      "meruru"
     ]
    ]
   },
   "magic_ids": [
    "anan",
    "miria"
   ],
   "answer": "anan",
   "false_cards": [
    "hanna",
    "miria",
    "anan"
   ],
   "worlds": 2
  },
  {
   "id": "daily-43",
   "key": "74ecc67ea68b",
   "tier": "normal",
   "incident": "costume",
   "n": 2,
   "speakers": [
    "meruru",
    "nanoka",
    "coco",
    "miria"
   ],
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
   ],
   "answer": "miria",
   "false_cards": [
    "meruru",
    "miria"
   ],
   "worlds": 1
  },
  {
   "id": "daily-44",
   "key": "7be68380529d",
   "tier": "hard",
   "incident": "costume",
   "n": 2,
   "speakers": [
    "sherry",
    "miria",
    "coco",
    "ema",
    "hanna",
    "arisa"
   ],
   "logic": {
    "sherry": [
     "meta_false",
     [
      "ema"
     ]
    ],
    "miria": [
     "meta_false",
     [
      "hanna"
     ]
    ],
    "coco": [
     "swap_claim",
     [
      "ema"
     ]
    ],
    "ema": [
     "deny",
     [
      "miria"
     ]
    ],
    "hanna": [
     "deny_self",
     []
    ],
    "arisa": [
     "culprit_is",
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
    "miria",
    "ema"
   ],
   "worlds": 1
  },
  {
   "id": "daily-45",
   "key": "8fd1fd828c2d",
   "tier": "normal",
   "incident": "bandage",
   "n": 2,
   "speakers": [
    "anan",
    "miria",
    "ema",
    "arisa",
    "hanna"
   ],
   "logic": {
    "anan": [
     "accuse",
     [
      "miria"
     ]
    ],
    "miria": [
     "either",
     [
      "ema",
      "hanna"
     ]
    ],
    "ema": [
     "accuse",
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
    "hanna": [
     "culprit_is",
     [
      "arisa"
     ]
    ]
   },
   "magic_ids": [
    "anan"
   ],
   "answer": "anan",
   "false_cards": [
    "anan",
    "miria",
    "hanna"
   ],
   "worlds": 2
  },
  {
   "id": "daily-46",
   "key": "32721971f8e5",
   "tier": "hard",
   "incident": "books",
   "n": 2,
   "speakers": [
    "anan",
    "coco",
    "nanoka",
    "miria",
    "meruru"
   ],
   "logic": {
    "anan": [
     "culprit_is",
     [
      "nanoka"
     ]
    ],
    "coco": [
     "meta_true",
     [
      "meruru"
     ]
    ],
    "nanoka": [
     "swap_claim",
     [
      "meruru"
     ]
    ],
    "miria": [
     "meta_true",
     [
      "coco"
     ]
    ],
    "meruru": [
     "self_or",
     [
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
    "coco",
    "miria",
    "meruru"
   ],
   "worlds": 3
  },
  {
   "id": "daily-47",
   "key": "0a3860e4c6c3",
   "tier": "normal",
   "incident": "magnifier",
   "n": 1,
   "speakers": [
    "margo",
    "ema",
    "reia",
    "hanna"
   ],
   "logic": {
    "margo": [
     "culprit_is",
     [
      "hanna"
     ]
    ],
    "ema": [
     "deny",
     [
      "margo"
     ]
    ],
    "reia": [
     "meta_false",
     [
      "ema"
     ]
    ],
    "hanna": [
     "accuse",
     [
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
    "ema"
   ],
   "worlds": 1
  },
  {
   "id": "daily-48",
   "key": "3cd39032fc0e",
   "tier": "hard",
   "incident": "mirror",
   "n": 2,
   "speakers": [
    "arisa",
    "anan",
    "meruru",
    "ema",
    "hanna",
    "noah"
   ],
   "logic": {
    "arisa": [
     "meta_false",
     [
      "noah"
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
      "arisa"
     ]
    ],
    "ema": [
     "culprit_is",
     [
      "anan"
     ]
    ],
    "hanna": [
     "culprit_is",
     [
      "arisa"
     ]
    ],
    "noah": [
     "deny",
     [
      "arisa"
     ]
    ]
   },
   "magic_ids": [
    "anan"
   ],
   "answer": "arisa",
   "false_cards": [
    "anan",
    "ema",
    "noah"
   ],
   "worlds": 2
  },
  {
   "id": "daily-49",
   "key": "76a462571ca3",
   "tier": "normal",
   "incident": "diary",
   "n": 1,
   "speakers": [
    "reia",
    "margo",
    "sherry",
    "anan",
    "meruru"
   ],
   "logic": {
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
    "sherry": [
     "deny",
     [
      "meruru"
     ]
    ],
    "anan": [
     "either",
     [
      "margo",
      "sherry"
     ]
    ],
    "meruru": [
     "meta_false",
     [
      "margo"
     ]
    ]
   },
   "magic_ids": [
    "anan"
   ],
   "answer": "reia",
   "false_cards": [
    "anan",
    "meruru"
   ],
   "worlds": 1
  },
  {
   "id": "daily-50",
   "key": "b3c7ed899be4",
   "tier": "hard",
   "incident": "matches",
   "n": 2,
   "speakers": [
    "sherry",
    "reia",
    "miria",
    "margo",
    "nanoka"
   ],
   "logic": {
    "sherry": [
     "self_or",
     [
      "margo"
     ]
    ],
    "reia": [
     "self_or",
     [
      "sherry"
     ]
    ],
    "miria": [
     "meta_true",
     [
      "sherry"
     ]
    ],
    "margo": [
     "self_or",
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
    "margo"
   ],
   "answer": "reia",
   "false_cards": [
    "sherry",
    "miria",
    "margo"
   ],
   "worlds": 2
  },
  {
   "id": "daily-51",
   "key": "df33e922d606",
   "tier": "normal",
   "incident": "handkerchief",
   "n": 2,
   "speakers": [
    "anan",
    "ema",
    "coco",
    "nanoka"
   ],
   "logic": {
    "anan": [
     "culprit_is",
     [
      "coco"
     ]
    ],
    "ema": [
     "either",
     [
      "anan",
      "nanoka"
     ]
    ],
    "coco": [
     "culprit_is",
     [
      "ema"
     ]
    ],
    "nanoka": [
     "meta_false",
     [
      "anan"
     ]
    ]
   },
   "magic_ids": [
    "anan"
   ],
   "answer": "coco",
   "false_cards": [
    "ema",
    "coco",
    "nanoka"
   ],
   "worlds": 3
  },
  {
   "id": "daily-52",
   "key": "8c2fe0e4fd6d",
   "tier": "hard",
   "incident": "costume",
   "n": 2,
   "speakers": [
    "miria",
    "anan",
    "nanoka",
    "ema",
    "meruru",
    "margo"
   ],
   "logic": {
    "miria": [
     "meta_false",
     [
      "ema"
     ]
    ],
    "anan": [
     "swap_claim",
     [
      "margo"
     ]
    ],
    "nanoka": [
     "meta_true",
     [
      "meruru"
     ]
    ],
    "ema": [
     "swap_claim",
     [
      "nanoka"
     ]
    ],
    "meruru": [
     "accuse",
     [
      "anan"
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
   "answer": "margo",
   "false_cards": [
    "nanoka",
    "ema",
    "meruru"
   ],
   "worlds": 3
  },
  {
   "id": "daily-53",
   "key": "c801ed52277f",
   "tier": "normal",
   "incident": "sketch",
   "n": 1,
   "speakers": [
    "coco",
    "meruru",
    "hanna",
    "margo",
    "ema"
   ],
   "logic": {
    "coco": [
     "culprit_is",
     [
      "ema"
     ]
    ],
    "meruru": [
     "accuse",
     [
      "coco"
     ]
    ],
    "hanna": [
     "deny_self",
     []
    ],
    "margo": [
     "culprit_is",
     [
      "hanna"
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
    "margo"
   ],
   "answer": "coco",
   "false_cards": [
    "coco",
    "margo"
   ],
   "worlds": 1
  },
  {
   "id": "daily-54",
   "key": "0305901d7bf1",
   "tier": "hard",
   "incident": "stream",
   "n": 2,
   "speakers": [
    "miria",
    "margo",
    "hanna",
    "sherry",
    "anan",
    "nanoka"
   ],
   "logic": {
    "miria": [
     "culprit_is",
     [
      "margo"
     ]
    ],
    "margo": [
     "deny_self",
     []
    ],
    "hanna": [
     "self_or",
     [
      "sherry"
     ]
    ],
    "sherry": [
     "meta_false",
     [
      "anan"
     ]
    ],
    "anan": [
     "deny",
     [
      "miria"
     ]
    ],
    "nanoka": [
     "meta_false",
     [
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
    "hanna",
    "sherry"
   ],
   "worlds": 2
  },
  {
   "id": "daily-55",
   "key": "0eb1c669f1cc",
   "tier": "normal",
   "incident": "pot",
   "n": 1,
   "speakers": [
    "coco",
    "miria",
    "anan",
    "nanoka"
   ],
   "logic": {
    "coco": [
     "self_or",
     [
      "nanoka"
     ]
    ],
    "miria": [
     "deny_self",
     []
    ],
    "anan": [
     "meta_false",
     [
      "nanoka"
     ]
    ],
    "nanoka": [
     "deny",
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
    "coco",
    "anan"
   ],
   "worlds": 1
  },
  {
   "id": "daily-56",
   "key": "5398d5cddff0",
   "tier": "hard",
   "incident": "hairpin",
   "n": 2,
   "speakers": [
    "hanna",
    "sherry",
    "coco",
    "margo",
    "anan"
   ],
   "logic": {
    "hanna": [
     "meta_false",
     [
      "anan"
     ]
    ],
    "sherry": [
     "accuse",
     [
      "coco"
     ]
    ],
    "coco": [
     "self_or",
     [
      "margo"
     ]
    ],
    "margo": [
     "deny_self",
     []
    ],
    "anan": [
     "either",
     [
      "coco",
      "hanna"
     ]
    ]
   },
   "magic_ids": [
    "margo"
   ],
   "answer": "margo",
   "false_cards": [
    "sherry",
    "margo",
    "anan"
   ],
   "worlds": 1
  },
  {
   "id": "daily-57",
   "key": "6c20b46828d9",
   "tier": "normal",
   "incident": "stream",
   "n": 2,
   "speakers": [
    "arisa",
    "anan",
    "nanoka",
    "ema",
    "margo"
   ],
   "logic": {
    "arisa": [
     "culprit_is",
     [
      "margo"
     ]
    ],
    "anan": [
     "deny",
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
    "ema": [
     "deny",
     [
      "nanoka"
     ]
    ],
    "margo": [
     "deny_self",
     []
    ]
   },
   "magic_ids": [
    "anan"
   ],
   "answer": "nanoka",
   "false_cards": [
    "arisa",
    "nanoka",
    "ema"
   ],
   "worlds": 3
  },
  {
   "id": "daily-58",
   "key": "abf3c53297c6",
   "tier": "hard",
   "incident": "bookmarks",
   "n": 2,
   "speakers": [
    "margo",
    "arisa",
    "hanna",
    "sherry",
    "noah"
   ],
   "logic": {
    "margo": [
     "self_or",
     [
      "noah"
     ]
    ],
    "arisa": [
     "accuse",
     [
      "hanna"
     ]
    ],
    "hanna": [
     "self_or",
     [
      "sherry"
     ]
    ],
    "sherry": [
     "either",
     [
      "arisa",
      "hanna"
     ]
    ],
    "noah": [
     "meta_true",
     [
      "hanna"
     ]
    ]
   },
   "magic_ids": [
    "margo"
   ],
   "answer": "sherry",
   "false_cards": [
    "margo",
    "arisa",
    "sherry"
   ],
   "worlds": 2
  },
  {
   "id": "daily-59",
   "key": "1643a43fe0ad",
   "tier": "normal",
   "incident": "fan",
   "n": 1,
   "speakers": [
    "anan",
    "noah",
    "ema",
    "meruru",
    "margo"
   ],
   "logic": {
    "anan": [
     "accuse",
     [
      "meruru"
     ]
    ],
    "noah": [
     "meta_true",
     [
      "anan"
     ]
    ],
    "ema": [
     "deny",
     [
      "meruru"
     ]
    ],
    "meruru": [
     "self_or",
     [
      "ema"
     ]
    ],
    "margo": [
     "culprit_is",
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
    "ema",
    "margo"
   ],
   "worlds": 1
  },
  {
   "id": "daily-60",
   "key": "f235bca69fc3",
   "tier": "hard",
   "incident": "goggles",
   "n": 2,
   "speakers": [
    "coco",
    "ema",
    "sherry",
    "margo",
    "anan"
   ],
   "logic": {
    "coco": [
     "culprit_is",
     [
      "sherry"
     ]
    ],
    "ema": [
     "meta_true",
     [
      "sherry"
     ]
    ],
    "sherry": [
     "accuse",
     [
      "anan"
     ]
    ],
    "margo": [
     "either",
     [
      "coco",
      "sherry"
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
    "margo"
   ],
   "answer": "anan",
   "false_cards": [
    "coco",
    "margo",
    "anan"
   ],
   "worlds": 1
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
   },
   {
    "id": "letter",
    "owner": "ema"
   },
   {
    "id": "goggles",
    "owner": "nanoka"
   },
   {
    "id": "headphones",
    "owner": "coco"
   },
   {
    "id": "magnifier",
    "owner": "sherry"
   },
   {
    "id": "fan",
    "owner": "hanna"
   },
   {
    "id": "paints",
    "owner": "noah"
   },
   {
    "id": "costume",
    "owner": "reia"
   },
   {
    "id": "bookmarks",
    "owner": "miria"
   },
   {
    "id": "candles",
    "owner": "margo"
   },
   {
    "id": "sketchpage",
    "owner": "anan"
   },
   {
    "id": "hoodie",
    "owner": "arisa"
   },
   {
    "id": "handkerchief",
    "owner": "meruru"
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
    },
    "letter": {
     "text": "에마가 모두에게 주려고 쓴 편지가 구겨져 있었다.",
     "did": "구겼어",
     "didnt": "안 구겼어",
     "line": "으앗, 모두한테 줄 편지였는데… 누가 구겼어!? 나, 미움받을 짓 했어…?"
    },
    "goggles": {
     "text": "나노카의 고글에 손자국이 잔뜩 묻어 있었다.",
     "did": "만졌어",
     "didnt": "안 만졌어",
     "line": "...고글에 손자국. 함부로 만지지 말라고 했을 텐데. 만진 범인이 흑막일 거야."
    },
    "headphones": {
     "text": "코코의 헤드폰 줄이 엉망으로 꼬여 있었다.",
     "did": "꼬아 놨어",
     "didnt": "안 꼬았어",
     "line": "누구야? 내 헤드폰 줄 꼬아 놓은게?! 당장 자수해!"
    },
    "magnifier": {
     "text": "셰리의 돋보기가 사라졌다.",
     "did": "가져갔어",
     "didnt": "안 가져갔어",
     "line": "어라라?! 명탐정의 돋보기가 사라졌어요!~ 하지만 괜찮아요, 돋보기 없이도 범인은 찾을 수 있으니까요!"
    },
    "fan": {
     "text": "한나의 깃털 부채가 망가져 있었다.",
     "did": "망가뜨렸어",
     "didnt": "안 망가뜨렸어",
     "line": "제 부채가 쳐 망가져 있사와요! 이건 저에 대한 모욕이라와... 인 것이와요...?!"
    },
    "paints": {
     "text": "노아의 물감이 전부 한데 섞여 있었다.",
     "did": "섞었어",
     "didnt": "안 섞었어",
     "line": "노아 물감이 전부 한 색이 됐어~ 누가 그랬을까~? 다시 나누는 건 힘든데~"
    },
    "costume": {
     "text": "레이아가 준비해 둔 무대 의상이 전부 사라졌다.",
     "did": "가져갔어",
     "didnt": "안 가져갔어",
     "line": "내가 준비한 무대 의상이 모두 사라지다니! 이러면 연극을 보여줄 수가 없다! 그러나 안심하도록. 내가 범인으로부터 모두를 지킬 테니까!"
    },
    "bookmarks": {
     "text": "미리아의 법률책에서 책갈피가 전부 빠져 있었다.",
     "did": "뺐어",
     "didnt": "안 뺐어",
     "line": "으왓! 아저씨 책갈피가 다 빠졌어! 어디까지 읽었더라… 어쩌지..."
    },
    "candles": {
     "text": "마고의 촛대에서 초가 전부 사라졌다.",
     "did": "가져갔어",
     "didnt": "안 가져갔어",
     "line": "어머, 내 초가 다 없어졌네. 후후, 어두운 데서 무슨 짓을 하려던 걸까? 나중에 천천히 깊은 이야기를 해보지 않을래?♡"
    },
    "sketchpage": {
     "text": "안안의 스케치북 마지막 장이 찢겨 있었다.",
     "did": "찢었어",
     "didnt": "안 찢었어",
     "line": "이 몸의 스케치북을 찢은 자가 있도다. 그 죄, 이 몸이 똑똑히 기억해 두겠노라."
    },
    "hoodie": {
     "text": "아리사의 후드티에 커피가 엎질러져 있었다.",
     "did": "엎질렀어",
     "didnt": "안 엎질렀어",
     "line": "내 후드에 커피 쏟은 건 어떤 새끼야! 닥치고 나와! 죽여버린다!"
    },
    "handkerchief": {
     "text": "메루루가 늘 들고 다니던 손수건이 사라졌다.",
     "did": "가져갔어",
     "didnt": "안 가져갔어",
     "line": "흑흑... 손수건이 없어졌어요... 이제 눈물은 어디에 닦죠...? 그래도 누가 필요해서 가져간 거라면 괜찮아요..."
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
