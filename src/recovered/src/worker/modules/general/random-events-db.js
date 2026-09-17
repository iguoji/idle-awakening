__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   randomEventScalingFactor: () => (/* binding */ randomEventScalingFactor),
/* harmony export */   registerRandomEventsDb: () => (/* binding */ registerRandomEventsDb)
/* harmony export */ });
/* harmony import */ var game_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! game-framework */ "./node_modules/game-framework/index.js");

var randomEventScalingFactor = function randomEventScalingFactor(id) {
  var level = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel(id);
  var result = Math.pow(1 + level, 1.5);
  if (level > 100) {
    result *= Math.pow(1.03, level);
  }
  return result;
};
var registerRandomEventsDb = function registerRandomEventsDb() {
  var randomEventsDB = [];
  randomEventsDB.push({
    id: 'early_event_coins1',
    name: 'Mysterious Benefactor',
    description: 'As you walk through the marketplace, a hooded stranger approaches you. With a knowing smile, they hand you a small pouch of coins and whisper, "Use them wisely." However, something feels... off. What will you do?',
    unlockCondition: function unlockCondition() {
      return true;
    },
    probability: 1,
    options: {
      option1: {
        id: 'option1',
        name: 'Accept the gift',
        unlockCondition: function unlockCondition() {
          return true;
        },
        effects: [{
          id: 'coins_boost',
          probability: 0.9,
          description: 'The pouch contains enchanted coins! Your earnings increase for a while. (+Coins income for 5 minutes)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('temporary-effects').triggerEffect('temporary_coins_buff', 1);
          }
        }, {
          id: 'curse_of_greed',
          probability: 0.1,
          description: 'As you take the pouch, it suddenly vanishes! Your pockets feel oddly light... (Lost all coins)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.setResource('coins', 0);
          }
        }]
      },
      option2: {
        id: 'option2',
        name: 'Refuse politely',
        unlockCondition: function unlockCondition() {
          return true;
        },
        effects: [{
          id: 'nothing_happens',
          probability: 1,
          description: 'The stranger nods and walks away. Nothing changes.',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {}
        }]
      },
      option3: {
        id: 'option3',
        name: 'Investigate the stranger',
        unlockCondition: function unlockCondition() {
          return true;
        },
        effects: [{
          id: 'coins_boost_low',
          probability: 0.7,
          description: 'You follow the stranger and learn their tricks, improving your earnings! (+Coins income for 5 minutes, slightly weaker bonus)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('temporary-effects').triggerEffect('temporary_coins_buff', 0.7);
          }
        }, {
          id: 'coins_lost_small',
          probability: 0.3,
          description: 'The stranger vanishes, and so do a few of your coins! (Lost 20% of your coins)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.addResource('coins', -0.2 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource('coins').amount);
          }
        }]
      }
    }
  });
  randomEventsDB.push({
    id: 'early_event_coins2',
    name: 'Golden Opportunity',
    description: 'You overhear a group of merchants excitedly discussing a lucrative deal. One of them notices you and gestures for you to join. "Care to invest in a sure-win opportunity?" The deal seems promising, but is it too good to be true?',
    unlockCondition: function unlockCondition() {
      return true;
    },
    probability: 1,
    options: {
      option1: {
        id: 'option1',
        name: 'Invest your coins',
        unlockCondition: function unlockCondition() {
          return true;
        },
        effects: [{
          id: 'profit_boost',
          probability: 0.85,
          description: 'Your investment pays off! Your coin income surges for a while. (+Coins income for 5 minutes)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('temporary-effects').triggerEffect('temporary_coins_buff', 1.4);
          }
        }, {
          id: 'investment_fraud',
          probability: 0.15,
          description: 'The merchants disappear overnight. You realize you’ve been scammed… (Lost all coins)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.setResource('coins', 0);
          }
        }]
      },
      option2: {
        id: 'option2',
        name: 'Politely decline',
        unlockCondition: function unlockCondition() {
          return true;
        },
        effects: [{
          id: 'nothing_happens',
          probability: 1,
          description: 'You decide not to risk it. Nothing changes.',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {}
        }]
      },
      option3: {
        id: 'option3',
        name: 'Negotiate a safer deal',
        unlockCondition: function unlockCondition() {
          return true;
        },
        effects: [{
          id: 'moderate_profit',
          probability: 0.75,
          description: 'You manage to strike a safer deal, gaining a modest boost. (+Coins income for 5 minutes, slightly weaker bonus)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('temporary-effects').triggerEffect('temporary_coins_buff', 0.7);
          }
        }, {
          id: 'partial_loss',
          probability: 0.25,
          description: 'The deal doesn’t go as planned, and you lose some coins. (Lost 25% of your coins)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.addResource('coins', -0.25 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource('coins').amount);
          }
        }]
      }
    }
  });
  randomEventsDB.push({
    id: 'early_event_coins_energy',
    name: 'The Exhausting Fortune',
    description: 'While wandering through the bustling streets, you spot a heavy sack of gold lying unattended. A glance around reveals no obvious owner. But as you reach for it, you feel an eerie chill run down your spine. Is it really a lucky find, or is there a price to pay?',
    unlockCondition: function unlockCondition() {
      return true;
    },
    probability: 1,
    options: {
      option1: {
        id: 'option1',
        name: 'Take the gold and run',
        unlockCondition: function unlockCondition() {
          return true;
        },
        effects: [{
          id: 'big_gold_gain',
          probability: 0.85,
          description: 'Jackpot! The sack is filled with gold beyond your wildest dreams. (+50% of your current coins)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.addResource('coins', 0.5 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource('coins').amount);
          }
        }, {
          id: 'gold_cursed',
          probability: 0.15,
          description: 'As you touch the sack, a wave of exhaustion crashes over you. A curse saps your strength. (-Energy regeneration for 5 minutes)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('temporary-effects').triggerEffect('temporary_energy_debuff', 1);
          }
        }]
      },
      option2: {
        id: 'option2',
        name: 'Leave it be',
        unlockCondition: function unlockCondition() {
          return true;
        },
        effects: [{
          id: 'nothing_happens',
          probability: 1,
          description: 'You decide it’s best not to take risks. You walk away, leaving the gold behind.',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {}
        }]
      },
      option3: {
        id: 'option3',
        name: 'Try to find the owner',
        unlockCondition: function unlockCondition() {
          return true;
        },
        effects: [{
          id: 'rewarded_for_honesty',
          probability: 0.8,
          description: 'A grateful merchant thanks you and rewards your honesty. (+20% coins)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.addResource('coins', 0.2 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource('coins').amount);
          }
        }, {
          id: 'wasted_effort',
          probability: 0.2,
          description: 'You spend hours searching, only to find no rightful owner. The effort drains you. (-Energy regeneration for 5 minutes)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('temporary-effects').triggerEffect('temporary_energy_debuff', 1);
          }
        }]
      }
    }
  });
  randomEventsDB.push({
    id: 'early_event_coins_energy_buff_debuff_v2',
    name: 'The Merchant’s Gamble',
    description: 'A traveling merchant sets up a small booth in the town square, claiming to sell charms that boost fortune. "A mere touch of fate can change your luck," he proclaims. You feel tempted to test your fortune, but who knows what the outcome might be?',
    unlockCondition: function unlockCondition() {
      return true;
    },
    probability: 1,
    options: {
      option1: {
        id: 'option1',
        name: 'Buy a powerful charm',
        unlockCondition: function unlockCondition() {
          return true;
        },
        effects: [{
          id: 'coins_boost_strong',
          probability: 0.75,
          description: 'The charm radiates with strong magical energy! Your earnings increase significantly. (+Coins income for 5 minutes, strong effect)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('temporary-effects').triggerEffect('temporary_coins_buff', 1.5);
          }
        }, {
          id: 'draining_curse_strong',
          probability: 0.25,
          description: 'As you grasp the charm, a wave of exhaustion washes over you. You feel inexplicably drained. (-Energy regeneration for 5 minutes)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('temporary-effects').triggerEffect('temporary_energy_debuff', 1);
          }
        }]
      },
      option2: {
        id: 'option2',
        name: 'Ignore the merchant',
        unlockCondition: function unlockCondition() {
          return true;
        },
        effects: [{
          id: 'nothing_happens',
          probability: 1,
          description: 'You decide not to risk it and move along. Nothing changes.',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {}
        }]
      },
      option3: {
        id: 'option3',
        name: 'Test a weaker charm first',
        unlockCondition: function unlockCondition() {
          return true;
        },
        effects: [{
          id: 'coins_boost_safe',
          probability: 0.9,
          description: 'The charm gives off a faint but pleasant glow. You feel a bit luckier. (+Coins income for 5 minutes, weaker effect)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('temporary-effects').triggerEffect('temporary_coins_buff', 1);
          }
        }, {
          id: 'minor_energy_drain',
          probability: 0.1,
          description: 'The charm flickers strangely, leaving you slightly fatigued. (-Energy regeneration for 5 minutes, weaker effect)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('temporary-effects').triggerEffect('temporary_energy_debuff', 0.5);
          }
        }]
      }
    }
  });
  randomEventsDB.push({
    id: 'early_event_energy_buff',
    name: 'Mystical Hot Spring',
    description: 'While exploring, you stumble upon a secluded hot spring, its waters shimmering with a faint glow. The air is warm and inviting, and you feel a strange pull toward the soothing waters. Will you take a dip?',
    unlockCondition: function unlockCondition() {
      return true;
    },
    probability: 1,
    options: {
      option1: {
        id: 'option1',
        name: 'Bathe in the spring',
        unlockCondition: function unlockCondition() {
          return true;
        },
        effects: [{
          id: 'energy_boost',
          probability: 1,
          description: 'The warm waters revitalize you, filling you with newfound energy! (+Energy regeneration for 5 minutes)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('temporary-effects').triggerEffect('temporary_energy_buff', 1);
          }
        }]
      },
      option2: {
        id: 'option2',
        name: 'Collect some water',
        unlockCondition: function unlockCondition() {
          return true;
        },
        effects: [{
          id: 'energy_boost_weak',
          probability: 0.9,
          description: 'You carefully bottle some of the spring water and take a sip. You feel slightly refreshed. (+Energy regeneration for 5 minutes, weaker effect)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('temporary-effects').triggerEffect('temporary_energy_buff', 0.7);
          }
        }, {
          id: 'nothing_special',
          probability: 0.1,
          description: 'The water seems ordinary once bottled. It doesn’t have any noticeable effect.',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {}
        }]
      },
      option3: {
        id: 'option3',
        name: 'Ignore the spring',
        unlockCondition: function unlockCondition() {
          return true;
        },
        effects: [{
          id: 'nothing_happens',
          probability: 1,
          description: 'You decide not to risk it and move along. Nothing changes.',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {}
        }]
      }
    }
  });
  randomEventsDB.push({
    id: 'early_event_energy_risk',
    name: 'Enchanted Berry Bush',
    description: 'You come across a peculiar bush covered in vibrant, glowing berries. They radiate a faint warmth, and their scent is almost hypnotic. They might be invigorating... or they might be something else entirely. What will you do?',
    unlockCondition: function unlockCondition() {
      return true;
    },
    probability: 1,
    options: {
      option1: {
        id: 'option1',
        name: 'Eat a handful of berries',
        unlockCondition: function unlockCondition() {
          return true;
        },
        effects: [{
          id: 'energy_boost_strong',
          probability: 0.8,
          description: 'The berries burst with flavor and energy! You feel revitalized. (+Energy regeneration for 5 minutes, strong effect)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('temporary-effects').triggerEffect('temporary_energy_buff', 1.5);
          }
        }, {
          id: 'mild_exhaustion',
          probability: 0.2,
          description: 'A strange aftertaste lingers, and you suddenly feel a bit sluggish. (-Energy regeneration for 5 minutes, weak effect)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('temporary-effects').triggerEffect('temporary_energy_debuff', 0.5);
          }
        }]
      },
      option2: {
        id: 'option2',
        name: 'Eat just one berry',
        unlockCondition: function unlockCondition() {
          return true;
        },
        effects: [{
          id: 'energy_boost_safe',
          probability: 1,
          description: 'You cautiously taste a single berry. It provides a mild but noticeable boost. (+Energy regeneration for 5 minutes, weaker effect)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('temporary-effects').triggerEffect('temporary_energy_buff', 1);
          }
        }]
      },
      option3: {
        id: 'option3',
        name: 'Ignore the bush',
        unlockCondition: function unlockCondition() {
          return true;
        },
        effects: [{
          id: 'nothing_happens',
          probability: 1,
          description: 'You decide it’s best not to take risks. Nothing changes.',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {}
        }]
      }
    }
  });
  randomEventsDB.push({
    id: 'early_event_mixed_effects',
    name: 'The Mysterious Altar',
    description: 'Deep in the forest, you discover an ancient stone altar covered in glowing runes. The air hums with unseen energy, inviting you to make an offering. But what will it demand in return?',
    unlockCondition: function unlockCondition() {
      return true;
    },
    probability: 1,
    options: {
      option1: {
        id: 'option1',
        name: 'Offer some gold',
        unlockCondition: function unlockCondition() {
          return true;
        },
        effects: [{
          id: 'energy_boost',
          probability: 0.5,
          description: 'The altar radiates warmth, filling you with boundless energy! (+Energy regeneration for 5 minutes)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('temporary-effects').triggerEffect('temporary_energy_buff', 1);
          }
        }, {
          id: 'coins_income_boost',
          probability: 0.3,
          description: 'A golden mist rises, whispering secrets of wealth into your mind. (+Coins income for 5 minutes)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('temporary-effects').triggerEffect('temporary_coins_buff', 1);
          }
        }, {
          id: 'gold_vanishes',
          probability: 0.2,
          description: 'The altar hums, then falls silent. Your gold disappears, but nothing else changes. (-25% of your current coins)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.addResource('coins', -0.25 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource('coins').amount);
          }
        }]
      },
      option2: {
        id: 'option2',
        name: 'Absorb the altar’s energy',
        unlockCondition: function unlockCondition() {
          return true;
        },
        effects: [{
          id: 'strong_energy_boost',
          probability: 0.6,
          description: 'You feel an overwhelming surge of power! (+Energy regeneration for 5 minutes, strong effect)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('temporary-effects').triggerEffect('temporary_energy_buff', 1.5);
          }
        }, {
          id: 'temporary_exhaustion',
          probability: 0.25,
          description: 'The energy is too much! After an initial rush, you feel completely drained. (-Energy regeneration for 5 minutes)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('temporary-effects').triggerEffect('temporary_energy_debuff', 1);
          }
        }, {
          id: 'coins_vanish',
          probability: 0.15,
          description: 'In the rush of energy, your pouch suddenly feels lighter… (-30% of your coins)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.addResource('coins', -0.3 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource('coins').amount);
          }
        }]
      },
      option3: {
        id: 'option3',
        name: 'Walk away',
        unlockCondition: function unlockCondition() {
          return true;
        },
        effects: [{
          id: 'nothing_happens',
          probability: 1,
          description: 'You resist the temptation and move along. Nothing changes.',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {}
        }]
      }
    }
  });
  randomEventsDB.push({
    id: 'early_event_traveler_blessing',
    name: 'Traveler’s Blessing',
    description: 'An old traveler greets you with a warm smile. "Hard work and wisdom always pay off," he says, placing a hand on your shoulder. You feel a strange warmth flowing through you. What will you take from this encounter?',
    unlockCondition: function unlockCondition() {
      return true;
    },
    probability: 1,
    options: {
      option1: {
        id: 'option1',
        name: 'Seek wisdom in fortune',
        unlockCondition: function unlockCondition() {
          return true;
        },
        effects: [{
          id: 'coins_income_boost',
          probability: 1,
          description: 'You feel enlightened about trade and business! (+Coins income for 5 minutes, moderate effect)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('temporary-effects').triggerEffect('temporary_coins_buff', 1);
          }
        }]
      },
      option2: {
        id: 'option2',
        name: 'Ask for vitality',
        unlockCondition: function unlockCondition() {
          return true;
        },
        effects: [{
          id: 'energy_boost',
          probability: 1,
          description: 'You feel refreshed and energized! (+Energy regeneration for 5 minutes, moderate effect)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('temporary-effects').triggerEffect('temporary_energy_buff', 1);
          }
        }]
      },
      option3: {
        id: 'option3',
        name: 'Embrace both lessons',
        unlockCondition: function unlockCondition() {
          return true;
        },
        effects: [{
          id: 'balanced_boost',
          probability: 1,
          description: 'You take the traveler’s advice to heart. (+Coins income & +Energy regeneration for 5 minutes, weaker effect)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('temporary-effects').triggerEffect('temporary_coins_buff', 0.7);
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('temporary-effects').triggerEffect('temporary_energy_buff', 0.7);
          }
        }]
      }
    }
  });
  randomEventsDB.push({
    id: 'early_event_tea_break',
    name: 'Soothing Tea Break',
    description: 'At a small roadside inn, you are invited to share a cup of herbal tea. The scent is calming, and the warmth seeps into your bones. You feel yourself relaxing. How will you enjoy the moment?',
    unlockCondition: function unlockCondition() {
      return true;
    },
    probability: 1,
    options: {
      option1: {
        id: 'option1',
        name: 'Drink slowly and savor it',
        unlockCondition: function unlockCondition() {
          return true;
        },
        effects: [{
          id: 'energy_boost_mild',
          probability: 1,
          description: 'The tea soothes your mind and body. (+Energy regeneration for 5 minutes, weaker effect)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('temporary-effects').triggerEffect('temporary_energy_buff', 0.8);
          }
        }]
      },
      option2: {
        id: 'option2',
        name: 'Engage in friendly conversation',
        unlockCondition: function unlockCondition() {
          return true;
        },
        effects: [{
          id: 'coins_income_boost_mild',
          probability: 1,
          description: 'You chat with merchants and learn some useful tricks. (+Coins income for 5 minutes, weaker effect)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('temporary-effects').triggerEffect('temporary_coins_buff', 0.8);
          }
        }]
      },
      option3: {
        id: 'option3',
        name: 'Enjoy the moment in silence',
        unlockCondition: function unlockCondition() {
          return true;
        },
        effects: [{
          id: 'dual_boost_mild',
          probability: 1,
          description: 'The tea refreshes you, and your mind clears. (+Coins income & +Energy regeneration for 5 minutes, very weak effect)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('temporary-effects').triggerEffect('temporary_coins_buff', 0.5);
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('temporary-effects').triggerEffect('temporary_energy_buff', 0.5);
          }
        }]
      }
    }
  });
  randomEventsDB.push({
    id: 'early_event_night_market',
    name: 'The Night Market',
    description: 'As dusk falls, a hidden market emerges, filled with exotic goods and opportunities. A few vendors offer you small tokens of luck. How will you use this chance?',
    unlockCondition: function unlockCondition() {
      return true;
    },
    probability: 1,
    options: {
      option1: {
        id: 'option1',
        name: 'Buy a lucky coin',
        unlockCondition: function unlockCondition() {
          return true;
        },
        effects: [{
          id: 'coins_income_boost_night',
          probability: 1,
          description: 'The coin seems to radiate good fortune. (+Coins income for 5 minutes, moderate effect)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('temporary-effects').triggerEffect('temporary_coins_buff', 1);
          }
        }]
      },
      option2: {
        id: 'option2',
        name: 'Try the herbal elixir',
        unlockCondition: function unlockCondition() {
          return true;
        },
        effects: [{
          id: 'energy_boost_night',
          probability: 1,
          description: 'The elixir fills you with newfound energy. (+Energy regeneration for 5 minutes, moderate effect)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('temporary-effects').triggerEffect('temporary_energy_buff', 1);
          }
        }]
      },
      option3: {
        id: 'option3',
        name: 'Browse without buying',
        unlockCondition: function unlockCondition() {
          return true;
        },
        effects: [{
          id: 'dual_boost_small',
          probability: 1,
          description: 'A vendor gives you a small charm for free. (+Coins income & +Energy regeneration for 5 minutes, weaker effect)',
          unlockCondition: function unlockCondition() {
            return true;
          },
          onTrigger: function onTrigger() {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('temporary-effects').triggerEffect('temporary_coins_buff', 0.7);
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('temporary-effects').triggerEffect('temporary_energy_buff', 0.7);
          }
        }]
      }
    }
  });
  return randomEventsDB;
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/worker/modules/general/random-events-db.js?
