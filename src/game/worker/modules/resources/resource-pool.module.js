import * as _shared_game_module__WEBPACK_IMPORTED_MODULE_0__ from '../../shared/game-module.js';
import * as game_framework__WEBPACK_IMPORTED_MODULE_1__ from '../../../framework/index.js';
import * as _inventory_inventory_items_db__WEBPACK_IMPORTED_MODULE_2__ from '../inventory/inventory-items-db.js';
import * as _common_effects_db__WEBPACK_IMPORTED_MODULE_3__ from './common-effects-db.js';
import * as game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_4__ from '../../../framework/src/utils/consts.js';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }





var ResourcePoolModule = /*#__PURE__*/function (_GameModule) {
  function ResourcePoolModule() {
    var _this;
    _classCallCheck(this, ResourcePoolModule);
    _this = _callSuper(this, ResourcePoolModule);
    _this.dragonLevel = 0;
    _this.dragonPower = 0;
    _this.monitoredData = {};
    _this.pinnedResources = {};
    _this.eventHandler.registerHandler('set-resource-pinned', function (payload) {
      _this.pinnedResources[payload.id] = payload.flag;
    });
    _this.eventHandler.registerHandler('query-resources-data', function (pl) {
      var data = _this.getResourcesData(pl).map(function (one) {
        return _objectSpread(_objectSpread({}, one), {}, {
          capProgress: one.isService ? Math.min(one.targetEfficiency || 0, 1) : one.hasCap ? one.amount / Math.max(1.e-8, one.cap) : 0,
          total: one.isService ? one.balance + one.consumption : one.cap
        });
      });
      _this.eventHandler.sendData('resources-data', data);
    });
    _this.eventHandler.registerHandler('query-all-resources', function (payload) {
      var data = Object.values(game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.resources);
      var label = 'all-resources';
      if (payload !== null && payload !== void 0 && payload.prefix) {
        label = "".concat(label, "-").concat(payload === null || payload === void 0 ? void 0 : payload.prefix);
      }
      _this.eventHandler.sendData(label, data.map(function (one) {
        return {
          id: one.id,
          name: one.name,
          isCapped: one.isCapped,
          isUnlocked: one.unlockCondition ? one.unlockCondition() : true
        };
      }));
    });
    return _this;
  }
  _inherits(ResourcePoolModule, _GameModule);
  return _createClass(ResourcePoolModule, [{
    key: "initialize",
    value: function initialize() {
      (0,_common_effects_db__WEBPACK_IMPORTED_MODULE_3__.registerCommomEffects)();
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.registerResource('mage-xp', {
        name: 'XP',
        hasCap: true,
        tags: ['mage', 'xp'],
        defaultCap: 0
      });
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEffects.registerEffect('coins_cap_bonus', {
        name: 'Coins cap multiplier',
        defaultValue: 1,
        minValue: 1
      });
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.registerResource('energy', {
        name: 'Energy',
        hasCap: true,
        tags: ['resource', 'energy', 'basic', 'vital'],
        defaultCap: 0
      });
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.registerResource('health', {
        name: 'Health',
        hasCap: true,
        tags: ['resource', 'health', 'basic', 'vital'],
        defaultCap: 0,
        unlockCondition: function unlockCondition() {
          // console.log('ACTLVL: ', )
          return game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getLevel('action_pushup') > 1;
        }
      });
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.registerResource('coins', {
        name: 'Coins',
        hasCap: true,
        tags: ['resource', 'coins', 'basic'],
        defaultCap: 2
      });
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.registerResource('knowledge', {
        name: 'Knowledge',
        hasCap: true,
        tags: ['resource', 'basic', 'mental'],
        defaultCap: 10,
        unlockCondition: function unlockCondition() {
          return game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getLevel('shop_item_library_entrance') > 0;
        }
      });
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.registerResource('mana', {
        name: 'Mana',
        hasCap: true,
        tags: ['resource', 'magical', 'mental'],
        defaultCap: 10,
        unlockCondition: function unlockCondition() {
          return game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getLevel('shop_item_spellbook') > 0;
        }
      });
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.registerResource('crafting_ability', {
        tags: ['crafting', 'secondary'],
        name: 'Crafting Effort',
        isService: true
      });
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.registerResource('crafting_slots', {
        tags: ['crafting', 'secondary'],
        name: 'Crafting Slots',
        isService: true
      });
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.registerResource('alchemy_ability', {
        tags: ['alchemy', 'secondary'],
        name: 'Alchemy Effort',
        isService: true
      });
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.registerResource('alchemy_slots', {
        tags: ['alchemy', 'secondary'],
        name: 'Alchemy Slots',
        isService: true
      });
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.registerResource('plantation_slots', {
        tags: ['alchemy', 'secondary'],
        name: 'Plantation Slots',
        isService: true
      });
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.registerResource('gathering_effort', {
        tags: ['exploration', 'secondary'],
        name: 'Gathering Effort',
        isService: true
      });
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.registerResource('gathering_perception', {
        tags: ['exploration', 'secondary'],
        name: 'Gathering Perception',
        isService: true,
        description: 'Determines how much efficient you are at gathering, boosting probability to find any loot'
      });
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.registerResource('mental_energy', {
        tags: ['resource', 'mental'],
        name: 'Mental Energy',
        hasCap: true,
        defaultCap: 100,
        unlockCondition: function unlockCondition() {
          return game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.isEntityUnlocked('action_mind_cleansing');
        }
      });
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.registerResource('rare_herbs_loot', {
        tags: ['gathering', 'secondary'],
        name: 'Rare Herbs',
        isService: true,
        isPercentage: true,
        unlockCondition: function unlockCondition() {
          return game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getLevel('shop_item_herbs_handbook_2') > 0;
        }
      });
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEffects.registerEffect('metabolism_rate', {
        name: 'Metabolism Rate',
        defaultValue: 1,
        minValue: 1,
        description: 'Increase effect from herbs, food and potions consumption (Affect both positive and negative effects)'
      });
      (0,_inventory_inventory_items_db__WEBPACK_IMPORTED_MODULE_2__.registerInventoryItems)();
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.registerResource('guild_reputation', {
        name: 'Guild Reputation',
        hasCap: true,
        tags: ['guild', 'reputation'],
        defaultCap: 0
      });
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.registerResource('guild-points', {
        name: 'Guild Points',
        hasCap: true,
        tags: ['guild', 'points'],
        defaultCap: 0,
        isService: true
      });
    }
  }, {
    key: "tick",
    value: function tick() {}
  }, {
    key: "save",
    value: function save() {
      return {
        pinnedResources: this.pinnedResources
      };
    }
  }, {
    key: "load",
    value: function load(obj) {
      var _obj$pinnedResources;
      this.pinnedResources = (_obj$pinnedResources = obj === null || obj === void 0 ? void 0 : obj.pinnedResources) !== null && _obj$pinnedResources !== void 0 ? _obj$pinnedResources : {};
    }
  }, {
    key: "setMonitored",
    value: function setMonitored(data) {
      var _this2 = this;
      this.monitoredData = {};
      if (!(data !== null && data !== void 0 && data.length)) return;
      data.forEach(function (effect) {
        var direction = 1;
        if (effect.scope === 'consumption') {
          direction = -1;
        }
        if (effect.scope === 'multiplier' && effect.value < 1) {
          direction = -1;
        }
        _this2.monitoredData[effect.id] = {
          direction: direction,
          name: effect.name,
          id: effect.id
        };
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      var rs = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.listResourcesByTags(['resource', 'population'], true);
      rs.forEach(function (r) {
        game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.setResource(r.id, 0);
      });
    }
  }, {
    key: "getResourcesData",
    value: function getResourcesData(pl) {
      var _this3 = this;
      var rs = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.listResourcesByTags(['resource', 'population'], true);
      // console.log('RS: ', JSON.stringify(gameResources.getResource('coins')));
      if (pl.includePinned) {
        var inventory = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.listAllResources(['resource']);
        var pinned = inventory.filter(function (one) {
          var _this3$pinnedResource;
          return (_this3$pinnedResource = _this3.pinnedResources) === null || _this3$pinnedResource === void 0 ? void 0 : _this3$pinnedResource[one.id];
        });
        rs.push.apply(rs, _toConsumableArray(pinned));
      }
      return rs.filter(function (one) {
        return one.isUnlocked;
      }).map(function (resource) {
        var _this3$monitoredData$;
        return _objectSpread(_objectSpread({}, resource), {}, {
          isNegative: resource.balance < 0,
          isPositive: resource.balance > 0 && resource.amount < resource.cap - game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_4__.SMALL_NUMBER,
          isCapped: resource.amount >= resource.cap - game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_4__.SMALL_NUMBER,
          eta: game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.assertToCapOrEmpty(resource.id),
          monitor: (_this3$monitoredData$ = _this3.monitoredData[resource.id]) !== null && _this3$monitoredData$ !== void 0 ? _this3$monitoredData$ : null
          // affData: monitoredResources[resource.id] || undefined
        });
      });
    }
  }]);
}(_shared_game_module__WEBPACK_IMPORTED_MODULE_0__.GameModule);
