import * as game_framework__WEBPACK_IMPORTED_MODULE_0__ from '../../../../framework/index.js';
import * as _accessories_db__WEBPACK_IMPORTED_MODULE_1__ from '../../../../worker/modules/property/accessories-db.js';

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }


var getResourceModifierDataSearchable = function getResourceModifierDataSearchable(rs) {
  var searchables = {
    'effects': [],
    'resources': []
  };
  if (!rs) return searchables;
  ['income', 'consumption', 'multiplier', 'rawCap', 'capMult'].forEach(function (scope) {
    var rObj = null;
    if (rs["get_".concat(scope)]) {
      rObj = rs["get_".concat(scope)]();
    } else {
      rObj = rs[scope];
    }
    if (!rObj) return;
    var _loop = function _loop(type) {
      var _searchables$type;
      (_searchables$type = searchables[type]).push.apply(_searchables$type, _toConsumableArray(Object.keys(rObj[type]).map(function (one) {
        var _gameEffects$getEffec;
        return type === 'resources' ? game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource(one).name.toLowerCase() : (_gameEffects$getEffec = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffect(one)) === null || _gameEffects$getEffec === void 0 ? void 0 : _gameEffects$getEffec.name.toLowerCase();
      })));
    };
    for (var type in rObj) {
      _loop(type);
    }
  });
  return searchables;
};
var registerAmplifier = function registerAmplifier(id, options) {
  options.searchableMeta = getResourceModifierDataSearchable(options.resourceModifier);
  game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.registerGameEntity(id, options);
};
var registerAmplifiersStage1 = function registerAmplifiersStage1() {
  registerAmplifier('amplifier_dimensional_amplifier', {
    tags: ["amplifier", "upgrade", "purchaseable", "earth", "space"],
    name: 'Dimensional Amplifier',
    description: 'Harness the power of the Earth element to reshape and expand spatial properties, increasing available living space.',
    level: 0,
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.isResourceUnlocked('inventory_earth');
    },
    resourceModifier: {
      get_multiplier: function get_multiplier() {
        return {
          resources: {
            'living_space': {
              A: 0.0025,
              B: 1,
              type: 0
            }
          }
        };
      }
    },
    get_cost: function get_cost() {
      return {
        'inventory_earth': {
          A: 1.2,
          B: 100,
          type: 1
        }
      };
    }
  });
  registerAmplifier('amplifier_blacksmiths_amplifier', {
    tags: ["amplifier", "upgrade", "purchaseable", "earth", "crafting"],
    name: 'Blacksmiths Amplifier',
    description: 'Infuse your crafting with Earth’s stability, amplifying crafting efficiency and precision.',
    level: 0,
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.isResourceUnlocked('inventory_earth');
    },
    resourceModifier: {
      get_multiplier: function get_multiplier() {
        return {
          resources: {
            'crafting_ability': {
              A: 0.02,
              B: 1,
              type: 0
            }
          }
        };
      }
    },
    get_cost: function get_cost() {
      return {
        'inventory_earth': {
          A: 1.2,
          B: 100,
          type: 1
        }
      };
    }
  });
  registerAmplifier('amplifier_physical_easiness', {
    tags: ["amplifier", "upgrade", "purchaseable", "air", "actions"],
    name: 'Physical Flow Amplifier',
    description: 'Channel the Air element to enhance bodily coordination, reducing the XP requirements for physical actions.',
    level: 0,
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.isResourceUnlocked('inventory_air');
    },
    resourceModifier: {
      get_multiplier: function get_multiplier() {
        return {
          effects: {
            'physical_actions_discount': {
              A: 0.2,
              B: 1,
              C: 1.025,
              type: 3
            }
          }
        };
      }
    },
    get_cost: function get_cost() {
      return {
        'inventory_air': {
          A: 1.2,
          B: 100,
          type: 1
        }
      };
    }
  });
  registerAmplifier('amplifier_mental_easiness', {
    tags: ["amplifier", "upgrade", "purchaseable", "air", "actions"],
    name: 'Mental Clarity Amplifier',
    description: 'Attune your mind to the flow of Air, decreasing the XP cost for mental actions through enhanced cognitive ease.',
    level: 0,
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.isResourceUnlocked('inventory_air');
    },
    resourceModifier: {
      get_multiplier: function get_multiplier() {
        return {
          effects: {
            'mental_actions_discount': {
              A: 0.2,
              B: 1,
              C: 1.025,
              type: 3
            }
          }
        };
      }
    },
    get_cost: function get_cost() {
      return {
        'inventory_air': {
          A: 1.2,
          B: 100,
          type: 1
        }
      };
    }
  });
  registerAmplifier('amplifier_social_easiness', {
    tags: ["amplifier", "upgrade", "purchaseable", "air", "actions"],
    name: 'Social Insight Amplifier',
    description: 'Utilize the Air element to sharpen your understanding of social interactions, reducing the XP requirements for social actions.',
    level: 0,
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.isResourceUnlocked('inventory_air');
    },
    resourceModifier: {
      get_multiplier: function get_multiplier() {
        return {
          effects: {
            'social_actions_discount': {
              A: 0.2,
              B: 1,
              C: 1.025,
              type: 3
            }
          }
        };
      }
    },
    get_cost: function get_cost() {
      return {
        'inventory_air': {
          A: 1.2,
          B: 100,
          type: 1
        }
      };
    }
  });
  registerAmplifier('amplifier_magical_easiness', {
    tags: ["amplifier", "upgrade", "purchaseable", "air", "actions"],
    name: 'Magical Insight Amplifier',
    description: 'Utilize the Air element to improve your inner magical reserves, reducing the XP requirements for magical actions.',
    level: 0,
    unlockedBy: [{
      type: 'effect',
      id: 'attribute_patience',
      level: 20000
    }],
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.isResourceUnlocked('inventory_air');
    },
    resourceModifier: {
      get_multiplier: function get_multiplier() {
        return {
          effects: {
            'magical_actions_discount': {
              A: 0.2,
              B: 1,
              C: 1.025,
              type: 3
            }
          }
        };
      }
    },
    get_cost: function get_cost() {
      return {
        'inventory_air': {
          A: 1.2,
          B: 100,
          type: 1
        }
      };
    }
  });
  registerAmplifier('amplifier_arcane_conduit', {
    tags: ["amplifier", "upgrade", "purchaseable", "spark", "actions"],
    name: 'Arcane Conduit Amplifier',
    description: 'Increase mana cap and regeneration.',
    level: 0,
    unlockedBy: [{
      type: 'effect',
      id: 'attribute_magic_ability',
      level: 60000
    }],
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.isResourceUnlocked('inventory_spark');
    },
    resourceModifier: {
      get_multiplier: function get_multiplier() {
        return {
          resources: {
            'mana': {
              A: 0.02,
              B: 1,
              C: 1.025,
              type: 3
            }
          }
        };
      },
      get_capMult: function get_capMult() {
        return {
          resources: {
            'mana': {
              A: 0.02,
              B: 1,
              C: 1.025,
              type: 3
            }
          }
        };
      }
    },
    get_cost: function get_cost() {
      return {
        'inventory_spark': {
          A: 1.2,
          B: 100,
          type: 1
        }
      };
    }
  });
  registerAmplifier('amplifier_scolars_ignition', {
    tags: ["amplifier", "upgrade", "purchaseable", "spark", "actions"],
    name: 'Scholars Ignition Amplifier',
    description: 'Increase courses learn speed',
    level: 0,
    unlockedBy: [{
      type: 'effect',
      id: 'attribute_magic_ability',
      level: 60000
    }],
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.isResourceUnlocked('inventory_spark');
    },
    resourceModifier: {
      get_multiplier: function get_multiplier() {
        return {
          effects: {
            'courses_learning_speed': {
              A: 0.05,
              B: 1,
              C: 1.01,
              type: 3
            }
          }
        };
      }
    },
    get_cost: function get_cost() {
      return {
        'inventory_spark': {
          A: 1.2,
          B: 100,
          type: 1
        }
      };
    }
  });
};

export { registerAmplifier, registerAmplifiersStage1 };
