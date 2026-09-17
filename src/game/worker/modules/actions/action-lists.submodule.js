import * as _shared_game_module__WEBPACK_IMPORTED_MODULE_0__ from '../../shared/game-module.js';
import * as game_framework__WEBPACK_IMPORTED_MODULE_1__ from '../../../framework/index.js';
import * as _shared_utils_rule_utils__WEBPACK_IMPORTED_MODULE_2__ from '../../shared/utils/rule-utils.js';
import * as _shared_utils_objects__WEBPACK_IMPORTED_MODULE_3__ from '../../shared/utils/objects.js';
import * as game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_4__ from '../../../framework/src/utils/consts.js';

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





var ActionListsSubmodule = /*#__PURE__*/function (_GameModule) {
  function ActionListsSubmodule() {
    var _this;
    _classCallCheck(this, ActionListsSubmodule);
    _this = _callSuper(this, ActionListsSubmodule);
    _this.actionsLists = {};
    _this.runningList = null;
    _this.listsAutotrigger = [];
    _this.autotriggerCD = 0;
    _this.automationEnabled = false;
    _this.combineLists = true;
    _this.autotriggerIntervalSetting = 10;
    _this.eventHandler.registerHandler('save-action-list', function (payload) {
      _this.saveActionList(payload);
    });
    _this.eventHandler.registerHandler('delete-action-list', function (_ref) {
      var id = _ref.id;
      _this.deleteActionList(id);
    });
    _this.eventHandler.registerHandler('load-action-list', function (_ref2) {
      var id = _ref2.id;
      _this.sendListData(id);
    });
    _this.eventHandler.registerHandler('query-actions-lists', function (pl) {
      var lists = _this.getLists(pl);
      var label = 'actions-lists';
      if (pl.prefix) {
        label = "".concat(label, "-").concat(pl.prefix);
      }
      _this.eventHandler.sendData(label, lists);
    });
    _this.eventHandler.registerHandler('run-list', function (_ref3) {
      var id = _ref3.id;
      _this.runList(id);
    });
    _this.eventHandler.registerHandler('stop-list', function (_ref4) {
      var id = _ref4.id;
      _this.stopList(id);
    });
    _this.eventHandler.registerHandler('set-automation-enabled', function (_ref5) {
      var flag = _ref5.flag;
      _this.automationEnabled = !!flag;
    });
    _this.eventHandler.registerHandler('set-autotrigger-interval', function (_ref6) {
      var interval = _ref6.interval;
      _this.autotriggerIntervalSetting = interval;
    });
    _this.eventHandler.registerHandler('set-action-lists-order', function (payload) {
      _this.reorderLists(payload);
    });
    _this.eventHandler.registerHandler('query-action-list-effects', function (_ref7) {
      var id = _ref7.id,
        listData = _ref7.listData;
      var data = _this.getListEffects(null, listData);
      var prevEffects = [];
      var resourcesEffects = _this.packEffects(data.filter(function (one) {
        return one.type === 'resources';
      }).map(function (effect) {
        var prev = game_framework__WEBPACK_IMPORTED_MODULE_1__.resourceCalculators.assertResource(effect.id, false, ['runningActions']);
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

      // console.log('SendingData: ', JSON.stringify(data.prevEffects), JSON.stringify(data.resourcesEffects), data, id);

      var proportionsBar = _this.getProportionsBar(listData);
      _this.eventHandler.sendData('action-list-effects', {
        potentialEffects: data,
        resourcesEffects: resourcesEffects,
        prevEffects: _this.packEffects(prevEffects),
        effectEffects: data.filter(function (one) {
          return one.type === 'effects';
        }),
        proportionsBar: proportionsBar
      });
    });
    return _this;
  }
  _inherits(ActionListsSubmodule, _GameModule);
  return _createClass(ActionListsSubmodule, [{
    key: "runList",
    value: function runList(id) {
      if (!id) {
        this.stopList();
        return;
      }
      this.runningList = {
        id: id,
        name: this.actionsLists[id].name,
        actionIndex: 0,
        actionTimer: 0
      };
      if (this.combineLists) {
        // register entity as custom action
        this.runCombinedList(id);
      }
    }
  }, {
    key: "stopList",
    value: function stopList() {
      this.runningList = null;
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('actions').stopRunningActions();
    }
  }, {
    key: "saveActionList",
    value: function saveActionList(payload) {
      var _this$runningList, _this$runningList2;
      var isNew = !payload.id;
      var list = _objectSpread({}, payload);
      delete list['isReopenEdit'];
      var isReopenEdit = payload.isReopenEdit;
      if (!list.id) {
        list.id = "".concat(Math.random() * 1000000);
      }
      this.actionsLists[list.id] = list;
      this.actionsLists[list.id].actions = (this.actionsLists[list.id].actions || []).filter(function (one) {
        return one.time > 0;
      });
      if (isReopenEdit) {
        this.sendListData(list.id, true);
      }
      this.sortLists();
      this.regenerateListsPriorityMap();
      if ((_this$runningList = this.runningList) !== null && _this$runningList !== void 0 && _this$runningList.id && ((_this$runningList2 = this.runningList) === null || _this$runningList2 === void 0 ? void 0 : _this$runningList2.id) === payload.id) {
        var listToRun = this.actionsLists[this.runningList.id];
        var newTotalTime = 0.;
        listToRun.actions.forEach(function (a) {
          var isAvailable = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.isEntityUnlocked(a.id) && !game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.isCapped(a.id);
          if (isAvailable) {
            newTotalTime += a.time;
          }
        });
        game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('actions').activeActions = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('actions').activeActions.map(function (active) {
          var _listToRun$actions$fi;
          return _objectSpread(_objectSpread({}, active), {}, {
            effort: (((_listToRun$actions$fi = listToRun.actions.find(function (o) {
              return o.id === active.originalId;
            })) === null || _listToRun$actions$fi === void 0 ? void 0 : _listToRun$actions$fi.time) || 0) / Math.max(newTotalTime, 0.0001)
          });
        });
        console.log('Reassert list onSave: ', newTotalTime, game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('actions').activeActions);
        game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('actions').reassertRunningEfforts(true);
      }
    }
  }, {
    key: "deleteActionList",
    value: function deleteActionList(id) {
      var _this$runningList3;
      if (((_this$runningList3 = this.runningList) === null || _this$runningList3 === void 0 ? void 0 : _this$runningList3.id) === id) {
        this.stopList();
      }
      delete this.actionsLists[id];
      this.sortLists();
      this.regenerateListsPriorityMap();
    }
  }, {
    key: "regenerateListsPriorityMap",
    value: function regenerateListsPriorityMap() {
      var listsBeingAutotrigger = Object.values(this.actionsLists).filter(function (one) {
        var _one$autotrigger;
        return !!((_one$autotrigger = one.autotrigger) !== null && _one$autotrigger !== void 0 && _one$autotrigger.isEnabled);
      });
      var listsBeingAutotriggerAvailable = listsBeingAutotrigger.filter(function (lst) {
        if (lst.actions && lst.actions.find(function (one) {
          return game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.isEntityUnlocked(one.id) && !game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.isCapped(one.id);
        })) return true;
        return false;
      });
      console.log('regenerateListPriority: ', listsBeingAutotrigger, listsBeingAutotriggerAvailable);
      this.listsAutotrigger = listsBeingAutotriggerAvailable.map(function (one) {
        var _one$autotrigger$prio;
        return {
          id: one.id,
          priority: (_one$autotrigger$prio = one.autotrigger.priority) !== null && _one$autotrigger$prio !== void 0 ? _one$autotrigger$prio : 0
        };
      }).sort(function (a, b) {
        return a.priority - b.priority;
      });
    }
  }, {
    key: "reorderLists",
    value: function reorderLists(newOrder) {
      var _this2 = this;
      newOrder.forEach(function (_ref8) {
        var id = _ref8.id,
          sort = _ref8.sort;
        if (_this2.actionsLists[id]) {
          _this2.actionsLists[id].sort = sort;
        }
      });
      console.log('newOrder: ', newOrder);
      this.sortLists(); // Re-sort the cached list
    }
  }, {
    key: "sortLists",
    value: function sortLists() {
      this._cachedSortedLists = Object.values(this.actionsLists).sort(function (a, b) {
        return a.sort - b.sort;
      });
    }
  }, {
    key: "getLists",
    value: function getLists(pl) {
      if (!this._cachedSortedLists) {
        this.sortLists();
      }
      var ls = this._cachedSortedLists.map(function (one) {
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
      return ls;
    }
  }, {
    key: "save",
    value: function save() {
      return {
        list: (0,_shared_utils_objects__WEBPACK_IMPORTED_MODULE_3__.mapObject)(this.actionsLists, function (one) {
          return {
            id: one.id,
            name: one.name,
            sort: one.sort,
            actions: one.actions,
            autotrigger: one.autotrigger
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
      this.actionsLists = (_obj$list = obj === null || obj === void 0 ? void 0 : obj.list) !== null && _obj$list !== void 0 ? _obj$list : [];
      this.runningList = (_obj$runningList = obj === null || obj === void 0 ? void 0 : obj.runningList) !== null && _obj$runningList !== void 0 ? _obj$runningList : null;
      this.automationEnabled = obj === null || obj === void 0 ? void 0 : obj.automationEnabled;
      this.autotriggerIntervalSetting = (obj === null || obj === void 0 ? void 0 : obj.autotriggerIntervalSetting) || 10;
      if (this.actionsLists) {
        for (var key in this.actionsLists) {
          this.actionsLists[key].actions = (this.actionsLists[key].actions || []).filter(function (one) {
            return one.time > 0;
          });
        }
      }
      this.sortLists();
      this.regenerateListsPriorityMap();
    }
  }, {
    key: "getAutotriggerList",
    value: function getAutotriggerList() {
      var _iterator = _createForOfIteratorHelper(this.listsAutotrigger),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _this$actionsLists$li, _this$actionsLists$li2;
          var list = _step.value;
          if ((0,_shared_utils_rule_utils__WEBPACK_IMPORTED_MODULE_2__.checkMatchingRules)((_this$actionsLists$li = this.actionsLists[list.id]) === null || _this$actionsLists$li === void 0 || (_this$actionsLists$li = _this$actionsLists$li.autotrigger) === null || _this$actionsLists$li === void 0 ? void 0 : _this$actionsLists$li.rules, (_this$actionsLists$li2 = this.actionsLists[list.id]) === null || _this$actionsLists$li2 === void 0 || (_this$actionsLists$li2 = _this$actionsLists$li2.autotrigger) === null || _this$actionsLists$li2 === void 0 ? void 0 : _this$actionsLists$li2.pattern)) {
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
      // Here we checking autotrigger
      if (this.automationEnabled && this.listsAutotrigger.length && this.autotriggerCD <= 0) {
        var _this$runningList4;
        this.autotriggerCD = this.autotriggerIntervalSetting || 10;
        var autotrigger = this.getAutotriggerList();
        if (autotrigger && ((_this$runningList4 = this.runningList) === null || _this$runningList4 === void 0 ? void 0 : _this$runningList4.id) !== autotrigger) {
          var _this$runningList5;
          console.log('Run list autotrigger: ', autotrigger, (_this$runningList5 = this.runningList) === null || _this$runningList5 === void 0 ? void 0 : _this$runningList5.id, this.listsAutotrigger);
          this.runList(autotrigger);
        }
      }
      this.autotriggerCD -= delta;
      if (this.runningList && !this.combineLists) {
        var _action;
        var listToRun = this.actionsLists[this.runningList.id];
        if (!listToRun) {
          console.error('List: ', this.actionsLists, this.runningList);
          throw new Error('Invalid list to run!!');
        }
        var action = listToRun.actions[this.runningList.actionIndex];
        var isAvailable = ((_action = action) === null || _action === void 0 ? void 0 : _action.id) && game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.isEntityUnlocked(action.id) && !game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.isCapped(action.id);

        // Check if action timer exceeded or action is not available
        if (!action || this.runningList.actionTimer > action.time || !isAvailable) {
          this.runningList.actionTimer = 0;

          // Initialize loop control variables
          var loops = 0;
          var maxLoops = listToRun.actions.length;

          // Loop to find the next available action
          do {
            this.runningList.actionIndex++;
            if (this.runningList.actionIndex >= listToRun.actions.length) {
              this.runningList.actionIndex = 0; // Reset to start if end is reached
            }
            action = listToRun.actions[this.runningList.actionIndex];
            isAvailable = action && game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.isEntityUnlocked(action.id) && !game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.isCapped(action.id);
            loops++;
          } while (!isAvailable && loops < maxLoops);
          if (!isAvailable) {
            // No available actions found in the list
            console.log('No available actions in the list.');
            // Handle this case as needed, e.g., stop the running list
            this.stopList();
            game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('actions').setRunningAction(null);
            return; // Exit the function early
          } else {
            console.log('Toggled to:', this.runningList, action.id, delta);
          }
        }

        // Set the active action if it's not already active
        if (game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('actions').activeAction !== action.id) {
          game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('actions').setRunningAction(action.id);
        }

        // Increment the action timer
        this.runningList.actionTimer += delta;
      }
      if (this.runningList && this.combineLists) {
        // include available notpresent
        var _listToRun = this.actionsLists[this.runningList.id];
        if (!_listToRun) {
          console.error('List: ', this.actionsLists, this.runningList);
          throw new Error('Invalid list to run');
        }
        var totalTime = _listToRun.actions.reduce(function (acc, item) {
          return acc += item.time;
        }, 0);
        var needReassert = false;
        var newTotalTime = 0.;
        _listToRun.actions.forEach(function (a) {
          var isAvailable = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.isEntityUnlocked(a.id) && !game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.isCapped(a.id);
          if (isAvailable) {
            newTotalTime += a.time;
          }
          if (!isAvailable && game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('actions').isRunningAction(a.id)) {
            game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('actions').dropRunningAction(a.id);
            needReassert = true;
          }
          if (!game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('actions').isRunningAction(a.id) && isAvailable) {
            game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('actions').addRunningAction(a.id, a.time / totalTime);
            needReassert = true;
          }
        });
        var activeActions = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('actions').activeActions;
        activeActions.forEach(function (active) {
          if (!_listToRun.actions.find(function (o) {
            return o.id === active.originalId;
          })) {
            game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('actions').dropRunningAction(active.originalId);
            needReassert = true;
          }
        });
        if (needReassert) {
          game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('actions').activeActions = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('actions').activeActions.map(function (active) {
            var _listToRun$actions$fi2;
            return _objectSpread(_objectSpread({}, active), {}, {
              effort: (((_listToRun$actions$fi2 = _listToRun.actions.find(function (o) {
                return o.id === active.originalId;
              })) === null || _listToRun$actions$fi2 === void 0 ? void 0 : _listToRun$actions$fi2.time) || 0) / newTotalTime
            });
          });
          console.log('Reassert list: ', needReassert, newTotalTime, totalTime, game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('actions').activeActions);
          game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('actions').reassertRunningEfforts();
        }
      }
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
    key: "runCombinedList",
    value: function runCombinedList(id) {
      var data = this.actionsLists[id];
      var actionsAvailable = (data.actions || []).map(function (a) {
        return _objectSpread(_objectSpread({}, a), {}, {
          isAvailable: game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.isEntityUnlocked(a.id) && !game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.isCapped(a.id)
        });
      });
      var totalTime = actionsAvailable.filter(function (action) {
        return game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.isEntityUnlocked(action.id) && !game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.isCapped(action.id);
      }).reduce(function (acc, item) {
        return acc += item.time;
      }, 0);
      var actionsFractions = actionsAvailable.map(function (action) {
        return _objectSpread(_objectSpread({}, action), {}, {
          effortFraction: action.time / Math.max(totalTime, 0.0001)
        });
      });

      // now registering entities for every action
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('actions').stopRunningActions();
      actionsFractions.forEach(function (actionToRun) {
        game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('actions').addRunningAction(actionToRun.id, actionToRun.effortFraction);
      });
    }
  }, {
    key: "sendListData",
    value: function sendListData(id) {
      var bForceOpen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var data = this.actionsLists[id];
      data.actions = (data.actions || []).map(function (a) {
        return _objectSpread(_objectSpread({}, a), {}, {
          isAvailable: game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.isEntityUnlocked(a.id) && !game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.isCapped(a.id)
        });
      });
      data.potentialEffects = this.getListEffects(id);
      var resourcesEffects = data.potentialEffects.filter(function (one) {
        return one.type === 'resources';
      });
      data.effectEffects = data.potentialEffects.filter(function (one) {
        return one.type === 'effects';
      });
      var prevEffects = [];
      data.resourcesEffects = this.packEffects(resourcesEffects.map(function (effect) {
        var prev = game_framework__WEBPACK_IMPORTED_MODULE_1__.resourceCalculators.assertResource(effect.id, false, ['runningActions']);
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
      var proportionsBar = this.getProportionsBar(data);
      data.prevEffects = this.packEffects(prevEffects);
      data.proportionsBar = proportionsBar;
      data.bForceOpen = bForceOpen;

      // console.log('SendingData: ', JSON.stringify(data.prevEffects), JSON.stringify(data.resourcesEffects));

      this.eventHandler.sendData('action-list-data', data);
    }
  }, {
    key: "getProportionsBar",
    value: function getProportionsBar(data) {
      var total = data.actions.reduce(function (acc, a) {
        return acc += Math.max(0, a.time);
      }, 0);
      var actions = data.actions.map(function (one) {
        return _objectSpread(_objectSpread({}, one), {}, {
          time: Math.max(0, one.time)
        });
      });
      if (total <= game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_4__.SMALL_NUMBER) return [];
      var generateColor = function generateColor(index, totalActions) {
        // Use HSL to generate deterministic colors based on the index
        var hue = index * 360 / totalActions % 360; // Spread hues evenly
        var saturation = 65; // Fixed saturation for consistency
        var lightness = 70; // Fixed lightness for consistency
        return "hsl(".concat(hue, ", ").concat(saturation, "%, ").concat(lightness, "%)");
      };
      var rawPercentages = actions.map(function (a) {
        return a.time / total;
      });
      var minimumPercentage = 0.01;
      var totalMinimum = minimumPercentage * actions.length;
      var normalizeFactor = (1 - totalMinimum) / rawPercentages.reduce(function (acc, p) {
        return acc + Math.max(p - minimumPercentage, 0);
      }, 0);
      return actions.map(function (a, index) {
        var percentage = a.time / total;
        var displayPercentage = percentage < minimumPercentage ? minimumPercentage : (percentage - minimumPercentage) * normalizeFactor + minimumPercentage;
        return {
          id: a.id,
          name: a.name,
          percentage: percentage,
          displayPercentage: "".concat(displayPercentage * 100, "%"),
          color: generateColor(index, actions.length)
        };
      });
    }
  }, {
    key: "getListEffects",
    value: function getListEffects(id, listData) {
      var list = this.actionsLists[id];
      if (!list) {
        if (!listData) {
          throw new Error("List with id ".concat(id, " not found"));
        }
        list = listData;
      }
      var totalTime = list.actions.filter(function (action) {
        return game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.isEntityUnlocked(action.id) && !game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.isCapped(action.id);
      }).reduce(function (acc, item) {
        return acc += item.time;
      }, 0);
      var totalEffects = [];
      list.actions.forEach(function (action) {
        var isAvailable = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.isEntityUnlocked(action.id) && !game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.isCapped(action.id);
        if (!isAvailable) {
          return;
        }
        var isEffectChanneling = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getAttribute(action.id, 'isEffectChanneling', false);
        var effects = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getEffects(action.id, game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getAttribute(action.id, 'isTraining') ? 1 : 0, game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getAttribute(action.id, 'isTraining') ? 1 : game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getLevel(action.id), true, action.time / totalTime);
        var learnRateFactor = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('actions').getLearningRate(action.id) / game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('actions').getActionXPMax(action.id);
        effects.forEach(function (effToAdd) {
          var foundId = totalEffects.findIndex(function (a) {
            return a.id === effToAdd.id && (a.scope === effToAdd.scope || ['income', 'consumption'].includes(a.scope) && ['income', 'consumption'].includes(effToAdd.scope));
          });
          if (effToAdd.scope === 'income' && effToAdd.type === 'resources') {
            effToAdd.value *= game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.getResource(effToAdd.id).multiplier;
          }
          if (effToAdd.scope === 'multiplier' && effToAdd.type === 'effects' && !isEffectChanneling) {
            // we actually adding multiplier
            effToAdd.value *= learnRateFactor;
          }
          if (effToAdd.scope === 'income' && effToAdd.type === 'effects' && !isEffectChanneling) {
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
      return totalEffects.map(function (eff) {
        return eff.scope === 'income' && eff.value < 0 ? _objectSpread(_objectSpread({}, eff), {}, {
          scope: 'consumption',
          value: -eff.value
        }) : eff;
      });
    }
  }]);
}(_shared_game_module__WEBPACK_IMPORTED_MODULE_0__.GameModule);

export { ActionListsSubmodule };
