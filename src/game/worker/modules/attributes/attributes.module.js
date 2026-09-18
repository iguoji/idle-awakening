import * as game_module from '../../shared/game-module.js';
import * as index from '../../../framework/index.js';
import * as attributes_db from './attributes-db.js';
import * as unlocks from '../../../framework/src/utils/unlocks.js';
import * as math from '../../shared/utils/math.js';
import * as scopes from '../../shared/utils/scopes.js';

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






var AttributesModule = /*#__PURE__*/function (_GameModule) {
  function AttributesModule() {
    var _this;
    _classCallCheck(this, AttributesModule);
    _this = _callSuper(this, AttributesModule);
    _this.monitoredData = {};
    _this.eventHandler.registerHandler('query-attributes-data', function (payload) {
      _this.sendAttributesData();
    });
    _this.eventHandler.registerHandler('query-attributes-unlocks', function (_ref) {
      var showUnlocked = _ref.showUnlocked;
      _this.sendAttributesUnlocks(showUnlocked);
    });
    _this.eventHandler.registerHandler('query-all-attributes', function (payload) {
      _this.sendAllAttributes(payload);
    });
    return _this;
  }
  _inherits(AttributesModule, _GameModule);
  return _createClass(AttributesModule, [{
    key: "initialize",
    value: function initialize() {
      (0,attributes_db.registerAttributes)();
    }
  }, {
    key: "tick",
    value: function tick(game, delta) {}
  }, {
    key: "save",
    value: function save() {}
  }, {
    key: "load",
    value: function load(saveObject) {}
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
    key: "getAttributesUnlocks",
    value: function getAttributesUnlocks(showUnlocked) {
      var items = index.gameEffects.listEffectsByTags(['attribute'], false, [], {
        listPrevious: showUnlocked
      }).filter(function (one) {
        var _one$nextUnlocks, _one$prevUnlocks;
        return one.isUnlocked && (((_one$nextUnlocks = one.nextUnlocks) === null || _one$nextUnlocks === void 0 ? void 0 : _one$nextUnlocks.length) || showUnlocked && ((_one$prevUnlocks = one.prevUnlocks) === null || _one$prevUnlocks === void 0 ? void 0 : _one$prevUnlocks.length));
      }).map(function (one) {
        var _one$nextUnlocks2, _one$prevUnlocks2;
        // Here we should somehow get current increment of attribute
        // first of all we should get current income from list
        // Try to get additional info
        if ((_one$nextUnlocks2 = one.nextUnlocks) !== null && _one$nextUnlocks2 !== void 0 && _one$nextUnlocks2.length) {
          console.log('Actions: ', one);
          one.unlocks = {
            level: one.nextUnlocks[0].level,
            progress: 100 * one.value / one.nextUnlocks[0].level,
            items: one.nextUnlocks.map(function (unlock) {
              var ent = index.gameEntity.getEntity(unlock.unlockId);
              return _objectSpread(_objectSpread({}, unlock), {}, {
                meta: {
                  name: ent.name,
                  description: ent.description,
                  scope: (0,scopes.getScope)(ent)
                }
              });
            })
          };
        }
        return _objectSpread(_objectSpread({}, one), {}, {
          prevUnlocks: ((_one$prevUnlocks2 = one.prevUnlocks) !== null && _one$prevUnlocks2 !== void 0 ? _one$prevUnlocks2 : []).map(function (unlock) {
            var data = {};
            if (index.gameEntity.entityExists(unlock.unlockId)) {
              data = index.gameEntity.getEntity(unlock.unlockId);
            }
            return _objectSpread(_objectSpread({}, unlock), {}, {
              data: data
            });
          }).sort(function (a, b) {
            return b.level - a.level;
          })
        });
      });
      return items;
    }
  }, {
    key: "getAttributesData",
    value: function getAttributesData() {
      var _this3 = this;
      var effects = index.gameEffects.listEffectsByTags(['attribute']);
      var list = effects.filter(function (one) {
        return one.isUnlocked;
      }).map(function (effect) {
        var _effect$nextUnlocks, _this3$monitoredData$;
        return _objectSpread(_objectSpread({}, effect), {}, {
          nextProgress: (_effect$nextUnlocks = effect.nextUnlocks) !== null && _effect$nextUnlocks !== void 0 && _effect$nextUnlocks.length ? effect.value / effect.nextUnlocks[0].level : 0,
          monitor: (_this3$monitoredData$ = _this3.monitoredData[effect.id]) !== null && _this3$monitoredData$ !== void 0 ? _this3$monitoredData$ : null
        });
      });
      // console.log('Attrs: ', list);
      return {
        list: list
      };
    }
  }, {
    key: "getAllAttributesData",
    value: function getAllAttributesData() {
      var _this4 = this;
      var effects = index.gameEffects.listEffectsByTags(['attribute']);
      var list = effects.map(function (effect) {
        var _this4$monitoredData$;
        return _objectSpread(_objectSpread({}, effect), {}, {
          monitor: (_this4$monitoredData$ = _this4.monitoredData[effect.id]) !== null && _this4$monitoredData$ !== void 0 ? _this4$monitoredData$ : null,
          isUnlocked: effect.isUnlocked
        });
      });
      return list;
    }
  }, {
    key: "sendAttributesUnlocks",
    value: function sendAttributesUnlocks(showPrevious) {
      var data = this.getAttributesUnlocks(showPrevious);
      this.eventHandler.sendData('attributes-unlocks', data);
    }
  }, {
    key: "sendAttributesData",
    value: function sendAttributesData() {
      var data = this.getAttributesData();
      this.eventHandler.sendData('attributes-data', data);
    }
  }, {
    key: "sendAllAttributes",
    value: function sendAllAttributes(payload) {
      var data = this.getAllAttributesData();
      var label = 'all-attributes';
      if (payload !== null && payload !== void 0 && payload.prefix) {
        label = "".concat(label, "-").concat(payload === null || payload === void 0 ? void 0 : payload.prefix);
      }
      this.eventHandler.sendData(label, data);
    }
  }]);
}(game_module.GameModule);

export { AttributesModule };
