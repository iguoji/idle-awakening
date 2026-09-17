import * as _actions_db__WEBPACK_IMPORTED_MODULE_0__ from '../../../../worker/modules/actions/actions-db.js';
import * as _shared_game_module__WEBPACK_IMPORTED_MODULE_1__ from '../../../../worker/shared/game-module.js';
import * as game_framework__WEBPACK_IMPORTED_MODULE_2__ from '../../../../framework/index.js';
import * as _action_lists_submodule__WEBPACK_IMPORTED_MODULE_3__ from '../../../../worker/modules/actions/action-lists.submodule.js';
import * as _shared_utils_math__WEBPACK_IMPORTED_MODULE_4__ from '../../../../worker/shared/utils/math.js';
import * as game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_5__ from '../../../../framework/src/utils/consts.js';
import * as _aspect_db__WEBPACK_IMPORTED_MODULE_6__ from '../../../../worker/modules/actions/aspect-db.js';
import * as lodash__WEBPACK_IMPORTED_MODULE_7__ from 'lodash';
import * as _shared_utils_scopes__WEBPACK_IMPORTED_MODULE_8__ from '../../../../worker/shared/utils/scopes.js';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
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









var DEFAULT_FILTERS = {
  'all': {
    id: 'all',
    condition: '',
    rules: [],
    name: 'All',
    isRequired: true,
    isPinned: true,
    sortIndex: 0
  },
  'jobs': {
    id: 'jobs',
    condition: '',
    rules: [{
      type: 'tag',
      object: 'job'
    }],
    name: 'Jobs',
    isPinned: true,
    sortIndex: 1
  },
  'training': {
    id: 'training',
    condition: '',
    rules: [{
      type: 'tag',
      object: 'training'
    }],
    name: 'Training',
    isPinned: true,
    sortIndex: 2
  },
  'activity': {
    id: 'activity',
    condition: '',
    rules: [{
      type: 'tag',
      object: 'activity'
    }],
    name: 'Activity',
    isPinned: true,
    sortIndex: 3
  }
};
var ActionsModule = /*#__PURE__*/function (_GameModule) {
  function ActionsModule() {
    var _this;
    _classCallCheck(this, ActionsModule);
    _this = _callSuper(this, ActionsModule);
    _this.activeActions = [];
    _this.actions = {};
    _this.selectedFilterId = 'all';
    _this.lists = new _action_lists_submodule__WEBPACK_IMPORTED_MODULE_3__.ActionListsSubmodule();
    _this.focus = null;
    _this.showHidden = false;
    _this.aspectUpdateCd = 0;
    _this.searchData = {
      search: '',
      selectedScopes: ['name', 'tags']
    };
    _this.aspectsSettings = {};
    _this.customFilters = (0,lodash__WEBPACK_IMPORTED_MODULE_7__.cloneDeep)(DEFAULT_FILTERS);
    _this.customFiltersOrder = Object.keys(_this.customFilters);
    _this.eventHandler.registerHandler('query-actions-running', function (payload) {
      var rn = _this.getRunningActionsInfo();
      _this.eventHandler.sendData('actions-running', rn);
    });
    _this.eventHandler.registerHandler('actions-change-custom-filters-order', function (payload) {
      //payload.sortIndex, payload.destinationIndex. Reorder this.customFiltersOrder
      var sourceIndex = payload.sourceIndex,
        destinationIndex = payload.destinationIndex;

      // Захист від некоректних індексів:
      if (sourceIndex === undefined || destinationIndex === undefined) return;
      if (sourceIndex < 0 || destinationIndex < 0) return;
      if (sourceIndex >= _this.customFiltersOrder.length || destinationIndex >= _this.customFiltersOrder.length) return;

      // Копіюємо масив (якщо хочемо не мутувати оригінал),
      // але можна й "у місці" (mutable), залежно від вашої логіки
      var newOrder = _toConsumableArray(_this.customFiltersOrder);

      // Вирізаємо елемент зі старої позиції
      var _newOrder$splice = newOrder.splice(sourceIndex, 1),
        _newOrder$splice2 = _slicedToArray(_newOrder$splice, 1),
        removed = _newOrder$splice2[0];
      // Ставимо на нову позицію
      newOrder.splice(destinationIndex, 0, removed);

      // Зберігаємо оновлений масив
      _this.customFiltersOrder = newOrder;

      // console.log('Re-sorted', payload, newOrder);

      _this.sendActionsData(_this.selectedFilterId, {
        searchData: _this.searchData
      });
    });
    _this.eventHandler.registerHandler('save-actions-custom-filter', function (payload) {
      _this.saveCustomFilter(payload);
    });
    _this.eventHandler.registerHandler('delete-actions-custom-filter', function (payload) {
      _this.deleteCustomFilter(payload);
    });
    _this.eventHandler.registerHandler('toggle-actions-custom-filter-pinned', function (payload) {
      _this.setCustomFilterPinned(payload);
    });
    _this.eventHandler.registerHandler('apply-actions-custom-filter', function (payload) {
      _this.applyCustomFilter(payload);
    });
    _this.eventHandler.registerHandler('run-action', function (payload) {
      if (payload.isForce) {
        _this.lists.stopList();
      }
      _this.setRunningAction(payload.id);
    });
    _this.eventHandler.registerHandler('query-actions-data', function (payload) {
      _this.sendActionsData(_this.selectedFilterId, {
        searchData: _this.searchData
      });
    });
    _this.eventHandler.registerHandler('query-all-actions', function (payload) {
      _this.sendAllActions(payload);
    });
    _this.eventHandler.registerHandler('query-all-action-tags', function (payload) {
      _this.sendAllActionTags(payload);
    });
    _this.eventHandler.registerHandler('query-actions-unlocks', function (_ref) {
      var showUnlocked = _ref.showUnlocked;
      _this.sendActionsUnlocks(showUnlocked);
    });
    _this.eventHandler.registerHandler('query-action-details', function (payload) {
      _this.sendActionDetails(payload.id);
    });
    _this.eventHandler.registerHandler('toggle-hidden-action', function (payload) {
      _this.setActionHidden(payload.id, payload.flag);
      _this.sendActionsData(_this.selectedFilterId, {
        searchData: _this.searchData
      });
    });
    _this.eventHandler.registerHandler('set-action-aspect-level', function (payload) {
      var keyAttr = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getAttribute(payload.id, 'keyAttribute');
      _this.setAspectLevel(keyAttr, payload.level);
      _this.sendActionsData(_this.selectedFilterId, {
        searchData: _this.searchData
      });
    });
    _this.eventHandler.registerHandler('toggle-action-aspect-maxed', function (payload) {
      if (!_this.aspectsSettings[payload.id]) {
        _this.aspectsSettings[payload.id] = {};
      }
      _this.aspectsSettings[payload.id].maxed = payload.flag;
      _this.sendActionsData(_this.selectedFilterId, {
        searchData: _this.searchData
      });
    });
    _this.eventHandler.registerHandler('toggle-show-hidden', function (payload) {
      _this.showHidden = payload;
      _this.sendActionsData(_this.selectedFilterId, {
        searchData: _this.searchData
      });
    });
    _this.eventHandler.registerHandler('set-selected-actions-filter', function (_ref2) {
      var filterId = _ref2.filterId;
      _this.selectedFilterId = filterId;
    });
    _this.eventHandler.registerHandler('set-actions-search', function (_ref3) {
      var searchData = _ref3.searchData;
      _this.searchData = searchData;
    });
    _this.eventHandler.registerHandler('query-action-xp-breakdown', function (payload) {
      var eff = undefined;
      if (_this.isRunningAction(payload.id)) {
        eff = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEntityEfficiency("runningAction_".concat(payload.id));
      }
      var breakdowns = _this.getLearningRate(payload.id, eff, true);
      breakdowns.nextEtas = _this.getEtasNext(payload.id);
      _this.eventHandler.sendData("action-xp-breakdown-".concat(payload.id), breakdowns);
    });
    _this.filtersCache = {};
    _this.rankableCached = [];
    return _this;
  }
  _inherits(ActionsModule, _GameModule);
  return _createClass(ActionsModule, [{
    key: "initialize",
    value: function initialize() {
      game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.registerGameEntity('runningAction', {
        name: 'Idling',
        level: 0
      });
      (0,_actions_db__WEBPACK_IMPORTED_MODULE_0__.registerActionsStage1)();
      (0,_aspect_db__WEBPACK_IMPORTED_MODULE_6__.registerAspects)();
      this.actions = {};
      this.rankableCached = Object.values(game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.entities).filter(function (one) {
        var _one$attributes;
        return (_one$attributes = one.attributes) === null || _one$attributes === void 0 ? void 0 : _one$attributes.isRankAvailable;
      }).map(function (re) {
        return re.id;
      });
    }
  }, {
    key: "getActionRank",
    value: function getActionRank(id) {
      return Math.floor(game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getLevel(id) / 100);
    }
  }, {
    key: "getRankBonus",
    value: function getRankBonus(rank) {
      return Math.pow(1.05, rank);
    }
  }, {
    key: "regenerateRanks",
    value: function regenerateRanks() {
      var _this2 = this;
      if (game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.entityExists('system_action_ranks_multiplier')) {
        game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.unsetEntity('system_action_ranks_multiplier');
      }
      var effectsRanks = this.rankableCached.reduce(function (acc, id) {
        var rank = _this2.getActionRank(id);
        var effect_id = (0,_actions_db__WEBPACK_IMPORTED_MODULE_0__.getRankId)(id);
        var formulaA = _this2.getRankBonus(rank);
        return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, effect_id, {
          A: 0,
          B: formulaA,
          type: 2
        }));
      }, {});

      // console.log('effectsRanks', effectsRanks);

      game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.registerGameEntity('system_action_ranks_multiplier', {
        name: 'Action Rank',
        resourceModifier: {
          multiplier: {
            effects: effectsRanks
          }
        }
      });
      game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.setEntityLevel('system_action_ranks_multiplier', 1, true);
    }
  }, {
    key: "getAttributeAspectReq",
    value: function getAttributeAspectReq(attribute_id) {
      return Math.max(1, 25 / game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffectValue("aspect_".concat(attribute_id, "_reduction")));
    }
  }, {
    key: "getAspectMaxLevel",
    value: function getAspectMaxLevel(attribute_id) {
      return Math.floor(game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffectValue(attribute_id) / this.getAttributeAspectReq(attribute_id));
    }
  }, {
    key: "setAspectLevel",
    value: function setAspectLevel(attribute_id, level) {
      var actLevel = Math.min(this.getAspectMaxLevel(attribute_id), Math.max(0, Math.floor(level !== null && level !== void 0 ? level : 0)));
      if (game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.entityExists("".concat(attribute_id, "_aspect"))) {
        game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.setEntityLevel("".concat(attribute_id, "_aspect"), actLevel, true);
      }
    }
  }, {
    key: "setMonitored",
    value: function setMonitored(_ref4) {
      var type = _ref4.type,
        id = _ref4.id;
      // console.log('CHMON: ', id, type);
      if (!id) {
        this.monitorData = null;
        return;
      }
      this.monitorData = {
        type: type,
        id: id
      };
    }
  }, {
    key: "getMonitoredData",
    value: function getMonitoredData(entity) {
      if (!this.monitorData || !entity) return null;
      if (this.monitorData.type === 'attribute') {
        var _this$actions$entity$, _increment$this$monit;
        if (entity.attributes.primaryAttribute === this.monitorData.id) {
          return 'use';
        }
        var increment = this.packEffects(game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEffects(entity.id, 1, ((_this$actions$entity$ = this.actions[entity.id]) === null || _this$actions$entity$ === void 0 ? void 0 : _this$actions$entity$.level) || 1, true), function (item) {
          return item.type === 'effects';
        });
        if ((_increment$this$monit = increment[this.monitorData.id]) !== null && _increment$this$monit !== void 0 && _increment$this$monit.value) {
          return 'produce';
        }
      }
      if (this.monitorData.type === 'learn_modifier') {
        var _entity$learningEffec;
        if (this.monitorData.id === 'learning_rate' || (_entity$learningEffec = entity.learningEffects) !== null && _entity$learningEffec !== void 0 && _entity$learningEffec.includes(this.monitorData.id)) {
          return 'produce';
        }
      }
      if (this.monitorData.type === 'discount') {
        var _entity$discountEffec;
        if (this.monitorData.id === 'actions_discount' || (_entity$discountEffec = entity.discountEffects) !== null && _entity$discountEffec !== void 0 && _entity$discountEffec.includes(this.monitorData.id)) {
          return 'produce';
        }
      }
      if (this.monitorData.type === 'resource') {
        var _this$actions$entity$2, _rsEff$this$monitorDa;
        var rsEff = this.packEffects(game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEffects(entity.id, 0, ((_this$actions$entity$2 = this.actions[entity.id]) === null || _this$actions$entity$2 === void 0 ? void 0 : _this$actions$entity$2.level) || 1, true).filter(function (eff) {
          return eff.type === 'resources';
        }));
        if ((_rsEff$this$monitorDa = rsEff[this.monitorData.id]) !== null && _rsEff$this$monitorDa !== void 0 && _rsEff$this$monitorDa.value) {
          return rsEff[this.monitorData.id].scope === 'consumption' ? 'use' : 'produce';
        }
      }
    }
  }, {
    key: "getDiscount",
    value: function getDiscount(id) {
      var _gameEntity$getEntity;
      var discFactor = 1.;
      if ((_gameEntity$getEntity = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEntity(id).discountEffects) !== null && _gameEntity$getEntity !== void 0 && _gameEntity$getEntity.length) {
        game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEntity(id).discountEffects.forEach(function (effectId) {
          discFactor /= game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffectValue(effectId);
        });
      }
      return discFactor;
    }
  }, {
    key: "getActionXPMax",
    value: function getActionXPMax(id) {
      var _this$actions$id$leve, _this$actions$id;
      var lvl = (_this$actions$id$leve = (_this$actions$id = this.actions[id]) === null || _this$actions$id === void 0 ? void 0 : _this$actions$id.level) !== null && _this$actions$id$leve !== void 0 ? _this$actions$id$leve : 1;
      var discFactor = this.getDiscount(id);
      return Math.max(1, discFactor * game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getAttribute(id, 'baseXPCost', 50) * Math.pow(1.01, lvl - 1) * (0.8 + 0.2 * lvl));
    }
  }, {
    key: "reassertRunningEfforts",
    value: function reassertRunningEfforts(bForce) {
      var _this3 = this;
      var totalEffort = this.activeActions.reduce(function (acc, act) {
        return acc += act.effort;
      }, 0);
      if (Math.abs(1.0 - totalEffort) > 1.e-8 || bForce) {
        var mult = 1. / totalEffort;
        this.activeActions.forEach(function (act, index) {
          _this3.activeActions[index].effort *= mult;
          game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEntity(act.id).modifier.effectFactor = _this3.activeActions[index].effort;
          game_framework__WEBPACK_IMPORTED_MODULE_2__.resourceCalculators.regenerateModifier(game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEntity(act.id).modifier.id);
        });
      }
    }
  }, {
    key: "setActionHidden",
    value: function setActionHidden(id, flag) {
      if (!this.actions[id]) {
        this.actions[id] = {
          level: 1,
          xp: 0,
          focus: {
            time: 0
          }
        };
      }
      this.actions[id].isHidden = flag;
    }
  }, {
    key: "generateFilterCache",
    value: function generateFilterCache(id) {
      var _this4 = this;
      if (!this.customFilters[id]) {
        delete this.filtersCache[id];
      }
      // now apply filters and find ids
      if (!this.customFilters[id].rules) {
        this.filtersCache[id] = {
          'all': true
        };
        return;
      }
      var entities = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.listEntitiesByTags(['action']);
      this.filtersCache[id] = {};
      entities.forEach(function (entity) {
        var ruleResults = _this4.customFilters[id].rules.map(function (rule) {
          var _entity$modifier, _entity$modifier2, _entity$modifier3, _entity$modifier4;
          if (rule.type === 'tag') return entity.tags.includes(rule.object);
          if (rule.type === 'resource') return Object.keys(((_entity$modifier = entity.modifier) === null || _entity$modifier === void 0 || (_entity$modifier = _entity$modifier.income) === null || _entity$modifier === void 0 ? void 0 : _entity$modifier.resources) || {}).includes(rule.object) || Object.keys(((_entity$modifier2 = entity.modifier) === null || _entity$modifier2 === void 0 || (_entity$modifier2 = _entity$modifier2.multiplier) === null || _entity$modifier2 === void 0 ? void 0 : _entity$modifier2.resources) || {}).includes(rule.object);
          if (rule.type === 'attribute') return Object.keys(((_entity$modifier3 = entity.modifier) === null || _entity$modifier3 === void 0 || (_entity$modifier3 = _entity$modifier3.income) === null || _entity$modifier3 === void 0 ? void 0 : _entity$modifier3.effects) || {}).includes(rule.object) || Object.keys(((_entity$modifier4 = entity.modifier) === null || _entity$modifier4 === void 0 || (_entity$modifier4 = _entity$modifier4.multiplier) === null || _entity$modifier4 === void 0 ? void 0 : _entity$modifier4.effects) || {}).includes(rule.object);
          throw new Error('Invalid filter condition: ' + rule.type);
        });
        var conditionExpression = _this4.customFilters[id].condition;
        if (!conditionExpression) {
          var result = ruleResults.every(function (one) {
            return !!one;
          });
          if (result) {
            _this4.filtersCache[id][entity.id] = true;
          }
          return true;
        }
        ruleResults.forEach(function (result, index) {
          conditionExpression = conditionExpression.replace(new RegExp("\\b".concat(index + 1, "\\b"), 'g'), result);
        });
        conditionExpression = conditionExpression.replace(/\bAND\b/g, '&&').replace(/\bOR\b/g, '||').replace(/\bNOT\b/g, '!');
        try {
          var _result = eval(conditionExpression);
          if (_result) {
            _this4.filtersCache[id][entity.id] = true;
          }
        } catch (error) {
          console.error("Invalid condition string", error);
          return false;
        }
      });
    }
  }, {
    key: "generateAllFiltersCache",
    value: function generateAllFiltersCache() {
      for (var filterId in this.customFilters) {
        this.generateFilterCache(filterId);
      }
      // console.log('Caches: ', this.filtersCache);
    }
  }, {
    key: "setCustomFilterPinned",
    value: function setCustomFilterPinned(_ref5) {
      var id = _ref5.id,
        flag = _ref5.flag;
      if (this.customFilters[id]) {
        this.customFilters[id].isPinned = flag;
      }
    }
  }, {
    key: "saveCustomFilter",
    value: function saveCustomFilter(payload) {
      var _payload$id;
      var id = (_payload$id = payload.id) !== null && _payload$id !== void 0 ? _payload$id : "".concat(Math.round(Math.random() * 1000000));
      this.customFilters[id] = _objectSpread(_objectSpread(_objectSpread({}, this.customFilters[id] || {}), payload), {}, {
        id: id
      });
      if (!payload.id) {
        this.customFiltersOrder.push(id);
      }

      // console.log('this.customFiltersOrder', this.customFiltersOrder, payload, this.customFilters[id]);

      this.generateFilterCache(id);

      //TODO: Re-index filters
      this.sendActionsData(this.selectedFilterId, {
        searchData: this.searchData
      });
    }
  }, {
    key: "deleteCustomFilter",
    value: function deleteCustomFilter(_ref6) {
      var _DEFAULT_FILTERS$id;
      var id = _ref6.id;
      if (this.customFilters[id] && !((_DEFAULT_FILTERS$id = DEFAULT_FILTERS[id]) !== null && _DEFAULT_FILTERS$id !== void 0 && _DEFAULT_FILTERS$id.isRequired)) {
        delete this.customFilters[id];
        this.customFiltersOrder = this.customFiltersOrder.filter(function (fid) {
          return fid !== id;
        });
        this.sendActionsData(this.selectedFilterId, {
          searchData: this.searchData
        });
      }
    }
  }, {
    key: "applyCustomFilter",
    value: function applyCustomFilter(_ref7) {
      var id = _ref7.id;
      this.selectedFilterId = id;
      this.generateFilterCache(id);
      this.sendActionsData(this.selectedFilterId, {
        searchData: this.searchData
      });
    }
  }, {
    key: "tick",
    value: function tick(game, delta) {
      var _this5 = this;
      for (var key in this.actions) {
        this.actions[key].isLeveled = false;
      }
      var rareEvents = {
        herbDrops: {},
        oreDrops: {}
      };
      this.aspectUpdateCd -= delta;
      if (this.aspectUpdateCd <= 0 && game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getLevel('shop_item_aspects_focus') > 0) {
        this.aspectUpdateCd = 2;
        for (var _key in this.aspectsSettings) {
          if (this.aspectsSettings[_key].maxed) {
            var attribute_id = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getAttribute(_key, 'keyAttribute');
            if (Math.floor(this.getAspectMaxLevel(attribute_id)) > game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getLevel("".concat(attribute_id, "_aspect"))) {
              this.setAspectLevel(attribute_id, this.getAspectMaxLevel(attribute_id));
            }
          }
        }
      }
      if (this.activeActions) {
        this.activeActions.forEach(function (act) {
          if (!_this5.actions[act.originalId]) {
            _this5.actions[act.originalId] = {
              level: 1,
              xp: 0,
              focus: {
                time: 0
              }
            };
          }
          if (!_this5.actions[act.originalId].focus) {
            _this5.actions[act.originalId].focus = {
              time: 0
            };
          }
          if (!_this5.actions[act.originalId].level || Number.isNaN(_this5.actions[act.originalId].level)) {
            _this5.actions[act.originalId].level = 1;
          }
          if (_this5.actions[act.originalId].focus.time < _this5.getFocusCapTime(act.originalId)) {
            _this5.actions[act.originalId].focus.time += delta * act.effort;
          } else {
            _this5.actions[act.originalId].focus.time = _this5.getFocusCapTime(act.originalId);
          }
          _this5.actions[act.originalId].timeInvested = (_this5.actions[act.originalId].timeInvested || 0) + delta * act.effort;
          _this5.actions[act.originalId].focus.bonus = _this5.getFocusBonus(_this5.actions[act.originalId].focus.time);
          var dxp = delta * _this5.getLearningRate(act.id);
          // console.log('------------: ', act.id, dxp, delta, this.getLearningRate(act.id, undefined, true));
          _this5.actions[act.originalId].xp += dxp;
          _this5.actions[act.originalId].xpEarned = (_this5.actions[act.originalId].xpEarned || 0) + dxp;
          var herbDrops = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getAttribute(act.originalId, 'possibleRareHerbs', null);
          if (herbDrops) {
            if (!rareEvents['herbDrops']) {
              rareEvents['herbDrops'] = {};
            }
            for (var _key2 in herbDrops) {
              rareEvents['herbDrops'][_key2] = (rareEvents['herbDrops'][_key2] || 0) + herbDrops[_key2];
            }
          }
          // console.log('Attempt to level up: ', act.originalId, this.actions, this.getActionXPMax(act.originalId))
          game_framework__WEBPACK_IMPORTED_MODULE_2__.gameResources.addResource('mage-xp', delta * _this5.getPlayerXPFromAction(act.originalId));
          if (_this5.actions[act.originalId].xp >= _this5.getActionXPMax(act.originalId)) {
            _this5.actions[act.originalId].level++;
            _this5.actions[act.originalId].xp = 0;
            game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.setEntityLevel(act.originalId, _this5.actions[act.originalId].level, true);
            game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.setEntityLevel(act.id, _this5.actions[act.originalId].level, true);
            // console.log('Leveled up: ', gameEntity.getLevel(act.id), gameEntity.getLevel(act.originalId));
            _this5.regenerateRanks();
            _this5.actions[act.originalId].isLeveled = true;
            if (game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.isCapped(act.originalId)) {
              _this5.dropRunningAction(act.originalId);
              _this5.reassertRunningEfforts();
            }
            game_framework__WEBPACK_IMPORTED_MODULE_2__.gameCore.getModule('unlock-notifications').generateNotifications();
            // console.log('[SAD]Ticked!')
            _this5.sendActionsData(_this5.selectedFilterId, {
              searchData: _this5.searchData
            });
          }
        });
      }
      // check for rare loot
      if (game_framework__WEBPACK_IMPORTED_MODULE_2__.gameResources.getResource('rare_herbs_loot').balance > 0) {
        var chanceMult = delta * game_framework__WEBPACK_IMPORTED_MODULE_2__.gameResources.getResource('rare_herbs_loot').balance;
        // console.log('Handling chances for rare loots: ', gameResources.getResource('rare_herbs_loot'), chanceMult);
        if (Math.random() < chanceMult) {
          var id = (0,_shared_utils_math__WEBPACK_IMPORTED_MODULE_4__.weightedRandomChoice)(rareEvents['herbDrops']);
          // console.log('Add: ', id, rareEvents['herbDrops']);

          game_framework__WEBPACK_IMPORTED_MODULE_2__.gameResources.addResource(id, 1);
        }
      }
      this.lists.tick(game, delta);
    }
  }, {
    key: "save",
    value: function save() {
      return {
        actions: this.actions,
        activeActions: this.activeActions,
        actionLists: this.lists.save(),
        selectedFilterId: this.selectedFilterId,
        searchData: this.searchData,
        focus: this.focus,
        aspects: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.listEntitiesByTags(['aspect']).filter(function (one) {
          return one.level > 0;
        }).reduce(function (acc, ent) {
          return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, ent.id, game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getLevel(ent.id)));
        }, {}),
        aspectsSettings: this.aspectsSettings,
        customFilters: this.customFilters,
        customFiltersOrder: this.customFiltersOrder
      };
    }
  }, {
    key: "load",
    value: function load(saveObject) {
      var _this6 = this;
      for (var key in this.actions) {
        this.setAction(key, 0, true);
      }
      game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.listEntitiesByTags(['aspect']).filter(function (one) {
        return one.level > 0;
      }).map(function (one) {
        return game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.setEntityLevel(one.id, 0, true);
      });
      this.actions = {};
      this.aspectsSettings = {};
      if (saveObject !== null && saveObject !== void 0 && saveObject.actions) {
        for (var id in saveObject.actions) {
          this.setAction(id, saveObject.actions[id].level, true);
          this.actions[id].xp = saveObject.actions[id].xp;
          this.actions[id].focus = saveObject.actions[id].focus;
          this.actions[id].timeInvested = saveObject.actions[id].timeInvested || 0;
          this.actions[id].xpEarned = saveObject.actions[id].xpEarned || 0;
          this.actions[id].isHidden = saveObject.actions[id].isHidden || false;
        }
      }
      this.stopRunningActions();
      if (saveObject !== null && saveObject !== void 0 && saveObject.activeActions) {
        this.stopRunningActions();
        saveObject === null || saveObject === void 0 || saveObject.activeActions.forEach(function (a) {
          _this6.addRunningAction(a.originalId, a.effort);
        });
      }
      this.regenerateRanks();
      if (saveObject !== null && saveObject !== void 0 && saveObject.actionLists) {
        this.lists.load(saveObject.actionLists);
      } else {
        this.lists.load({});
      }
      this.selectedFilterId = (saveObject === null || saveObject === void 0 ? void 0 : saveObject.selectedFilterId) || 'all';
      this.focus = saveObject === null || saveObject === void 0 ? void 0 : saveObject.focus;
      this.searchData = (saveObject === null || saveObject === void 0 ? void 0 : saveObject.searchData) || {
        search: '',
        selectedScopes: ['name', 'tags']
      };
      if (saveObject !== null && saveObject !== void 0 && saveObject.aspects) {
        for (var _key3 in saveObject.aspects) {
          game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.setEntityLevel(_key3, saveObject.aspects[_key3], true);
        }
      }
      if (saveObject !== null && saveObject !== void 0 && saveObject.aspectsSettings) {
        this.aspectsSettings = saveObject.aspectsSettings;
      }
      this.customFilters = (0,lodash__WEBPACK_IMPORTED_MODULE_7__.cloneDeep)(DEFAULT_FILTERS);
      if (saveObject !== null && saveObject !== void 0 && saveObject.customFilters) {
        this.customFilters = saveObject === null || saveObject === void 0 ? void 0 : saveObject.customFilters;
        // check if all required are prestnt
        var isValid = true;
        for (var fltId in DEFAULT_FILTERS) {
          if (DEFAULT_FILTERS[fltId].isRequired && !this.customFilters[fltId]) {
            isValid = false;
            break;
          }
        }
        if (!isValid) {
          this.customFilters = (0,lodash__WEBPACK_IMPORTED_MODULE_7__.cloneDeep)(DEFAULT_FILTERS);
          this.selectedFilterId = 'all';
        }
      }
      this.generateAllFiltersCache();
      if (saveObject !== null && saveObject !== void 0 && saveObject.customFiltersOrder) {
        this.customFiltersOrder = saveObject.customFiltersOrder;
      } else {
        this.customFiltersOrder = Object.keys(this.customFilters);
      }
      // console.log('[SAD]Loaded!', this.filtersCache, this.selectedFilterId, this.customFilters);
      this.sendActionsData(this.selectedFilterId, {
        searchData: this.searchData
      });
    }
  }, {
    key: "setAction",
    value: function setAction(actionId, amount) {
      var bForce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.setEntityLevel(actionId, amount, bForce);
      if (!this.actions[actionId]) {
        this.actions[actionId] = {
          level: amount,
          xp: 0
        };
      }
      this.actions[actionId].level = amount;
    }
  }, {
    key: "getFocusCapTime",
    value: function getFocusCapTime(id) {
      var _this$isRunningAction;
      var currActs = this.activeActions.length;
      var penalty = currActs < 4 ? 1 : Math.pow((_this$isRunningAction = this.isRunningAction(id)) === null || _this$isRunningAction === void 0 ? void 0 : _this$isRunningAction.effort, 0.25);
      return 15 + (game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffectValue('max_focus_time') - 15) * (penalty !== null && penalty !== void 0 ? penalty : 0);
    }
  }, {
    key: "getFocusBonus",
    value: function getFocusBonus(time) {
      return 1 + Math.min(game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffectValue('max_focus_time'), Math.max(0, time - 15)) * 0.1 * 5 / 285;
    }
  }, {
    key: "getLearningRate",
    value: function getLearningRate(id, eff) {
      var bGetBreakdowns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var entEff = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEntityEfficiency(id);
      var focusBonus = 1.;
      var effortMult = 1.;
      var breakDowns = {};
      if (game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffectValue('plain_learn_rate')) {
        breakDowns['raw'] = {
          title: 'Plain Learn Bonus',
          value: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffectValue('plain_learn_rate'),
          isPlain: true
        };
      }
      var isRunning = this.isRunningAction(id);
      if (isRunning) {
        var _this$actions$gameEnt, _this$actions$id2;
        // console.log('EffMult: ', id, eff, entEff, eff == null);
        focusBonus = ((_this$actions$gameEnt = this.actions[game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEntity(id).copyFromId]) === null || _this$actions$gameEnt === void 0 || (_this$actions$gameEnt = _this$actions$gameEnt.focus) === null || _this$actions$gameEnt === void 0 ? void 0 : _this$actions$gameEnt.bonus) || ((_this$actions$id2 = this.actions[id]) === null || _this$actions$id2 === void 0 || (_this$actions$id2 = _this$actions$id2.focus) === null || _this$actions$id2 === void 0 ? void 0 : _this$actions$id2.bonus) || 1.;
        if (Math.abs(1 - focusBonus) > game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_5__.SMALL_NUMBER) {
          breakDowns['focus'] = {
            title: 'Focus',
            value: focusBonus
          };
        }
        if (Math.abs(1 - isRunning.effort) > game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_5__.SMALL_NUMBER) {
          breakDowns['effort'] = {
            title: 'Effort',
            value: isRunning.effort
          };
          effortMult = isRunning.effort;
        }
      }
      if (eff == null) {
        eff = entEff;
      }
      var baseXPRate = 1.;
      if (game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEntity(id).getLearnRate) {
        var _gameEntity$getEntity2;
        baseXPRate = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEntity(id).getLearnRate();
        breakDowns['base'] = {
          title: 'Base',
          value: baseXPRate
        };
        // we should list breakdowns here
        if ((_gameEntity$getEntity2 = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEntity(id).learningEffects) !== null && _gameEntity$getEntity2 !== void 0 && _gameEntity$getEntity2.length) {
          var _iterator = _createForOfIteratorHelper(game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEntity(id).learningEffects),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var effect = _step.value;
              baseXPRate *= game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffectValue(effect);
              if (Math.abs(1 - game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffectValue(effect)) > game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_5__.SMALL_NUMBER) {
                breakDowns[effect] = {
                  title: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffect(effect).name,
                  value: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffectValue(effect),
                  breakDown: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffect(effect).breakDown
                };
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }
      var primaryEffect = 1.;
      var intensityEffect = 1.;
      if (game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEntity(id).getPrimaryEffect) {
        var _gameEntity$getEntity3;
        primaryEffect = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEntity(id).getPrimaryEffect();
        // baseXPRate *= gameEntity.getEntity(id).getPrimaryEffect();
        var pAtt = (_gameEntity$getEntity3 = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEntity(id).attributes) === null || _gameEntity$getEntity3 === void 0 ? void 0 : _gameEntity$getEntity3.primaryAttribute;
        breakDowns['primaryAttribute'] = {
          title: "Primary Attribute: ".concat(pAtt ? game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffect(pAtt).name : ''),
          value: primaryEffect
        };
        intensityEffect = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEntity(id).getIntensityAspect();
        if (Math.abs(intensityEffect - 1) > game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_5__.SMALL_NUMBER) {
          var _gameEntity$getEntity4;
          var pAtt2 = (_gameEntity$getEntity4 = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEntity(id).attributes) === null || _gameEntity$getEntity4 === void 0 ? void 0 : _gameEntity$getEntity4.primaryAttribute;
          var iAsp = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffect("aspect_".concat(pAtt2));
          breakDowns['intensity'] = {
            title: "Intensity: ".concat(iAsp ? iAsp.name : ''),
            value: intensityEffect
          };
        }
      }
      if (Math.abs(game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffectValue('learning_rate') - 1.0) > game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_5__.SMALL_NUMBER) {
        breakDowns['learning_rate'] = {
          title: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffect('learning_rate').name,
          value: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffectValue('learning_rate'),
          breakDown: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffect('learning_rate').breakDown
        };
      }
      if (Math.abs(1 - eff) > game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_5__.SMALL_NUMBER) {
        breakDowns['efficiency'] = {
          title: 'Action Efficiency',
          value: eff
        };
      }
      var total = (game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffectValue('plain_learn_rate') + baseXPRate * primaryEffect * game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffectValue('learning_rate') * focusBonus) * eff * effortMult * intensityEffect;
      if (bGetBreakdowns) {
        console.log('EffMult: ', id, baseXPRate, primaryEffect, eff, game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffectValue('learning_rate'), focusBonus, effortMult, total);
      }
      if (bGetBreakdowns) {
        return {
          breakDowns: breakDowns,
          total: total
        };
      }
      return total;
    }
  }, {
    key: "getPlayerXPFromAction",
    value: function getPlayerXPFromAction(id) {
      var entEff = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEntityEfficiency(id);
      var focusBonus = 1.;
      var effortMult = 1.;
      var breakDowns = {};
      if (game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffectValue('plain_learn_rate')) {
        breakDowns['raw'] = {
          title: 'Plain Learn Bonus',
          value: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffectValue('plain_learn_rate'),
          isPlain: true
        };
      }
      var isRunning = this.isRunningAction(id);
      if (!isRunning) return 0;
      var eff = entEff;
      var baseXPRate = 1.;
      var total = baseXPRate * game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffectValue('learning_rate') * eff * isRunning.effort;
      return total;
    }
  }, {
    key: "getTotalPlayerXPGains",
    value: function getTotalPlayerXPGains() {
      var _this7 = this;
      return game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.listEntitiesByTags(['runningActions']).map(function (ent) {
        return {
          id: ent.id,
          name: ent.name,
          dxp: _this7.getPlayerXPFromAction(ent.id)
        };
      });
    }
  }, {
    key: "isRunningAction",
    value: function isRunningAction(id) {
      return this.activeActions && this.activeActions.find(function (one) {
        return one.id === id || one.originalId === id;
      });
    }
  }, {
    key: "isRunningActionWithTag",
    value: function isRunningActionWithTag(id) {
      if (!this.activeActions) return false;
      var _iterator2 = _createForOfIteratorHelper(this.activeActions),
        _step2;
      try {
        var _loop = function _loop() {
            var running = _step2.value;
            var ent = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEntity(running.originalId);
            if (Array.isArray(id)) {
              if (id.every(function (one) {
                return ent.tags.includes(one);
              })) return {
                v: true
              };
            } else {
              if (ent.tags.includes(id)) return {
                v: true
              };
            }
          },
          _ret;
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _ret = _loop();
          if (_ret) return _ret.v;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return false;
    }
  }, {
    key: "stopRunningActions",
    value: function stopRunningActions() {
      var _iterator3 = _createForOfIteratorHelper(this.activeActions),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var act = _step3.value;
          if (this.actions[act.originalId]) {
            this.actions[act.originalId].focus = null;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      this.activeActions = [];
      var runningEntities = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.listEntitiesByTags(['runningActions']);
      runningEntities.forEach(function (e) {
        game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.unsetEntity(e.id);
      });
    }
  }, {
    key: "addRunningAction",
    value: function addRunningAction(id, effort) {
      var _this$actions$id$leve2, _this$actions$id3, _this$actions$id$leve3, _this$actions$id4;
      if (!id) {
        return;
      }
      var isCapped = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.isCapped(id);
      if (isCapped) {
        return;
      }
      var isEffectChannel = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getAttribute(id, 'isEffectChanneling', false);
      var rn = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.registerGameEntity("runningAction_".concat(id), {
        copyFromId: id,
        level: (_this$actions$id$leve2 = (_this$actions$id3 = this.actions[id]) === null || _this$actions$id3 === void 0 ? void 0 : _this$actions$id3.level) !== null && _this$actions$id$leve2 !== void 0 ? _this$actions$id$leve2 : 1,
        allowedImpacts: isEffectChannel ? ['effects', 'resources'] : ['resources'],
        // need to play around here - if some attribute is present to action: we should allow effects here
        tags: ['running', 'runningActions'],
        effectFactor: effort,
        unlockedBy: undefined
      });
      game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.setEntityLevel("runningAction_".concat(id), (_this$actions$id$leve3 = (_this$actions$id4 = this.actions[id]) === null || _this$actions$id4 === void 0 ? void 0 : _this$actions$id4.level) !== null && _this$actions$id$leve3 !== void 0 ? _this$actions$id$leve3 : 1);
      this.activeActions.push({
        id: "runningAction_".concat(id),
        originalId: id,
        effort: effort
      });
      console.log('CLL: ', this.activeActions, rn);
    }
  }, {
    key: "dropRunningAction",
    value: function dropRunningAction(id) {
      var _this$actions$id5;
      if (!this.isRunningAction(id)) return;
      var index = this.activeActions.findIndex(function (one) {
        return one.originalId === id;
      });
      if (index < 0) {
        throw new Error("Woops! Can't find action by originalId ".concat(id));
      }
      if ((_this$actions$id5 = this.actions[id]) !== null && _this$actions$id5 !== void 0 && _this$actions$id5.focus) {
        this.actions[id].focus = null;
      }
      this.activeActions.splice(index, 1);
      game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.unsetEntity("runningAction_".concat(id));
    }
  }, {
    key: "setRunningAction",
    value: function setRunningAction(id) {
      console.log('Running: ', id);
      this.stopRunningActions();
      this.addRunningAction(id, 1);
    }
  }, {
    key: "getRunningActionsInfo",
    value: function getRunningActionsInfo() {
      if (this.lists.runningList) {
        var _this$lists$runningLi;
        return {
          title: (_this$lists$runningLi = this.lists.runningList) === null || _this$lists$runningLi === void 0 ? void 0 : _this$lists$runningLi.name
        };
      }
      return {
        title: this.activeActions.map(function (one) {
          return game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEntity(one.id).name;
        }).join(';')
      };
    }
  }, {
    key: "getActionsUnlocks",
    value: function getActionsUnlocks(showUnlocked) {
      var items = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.listEntitiesByTags(['action'], false, [], {
        listPrevious: showUnlocked
      }).filter(function (one) {
        var _one$nextUnlocks, _one$prevUnlocks;
        return one.isUnlocked && !one.isCapped && (((_one$nextUnlocks = one.nextUnlocks) === null || _one$nextUnlocks === void 0 ? void 0 : _one$nextUnlocks.length) || showUnlocked && ((_one$prevUnlocks = one.prevUnlocks) === null || _one$prevUnlocks === void 0 ? void 0 : _one$prevUnlocks.length));
      }).map(function (one) {
        var _one$nextUnlocks2, _one$prevUnlocks2;
        /*console.log('ActionUnlocks: ', one.nextUnlocks);*/

        if ((_one$nextUnlocks2 = one.nextUnlocks) !== null && _one$nextUnlocks2 !== void 0 && _one$nextUnlocks2.length) {
          one.unlocks = {
            level: one.nextUnlocks[0].level,
            progress: 100 * one.level / one.nextUnlocks[0].level,
            eta: one.nextUnlocks[0] ? (0,_shared_utils_math__WEBPACK_IMPORTED_MODULE_4__.calculateTimeToLevelUp)(game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getAttribute(one.id, 'baseXPCost'), 0.2, one.level, one.nextUnlocks[0].level) : 0,
            items: one.nextUnlocks.map(function (unlock) {
              var ent = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEntity(unlock.unlockId);
              return _objectSpread(_objectSpread({}, unlock), {}, {
                meta: {
                  name: ent.name,
                  description: ent.description,
                  scope: (0,_shared_utils_scopes__WEBPACK_IMPORTED_MODULE_8__.getScope)(ent)
                }
              });
            })
          };
        }
        return _objectSpread(_objectSpread({}, one), {}, {
          prevUnlocks: ((_one$prevUnlocks2 = one.prevUnlocks) !== null && _one$prevUnlocks2 !== void 0 ? _one$prevUnlocks2 : []).map(function (unlock) {
            var data = {};
            if (game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.entityExists(unlock.unlockId)) {
              data = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEntity(unlock.unlockId);
            }
            return _objectSpread(_objectSpread({}, unlock), {}, {
              data: data
            });
          })
        });
      });

      /*console.log('FUNC: ', showUnlocked, items, gameEntity
          .listEntitiesByTags(['action'], false, [], { showUnlocked }).filter(one => one.id === 'action_endurance_training'));
      */
      return items;
    }
  }, {
    key: "calculateAnalyticalETA",
    value: function calculateAnalyticalETA(currentLevel, targetLevel, baseCost) {
      var xpRate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var cxp = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      if (!currentLevel) {
        currentLevel = 1;
      }
      var ln = Math.log;
      var a = baseCost;
      var logFactor = ln(1.01);
      function integralAtLevel(x) {
        var term1 = Math.pow(1.01, x) / logFactor;
        var term2 = 0.2 * x * Math.pow(1.01, x) / logFactor;
        var term3 = 0.2 * Math.pow(1.01, x) / (logFactor * logFactor);
        return a * (term1 + term2 - term3);
      }

      // Calculate the integral difference for levels U and L
      var totalXP = integralAtLevel(targetLevel) - integralAtLevel(currentLevel);
      var eta = (totalXP - cxp) / xpRate;
      return eta;
    }
  }, {
    key: "findNextKeypoints",
    value: function findNextKeypoints(currentLevel, max) {
      var keypoints = [];
      [25, 50, 100].forEach(function (divisor) {
        var nextKeypoint = Math.ceil(currentLevel / divisor) * divisor;
        if (nextKeypoint === currentLevel) {
          nextKeypoint += divisor;
        }
        if (keypoints.includes(nextKeypoint)) {
          nextKeypoint += divisor;
        }
        if (max && nextKeypoint > max) {
          nextKeypoint = max;
        }
        keypoints.push(nextKeypoint);
      });
      return _toConsumableArray(new Set(keypoints)).sort(function (a, b) {
        return a - b;
      });
    }
  }, {
    key: "findNextRankAndLvl",
    value: function findNextRankAndLvl(currentLvl, max) {
      var keypoints = [currentLvl + 1, 100 * Math.floor((currentLvl + 100) / 100)].filter(function (one) {
        return !max || one <= max;
      });
      return keypoints;
    }
  }, {
    key: "getEtas",
    value: function getEtas(id) {
      var _this8 = this;
      var entity = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEntity(id);
      var xpRate = this.isRunningAction(entity.id) ? this.getLearningRate("runningAction_".concat(entity.id)) : this.getLearningRate(entity.id, 1);
      var keypoints = this.findNextKeypoints(entity.level, game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEntityMaxLevel(id));
      var etaResults = {};
      keypoints.forEach(function (keypoint) {
        var _this8$actions$id;
        var eta = _this8.calculateAnalyticalETA(entity.level, keypoint, entity.attributes.baseXPCost * _this8.getDiscount(id), xpRate, (_this8$actions$id = _this8.actions[id]) === null || _this8$actions$id === void 0 ? void 0 : _this8$actions$id.xp);
        etaResults[keypoint] = eta;
      });
      return etaResults;
    }
  }, {
    key: "getEtasNext",
    value: function getEtasNext(id) {
      var _this9 = this;
      var entity = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEntity(id);
      var xpRate = this.isRunningAction(entity.id) ? this.getLearningRate("runningAction_".concat(entity.id)) : this.getLearningRate(entity.id, 1);
      var keypoints = this.findNextRankAndLvl(entity.level, game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEntityMaxLevel(id));
      var etaResults = {};
      keypoints.forEach(function (keypoint) {
        var _this9$actions$id;
        var eta = _this9.calculateAnalyticalETA(entity.level, keypoint, entity.attributes.baseXPCost * _this9.getDiscount(id), xpRate, (_this9$actions$id = _this9.actions[id]) === null || _this9$actions$id === void 0 ? void 0 : _this9$actions$id.xp);
        etaResults[keypoint] = eta;
      });
      return etaResults;
    }
  }, {
    key: "matchActionSearch",
    value: function matchActionSearch(one, searchData) {
      var _one$searchableMeta, _one$searchableMeta2, _one$searchableMeta3, _one$searchableMeta4;
      if (!searchData) return true;
      var search = searchData.search,
        selectedScopes = searchData.selectedScopes;
      if (!search) return true;
      if (selectedScopes.includes('name') && one.name.toLowerCase().includes(search)) return true;
      if (selectedScopes.includes('tags') && one.tags && one.tags.some(function (tag) {
        return tag.includes(search);
      })) return true;
      if (selectedScopes.includes('description') && one.description && one.description.toLowerCase().includes(search)) return true;
      if (selectedScopes.includes('resources') && (_one$searchableMeta = one.searchableMeta) !== null && _one$searchableMeta !== void 0 && _one$searchableMeta['resources'] && (_one$searchableMeta2 = one.searchableMeta) !== null && _one$searchableMeta2 !== void 0 && _one$searchableMeta2['resources'].some(function (tag) {
        return tag.includes(search.toLowerCase());
      })) return true;
      if (selectedScopes.includes('effects') && (_one$searchableMeta3 = one.searchableMeta) !== null && _one$searchableMeta3 !== void 0 && _one$searchableMeta3['effects'] && (_one$searchableMeta4 = one.searchableMeta) !== null && _one$searchableMeta4 !== void 0 && _one$searchableMeta4['effects'].some(function (tag) {
        return tag.includes(search.toLowerCase());
      })) return true;
      return false;
    }
  }, {
    key: "regenerateNotifications",
    value: function regenerateNotifications() {
      var _this10 = this;
      // NOW - check for actions if they have any new notifications
      Object.values(this.customFilters).forEach(function (filter) {
        var actions = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.listEntitiesByTags(['action']).filter(function (one) {
          return _this10.filtersCache[filter.id][one.id];
        });
        actions.forEach(function (action) {
          game_framework__WEBPACK_IMPORTED_MODULE_2__.gameCore.getModule('unlock-notifications').registerNewNotification('actions', 'all', filter.id, action.id, action.isUnlocked && !action.isCapped);
        });
      });
    }
  }, {
    key: "getActionsData",
    value: function getActionsData(filterId, options) {
      var _this11 = this;
      if (!filterId || !this.customFilters[filterId]) {
        filterId = 'all';
      }
      // const entities = gameEntity.listEntitiesByTags(['action']).filter(one => one.isUnlocked && !one.isCapped);
      var perCats = Object.values(this.customFilters).reduce(function (acc, filter) {
        acc[filter.id] = {
          id: filter.id,
          name: filter.name,
          rules: filter.rules,
          isPinned: filter.isPinned,
          sortIndex: _this11.customFiltersOrder.findIndex(function (s) {
            return s === filter.id;
          }),
          items: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.listEntitiesByTags(['action']).filter(function (one) {
            var _this11$actions;
            return _this11.filtersCache[filter.id][one.id] && one.isUnlocked && !one.isCapped && ((options === null || options === void 0 ? void 0 : options.showHidden) || _this11.showHidden || !((_this11$actions = _this11.actions) !== null && _this11$actions !== void 0 && (_this11$actions = _this11$actions[one.id]) !== null && _this11$actions !== void 0 && _this11$actions.isHidden)) && _this11.matchActionSearch(one, options.searchData);
          }),
          isSelected: filterId === filter.id
        };
        return acc;
      }, {});
      if (!filterId) {
        filterId = 'all';
      }
      var entities = perCats[filterId].items;
      var available = entities.map(function (entity) {
        var _this11$actions$entit, _this11$actions$entit2, _this11$actions$entit3, _this11$actions$entit4, _this11$actions$entit5, _this11$actions$entit6, _this11$actions$entit7, _this11$actions2, _gameEntity$getEntity5;
        return {
          id: entity.id,
          name: entity.name,
          category: entity.category,
          description: entity.description,
          max: entity.getMaxLevel ? entity.getMaxLevel() : entity.maxLevel || 0,
          level: ((_this11$actions$entit = _this11.actions[entity.id]) === null || _this11$actions$entit === void 0 ? void 0 : _this11$actions$entit.level) || 1,
          affordable: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getAffordable(entity.id),
          entityEfficiency: _this11.isRunningAction(entity.id) ? game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEntityEfficiency("runningAction_".concat(entity.id)) : 1,
          // potentialEffects: gameEntity.getEffects(entity.id, gameEntity.getAttribute(entity.id, 'isTraining') ? 1 : 0, this.actions[entity.id]?.level || 1, true),
          xp: ((_this11$actions$entit2 = _this11.actions[entity.id]) === null || _this11$actions$entit2 === void 0 ? void 0 : _this11$actions$entit2.xp) || 0,
          maxXP: _this11.getActionXPMax(entity.id),
          isActive: _this11.isRunningAction(entity.id),
          xpRate: _this11.isRunningAction(entity.id) ? _this11.getLearningRate("runningAction_".concat(entity.id)) : _this11.getLearningRate(entity.id, 1),
          isLeveled: (_this11$actions$entit3 = _this11.actions[entity.id]) === null || _this11$actions$entit3 === void 0 ? void 0 : _this11$actions$entit3.isLeveled,
          tags: entity.tags,
          focused: _this11.isRunningAction(entity.id) && ((_this11$actions$entit4 = _this11.actions[entity.id]) === null || _this11$actions$entit4 === void 0 || (_this11$actions$entit4 = _this11$actions$entit4.focus) === null || _this11$actions$entit4 === void 0 ? void 0 : _this11$actions$entit4.bonus) > 1 ? {
            isFocused: true,
            focusTime: _this11.actions[entity.id].focus.time,
            focusBonus: _this11.actions[entity.id].focus.bonus,
            isCapped: _this11.actions[entity.id].focus.time >= _this11.getFocusCapTime(entity.id),
            cap: _this11.getFocusCapTime(entity.id)
          } : null,
          actionEffect: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEffects(entity.id, 0, ((_this11$actions$entit5 = _this11.actions[entity.id]) === null || _this11$actions$entit5 === void 0 ? void 0 : _this11$actions$entit5.level) || 1, true).filter(function (eff) {
            return eff.type === 'resources';
          }),
          potentialEffects: _this11.packEffects(game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEffects(entity.id, 1, ((_this11$actions$entit6 = _this11.actions[entity.id]) === null || _this11$actions$entit6 === void 0 ? void 0 : _this11$actions$entit6.level) || 1, true), function (item) {
            return item.type === 'effects';
          }),
          currentEffects: _this11.packEffects(game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEffects(entity.id, 0, ((_this11$actions$entit7 = _this11.actions[entity.id]) === null || _this11$actions$entit7 === void 0 ? void 0 : _this11$actions$entit7.level) || 1, true), function (item) {
            return item.type === 'effects';
          }),
          isTraining: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getAttribute(entity.id, 'isTraining'),
          isHidden: (_this11$actions2 = _this11.actions) === null || _this11$actions2 === void 0 || (_this11$actions2 = _this11$actions2[entity.id]) === null || _this11$actions2 === void 0 ? void 0 : _this11$actions2.isHidden,
          monitored: _this11.getMonitoredData(entity),
          missingResourceId: _this11.isRunningAction(entity.id) && game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEntityEfficiency("runningAction_".concat(entity.id)) < 1 ? (_gameEntity$getEntity5 = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEntity("runningAction_".concat(entity.id))) === null || _gameEntity$getEntity5 === void 0 || (_gameEntity$getEntity5 = _gameEntity$getEntity5.modifier) === null || _gameEntity$getEntity5 === void 0 ? void 0 : _gameEntity$getEntity5.bottleNeck : null
          // nextEtas: this.getEtasNext(entity.id)
        };
      });
      var current = this.activeActions ? available.filter(function (one) {
        return _this11.activeActions.some(function (act) {
          return act.originalId === one.id;
        });
      }) : null;
      return {
        available: available,
        current: current,
        showHidden: this.showHidden,
        actionLists: this.lists.getLists(),
        runningList: this.lists.runningList,
        actionListsUnlocked: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getLevel('shop_item_notebook') > 0,
        actionCategories: Object.values(perCats).filter(function (cat) {
          return cat.items.length > 0;
        }).sort(function (a, b) {
          return a.sortIndex - b.sortIndex;
        }),
        automationEnabled: this.lists.automationEnabled,
        automationUnlocked: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getLevel('shop_item_planner') > 0,
        autotriggerIntervalSetting: this.lists.autotriggerIntervalSetting,
        searchData: this.searchData,
        selectedCategory: filterId,
        customFilters: this.customFilters,
        customFiltersOrder: this.customFiltersOrder,
        stats: {
          learnMults: {
            learningRate: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffect('learning_rate'),
            physicalLearningRate: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffect('physical_training_learn_speed'),
            mentalLearningRate: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffect('mental_training_learning_rate'),
            socialLearningRate: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffect('social_training_learning_rate'),
            routineLearningRate: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffect('routine_learning_speed'),
            spiritualLearningRate: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffect('spiritual_learning_rate'),
            booksLearningRate: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffect('books_learning_rate'),
            mentalActivitiesLearningRate: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffect('mental_activities_learn_rate')
          },
          xpDiscounts: {
            physical_actions_discount: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffect('physical_actions_discount'),
            social_actions_discount: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffect('social_actions_discount'),
            mental_actions_discount: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffect('mental_actions_discount'),
            magical_actions_discount: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffect('magical_actions_discount'),
            routine_actions_discount: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffect('routine_actions_discount')
          }
        },
        aspects: {
          isUnlocked: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getLevel('shop_item_aspects_focus') > 0,
          // temporary
          list: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.listEntitiesByTags(['aspect']).map(function (one) {
            var _this11$aspectsSettin, _this11$aspectsSettin2;
            return {
              id: one.id,
              name: one.name,
              level: one.level,
              effects: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEffects(one.id),
              maxLevel: _this11.getAspectMaxLevel(one.attributes.keyAttribute),
              attributeData: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffect(one.attributes.keyAttribute),
              nextPoint: Math.ceil((game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffectValue(one.attributes.keyAttribute) + game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_5__.SMALL_NUMBER) / _this11.getAttributeAspectReq(one.attributes.keyAttribute)) * _this11.getAttributeAspectReq(one.attributes.keyAttribute),
              progress: (game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffectValue(one.attributes.keyAttribute) - _this11.getAttributeAspectReq(one.attributes.keyAttribute) * Math.floor(game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffectValue(one.attributes.keyAttribute) / _this11.getAttributeAspectReq(one.attributes.keyAttribute))) / _this11.getAttributeAspectReq(one.attributes.keyAttribute),
              color: one.attributes.color,
              keepMaxed: (_this11$aspectsSettin = (_this11$aspectsSettin2 = _this11.aspectsSettings[one.id]) === null || _this11$aspectsSettin2 === void 0 ? void 0 : _this11$aspectsSettin2.maxed) !== null && _this11$aspectsSettin !== void 0 ? _this11$aspectsSettin : false
            };
          })
        }
      };
    }
  }, {
    key: "packEffects",
    value: function packEffects(effects) {
      var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (item) {
        return true;
      };
      var result = effects.filter(filter).reduce(function (acc, item) {
        acc[item.id] = item;
        return acc;
      }, {});
      return result;
    }
  }, {
    key: "getActionData",
    value: function getActionData(id) {
      var _this$actions$entity$3, _this$actions$entity$4, _this$actions$entity$5, _this$actions$entity$6, _this$actions$entity$7, _this$actions$entity$8, _entity$attributes, _entity$attributes2, _this$actions$entity$9, _this$actions$entity$10, _entity$attributes3, _entity$attributes4;
      if (!id) {
        return null;
      }
      var entities = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.listEntitiesByTags(['action']);
      var entity = entities.find(function (one) {
        return one.id === id;
      });
      var entityData = {
        id: entity.id,
        name: entity.name,
        description: entity.description,
        max: entity.getMaxLevel ? entity.getMaxLevel() : entity.maxLevel || 0,
        level: ((_this$actions$entity$3 = this.actions[entity.id]) === null || _this$actions$entity$3 === void 0 ? void 0 : _this$actions$entity$3.level) || 1,
        affordable: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getAffordable(entity.id),
        actionEffect: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEffects(entity.id, 0, ((_this$actions$entity$4 = this.actions[entity.id]) === null || _this$actions$entity$4 === void 0 ? void 0 : _this$actions$entity$4.level) || 1, true).filter(function (eff) {
          return eff.type === 'resources' || entity.attributes.isEffectChanneling;
        }),
        potentialEffects: this.packEffects(game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEffects(entity.id, 1, ((_this$actions$entity$5 = this.actions[entity.id]) === null || _this$actions$entity$5 === void 0 ? void 0 : _this$actions$entity$5.level) || 1, true), function (item) {
          return item.type === 'effects';
        }),
        currentEffects: this.packEffects(game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEffects(entity.id, 0, ((_this$actions$entity$6 = this.actions[entity.id]) === null || _this$actions$entity$6 === void 0 ? void 0 : _this$actions$entity$6.level) || 1, true), function (item) {
          return item.type === 'effects';
        }),
        xp: ((_this$actions$entity$7 = this.actions[entity.id]) === null || _this$actions$entity$7 === void 0 ? void 0 : _this$actions$entity$7.xp) || 0,
        maxXP: this.getActionXPMax(entity.id),
        isActive: this.isRunningAction(entity.id),
        xpRate: this.isRunningAction(entity.id) ? this.getLearningRate("runningAction_".concat(entity.id)) * this.isRunningAction(entity.id).effort : this.getLearningRate(entity.id, 1),
        isLeveled: (_this$actions$entity$8 = this.actions[entity.id]) === null || _this$actions$entity$8 === void 0 ? void 0 : _this$actions$entity$8.isLeveled,
        tags: entity.tags,
        primaryAttribute: (_entity$attributes = entity.attributes) !== null && _entity$attributes !== void 0 && _entity$attributes.primaryAttribute ? game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffect(entity.attributes.primaryAttribute) : null,
        primaryAttributeEffect: (_entity$attributes2 = entity.attributes) !== null && _entity$attributes2 !== void 0 && _entity$attributes2.primaryAttribute ? entity.getPrimaryEffect() : 1,
        isTraining: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getAttribute(entity.id, 'isTraining'),
        nextUnlock: entity.nextUnlock,
        timeInvested: ((_this$actions$entity$9 = this.actions[entity.id]) === null || _this$actions$entity$9 === void 0 ? void 0 : _this$actions$entity$9.timeInvested) || 0,
        xpEarned: ((_this$actions$entity$10 = this.actions[entity.id]) === null || _this$actions$entity$10 === void 0 ? void 0 : _this$actions$entity$10.xpEarned) || 0,
        etas: this.getEtas(entity.id),
        aspect: (_entity$attributes3 = entity.attributes) !== null && _entity$attributes3 !== void 0 && _entity$attributes3.primaryAttribute && game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getLevel('shop_item_aspects_focus') > 0 ? {
          intensity: entity.getIntensityAspect(),
          aspect: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEntity("".concat((_entity$attributes4 = entity.attributes) === null || _entity$attributes4 === void 0 ? void 0 : _entity$attributes4.primaryAttribute, "_aspect"))
        } : null,
        entityEfficiency: this.isRunningAction(entity.id) ? game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEntityEfficiency("runningAction_".concat(entity.id)) : 1
      };
      if (game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getAttribute(entity.id, 'isRankAvailable')) {
        var _this$actions$entity$11, _this$actions$entity$12, _this$actions$entity$13;
        var rankData = {
          rank: this.getActionRank(entity.id),
          nextRankLevel: 100 * Math.ceil((((_this$actions$entity$11 = this.actions[entity.id]) === null || _this$actions$entity$11 === void 0 ? void 0 : _this$actions$entity$11.level) + 1) / 100),
          prevRankLevel: 100 * Math.floor((((_this$actions$entity$12 = this.actions[entity.id]) === null || _this$actions$entity$12 === void 0 ? void 0 : _this$actions$entity$12.level) + 1) / 100)
        };
        rankData.progress = (((_this$actions$entity$13 = this.actions[entity.id]) === null || _this$actions$entity$13 === void 0 ? void 0 : _this$actions$entity$13.level) - rankData.prevRankLevel) / 100;
        rankData.bonus = this.getRankBonus(rankData.rank);
        entityData.rankData = rankData;
      }
      if (entityData.entityEfficiency < 1) {
        var _gameEntity$getEntity6;
        entityData.missingResource = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameResources.getResource((_gameEntity$getEntity6 = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEntity("runningAction_".concat(entity.id))) === null || _gameEntity$getEntity6 === void 0 || (_gameEntity$getEntity6 = _gameEntity$getEntity6.modifier) === null || _gameEntity$getEntity6 === void 0 ? void 0 : _gameEntity$getEntity6.bottleNeck);
      }
      return entityData;
    }
  }, {
    key: "getEffectFromRunningAction",
    value: function getEffectFromRunningAction(id) {
      var runningActions = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.listEntitiesByTags(['runningActions']);
      var results = [];
      runningActions.forEach(function (entity) {
        var effts = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEffects(entity.id);
        console.log('Queried effects: ', effts);
        var suitable = effts.filter(function (u) {
          return u.type === 'effects' && u.id === id;
        });
        // now that we have suitable action added - need to understand it inputs (effort, xpRate and so on...)

        results.push(suitable);
      });
      return results;
    }
  }, {
    key: "getAllActions",
    value: function getAllActions() {
      return game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.listEntitiesByTags(['action']).map(function (one) {
        return _objectSpread(_objectSpread({}, one), {}, {
          isUnlocked: one.isUnlocked && !one.isCapped
        });
      });
    }
  }, {
    key: "sendAllActions",
    value: function sendAllActions(payload) {
      var data = this.getAllActions();
      var label = 'all-actions';
      if (payload !== null && payload !== void 0 && payload.prefix) {
        label = "".concat(label, "-").concat(payload === null || payload === void 0 ? void 0 : payload.prefix);
      }
      this.eventHandler.sendData(label, data);
    }
  }, {
    key: "getAllActionTags",
    value: function getAllActionTags() {
      var allActions = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.listEntitiesByTags(['action']);
      var tagsByUnlocks = {};
      allActions.forEach(function (a) {
        a.tags.forEach(function (tag) {
          var _tagsByUnlocks$tag;
          tagsByUnlocks[tag] = {
            id: tag,
            name: tag,
            isUnlocked: ((_tagsByUnlocks$tag = tagsByUnlocks[tag]) === null || _tagsByUnlocks$tag === void 0 ? void 0 : _tagsByUnlocks$tag.isUnlocked) || a.isUnlocked && !a.isCapped
          };
        });
      });
      return Object.values(tagsByUnlocks);
    }
  }, {
    key: "sendAllActionTags",
    value: function sendAllActionTags(payload) {
      var data = this.getAllActionTags();
      var label = 'all-action-tags';
      if (payload !== null && payload !== void 0 && payload.prefix) {
        label = "".concat(label, "-").concat(payload === null || payload === void 0 ? void 0 : payload.prefix);
      }
      this.eventHandler.sendData(label, data);
    }
  }, {
    key: "sendActionsData",
    value: function sendActionsData(filterId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var data = this.getActionsData(filterId, options);
      this.eventHandler.sendData('actions-data', data);
    }
  }, {
    key: "sendActionDetails",
    value: function sendActionDetails(id) {
      var data = this.getActionData(id);
      this.eventHandler.sendData('action-details', data);
    }
  }, {
    key: "sendActionsUnlocks",
    value: function sendActionsUnlocks(showPrevious) {
      var data = this.getActionsUnlocks(showPrevious);
      this.eventHandler.sendData('actions-unlocks', data);
    }
  }]);
}(_shared_game_module__WEBPACK_IMPORTED_MODULE_1__.GameModule);

export { ActionsModule };
