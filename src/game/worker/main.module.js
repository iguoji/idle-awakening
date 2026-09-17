import * as game_module from './shared/game-module.js';
import * as index from '../framework/index.js';
import * as mage_module from './modules/mage/mage.module.js';
import * as resource_pool_module from './modules/resources/resource-pool.module.js';
import * as actions_module from './modules/actions/actions.module.js';
import * as attributes_module from './modules/attributes/attributes.module.js';
import * as shop_module from './modules/items/shop.module.js';
import * as inventory_module from './modules/inventory/inventory.module.js';
import * as property_module from './modules/property/property.module.js';
import * as spells_module from './modules/magic/spells.module.js';
import * as crafting_module from './modules/workshop/crafting.module.js';
import * as plantations_module from './modules/workshop/plantations.module.js';
import * as guilds_module from './modules/social/guilds.module.js';
import * as unlock_notifications_module from './shared/modules/unlock-notifications.module.js';
import * as random_events_module from './modules/general/random-events.module.js';
import * as temporary_effects_module from './modules/general/temporary-effects.module.js';
import * as map_module from './modules/map/map.module.js';
import * as hotkeys_module from './shared/modules/hotkeys.module.js';
import * as monitoring_module from './shared/modules/monitoring.module.js';
import * as rules_module from './shared/modules/rules.module.js';
import * as courses_module from './modules/items/courses.module.js';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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





















var MainModule = /*#__PURE__*/function (_GameModule) {
  function MainModule() {
    var _this;
    _classCallCheck(this, MainModule);
    _this = _callSuper(this, MainModule);
    index.gameCore.registerModule('attributes', attributes_module.AttributesModule);
    index.gameCore.registerModule('temporary-effects', temporary_effects_module.TemporaryEffectsModule);
    index.gameCore.registerModule('resource-pool', resource_pool_module.ResourcePoolModule);
    index.gameCore.registerModule('mage', mage_module.MageModule);
    index.gameCore.registerModule('actions', actions_module.ActionsModule);
    index.gameCore.registerModule('property', property_module.PropertyModule);
    index.gameCore.registerModule('shop', shop_module.ShopModule);
    index.gameCore.registerModule('courses', courses_module.CoursesModule);
    index.gameCore.registerModule('inventory', inventory_module.InventoryModule);
    index.gameCore.registerModule('magic', spells_module.SpellModule);
    index.gameCore.registerModule('crafting', crafting_module.CraftingModule);
    index.gameCore.registerModule('plantations', plantations_module.PlantationsModule);
    index.gameCore.registerModule('guilds', guilds_module.GuildsModule);
    index.gameCore.registerModule('unlock-notifications', unlock_notifications_module.UnlockNotificationsModule);
    index.gameCore.registerModule('random-events', random_events_module.RandomEventsModule);
    index.gameCore.registerModule('map', map_module.MapModule);
    index.gameCore.registerModule('hotkeys', hotkeys_module.HotkeysModule);
    index.gameCore.registerModule('monitoring', monitoring_module.MonitoringModule);
    index.gameCore.registerModule('rules', rules_module.RulesModule);
    _this.eventHandler.registerHandler('initialize-game', function (data) {
      // console.log('gameCoreBeforeInited', GameCore.instance);
      index.gameCore.initialize();
      // console.log('gameCoreInited', GameCore.instance);
      _this.eventHandler.sendData('initialized', _objectSpread(_objectSpread({}, data), {}, {
        received: true
      }));
      // console.log('sent initialized')
    });
    _this.eventHandler.registerHandler('load-game', function (data) {
      // console.log('load-game received');
      _this.loadGame(data);
    });
    _this.eventHandler.registerHandler('reset-game', function () {
      // console.log('reset-game received');
      _this.loadGame({}, true);
    });
    _this.eventHandler.registerHandler('start-ticking', function () {
      var cheat = 1;
      // const speedUpMode = gameCore.getModule('mage').bankedTime?.speedUpFactor ?? 1;
      // console.log('gameCore', GameCore.instance, speedUpMode);
      index.gameCore.startTicking(100, function () {
        var _gameCore$getModule$b, _gameCore$getModule$b2;
        return 0.1 * cheat * ((_gameCore$getModule$b = (_gameCore$getModule$b2 = index.gameCore.getModule('mage').bankedTime) === null || _gameCore$getModule$b2 === void 0 ? void 0 : _gameCore$getModule$b2.speedUpFactor) !== null && _gameCore$getModule$b !== void 0 ? _gameCore$getModule$b : 1);
      }, function () {
        if (index.gameCore.numTicks % 100 === 0) {
          _this.save();
        }
      }, false);
    });
    _this.eventHandler.registerHandler('query-unlocks', function (payload) {
      var unlocks = {
        'actions': true,
        'actionLists': index.gameEntity.getLevel('shop_item_notebook') > 0,
        'shop': index.gameCore.getModule('shop').isUnlocked,
        'inventory': index.gameEntity.getLevel('shop_item_backpack') > 0,
        'property': index.gameEntity.getLevel('shop_item_tent') > 0,
        'spellbook': index.gameEntity.getLevel('shop_item_spellbook') > 0,
        'crafting': index.gameEntity.getLevel('shop_item_crafting_courses') > 0,
        'alchemy': index.gameEntity.getLevel('shop_item_alchemy_courses') > 0,
        'workshop': index.gameEntity.getLevel('shop_item_crafting_courses') > 0 || index.gameEntity.getLevel('shop_item_alchemy_courses') > 0 || index.gameResources.getResource('plantation_slots').income > 0,
        'plantation': index.gameResources.getResource('plantation_slots').income > 0,
        'guilds': index.gameEffects.getEffectValue('attribute_charisma') >= 500,
        'social': index.gameEffects.getEffectValue('attribute_charisma') >= 500,
        'map': index.gameEntity.getLevel('shop_item_map') > 0,
        'world': index.gameEntity.getLevel('shop_item_map') > 0,
        'automations': index.gameEntity.getLevel('shop_item_planner') > 0,
        'courses': index.gameEntity.getLevel('shop_item_training_room') > 0,
        'amplifiers': index.gameEffects.getEffectValue('attribute_magic_ability') >= 12000
      };
      var label = 'unlocks';
      if (payload !== null && payload !== void 0 && payload.prefix) {
        label = "".concat(label, "-").concat(payload === null || payload === void 0 ? void 0 : payload.prefix);
      }
      _this.eventHandler.sendData(label, unlocks);
    });
    _this.eventHandler.registerHandler('get-save-string', function (_ref) {
      var type = _ref.type;
      function toBase64Unicode(str) {
        return btoa(unescape(encodeURIComponent(str)));
      }
      var saveObj = index.gameCore.save();
      _this.eventHandler.sendData('saved-string', {
        string: toBase64Unicode(JSON.stringify(saveObj)),
        type: type
      });
    });
    MainModule.instance = _this;
    return _this;
  }
  _inherits(MainModule, _GameModule);
  return _createClass(MainModule, [{
    key: "initialize",
    value: function initialize() {}
  }, {
    key: "tick",
    value: function tick() {}
  }, {
    key: "save",
    value: function save() {
      var saveStr = index.gameCore.save();
      this.eventHandler.sendData('save-game', saveStr);
    }
  }, {
    key: "load",
    value: function load() {}
  }, {
    key: "loadGame",
    value: function loadGame(data, isReset) {
      this.eventHandler.sendData('loading', _objectSpread(_objectSpread({}, data), {}, {
        received: true
      }));
      index.gameCore.stopTicking();
      index.gameCore.load(data);
      // console.log('loaded game -/|');
      this.eventHandler.sendData('loaded', _objectSpread(_objectSpread({}, data), {}, {
        received: true,
        isReset: isReset
      }));
    }
  }]);
}(game_module.GameModule);
var mainModule = function mainModule() {
  return MainModule.instance || new MainModule();
};

export { MainModule };
export { mainModule };
