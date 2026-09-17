import * as game_module from '../../shared/game-module.js';
import * as index from '../../../framework/index.js';
import * as temporary_effects_db from './temporary-effects-db.js';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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



var TemporaryEffectsModule = /*#__PURE__*/function (_GameModule) {
  function TemporaryEffectsModule() {
    var _this;
    _classCallCheck(this, TemporaryEffectsModule);
    _this = _callSuper(this, TemporaryEffectsModule);
    _this.runningEffects = {};
    _this.currentVersion = null;
    _this.relevantVersion = 1;
    return _this;
  }
  _inherits(TemporaryEffectsModule, _GameModule);
  return _createClass(TemporaryEffectsModule, [{
    key: "initialize",
    value: function initialize() {
      (0,temporary_effects_db.registerTemporaryEffectsDB)();
    }
  }, {
    key: "save",
    value: function save() {
      return {
        effects: this.runningEffects,
        currentVersion: this.currentVersion
      };
    }
  }, {
    key: "load",
    value: function load(saveObject) {
      for (var key in this.runningEffects) {
        if (index.gameEntity.entityExists("active_".concat(key))) {
          index.gameEntity.setEntityLevel("active_".concat(key), 0, true);
          index.gameEntity.unsetEntity("active_".concat(key));
        }
      }
      this.runningEffects = {};
      if (saveObject !== null && saveObject !== void 0 && saveObject.effects && saveObject !== null && saveObject !== void 0 && saveObject.currentVersion && (saveObject === null || saveObject === void 0 ? void 0 : saveObject.currentVersion) >= this.relevantVersion) {
        for (var id in saveObject.effects) {
          this.runningEffects[id] = saveObject.effects[id];
          if (!this.runningEffects[id].level) {
            this.runningEffects[id].level = 1;
          }
          if (this.runningEffects[id].duration && this.runningEffects[id].duration > 0) {
            this.runningEffects[id].isRunning = true;
            index.gameEntity.registerGameEntity("active_".concat(id), {
              copyFromId: id,
              isAbstract: false,
              tags: ['active_temporary', 'active_effect'],
              scope: 'events',
              level: this.runningEffects[id].level
            });
            index.gameEntity.setEntityLevel("active_".concat(id), this.runningEffects[id].level, true);
            this.runningEffects[id].duration = saveObject.effects[id].duration;
            // console.log('LoadedEntity: ', `[debug-error] active_${id}`, gameEntity.getEntity(`active_${id}`), gameEntity.getEntity(id));
          }
        }
      }
      this.currentVersion = this.relevantVersion;
    }
  }, {
    key: "tick",
    value: function tick(game, delta) {
      for (var itemId in this.runningEffects) {
        this.runningEffects[itemId].isCasted = false;
        if (this.runningEffects[itemId].duration > 0) {
          this.runningEffects[itemId].duration -= delta;
          if (index.gameEntity.entityExists("active_".concat(itemId))) {
            index.gameEntity.setAttribute("active_".concat(itemId), 'current_duration', this.runningEffects[itemId].duration);
          }
        }
        if (this.runningEffects[itemId].duration <= 0 && this.runningEffects[itemId].isRunning) {
          this.runningEffects[itemId].duration = 0;
          this.runningEffects[itemId].isRunning = false;
          if (index.gameEntity.entityExists("active_".concat(itemId))) {
            index.gameEntity.unsetEntity("active_".concat(itemId));
          }
        }
      }
    }
  }, {
    key: "triggerEffect",
    value: function triggerEffect(id) {
      var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      try {
        var effect = index.gameEntity.getEntity(id);
      } catch (e) {
        console.error(e);
        console.warn('Entities: ', index.gameEntity.listEntitiesByTags(['temporary']));
      }
      if (!this.runningEffects[id]) {
        this.runningEffects[id] = {
          duration: 0,
          level: level
        };
      } else {
        level = Math.max(level, this.runningEffects[id].level);
      }
      this.runningEffects[id].isRunning = true;
      // this.runningEffects[id].duration = 0;

      if (index.gameEntity.getAttribute(id, 'duration') && !index.gameEntity.entityExists("active_".concat(id))) {
        index.gameEntity.registerGameEntity("active_".concat(id), {
          copyFromId: id,
          isAbstract: false,
          level: level,
          tags: ['active_temporary', 'active_effect'],
          scope: 'events'
        });
        index.gameEntity.setEntityLevel("active_".concat(id), level !== null && level !== void 0 ? level : 1, true);
      }
      this.runningEffects[id].duration = index.gameEntity.getAttribute(id, 'duration');
      this.runningEffects[id].isRunning = true;
    }
  }]);
}(game_module.GameModule);

export { TemporaryEffectsModule };
