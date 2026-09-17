import * as game_framework__WEBPACK_IMPORTED_MODULE_0__ from '../../../framework/index.js';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var getWateringEffectId = function getWateringEffectId(id) {
  return "watering_".concat(id);
};
var registerPlant = function registerPlant(id, inventoryResource, incomeBase, costBase, options) {
  game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.registerEffect(getWateringEffectId(id), {
    name: "".concat(options.name, " Watering"),
    defaultValue: 1,
    minValue: 1
  });
  game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.registerGameEntity(id, {
    tags: ["plantation"],
    name: options.name,
    isAbstract: false,
    description: options.description,
    level: 0,
    icon_id: inventoryResource,
    resourceModifier: {
      get_income: function get_income() {
        return {
          resources: _defineProperty({}, inventoryResource, {
            A: incomeBase * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('plantations_efficiency') * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue(getWateringEffectId(id)),
            B: 0,
            C: 1.02,
            type: 3
          })
        };
      },
      consumption: {
        resources: {
          plantation_slots: {
            A: 1,
            B: 0,
            type: 2
          }
        }
      },
      effectDeps: ['plantations_efficiency', getWateringEffectId(id)]
    },
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.isResourceUnlocked(inventoryResource) && game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource('plantation_slots').income > 0;
    },
    attributes: {
      baseXPCost: 10,
      inventoryResource: inventoryResource
    },
    get_cost: function get_cost() {
      var seeds = _defineProperty({}, inventoryResource, {
        A: 1.5,
        B: costBase,
        type: 1
      });
      var places = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel(id) <= 0 ? {
        'plantation_slots': {
          A: 0,
          B: 1,
          type: 0
        }
      } : {};
      return _objectSpread(_objectSpread({}, seeds), places);
    }
  });
  game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.registerGameEntity("".concat(id, "_watering_bonus"), {
    tags: ["plantation-watering"],
    name: options.name,
    isAbstract: false,
    description: options.description,
    level: 0,
    icon_id: inventoryResource,
    resourceModifier: {
      get_multiplier: function get_multiplier() {
        return {
          effects: _defineProperty({}, getWateringEffectId(id), {
            A: 1.2,
            B: 1,
            C: 0,
            type: 1
          })
        };
      },
      consumption: {
        resources: {
          inventory_water: {
            A: 1.5,
            B: 0.25,
            C: -0.25,
            type: 1
          }
        }
      }
    },
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.isResourceUnlocked(inventoryResource) && game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.isResourceUnlocked('inventory_water');
    },
    attributes: {}
  });
};
function registerPlantations() {
  registerPlant('berry_plantation', 'inventory_berry', 0.1, 5000, {
    name: 'Grow Berries',
    description: 'Just plant some berries... OK?'
  });
  registerPlant('fly_mushroom_plantation', 'inventory_fly_mushroom', 0.05, 2000, {
    name: 'Grow Fly Mushroom',
    description: 'They say you are druggie, but never mind — you are a mage.'
  });
  registerPlant('golden_algae_plantation', 'inventory_golden_algae', 0.04, 2000, {
    name: 'Grow Golden Algae',
    description: 'Grow Golden Algae.'
  });
  registerPlant('knowledge_moss_plantation', 'inventory_knowledge_moss', 0.04, 2000, {
    name: 'Grow Knowledge Moss',
    description: 'Grow Knowledge Moss.'
  });
  registerPlant('core_duckweed_plantation', 'inventory_core_duckweed', 0.04, 2000, {
    name: 'Grow Duckweed',
    description: 'Grow core duckweed.'
  });
  registerPlant('aloe_vera_plantation', 'inventory_aloe_vera', 0.02, 400, {
    name: 'Grow Aloe Vera',
    description: 'Grow some aloe vera'
  });
  registerPlant('ginseng_plantation', 'inventory_ginseng', 0.02, 400, {
    name: 'Grow Ginseng',
    description: 'Grow some ginseng'
  });
  registerPlant('nightshade_plantation', 'inventory_nightshade', 0.01, 300, {
    name: 'Grow Nightshade',
    description: 'Grow some nightshade'
  });
  registerPlant('harmony_blossom_plantation', 'inventory_harmony_blossom', 0.01, 500, {
    name: 'Grow Harmony Blossom',
    description: 'Grow Harmony Blossom'
  });
  registerPlant('ember_leaf_plantation', 'inventory_ember_leaf', 0.01, 500, {
    name: 'Grow Ember Leaf',
    description: 'Grow Ember Leaf'
  });
  registerPlant('mystic_bloom_plantation', 'inventory_mystic_bloom', 0.01, 500, {
    name: 'Grow Mystic Bloom',
    description: 'Grow Mystic Bloom'
  });
}
