import * as _game_module__WEBPACK_IMPORTED_MODULE_0__ from '../../../../worker/shared/game-module.js';
import * as game_framework__WEBPACK_IMPORTED_MODULE_1__ from '../../../../framework/index.js';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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


var MonitoringModule = /*#__PURE__*/function (_GameModule) {
  function MonitoringModule() {
    var _this;
    _classCallCheck(this, MonitoringModule);
    _this = _callSuper(this, MonitoringModule);
    _this.eventHandler.registerHandler('set-monitored', function (_ref) {
      var scope = _ref.scope,
        type = _ref.type,
        id = _ref.id;
      // console.log('set-monitored: ', scope, type, id);
      if (scope === 'actions') {
        game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('actions').setMonitored({
          type: type,
          id: id
        });
      }
      if (scope === 'spells') {
        game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('magic').setMonitored({
          type: type,
          id: id
        });
      }
      if (scope === 'effects') {
        // check if type is action. If it is - get action effects and resources
        // and set them monitored
        if (type === 'action') {
          // if id null - clear monitors, else - replace em
          if (id) {
            var _gameCore$getModule$a;
            var data = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getEffects(id, 1, ((_gameCore$getModule$a = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('actions').actions[id]) === null || _gameCore$getModule$a === void 0 ? void 0 : _gameCore$getModule$a.level) || 1, true);
            var effects = data.filter(function (one) {
              return one.type === 'effects';
            });
            var resources = data.filter(function (one) {
              return one.type === 'resources';
            });
            game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('attributes').setMonitored(effects);
            game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('resource-pool').setMonitored(resources);
          } else {
            game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('attributes').setMonitored([]);
            game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('resource-pool').setMonitored([]);
          }
        }
        if (type === 'spell') {
          // if id null - clear monitors, else - replace em
          if (id) {
            var spell = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getEntity(id);
            var effDurable = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getEffects(id, 0, spell.level, true);
            var _effects = [];
            if (spell.usageGain) {
              _effects = game_framework__WEBPACK_IMPORTED_MODULE_1__.resourceApi.unpackEffects(spell.usageGain, spell.level);
            }
            console.log('Effs: ', effDurable, _effects);
            var _data = [].concat(_toConsumableArray(effDurable), _toConsumableArray(_effects));
            var attrs = _data.filter(function (one) {
              return one.type === 'effects';
            });
            var _resources = _data.filter(function (one) {
              return one.type === 'resources';
            });
            game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('attributes').setMonitored(attrs);
            game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('resource-pool').setMonitored(_resources);
          } else {
            game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('attributes').setMonitored([]);
            game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('resource-pool').setMonitored([]);
          }
        }
        if (['furniture', 'accessory', 'amplifier'].includes(type)) {
          // if id null - clear monitors, else - replace em
          if (id) {
            var _data2 = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getEffects(id, 1, 1, true);
            var _effects2 = _data2.filter(function (one) {
              return one.type === 'effects';
            });
            var _resources2 = _data2.filter(function (one) {
              return one.type === 'resources';
            });
            game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('attributes').setMonitored(_effects2);
            game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('resource-pool').setMonitored(_resources2);
          } else {
            game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('attributes').setMonitored([]);
            game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('resource-pool').setMonitored([]);
          }
        }
      }
    });
    return _this;
  }
  _inherits(MonitoringModule, _GameModule);
  return _createClass(MonitoringModule, [{
    key: "initialize",
    value: function initialize() {}
  }, {
    key: "tick",
    value: function tick() {}
  }, {
    key: "save",
    value: function save() {}
  }, {
    key: "load",
    value: function load() {}
  }]);
}(_game_module__WEBPACK_IMPORTED_MODULE_0__.GameModule);

export { MonitoringModule };
