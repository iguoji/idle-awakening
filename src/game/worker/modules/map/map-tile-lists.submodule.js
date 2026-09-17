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





var MapTileListsSubmodule = /*#__PURE__*/function (_GameModule) {
  function MapTileListsSubmodule() {
    var _this;
    _classCallCheck(this, MapTileListsSubmodule);
    _this = _callSuper(this, MapTileListsSubmodule);
    _this.mapLists = {};
    _this.runningList = null;
    _this.listsAutotrigger = [];
    _this.autotriggerCD = 0;
    _this.automationEnabled = false;
    _this.combineLists = true;
    _this.autotriggerIntervalSetting = 10;
    _this.eventHandler.registerHandler('save-map-tile-list', function (payload) {
      _this.saveMapTilesList(payload);
    });
    _this.eventHandler.registerHandler('delete-map-tile-list', function (_ref) {
      var id = _ref.id;
      _this.deleteMapTilesList(id);
    });
    _this.eventHandler.registerHandler('load-map-tile-list', function (_ref2) {
      var id = _ref2.id;
      _this.sendListData(id);
    });
    _this.eventHandler.registerHandler('query-map-tile-lists', function (pl) {
      var lists = _this.getLists(pl);
      _this.eventHandler.sendData('map-tile-lists', lists);
    });
    _this.eventHandler.registerHandler('run-map-tile-list', function (_ref3) {
      var id = _ref3.id;
      _this.runList(id);
    });
    _this.eventHandler.registerHandler('stop-map-tile-list', function (_ref4) {
      var id = _ref4.id;
      _this.stopList(id);
    });
    _this.eventHandler.registerHandler('set-map-automation-enabled', function (_ref5) {
      var flag = _ref5.flag;
      _this.automationEnabled = !!flag;
    });
    _this.eventHandler.registerHandler('set-map-autotrigger-interval', function (_ref6) {
      var interval = _ref6.interval;
      _this.autotriggerIntervalSetting = interval;
    });
    _this.eventHandler.registerHandler('query-map-tile-list-effects', function (_ref7) {
      var id = _ref7.id,
        listData = _ref7.listData;
      var potentialDrops = _this.getListEffects(null, listData);
      var costs = _this.getListCosts(null, listData);
      var proportionsBar = _this.getProportionsBar(listData);
      _this.eventHandler.sendData('map-tile-list-effects', {
        id: id,
        potentialDrops: potentialDrops,
        costs: costs,
        proportionsBar: proportionsBar
      });
    });
    return _this;
  }
  _inherits(MapTileListsSubmodule, _GameModule);
  return _createClass(MapTileListsSubmodule, [{
    key: "runList",
    value: function runList(id) {
      if (!id) {
        this.stopList();
        return;
      }
      this.runningList = {
        id: id,
        name: this.mapLists[id].name,
        actionIndex: 0,
        actionTimer: 0
      };
      this.runCombinedList(id);
    }
  }, {
    key: "stopList",
    value: function stopList() {
      this.runningList = null;
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('map').stopRunningTiles();
    }
  }, {
    key: "saveMapTilesList",
    value: function saveMapTilesList(payload) {
      var _this$runningList, _this$runningList2;
      var isNew = !payload.id;
      var list = _objectSpread({}, payload);
      delete list['isReopenEdit'];
      var isReopenEdit = payload.isReopenEdit;
      if (!list.id) {
        list.id = "".concat(Math.random() * 1000000);
      }
      if (list.autotriggerCD && !list.autotrigger.priority) {
        list.autotrigger.priority = 0;
      }
      this.mapLists[list.id] = list;
      this.mapLists[list.id].tiles = (this.mapLists[list.id].tiles || []).filter(function (one) {
        return one.time > 0;
      });

      // console.log('Saved List: ', list, payload);

      if (isReopenEdit) {
        this.sendListData(list.id, true);
      }
      this.regenerateListsPriorityMap();
      if ((_this$runningList = this.runningList) !== null && _this$runningList !== void 0 && _this$runningList.id && ((_this$runningList2 = this.runningList) === null || _this$runningList2 === void 0 ? void 0 : _this$runningList2.id) === payload.id) {
        var listToRun = this.mapLists[this.runningList.id];
        this.runList(this.runningList.id);
      }
    }
  }, {
    key: "deleteMapTilesList",
    value: function deleteMapTilesList(id) {
      var _this$runningList3;
      if (((_this$runningList3 = this.runningList) === null || _this$runningList3 === void 0 ? void 0 : _this$runningList3.id) === id) {
        this.stopList(id);
      }
      delete this.mapLists[id];
      this.regenerateListsPriorityMap();
    }
  }, {
    key: "regenerateListsPriorityMap",
    value: function regenerateListsPriorityMap() {
      var listsBeingAutotrigger = Object.values(this.mapLists).filter(function (one) {
        var _one$autotrigger;
        return !!((_one$autotrigger = one.autotrigger) !== null && _one$autotrigger !== void 0 && _one$autotrigger.isEnabled);
      });
      this.listsAutotrigger = listsBeingAutotrigger.map(function (one) {
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
    key: "getLists",
    value: function getLists(pl) {
      var _this$runningList4;
      var ls = Object.values(this.mapLists);
      if (pl !== null && pl !== void 0 && pl.filterAutomated) {
        ls = ls.filter(function (one) {
          var _one$autotrigger2, _one$autotrigger3;
          return ((_one$autotrigger2 = one.autotrigger) === null || _one$autotrigger2 === void 0 || (_one$autotrigger2 = _one$autotrigger2.rules) === null || _one$autotrigger2 === void 0 ? void 0 : _one$autotrigger2.length) || ((_one$autotrigger3 = one.autotrigger) === null || _one$autotrigger3 === void 0 ? void 0 : _one$autotrigger3.isEnabled);
        });
      }
      return {
        lists: ls,
        runningList: (_this$runningList4 = this.runningList) !== null && _this$runningList4 !== void 0 && _this$runningList4.id ? this.mapLists[this.runningList.id] : null,
        automationEnabled: this.automationEnabled,
        autotriggerIntervalSetting: this.autotriggerIntervalSetting,
        automationUnlocked: game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getLevel('shop_item_planner') > 0
      };
    }
  }, {
    key: "save",
    value: function save() {
      return {
        list: (0,_shared_utils_objects__WEBPACK_IMPORTED_MODULE_3__.mapObject)(this.mapLists, function (one) {
          return {
            id: one.id,
            name: one.name,
            tiles: one.tiles,
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
      this.mapLists = (_obj$list = obj === null || obj === void 0 ? void 0 : obj.list) !== null && _obj$list !== void 0 ? _obj$list : [];
      this.runningList = (_obj$runningList = obj === null || obj === void 0 ? void 0 : obj.runningList) !== null && _obj$runningList !== void 0 ? _obj$runningList : null;
      this.automationEnabled = obj === null || obj === void 0 ? void 0 : obj.automationEnabled;
      this.autotriggerIntervalSetting = (obj === null || obj === void 0 ? void 0 : obj.autotriggerIntervalSetting) || 10;
      if (this.mapLists) {
        for (var key in this.mapLists) {
          this.mapLists[key].tiles = (this.mapLists[key].tiles || []).filter(function (one) {
            return one.time > 0;
          });
        }
      }
      this.regenerateListsPriorityMap();
      // console.log('RNN: ', this.runningList);
      if (obj !== null && obj !== void 0 && obj.runningList && Object.keys(obj === null || obj === void 0 ? void 0 : obj.runningList).length) {
        this.stopList();
        this.runList(obj === null || obj === void 0 ? void 0 : obj.runningList.id);
      }
    }
  }, {
    key: "getAutotriggerList",
    value: function getAutotriggerList() {
      var _iterator = _createForOfIteratorHelper(this.listsAutotrigger),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _this$mapLists$list$i, _this$mapLists$list$i2;
          var list = _step.value;
          if ((0,_shared_utils_rule_utils__WEBPACK_IMPORTED_MODULE_2__.checkMatchingRules)((_this$mapLists$list$i = this.mapLists[list.id]) === null || _this$mapLists$list$i === void 0 || (_this$mapLists$list$i = _this$mapLists$list$i.autotrigger) === null || _this$mapLists$list$i === void 0 ? void 0 : _this$mapLists$list$i.rules, (_this$mapLists$list$i2 = this.mapLists[list.id]) === null || _this$mapLists$list$i2 === void 0 || (_this$mapLists$list$i2 = _this$mapLists$list$i2.autotrigger) === null || _this$mapLists$list$i2 === void 0 ? void 0 : _this$mapLists$list$i2.pattern)) {
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
      // console.log('Autotrigger map', this.automationEnabled, this.listsAutotrigger, this.autotriggerCD);
      if (this.automationEnabled && this.listsAutotrigger.length && this.autotriggerCD <= 0) {
        var _this$runningList5;
        this.autotriggerCD = this.autotriggerIntervalSetting || 10;
        var autotrigger = this.getAutotriggerList();
        if (autotrigger && ((_this$runningList5 = this.runningList) === null || _this$runningList5 === void 0 ? void 0 : _this$runningList5.id) !== autotrigger) {
          // console.log('Run list autotrigger: ', autotrigger, this.runningList?.id, this.listsAutotrigger);
          this.runList(autotrigger);
        }
      }
      this.autotriggerCD -= delta;
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
      var data = this.mapLists[id];
      var totalTime = data.tiles.reduce(function (acc, item) {
        return acc += item.time;
      }, 0);
      var tileFractions = data.tiles.map(function (tile) {
        return _objectSpread(_objectSpread({}, tile), {}, {
          effortFraction: tile.time / totalTime
        });
      });

      // now registering entities for every action
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('map').stopRunningTiles();
      tileFractions.forEach(function (tileToRun) {
        game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('map').setTileRunning(tileToRun.i, tileToRun.j, true, tileToRun.effortFraction);
      });
    }
  }, {
    key: "sendListData",
    value: function sendListData(id) {
      var bForceOpen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var data = this.mapLists[id];
      data.drops = this.getListEffects(id);
      data.costs = this.getListCosts(id);
      data.proportionsBar = this.getProportionsBar(data);
      data.bForceOpen = bForceOpen;
      this.eventHandler.sendData('map-tile-list-data', data);
    }
  }, {
    key: "getProportionsBar",
    value: function getProportionsBar(data) {
      var total = data.tiles.reduce(function (acc, a) {
        return acc += Math.max(0, a.time);
      }, 0);
      var tiles = data.tiles.map(function (one) {
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
      var rawPercentages = tiles.map(function (a) {
        return a.time / total;
      });
      var minimumPercentage = 0.01;
      var totalMinimum = minimumPercentage * tiles.length;
      var normalizeFactor = (1 - totalMinimum) / rawPercentages.reduce(function (acc, p) {
        return acc + Math.max(p - minimumPercentage, 0);
      }, 0);
      return tiles.map(function (a, index) {
        var percentage = a.time / total;
        var displayPercentage = percentage < minimumPercentage ? minimumPercentage : (percentage - minimumPercentage) * normalizeFactor + minimumPercentage;
        return {
          id: a.id,
          name: a.name,
          percentage: percentage,
          displayPercentage: "".concat(displayPercentage * 100, "%"),
          color: generateColor(index, tiles.length)
        };
      });
    }
  }, {
    key: "getListEffects",
    value: function getListEffects(id, listData) {
      var list = this.mapLists[id];
      if (!list) {
        if (!listData) {
          throw new Error("List with id ".concat(id, " not found"));
        }
        list = listData;
      }
      var totalTime = list.tiles.reduce(function (acc, item) {
        return acc += item.time;
      }, 0);
      var totalEffects = {};
      list.tiles.forEach(function (tile) {
        var weight = tile.time / totalTime;
        var effects = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('map').mapTilesProcessed[tile.i][tile.j].drops.filter(function (d, index) {
          var _gameCore$getModule$m;
          return game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.isResourceUnlocked(d.id) && ((_gameCore$getModule$m = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('map').mapTilesProcessed[tile.i][tile.j].r) === null || _gameCore$getModule$m === void 0 ? void 0 : _gameCore$getModule$m.includes(index));
        }).map(function (d) {
          return _objectSpread(_objectSpread({}, d), {}, {
            // rarityTier: gameResources.getResource(d.id)?.tags?.includes('rare') ? 'rare' : 'common',
            probability: d.probability * weight,
            weightedAmountMin: d.probability * weight * d.amountMin,
            weightedAmountMax: d.probability * weight * d.amountMax
          });
        });
        effects.forEach(function (drop) {
          if (!totalEffects[drop.id]) {
            totalEffects[drop.id] = {
              id: drop.id,
              rarityTier: drop.rarityTier,
              probability: 0,
              amountMin: 0,
              amountMax: 0,
              resource: game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.getResource(drop.id)
            };
          }

          // Сумуємо внески для кожного предмета
          totalEffects[drop.id].probability += drop.probability;
          totalEffects[drop.id].amountMin += drop.weightedAmountMin;
          totalEffects[drop.id].amountMax += drop.weightedAmountMax;
        });
      });

      // Нормалізуємо `amountMin` та `amountMax` за ймовірністю
      Object.values(totalEffects).forEach(function (effect) {
        if (effect.probability > 0) {
          effect.amountMin /= effect.probability;
          effect.amountMax /= effect.probability;
        }
      });
      return Object.values(totalEffects);
    }
  }, {
    key: "getListCosts",
    value: function getListCosts(id, listData) {
      var list = this.mapLists[id];
      if (!list) {
        if (!listData) {
          throw new Error("List with id ".concat(id, " not found"));
        }
        list = listData;
      }
      var totalTime = list.tiles.reduce(function (acc, item) {
        return acc += item.time;
      }, 0);
      var totalCosts = {};
      list.tiles.forEach(function (tile) {
        var weight = tile.time / totalTime;
        var costs = (0,_shared_utils_objects__WEBPACK_IMPORTED_MODULE_3__.mapObject)(game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('map').mapTilesProcessed[tile.i][tile.j].cost, function (c, id) {
          return {
            id: id,
            value: c.value * weight
          };
        });

        /* console.log('ProcessingCosts: ', costs, gameCore
            .getModule('map')
            .mapTilesProcessed[tile.i][tile.j]
            .cost);
        */
        Object.values(costs).forEach(function (cost) {
          if (!totalCosts[cost.id]) {
            totalCosts[cost.id] = {
              id: cost.id,
              name: game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.getResource(cost.id).name,
              cost: 0
            };
          }

          // Сумуємо внески для кожного предмета
          totalCosts[cost.id].cost += cost.value || 0;
        });
      });
      return Object.values(totalCosts);
    }
  }]);
}(_shared_game_module__WEBPACK_IMPORTED_MODULE_0__.GameModule);

export { MapTileListsSubmodule };
