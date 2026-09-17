import * as game_framework__WEBPACK_IMPORTED_MODULE_0__ from '../../../framework/index.js';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var getMasteryId = function getMasteryId(id) {
  return "".concat(id, "_mastery");
};
var getMaxId = function getMaxId(id) {
  return "".concat(id, "_max");
};
var getCostReduction = function getCostReduction(id) {
  var effId = getMasteryId(id);
  /*if(!gameEffects.effects[id]) {
      gameEffects.registerEffect(effId, {
          name: `Cost reduction`,
          defaultValue: 1,
      })
  }*/
  var effect = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue(effId);
  return effect;
};
var registerSpell = function registerSpell(id, options) {
  var _options$resourceModi, _options$usageGain, _options$attributes;
  var cost_reduction_effect_id = getMasteryId(id);
  var max_level_id = getMaxId(id);

  // register effect
  if (!game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.effects[id]) {
    game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.registerEffect(cost_reduction_effect_id, {
      name: "".concat(options.name, " cost"),
      defaultValue: 1.,
      minValue: 0
    });
  }

  //register cap
  game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.registerGameEntity(max_level_id, {
    name: "".concat(options.name, " cap"),
    tags: ['spell_cap'],
    isUnlocked: options.isUnlocked,
    isAbstract: false,
    allowedImpacts: ['effects'],
    resourceModifier: {
      multiplier: {
        effects: _defineProperty({}, cost_reduction_effect_id, {
          A: 0.975,
          B: 1,
          type: 1
        })
      }
    }
  });

  //register spell itself
  if (options.resourceModifier) {
    options.resourceModifier.effectDeps = [].concat(_toConsumableArray(options.resourceModifier.effectDeps || []), [getMasteryId(id)]);
  }
  options.effectsDeps = [].concat(_toConsumableArray(((_options$resourceModi = options.resourceModifier) === null || _options$resourceModi === void 0 ? void 0 : _options$resourceModi.effectDeps) || []), _toConsumableArray(((_options$usageGain = options.usageGain) === null || _options$usageGain === void 0 ? void 0 : _options$usageGain.effectDeps) || []));
  if ((_options$attributes = options.attributes) !== null && _options$attributes !== void 0 && _options$attributes.duration) {
    options.attributes.className = 'spell';
  }
  game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.registerGameEntity(id, _objectSpread({}, options));
};
var initSpellsDB1 = function initSpellsDB1() {
  registerSpell('spell_magic_insight', {
    name: 'Magic Insight',
    description: 'Use your magic capabilities to understand world better',
    hasCap: false,
    tags: ['spell', 'magic', 'mental', 'mental_magic'],
    defaultCap: 0,
    isAbstract: true,
    level: 1,
    onUse: function onUse(amount) {},
    getUsageCooldown: function getUsageCooldown() {
      return 10;
    },
    usageGain: {
      get_income: function get_income() {
        return {
          resources: {
            knowledge: {
              A: 1.2,
              B: 5,
              type: 1
            }
          }
        };
      },
      get_consumption: function get_consumption() {
        return {
          resources: {
            mana: {
              A: 1.5,
              B: 3 * getCostReduction('spell_magic_insight'),
              type: 1
            }
          }
        };
      }
    },
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_spellbook') > 0;
    },
    attributes: {
      xpOnCast: 20
    }
  });
  registerSpell('spell_focus', {
    name: 'Focus',
    description: 'Improve your learning capabilities using magic',
    hasCap: false,
    tags: ['spell', 'magic', 'mental', 'mental_magic'],
    defaultCap: 0,
    isAbstract: true,
    level: 1,
    onUse: function onUse(amount) {},
    getUsageCooldown: function getUsageCooldown() {
      return 0;
    },
    resourceModifier: {
      multiplier: {
        effects: {
          learning_rate: {
            A: 0.05,
            B: 1.25,
            type: 0
          }
        }
      },
      get_consumption: function get_consumption() {
        return {
          resources: {
            mana: {
              A: 1.5,
              B: 1 * getCostReduction('spell_focus'),
              type: 1
            }
          }
        };
      }
    },
    usageGain: {
      get_consumption: function get_consumption() {
        return {
          resources: {
            mana: {
              A: 1.5,
              B: 2 * getCostReduction('spell_focus'),
              type: 1
            }
          }
        };
      }
    },
    attributes: {
      duration: 10,
      xpOnCast: 20
    },
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_spellbook') > 0;
    }
  });
  registerSpell('spell_harvest_vision', {
    name: 'Harvest Vision',
    description: 'Temporarily enhances the caster\'s ability to locate valuable resources on the map. A glowing aura sharpens perception, increasing the likelihood of discovery.',
    hasCap: false,
    tags: ['spell', 'magic', 'mental', 'mental_magic'],
    defaultCap: 0,
    isAbstract: true,
    level: 1,
    onUse: function onUse(amount) {},
    getUsageCooldown: function getUsageCooldown() {
      return 0;
    },
    resourceModifier: {
      multiplier: {
        effects: {
          'gathering_low_chance': {
            A: 0.05,
            B: 1.45,
            type: 0
          }
        }
      },
      get_consumption: function get_consumption() {
        return {
          resources: {
            mana: {
              A: 1.5,
              B: 1. * getCostReduction('spell_harvest_vision'),
              type: 1
            }
          }
        };
      }
    },
    usageGain: {
      get_consumption: function get_consumption() {
        return {
          resources: {
            mana: {
              A: 1.5,
              B: 2 * getCostReduction('spell_harvest_vision'),
              type: 1
            }
          }
        };
      }
    },
    attributes: {
      duration: 10,
      xpOnCast: 20
    },
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_spellbook') > 0 && game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_map') > 0;
    }
  });
  registerSpell('spell_magic_recovery', {
    name: 'Less Magic Recovery',
    description: 'Heal yourself using magic',
    hasCap: false,
    tags: ['spell', 'magic', 'recovery', 'restoration_magic'],
    defaultCap: 0,
    isAbstract: true,
    level: 1,
    onUse: function onUse(amount) {},
    getUsageCooldown: function getUsageCooldown() {
      return 10;
    },
    usageGain: {
      get_consumption: function get_consumption() {
        return {
          resources: {
            mana: {
              A: 1.5,
              B: 4 * getCostReduction('spell_magic_recovery'),
              type: 1
            }
          }
        };
      },
      get_income: function get_income() {
        return {
          resources: {
            health: {
              A: 1.2,
              B: 10 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('restoration_spells_efficiency') * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('recovery_spells_efficiency'),
              type: 1
            }
          }
        };
      },
      effectDeps: ['restoration_spells_efficiency', 'recovery_spells_efficiency']
    },
    attributes: {
      xpOnCast: 20
    },
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_less_restoration') > 0;
    }
  });
  registerSpell('spell_small_regeneration', {
    name: 'Less Magic Regeneration',
    description: 'Enchant your body for faster recovery',
    hasCap: false,
    tags: ['spell', 'magic', 'recovery', 'restoration_magic'],
    defaultCap: 0,
    isAbstract: true,
    level: 1,
    onUse: function onUse(amount) {},
    getUsageCooldown: function getUsageCooldown() {
      return 0;
    },
    resourceModifier: {
      get_income: function get_income() {
        return {
          resources: {
            health: {
              A: 1.2,
              B: 0.5 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('restoration_spells_efficiency') * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('recovery_spells_efficiency'),
              type: 1
            },
            energy: {
              A: 1.2,
              B: 1 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('restoration_spells_efficiency') * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('recovery_spells_efficiency'),
              type: 1
            }
          }
        };
      },
      get_consumption: function get_consumption() {
        return {
          resources: {
            mana: {
              A: 1.5,
              B: 2 * getCostReduction('spell_small_regeneration'),
              type: 1
            }
          }
        };
      },
      effectDeps: ['restoration_spells_efficiency', 'recovery_spells_efficiency']
    },
    usageGain: {
      get_consumption: function get_consumption() {
        return {
          resources: {
            mana: {
              A: 1.5,
              B: 5 * getCostReduction('spell_small_regeneration') / 1.5,
              type: 1
            }
          }
        };
      }
    },
    attributes: {
      duration: 10,
      xpOnCast: 20
    },
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_less_restoration') > 0;
    }
  });
  registerSpell('spell_body_catalyst', {
    name: 'Body Catalyst',
    description: 'Use magic to accelerate physical training. Temporarily increases the learning speed of physical exercises.',
    hasCap: false,
    tags: ['spell', 'magic', 'enhance', 'restoration_magic'],
    defaultCap: 0,
    isAbstract: true,
    level: 1,
    onUse: function onUse(amount) {},
    getUsageCooldown: function getUsageCooldown() {
      return 0;
    },
    resourceModifier: {
      get_multiplier: function get_multiplier() {
        return {
          effects: {
            physical_training_learn_speed: {
              A: 0.05 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('restoration_spells_efficiency'),
              B: 1.0 + 0.1 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('restoration_spells_efficiency'),
              type: 0
            }
          }
        };
      },
      get_consumption: function get_consumption() {
        return {
          resources: {
            mana: {
              A: 1.5,
              B: 12 * getCostReduction('spell_body_catalyst'),
              type: 1
            }
          }
        };
      },
      effectDeps: ['restoration_spells_efficiency']
    },
    usageGain: {
      get_consumption: function get_consumption() {
        return {
          resources: {
            mana: {
              A: 1.5,
              B: 15 * getCostReduction('spell_perfection_illusion'),
              type: 1
            }
          }
        };
      }
    },
    attributes: {
      duration: 20,
      xpOnCast: 50,
      baseXPCost: 1.e+5
    },
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_minor_restoration') > 0;
    }
  });
  registerSpell('spell_perfection_illusion', {
    name: 'Perfection Illusion',
    description: 'Use magic to create illusion that you are perfect worker. Increases coins income from jobs',
    hasCap: false,
    tags: ['spell', 'magic', 'mental', 'illusion_magic'],
    defaultCap: 0,
    isAbstract: true,
    level: 1,
    onUse: function onUse(amount) {},
    getUsageCooldown: function getUsageCooldown() {
      return 0;
    },
    resourceModifier: {
      get_multiplier: function get_multiplier() {
        return {
          effects: {
            coins_earned_bonus: {
              A: 0.1 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('illusion_spells_efficiency'),
              B: 1.0 + 0.2 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('illusion_spells_efficiency'),
              type: 0
            }
          }
        };
      },
      get_consumption: function get_consumption() {
        return {
          resources: {
            mana: {
              A: 1.5,
              B: 1 * getCostReduction('spell_perfection_illusion'),
              type: 1
            }
          }
        };
      },
      effectDeps: ['illusion_spells_efficiency']
    },
    usageGain: {
      get_consumption: function get_consumption() {
        return {
          resources: {
            mana: {
              A: 1.5,
              B: 4 * getCostReduction('spell_perfection_illusion'),
              type: 1
            }
          }
        };
      }
    },
    attributes: {
      duration: 20,
      xpOnCast: 50
    },
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_less_illusion') > 0;
    }
  });
  registerSpell('spell_dancing_fairy', {
    name: 'Dancing Fairy',
    description: 'Summon illusion of dancing fairy, inspiring you while performing routine actions. Improves learning rate for all routine tasks',
    hasCap: false,
    tags: ['spell', 'magic', 'mental', 'illusion_magic'],
    defaultCap: 0,
    isAbstract: true,
    level: 1,
    onUse: function onUse(amount) {},
    getUsageCooldown: function getUsageCooldown() {
      return 0;
    },
    resourceModifier: {
      get_multiplier: function get_multiplier() {
        return {
          effects: {
            routine_learning_speed: {
              A: 0.1 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('illusion_spells_efficiency'),
              B: 1.0 + 0.4 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('illusion_spells_efficiency'),
              type: 0
            }
          }
        };
      },
      get_consumption: function get_consumption() {
        return {
          resources: {
            mana: {
              A: 1.5,
              B: 1.0 * getCostReduction('spell_dancing_fairy') / 1.5,
              type: 1
            }
          }
        };
      },
      effectDeps: ['illusion_spells_efficiency']
    },
    usageGain: {
      get_consumption: function get_consumption() {
        return {
          resources: {
            mana: {
              A: 1.5,
              B: 5. * getCostReduction('spell_dancing_fairy') / 1.5,
              type: 1
            }
          }
        };
      }
    },
    attributes: {
      duration: 20,
      xpOnCast: 50
    },
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_less_illusion') > 0;
    }
  });
  registerSpell('spell_friendliness_mask', {
    name: 'Mask of Friendliness',
    description: 'Cast a spell on your face to appear more friendly to others',
    hasCap: false,
    tags: ['spell', 'magic', 'mental', 'illusion_magic'],
    defaultCap: 0,
    isAbstract: true,
    level: 1,
    onUse: function onUse(amount) {},
    getUsageCooldown: function getUsageCooldown() {
      return 0;
    },
    resourceModifier: {
      get_multiplier: function get_multiplier() {
        return {
          effects: {
            social_training_learning_rate: {
              A: 0.1 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('illusion_spells_efficiency'),
              B: 1.0 + 0.4 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('illusion_spells_efficiency'),
              type: 0
            }
          }
        };
      },
      get_consumption: function get_consumption() {
        return {
          resources: {
            mana: {
              A: 1.5,
              B: 10.0 * getCostReduction('spell_friendliness_mask') / 1.5,
              type: 1
            }
          }
        };
      },
      effectDeps: ['illusion_spells_efficiency']
    },
    usageGain: {
      get_consumption: function get_consumption() {
        return {
          resources: {
            mana: {
              A: 1.5,
              B: 25. * getCostReduction('spell_friendliness_mask') / 1.5,
              type: 1
            }
          }
        };
      }
    },
    attributes: {
      duration: 20,
      xpOnCast: 50
    },
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_minor_illusion') > 0;
    }
  });
  registerSpell('spell_illusory_hammer', {
    name: 'Illusory Hammer',
    description: 'Create an duplicated hammer. Of course, its just an imagination, but still it chops wood nice.',
    hasCap: false,
    tags: ['spell', 'magic', 'mental', 'illusion_magic'],
    defaultCap: 0,
    isAbstract: true,
    level: 1,
    onUse: function onUse(amount) {},
    getUsageCooldown: function getUsageCooldown() {
      return 0;
    },
    resourceModifier: {
      get_multiplier: function get_multiplier() {
        return {
          effects: {
            crafting_efficiency: {
              A: 0.02 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('illusion_spells_efficiency'),
              B: 1.0 + 0.1 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('illusion_spells_efficiency'),
              type: 0
            }
          }
        };
      },
      get_consumption: function get_consumption() {
        return {
          resources: {
            mana: {
              A: 1.5,
              B: 25.0 * getCostReduction('spell_illusory_hammer') / 1.5,
              type: 1
            }
          }
        };
      },
      effectDeps: ['illusion_spells_efficiency']
    },
    usageGain: {
      get_consumption: function get_consumption() {
        return {
          resources: {
            mana: {
              A: 1.5,
              B: 80. * getCostReduction('spell_illusory_hammer') / 1.5,
              type: 1
            }
          }
        };
      }
    },
    attributes: {
      duration: 20,
      xpOnCast: 50
    },
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_minor_illusion') > 0;
    }
  });
  registerSpell('spell_conjure_water', {
    name: 'Conjure Water',
    description: 'Create a stream of pure water, vital for your herbs',
    hasCap: false,
    tags: ['spell', 'magic', 'mental', 'conjuration_magic', 'elemental'],
    defaultCap: 0,
    isAbstract: true,
    level: 1,
    onUse: function onUse(amount) {},
    getUsageCooldown: function getUsageCooldown() {
      return 0;
    },
    unlockedBy: [{
      type: 'effect',
      id: 'attribute_magic_ability',
      level: 8000
    }],
    resourceModifier: {
      get_income: function get_income() {
        return {
          resources: {
            inventory_water: {
              A: 1.2,
              B: 0.2 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('conjuration_spells_efficiency') * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('elemental_spells_efficiency'),
              type: 1
            }
          }
        };
      },
      get_consumption: function get_consumption() {
        return {
          resources: {
            mana: {
              A: 1.5,
              B: 45.0 * getCostReduction('spell_conjure_water') / 1.5,
              type: 1
            }
          }
        };
      },
      effectDeps: ['conjuration_spells_efficiency', 'elemental_spells_efficiency']
    },
    usageGain: {
      get_consumption: function get_consumption() {
        return {
          resources: {
            mana: {
              A: 1.5,
              B: 120. * getCostReduction('spell_conjure_water') / 1.5,
              type: 1
            }
          }
        };
      }
    },
    attributes: {
      duration: 20,
      xpOnCast: 50,
      baseXPCost: 1.e+8
    },
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_minor_illusion') > 0;
    }
  });
  registerSpell('spell_conjure_wood', {
    name: 'Conjure Wood',
    description: 'Create wood without having to use this heavy axe',
    hasCap: false,
    tags: ['spell', 'magic', 'mental', 'conjuration_magic', 'natural'],
    defaultCap: 0,
    isAbstract: true,
    level: 1,
    onUse: function onUse(amount) {},
    getUsageCooldown: function getUsageCooldown() {
      return 0;
    },
    unlockedBy: [{
      type: 'effect',
      id: 'attribute_magic_ability',
      level: 8000
    }],
    resourceModifier: {
      get_income: function get_income() {
        return {
          resources: {
            inventory_wood: {
              A: 1.2,
              B: 2000 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('conjuration_spells_efficiency'),
              type: 1
            }
          }
        };
      },
      get_consumption: function get_consumption() {
        return {
          resources: {
            mana: {
              A: 1.5,
              B: 125.0 * getCostReduction('spell_conjure_wood') / 1.5,
              type: 1
            }
          }
        };
      },
      effectDeps: ['conjuration_spells_efficiency']
    },
    usageGain: {
      get_consumption: function get_consumption() {
        return {
          resources: {
            mana: {
              A: 1.5,
              B: 120. * getCostReduction('spell_conjure_wood') / 1.5,
              type: 1
            }
          }
        };
      }
    },
    attributes: {
      duration: 20,
      xpOnCast: 50,
      baseXPCost: 1.e+8
    },
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_minor_illusion') > 0;
    }
  });
  registerSpell('spell_conjure_earth', {
    name: 'Conjure Earth',
    description: 'Create a bunch of earth',
    hasCap: false,
    tags: ['spell', 'magic', 'mental', 'conjuration_magic', 'elemental'],
    defaultCap: 0,
    isAbstract: true,
    level: 1,
    onUse: function onUse(amount) {},
    getUsageCooldown: function getUsageCooldown() {
      return 0;
    },
    unlockedBy: [{
      type: 'effect',
      id: 'attribute_magic_ability',
      level: 15000
    }],
    resourceModifier: {
      get_income: function get_income() {
        return {
          resources: {
            inventory_earth: {
              A: 1.2,
              B: 0.025 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('conjuration_spells_efficiency') * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('elemental_spells_efficiency'),
              type: 1
            }
          }
        };
      },
      get_consumption: function get_consumption() {
        return {
          resources: {
            mana: {
              A: 1.5,
              B: 60.0 * getCostReduction('spell_conjure_earth') / 1.5,
              type: 1
            }
          }
        };
      },
      effectDeps: ['conjuration_spells_efficiency', 'elemental_spells_efficiency']
    },
    usageGain: {
      get_consumption: function get_consumption() {
        return {
          resources: {
            mana: {
              A: 1.5,
              B: 180. * getCostReduction('spell_conjure_earth') / 1.5,
              type: 1
            }
          }
        };
      }
    },
    attributes: {
      duration: 20,
      xpOnCast: 50,
      baseXPCost: 1.e+8
    },
    unlockCondition: function unlockCondition() {
      return true;
    }
  });
  registerSpell('spell_conjure_air', {
    name: 'Conjure Air',
    description: 'Create an air',
    hasCap: false,
    tags: ['spell', 'magic', 'mental', 'conjuration_magic', 'elemental'],
    defaultCap: 0,
    isAbstract: true,
    level: 1,
    onUse: function onUse(amount) {},
    getUsageCooldown: function getUsageCooldown() {
      return 0;
    },
    unlockedBy: [{
      type: 'effect',
      id: 'attribute_magic_ability',
      level: 15000
    }],
    resourceModifier: {
      get_income: function get_income() {
        return {
          resources: {
            inventory_air: {
              A: 1.2,
              B: 0.025 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('conjuration_spells_efficiency') * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('elemental_spells_efficiency'),
              type: 1
            }
          }
        };
      },
      get_consumption: function get_consumption() {
        return {
          resources: {
            mana: {
              A: 1.5,
              B: 60.0 * getCostReduction('spell_conjure_air') / 1.5,
              type: 1
            }
          }
        };
      },
      effectDeps: ['conjuration_spells_efficiency', 'elemental_spells_efficiency']
    },
    usageGain: {
      get_consumption: function get_consumption() {
        return {
          resources: {
            mana: {
              A: 1.5,
              B: 180. * getCostReduction('spell_conjure_air') / 1.5,
              type: 1
            }
          }
        };
      }
    },
    attributes: {
      duration: 20,
      xpOnCast: 50,
      baseXPCost: 1.e+8
    },
    unlockCondition: function unlockCondition() {
      return true;
    }
  });
  registerSpell('spell_conjure_spark', {
    name: 'Conjure Spark',
    description: 'Create a spark',
    hasCap: false,
    tags: ['spell', 'magic', 'mental', 'conjuration_magic', 'elemental'],
    defaultCap: 0,
    isAbstract: true,
    level: 1,
    onUse: function onUse(amount) {},
    getUsageCooldown: function getUsageCooldown() {
      return 0;
    },
    unlockedBy: [{
      type: 'effect',
      id: 'attribute_magic_ability',
      level: 60000
    }],
    resourceModifier: {
      get_income: function get_income() {
        return {
          resources: {
            inventory_spark: {
              A: 1.2,
              B: 0.005 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('conjuration_spells_efficiency') * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('elemental_spells_efficiency'),
              type: 1
            }
          }
        };
      },
      get_consumption: function get_consumption() {
        return {
          resources: {
            mana: {
              A: 1.5,
              B: 60.0 * getCostReduction('spell_conjure_air') / 1.5,
              type: 1
            }
          }
        };
      },
      effectDeps: ['conjuration_spells_efficiency', 'elemental_spells_efficiency']
    },
    usageGain: {
      get_consumption: function get_consumption() {
        return {
          resources: {
            mana: {
              A: 1.5,
              B: 180. * getCostReduction('spell_conjure_spark') / 1.5,
              type: 1
            }
          }
        };
      }
    },
    attributes: {
      duration: 20,
      xpOnCast: 50,
      baseXPCost: 1.e+8
    },
    unlockCondition: function unlockCondition() {
      return true;
    }
  });
};
