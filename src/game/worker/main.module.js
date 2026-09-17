import * as _shared_game_module__WEBPACK_IMPORTED_MODULE_0__ from './shared/game-module.js';
import * as game_framework__WEBPACK_IMPORTED_MODULE_1__ from '../framework/index.js';
import * as _modules_mage_mage_module__WEBPACK_IMPORTED_MODULE_2__ from './modules/mage/mage.module.js';
import * as _modules_resources_resource_pool_module__WEBPACK_IMPORTED_MODULE_3__ from './modules/resources/resource-pool.module.js';
import * as _modules_actions_actions_module__WEBPACK_IMPORTED_MODULE_4__ from './modules/actions/actions.module.js';
import * as _modules_attributes_attributes_module__WEBPACK_IMPORTED_MODULE_5__ from './modules/attributes/attributes.module.js';
import * as _modules_items_shop_module__WEBPACK_IMPORTED_MODULE_6__ from './modules/items/shop.module.js';
import * as _modules_inventory_inventory_module__WEBPACK_IMPORTED_MODULE_7__ from './modules/inventory/inventory.module.js';
import * as _modules_property_property_module__WEBPACK_IMPORTED_MODULE_8__ from './modules/property/property.module.js';
import * as _modules_magic_spells_module__WEBPACK_IMPORTED_MODULE_9__ from './modules/magic/spells.module.js';
import * as _modules_workshop_crafting_module__WEBPACK_IMPORTED_MODULE_10__ from './modules/workshop/crafting.module.js';
import * as _modules_workshop_plantations_module__WEBPACK_IMPORTED_MODULE_11__ from './modules/workshop/plantations.module.js';
import * as _modules_social_guilds_module__WEBPACK_IMPORTED_MODULE_12__ from './modules/social/guilds.module.js';
import * as _shared_modules_unlock_notifications_module__WEBPACK_IMPORTED_MODULE_13__ from './shared/modules/unlock-notifications.module.js';
import * as _modules_general_random_events_module__WEBPACK_IMPORTED_MODULE_14__ from './modules/general/random-events.module.js';
import * as _modules_general_temporary_effects_module__WEBPACK_IMPORTED_MODULE_15__ from './modules/general/temporary-effects.module.js';
import * as _modules_map_map_module__WEBPACK_IMPORTED_MODULE_16__ from './modules/map/map.module.js';
import * as _shared_modules_hotkeys_module__WEBPACK_IMPORTED_MODULE_17__ from './shared/modules/hotkeys.module.js';
import * as _shared_modules_monitoring_module__WEBPACK_IMPORTED_MODULE_18__ from './shared/modules/monitoring.module.js';
import * as _shared_modules_rules_module__WEBPACK_IMPORTED_MODULE_19__ from './shared/modules/rules.module.js';
import * as _modules_items_courses_module__WEBPACK_IMPORTED_MODULE_20__ from './modules/items/courses.module.js';

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
    game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.registerModule('attributes', _modules_attributes_attributes_module__WEBPACK_IMPORTED_MODULE_5__.AttributesModule);
    game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.registerModule('temporary-effects', _modules_general_temporary_effects_module__WEBPACK_IMPORTED_MODULE_15__.TemporaryEffectsModule);
    game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.registerModule('resource-pool', _modules_resources_resource_pool_module__WEBPACK_IMPORTED_MODULE_3__.ResourcePoolModule);
    game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.registerModule('mage', _modules_mage_mage_module__WEBPACK_IMPORTED_MODULE_2__.MageModule);
    game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.registerModule('actions', _modules_actions_actions_module__WEBPACK_IMPORTED_MODULE_4__.ActionsModule);
    game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.registerModule('property', _modules_property_property_module__WEBPACK_IMPORTED_MODULE_8__.PropertyModule);
    game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.registerModule('shop', _modules_items_shop_module__WEBPACK_IMPORTED_MODULE_6__.ShopModule);
    game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.registerModule('courses', _modules_items_courses_module__WEBPACK_IMPORTED_MODULE_20__.CoursesModule);
    game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.registerModule('inventory', _modules_inventory_inventory_module__WEBPACK_IMPORTED_MODULE_7__.InventoryModule);
    game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.registerModule('magic', _modules_magic_spells_module__WEBPACK_IMPORTED_MODULE_9__.SpellModule);
    game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.registerModule('crafting', _modules_workshop_crafting_module__WEBPACK_IMPORTED_MODULE_10__.CraftingModule);
    game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.registerModule('plantations', _modules_workshop_plantations_module__WEBPACK_IMPORTED_MODULE_11__.PlantationsModule);
    game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.registerModule('guilds', _modules_social_guilds_module__WEBPACK_IMPORTED_MODULE_12__.GuildsModule);
    game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.registerModule('unlock-notifications', _shared_modules_unlock_notifications_module__WEBPACK_IMPORTED_MODULE_13__.UnlockNotificationsModule);
    game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.registerModule('random-events', _modules_general_random_events_module__WEBPACK_IMPORTED_MODULE_14__.RandomEventsModule);
    game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.registerModule('map', _modules_map_map_module__WEBPACK_IMPORTED_MODULE_16__.MapModule);
    game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.registerModule('hotkeys', _shared_modules_hotkeys_module__WEBPACK_IMPORTED_MODULE_17__.HotkeysModule);
    game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.registerModule('monitoring', _shared_modules_monitoring_module__WEBPACK_IMPORTED_MODULE_18__.MonitoringModule);
    game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.registerModule('rules', _shared_modules_rules_module__WEBPACK_IMPORTED_MODULE_19__.RulesModule);
    _this.eventHandler.registerHandler('initialize-game', function (data) {
      // console.log('gameCoreBeforeInited', GameCore.instance);
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.initialize();
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
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.startTicking(100, function () {
        var _gameCore$getModule$b, _gameCore$getModule$b2;
        return 0.1 * cheat * ((_gameCore$getModule$b = (_gameCore$getModule$b2 = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('mage').bankedTime) === null || _gameCore$getModule$b2 === void 0 ? void 0 : _gameCore$getModule$b2.speedUpFactor) !== null && _gameCore$getModule$b !== void 0 ? _gameCore$getModule$b : 1);
      }, function () {
        if (game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.numTicks % 100 === 0) {
          _this.save();
        }
      }, false);
    });
    _this.eventHandler.registerHandler('query-unlocks', function (payload) {
      var unlocks = {
        'actions': true,
        'actionLists': game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getLevel('shop_item_notebook') > 0,
        'shop': game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('shop').isUnlocked,
        'inventory': game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getLevel('shop_item_backpack') > 0,
        'property': game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getLevel('shop_item_tent') > 0,
        'spellbook': game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getLevel('shop_item_spellbook') > 0,
        'crafting': game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getLevel('shop_item_crafting_courses') > 0,
        'alchemy': game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getLevel('shop_item_alchemy_courses') > 0,
        'workshop': game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getLevel('shop_item_crafting_courses') > 0 || game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getLevel('shop_item_alchemy_courses') > 0 || game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.getResource('plantation_slots').income > 0,
        'plantation': game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.getResource('plantation_slots').income > 0,
        'guilds': game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEffects.getEffectValue('attribute_charisma') >= 500,
        'social': game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEffects.getEffectValue('attribute_charisma') >= 500,
        'map': game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getLevel('shop_item_map') > 0,
        'world': game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getLevel('shop_item_map') > 0,
        'automations': game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getLevel('shop_item_planner') > 0,
        'courses': game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getLevel('shop_item_training_room') > 0,
        'amplifiers': game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEffects.getEffectValue('attribute_magic_ability') >= 12000
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
      var saveObj = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.save();
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
      var saveStr = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.save();
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
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.stopTicking();
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.load(data);
      // console.log('loaded game -/|');
      this.eventHandler.sendData('loaded', _objectSpread(_objectSpread({}, data), {}, {
        received: true,
        isReset: isReset
      }));
    }
  }]);
}(_shared_game_module__WEBPACK_IMPORTED_MODULE_0__.GameModule);
var mainModule = function mainModule() {
  return MainModule.instance || new MainModule();
};

export { MainModule };
export { mainModule };
