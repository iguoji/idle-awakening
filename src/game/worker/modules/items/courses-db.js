import * as game_framework__WEBPACK_IMPORTED_MODULE_0__ from '../../../framework/index.js';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var registerCourse = function registerCourse(id, options, learningModifier) {
  //id, options - for course entity
  var origTags = _toConsumableArray(options.tags || []);
  options.tags = [].concat(_toConsumableArray(origTags), ['course']);
  var learningTags = [].concat(_toConsumableArray(origTags), ['course-learning']);
  var learningOptions = {
    name: "Learning ".concat(options.name),
    tags: learningTags,
    resourceModifier: learningModifier,
    attributes: {
      learningEntityId: id
    }
  };
  game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.registerGameEntity(id, _objectSpread(_objectSpread({}, options), {}, {
    learningEntity: learningOptions
  }));
};
var registerCourseItemsStage1 = function registerCourseItemsStage1() {
  registerCourse('course_body_capability', {
    name: 'Body Capability',
    tags: ['physical', 'enchancement'],
    attributes: {
      basicDuration: 60
    },
    level: 0,
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_training_room') > 0;
    },
    resourceModifier: {
      capMult: {
        resources: {
          /*'energy': {
              A: 0.1,
              B: 1,
              type: 0,
          },*/
          'health': {
            A: 0.1,
            B: 1,
            type: 0
          }
        }
      }
    }
  }, {
    get_consumption: function get_consumption() {
      return {
        resources: {
          /*'energy': {
              A: 1.1,
              B: 50,
              type: 1,
          },*/
          'knowledge': {
            A: 1.1,
            B: 15 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('courses_knowledge_discount'),
            type: 1
          }
        }
      };
    },
    effectDeps: ['courses_knowledge_discount']
  });
  registerCourse('course_mind_improvement', {
    name: 'Improved Mind',
    tags: ['mental', 'enchancement'],
    attributes: {
      basicDuration: 60
    },
    level: 0,
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_training_room') > 0;
    },
    resourceModifier: {
      multiplier: {
        resources: {
          'knowledge': {
            A: 0.05,
            B: 1,
            type: 0
          }
        }
      }
    }
  }, {
    get_consumption: function get_consumption() {
      return {
        resources: {
          /*'coins': {
              A: 1.1,
              B: 5000,
              type: 1,
          },*/
          'knowledge': {
            A: 1.1,
            B: 30 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('courses_knowledge_discount'),
            type: 1
          }
        }
      };
    },
    effectDeps: ['courses_knowledge_discount']
  });
  registerCourse('course_coins_improvement', {
    name: 'Work Ethic',
    tags: ['social', 'enchancement'],
    attributes: {
      basicDuration: 60
    },
    level: 0,
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_training_room') > 0;
    },
    resourceModifier: {
      multiplier: {
        resources: {
          'coins': {
            A: 0.05,
            B: 1,
            type: 0
          }
        }
      }
    }
  }, {
    get_consumption: function get_consumption() {
      return {
        resources: {
          /*'energy': {
              A: 1.1,
              B: 50,
              type: 1,
          },*/
          'knowledge': {
            A: 1.1,
            B: 30 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('courses_knowledge_discount'),
            type: 1
          }
        }
      };
    },
    effectDeps: ['courses_knowledge_discount']
  });
  registerCourse('course_navigation', {
    name: 'Improved Navigation',
    tags: ['mental', 'enchancement'],
    attributes: {
      basicDuration: 60
    },
    level: 0,
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_training_room') > 0;
    },
    resourceModifier: {
      multiplier: {
        resources: {
          'gathering_perception': {
            A: 0.05,
            B: 1,
            type: 0
          }
        }
      }
    }
  }, {
    get_consumption: function get_consumption() {
      return {
        resources: {
          /*'coins': {
              A: 1.1,
              B: 5000,
              type: 1,
          },*/
          'knowledge': {
            A: 1.1,
            B: 50 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('courses_knowledge_discount'),
            type: 1
          }
        }
      };
    },
    effectDeps: ['courses_knowledge_discount']
  });
  registerCourse('course_strength_intensity', {
    name: 'Physical Practices',
    tags: ['physical', 'enchancement'],
    attributes: {
      basicDuration: 120
    },
    level: 0,
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_breaking_limits') > 0 && game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_training_room') > 0;
    },
    resourceModifier: {
      multiplier: {
        effects: {
          'aspect_attribute_strength_reduction': {
            A: 0.05,
            B: 1,
            type: 0
          }
        }
      }
    }
  }, {
    get_consumption: function get_consumption() {
      return {
        resources: {
          /*'health': {
              A: 1.1,
              B: 100,
              type: 1,
          },*/
          'knowledge': {
            A: 1.1,
            B: 30 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('courses_knowledge_discount'),
            type: 1
          }
        }
      };
    },
    effectDeps: ['courses_knowledge_discount']
  });
  registerCourse('course_patience_intensity', {
    name: 'Concentration',
    tags: ['mental', 'enchancement'],
    attributes: {
      basicDuration: 120
    },
    level: 0,
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_breaking_limits') > 0 && game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_training_room') > 0;
    },
    resourceModifier: {
      multiplier: {
        effects: {
          'aspect_attribute_patience_reduction': {
            A: 0.05,
            B: 1,
            type: 0
          }
        }
      }
    }
  }, {
    get_consumption: function get_consumption() {
      return {
        resources: {
          /*'energy': {
              A: 1.1,
              B: 150,
              type: 1,
          },*/
          'knowledge': {
            A: 1.1,
            B: 40 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('courses_knowledge_discount'),
            type: 1
          }
        }
      };
    },
    effectDeps: ['courses_knowledge_discount']
  });
  registerCourse('course_charisma_intensity', {
    name: 'Influence Training',
    tags: ['social', 'enchancement'],
    attributes: {
      basicDuration: 120
    },
    level: 0,
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_breaking_limits') > 0 && game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_training_room') > 0;
    },
    resourceModifier: {
      multiplier: {
        effects: {
          'aspect_attribute_charisma_reduction': {
            A: 0.05,
            B: 1,
            type: 0
          }
        }
      }
    }
  }, {
    get_consumption: function get_consumption() {
      return {
        resources: {
          /*'coins': {
              A: 1.1,
              B: 10000,
              type: 1,
          },*/
          'knowledge': {
            A: 1.1,
            B: 40 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('courses_knowledge_discount'),
            type: 1
          }
        }
      };
    },
    effectDeps: ['courses_knowledge_discount']
  });
  registerCourse('course_mental_focus_training', {
    name: 'Mental Focus Training',
    tags: ['mental', 'reductive'],
    attributes: {
      basicDuration: 120
    },
    level: 0,
    unlockedBy: [{
      type: 'effect',
      id: 'attribute_clarity',
      level: 25
    }],
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_training_room') > 0;
    },
    resourceModifier: {
      multiplier: {
        effects: {
          'courses_knowledge_discount': {
            A: 0.1,
            B: 1,
            C: 1.02,
            type: 3
          }
        }
      }
    }
  }, {
    get_consumption: function get_consumption() {
      return {
        resources: {
          /*'energy': {
              A: 1.1,
              B: 1000,
              type: 1,
          },*/
          'mental_energy': {
            A: 1.1,
            B: 1,
            type: 1
          }
        }
      };
    }
  });
  registerCourse('course_art_of_persuasion', {
    name: 'Art of Persuasion',
    tags: ['social', 'reductive'],
    attributes: {
      basicDuration: 120
    },
    level: 0,
    unlockedBy: [{
      type: 'effect',
      id: 'attribute_clarity',
      level: 25
    }],
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_training_room') > 0;
    },
    resourceModifier: {
      get_multiplier: function get_multiplier() {
        return {
          effects: {
            'social_actions_discount': {
              A: 0.2 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('reductive_courses_power'),
              B: 1,
              C: 1.01,
              type: 3
            }
          }
        };
      },
      effectDeps: ['reductive_courses_power']
    }
  }, {
    get_consumption: function get_consumption() {
      return {
        resources: {
          /* 'energy': {
               A: 1.1,
               B: 1000,
               type: 1,
           },*/
          'mental_energy': {
            A: 1.1,
            B: 1,
            type: 1
          }
        }
      };
    }
  });
  registerCourse('course_physical_efficiency', {
    name: 'Physical Efficiency',
    tags: ['physical', 'reductive'],
    attributes: {
      basicDuration: 120
    },
    level: 0,
    unlockedBy: [{
      type: 'effect',
      id: 'attribute_clarity',
      level: 25
    }],
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_training_room') > 0;
    },
    resourceModifier: {
      get_multiplier: function get_multiplier() {
        return {
          effects: {
            'physical_actions_discount': {
              A: 0.2 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('reductive_courses_power'),
              B: 1,
              C: 1.01,
              type: 3
            }
          }
        };
      },
      effectDeps: ['reductive_courses_power']
    }
  }, {
    get_consumption: function get_consumption() {
      return {
        resources: {
          /*'energy': {
              A: 1.1,
              B: 1000,
              type: 1,
          },*/
          'mental_energy': {
            A: 1.1,
            B: 1,
            type: 1
          }
        }
      };
    }
  });
  registerCourse('course_cognitive_focus', {
    name: 'Cognitive Focus',
    tags: ['mental', 'reductive'],
    attributes: {
      basicDuration: 130
    },
    level: 0,
    unlockedBy: [{
      type: 'effect',
      id: 'attribute_clarity',
      level: 25
    }],
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_training_room') > 0;
    },
    resourceModifier: {
      get_multiplier: function get_multiplier() {
        return {
          effects: {
            'mental_actions_discount': {
              A: 0.2 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('reductive_courses_power'),
              B: 1,
              C: 1.01,
              type: 3
            }
          }
        };
      },
      effectDeps: ['reductive_courses_power']
    }
  }, {
    get_consumption: function get_consumption() {
      return {
        resources: {
          /*'energy': {
              A: 1.1,
              B: 1000,
              type: 1,
          },*/
          'mental_energy': {
            A: 1.1,
            B: 1,
            type: 1
          }
        }
      };
    }
  });
  registerCourse('course_magical_focus', {
    name: 'Magical Focus',
    tags: ['magical', 'reductive'],
    attributes: {
      basicDuration: 130
    },
    level: 0,
    unlockedBy: [{
      type: 'effect',
      id: 'attribute_clarity',
      level: 25
    }, {
      type: 'effect',
      id: 'attribute_patience',
      level: 20000
    }],
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_training_room') > 0;
    },
    resourceModifier: {
      get_multiplier: function get_multiplier() {
        return {
          effects: {
            'magical_actions_discount': {
              A: 0.2 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('reductive_courses_power'),
              B: 1,
              C: 1.01,
              type: 3
            }
          }
        };
      },
      effectDeps: ['reductive_courses_power']
    }
  }, {
    get_consumption: function get_consumption() {
      return {
        resources: {
          /*'energy': {
              A: 1.1,
              B: 1000,
              type: 1,
          },*/
          'mental_energy': {
            A: 1.1,
            B: 10,
            type: 1
          }
        }
      };
    }
  });
  registerCourse('course_crafting_economy', {
    name: 'Crafting Optimization',
    tags: ['magical', 'reductive'],
    description: 'Mastering the art of resource management, this course teaches how to minimize material waste and maximize output, making every crafted piece more cost-effective.',
    attributes: {
      basicDuration: 240
    },
    level: 0,
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_advanced_training') > 0 && game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_training_room') > 0;
    },
    resourceModifier: {
      get_multiplier: function get_multiplier() {
        return {
          effects: {
            'crafting_materials_discount': {
              A: 0.025 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('reductive_courses_power'),
              B: 1,
              C: 1.01,
              type: 3
            }
          }
        };
      },
      effectDeps: ['reductive_courses_power']
    }
  }, {
    get_consumption: function get_consumption() {
      return {
        resources: {
          /*'energy': {
              A: 1.1,
              B: 1000,
              type: 1,
          },*/
          'mental_energy': {
            A: 1.1,
            B: 100,
            type: 1
          }
        }
      };
    }
  });
  registerCourse('course_alchemy_economy', {
    name: 'Alchemy Optimization',
    tags: ['magical', 'reductive'],
    description: 'A deep dive into the refined techniques of potion-making, allowing alchemists to extract the full potential of ingredients while reducing unnecessary expenditure.',
    attributes: {
      basicDuration: 240
    },
    level: 0,
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_advanced_training') > 0 && game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_training_room') > 0;
    },
    resourceModifier: {
      get_multiplier: function get_multiplier() {
        return {
          effects: {
            'alchemy_materials_discount': {
              A: 0.025 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('reductive_courses_power'),
              B: 1,
              C: 1.01,
              type: 3
            }
          }
        };
      },
      effectDeps: ['reductive_courses_power']
    }
  }, {
    get_consumption: function get_consumption() {
      return {
        resources: {
          /*'energy': {
              A: 1.1,
              B: 1000,
              type: 1,
          },*/
          'mental_energy': {
            A: 1.1,
            B: 100,
            type: 1
          }
        }
      };
    }
  });
};

export { registerCourse };
export { registerCourseItemsStage1 };
