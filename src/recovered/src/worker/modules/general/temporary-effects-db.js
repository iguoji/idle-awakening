__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerTemporaryEffectsDB: () => (/* binding */ registerTemporaryEffectsDB)
/* harmony export */ });
/* harmony import */ var game_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! game-framework */ "./node_modules/game-framework/index.js");
/* harmony import */ var _magic_spells_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../magic/spells-db */ "./src/worker/modules/magic/spells-db.js");


var registerTemporaryEffectsDB = function registerTemporaryEffectsDB() {
  game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.registerGameEntity('temporary_energy_buff', {
    name: 'Energized',
    description: 'Your energy income is boosted',
    hasCap: false,
    tags: ['effect', 'temporary'],
    defaultCap: 0,
    isAbstract: true,
    level: 1,
    onUse: function onUse(amount) {},
    resourceModifier: {
      multiplier: {
        resources: {
          energy: {
            A: 0.2,
            B: 1.4,
            type: 0
          }
        }
      }
    },
    attributes: {
      duration: 300,
      className: 'buff'
    },
    unlockCondition: function unlockCondition() {}
  });
  game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.registerGameEntity('temporary_energy_debuff', {
    name: 'Energy Debuff',
    description: 'You feel weakened. Your energy regeneration is decreased',
    hasCap: false,
    tags: ['effect', 'temporary'],
    defaultCap: 0,
    isAbstract: true,
    level: 1,
    onUse: function onUse(amount) {},
    resourceModifier: {
      multiplier: {
        resources: {
          energy: {
            A: 0.8,
            B: 0.8,
            type: 1
          }
        }
      }
    },
    attributes: {
      duration: 300,
      className: 'debuff'
    },
    unlockCondition: function unlockCondition() {}
  });
  game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.registerGameEntity('temporary_health_buff', {
    name: 'Health Regeneration',
    description: 'Your health regeneration was increased',
    hasCap: false,
    tags: ['effect', 'temporary'],
    defaultCap: 0,
    isAbstract: true,
    level: 1,
    onUse: function onUse(amount) {},
    resourceModifier: {
      multiplier: {
        resources: {
          health: {
            A: 0.2,
            B: 1.4,
            type: 0
          }
        }
      }
    },
    attributes: {
      duration: 300,
      className: 'buff'
    },
    unlockCondition: function unlockCondition() {}
  });
  game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.registerGameEntity('temporary_health_debuff', {
    name: 'Injury',
    description: 'You are injured. Your health regeneration is decreased',
    hasCap: false,
    tags: ['effect', 'temporary'],
    defaultCap: 0,
    isAbstract: true,
    level: 1,
    onUse: function onUse(amount) {},
    resourceModifier: {
      multiplier: {
        resources: {
          health: {
            A: 0.8,
            B: 0.8,
            type: 1
          }
        }
      }
    },
    attributes: {
      duration: 300,
      className: 'debuff'
    },
    unlockCondition: function unlockCondition() {}
  });
  game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.registerGameEntity('temporary_mana_buff', {
    name: 'Mana Regeneration',
    description: 'Your mana regeneration was increased',
    hasCap: false,
    tags: ['effect', 'temporary'],
    defaultCap: 0,
    isAbstract: true,
    level: 1,
    onUse: function onUse(amount) {},
    resourceModifier: {
      multiplier: {
        resources: {
          mana: {
            A: 0.2,
            B: 1.4,
            type: 0
          }
        }
      }
    },
    attributes: {
      duration: 300,
      className: 'buff'
    },
    unlockCondition: function unlockCondition() {}
  });
  game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.registerGameEntity('temporary_mana_debuff', {
    name: 'Mana Instability',
    description: 'Your mana regeneration is decreased',
    hasCap: false,
    tags: ['effect', 'temporary'],
    defaultCap: 0,
    isAbstract: true,
    level: 1,
    onUse: function onUse(amount) {},
    resourceModifier: {
      multiplier: {
        resources: {
          mana: {
            A: 0.8,
            B: 0.8,
            type: 1
          }
        }
      }
    },
    attributes: {
      duration: 300,
      className: 'debuff'
    },
    unlockCondition: function unlockCondition() {}
  });
  game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.registerGameEntity('temporary_knowledge_buff', {
    name: 'Knowledge Gain',
    description: 'Your knowledge gain was increased',
    hasCap: false,
    tags: ['effect', 'temporary'],
    defaultCap: 0,
    isAbstract: true,
    level: 1,
    onUse: function onUse(amount) {},
    resourceModifier: {
      multiplier: {
        resources: {
          knowledge: {
            A: 0.2,
            B: 1.4,
            type: 0
          }
        }
      }
    },
    attributes: {
      duration: 300,
      className: 'buff'
    },
    unlockCondition: function unlockCondition() {}
  });
  game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.registerGameEntity('temporary_knowledge_debuff', {
    name: 'Knowledge Debuff',
    description: 'You feel yourself dummy. Your knowledge gain is decreased',
    hasCap: false,
    tags: ['effect', 'temporary'],
    defaultCap: 0,
    isAbstract: true,
    level: 1,
    onUse: function onUse(amount) {},
    resourceModifier: {
      multiplier: {
        resources: {
          knowledge: {
            A: 0.8,
            B: 0.8,
            type: 1
          }
        }
      }
    },
    attributes: {
      duration: 300,
      className: 'debuff'
    },
    unlockCondition: function unlockCondition() {}
  });
  game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.registerGameEntity('temporary_coins_buff', {
    name: 'Coins Earned Bonus',
    description: 'Your coins income is boosted',
    hasCap: false,
    tags: ['effect', 'temporary'],
    defaultCap: 0,
    isAbstract: true,
    level: 1,
    onUse: function onUse(amount) {},
    resourceModifier: {
      multiplier: {
        resources: {
          coins: {
            A: 0.2,
            B: 1.4,
            type: 0
          }
        }
      }
    },
    attributes: {
      duration: 300,
      className: 'buff'
    },
    unlockCondition: function unlockCondition() {}
  });
  game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.registerGameEntity('temporary_learn_rate_buff', {
    name: 'Learning Rate Bonus',
    description: 'Your learning speed is increased',
    hasCap: false,
    tags: ['effect', 'temporary'],
    defaultCap: 0,
    isAbstract: true,
    level: 1,
    onUse: function onUse(amount) {},
    resourceModifier: {
      multiplier: {
        effects: {
          learning_rate: {
            A: 0.1,
            B: 1.2,
            type: 0
          }
        }
      }
    },
    attributes: {
      duration: 300,
      className: 'buff'
    },
    unlockCondition: function unlockCondition() {}
  });
  game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.registerGameEntity('temporary_physical_training_rate_buff', {
    name: 'Physical Training Bonus',
    description: 'Your learning speed for physical training is increased',
    hasCap: false,
    tags: ['effect', 'temporary'],
    defaultCap: 0,
    isAbstract: true,
    level: 1,
    onUse: function onUse(amount) {},
    resourceModifier: {
      multiplier: {
        effects: {
          physical_training_learn_speed: {
            A: 0.2,
            B: 1.4,
            type: 0
          }
        }
      }
    },
    attributes: {
      duration: 300,
      className: 'buff'
    },
    unlockCondition: function unlockCondition() {}
  });
  game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.registerGameEntity('temporary_mental_training_rate_buff', {
    name: 'Mental Training Bonus',
    description: 'Your learning speed for mental training is increased',
    hasCap: false,
    tags: ['effect', 'temporary'],
    defaultCap: 0,
    isAbstract: true,
    level: 1,
    onUse: function onUse(amount) {},
    resourceModifier: {
      multiplier: {
        effects: {
          mental_training_learning_rate: {
            A: 0.2,
            B: 1.4,
            type: 0
          }
        }
      }
    },
    attributes: {
      duration: 300,
      className: 'buff'
    },
    unlockCondition: function unlockCondition() {}
  });
  game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.registerGameEntity('temporary_social_training_rate_buff', {
    name: 'Social Training Bonus',
    description: 'Your learning speed for social training is increased',
    hasCap: false,
    tags: ['effect', 'temporary'],
    defaultCap: 0,
    isAbstract: true,
    level: 1,
    onUse: function onUse(amount) {},
    resourceModifier: {
      multiplier: {
        effects: {
          social_training_learning_rate: {
            A: 0.2,
            B: 1.4,
            type: 0
          }
        }
      }
    },
    attributes: {
      duration: 300,
      className: 'buff'
    },
    unlockCondition: function unlockCondition() {}
  });
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/worker/modules/general/temporary-effects-db.js?
