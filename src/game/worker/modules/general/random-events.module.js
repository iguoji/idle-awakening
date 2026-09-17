import * as _shared_game_module__WEBPACK_IMPORTED_MODULE_0__ from '../../shared/game-module.js';
import * as _random_events_db__WEBPACK_IMPORTED_MODULE_1__ from './random-events-db.js';
import * as game_framework__WEBPACK_IMPORTED_MODULE_2__ from '../../../framework/index.js';
import * as _random_events_db_learn_rates__WEBPACK_IMPORTED_MODULE_3__ from './random-events-db-learn-rates.js';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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




var RandomEventsModule = /*#__PURE__*/function (_GameModule) {
  function RandomEventsModule() {
    var _this;
    _classCallCheck(this, RandomEventsModule);
    _this = _callSuper(this, RandomEventsModule);
    _this.activeEvents = {}; // Об'єкт активних подій, ключі - id подій
    _this.isEventOpened = false; // Чи відкрита подія
    _this.eventsDB = {}; // База всіх доступних подій
    _this.openedEventId = null; // ID поточно відкритої події
    _this.revealedEffects = {};
    _this.currentVersion = null;
    _this.relevantVersion = 1;
    _this.eventHandler.registerHandler('set-event-data-opened', function (_ref) {
      var isOpened = _ref.isOpened,
        eventId = _ref.eventId;
      // console.log('SettOpened: ', isOpened, eventId);
      _this.openedEventId = isOpened ? eventId : null; // Зберігаємо ID відкритої події
      if (eventId && _this.activeEvents[eventId]) {
        _this.activeEvents[eventId].isOpened = isOpened;
      }
      _this.sendData();
    });
    _this.eventHandler.registerHandler('select-event-option', function (_ref2) {
      var eventId = _ref2.eventId,
        optionId = _ref2.optionId;
      _this.selectOption(eventId, optionId);
      _this.sendData();
    });
    _this.eventHandler.registerHandler('query-event-data', function (_ref3) {
      var prefix = _ref3.prefix;
      _this.sendData(prefix);
    });
    return _this;
  }
  _inherits(RandomEventsModule, _GameModule);
  return _createClass(RandomEventsModule, [{
    key: "initialize",
    value: function initialize() {
      this.eventsDB = [].concat(_toConsumableArray((0,_random_events_db__WEBPACK_IMPORTED_MODULE_1__.registerRandomEventsDb)()), _toConsumableArray((0,_random_events_db_learn_rates__WEBPACK_IMPORTED_MODULE_3__.registerRandomEventsLearnDb)())).reduce(function (acc, item) {
        acc[item.id] = item;
        return acc;
      }, {});
    }
  }, {
    key: "tick",
    value: function tick(game, delta) {
      // Очищаємо прострочені події
      for (var _i = 0, _Object$entries = Object.entries(this.activeEvents); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          id = _Object$entries$_i[0],
          event = _Object$entries$_i[1];
        if (!this.activeEvents[id].expiresIn || this.activeEvents[id].expiresIn > 3600) {
          this.activeEvents[id].expiresIn = 0;
        }
        this.activeEvents[id].expiresIn -= delta;
        if (this.activeEvents[id].expiresIn <= 0) {
          delete this.activeEvents[id];
        }
      }

      // Генеруємо нові події, якщо кількість активних подій менша за 5
      if (Object.keys(this.activeEvents).length < 5 && Math.random() < delta * 0.003 && game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getLevel('action_visit_city') > 1) {
        this.triggerRandomEvent();
      }
    }
  }, {
    key: "triggerRandomEvent",
    value: function triggerRandomEvent() {
      var _this2 = this;
      var availableEvents = Object.values(this.eventsDB).filter(function (event) {
        return event.unlockCondition() && !_this2.activeEvents[event.id];
      } // Перевіряємо, чи немає вже події з таким id
      );
      if (availableEvents.length === 0) return;
      var totalProbability = availableEvents.reduce(function (sum, event) {
        return sum + event.probability;
      }, 0);
      var randomValue = Math.random() * totalProbability;
      var _iterator = _createForOfIteratorHelper(availableEvents),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var event = _step.value;
          if (randomValue < event.probability) {
            this.activeEvents[event.id] = {
              expiresIn: 20 * 60,
              // Дійсна 20 хвилин
              isOpened: false,
              // Чи відкрита подія
              selectedOptionId: null,
              // Вибрана опція
              triggeredEffect: null // Ефект, що спрацював
            };
            if (!this.openedEventId) {
              this.openedEventId = event.id;
              this.activeEvents[event.id].isOpened = true;
            }
            this.sendData();
            return;
          }
          randomValue -= event.probability;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "selectOption",
    value: function selectOption(eventId, optionId) {
      var event = this.activeEvents[eventId];
      if (!event) return;
      var eventData = this.eventsDB[eventId];
      if (!eventData) return;
      var option = eventData.options[optionId];
      if (!option || !option.unlockCondition()) return;

      // Виконуємо вибір опції
      var availableEffects = option.effects.filter(function (effect) {
        return effect.unlockCondition();
      });
      if (availableEffects.length === 0) {
        event.selectedOptionId = optionId;
        return;
      }
      var totalProbability = availableEffects.reduce(function (sum, effect) {
        return sum + effect.probability;
      }, 0);
      var randomValue = Math.random() * totalProbability;
      var triggeredEffect = null;
      var _iterator2 = _createForOfIteratorHelper(availableEffects),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var effect = _step2.value;
          if (randomValue < effect.probability) {
            triggeredEffect = effect;
            effect.onTrigger();
            this.revealEffect(eventId, optionId, effect.id);
            break;
          }
          randomValue -= effect.probability;
        }

        // Зберігаємо вибрану опцію та ефект
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      event.selectedOptionId = optionId;
      event.triggeredEffect = triggeredEffect;
      this.activeEvents[eventId].expiresIn = Math.min(this.activeEvents[eventId].expiresIn, 60);
    }
  }, {
    key: "checkRevealedEvent",
    value: function checkRevealedEvent(eventId) {
      var wholeRevealed = true;
      for (var oId in this.eventsDB[eventId].options) {
        var _this$revealedEffects, _this$eventsDB$eventI;
        if (!((_this$revealedEffects = this.revealedEffects[eventId][oId]) !== null && _this$revealedEffects !== void 0 && _this$revealedEffects.d) && (_this$eventsDB$eventI = this.eventsDB[eventId].options[oId]) !== null && _this$eventsDB$eventI !== void 0 && (_this$eventsDB$eventI = _this$eventsDB$eventI.effects) !== null && _this$eventsDB$eventI !== void 0 && _this$eventsDB$eventI.length) {
          wholeRevealed = false;
        }
      }
      if (wholeRevealed) {
        this.revealedEffects[eventId] = {
          // minimizing data, since event revealed
          d: true
        };
      }
      // console.log('REVELATION_EVENT: ', eventId,wholeRevealed);

      return wholeRevealed;
    }
  }, {
    key: "revealEffect",
    value: function revealEffect(eventId, optionId, effectId) {
      // console.log('REVELATION_CHECK: ', eventId, this.revealedEffects[eventId]);

      if (!this.revealedEffects[eventId]) {
        this.revealedEffects[eventId] = {};
      }

      // Everything is already revealed
      if (this.revealedEffects[eventId].d) return;
      if (!this.revealedEffects[eventId][optionId]) {
        var _this$eventsDB$eventI2;
        if (!((_this$eventsDB$eventI2 = this.eventsDB[eventId].options[optionId].effects) !== null && _this$eventsDB$eventI2 !== void 0 && _this$eventsDB$eventI2.length)) {
          this.revealedEffects[eventId][optionId] = {
            d: true
          };
          this.checkRevealedEvent(eventId);
          return;
        }
        this.revealedEffects[eventId][optionId] = {
          u: this.eventsDB[eventId].options[optionId].effects.reduce(function (acc, eff) {
            return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, eff.id, true));
          }, {}) // Implement storing unrevealed yet effects
        };
      }
      // Everything is revealed for option
      if (this.revealedEffects[eventId][optionId].d || !this.revealedEffects[eventId][optionId].u[effectId]) {
        this.checkRevealedEvent(eventId);
        return;
      }
      delete this.revealedEffects[eventId][optionId].u[effectId]; // deleting from unrevealed
      // console.log('REVELATION: ', eventId, optionId, effectId, this.revealedEffects[eventId][optionId]);

      if (Object.values(this.revealedEffects[eventId][optionId].u).length <= 0) {
        this.revealedEffects[eventId][optionId].d = true;
        delete this.revealedEffects[eventId][optionId]["u"];
        this.checkRevealedEvent(eventId);
      }
    }
  }, {
    key: "getRevealedEffects",
    value: function getRevealedEffects(eventId, optionId) {
      var _this$revealedEffects2,
        _this$revealedEffects3,
        _this3 = this;
      if (!this.eventsDB[eventId].options[optionId]) {
        return [];
      }
      var totalProbability = this.eventsDB[eventId].options[optionId].effects.reduce(function (sum, effect) {
        return sum + effect.probability;
      }, 0);
      if (totalProbability <= 0) {
        // no effects attached
        return [{
          id: 'nothing',
          description: 'Nothing happens',
          probability: 1
        }];
      }
      if (!((_this$revealedEffects2 = this.revealedEffects[eventId]) !== null && _this$revealedEffects2 !== void 0 && _this$revealedEffects2.d) && !((_this$revealedEffects3 = this.revealedEffects[eventId]) !== null && _this$revealedEffects3 !== void 0 && _this$revealedEffects3[optionId])) return [];
      return this.eventsDB[eventId].options[optionId].effects.filter(function (optionEffect) {
        var _this3$revealedEffect, _this3$revealedEffect2, _this3$revealedEffect3, _this3$revealedEffect4;
        if ((_this3$revealedEffect = _this3.revealedEffects[eventId]) !== null && _this3$revealedEffect !== void 0 && _this3$revealedEffect.d) return true;
        if ((_this3$revealedEffect2 = _this3.revealedEffects[eventId]) !== null && _this3$revealedEffect2 !== void 0 && (_this3$revealedEffect2 = _this3$revealedEffect2[optionId]) !== null && _this3$revealedEffect2 !== void 0 && _this3$revealedEffect2.d) return true;
        return ((_this3$revealedEffect3 = _this3.revealedEffects[eventId]) === null || _this3$revealedEffect3 === void 0 || (_this3$revealedEffect3 = _this3$revealedEffect3[optionId]) === null || _this3$revealedEffect3 === void 0 ? void 0 : _this3$revealedEffect3.u) && !(optionEffect.id in ((_this3$revealedEffect4 = _this3.revealedEffects[eventId]) === null || _this3$revealedEffect4 === void 0 || (_this3$revealedEffect4 = _this3$revealedEffect4[optionId]) === null || _this3$revealedEffect4 === void 0 ? void 0 : _this3$revealedEffect4.u));
      }).map(function (optionEffect) {
        return {
          id: optionEffect.id,
          description: optionEffect.description,
          probability: optionEffect.probability / totalProbability
        };
      });
    }
  }, {
    key: "getOptionAffordable",
    value: function getOptionAffordable(option) {
      var result = {
        isAffordable: true,
        consume: {}
      };
      if (option.usageGain) {
        var effects = game_framework__WEBPACK_IMPORTED_MODULE_2__.resourceApi.unpackEffects(option.usageGain, 1);
        if (effects.length) {
          var resourcesToRemove = effects.filter(function (eff) {
            return eff.scope === 'consumption' && eff.type === 'resources';
          });
          resourcesToRemove.forEach(function (resource) {
            result.consume[resource.id] = resource.value;
            if (result.consume[resource.id] > game_framework__WEBPACK_IMPORTED_MODULE_2__.gameResources.getResource(resource.id).amount) {
              result.isAffordable = false;
            }
          });
        }
      }
      return result;
    }
  }, {
    key: "getData",
    value: function getData() {
      var _this4 = this;
      // Сортуємо активні події за експірейшином
      var activeEventList = Object.entries(this.activeEvents).map(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
          id = _ref5[0],
          event = _ref5[1];
        return {
          id: id,
          expiresIn: event.expiresIn,
          isOpened: event.isOpened,
          selectedOptionId: event.selectedOptionId
        };
      }).sort(function (a, b) {
        return a.expiresIn - b.expiresIn;
      });

      // Формуємо дані про відкриту подію
      var openedEventData = this.openedEventId && this.activeEvents[this.openedEventId] ? function () {
        var eventData = _this4.eventsDB[_this4.openedEventId];
        if (!eventData) return null;
        return {
          id: _this4.openedEventId,
          name: eventData.name,
          description: eventData.description,
          options: Object.values(eventData.options).map(function (option) {
            return {
              id: option.id,
              name: option.name,
              description: option.description,
              affordable: game_framework__WEBPACK_IMPORTED_MODULE_2__.resourceCalculators.isAffordable(_this4.getOptionAffordable(option).consume),
              revealedEffects: _this4.getRevealedEffects(_this4.openedEventId, option.id)
            };
          }),
          selectedOption: _this4.activeEvents[_this4.openedEventId].selectedOptionId ? {
            id: _this4.activeEvents[_this4.openedEventId].selectedOptionId,
            name: eventData.options[_this4.activeEvents[_this4.openedEventId].selectedOptionId].name,
            description: eventData.options[_this4.activeEvents[_this4.openedEventId].selectedOptionId].description,
            triggeredEffect: _this4.activeEvents[_this4.openedEventId].triggeredEffect ? {
              id: _this4.activeEvents[_this4.openedEventId].triggeredEffect.id,
              name: _this4.activeEvents[_this4.openedEventId].triggeredEffect.name,
              description: _this4.activeEvents[_this4.openedEventId].triggeredEffect.description
            } : null
          } : null
        };
      }() : null;
      return {
        list: activeEventList.map(function (event) {
          var _this4$eventsDB$event;
          return {
            id: event.id,
            name: (_this4$eventsDB$event = _this4.eventsDB[event.id]) === null || _this4$eventsDB$event === void 0 ? void 0 : _this4$eventsDB$event.name,
            selectedOption: event.selectedOptionId,
            expiresIn: event.expiresIn // Час до завершення
          };
        }),
        openedEventData: openedEventData
      };
    }
  }, {
    key: "sendData",
    value: function sendData(prefix) {
      var data = this.getData();
      var label = 'random-events-data';
      if (prefix) {
        label = "".concat(label, "-").concat(prefix);
      }
      this.eventHandler.sendData(label, data);
    }
  }, {
    key: "save",
    value: function save() {
      return {
        activeEvents: this.activeEvents,
        revealedEffects: this.revealedEffects,
        currentVersion: this.currentVersion
      };
    }
  }, {
    key: "load",
    value: function load(obj) {
      this.activeEvents = {};
      if (obj !== null && obj !== void 0 && obj.currentVersion && (obj === null || obj === void 0 ? void 0 : obj.currentVersion) >= this.relevantVersion) {
        // only load in case of compatibility
        if (obj !== null && obj !== void 0 && obj.activeEvents) {
          this.activeEvents = obj.activeEvents;
        }
        this.revealedEffects = (obj === null || obj === void 0 ? void 0 : obj.revealedEffects) || {};
      }
      this.currentVersion = this.relevantVersion;
      this.sendData();
    }
  }]);
}(_shared_game_module__WEBPACK_IMPORTED_MODULE_0__.GameModule);
