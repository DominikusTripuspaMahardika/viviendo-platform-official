// Contoh awal (ganti dengan data penuh nanti)
const plantWikiData = [
  {
    "name": "Sunflower",
    "type_name": "sunflower",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Enlightenmint"
    ],
    "archetypes": [
      "sunprod"
    ],
    "home_world": "tutorial",
    "mastery_type": null,
    "seed_packet_cost": 10,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 25,
        "max": 50
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 2.5,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": [
        "SunflowerSunProduction"
      ]
    },
    "description": "Sunflower adalah salah satu tanaman dari dunia *tutorial* yang memiliki kemampuan unik seperti sunprod. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Sunflower menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Sunshroom",
    "type_name": "sunshroom",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Enlightenmint"
    ],
    "archetypes": [
      "sunprod",
      "shroom"
    ],
    "home_world": "dark",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 25,
        "max": 25
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 2.5,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": [
        "SunshroomGrowthStages"
      ]
    },
    "description": "Sunshroom adalah salah satu tanaman dari dunia *dark* yang memiliki kemampuan unik seperti sunprod, shroom. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Sunshroom menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Peashooter",
    "type_name": "peashooter",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Appeasemint"
    ],
    "archetypes": [
      "shooter",
      "multishot"
    ],
    "home_world": "tutorial",
    "mastery_type": "piercing",
    "seed_packet_cost": null,
    "level_cap": 20,
    "stats": {
      "cost": {
        "min": 25,
        "max": 100
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 20,
        "max": 110
      },
      "cooldown": {
        "min": 2.5,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Peashooter adalah salah satu tanaman dari dunia *tutorial* yang memiliki kemampuan unik seperti shooter, multishot. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Peashooter menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Thymewarp",
    "type_name": "thymewarp",
    "rarity": "rare",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Containmint"
    ],
    "archetypes": [
      "reposition"
    ],
    "home_world": "eighties",
    "mastery_type": null,
    "seed_packet_cost": 60,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 40,
        "max": 100
      },
      "hp": {
        "min": null,
        "max": null
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 30,
        "max": 90
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Thymewarp adalah salah satu tanaman dari dunia *eighties* yang memiliki kemampuan unik seperti reposition. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Thymewarp menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Wallnut",
    "type_name": "wallnut",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Reinforcemint"
    ],
    "archetypes": [
      "wall"
    ],
    "home_world": "tutorial",
    "mastery_type": "health",
    "seed_packet_cost": 10,
    "level_cap": 20,
    "stats": {
      "cost": {
        "min": 25,
        "max": 50
      },
      "hp": {
        "min": 4000,
        "max": 8000
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 10,
        "max": 20
      }
    },
    "special_strings": {
      "power_strings": [
        "WallnutShield"
      ]
    },
    "description": "Wallnut adalah salah satu tanaman dari dunia *tutorial* yang memiliki kemampuan unik seperti wall. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Wallnut menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Intensivecarrot",
    "type_name": "intensivecarrot",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Enchantmint"
    ],
    "archetypes": [
      "spawn"
    ],
    "home_world": "eighties",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 25,
        "max": 100
      },
      "hp": {
        "min": null,
        "max": null
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 10,
        "max": 20
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Intensivecarrot adalah salah satu tanaman dari dunia *eighties* yang memiliki kemampuan unik seperti spawn. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Intensivecarrot menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Bloomerang",
    "type_name": "bloomerang",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Spearmint"
    ],
    "archetypes": [
      "shooter",
      "multishot",
      "piercing",
      "multilane",
      "back"
    ],
    "home_world": "egypt",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 20,
    "stats": {
      "cost": {
        "min": 75,
        "max": 175
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 20,
        "max": 100
      },
      "cooldown": {
        "min": 2,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Bloomerang adalah salah satu tanaman dari dunia *egypt* yang memiliki kemampuan unik seperti shooter, multishot, piercing, multilane, back. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Bloomerang menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Cabbagepult",
    "type_name": "cabbagepult",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Armamint"
    ],
    "archetypes": [
      "lobber",
      "multishot",
      "homing",
      "multilane"
    ],
    "home_world": "tutorial",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 20,
    "stats": {
      "cost": {
        "min": 50,
        "max": 100
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 40,
        "max": 120
      },
      "cooldown": {
        "min": 2.5,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Cabbagepult adalah salah satu tanaman dari dunia *tutorial* yang memiliki kemampuan unik seperti lobber, multishot, homing, multilane. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Cabbagepult menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Potatomine",
    "type_name": "potatomine",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Bombardmint"
    ],
    "archetypes": [
      "trap",
      "spawn"
    ],
    "home_world": "tutorial",
    "mastery_type": null,
    "seed_packet_cost": 10,
    "level_cap": 20,
    "stats": {
      "cost": {
        "min": 0,
        "max": 25
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 5,
        "max": 20
      }
    },
    "special_strings": {
      "power_strings": [
        "PotatomineExplosion",
        "PotatomineDuplication"
      ]
    },
    "description": "Potatomine adalah salah satu tanaman dari dunia *tutorial* yang memiliki kemampuan unik seperti trap, spawn. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Potatomine menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Iceburg",
    "type_name": "iceburg",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Wintermint"
    ],
    "archetypes": [
      "stall",
      "aoe",
      "trap",
      "back"
    ],
    "home_world": "egypt",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 20,
    "stats": {
      "cost": {
        "min": 0,
        "max": 0
      },
      "hp": {
        "min": null,
        "max": null
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 10,
        "max": 20
      }
    },
    "special_strings": {
      "power_strings": [
        "ActionExplodeType"
      ]
    },
    "description": "Iceburg adalah salah satu tanaman dari dunia *egypt* yang memiliki kemampuan unik seperti stall, aoe, trap, back. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Iceburg menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Gravebuster",
    "type_name": "gravebuster",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Containmint"
    ],
    "archetypes": [
      "trap"
    ],
    "home_world": "egypt",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 0
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 6,
        "max": 10
      }
    },
    "special_strings": {
      "power_strings": [
        "GravebusterExplosion"
      ]
    },
    "description": "Gravebuster adalah salah satu tanaman dari dunia *egypt* yang memiliki kemampuan unik seperti trap. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Gravebuster menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Bonkchoy",
    "type_name": "bonkchoy",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Enforcemint"
    ],
    "archetypes": [
      "melee",
      "aoe",
      "back"
    ],
    "home_world": "egypt",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 20,
    "stats": {
      "cost": {
        "min": 75,
        "max": 150
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 15,
        "max": 75
      },
      "cooldown": {
        "min": 2.5,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Bonkchoy adalah salah satu tanaman dari dunia *egypt* yang memiliki kemampuan unik seperti melee, aoe, back. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Bonkchoy menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Twinsunflower",
    "type_name": "twinsunflower",
    "rarity": "uncommon",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Enlightenmint"
    ],
    "archetypes": [
      "sunprod"
    ],
    "home_world": "egypt",
    "mastery_type": null,
    "seed_packet_cost": 60,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 125
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 7,
        "max": 10
      }
    },
    "special_strings": {
      "power_strings": [
        "TwinsunSunProduction"
      ]
    },
    "description": "Twinsunflower adalah salah satu tanaman dari dunia *egypt* yang memiliki kemampuan unik seperti sunprod. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Twinsunflower menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Repeater",
    "type_name": "repeater",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Appeasemint"
    ],
    "archetypes": [
      "shooter",
      "multishot"
    ],
    "home_world": "egypt",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 20,
    "stats": {
      "cost": {
        "min": 100,
        "max": 200
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 20,
        "max": 110
      },
      "cooldown": {
        "min": 2.5,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Repeater adalah salah satu tanaman dari dunia *egypt* yang memiliki kemampuan unik seperti shooter, multishot. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Repeater menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Kernelpult",
    "type_name": "kernelpult",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Armamint"
    ],
    "archetypes": [
      "lobber",
      "stall",
      "multishot",
      "homing",
      "multilane"
    ],
    "home_world": "pirate",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 15,
    "stats": {
      "cost": {
        "min": 50,
        "max": 100
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 30,
        "max": 100
      },
      "cooldown": {
        "min": 2.5,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Kernelpult adalah salah satu tanaman dari dunia *pirate* yang memiliki kemampuan unik seperti lobber, stall, multishot, homing, multilane. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Kernelpult menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Snapdragon",
    "type_name": "snapdragon",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Peppermint"
    ],
    "archetypes": [
      "aoe",
      "piercing",
      "multilane",
      "antifreeze"
    ],
    "home_world": "pirate",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 150
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": [
        "Snapdragon_NormalDamage",
        "Snapdragon_PFDamage",
        "Snapdragon_WarmingRadius",
        "Snapdragon_WarmingRadiusPF"
      ]
    },
    "description": "Snapdragon adalah salah satu tanaman dari dunia *pirate* yang memiliki kemampuan unik seperti aoe, piercing, multilane, antifreeze. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Snapdragon menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Spikeweed",
    "type_name": "spikeweed",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Spearmint"
    ],
    "archetypes": [
      "melee",
      "trap",
      "reposition"
    ],
    "home_world": "pirate",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 25,
        "max": 100
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 10,
        "max": 40
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Spikeweed adalah salah satu tanaman dari dunia *pirate* yang memiliki kemampuan unik seperti melee, trap, reposition. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Spikeweed menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Coconutcannon",
    "type_name": "coconutcannon",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Armamint"
    ],
    "archetypes": [
      "shooter",
      "aoe",
      "tap",
      "reposition"
    ],
    "home_world": "pirate",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 225,
        "max": 400
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 900,
        "max": 1200
      },
      "cooldown": {
        "min": 5,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Coconutcannon adalah salah satu tanaman dari dunia *pirate* yang memiliki kemampuan unik seperti shooter, aoe, tap, reposition. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Coconutcannon menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Cherry Bomb",
    "type_name": "cherry_bomb",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Bombardmint"
    ],
    "archetypes": [
      "aoe"
    ],
    "home_world": "pirate",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 150
      },
      "hp": {
        "min": null,
        "max": null
      },
      "damage": {
        "min": 1800,
        "max": 2400
      },
      "cooldown": {
        "min": 20,
        "max": 35
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Cherry Bomb adalah salah satu tanaman dari dunia *pirate* yang memiliki kemampuan unik seperti aoe. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Cherry Bomb menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Springbean",
    "type_name": "springbean",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Containmint"
    ],
    "archetypes": [
      "stall",
      "aoe",
      "reposition"
    ],
    "home_world": "pirate",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 15,
    "stats": {
      "cost": {
        "min": 25,
        "max": 50
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 10,
        "max": 20
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Springbean adalah salah satu tanaman dari dunia *pirate* yang memiliki kemampuan unik seperti stall, aoe, reposition. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Springbean menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Spikerock",
    "type_name": "spikerock",
    "rarity": "rare",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Spearmint"
    ],
    "archetypes": [
      "melee",
      "aoe",
      "trap",
      "reposition"
    ],
    "home_world": "pirate",
    "mastery_type": null,
    "seed_packet_cost": 100,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 250
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 20,
        "max": 100
      },
      "cooldown": {
        "min": 5,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Spikerock adalah salah satu tanaman dari dunia *pirate* yang memiliki kemampuan unik seperti melee, aoe, trap, reposition. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Spikerock menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Threepeater",
    "type_name": "threepeater",
    "rarity": "uncommon",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Appeasemint"
    ],
    "archetypes": [
      "shooter",
      "aoe",
      "multishot",
      "multilane"
    ],
    "home_world": "pirate",
    "mastery_type": null,
    "seed_packet_cost": 60,
    "level_cap": 20,
    "stats": {
      "cost": {
        "min": 175,
        "max": 300
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 20,
        "max": 110
      },
      "cooldown": {
        "min": 2.5,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Threepeater adalah salah satu tanaman dari dunia *pirate* yang memiliki kemampuan unik seperti shooter, aoe, multishot, multilane. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Threepeater menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Splitpea",
    "type_name": "splitpea",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Appeasemint"
    ],
    "archetypes": [
      "shooter",
      "multishot",
      "back"
    ],
    "home_world": "cowboy",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 20,
    "stats": {
      "cost": {
        "min": 50,
        "max": 125
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 20,
        "max": 110
      },
      "cooldown": {
        "min": 2.5,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Splitpea adalah salah satu tanaman dari dunia *cowboy* yang memiliki kemampuan unik seperti shooter, multishot, back. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Splitpea menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Chilibean",
    "type_name": "chilibean",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Ailmint"
    ],
    "archetypes": [
      "stall",
      "aoe",
      "spawn",
      "multilane"
    ],
    "home_world": "cowboy",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 25,
        "max": 50
      },
      "hp": {
        "min": 300,
        "max": 300
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 10,
        "max": 20
      }
    },
    "special_strings": {
      "power_strings": [
        "ChilibeanDuplication"
      ]
    },
    "description": "Chilibean adalah salah satu tanaman dari dunia *cowboy* yang memiliki kemampuan unik seperti stall, aoe, spawn, multilane. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Chilibean menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Lightningreed",
    "type_name": "lightningreed",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Filamint"
    ],
    "archetypes": [
      "shooter",
      "multilane",
      "homing"
    ],
    "home_world": "cowboy",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 15,
    "stats": {
      "cost": {
        "min": 50,
        "max": 125
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 10,
        "max": 60
      },
      "cooldown": {
        "min": 5,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Lightningreed adalah salah satu tanaman dari dunia *cowboy* yang memiliki kemampuan unik seperti shooter, multilane, homing. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Lightningreed menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Tallnut",
    "type_name": "tallnut",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Reinforcemint"
    ],
    "archetypes": [
      "wall",
      "antiair"
    ],
    "home_world": "cowboy",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 75,
        "max": 125
      },
      "hp": {
        "min": 8000,
        "max": 32000
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 10,
        "max": 20
      }
    },
    "special_strings": {
      "power_strings": [
        "TallnutShield"
      ]
    },
    "description": "Tallnut adalah salah satu tanaman dari dunia *cowboy* yang memiliki kemampuan unik seperti wall, antiair. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Tallnut menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Peapod",
    "type_name": "peapod",
    "rarity": "uncommon",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Appeasemint"
    ],
    "archetypes": [
      "shooter",
      "multishot"
    ],
    "home_world": "cowboy",
    "mastery_type": null,
    "seed_packet_cost": 60,
    "level_cap": 15,
    "stats": {
      "cost": {
        "min": 75,
        "max": 125
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 20,
        "max": 110
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Peapod adalah salah satu tanaman dari dunia *cowboy* yang memiliki kemampuan unik seperti shooter, multishot. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Peapod menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Melonpult",
    "type_name": "melonpult",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Armamint"
    ],
    "archetypes": [
      "lobber",
      "aoe",
      "multishot",
      "homing",
      "multilane"
    ],
    "home_world": "cowboy",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 15,
    "stats": {
      "cost": {
        "min": 200,
        "max": 325
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 80,
        "max": 160
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Melonpult adalah salah satu tanaman dari dunia *cowboy* yang memiliki kemampuan unik seperti lobber, aoe, multishot, homing, multilane. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Melonpult menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Wintermelon",
    "type_name": "wintermelon",
    "rarity": "uncommon",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Wintermint"
    ],
    "archetypes": [
      "lobber",
      "stall",
      "aoe",
      "multishot",
      "homing",
      "multilane"
    ],
    "home_world": "cowboy",
    "mastery_type": null,
    "seed_packet_cost": 60,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 350,
        "max": 500
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 80,
        "max": 160
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Wintermelon adalah salah satu tanaman dari dunia *cowboy* yang memiliki kemampuan unik seperti lobber, stall, aoe, multishot, homing, multilane. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Wintermelon menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Puffshroom",
    "type_name": "puffshroom",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Ailmint"
    ],
    "archetypes": [
      "shooter",
      "multishot",
      "shroom",
      "boost"
    ],
    "home_world": "dark",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 20,
    "stats": {
      "cost": {
        "min": 0,
        "max": 0
      },
      "hp": {
        "min": 150,
        "max": 700
      },
      "damage": {
        "min": 20,
        "max": 110
      },
      "cooldown": {
        "min": 2.5,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Puffshroom adalah salah satu tanaman dari dunia *dark* yang memiliki kemampuan unik seperti shooter, multishot, shroom, boost. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Puffshroom menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Fumeshroom",
    "type_name": "fumeshroom",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Ailmint"
    ],
    "archetypes": [
      "aoe",
      "reposition",
      "shroom",
      "piercing"
    ],
    "home_world": "dark",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 15,
    "stats": {
      "cost": {
        "min": 75,
        "max": 125
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 40,
        "max": 120
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Fumeshroom adalah salah satu tanaman dari dunia *dark* yang memiliki kemampuan unik seperti aoe, reposition, shroom, piercing. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Fumeshroom menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Sunbean",
    "type_name": "sunbean",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Enlightenmint"
    ],
    "archetypes": [
      "sunprod",
      "trap"
    ],
    "home_world": "dark",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 25,
        "max": 50
      },
      "hp": {
        "min": 50,
        "max": 50
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 15,
        "max": 20
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Sunbean adalah salah satu tanaman dari dunia *dark* yang memiliki kemampuan unik seperti sunprod, trap. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Sunbean menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Lilypad",
    "type_name": "lilypad",
    "rarity": "uncommon",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Containmint"
    ],
    "archetypes": [
      "water",
      "spawn",
      "boost"
    ],
    "home_world": "beach",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 25
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Lilypad adalah salah satu tanaman dari dunia *beach* yang memiliki kemampuan unik seperti water, spawn, boost. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Lilypad menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Tanglekelp",
    "type_name": "tanglekelp",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Enforcemint"
    ],
    "archetypes": [
      "trap",
      "aoe",
      "water"
    ],
    "home_world": "beach",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 25,
        "max": 25
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 10,
        "max": 20
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Tanglekelp adalah salah satu tanaman dari dunia *beach* yang memiliki kemampuan unik seperti trap, aoe, water. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Tanglekelp menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Bowlingbulb",
    "type_name": "bowlingbulb",
    "rarity": "uncommon",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Appeasemint"
    ],
    "archetypes": [
      "shooter",
      "aoe",
      "multishot",
      "multilane"
    ],
    "home_world": "beach",
    "mastery_type": null,
    "seed_packet_cost": 60,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 200
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": [
        "BowlingBulb_RegenOrder"
      ]
    },
    "description": "Bowlingbulb adalah salah satu tanaman dari dunia *beach* yang memiliki kemampuan unik seperti shooter, aoe, multishot, multilane. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Bowlingbulb menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Guacodile",
    "type_name": "guacodile",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Enforcemint"
    ],
    "archetypes": [
      "shooter",
      "trap",
      "spawn",
      "water"
    ],
    "home_world": "beach",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 15,
    "stats": {
      "cost": {
        "min": 75,
        "max": 125
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 20,
        "max": 110
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Guacodile adalah salah satu tanaman dari dunia *beach* yang memiliki kemampuan unik seperti shooter, trap, spawn, water. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Guacodile menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Banana",
    "type_name": "banana",
    "rarity": "uncommon",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Armamint"
    ],
    "archetypes": [
      "lobber",
      "tap",
      "aoe",
      "back"
    ],
    "home_world": "beach",
    "mastery_type": null,
    "seed_packet_cost": 60,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 350,
        "max": 500
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Banana adalah salah satu tanaman dari dunia *beach* yang memiliki kemampuan unik seperti lobber, tap, aoe, back. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Banana menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Laser Bean",
    "type_name": "laser_bean",
    "rarity": "uncommon",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Spearmint"
    ],
    "archetypes": [
      "shooter",
      "piercing"
    ],
    "home_world": "future",
    "mastery_type": null,
    "seed_packet_cost": 60,
    "level_cap": 15,
    "stats": {
      "cost": {
        "min": 100,
        "max": 200
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 40,
        "max": 180
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Laser Bean adalah salah satu tanaman dari dunia *future* yang memiliki kemampuan unik seperti shooter, piercing. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Laser Bean menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Blover",
    "type_name": "blover",
    "rarity": "rare",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Containmint"
    ],
    "archetypes": [
      "antiair"
    ],
    "home_world": "future",
    "mastery_type": null,
    "seed_packet_cost": 60,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 50
      },
      "hp": {
        "min": null,
        "max": null
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 1,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Blover adalah salah satu tanaman dari dunia *future* yang memiliki kemampuan unik seperti antiair. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Blover menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Citron",
    "type_name": "citron",
    "rarity": "uncommon",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Filamint"
    ],
    "archetypes": [
      "shooter",
      "piercing"
    ],
    "home_world": "future",
    "mastery_type": null,
    "seed_packet_cost": 60,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 225,
        "max": 350
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 800,
        "max": 1000
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Citron adalah salah satu tanaman dari dunia *future* yang memiliki kemampuan unik seperti shooter, piercing. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Citron menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Empea",
    "type_name": "empea",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Filamint"
    ],
    "archetypes": [
      "stall",
      "antimech"
    ],
    "home_world": "future",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 25
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 15,
        "max": 25
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Empea adalah salah satu tanaman dari dunia *future* yang memiliki kemampuan unik seperti stall, antimech. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Empea menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Holonut",
    "type_name": "holonut",
    "rarity": "uncommon",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Reinforcemint"
    ],
    "archetypes": [
      "wall",
      "aoe",
      "healer"
    ],
    "home_world": "future",
    "mastery_type": null,
    "seed_packet_cost": 60,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 50,
        "max": 75
      },
      "hp": {
        "min": 2000,
        "max": 4500
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 7,
        "max": 15
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Holonut adalah salah satu tanaman dari dunia *future* yang memiliki kemampuan unik seperti wall, aoe, healer. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Holonut menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Magnifyinggrass",
    "type_name": "magnifyinggrass",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Filamint"
    ],
    "archetypes": [
      "shooter",
      "tap",
      "homing"
    ],
    "home_world": "future",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 25,
        "max": 50
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 550,
        "max": 800
      },
      "cooldown": {
        "min": 5,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Magnifyinggrass adalah salah satu tanaman dari dunia *future* yang memiliki kemampuan unik seperti shooter, tap, homing. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Magnifyinggrass menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Powerplant",
    "type_name": "powerplant",
    "rarity": "rare",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Enchantmint"
    ],
    "archetypes": [
      "boost",
      "spawn"
    ],
    "home_world": "future",
    "mastery_type": null,
    "seed_packet_cost": 60,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 0
      },
      "hp": {
        "min": null,
        "max": null
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 5,
        "max": 10
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Powerplant adalah salah satu tanaman dari dunia *future* yang memiliki kemampuan unik seperti boost, spawn. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Powerplant menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Hotpotato",
    "type_name": "hotpotato",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Peppermint"
    ],
    "archetypes": [
      "antifreeze"
    ],
    "home_world": "iceage",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 0
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 5,
        "max": 10
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Hotpotato adalah salah satu tanaman dari dunia *iceage* yang memiliki kemampuan unik seperti antifreeze. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Hotpotato menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Pepperpult",
    "type_name": "pepperpult",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Peppermint"
    ],
    "archetypes": [
      "lobber",
      "multishot",
      "multilane",
      "antifreeze"
    ],
    "home_world": "iceage",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 15,
    "stats": {
      "cost": {
        "min": 100,
        "max": 200
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 50,
        "max": 200
      },
      "cooldown": {
        "min": 10,
        "max": 20
      }
    },
    "special_strings": {
      "power_strings": [
        "Pepperpult_WarmingRadius",
        "Pepperpult_WarmingRadiusPF"
      ]
    },
    "description": "Pepperpult adalah salah satu tanaman dari dunia *iceage* yang memiliki kemampuan unik seperti lobber, multishot, multilane, antifreeze. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Pepperpult menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Chardguard",
    "type_name": "chardguard",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Reinforcemint"
    ],
    "archetypes": [
      "melee",
      "reposition",
      "aoe"
    ],
    "home_world": "iceage",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 25,
        "max": 75
      },
      "hp": {
        "min": 1500,
        "max": 3000
      },
      "damage": {
        "min": 60,
        "max": 150
      },
      "cooldown": {
        "min": 5,
        "max": 15
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Chardguard adalah salah satu tanaman dari dunia *iceage* yang memiliki kemampuan unik seperti melee, reposition, aoe. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Chardguard menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Stunion",
    "type_name": "stunion",
    "rarity": "rare",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Containmint"
    ],
    "archetypes": [
      "stall",
      "aoe"
    ],
    "home_world": "iceage",
    "mastery_type": null,
    "seed_packet_cost": 100,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 25
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 12,
        "max": 20
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Stunion adalah salah satu tanaman dari dunia *iceage* yang memiliki kemampuan unik seperti stall, aoe. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Stunion menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Xshot",
    "type_name": "xshot",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Appeasemint"
    ],
    "archetypes": [
      "shooter",
      "multishot",
      "multilane",
      "back"
    ],
    "home_world": "iceage",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 150
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 10,
        "max": 40
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Xshot adalah salah satu tanaman dari dunia *iceage* yang memiliki kemampuan unik seperti shooter, multishot, multilane, back. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Xshot menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Redstinger",
    "type_name": "redstinger",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Appeasemint"
    ],
    "archetypes": [
      "shooter",
      "multishot",
      "piercing"
    ],
    "home_world": "lostcity",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 150
      },
      "hp": {
        "min": null,
        "max": null
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": [
        "RedStingerLocationData"
      ]
    },
    "description": "Redstinger adalah salah satu tanaman dari dunia *lostcity* yang memiliki kemampuan unik seperti shooter, multishot, piercing. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Redstinger menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Akee",
    "type_name": "akee",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Armamint"
    ],
    "archetypes": [
      "lobber",
      "multishot",
      "multilane"
    ],
    "home_world": "lostcity",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 150,
        "max": 175
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 60,
        "max": 150
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Akee adalah salah satu tanaman dari dunia *lostcity* yang memiliki kemampuan unik seperti lobber, multishot, multilane. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Akee menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Endurian",
    "type_name": "endurian",
    "rarity": "uncommon",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Reinforcemint"
    ],
    "archetypes": [
      "melee",
      "wall"
    ],
    "home_world": "lostcity",
    "mastery_type": null,
    "seed_packet_cost": 60,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 75,
        "max": 100
      },
      "hp": {
        "min": 3000,
        "max": 5000
      },
      "damage": {
        "min": 20,
        "max": 80
      },
      "cooldown": {
        "min": 7,
        "max": 15
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Endurian adalah salah satu tanaman dari dunia *lostcity* yang memiliki kemampuan unik seperti melee, wall. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Endurian menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Stallia",
    "type_name": "stallia",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Containmint"
    ],
    "archetypes": [
      "aoe",
      "stall"
    ],
    "home_world": "lostcity",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 0
      },
      "hp": {
        "min": null,
        "max": null
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 15,
        "max": 20
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Stallia adalah salah satu tanaman dari dunia *lostcity* yang memiliki kemampuan unik seperti aoe, stall. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Stallia menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Goldleaf",
    "type_name": "goldleaf",
    "rarity": "uncommon",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Enlightenmint"
    ],
    "archetypes": [
      "sunprod",
      "spawn"
    ],
    "home_world": "lostcity",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 20,
        "max": 80
      },
      "hp": {
        "min": null,
        "max": null
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 20,
        "max": 50
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Goldleaf adalah salah satu tanaman dari dunia *lostcity* yang memiliki kemampuan unik seperti sunprod, spawn. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Goldleaf menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Phatbeet",
    "type_name": "phatbeet",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Enforcemint"
    ],
    "archetypes": [
      "aoe"
    ],
    "home_world": "eighties",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 15,
    "stats": {
      "cost": {
        "min": 75,
        "max": 150
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": [
        "PhatBeetDamageNormal",
        "PhatBeetDamagePowerful",
        "PhatBeetInnerPF",
        "PhatBeetOuterPF"
      ]
    },
    "description": "Phatbeet adalah salah satu tanaman dari dunia *eighties* yang memiliki kemampuan unik seperti aoe. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Phatbeet menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Celerystalker",
    "type_name": "celerystalker",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Enforcemint"
    ],
    "archetypes": [
      "melee",
      "back"
    ],
    "home_world": "eighties",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 50,
        "max": 50
      },
      "hp": {
        "min": 1200,
        "max": 2200
      },
      "damage": {
        "min": 100,
        "max": 280
      },
      "cooldown": {
        "min": 10,
        "max": 15
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Celerystalker adalah salah satu tanaman dari dunia *eighties* yang memiliki kemampuan unik seperti melee, back. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Celerystalker menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Sporeshroom",
    "type_name": "sporeshroom",
    "rarity": "uncommon",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Ailmint"
    ],
    "archetypes": [
      "lobber",
      "shroom",
      "multishot",
      "spawn",
      "multilane"
    ],
    "home_world": "eighties",
    "mastery_type": null,
    "seed_packet_cost": 60,
    "level_cap": 15,
    "stats": {
      "cost": {
        "min": 75,
        "max": 150
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 50,
        "max": 120
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Sporeshroom adalah salah satu tanaman dari dunia *eighties* yang memiliki kemampuan unik seperti lobber, shroom, multishot, spawn, multilane. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Sporeshroom menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Garlic",
    "type_name": "garlic",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Ailmint"
    ],
    "archetypes": [
      "wall",
      "stall",
      "reposition",
      "aoe"
    ],
    "home_world": "eighties",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 25,
        "max": 50
      },
      "hp": {
        "min": 600,
        "max": 1200
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 12,
        "max": 20
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Garlic adalah salah satu tanaman dari dunia *eighties* yang memiliki kemampuan unik seperti wall, stall, reposition, aoe. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Garlic menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Primalpeashooter",
    "type_name": "primalpeashooter",
    "rarity": "uncommon",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Appeasemint"
    ],
    "archetypes": [
      "shooter",
      "stall",
      "multishot",
      "reposition"
    ],
    "home_world": "dino",
    "mastery_type": null,
    "seed_packet_cost": 60,
    "level_cap": 15,
    "stats": {
      "cost": {
        "min": 100,
        "max": 175
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 50,
        "max": 150
      },
      "cooldown": {
        "min": 5,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Primalpeashooter adalah salah satu tanaman dari dunia *dino* yang memiliki kemampuan unik seperti shooter, stall, multishot, reposition. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Primalpeashooter menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Primalwallnut",
    "type_name": "primalwallnut",
    "rarity": "uncommon",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Reinforcemint"
    ],
    "archetypes": [
      "wall"
    ],
    "home_world": "dino",
    "mastery_type": null,
    "seed_packet_cost": 60,
    "level_cap": 15,
    "stats": {
      "cost": {
        "min": 75,
        "max": 75
      },
      "hp": {
        "min": 4000,
        "max": 11000
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 2.5,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": [
        "WallnutShield"
      ]
    },
    "description": "Primalwallnut adalah salah satu tanaman dari dunia *dino* yang memiliki kemampuan unik seperti wall. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Primalwallnut menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Perfumeshroom",
    "type_name": "perfumeshroom",
    "rarity": "rare",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Ailmint"
    ],
    "archetypes": [
      "transform",
      "shroom"
    ],
    "home_world": "dino",
    "mastery_type": null,
    "seed_packet_cost": 60,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 150
      },
      "hp": {
        "min": null,
        "max": null
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 15,
        "max": 30
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Perfumeshroom adalah salah satu tanaman dari dunia *dino* yang memiliki kemampuan unik seperti transform, shroom. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Perfumeshroom menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Primalsunflower",
    "type_name": "primalsunflower",
    "rarity": "uncommon",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Enlightenmint"
    ],
    "archetypes": [
      "sunprod"
    ],
    "home_world": "dino",
    "mastery_type": null,
    "seed_packet_cost": 60,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 75,
        "max": 75
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": [
        "PrimalSunflowerSunProduction"
      ]
    },
    "description": "Primalsunflower adalah salah satu tanaman dari dunia *dino* yang memiliki kemampuan unik seperti sunprod. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Primalsunflower menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Primalpotatomine",
    "type_name": "primalpotatomine",
    "rarity": "uncommon",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Bombardmint"
    ],
    "archetypes": [
      "aoe",
      "trap",
      "spawn"
    ],
    "home_world": "dino",
    "mastery_type": null,
    "seed_packet_cost": 60,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 50,
        "max": 50
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 15,
        "max": 25
      }
    },
    "special_strings": {
      "power_strings": [
        "PotatomineExplosion"
      ]
    },
    "description": "Primalpotatomine adalah salah satu tanaman dari dunia *dino* yang memiliki kemampuan unik seperti aoe, trap, spawn. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Primalpotatomine menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Moonflower",
    "type_name": "moonflower",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Concealmint"
    ],
    "archetypes": [
      "wall",
      "sunprod",
      "boost",
      "shadow"
    ],
    "home_world": "modern",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 25,
        "max": 50
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 5,
        "max": 10
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Moonflower adalah salah satu tanaman dari dunia *modern* yang memiliki kemampuan unik seperti wall, sunprod, boost, shadow. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Moonflower menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Shadowshroom",
    "type_name": "shadowshroom",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Concealmint"
    ],
    "archetypes": [
      "trap",
      "shroom",
      "stall",
      "shadow"
    ],
    "home_world": "modern",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 25,
        "max": 50
      },
      "hp": {
        "min": 50,
        "max": 50
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 5,
        "max": 10
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Shadowshroom adalah salah satu tanaman dari dunia *modern* yang memiliki kemampuan unik seperti trap, shroom, stall, shadow. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Shadowshroom menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Dusklobber",
    "type_name": "dusklobber",
    "rarity": "uncommon",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Concealmint"
    ],
    "archetypes": [
      "lobber",
      "aoe",
      "shadow"
    ],
    "home_world": "modern",
    "mastery_type": null,
    "seed_packet_cost": 60,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 125,
        "max": 150
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 30,
        "max": 90
      },
      "cooldown": {
        "min": 5,
        "max": 10
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Dusklobber adalah salah satu tanaman dari dunia *modern* yang memiliki kemampuan unik seperti lobber, aoe, shadow. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Dusklobber menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Nightshade",
    "type_name": "nightshade",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Concealmint"
    ],
    "archetypes": [
      "shooter",
      "melee",
      "shadow"
    ],
    "home_world": "modern",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 50,
        "max": 75
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 100,
        "max": 400
      },
      "cooldown": {
        "min": 2.5,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Nightshade adalah salah satu tanaman dari dunia *modern* yang memiliki kemampuan unik seperti shooter, melee, shadow. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Nightshade menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Grimrose",
    "type_name": "grimrose",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Concealmint"
    ],
    "archetypes": [
      "trap",
      "aoe",
      "shadow"
    ],
    "home_world": "modern",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 50,
        "max": 75
      },
      "hp": {
        "min": 300,
        "max": 300
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 12,
        "max": 20
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Grimrose adalah salah satu tanaman dari dunia *modern* yang memiliki kemampuan unik seperti trap, aoe, shadow. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Grimrose menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Goldbloom",
    "type_name": "goldbloom",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Enlightenmint"
    ],
    "archetypes": [
      "sunprod"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 0
      },
      "hp": {
        "min": null,
        "max": null
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 45,
        "max": 75
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Goldbloom adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti sunprod. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Goldbloom menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Electriccurrant",
    "type_name": "electriccurrant",
    "rarity": "common",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Filamint"
    ],
    "archetypes": [
      "aoe",
      "spawn",
      "reposition"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 150
      },
      "hp": {
        "min": 200,
        "max": 800
      },
      "damage": {
        "min": 48,
        "max": 90
      },
      "cooldown": {
        "min": 5,
        "max": 10
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Electriccurrant adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti aoe, spawn, reposition. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Electriccurrant menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Snowpea",
    "type_name": "snowpea",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Wintermint"
    ],
    "archetypes": [
      "shooter",
      "stall",
      "multishot",
      "aoe"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 150
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 20,
        "max": 120
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Snowpea adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti shooter, stall, multishot, aoe. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Snowpea menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Powerlily",
    "type_name": "powerlily",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Enchantmint"
    ],
    "archetypes": [
      "spawn"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 175
      },
      "hp": {
        "min": null,
        "max": null
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 45,
        "max": 60
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Powerlily adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti spawn. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Powerlily menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Squash",
    "type_name": "squash",
    "rarity": "uncommon",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Enforcemint"
    ],
    "archetypes": [
      "melee",
      "homing"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 25,
        "max": 50
      },
      "hp": {
        "min": null,
        "max": null
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 10,
        "max": 20
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Squash adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti melee, homing. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Squash menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Torchwood",
    "type_name": "torchwood",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Appeasemint"
    ],
    "archetypes": [
      "boost",
      "aoe",
      "trap",
      "antifreeze"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 100,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 50,
        "max": 175
      },
      "hp": {
        "min": 2000,
        "max": 3350
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 5,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Torchwood adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti boost, aoe, trap, antifreeze. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Torchwood menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Jalapeno",
    "type_name": "jalapeno",
    "rarity": "uncommon",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Peppermint"
    ],
    "archetypes": [
      "aoe",
      "back",
      "antifreeze"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 75,
        "max": 125
      },
      "hp": {
        "min": null,
        "max": null
      },
      "damage": {
        "min": 1800,
        "max": 2400
      },
      "cooldown": {
        "min": 25,
        "max": 35
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Jalapeno adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti aoe, back, antifreeze. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Jalapeno menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Starfruit",
    "type_name": "starfruit",
    "rarity": "uncommon",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Appeasemint"
    ],
    "archetypes": [
      "shooter",
      "multishot",
      "multilane",
      "back"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 200,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 75,
        "max": 150
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 20,
        "max": 120
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Starfruit adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti shooter, multishot, multilane, back. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Starfruit menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Hypnoshroom",
    "type_name": "hypnoshroom",
    "rarity": "uncommon",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Enchantmint"
    ],
    "archetypes": [
      "transform",
      "trap",
      "aoe"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 75,
        "max": 125
      },
      "hp": {
        "min": 50,
        "max": 350
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 12,
        "max": 20
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Hypnoshroom adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti transform, trap, aoe. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Hypnoshroom menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Peanut",
    "type_name": "peanut",
    "rarity": "uncommon",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Reinforcemint"
    ],
    "archetypes": [
      "wall",
      "shooter",
      "multishot"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 75,
        "max": 150
      },
      "hp": {
        "min": 4000,
        "max": 12000
      },
      "damage": {
        "min": 20,
        "max": 110
      },
      "cooldown": {
        "min": 5,
        "max": 15
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Peanut adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti wall, shooter, multishot. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Peanut menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Chomper",
    "type_name": "chomper",
    "rarity": "uncommon",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Enforcemint"
    ],
    "archetypes": [
      "melee",
      "reposition"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 75,
        "max": 150
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Chomper adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti melee, reposition. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Chomper menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Homingthistle",
    "type_name": "homingthistle",
    "rarity": "uncommon",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Spearmint"
    ],
    "archetypes": [
      "shooter",
      "multishot",
      "homing"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 150,
        "max": 250
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 40,
        "max": 140
      },
      "cooldown": {
        "min": 5,
        "max": 15
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Homingthistle adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti shooter, multishot, homing. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Homingthistle menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Ghostpepper",
    "type_name": "ghostpepper",
    "rarity": "epic",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Peppermint"
    ],
    "archetypes": [
      "aoe",
      "trap"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 50,
        "max": 75
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 30,
        "max": 60
      },
      "cooldown": {
        "min": 7,
        "max": 15
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Ghostpepper adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti aoe, trap. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Ghostpepper menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Sweetpotato",
    "type_name": "sweetpotato",
    "rarity": "common",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Reinforcemint"
    ],
    "archetypes": [
      "wall",
      "reposition"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 50,
        "max": 150
      },
      "hp": {
        "min": 4000,
        "max": 8500
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 15,
        "max": 20
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Sweetpotato adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti wall, reposition. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Sweetpotato menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Sapfling",
    "type_name": "sapfling",
    "rarity": "uncommon",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Containmint"
    ],
    "archetypes": [
      "lobber",
      "stall",
      "spawn",
      "multilane"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 50,
        "max": 75
      },
      "hp": {
        "min": 300,
        "max": 2000
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Sapfling adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti lobber, stall, spawn, multilane. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Sapfling menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Hurrikale",
    "type_name": "hurrikale",
    "rarity": "uncommon",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Containmint"
    ],
    "archetypes": [
      "stall",
      "reposition",
      "antiair",
      "aoe"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 25,
        "max": 100
      },
      "hp": {
        "min": null,
        "max": null
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 9,
        "max": 15
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Hurrikale adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti stall, reposition, antiair, aoe. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Hurrikale menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Firepeashooter",
    "type_name": "firepeashooter",
    "rarity": "uncommon",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Peppermint"
    ],
    "archetypes": [
      "shooter",
      "aoe",
      "antifreeze"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 125,
        "max": 175
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 40,
        "max": 240
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Firepeashooter adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti shooter, aoe, antifreeze. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Firepeashooter menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Dandelion",
    "type_name": "dandelion",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Appeasemint"
    ],
    "archetypes": [
      "shooter",
      "aoe",
      "multilane"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 150,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 150,
        "max": 275
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 50,
        "max": 150
      },
      "cooldown": {
        "min": 10,
        "max": 15
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Dandelion adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti shooter, aoe, multilane. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Dandelion menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Lavaguava",
    "type_name": "lavaguava",
    "rarity": "uncommon",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Peppermint"
    ],
    "archetypes": [
      "aoe",
      "trap",
      "spawn",
      "antifreeze"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 25,
        "max": 75
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 10,
        "max": 15
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Lavaguava adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti aoe, trap, spawn, antifreeze. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Lavaguava menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Toadstool",
    "type_name": "toadstool",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Enlightenmint"
    ],
    "archetypes": [
      "melee",
      "sunprod",
      "shroom",
      "aoe"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 150,
        "max": 200
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Toadstool adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti melee, sunprod, shroom, aoe. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Toadstool menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Strawburst",
    "type_name": "strawburst",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Bombardmint"
    ],
    "archetypes": [
      "aoe",
      "tap"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 300,
        "max": 400
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": [
        "StrawburstGrowth"
      ]
    },
    "description": "Strawburst adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti aoe, tap. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Strawburst menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Cactus",
    "type_name": "cactus",
    "rarity": "uncommon",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Spearmint"
    ],
    "archetypes": [
      "shooter",
      "melee",
      "trap",
      "antiair",
      "piercing"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 175
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 30,
        "max": 120
      },
      "cooldown": {
        "min": 2.5,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Cactus adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti shooter, melee, trap, antiair, piercing. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Cactus menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Electricblueberry",
    "type_name": "electricblueberry",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Filamint"
    ],
    "archetypes": [
      "homing"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 150
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 35,
        "max": 45
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Electricblueberry adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti homing. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Electricblueberry menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Jackolantern",
    "type_name": "jackolantern",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Peppermint"
    ],
    "archetypes": [
      "aoe",
      "spawn"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 175,
        "max": 225
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 15,
        "max": 20
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Jackolantern adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti aoe, spawn. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Jackolantern menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Grapeshot",
    "type_name": "grapeshot",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Bombardmint"
    ],
    "archetypes": [
      "aoe"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 150
      },
      "hp": {
        "min": null,
        "max": null
      },
      "damage": {
        "min": 1800,
        "max": 2400
      },
      "cooldown": {
        "min": 20,
        "max": 35
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Grapeshot adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti aoe. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Grapeshot menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Coldsnapdragon",
    "type_name": "coldsnapdragon",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Wintermint"
    ],
    "archetypes": [
      "stall",
      "aoe",
      "piercing"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 150
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 5,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": [
        "ColdSnapdragon_NormalDamage",
        "ColdSnapdragon_PFDamage"
      ]
    },
    "description": "Coldsnapdragon adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti stall, aoe, piercing. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Coldsnapdragon menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Shrinkingviolet",
    "type_name": "shrinkingviolet",
    "rarity": "uncommon",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Enchantmint"
    ],
    "archetypes": [
      "transform"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 50
      },
      "hp": {
        "min": null,
        "max": null
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 10,
        "max": 15
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Shrinkingviolet adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti transform. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Shrinkingviolet menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Bloominghearts",
    "type_name": "bloominghearts",
    "rarity": "uncommon",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Ailmint"
    ],
    "archetypes": [
      "lobber",
      "multishot",
      "homing",
      "multilane"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 150,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 150
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 40,
        "max": 120
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Bloominghearts adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti lobber, multishot, homing, multilane. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Bloominghearts menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Escaperoot",
    "type_name": "escaperoot",
    "rarity": "uncommon",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Bombardmint"
    ],
    "archetypes": [
      "aoe",
      "tap",
      "reposition"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 25,
        "max": 50
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 15,
        "max": 20
      }
    },
    "special_strings": {
      "power_strings": [
        "EscapeRoot_PotatoMineDamage",
        "EscapeRoot_PrimalPotatoMineDamage",
        "EscapeRoot_CherryBombDamage",
        "EscapeRoot_GrapeshotDamage"
      ]
    },
    "description": "Escaperoot adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti aoe, tap, reposition. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Escaperoot menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Applemortar",
    "type_name": "applemortar",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Armamint"
    ],
    "archetypes": [
      "lobber",
      "multishot",
      "homing",
      "multilane "
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 175,
        "max": 250
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 30,
        "max": 120
      },
      "cooldown": {
        "min": 5,
        "max": 8
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Applemortar adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti lobber, multishot, homing, multilane . Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Applemortar menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Bombegranate",
    "type_name": "bombegranate",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Bombardmint"
    ],
    "archetypes": [
      "aoe",
      "spawn"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 200,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 150
      },
      "hp": {
        "min": null,
        "max": null
      },
      "damage": {
        "min": 1800,
        "max": 2400
      },
      "cooldown": {
        "min": 20,
        "max": 35
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Bombegranate adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti aoe, spawn. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Bombegranate menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Imitater",
    "type_name": "imitater",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Enchantmint"
    ],
    "archetypes": [
      "spawn"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 1,
    "stats": {
      "cost": {
        "min": null,
        "max": null
      },
      "hp": {
        "min": null,
        "max": null
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": null,
        "max": null
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Imitater adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti spawn. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Imitater menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Wasabiwhip",
    "type_name": "wasabiwhip",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Enforcemint"
    ],
    "archetypes": [
      "melee",
      "aoe",
      "back",
      "antifreeze"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 75,
        "max": 150
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 40,
        "max": 200
      },
      "cooldown": {
        "min": 5,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Wasabiwhip adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti melee, aoe, back, antifreeze. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Wasabiwhip menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Magnetshroom",
    "type_name": "magnetshroom",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Containmint"
    ],
    "archetypes": [
      "shooter",
      "transform",
      "shroom"
    ],
    "home_world": "dark",
    "mastery_type": null,
    "seed_packet_cost": 40,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 25,
        "max": 100
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 10,
        "max": 15
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Magnetshroom adalah salah satu tanaman dari dunia *dark* yang memiliki kemampuan unik seperti shooter, transform, shroom. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Magnetshroom menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Explodeonut",
    "type_name": "explodeonut",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Bombardmint"
    ],
    "archetypes": [
      "wall",
      "aoe"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 50,
        "max": 50
      },
      "hp": {
        "min": 3000,
        "max": 3000
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 5,
        "max": 10
      }
    },
    "special_strings": {
      "power_strings": [
        "ExplodeONutShield",
        "ExplodeONutExplosion"
      ]
    },
    "description": "Explodeonut adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti wall, aoe. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Explodeonut menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Aloe",
    "type_name": "aloe",
    "rarity": "common",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Reinforcemint"
    ],
    "archetypes": [
      "wall",
      "healer",
      "aoe"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 150,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 25,
        "max": 75
      },
      "hp": {
        "min": 450,
        "max": 1050
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 15,
        "max": 20
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Aloe adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti wall, healer, aoe. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Aloe menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Marigold",
    "type_name": "marigold",
    "rarity": "uncommon",
    "premium": false,
    "tier_max": 2,
    "family": [],
    "archetypes": [],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 1,
    "stats": {
      "cost": {
        "min": null,
        "max": null
      },
      "hp": {
        "min": null,
        "max": null
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": null,
        "max": null
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Marigold adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan yang belum diketahui secara pasti. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Marigold menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Kiwibeast",
    "type_name": "kiwibeast",
    "rarity": "common",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Enforcemint"
    ],
    "archetypes": [
      "wall",
      "aoe"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 175
      },
      "hp": {
        "min": 2000,
        "max": 4500
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 10,
        "max": 15
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Kiwibeast adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti wall, aoe. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Kiwibeast menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Missiletoe",
    "type_name": "missiletoe",
    "rarity": "uncommon",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Wintermint"
    ],
    "archetypes": [
      "lobber",
      "stall",
      "aoe",
      "tap"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 350,
        "max": 500
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 5,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Missiletoe adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti lobber, stall, aoe, tap. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Missiletoe menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Parsnip",
    "type_name": "parsnip",
    "rarity": "uncommon",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Enforcemint"
    ],
    "archetypes": [
      "melee",
      "spawn"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 75,
        "max": 150
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 80,
        "max": 300
      },
      "cooldown": {
        "min": 5,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Parsnip adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti melee, spawn. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Parsnip menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Witchhazel",
    "type_name": "witchhazel",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Enchantmint"
    ],
    "archetypes": [
      "shooter",
      "spawn",
      "transform"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 150,
        "max": 200
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 1200,
        "max": 1800
      },
      "cooldown": {
        "min": 15,
        "max": 30
      }
    },
    "special_strings": {
      "power_strings": [
        "WitchHazel_BasicTransformationType",
        "WitchHazel_PlantfoodTransformationType"
      ]
    },
    "description": "Witchhazel adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti shooter, spawn, transform. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Witchhazel menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Hotdate",
    "type_name": "hotdate",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Peppermint"
    ],
    "archetypes": [
      "aoe",
      "reposition",
      "antifreeze"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 200,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 75,
        "max": 175
      },
      "hp": {
        "min": 2000,
        "max": 5000
      },
      "damage": {
        "min": 1000,
        "max": 1800
      },
      "cooldown": {
        "min": 20,
        "max": 25
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Hotdate adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti aoe, reposition, antifreeze. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Hotdate menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Caulipower",
    "type_name": "caulipower",
    "rarity": "legendary",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Enchantmint"
    ],
    "archetypes": [
      "transform",
      "homing",
      "shooter"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 150,
        "max": 250
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 35,
        "max": 45
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Caulipower adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti transform, homing, shooter. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Caulipower menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Solartomato",
    "type_name": "solartomato",
    "rarity": "uncommon",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Enlightenmint"
    ],
    "archetypes": [
      "stall",
      "sunprod",
      "aoe"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 150,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 100
      },
      "hp": {
        "min": 3000,
        "max": 3000
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 16,
        "max": 25
      }
    },
    "special_strings": {
      "power_strings": [
        "SolarTomatoSunProduction"
      ]
    },
    "description": "Solartomato adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti stall, sunprod, aoe. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Solartomato menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Electricpeashooter",
    "type_name": "electricpeashooter",
    "rarity": "epic",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Filamint"
    ],
    "archetypes": [
      "shooter",
      "aoe",
      "piercing"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 150,
        "max": 200
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 5,
        "max": 50
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Electricpeashooter adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti shooter, aoe, piercing. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Electricpeashooter menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Electricitea",
    "type_name": "electricitea",
    "rarity": "uncommon",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Filamint"
    ],
    "archetypes": [
      "aoe",
      "trap",
      "multishot",
      "homing"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 100,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 75,
        "max": 125
      },
      "hp": {
        "min": 150,
        "max": 150
      },
      "damage": {
        "min": 3,
        "max": 10
      },
      "cooldown": {
        "min": 10,
        "max": 15
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Electricitea adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti aoe, trap, multishot, homing. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Electricitea menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Hollyknight",
    "type_name": "hollyknight",
    "rarity": "uncommon",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Reinforcemint"
    ],
    "archetypes": [
      "melee",
      "wall",
      "spawn"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 150
      },
      "hp": {
        "min": 3000,
        "max": 5000
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 10,
        "max": 15
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Hollyknight adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti melee, wall, spawn. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Hollyknight menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Hollybarrierleaf",
    "type_name": "hollybarrierleaf",
    "rarity": "unknown",
    "premium": false,
    "tier_max": 3,
    "family": [],
    "archetypes": [],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 0
      },
      "hp": {
        "min": 3000,
        "max": 3000
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 0,
        "max": 0
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Hollybarrierleaf adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan yang belum diketahui secara pasti. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Hollybarrierleaf menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Hollybarrierleafplantfood",
    "type_name": "hollybarrierleafplantfood",
    "rarity": "common",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Reinforcemint"
    ],
    "archetypes": [
      "test"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 0
      },
      "hp": {
        "min": 3000,
        "max": 3000
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 0,
        "max": 0
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Hollybarrierleafplantfood adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti test. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Hollybarrierleafplantfood menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Filamint",
    "type_name": "filamint",
    "rarity": "epic",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Filamint",
      "Empowermint"
    ],
    "archetypes": [
      "boost",
      "multishot",
      "homing"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 0
      },
      "hp": {
        "min": 100000,
        "max": 100000
      },
      "damage": {
        "min": 150,
        "max": 1500
      },
      "cooldown": {
        "min": 60,
        "max": 85
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Filamint adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti boost, multishot, homing. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Filamint menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Peppermint",
    "type_name": "peppermint",
    "rarity": "uncommon",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Peppermint",
      "Empowermint"
    ],
    "archetypes": [
      "boost",
      "aoe",
      "multilane",
      "antifreeze"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 0
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 60,
        "max": 85
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Peppermint adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti boost, aoe, multilane, antifreeze. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Peppermint menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Wintermint",
    "type_name": "wintermint",
    "rarity": "uncommon",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Wintermint",
      "Empowermint"
    ],
    "archetypes": [
      "boost",
      "stall",
      "aoe"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 0
      },
      "hp": {
        "min": 100000,
        "max": 100000
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 60,
        "max": 85
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Wintermint adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti boost, stall, aoe. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Wintermint menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Enlightenmint",
    "type_name": "enlightenmint",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Enlightenmint",
      "Empowermint"
    ],
    "archetypes": [
      "boost",
      "sunprod"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 100,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 0
      },
      "hp": {
        "min": 100000,
        "max": 100000
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 60,
        "max": 85
      }
    },
    "special_strings": {
      "power_strings": [
        "Enlightenmint_SunProduction"
      ]
    },
    "description": "Enlightenmint adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti boost, sunprod. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Enlightenmint menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Reinforcemint",
    "type_name": "reinforcemint",
    "rarity": "common",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Reinforcemint",
      "Empowermint"
    ],
    "archetypes": [
      "boost",
      "reposition"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 0
      },
      "hp": {
        "min": 100000,
        "max": 100000
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 60,
        "max": 85
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Reinforcemint adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti boost, reposition. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Reinforcemint menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Bombardmint",
    "type_name": "bombardmint",
    "rarity": "epic",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Bombardmint",
      "Empowermint"
    ],
    "archetypes": [
      "boost",
      "aoe"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 0
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 60,
        "max": 85
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Bombardmint adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti boost, aoe. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Bombardmint menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Ailmint",
    "type_name": "ailmint",
    "rarity": "common",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Ailmint",
      "Empowermint"
    ],
    "archetypes": [
      "boost"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 0
      },
      "hp": {
        "min": 100000,
        "max": 100000
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 60,
        "max": 85
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Ailmint adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti boost. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Ailmint menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Enchantmint",
    "type_name": "enchantmint",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Enchantmint",
      "Empowermint"
    ],
    "archetypes": [
      "boost",
      "transform"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 0
      },
      "hp": {
        "min": 100000,
        "max": 100000
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 60,
        "max": 85
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Enchantmint adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti boost, transform. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Enchantmint menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Containmint",
    "type_name": "containmint",
    "rarity": "common",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Containmint",
      "Empowermint"
    ],
    "archetypes": [
      "boost",
      "stall"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 0
      },
      "hp": {
        "min": 100000,
        "max": 100000
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 60,
        "max": 85
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Containmint adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti boost, stall. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Containmint menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Enforcemint",
    "type_name": "enforcemint",
    "rarity": "uncommon",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Enforcemint",
      "Empowermint"
    ],
    "archetypes": [
      "boost",
      "transform"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 0
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 60,
        "max": 85
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Enforcemint adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti boost, transform. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Enforcemint menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Armamint",
    "type_name": "armamint",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Armamint",
      "Empowermint"
    ],
    "archetypes": [
      "boost",
      "lobber"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 0
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 1200,
        "max": 1600
      },
      "cooldown": {
        "min": 60,
        "max": 85
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Armamint adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti boost, lobber. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Armamint menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Concealmint",
    "type_name": "concealmint",
    "rarity": "legendary",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Concealmint",
      "Empowermint"
    ],
    "archetypes": [
      "boost",
      "trap"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 0
      },
      "hp": {
        "min": 10000,
        "max": 10000
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 60,
        "max": 85
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Concealmint adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti boost, trap. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Concealmint menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Spearmint",
    "type_name": "spearmint",
    "rarity": "mythical",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Spearmint",
      "Empowermint"
    ],
    "archetypes": [
      "boost",
      "spawn"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 0
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 60,
        "max": 85
      }
    },
    "special_strings": {
      "power_strings": [
        "Spearmint_PlantTypeToSpawn"
      ]
    },
    "description": "Spearmint adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti boost, spawn. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Spearmint menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Shadowpeashooter",
    "type_name": "shadowpeashooter",
    "rarity": "mythical",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Concealmint"
    ],
    "archetypes": [
      "shooter",
      "stall",
      "aoe",
      "trap",
      "piercing",
      "shadow"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 125
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 30,
        "max": 75
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Shadowpeashooter adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti shooter, stall, aoe, trap, piercing, shadow. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Shadowpeashooter menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Poisonpeashooter",
    "type_name": "poisonpeashooter",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Ailmint"
    ],
    "archetypes": [
      "shooter",
      "stall",
      "reposition",
      "piercing"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 125
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 30,
        "max": 75
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Poisonpeashooter adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti shooter, stall, reposition, piercing. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Poisonpeashooter menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Slingpea",
    "type_name": "slingpea",
    "rarity": "uncommon",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Armamint"
    ],
    "archetypes": [
      "lobber",
      "aoe",
      "multishot",
      "multilane"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 125
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 20,
        "max": 65
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Slingpea adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti lobber, aoe, multishot, multilane. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Slingpea menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Appeasemint",
    "type_name": "appeasemint",
    "rarity": "common",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Appeasemint",
      "Empowermint"
    ],
    "archetypes": [
      "boost",
      "shooter",
      "multishot"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 0
      },
      "hp": {
        "min": 100000,
        "max": 100000
      },
      "damage": {
        "min": 300,
        "max": 350
      },
      "cooldown": {
        "min": 60,
        "max": 85
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Appeasemint adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti boost, shooter, multishot. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Appeasemint menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Minipeashooter",
    "type_name": "minipeashooter",
    "rarity": "common",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Appeasemint"
    ],
    "archetypes": [
      "test"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 20,
    "stats": {
      "cost": {
        "min": 25,
        "max": 25
      },
      "hp": {
        "min": 100,
        "max": 100
      },
      "damage": {
        "min": 5,
        "max": 10
      },
      "cooldown": {
        "min": 2.5,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Minipeashooter adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti test. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Minipeashooter menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Snappea",
    "type_name": "snappea",
    "rarity": "uncommon",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Enforcemint"
    ],
    "archetypes": [
      "shooter",
      "melee",
      "aoe",
      "trap",
      "multishot"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 150,
        "max": 200
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 30,
        "max": 75
      },
      "cooldown": {
        "min": 6,
        "max": 10
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Snappea adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti shooter, melee, aoe, trap, multishot. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Snappea menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Burnade",
    "type_name": "burnade",
    "rarity": "common",
    "premium": true,
    "tier_max": 3,
    "family": [],
    "archetypes": [
      "test"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 20,
    "stats": {
      "cost": {
        "min": 0,
        "max": 0
      },
      "hp": {
        "min": null,
        "max": null
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 10,
        "max": 20
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Burnade adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti test. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Burnade menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Zoybeanpod",
    "type_name": "zoybeanpod",
    "rarity": "epic",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Enchantmint"
    ],
    "archetypes": [
      "spawn"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 100,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 125,
        "max": 200
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 14,
        "max": 20
      }
    },
    "special_strings": {
      "power_strings": [
        "ZoybeanPod_ZombieTypeToSpawn",
        "ZoybeanPod_PlantFoodZombieTypeToSpawn"
      ]
    },
    "description": "Zoybeanpod adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti spawn. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Zoybeanpod menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Dazeychain",
    "type_name": "dazeychain",
    "rarity": "uncommon",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Containmint"
    ],
    "archetypes": [
      "shooter",
      "stall",
      "aoe"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 100,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 150
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 2.5,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Dazeychain adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti shooter, stall, aoe. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Dazeychain menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Blastberry",
    "type_name": "blastberry",
    "rarity": "uncommon",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Armamint"
    ],
    "archetypes": [
      "boost",
      "aoe",
      "lobber",
      "wall"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 100,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 125,
        "max": 175
      },
      "hp": {
        "min": 200,
        "max": 650
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 5,
        "max": 10
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Blastberry adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti boost, aoe, lobber, wall. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Blastberry menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Pokra",
    "type_name": "pokra",
    "rarity": "legendary",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Spearmint"
    ],
    "archetypes": [
      "shooter",
      "melee",
      "stall",
      "aoe",
      "piercing"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 100,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 175
      },
      "hp": {
        "min": 300,
        "max": 750
      },
      "damage": {
        "min": 60,
        "max": 240
      },
      "cooldown": {
        "min": 2.5,
        "max": 7
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Pokra adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti shooter, melee, stall, aoe, piercing. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Pokra menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Imppear",
    "type_name": "imppear",
    "rarity": "epic",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Ailmint"
    ],
    "archetypes": [
      "transform",
      "trap"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 0
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 2,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Imppear adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti transform, trap. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Imppear menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Pyrevine",
    "type_name": "pyrevine",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Peppermint"
    ],
    "archetypes": [
      "boost",
      "aoe",
      "antifreeze"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 100,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 50,
        "max": 125
      },
      "hp": {
        "min": 300,
        "max": 600
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 5,
        "max": 10
      }
    },
    "special_strings": {
      "power_strings": [
        "PyreVine_WarmingRadius"
      ]
    },
    "description": "Pyrevine adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti boost, aoe, antifreeze. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Pyrevine menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Pumpkin",
    "type_name": "pumpkin",
    "rarity": "epic",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Reinforcemint"
    ],
    "archetypes": [
      "boost",
      "wall"
    ],
    "home_world": "unknown",
    "mastery_type": "health",
    "seed_packet_cost": 100,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 50,
        "max": 150
      },
      "hp": {
        "min": 4000,
        "max": 8000
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 7,
        "max": 12
      }
    },
    "special_strings": {
      "power_strings": [
        "PumpkinShield"
      ]
    },
    "description": "Pumpkin adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti boost, wall. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Pumpkin menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Icebloom",
    "type_name": "icebloom",
    "rarity": "epic",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Wintermint"
    ],
    "archetypes": [
      "stall",
      "aoe"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 100,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 125,
        "max": 200
      },
      "hp": {
        "min": null,
        "max": null
      },
      "damage": {
        "min": 50,
        "max": 275
      },
      "cooldown": {
        "min": 20,
        "max": 25
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Icebloom adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti stall, aoe. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Icebloom menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Ultomato",
    "type_name": "ultomato",
    "rarity": "mythical",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Filamint"
    ],
    "archetypes": [
      "shooter",
      "aoe"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 100,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 150,
        "max": 250
      },
      "hp": {
        "min": 300,
        "max": 525
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 4.5,
        "max": 6.5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Ultomato adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti shooter, aoe. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Ultomato menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Dartichoke",
    "type_name": "dartichoke",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Spearmint"
    ],
    "archetypes": [
      "shooter",
      "multilane",
      "multishot"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 175,
        "max": 225
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 75,
        "max": 210
      },
      "cooldown": {
        "min": 4,
        "max": 8.5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Dartichoke adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti shooter, multilane, multishot. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Dartichoke menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Gumnut",
    "type_name": "gumnut",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Reinforcemint"
    ],
    "archetypes": [
      "stall",
      "trap",
      "multishot"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 200,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 50,
        "max": 125
      },
      "hp": {
        "min": 300,
        "max": 300
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 6,
        "max": 12
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Gumnut adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti stall, trap, multishot. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Gumnut menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Shinevine",
    "type_name": "shinevine",
    "rarity": "epic",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Enlightenmint"
    ],
    "archetypes": [
      "boost",
      "sunprod"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 50,
        "max": 75
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 2.5,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": [
        "Shinevine_PFSunProduction",
        "Shinevine_SunProduction",
        "Shinevine_AttackSunProduction",
        "Shinevine_PFAttackSunProduction"
      ]
    },
    "description": "Shinevine adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti boost, sunprod. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Shinevine menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Tumbleweed",
    "type_name": "tumbleweed",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Appeasemint"
    ],
    "archetypes": [
      "shooter",
      "reposition",
      "multilane"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 25,
        "max": 50
      },
      "hp": {
        "min": null,
        "max": null
      },
      "damage": {
        "min": 15,
        "max": 105
      },
      "cooldown": {
        "min": 1,
        "max": 5.5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Tumbleweed adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti shooter, reposition, multilane. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Tumbleweed menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Puffball",
    "type_name": "puffball",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Ailmint"
    ],
    "archetypes": [
      "stall",
      "aoe"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 50,
        "max": 150
      },
      "hp": {
        "min": null,
        "max": null
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 15,
        "max": 20
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Puffball adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti stall, aoe. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Puffball menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Stickybombrice",
    "type_name": "stickybombrice",
    "rarity": "epic",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Armamint"
    ],
    "archetypes": [
      "lobber",
      "stall",
      "multishot",
      "multilane"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 150,
        "max": 225
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 5,
        "max": 10
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Stickybombrice adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti lobber, stall, multishot, multilane. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Stickybombrice menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Olivepit",
    "type_name": "olivepit",
    "rarity": "mythical",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Containmint"
    ],
    "archetypes": [
      "stall",
      "aoe",
      "spawn"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 175
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 3.5,
        "max": 7
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Olivepit adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti stall, aoe, spawn. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Olivepit menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Murkadamia",
    "type_name": "murkadamia",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Concealmint"
    ],
    "archetypes": [
      "wall",
      "melee"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 50,
        "max": 100
      },
      "hp": {
        "min": 2500,
        "max": 4750
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 7,
        "max": 13
      }
    },
    "special_strings": {
      "power_strings": [
        "PlantfoodShield"
      ]
    },
    "description": "Murkadamia adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti wall, melee. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Murkadamia menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Explodeovine",
    "type_name": "explodeovine",
    "rarity": "mythical",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Bombardmint"
    ],
    "archetypes": [
      "boost",
      "aoe",
      "reposition"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 50,
        "max": 150
      },
      "hp": {
        "min": 1500,
        "max": 3000
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 5,
        "max": 10
      }
    },
    "special_strings": {
      "power_strings": [
        "ExplodeOVineShield"
      ]
    },
    "description": "Explodeovine adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti boost, aoe, reposition. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Explodeovine menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Turkeypult",
    "type_name": "turkeypult",
    "rarity": "mythical",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Armamint"
    ],
    "archetypes": [
      "lobber",
      "spawn",
      "piercing",
      "multilane"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 75,
        "max": 150
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 10,
        "max": 55
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Turkeypult adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti lobber, spawn, piercing, multilane. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Turkeypult menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Headbutter",
    "type_name": "headbutter",
    "rarity": "mythical",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Enforcemint"
    ],
    "archetypes": [
      "melee",
      "stall",
      "aoe",
      "multilane"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 175
      },
      "hp": {
        "min": 900,
        "max": 1800
      },
      "damage": {
        "min": 100,
        "max": 415
      },
      "cooldown": {
        "min": 2.5,
        "max": 7
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Headbutter adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti melee, stall, aoe, multilane. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Headbutter menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Boingsetta",
    "type_name": "boingsetta",
    "rarity": "mythical",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Wintermint"
    ],
    "archetypes": [
      "stall",
      "aoe",
      "reposition"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 150
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 1000,
        "max": 10000
      },
      "cooldown": {
        "min": 20,
        "max": 30
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Boingsetta adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti stall, aoe, reposition. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Boingsetta menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Boomflower",
    "type_name": "boomflower",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Bombardmint"
    ],
    "archetypes": [
      "aoe",
      "tap"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 200,
        "max": 350
      },
      "hp": {
        "min": 300,
        "max": 750
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Boomflower adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti aoe, tap. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Boomflower menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Hocus",
    "type_name": "hocus",
    "rarity": "uncommon",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Enchantmint"
    ],
    "archetypes": [
      "homing",
      "reposition",
      "multishot",
      "multilane"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 200
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 10,
        "max": 20
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Hocus adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti homing, reposition, multishot, multilane. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Hocus menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Gloomvine",
    "type_name": "gloomvine",
    "rarity": "epic",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Concealmint"
    ],
    "archetypes": [
      "boost",
      "aoe",
      "multishot",
      "multilane",
      "shadow"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 50,
        "max": 125
      },
      "hp": {
        "min": 250,
        "max": 700
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": [
        "GloomVineDamageNormal",
        "GloomVinePFDamage"
      ]
    },
    "description": "Gloomvine adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti boost, aoe, multishot, multilane, shadow. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Gloomvine menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Draftodil",
    "type_name": "draftodil",
    "rarity": "epic",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Containmint"
    ],
    "archetypes": [
      "shooter",
      "stall",
      "multishot",
      "antiair"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 50,
        "max": 100
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 15,
        "max": 150
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Draftodil adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti shooter, stall, multishot, antiair. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Draftodil menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Pvine",
    "type_name": "pvine",
    "rarity": "legendary",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Appeasemint"
    ],
    "archetypes": [
      "boost",
      "multishot",
      "shooter"
    ],
    "home_world": "unknown",
    "mastery_type": "piercing",
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 50,
        "max": 125
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 20,
        "max": 110
      },
      "cooldown": {
        "min": 2.5,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Pvine adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti boost, multishot, shooter. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Pvine menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Inferno",
    "type_name": "inferno",
    "rarity": "mythical",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Peppermint"
    ],
    "archetypes": [
      "shooter",
      "reposition"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 150,
        "max": 200
      },
      "hp": {
        "min": 300,
        "max": 750
      },
      "damage": {
        "min": 22,
        "max": 48
      },
      "cooldown": {
        "min": 16,
        "max": 25
      }
    },
    "special_strings": {
      "power_strings": [
        "Inferno_WarmingRadius"
      ]
    },
    "description": "Inferno adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti shooter, reposition. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Inferno menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Solarsage",
    "type_name": "solarsage",
    "rarity": "mythical",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Enlightenmint"
    ],
    "archetypes": [
      "transform",
      "sunprod"
    ],
    "home_world": "unknown",
    "mastery_type": "piercing",
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 0
      },
      "hp": {
        "min": 300,
        "max": 300
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 11,
        "max": 20
      }
    },
    "special_strings": {
      "power_strings": [
        "SolarSageExplosionNormal",
        "SolarSageExplosionPlantfood",
        "SolarSage_SunProductionPlanted",
        "SolarSage_SunProductionTriggered",
        "SolarSage_SunProductionZombie"
      ]
    },
    "description": "Solarsage adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti transform, sunprod. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Solarsage menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Powervine",
    "type_name": "powervine",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Filamint"
    ],
    "archetypes": [
      "boost",
      "aoe",
      "shooter",
      "multishot"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 75,
        "max": 150
      },
      "hp": {
        "min": 250,
        "max": 700
      },
      "damage": {
        "min": 10,
        "max": 55
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Powervine adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti boost, aoe, shooter, multishot. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Powervine menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Noctarine",
    "type_name": "noctarine",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Concealmint"
    ],
    "archetypes": [
      "boost",
      "aoe",
      "shadow"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 50,
        "max": 150
      },
      "hp": {
        "min": null,
        "max": null
      },
      "damage": {
        "min": 0,
        "max": 0
      },
      "cooldown": {
        "min": 6,
        "max": 15
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Noctarine adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti boost, aoe, shadow. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Noctarine menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Noctarinecloud",
    "type_name": "noctarinecloud",
    "rarity": "unknown",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Concealmint"
    ],
    "archetypes": [],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 0
      },
      "hp": {
        "min": 3000,
        "max": 3000
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 0,
        "max": 0
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Noctarinecloud adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan yang belum diketahui secara pasti. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Noctarinecloud menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Heathseeker",
    "type_name": "heathseeker",
    "rarity": "epic",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Spearmint"
    ],
    "archetypes": [
      "multishot",
      "aoe",
      "multilane"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 50,
        "max": 125
      },
      "hp": {
        "min": null,
        "max": null
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 15,
        "max": 20
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Heathseeker adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti multishot, aoe, multilane. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Heathseeker menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Iceweed",
    "type_name": "iceweed",
    "rarity": "epic",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Wintermint"
    ],
    "archetypes": [
      "melee",
      "still",
      "trap",
      "reposition"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 75,
        "max": 150
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 10,
        "max": 55
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Iceweed adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti melee, still, trap, reposition. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Iceweed menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Tigergrass",
    "type_name": "tigergrass",
    "rarity": "mythical",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Enforcemint"
    ],
    "archetypes": [
      "shooter"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 75,
        "max": 150
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 2.5,
        "max": 7
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Tigergrass adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti shooter. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Tigergrass menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Teleportatomine",
    "type_name": "teleportatomine",
    "rarity": "epic",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Bombardmint"
    ],
    "archetypes": [
      "reposition",
      "aoe"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 75,
        "max": 75
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 15,
        "max": 20
      }
    },
    "special_strings": {
      "power_strings": [
        "TeleportatoMineExplosion"
      ]
    },
    "description": "Teleportatomine adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti reposition, aoe. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Teleportatomine menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Buttercup",
    "type_name": "buttercup",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Containmint"
    ],
    "archetypes": [
      "stall",
      "aoe",
      "spawn"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 25,
        "max": 25
      },
      "hp": {
        "min": 900,
        "max": 2500
      },
      "damage": {
        "min": 100,
        "max": 600
      },
      "cooldown": {
        "min": 5,
        "max": 10
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Buttercup adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti stall, aoe, spawn. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Buttercup menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Blockoli",
    "type_name": "blockoli",
    "rarity": "mythical",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Reinforcemint"
    ],
    "archetypes": [
      "wall",
      "stall",
      "aoe"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 75,
        "max": 150
      },
      "hp": {
        "min": 6000,
        "max": 16000
      },
      "damage": {
        "min": 95,
        "max": 325
      },
      "cooldown": {
        "min": 7,
        "max": 15
      }
    },
    "special_strings": {
      "power_strings": [
        "BlockoliShield"
      ]
    },
    "description": "Blockoli adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti wall, stall, aoe. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Blockoli menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Bramblebush",
    "type_name": "bramblebush",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Spearmint"
    ],
    "archetypes": [
      "trap"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 50,
        "max": 125
      },
      "hp": {
        "min": 1500,
        "max": 2100
      },
      "damage": {
        "min": 30,
        "max": 175
      },
      "cooldown": {
        "min": 3,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Bramblebush adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti trap. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Bramblebush menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Rhubarbarian",
    "type_name": "rhubarbarian",
    "rarity": "epic",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Enforcemint"
    ],
    "archetypes": [
      "melee"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 100
      },
      "hp": {
        "min": 900,
        "max": 900
      },
      "damage": {
        "min": 50,
        "max": 200
      },
      "cooldown": {
        "min": 20,
        "max": 20
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Rhubarbarian adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti melee. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Rhubarbarian menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Megagatling",
    "type_name": "megagatling",
    "rarity": "epic",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Appeasemint"
    ],
    "archetypes": [
      "shooter",
      "multishot"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 200,
        "max": 400
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 20,
        "max": 120
      },
      "cooldown": {
        "min": 2.5,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Megagatling adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti shooter, multishot. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Megagatling menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Levitater",
    "type_name": "levitater",
    "rarity": "uncommon",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Enchantmint"
    ],
    "archetypes": [
      "reposition"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 50,
        "max": 50
      },
      "hp": {
        "min": 300,
        "max": 800
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 15,
        "max": 15
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Levitater adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti reposition. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Levitater menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Tombtangler",
    "type_name": "tombtangler",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Containmint"
    ],
    "archetypes": [
      "stall",
      "trap"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 25,
        "max": 25
      },
      "hp": {
        "min": 2500,
        "max": 8000
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 10,
        "max": 10
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Tombtangler adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti stall, trap. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Tombtangler menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Vamporcini",
    "type_name": "vamporcini",
    "rarity": "uncommon",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Ailmint"
    ],
    "archetypes": [
      "wall",
      "aoe"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 100
      },
      "hp": {
        "min": 2700,
        "max": 6750
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 20,
        "max": 20
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Vamporcini adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti wall, aoe. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Vamporcini menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Chillypepper",
    "type_name": "chillypepper",
    "rarity": "rare",
    "premium": true,
    "tier_max": 1,
    "family": [
      "Wintermint"
    ],
    "archetypes": [
      "stall",
      "aoe"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 50,
        "max": 100
      },
      "hp": {
        "min": 250,
        "max": 600
      },
      "damage": {
        "min": 1200,
        "max": 2200
      },
      "cooldown": {
        "min": 10,
        "max": 15
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Chillypepper adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti stall, aoe. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Chillypepper menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Meteorflower",
    "type_name": "meteorflower",
    "rarity": "mythical",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Peppermint"
    ],
    "archetypes": [
      "lobber",
      "multishot",
      "homing",
      "spawn",
      "multilane"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 250,
        "max": 250
      },
      "hp": {
        "min": 250,
        "max": 600
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 5,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Meteorflower adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti lobber, multishot, homing, spawn, multilane. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Meteorflower menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Waterrabbit",
    "type_name": "waterrabbit",
    "rarity": "epic",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Enforcemint"
    ],
    "archetypes": [
      "melee",
      "aoe",
      "reposition",
      "multilane"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 150,
        "max": 150
      },
      "hp": {
        "min": 175,
        "max": 700
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 12,
        "max": 12
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Waterrabbit adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti melee, aoe, reposition, multilane. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Waterrabbit menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Buzzbutton",
    "type_name": "buzzbutton",
    "rarity": "uncommon",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Filamint"
    ],
    "archetypes": [
      "trap",
      "stall"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 50,
        "max": 50
      },
      "hp": {
        "min": 300,
        "max": 300
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 15,
        "max": 15
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Buzzbutton adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti trap, stall. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Buzzbutton menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Boomberry",
    "type_name": "boomberry",
    "rarity": "epic",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Armamint"
    ],
    "archetypes": [
      "lobber",
      "aoe",
      "stall",
      "multilane"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 225,
        "max": 225
      },
      "hp": {
        "min": 175,
        "max": 245
      },
      "damage": {
        "min": 120,
        "max": 260
      },
      "cooldown": {
        "min": 12,
        "max": 12
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Boomberry adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti lobber, aoe, stall, multilane. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Boomberry menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Nightcap",
    "type_name": "nightcap",
    "rarity": "legendary",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Ailmint"
    ],
    "archetypes": [
      "aoe",
      "multilane",
      "shroom"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 300,
        "max": 300
      },
      "hp": {
        "min": 300,
        "max": 300
      },
      "damage": {
        "min": 30,
        "max": 120
      },
      "cooldown": {
        "min": 5,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Nightcap adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti aoe, multilane, shroom. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Nightcap menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Seaflora",
    "type_name": "seaflora",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Spearmint"
    ],
    "archetypes": [
      "shooter",
      "aoe",
      "multishot",
      "spawn",
      "multilane"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 175,
        "max": 175
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 95,
        "max": 1600
      },
      "cooldown": {
        "min": 8,
        "max": 12
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Seaflora adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti shooter, aoe, multishot, spawn, multilane. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Seaflora menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Maybee",
    "type_name": "maybee",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Enchantmint"
    ],
    "archetypes": [
      "shooter",
      "stall",
      "homing"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 200,
        "max": 300
      },
      "hp": {
        "min": 300,
        "max": 400
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 17,
        "max": 20
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Maybee adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti shooter, stall, homing. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Maybee menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Scaredyshroom",
    "type_name": "scaredyshroom",
    "rarity": "uncommon",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Ailmint"
    ],
    "archetypes": [
      "shooter",
      "wall",
      "aoe",
      "multishot",
      "shroom"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 25,
        "max": 25
      },
      "hp": {
        "min": 300,
        "max": 1200
      },
      "damage": {
        "min": 20,
        "max": 110
      },
      "cooldown": {
        "min": 3.5,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Scaredyshroom adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti shooter, wall, aoe, multishot, shroom. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Scaredyshroom menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Bamboospartan",
    "type_name": "bamboospartan",
    "rarity": "epic",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Spearmint"
    ],
    "archetypes": [
      "melee",
      "aoe",
      "wall",
      "piercing",
      "multilane"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 175,
        "max": 175
      },
      "hp": {
        "min": 600,
        "max": 3600
      },
      "damage": {
        "min": 35,
        "max": 130
      },
      "cooldown": {
        "min": 3,
        "max": 15
      }
    },
    "special_strings": {
      "power_strings": [
        "BambooSpartanShield"
      ]
    },
    "description": "Bamboospartan adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti melee, aoe, wall, piercing, multilane. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Bamboospartan menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Sundewtangler",
    "type_name": "sundewtangler",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Enlightenmint"
    ],
    "archetypes": [
      "sunprod",
      "aoe",
      "trap"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 100
      },
      "hp": {
        "min": 300,
        "max": 300
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 8,
        "max": 15
      }
    },
    "special_strings": {
      "power_strings": [
        "SundewTangler_SunProduction"
      ]
    },
    "description": "Sundewtangler adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti sunprod, aoe, trap. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Sundewtangler menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Beansprout",
    "type_name": "beansprout",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Reinforcemint"
    ],
    "archetypes": [
      "melee",
      "wall",
      "aoe"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 50,
        "max": 75
      },
      "hp": {
        "min": 2000,
        "max": 6500
      },
      "damage": {
        "min": 30,
        "max": 150
      },
      "cooldown": {
        "min": 8,
        "max": 12
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Beansprout adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti melee, wall, aoe. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Beansprout menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Cranjelly",
    "type_name": "cranjelly",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Containmint"
    ],
    "archetypes": [
      "shooter",
      "multilane",
      "spawn"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 75,
        "max": 75
      },
      "hp": {
        "min": null,
        "max": null
      },
      "damage": {
        "min": 65,
        "max": 275
      },
      "cooldown": {
        "min": 5,
        "max": 10
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Cranjelly adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti shooter, multilane, spawn. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Cranjelly menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Buduhboom",
    "type_name": "buduhboom",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Bombardmint"
    ],
    "archetypes": [
      "stall",
      "aoe",
      "spawn"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 100
      },
      "hp": {
        "min": null,
        "max": null
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 24,
        "max": 35
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Buduhboom adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti stall, aoe, spawn. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Buduhboom menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Iceshroom",
    "type_name": "iceshroom",
    "rarity": "epic",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Wintermint"
    ],
    "archetypes": [
      "melee",
      "stall",
      "boost",
      "shroom",
      "homing"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 175
      },
      "hp": {
        "min": 550,
        "max": 2000
      },
      "damage": {
        "min": 200,
        "max": 2000
      },
      "cooldown": {
        "min": 8,
        "max": 12
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Iceshroom adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti melee, stall, boost, shroom, homing. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Iceshroom menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Dragonbruit",
    "type_name": "dragonbruit",
    "rarity": "epic",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Concealmint"
    ],
    "archetypes": [
      "lobber",
      "aoe",
      "multishot",
      "homing",
      "spawn",
      "multilane",
      "shadow"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 125,
        "max": 200
      },
      "hp": {
        "min": 350,
        "max": 1000
      },
      "damage": {
        "min": 100,
        "max": 340
      },
      "cooldown": {
        "min": 6,
        "max": 10
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Dragonbruit adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti lobber, aoe, multishot, homing, spawn, multilane, shadow. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Dragonbruit menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Dragonbabybruit",
    "type_name": "dragonbabybruit",
    "rarity": "epic",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Concealmint"
    ],
    "archetypes": [
      "test"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 0
      },
      "hp": {
        "min": 300,
        "max": 900
      },
      "damage": {
        "min": 70,
        "max": 255
      },
      "cooldown": {
        "min": 0,
        "max": 0
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Dragonbabybruit adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti test. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Dragonbabybruit menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Seashroom",
    "type_name": "seashroom",
    "rarity": "common",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Ailmint"
    ],
    "archetypes": [
      "shooter",
      "water",
      "multishot",
      "shroom"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 0
      },
      "hp": {
        "min": 300,
        "max": 950
      },
      "damage": {
        "min": 30,
        "max": 120
      },
      "cooldown": {
        "min": 2,
        "max": 5
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Seashroom adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti shooter, water, multishot, shroom. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Seashroom menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Electricpeel",
    "type_name": "electricpeel",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Filamint"
    ],
    "archetypes": [
      "shooter",
      "piercing",
      "water",
      "spawn"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 125
      },
      "hp": {
        "min": 300,
        "max": 1000
      },
      "damage": {
        "min": 30,
        "max": 270
      },
      "cooldown": {
        "min": 7,
        "max": 15
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Electricpeel adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti shooter, piercing, water, spawn. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Electricpeel menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Guardshroom",
    "type_name": "guardshroom",
    "rarity": "epic",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Reinforcemint"
    ],
    "archetypes": [
      "wall",
      "aoe",
      "water",
      "boost",
      "shroom",
      "spawn"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 150,
        "max": 200
      },
      "hp": {
        "min": 1100,
        "max": 2900
      },
      "damage": {
        "min": 750,
        "max": 2550
      },
      "cooldown": {
        "min": 20,
        "max": 30
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Guardshroom adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti wall, aoe, water, boost, shroom, spawn. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Guardshroom menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Minishroom",
    "type_name": "minishroom",
    "rarity": "unknown",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Reinforcemint"
    ],
    "archetypes": [],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 0
      },
      "hp": {
        "min": 900,
        "max": 2100
      },
      "damage": {
        "min": 300,
        "max": 1200
      },
      "cooldown": {
        "min": 0,
        "max": 0
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Minishroom adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan yang belum diketahui secara pasti. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Minishroom menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Aquavine",
    "type_name": "aquavine",
    "rarity": "epic",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Spearmint"
    ],
    "archetypes": [
      "shooter",
      "water",
      "reposition",
      "boost",
      "piercing"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 50,
        "max": 125
      },
      "hp": {
        "min": 400,
        "max": 1300
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 5,
        "max": 10
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Aquavine adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti shooter, water, reposition, boost, piercing. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Aquavine menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Mangofier",
    "type_name": "mangofier",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Armamint"
    ],
    "archetypes": [
      "lobber",
      "multishot",
      "homing",
      "tap",
      "multilane"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 150,
        "max": 150
      },
      "hp": {
        "min": 300,
        "max": 750
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 6,
        "max": 8
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Mangofier adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti lobber, multishot, homing, tap, multilane. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Mangofier menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Blastspinner",
    "type_name": "blastspinner",
    "rarity": "epic",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Containmint"
    ],
    "archetypes": [
      "lobber",
      "stall",
      "aoe",
      "trap",
      "multilane"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 150,
        "max": 150
      },
      "hp": {
        "min": 300,
        "max": 750
      },
      "damage": {
        "min": 50,
        "max": 230
      },
      "cooldown": {
        "min": 14,
        "max": 20
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Blastspinner adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti lobber, stall, aoe, trap, multilane. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Blastspinner menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Blastspinnercocoon",
    "type_name": "blastspinnercocoon",
    "rarity": "unknown",
    "premium": false,
    "tier_max": 3,
    "family": [
      "Containmint"
    ],
    "archetypes": [],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": null,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 0,
        "max": 0
      },
      "hp": {
        "min": 1000,
        "max": 2350
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 0,
        "max": 0
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Blastspinnercocoon adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan yang belum diketahui secara pasti. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Blastspinnercocoon menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Doomshroom",
    "type_name": "doomshroom",
    "rarity": "mythical",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Bombardmint"
    ],
    "archetypes": [
      "aoe",
      "trap",
      "spawn"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 175
      },
      "hp": {
        "min": 300,
        "max": 300
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 11.5,
        "max": 15
      }
    },
    "special_strings": {
      "power_strings": [
        "DoomshroomGrowth"
      ]
    },
    "description": "Doomshroom adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti aoe, trap, spawn. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Doomshroom menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Frostbonnet",
    "type_name": "frostbonnet",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Wintermint"
    ],
    "archetypes": [
      "aoe",
      "melee",
      "stall",
      "antifreeze"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 125,
        "max": 175
      },
      "hp": {
        "min": 300,
        "max": 1050
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 8,
        "max": 12
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Frostbonnet adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti aoe, melee, stall, antifreeze. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Frostbonnet menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Blazeleaf",
    "type_name": "blazeleaf",
    "rarity": "epic",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Peppermint"
    ],
    "archetypes": [
      "shooter",
      "aoe",
      "melee",
      "piercing",
      "back",
      "antifreeze"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 175,
        "max": 175
      },
      "hp": {
        "min": 300,
        "max": 750
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 8,
        "max": 12
      }
    },
    "special_strings": {
      "power_strings": [
        "BlazeLeaf_WarmingRadius"
      ]
    },
    "description": "Blazeleaf adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti shooter, aoe, melee, piercing, back, antifreeze. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Blazeleaf menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Znakelily",
    "type_name": "znakelily",
    "rarity": "mythical",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Enchantmint"
    ],
    "archetypes": [
      "shooter",
      "transform",
      "homing",
      "multishot"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 150,
        "max": 200
      },
      "hp": {
        "min": 300,
        "max": 750
      },
      "damage": {
        "min": 100,
        "max": 325
      },
      "cooldown": {
        "min": 35,
        "max": 45
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Znakelily adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti shooter, transform, homing, multishot. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Znakelily menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Sweetheartsnare",
    "type_name": "sweetheartsnare",
    "rarity": "epic",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Spearmint"
    ],
    "archetypes": [
      "trap",
      "melee",
      "boost",
      "shooter",
      "back"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 100,
        "max": 175
      },
      "hp": {
        "min": 300,
        "max": 300
      },
      "damage": {
        "min": 4,
        "max": 10
      },
      "cooldown": {
        "min": 10,
        "max": 15
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Sweetheartsnare adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti trap, melee, boost, shooter, back. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Sweetheartsnare menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Hammeruit",
    "type_name": "hammeruit",
    "rarity": "epic",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Enforcemint"
    ],
    "archetypes": [
      "aoe",
      "melee",
      "multilane"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 150,
        "max": 200
      },
      "hp": {
        "min": 400,
        "max": 850
      },
      "damage": {
        "min": 150,
        "max": 330
      },
      "cooldown": {
        "min": 4,
        "max": 10
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Hammeruit adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti aoe, melee, multilane. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Hammeruit menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Cornfetti",
    "type_name": "cornfetti",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Armamint"
    ],
    "archetypes": [
      "shooter",
      "reposition",
      "piercing",
      "multilane"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 150,
        "max": 175
      },
      "hp": {
        "min": 225,
        "max": 675
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 5,
        "max": 10
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Cornfetti adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti shooter, reposition, piercing, multilane. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Cornfetti menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Seashooter",
    "type_name": "seashooter",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Appeasemint"
    ],
    "archetypes": [
      "shooter",
      "water",
      "multishot",
      "multilane"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 175,
        "max": 300
      },
      "hp": {
        "min": 325,
        "max": 775
      },
      "damage": {
        "min": 30,
        "max": 100
      },
      "cooldown": {
        "min": 5.5,
        "max": 8
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Seashooter adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti shooter, water, multishot, multilane. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Seashooter menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  },
  {
    "name": "Devourbloom",
    "type_name": "devourbloom",
    "rarity": "rare",
    "premium": true,
    "tier_max": 3,
    "family": [
      "Enforcemint"
    ],
    "archetypes": [
      "trap",
      "aoe"
    ],
    "home_world": "unknown",
    "mastery_type": null,
    "seed_packet_cost": 250,
    "level_cap": 10,
    "stats": {
      "cost": {
        "min": 50,
        "max": 125
      },
      "hp": {
        "min": 300,
        "max": 300
      },
      "damage": {
        "min": null,
        "max": null
      },
      "cooldown": {
        "min": 8,
        "max": 20
      }
    },
    "special_strings": {
      "power_strings": []
    },
    "description": "Devourbloom adalah salah satu tanaman dari dunia *unknown* yang memiliki kemampuan unik seperti trap, aoe. Tanaman ini biasanya digunakan dalam berbagai situasi pertempuran untuk mendukung strategi pemain. Dengan kemampuannya, Devourbloom menjadi pilihan penting dalam menghadapi serangan zombie yang semakin sulit."
  }
];

function renderPlantWiki() {
  const container = document.getElementById('plant-wiki-container');
  container.innerHTML = '';

  plantWikiData.forEach(plant => {
    const card = document.createElement('div');
    card.className = 'plant-wiki-card';

    // Gunakan gambar statis "Tanaman.png"
    const body = document.createElement('div');
    body.className = 'plant-wiki-body';

    body.innerHTML = `
      <h3>${plant.name.replace(/_/g, ' ')}</h3>
      <p class="plant-wiki-desc">${plant.description}</p>
      <div class="plant-wiki-details">
        <p><strong>Type:</strong> ${plant.type_name}</p>
        <p><strong>Rarity:</strong> ${plant.rarity}</p>
        <p><strong>Premium:</strong> ${plant.premium ? 'Yes' : 'No'}</p>
        <p><strong>Tier Max:</strong> ${plant.tier_max}</p>
        <p><strong>Family:</strong> ${plant.family.join(', ')}</p>
        <p><strong>Archetypes:</strong> ${plant.archetypes.join(', ')}</p>
        <p><strong>World:</strong> ${plant.home_world}</p>
        <p><strong>Mastery Type:</strong> ${plant.mastery_type ?? '-'}</p>
        <p><strong>Seed Packet Cost:</strong> ${plant.seed_packet_cost ?? '-'}</p>
        <p><strong>Level Cap:</strong> ${plant.level_cap}</p>
        <p><strong>Cost:</strong> ${plant.stats.cost.min ?? '-'} - ${plant.stats.cost.max ?? '-'}</p>
        <p><strong>HP:</strong> ${plant.stats.hp.min ?? '-'} - ${plant.stats.hp.max ?? '-'}</p>
        <p><strong>Damage:</strong> ${plant.stats.damage.min ?? '-'} - ${plant.stats.damage.max ?? '-'}</p>
        <p><strong>Cooldown:</strong> ${plant.stats.cooldown.min ?? '-'}s - ${plant.stats.cooldown.max ?? '-'}s</p>
        <p><strong>Power Strings:</strong> ${plant.special_strings?.power_strings?.join(', ') || '-'}</p>
      </div>
    `;

    card.appendChild(body);
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderPlantWiki);
