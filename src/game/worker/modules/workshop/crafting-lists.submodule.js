import * as _shared_game_module__WEBPACK_IMPORTED_MODULE_0__ from '../../shared/game-module.js';
import * as game_framework__WEBPACK_IMPORTED_MODULE_1__ from '../../../framework/index.js';
import * as _shared_utils_rule_utils__WEBPACK_IMPORTED_MODULE_2__ from '../../shared/utils/rule-utils.js';
import * as _shared_utils_objects__WEBPACK_IMPORTED_MODULE_3__ from '../../shared/utils/objects.js';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
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




var CraftingListsSubmodule = /*#__PURE__*/function (_GameModule) {
  function CraftingListsSubmodule() {
    var _this;
    _classCallCheck(this, CraftingListsSubmodule);
    _this = _callSuper(this, CraftingListsSubmodule);
    _this.craftingLists = {};
    _this.runningList = {
      crafting: null,
      alchemy: null
    };
    _this.listsAutotrigger = {
      crafting: [],
      alchemy: []
    };
    _this.autotriggerCD = {
      crafting: 0,
      alchemy: 0
    };
    _this.automationEnabled = {
      crafting: false,
      alchemy: false
    };
    _this.combineLists = true;
    _this.autotriggerIntervalSetting = {
      crafting: 10,
      alchemy: 10
    };
    _this.eventHandler.registerHandler('save-crafting-list', function (payload) {
      _this.saveCraftingList(payload);
    });
    _this.eventHandler.registerHandler('delete-crafting-list', function (_ref) {
      var id = _ref.id;
      _this.deleteCraftingList(id);
    });
    _this.eventHandler.registerHandler('load-crafting-list', function (_ref2) {
      var id = _ref2.id;
      _this.sendListData(id);
    });
    _this.eventHandler.registerHandler('query-crafting-lists', function (pl) {
      var lists = _this.getLists(pl);
      var label = 'crafting-lists';
      if (pl.category) {
        label = "".concat(label, "-").concat(pl.category);
      }
      if (pl.prefix) {
        label = "".concat(label, "-").concat(pl.prefix);
      }
      _this.eventHandler.sendData(label, lists);
    });
    _this.eventHandler.registerHandler('query-all-crafting-lists', function (payload) {
      _this.sendAllCraftingLists(payload);
    });
    _this.eventHandler.registerHandler('run-crafting-list', function (_ref3) {
      var id = _ref3.id;
      console.log('Running List: ', id);
      _this.runList(id);
    });
    _this.eventHandler.registerHandler('stop-crafting-list', function (_ref4) {
      var category = _ref4.category;
      _this.stopList(category);
    });
    _this.eventHandler.registerHandler('set-crafting-automation-enabled', function (_ref5) {
      var category = _ref5.category,
        flag = _ref5.flag;
      _this.automationEnabled[category] = !!flag;
    });
    _this.eventHandler.registerHandler('set-crafting-autotrigger-interval', function (_ref6) {
      var category = _ref6.category,
        interval = _ref6.interval;
      _this.autotriggerIntervalSetting[category] = interval;
    });
    _this.eventHandler.registerHandler('query-crafting-list-effects', function (_ref7) {
      var id = _ref7.id,
        listData = _ref7.listData;
      var data = _this.getListEffects(null, listData);
      var prevEffects = [];
      var resourcesEffects = _this.packEffects(data.effects.filter(function (one) {
        return one.type === 'resources';
      }).map(function (effect) {
        var prev = game_framework__WEBPACK_IMPORTED_MODULE_1__.resourceCalculators.assertResource(effect.id, false, ['runningCrafting']);
        if (effect.scope !== 'income' && effect.scope !== 'consumption') return effect;
        var pScope = effect.scope === 'consumption' ? 'income' : effect.scope;
        var nPrv = _objectSpread(_objectSpread({}, effect), {}, {
          scope: pScope,
          value: prev.balance
        });
        if (nPrv.value < 0) {
          nPrv.value = Math.abs(nPrv.value);
          nPrv.scope = 'consumption';
        }
        prevEffects.push(nPrv);
        var newVal = (effect.scope === 'income' ? effect.value : -effect.value) + prev.balance;
        var nScope = newVal > 0 ? 'income' : 'consumption';
        return _objectSpread(_objectSpread({}, effect), {}, {
          value: Math.abs(newVal),
          scope: nScope
        });
      }));
      console.log('SendingData: ', JSON.stringify(data.effects.filter(function (one) {
        return one.type === 'effects';
      })), JSON.stringify(resourcesEffects), data.assumedDistribution, id);
      _this.eventHandler.sendData('crafting-list-effects', {
        potentialEffects: data.effects,
        resourcesEffects: resourcesEffects,
        prevEffects: _this.packEffects(prevEffects),
        effectEffects: data.effects.filter(function (one) {
          return one.type === 'effects';
        }),
        assumedDistribution: data.assumedDistribution
      });
    });
    return _this;
  }
  _inherits(CraftingListsSubmodule, _GameModule);
  return _createClass(CraftingListsSubmodule, [{
    key: "runList",
    value: function runList(id, cat) {
      if (!id) {
        if (!cat) {
          cat = this.craftingLists[id].category;
        }
        this.stopList(cat);
        return;
      }
      var category = cat !== null && cat !== void 0 ? cat : this.craftingLists[id].category;
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('crafting').stopAllCrafting(category);
      if (!this.runningList) {
        this.runningList = {};
      }
      this.runningList[category] = {
        id: id,
        name: this.craftingLists[id].name,
        actionIndex: 0,
        actionTimer: 0
      };
      var distributions = this.getRealListLevelsDistribution(id);
      distributions.forEach(function (item) {
        game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('crafting').setCraftingLevel({
          id: item.id,
          level: item.level,
          isForce: true
        });
      });
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('crafting').sendCraftingData({
        filterId: this.craftingLists[id].category
      });
    }
  }, {
    key: "stopList",
    value: function stopList(category) {
      this.runningList[category] = null;
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('crafting').stopAllCrafting(category);
    }
  }, {
    key: "saveCraftingList",
    value: function saveCraftingList(payload) {
      var _this$runningList, _this$runningList$cat;
      var isNew = !payload.id;
      var list = _objectSpread({}, payload);
      delete list['isReopenEdit'];
      var isReopenEdit = payload.isReopenEdit;
      if (!list.id) {
        list.id = "".concat(Math.random() * 1000000);
      }
      this.craftingLists[list.id] = list;
      if (isReopenEdit) {
        this.sendListData(list.id, true);
      }
      console.log('SavingList: ', list, this.craftingLists);
      this.regenerateListsPriorityMap();
      var category = list.category;
      if ((_this$runningList = this.runningList) !== null && _this$runningList !== void 0 && (_this$runningList = _this$runningList[category]) !== null && _this$runningList !== void 0 && _this$runningList.id && ((_this$runningList$cat = this.runningList[category]) === null || _this$runningList$cat === void 0 ? void 0 : _this$runningList$cat.id) === payload.id) {
        this.stopList(category);
        this.runList(payload.id, category);
      }
    }
  }, {
    key: "deleteCraftingList",
    value: function deleteCraftingList(id) {
      var _this$craftingLists$i, _this$runningList2;
      var category = (_this$craftingLists$i = this.craftingLists[id]) === null || _this$craftingLists$i === void 0 ? void 0 : _this$craftingLists$i.category;
      if (((_this$runningList2 = this.runningList) === null || _this$runningList2 === void 0 || (_this$runningList2 = _this$runningList2[category]) === null || _this$runningList2 === void 0 ? void 0 : _this$runningList2.id) === id) {
        this.stopList(category);
      }
      delete this.craftingLists[id];
      this.regenerateListsPriorityMap();
    }
  }, {
    key: "regenerateListsPriorityMap",
    value: function regenerateListsPriorityMap() {
      var listsBeingAutotrigger = Object.values(this.craftingLists).filter(function (one) {
        var _one$autotrigger;
        return !!((_one$autotrigger = one.autotrigger) !== null && _one$autotrigger !== void 0 && _one$autotrigger.isEnabled);
      });
      this.listsAutotrigger = {
        crafting: listsBeingAutotrigger.filter(function (one) {
          return one.category === 'crafting';
        }).map(function (one) {
          var _one$autotrigger$prio;
          return {
            id: one.id,
            priority: (_one$autotrigger$prio = one.autotrigger.priority) !== null && _one$autotrigger$prio !== void 0 ? _one$autotrigger$prio : 0
          };
        }).sort(function (a, b) {
          return a.priority - b.priority;
        }),
        alchemy: listsBeingAutotrigger.filter(function (one) {
          return one.category === 'alchemy';
        }).map(function (one) {
          var _one$autotrigger$prio2;
          return {
            id: one.id,
            priority: (_one$autotrigger$prio2 = one.autotrigger.priority) !== null && _one$autotrigger$prio2 !== void 0 ? _one$autotrigger$prio2 : 0
          };
        }).sort(function (a, b) {
          return a.priority - b.priority;
        })
      };
    }
  }, {
    key: "getLists",
    value: function getLists(pl) {
      var _this$runningList$pl$;
      var ls = Object.values(this.craftingLists).filter(function (one) {
        return one.category === pl.category;
      }).map(function (one) {
        return _objectSpread(_objectSpread({}, one), {}, {
          isUnlocked: true
        });
      });
      if (pl !== null && pl !== void 0 && pl.filterAutomated) {
        ls = ls.filter(function (one) {
          var _one$autotrigger2, _one$autotrigger3;
          return ((_one$autotrigger2 = one.autotrigger) === null || _one$autotrigger2 === void 0 || (_one$autotrigger2 = _one$autotrigger2.rules) === null || _one$autotrigger2 === void 0 ? void 0 : _one$autotrigger2.length) || ((_one$autotrigger3 = one.autotrigger) === null || _one$autotrigger3 === void 0 ? void 0 : _one$autotrigger3.isEnabled);
        });
      }
      return {
        lists: ls,
        runningList: (_this$runningList$pl$ = this.runningList[pl.category]) !== null && _this$runningList$pl$ !== void 0 && _this$runningList$pl$.id ? this.craftingLists[this.runningList[pl.category].id] : null,
        automationEnabled: this.automationEnabled[pl.category],
        autotriggerIntervalSetting: this.autotriggerIntervalSetting[pl.category]
      };
    }
  }, {
    key: "save",
    value: function save() {
      return {
        list: (0,_shared_utils_objects__WEBPACK_IMPORTED_MODULE_3__.mapObject)(this.craftingLists, function (one) {
          return {
            id: one.id,
            name: one.name,
            recipes: one.recipes,
            autotrigger: one.autotrigger,
            category: one.category
          };
        }),
        runningList: this.runningList,
        automationEnabled: this.automationEnabled,
        autotriggerIntervalSetting: this.autotriggerIntervalSetting
      };
    }
  }, {
    key: "load",
    value: function load(obj) {
      var _obj$list, _obj$runningList;
      this.craftingLists = (_obj$list = obj === null || obj === void 0 ? void 0 : obj.list) !== null && _obj$list !== void 0 ? _obj$list : [];
      this.runningList = (_obj$runningList = obj === null || obj === void 0 ? void 0 : obj.runningList) !== null && _obj$runningList !== void 0 ? _obj$runningList : {};
      this.automationEnabled = obj === null || obj === void 0 ? void 0 : obj.automationEnabled;
      this.autotriggerIntervalSetting = (obj === null || obj === void 0 ? void 0 : obj.autotriggerIntervalSetting) || 10;
      this.regenerateListsPriorityMap();
    }
  }, {
    key: "getAutotriggerList",
    value: function getAutotriggerList(cat) {
      var _iterator = _createForOfIteratorHelper(this.listsAutotrigger[cat]),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _this$craftingLists$l, _this$craftingLists$l2;
          var list = _step.value;
          if ((0,_shared_utils_rule_utils__WEBPACK_IMPORTED_MODULE_2__.checkMatchingRules)((_this$craftingLists$l = this.craftingLists[list.id]) === null || _this$craftingLists$l === void 0 || (_this$craftingLists$l = _this$craftingLists$l.autotrigger) === null || _this$craftingLists$l === void 0 ? void 0 : _this$craftingLists$l.rules, (_this$craftingLists$l2 = this.craftingLists[list.id]) === null || _this$craftingLists$l2 === void 0 || (_this$craftingLists$l2 = _this$craftingLists$l2.autotrigger) === null || _this$craftingLists$l2 === void 0 ? void 0 : _this$craftingLists$l2.pattern)) {
            return list.id;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return null;
    }
  }, {
    key: "tick",
    value: function tick(game, delta) {
      var _this2 = this;
      // Here we checking autotrigger
      ['crafting', 'alchemy'].forEach(function (cat) {
        if (!_this2.autotriggerCD) {
          _this2.autotriggerCD = {
            alchemy: 0,
            crafting: 0
          };
        }
        if (_this2.automationEnabled[cat] && _this2.listsAutotrigger[cat].length && _this2.autotriggerCD[cat] <= 0) {
          var _this2$runningList$ca;
          _this2.autotriggerCD[cat] = _this2.autotriggerIntervalSetting[cat] || 10;
          var autotrigger = _this2.getAutotriggerList(cat);
          if (autotrigger && ((_this2$runningList$ca = _this2.runningList[cat]) === null || _this2$runningList$ca === void 0 ? void 0 : _this2$runningList$ca.id) !== autotrigger) {
            var _this2$runningList$ca2;
            console.log('Run list autotrigger: ', autotrigger, (_this2$runningList$ca2 = _this2.runningList[cat]) === null || _this2$runningList$ca2 === void 0 ? void 0 : _this2$runningList$ca2.id, _this2.listsAutotrigger);
            _this2.runList(autotrigger, cat);
          }
        }
        _this2.autotriggerCD[cat] -= delta;
      });
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
    key: "sendListData",
    value: function sendListData(id) {
      var bForceOpen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var data = this.craftingLists[id];
      data.recipes = (data.recipes || []).map(function (a) {
        return _objectSpread(_objectSpread({}, a), {}, {
          isAvailable: game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.isEntityUnlocked(a.id) && !game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.isCapped(a.id)
        });
      });
      var _this$getListEffects = this.getListEffects(id),
        effects = _this$getListEffects.effects,
        assumedDistribution = _this$getListEffects.assumedDistribution;
      data.potentialEffects = effects;
      var resourcesEffects = data.potentialEffects.filter(function (one) {
        return one.type === 'resources';
      });
      data.effectEffects = data.potentialEffects.filter(function (one) {
        return one.type === 'effects';
      });
      var prevEffects = [];
      data.resourcesEffects = this.packEffects(resourcesEffects.map(function (effect) {
        var prev = game_framework__WEBPACK_IMPORTED_MODULE_1__.resourceCalculators.assertResource(effect.id, false, ['runningCrafting']);
        if (effect.scope !== 'income' && effect.scope !== 'consumption') return effect;
        var pScope = effect.scope === 'consumption' ? 'income' : effect.scope;
        var nPrv = _objectSpread(_objectSpread({}, effect), {}, {
          scope: pScope,
          value: prev.balance
        });
        if (nPrv.value < 0) {
          nPrv.value = Math.abs(nPrv.value);
          nPrv.scope = 'consumption';
        }
        console.log('Prv2: ', prev, effect, nPrv);
        prevEffects.push(nPrv);
        var newVal = (effect.scope === 'income' ? effect.value : -effect.value) + prev.balance;
        var nScope = newVal > 0 ? 'income' : 'consumption';
        return _objectSpread(_objectSpread({}, effect), {}, {
          value: Math.abs(newVal),
          scope: nScope
        });
      }));
      data.prevEffects = this.packEffects(prevEffects);
      data.bForceOpen = bForceOpen;
      data.assumedDistribution = assumedDistribution;

      // console.log('SendingData: ', JSON.stringify(data.prevEffects), JSON.stringify(data.resourcesEffects));

      this.eventHandler.sendData('crafting-list-data', data);
    }
  }, {
    key: "getRealListLevelsDistribution",
    value: function getRealListLevelsDistribution(id, listData) {
      var list = id ? this.craftingLists[id] : _objectSpread({}, listData);
      var maxSlots = 0;
      var possibleEntities = [];
      if (list.category === 'crafting') {
        maxSlots = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.getResource('crafting_slots').income;
        possibleEntities = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.listEntitiesByTags(['crafting', 'material']);
      }
      if (list.category === 'alchemy') {
        maxSlots = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.getResource('alchemy_slots').income;
        possibleEntities = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.listEntitiesByTags(['crafting', 'alchemy']);
      }
      if (!maxSlots || !possibleEntities) return [];
      var distribution = list === null || list === void 0 ? void 0 : list.recipes;
      if (!distribution) return [];
      var possibleIds = new Set(possibleEntities.map(function (_ref8) {
        var id = _ref8.id;
        return id;
      }));

      // Filter valid distribution entries and normalize percentages
      var validDistribution = distribution.filter(function (_ref9) {
        var id = _ref9.id;
        return possibleIds.has(id);
      }).map(function (entry) {
        return _objectSpread(_objectSpread({}, entry), {}, {
          percentage: entry.percentage / distribution.reduce(function (sum, _ref10) {
            var percentage = _ref10.percentage;
            return sum + percentage;
          }, 0)
        });
      });
      var remainingSlots = maxSlots;
      var result = [];

      // First pass: Allocate minimum slots
      var _iterator2 = _createForOfIteratorHelper(validDistribution),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _entry = _step2.value;
          var _id = _entry.id,
            min = _entry.min;
          var allocated = Math.min(min !== null && min !== void 0 ? min : 0, remainingSlots);
          result.push({
            id: _id,
            level: allocated
          });
          remainingSlots -= allocated;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      console.log("AfterFisrt (".concat(remainingSlots, " of ").concat(maxSlots, ")"), result);

      // Second pass: Allocate slots based on percentage and constraints
      // Другий прохід: обчислюємо idealTotal і збираємо інформацію для третього
      var leftovers = [];
      var _loop = function _loop() {
        var entry = _result[_i];
        var original = validDistribution.find(function (_ref11) {
          var id = _ref11.id;
          return id === entry.id;
        });
        var max = original.max,
          percentage = original.percentage;
        var exactIdeal = maxSlots * percentage;
        var floorIdeal = Math.floor(exactIdeal);
        var currentLevel = entry.level;
        var desiredAdditional = floorIdeal - currentLevel;
        if (remainingSlots <= 0) return 1; // continue
        var allowedAdditional = Math.max(0, Math.min(desiredAdditional, max ? max - currentLevel : Infinity, remainingSlots));
        entry.level += allowedAdditional;
        remainingSlots -= allowedAdditional;
        var fraction = exactIdeal - floorIdeal;
        leftovers.push({
          entry: entry,
          fraction: fraction,
          max: max
        });
      };
      for (var _i = 0, _result = result; _i < _result.length; _i++) {
        if (_loop()) continue;
      }
      console.log("AfterSecond (".concat(remainingSlots, " of ").concat(maxSlots, ")"), result);
      if (remainingSlots > 0) {
        // Сортуємо від найбільшого дробового залишку до найменшого
        leftovers.sort(function (a, b) {
          return b.fraction - a.fraction;
        });
        var _iterator3 = _createForOfIteratorHelper(leftovers),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _step3$value = _step3.value,
              entry = _step3$value.entry,
              max = _step3$value.max,
              fraction = _step3$value.fraction;
            if (remainingSlots <= 0) break;
            var currentLevel = entry.level;
            var canAdd = max ? max - currentLevel : Infinity;
            if (canAdd <= 0) continue;
            entry.level += 1;
            remainingSlots -= 1;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      console.log("AfterThird (".concat(remainingSlots, " of ").concat(maxSlots, ")"), result);
      result = result.filter(function (one) {
        return one.level > 0;
      });
      console.log('distributed: ', maxSlots, result, leftovers);
      return result;
    }
  }, {
    key: "getListEffects",
    value: function getListEffects(id, listData) {
      var list = this.craftingLists[id];
      if (!list) {
        if (!listData) {
          throw new Error("List with id ".concat(id, " not found"));
        }
        list = listData;
      }
      var assumedDistribution = this.getRealListLevelsDistribution(id, listData);
      var totalEffects = [];

      // attempt to get effects for every item according to distributions
      assumedDistribution.forEach(function (distribution) {
        var effects = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getEffects(distribution.id, 0, distribution.level, true);
        effects.forEach(function (effToAdd) {
          var foundId = totalEffects.findIndex(function (a) {
            return a.id === effToAdd.id && (a.scope === effToAdd.scope || ['income', 'consumption'].includes(a.scope) && ['income', 'consumption'].includes(effToAdd.scope));
          });
          if (effToAdd.scope === 'income' && effToAdd.type === 'resources') {
            effToAdd.value *= game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.getResource(effToAdd.id).multiplier;
          }
          if (effToAdd.scope === 'multiplier' && effToAdd.type === 'effects') {
            // we actually adding multiplier
            effToAdd.value *= learnRateFactor;
          }
          if (effToAdd.scope === 'income' && effToAdd.type === 'effects') {
            effToAdd.value *= learnRateFactor;
          }
          if (foundId < 0) {
            totalEffects.push(effToAdd);
          } else {
            if (totalEffects[foundId].scope === 'consumption') {
              totalEffects[foundId].scope = 'income';
              totalEffects[foundId].value = -totalEffects[foundId].value;
            }
            if (effToAdd.scope === 'consumption') {
              totalEffects[foundId].value -= effToAdd.value;
            } else {
              totalEffects[foundId].value += effToAdd.value;
            }
          }
        });
      });
      return {
        effects: totalEffects.map(function (eff) {
          return eff.scope === 'income' && eff.value < 0 ? _objectSpread(_objectSpread({}, eff), {}, {
            scope: 'consumption',
            value: -eff.value
          }) : eff;
        }),
        assumedDistribution: assumedDistribution
      };
    }
  }, {
    key: "getAllCraftingLists",
    value: function getAllCraftingLists() {
      var items = Object.values(this.craftingLists);
      return items.map(function (craft) {
        return _objectSpread(_objectSpread({}, craft), {}, {
          isUnlocked: true
        });
      });
    }
  }, {
    key: "sendAllCraftingLists",
    value: function sendAllCraftingLists(payload) {
      var data = this.getAllCraftingLists();
      var label = 'all-crafting-lists';
      if (payload !== null && payload !== void 0 && payload.prefix) {
        label = "".concat(label, "-").concat(payload === null || payload === void 0 ? void 0 : payload.prefix);
      }
      this.eventHandler.sendData(label, data);
    }
  }]);
}(_shared_game_module__WEBPACK_IMPORTED_MODULE_0__.GameModule);

export { CraftingListsSubmodule };
