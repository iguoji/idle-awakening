import * as game_framework__WEBPACK_IMPORTED_MODULE_0__ from '../../../framework/index.js';
import * as _shared_game_module__WEBPACK_IMPORTED_MODULE_1__ from '../../shared/game-module.js';
import * as _furniture_db__WEBPACK_IMPORTED_MODULE_2__ from './furniture-db.js';
import * as _accessories_db__WEBPACK_IMPORTED_MODULE_3__ from './accessories-db.js';
import * as game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_4__ from '../../../framework/src/utils/consts.js';
import * as lodash__WEBPACK_IMPORTED_MODULE_5__ from 'lodash';
import * as _amplifiers_db__WEBPACK_IMPORTED_MODULE_6__ from './amplifiers-db.js';
import * as _items_shop_db__WEBPACK_IMPORTED_MODULE_7__ from '../items/shop-db.js';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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








var DEFAULT_PROPERTY_FILTERS = {
  'all': {
    id: 'all',
    condition: '',
    rules: [],
    name: 'All',
    isRequired: true,
    isPinned: true,
    sortIndex: 0
  },
  'resources': {
    id: 'resources',
    condition: '',
    rules: [{
      type: 'tag',
      object: 'resource'
    }],
    name: 'Resources',
    isPinned: true,
    sortIndex: 1
  },
  'storage': {
    id: 'storage',
    condition: '',
    rules: [{
      type: 'tag',
      object: 'storage'
    }],
    name: 'Storage',
    isPinned: true,
    sortIndex: 2
  }
};
var DEFAULT_ACCESSORY_FILTERS = {
  'all': {
    id: 'all',
    condition: '',
    rules: [],
    name: 'All',
    isRequired: true,
    isPinned: true,
    sortIndex: 0
  },
  'resources': {
    id: 'resources',
    condition: '',
    rules: [{
      type: 'tag',
      object: 'resource'
    }],
    name: 'Resources',
    isPinned: true,
    sortIndex: 1
  },
  'storage': {
    id: 'storage',
    condition: '',
    rules: [{
      type: 'tag',
      object: 'storage'
    }],
    name: 'Storage',
    isPinned: true,
    sortIndex: 2
  },
  'actions-learning': {
    id: 'actions-learning',
    condition: '',
    rules: [{
      type: 'tag',
      object: 'actions-learning'
    }],
    name: 'Actions Learning',
    isPinned: true,
    sortIndex: 3
  }
};
var DEFAULT_AMPLIFIERS_FILTERS = {
  'all': {
    id: 'all',
    condition: '',
    rules: [],
    name: 'All',
    isRequired: true,
    isPinned: true,
    sortIndex: 0
  },
  'earth': {
    id: 'earth',
    condition: '',
    rules: [{
      type: 'tag',
      object: 'earth'
    }],
    name: 'Earth',
    isPinned: true,
    sortIndex: 1
  },
  'water': {
    id: 'water',
    condition: '',
    rules: [{
      type: 'tag',
      object: 'water'
    }],
    name: 'Water',
    isPinned: true,
    sortIndex: 2
  },
  'air': {
    id: 'air',
    condition: '',
    rules: [{
      type: 'tag',
      object: 'air'
    }],
    name: 'Air',
    isPinned: true,
    sortIndex: 3
  }
};
var PropertyModule = /*#__PURE__*/function (_GameModule) {
  function PropertyModule() {
    var _this;
    _classCallCheck(this, PropertyModule);
    _this = _callSuper(this, PropertyModule);
    _this.purchasedFurnitures = {};
    _this.isUnlocked = false;
    _this.leveledId = null;
    _this.hideMaxed = {};
    _this.searchData = {
      furniture: {
        search: '',
        selectedScopes: ['name']
      },
      accessory: {
        search: '',
        selectedScopes: ['name']
      },
      amplifier: {
        search: '',
        selectedScopes: ['name']
      }
    };
    _this.autoPurchase = {};
    _this.autoPurchaseCd = 0;
    _this.customFilters = {
      furniture: (0,lodash__WEBPACK_IMPORTED_MODULE_5__.cloneDeep)(DEFAULT_PROPERTY_FILTERS),
      accessory: (0,lodash__WEBPACK_IMPORTED_MODULE_5__.cloneDeep)(DEFAULT_ACCESSORY_FILTERS),
      amplifier: (0,lodash__WEBPACK_IMPORTED_MODULE_5__.cloneDeep)(DEFAULT_AMPLIFIERS_FILTERS)
    };
    _this.customFiltersOrder = {
      furniture: Object.keys(_this.customFilters.furniture),
      accessory: Object.keys(_this.customFilters.accessory),
      amplifier: Object.keys(_this.customFilters.amplifier)
    };
    _this.eventHandler.registerHandler('actions-change-custom-filters-order', function (payload) {
      //payload.sortIndex, payload.destinationIndex. Reorder this.customFiltersOrder
      var sourceIndex = payload.sourceIndex,
        destinationIndex = payload.destinationIndex,
        filterId = payload.filterId;

      // Захист від некоректних індексів:
      if (sourceIndex === undefined || destinationIndex === undefined) return;
      if (sourceIndex < 0 || destinationIndex < 0) return;
      if (sourceIndex >= _this.customFiltersOrder[filterId].length || destinationIndex >= _this.customFiltersOrder[filterId].length) return;

      // Копіюємо масив (якщо хочемо не мутувати оригінал),
      // але можна й "у місці" (mutable), залежно від вашої логіки
      var newOrder = _toConsumableArray(_this.customFiltersOrder[filterId]);

      // Вирізаємо елемент зі старої позиції
      var _newOrder$splice = newOrder.splice(sourceIndex, 1),
        _newOrder$splice2 = _slicedToArray(_newOrder$splice, 1),
        removed = _newOrder$splice2[0];
      // Ставимо на нову позицію
      newOrder.splice(destinationIndex, 0, removed);

      // Зберігаємо оновлений масив
      _this.customFiltersOrder = newOrder;

      // console.log('Re-sorted', payload, newOrder);

      _this.sendFurnituresData({
        filterId: filterId
      }, {
        searchData: _this.searchData[filterId],
        hideMaxed: _this.hideMaxed[payload.filterId] || false,
        selectedFilterId: _this.selectedFilterId[payload.filterId]
      });
    });
    _this.eventHandler.registerHandler('query-general-property-stats', function (payload) {
      _this.sendGeneralPropetyStats(payload);
    });
    _this.eventHandler.registerHandler('save-property-custom-filter', function (payload) {
      _this.saveCustomFilter(payload);
    });
    _this.eventHandler.registerHandler('delete-property-custom-filter', function (payload) {
      _this.deleteCustomFilter(payload);
    });
    _this.eventHandler.registerHandler('toggle-property-custom-filter-pinned', function (payload) {
      _this.setCustomFilterPinned(payload);
    });
    _this.eventHandler.registerHandler('apply-property-custom-filter', function (payload) {
      _this.applyCustomFilter(payload);
    });
    _this.eventHandler.registerHandler('set-furniture-autopurchase', function (_ref) {
      var id = _ref.id,
        flag = _ref.flag,
        filterId = _ref.filterId;
      var entities = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.listEntitiesByTags([filterId]).filter(function (one) {
        return one.isUnlocked && !one.isCapped;
      });
      entities.forEach(function (e) {
        if (!id || id === e.id) {
          _this.autoPurchase[e.id] = flag;
        }
      });
      _this.sendFurnituresData({
        filterId: filterId
      }, filterId ? {
        hideMaxed: _this.hideMaxed[filterId] || false,
        searchData: _this.searchData[filterId] || {
          search: '',
          selectedScopes: ['name']
        },
        selectedFilterId: _this.selectedFilterId[filterId]
      } : undefined);
    });
    _this.eventHandler.registerHandler('purchase-furniture', function (payload) {
      _this.purchaseFurniture(payload.id, payload.filterId, payload.filterId ? {
        hideMaxed: _this.hideMaxed[payload.filterId] || false,
        searchData: _this.searchData[payload.filterId] || {
          search: '',
          selectedScopes: ['name']
        }
      } : undefined);
    });
    _this.eventHandler.registerHandler('set-furniture-hide-maxed', function (payload) {
      // console.log('Set Hide Maxed: ', payload);
      if (payload.filterId) {
        _this.hideMaxed[payload.filterId] = payload.hideMaxed;
      }
      _this.sendFurnituresData(payload, payload.filterId ? {
        hideMaxed: _this.hideMaxed[payload.filterId] || false,
        selectedFilterId: _this.selectedFilterId[payload.filterId],
        searchData: _this.searchData[payload.filterId] || {
          search: '',
          selectedScopes: ['name']
        }
      } : undefined);
    });
    _this.eventHandler.registerHandler('set-furniture-search-text', function (payload) {
      if (payload.filterId) {
        _this.searchData[payload.filterId] = payload.searchData;
      }
      // console.log('sendFurniture: ', payload, this.searchData);
      _this.sendFurnituresData(payload, payload.filterId ? {
        hideMaxed: _this.hideMaxed[payload.filterId] || false,
        selectedFilterId: _this.selectedFilterId[payload.filterId],
        searchData: _this.searchData[payload.filterId] || {
          search: '',
          selectedScopes: ['name']
        }
      } : undefined);
    });
    _this.eventHandler.registerHandler('delete-furniture', function (payload) {
      _this.deleteFurniture(payload.id, payload.filterId, payload.filterId ? {
        hideMaxed: _this.hideMaxed[payload.filterId] || false,
        searchData: _this.searchData[payload.filterId] || {
          search: '',
          selectedScopes: ['name']
        }
      } : undefined);
    });
    _this.eventHandler.registerHandler('query-furnitures-data', function (payload) {
      _this.sendFurnituresData(payload, payload.filterId ? {
        hideMaxed: _this.hideMaxed[payload.filterId] || false,
        selectedFilterId: _this.selectedFilterId[payload.filterId],
        searchData: _this.searchData[payload.filterId] || {
          search: '',
          selectedScopes: ['name']
        }
      } : undefined);
    });
    _this.eventHandler.registerHandler('query-furniture-details', function (payload) {
      _this.sendFurnitureDetails(payload.id);
    });
    _this.eventHandler.registerHandler('query-all-furniture-tags', function (payload) {
      _this.sendAllFurnitureTags(payload);
    });
    _this.eventHandler.registerHandler('query-all-accessory-tags', function (payload) {
      _this.sendAllAccessoryTags(payload);
    });
    _this.eventHandler.registerHandler('query-all-property-effects', function (payload) {
      _this.sendAllFurnitureEffects(payload);
    });
    _this.filtersCache = {
      furniture: {},
      accessory: {},
      amplifier: {}
    };
    return _this;
  }
  _inherits(PropertyModule, _GameModule);
  return _createClass(PropertyModule, [{
    key: "initialize",
    value: function initialize() {
      game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.registerResource('living_space', {
        tags: ['living', 'secondary'],
        name: 'Living Space',
        isService: true,
        saveBalanceTree: true
      });
      (0,_furniture_db__WEBPACK_IMPORTED_MODULE_2__.registerFurnitureStage1)();
      (0,_accessories_db__WEBPACK_IMPORTED_MODULE_3__.registerAccessoriesStage1)();
      (0,_amplifiers_db__WEBPACK_IMPORTED_MODULE_6__.registerAmplifiersStage1)();
    }

    /* Filters */
  }, {
    key: "generateFilterCache",
    value: function generateFilterCache(filterId, id) {
      var _this2 = this;
      // console.log('generateFilterCache', filterId, id);
      if (!this.customFilters[filterId][id]) {
        delete this.filtersCache[filterId][id];
      }
      // now apply filters and find ids
      if (!this.customFilters[filterId][id].rules) {
        this.filtersCache[filterId][id] = {
          'all': true
        };
        return;
      }
      var entities = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.listEntitiesByTags([filterId]);
      this.filtersCache[filterId][id] = {};
      entities.forEach(function (entity) {
        var ruleResults = _this2.customFilters[filterId][id].rules.map(function (rule) {
          var _entity$modifier, _entity$modifier2, _entity$modifier3, _entity$modifier4;
          if (rule.type === 'tag') return entity.tags.includes(rule.object);
          if (rule.type === 'resource') return Object.keys(((_entity$modifier = entity.modifier) === null || _entity$modifier === void 0 || (_entity$modifier = _entity$modifier.income) === null || _entity$modifier === void 0 ? void 0 : _entity$modifier.resources) || {}).includes(rule.object) || Object.keys(((_entity$modifier2 = entity.modifier) === null || _entity$modifier2 === void 0 || (_entity$modifier2 = _entity$modifier2.multiplier) === null || _entity$modifier2 === void 0 ? void 0 : _entity$modifier2.resources) || {}).includes(rule.object);
          if (rule.type === 'attribute') return Object.keys(((_entity$modifier3 = entity.modifier) === null || _entity$modifier3 === void 0 || (_entity$modifier3 = _entity$modifier3.income) === null || _entity$modifier3 === void 0 ? void 0 : _entity$modifier3.effects) || {}).includes(rule.object) || Object.keys(((_entity$modifier4 = entity.modifier) === null || _entity$modifier4 === void 0 || (_entity$modifier4 = _entity$modifier4.multiplier) === null || _entity$modifier4 === void 0 ? void 0 : _entity$modifier4.effects) || {}).includes(rule.object);
          throw new Error('Invalid filter condition: ' + rule.type);
        });
        if (id == '18828') {
          console.log('CHCK_ENT_RULES: ', id, entity.id, ruleResults, _this2.customFilters[filterId][id].condition, !_this2.customFilters[filterId][id].condition);
        }
        var conditionExpression = _this2.customFilters[filterId][id].condition;
        if (!conditionExpression) {
          var result = ruleResults.every(function (one) {
            return !!one;
          });
          if (result) {
            _this2.filtersCache[filterId][id][entity.id] = true;
          }
          return true;
        }
        ruleResults.forEach(function (result, index) {
          conditionExpression = conditionExpression.replace(new RegExp("\\b".concat(index + 1, "\\b"), 'g'), result);
        });
        conditionExpression = conditionExpression.replace(/\bAND\b/g, '&&').replace(/\bOR\b/g, '||').replace(/\bNOT\b/g, '!');
        if (id == '18828') {
          console.log('CHCK_ENT_RULES: ', id, conditionExpression, eval(conditionExpression));
        }
        try {
          var _result = eval(conditionExpression);
          if (_result) {
            _this2.filtersCache[filterId][id][entity.id] = true;
          }
        } catch (error) {
          console.error("Invalid condition string", error);
          return false;
        }
      });

      // console.log('Generated Filter: ', this.filtersCache);
    }
  }, {
    key: "generateAllFiltersCache",
    value: function generateAllFiltersCache(filterId) {
      for (var id in this.customFilters[filterId]) {
        this.generateFilterCache(filterId, id);
      }
      // console.log('Caches: ', this.filtersCache[filterId]);
    }
  }, {
    key: "setCustomFilterPinned",
    value: function setCustomFilterPinned(_ref2) {
      var filterId = _ref2.filterId,
        id = _ref2.id,
        flag = _ref2.flag;
      if (this.customFilters[filterId][id]) {
        this.customFilters[filterId][id].isPinned = flag;
      }
    }
  }, {
    key: "saveCustomFilter",
    value: function saveCustomFilter(payload) {
      var _payload$id;
      if (!payload.filterId) {
        throw new Error("filterId is required!");
      }
      var id = (_payload$id = payload.id) !== null && _payload$id !== void 0 ? _payload$id : "".concat(Math.round(Math.random() * 1000000));
      this.customFilters[payload.filterId][id] = _objectSpread(_objectSpread(_objectSpread({}, this.customFilters[payload.filterId][id] || {}), payload), {}, {
        id: id
      });
      if (!payload.id) {
        this.customFiltersOrder[payload.filterId].push(id);
      }
      this.generateFilterCache(payload.filterId, id);

      //TODO: Re-index filters
      this.sendFurnituresData({
        filterId: payload.filterId
      }, {
        hideMaxed: this.hideMaxed[payload.filterId] || false,
        searchData: this.searchData[payload.filterId] || {
          search: '',
          selectedScopes: ['name']
        },
        selectedFilterId: this.selectedFilterId[payload.filterId]
      });
    }
  }, {
    key: "deleteCustomFilter",
    value: function deleteCustomFilter(_ref3) {
      var _defaultFlt$id;
      var filterId = _ref3.filterId,
        id = _ref3.id;
      var defaultFlt = filterId === 'furniture' ? DEFAULT_PROPERTY_FILTERS : DEFAULT_ACCESSORY_FILTERS;
      if (this.customFilters[filterId][id] && !((_defaultFlt$id = defaultFlt[id]) !== null && _defaultFlt$id !== void 0 && _defaultFlt$id.isRequired)) {
        delete this.customFilters[filterId][id];
        this.customFiltersOrder[filterId] = this.customFiltersOrder[filterId].filter(function (fid) {
          return fid !== id;
        });
        this.sendFurnituresData({
          filterId: filterId
        }, {
          hideMaxed: this.hideMaxed[filterId] || false,
          searchData: this.searchData[filterId] || {
            search: '',
            selectedScopes: ['name']
          },
          selectedFilterId: this.selectedFilterId[filterId]
        });
      }
    }
  }, {
    key: "applyCustomFilter",
    value: function applyCustomFilter(_ref4) {
      var filterId = _ref4.filterId,
        id = _ref4.id;
      this.selectedFilterId[filterId] = id;
      this.generateFilterCache(filterId, id);
      console.log('AppliedFilter: ', this.selectedFilterId);
      this.sendFurnituresData({
        filterId: filterId
      }, {
        hideMaxed: this.hideMaxed[filterId] || false,
        searchData: this.searchData[filterId] || {
          search: '',
          selectedScopes: ['name']
        },
        selectedFilterId: this.selectedFilterId[filterId]
      });
    }
  }, {
    key: "tick",
    value: function tick(game, delta) {
      this.leveledId = null;
      if (game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_purchase_manager') > 0) {
        if (!this.autoPurchaseCd) {
          this.autoPurchaseCd = 10;
        }
        this.autoPurchaseCd -= delta;
        if (this.autoPurchaseCd <= 0) {
          this.autoPurchaseCd = 10;
          for (var key in this.autoPurchase) {
            if (this.autoPurchase[key]) {
              var _gameEntity$getEntity, _gameEntity$getEntity2, _gameEntity$getEntity3;
              if (!game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.isEntityUnlocked(key)) {
                this.autoPurchase[key] = false;
                console.log('Furniture ' + key + ' is locked. Toggling autopurchase');
                continue;
              }
              if (game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.isCapped(key)) {
                this.autoPurchase[key] = false;
                console.log('Furniture ' + key + ' is capped. Toggling autopurchase');
                continue;
              }
              var cat = (_gameEntity$getEntity = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEntity(key).tags) !== null && _gameEntity$getEntity !== void 0 && _gameEntity$getEntity.includes('accessory') ? 'accessory' : (_gameEntity$getEntity2 = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEntity(key).tags) !== null && _gameEntity$getEntity2 !== void 0 && _gameEntity$getEntity2.includes('furniture') ? 'furniture' : (_gameEntity$getEntity3 = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEntity(key).tags) !== null && _gameEntity$getEntity3 !== void 0 && _gameEntity$getEntity3.includes('amplifier') ? 'amplifier' : null;
              var newEnt = this.purchaseFurniture(key, cat, {
                isSilent: true
              });
              // console.log('Purchase Auto Furniture: ', key, newEnt)
              if (newEnt.success) {
                return;
              }
            }
          }
        }
      }
    }
  }, {
    key: "save",
    value: function save() {
      return {
        furnitures: this.purchasedFurnitures,
        hideMaxed: this.hideMaxed,
        searchData: this.searchData,
        autoPurchase: this.autoPurchase,
        customFilters: this.customFilters,
        customFiltersOrder: this.customFiltersOrder,
        selectedFilterId: this.selectedFilterId
      };
    }
  }, {
    key: "load",
    value: function load(saveObject) {
      for (var key in this.purchasedFurnitures) {
        this.setFurniture(key, 0, true);
      }
      this.purchasedFurnitures = {};
      if (saveObject !== null && saveObject !== void 0 && saveObject.furnitures) {
        for (var id in saveObject.furnitures) {
          this.setFurniture(id, saveObject.furnitures[id], true);
        }
      }
      this.isUnlocked = (saveObject === null || saveObject === void 0 ? void 0 : saveObject.isUnlocked) || false;
      this.hideMaxed = (saveObject === null || saveObject === void 0 ? void 0 : saveObject.hideMaxed) || {};
      this.searchData = (saveObject === null || saveObject === void 0 ? void 0 : saveObject.searchData) || {
        furniture: {
          search: '',
          selectedScopes: ['name']
        },
        accessory: {
          search: '',
          selectedScopes: ['name']
        },
        amplifier: {
          search: '',
          selectedScopes: ['name']
        }
      };
      this.autoPurchase = {};
      if (saveObject !== null && saveObject !== void 0 && saveObject.autoPurchase) {
        this.autoPurchase = saveObject === null || saveObject === void 0 ? void 0 : saveObject.autoPurchase;
      }
      this.customFilters = {
        furniture: (0,lodash__WEBPACK_IMPORTED_MODULE_5__.cloneDeep)(DEFAULT_PROPERTY_FILTERS),
        accessory: (0,lodash__WEBPACK_IMPORTED_MODULE_5__.cloneDeep)(DEFAULT_ACCESSORY_FILTERS),
        amplifier: (0,lodash__WEBPACK_IMPORTED_MODULE_5__.cloneDeep)(DEFAULT_AMPLIFIERS_FILTERS)
      };
      this.customFiltersOrder = {
        furniture: Object.keys(this.customFilters.furniture),
        accessory: Object.keys(this.customFilters.accessory),
        amplifier: Object.keys(this.customFilters.amplifier)
      };
      this.selectedFilterId = {};
      if (saveObject !== null && saveObject !== void 0 && saveObject.customFilters) {
        for (var _key in saveObject.customFilters) {
          if (!['furniture', 'accessory', 'amplifier'].includes(_key)) {
            delete saveObject.customFilters[_key];
          }
        }
        for (var _key2 in saveObject.customFiltersOrder) {
          if (!['furniture', 'accessory', 'amplifier'].includes(_key2)) {
            delete saveObject.customFiltersOrder[_key2];
          }
        }
        this.customFilters = _objectSpread(_objectSpread({}, this.customFilters), saveObject === null || saveObject === void 0 ? void 0 : saveObject.customFilters);
        // check if all required are prestnt
        for (var _key3 in this.customFilters) {
          var isValid = true;
          var keyMap = {
            'furniture': DEFAULT_PROPERTY_FILTERS,
            'accessory': DEFAULT_ACCESSORY_FILTERS,
            'amplifier': DEFAULT_AMPLIFIERS_FILTERS
          };
          var defFlt = keyMap[_key3];
          for (var fltId in defFlt) {
            if (defFlt[fltId].isRequired && !this.customFilters[_key3][fltId]) {
              isValid = false;
              break;
            }
          }
          if (!isValid) {
            this.customFilters = (0,lodash__WEBPACK_IMPORTED_MODULE_5__.cloneDeep)(defFlt);
            this.selectedFilterId[_key3] = 'all';
          } else {
            var _saveObject$selectedF, _saveObject$selectedF2;
            this.selectedFilterId[_key3] = (_saveObject$selectedF = saveObject === null || saveObject === void 0 || (_saveObject$selectedF2 = saveObject.selectedFilterId) === null || _saveObject$selectedF2 === void 0 ? void 0 : _saveObject$selectedF2[_key3]) !== null && _saveObject$selectedF !== void 0 ? _saveObject$selectedF : 'all';
          }
        }
      }
      // console.log('CustomFilters: ', this.customFilters);
      for (var _key4 in this.customFilters) {
        this.generateAllFiltersCache(_key4);
      }
      if (saveObject !== null && saveObject !== void 0 && saveObject.customFiltersOrder) {
        this.customFiltersOrder = _objectSpread({
          furniture: Object.keys(this.customFilters.furniture),
          accessory: Object.keys(this.customFilters.accessory),
          amplifier: Object.keys(this.customFilters.amplifier)
        }, saveObject.customFiltersOrder);
      } else {
        this.customFiltersOrder = {
          furniture: Object.keys(this.customFilters.furniture),
          accessory: Object.keys(this.customFilters.accessory),
          amplifier: Object.keys(this.customFilters.amplifier)
        };
      }

      /*this.sendFurnituresData({ filterId: 'furniture' }, {
          searchData: this.searchData,
      });*/
    }
  }, {
    key: "reset",
    value: function reset() {
      this.load({});
    }
  }, {
    key: "setFurniture",
    value: function setFurniture(furnitureId, amount) {
      var bForce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.setEntityLevel(furnitureId, amount, bForce);
      this.purchasedFurnitures[furnitureId] = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel(furnitureId);
    }
  }, {
    key: "purchaseFurniture",
    value: function purchaseFurniture(furnitureId, filterId, options) {
      var newEnt = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.levelUpEntity(furnitureId);
      // console.log('newEntFurn: ', newEnt);
      if (newEnt.success) {
        this.purchasedFurnitures[furnitureId] = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel(furnitureId);
        this.leveledId = furnitureId;
        if (!(options !== null && options !== void 0 && options.isSilent)) {
          // console.log('newEntFurnNEW: ', this.purchasedFurnitures)
          game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('unlock-notifications').generateNotifications();
          this.sendFurnituresData({
            filterId: filterId
          }, options);
        }
      }
      return newEnt.success;
    }
  }, {
    key: "deleteFurniture",
    value: function deleteFurniture(furnitureId, filterId, options) {
      if (!this.purchasedFurnitures[furnitureId]) return;
      this.purchasedFurnitures[furnitureId]--;
      game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.setEntityLevel(furnitureId, this.purchasedFurnitures[furnitureId]);
      game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('unlock-notifications').generateNotifications();
      this.sendFurnituresData({
        filterId: filterId
      }, options);
    }
  }, {
    key: "regenerateNotifications",
    value: function regenerateNotifications() {
      var _this3 = this;
      ['furniture', 'accessory', 'amplifier'].forEach(function (filter) {
        // const items = gameEntity.listEntitiesByTags([filter]);
        Object.values(_this3.customFilters[filter]).forEach(function (filterData) {
          var items = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.listEntitiesByTags([filter]).filter(function (one) {
            return _this3.filtersCache[filter][filterData.id][one.id];
          });
          items.forEach(function (item) {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('unlock-notifications').registerNewNotification('property', filter, filterData.id, item.id, item.isUnlocked && !item.isCapped);
          });
        });
      });
    }
  }, {
    key: "matchSearch",
    value: function matchSearch(one, searchData) {
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
    key: "getFurnituresData",
    value: function getFurnituresData(payload, options) {
      var _this4 = this;
      if (!payload.filterId) {
        throw new Error('filter is required here');
      }
      //const entities = gameEntity.listEntitiesByTags([payload.filterId]);
      // console.log('FLTS: ', payload.filterId, this.customFilters, this.selectedFilterId);

      if (!this.selectedFilterId[payload.filterId] || !this.customFilters[payload.filterId][this.selectedFilterId[payload.filterId]]) {
        this.selectedFilterId[payload.filterId] = 'all';
      }
      // const entities = gameEntity.listEntitiesByTags(['action']).filter(one => one.isUnlocked && !one.isCapped);
      var perCats = Object.values(this.customFilters[payload.filterId]).reduce(function (acc, filter) {
        acc[filter.id] = {
          id: filter.id,
          name: filter.name,
          rules: filter.rules,
          isPinned: filter.isPinned,
          sortIndex: _this4.customFiltersOrder[payload.filterId].findIndex(function (s) {
            return s === filter.id;
          }),
          items: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.listEntitiesByTags([payload.filterId]).filter(function (one) {
            return _this4.filtersCache[payload.filterId][filter.id][one.id] && one.isUnlocked && (!(options !== null && options !== void 0 && options.hideMaxed) || !one.isCapped) && !one.isUnpurchaseable && _this4.matchSearch(one, options.searchData);
          }),
          isSelected: _this4.selectedFilterId[payload.filterId] === filter.id
        };
        return acc;
      }, {});
      var entities = perCats[this.selectedFilterId[payload.filterId]].items;
      var spaceRes = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource('living_space');
      return {
        available: entities.filter(function (one) {
          return one.isUnlocked && (!(options !== null && options !== void 0 && options.hideMaxed) || !one.isCapped) && _this4.matchSearch(one, options === null || options === void 0 ? void 0 : options.searchData);
        }).map(function (entity) {
          var _this4$autoPurchase$e, _gameEntity$getEffect;
          return {
            id: entity.id,
            name: entity.name,
            description: entity.description,
            max: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEntityMaxLevel(entity.id),
            level: _this4.purchasedFurnitures[entity.id] || 0,
            affordable: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getAffordable(entity.id),
            potentialEffects: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEffects(entity.id, 1),
            isLeveled: _this4.leveledId === entity.id,
            isCapped: entity.isCapped,
            isAutoPurchase: (_this4$autoPurchase$e = _this4.autoPurchase[entity.id]) !== null && _this4$autoPurchase$e !== void 0 ? _this4$autoPurchase$e : false,
            spaceUsage: ((_gameEntity$getEffect = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEffects(entity.id, 0).find(function (one) {
              return one.id === 'living_space';
            })) === null || _gameEntity$getEffect === void 0 ? void 0 : _gameEntity$getEffect.value) / Math.max(1, spaceRes.consumption)
          };
        }),
        propertyCategories: Object.values(perCats).filter(function (cat) {
          return cat.items.length > 0;
        }).sort(function (a, b) {
          return a.sortIndex - b.sortIndex;
        }),
        space: {
          max: spaceRes.income * spaceRes.multiplier,
          consumption: spaceRes.consumption,
          total: spaceRes.amount,
          breakDown: spaceRes.breakDown
        },
        selectedCategory: this.selectedFilterId[payload.filterId],
        searchData: options === null || options === void 0 ? void 0 : options.searchData,
        hideMaxed: options === null || options === void 0 ? void 0 : options.hideMaxed,
        isAutomationUnlocked: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_purchase_manager') > 0,
        customFilters: this.customFilters[payload.filterId],
        customFiltersOrder: this.customFiltersOrder[payload.filterId]
      };
    }
  }, {
    key: "sendFurnituresData",
    value: function sendFurnituresData(payload, options) {
      var data = this.getFurnituresData(payload, options);
      this.eventHandler.sendData('furnitures-data', data);
    }
  }, {
    key: "getFurnitureDetails",
    value: function getFurnitureDetails(id) {
      if (!id) return null;
      var entity = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEntity(id);
      return {
        id: entity.id,
        name: entity.name,
        description: entity.description,
        max: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEntityMaxLevel(entity.id),
        level: this.purchasedFurnitures[entity.id] || 0,
        affordable: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getAffordable(entity.id),
        potentialEffects: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEffects(entity.id, 1),
        currentEffects: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEffects(entity.id),
        tags: entity.tags
      };
    }
  }, {
    key: "sendFurnitureDetails",
    value: function sendFurnitureDetails(id) {
      var data = this.getFurnitureDetails(id);
      this.eventHandler.sendData('furniture-details', data);
    }
  }, {
    key: "getAllItemsTags",
    value: function getAllItemsTags(filterId) {
      var allActions = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.listEntitiesByTags([filterId]);
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
    key: "sendAllFurnitureTags",
    value: function sendAllFurnitureTags(payload) {
      var data = this.getAllItemsTags('furniture');
      var label = 'all-furniture-tags';
      if (payload !== null && payload !== void 0 && payload.prefix) {
        label = "".concat(label, "-").concat(payload === null || payload === void 0 ? void 0 : payload.prefix);
      }
      this.eventHandler.sendData(label, data);
    }
  }, {
    key: "sendAllAccessoryTags",
    value: function sendAllAccessoryTags(payload) {
      var data = this.getAllItemsTags('accessory');
      var label = 'all-accessory-tags';
      if (payload !== null && payload !== void 0 && payload.prefix) {
        label = "".concat(label, "-").concat(payload === null || payload === void 0 ? void 0 : payload.prefix);
      }
      this.eventHandler.sendData(label, data);
    }
  }, {
    key: "getAllFurnitureEffects",
    value: function getAllFurnitureEffects(filterId) {
      var propertyEntities = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.listEntitiesByTags([filterId]);
      var effectIdsUnique = propertyEntities.reduce(function (acc, entity) {
        var _entity$modifier5, _entity$modifier6;
        var incomes = Object.keys(((_entity$modifier5 = entity.modifier) === null || _entity$modifier5 === void 0 || (_entity$modifier5 = _entity$modifier5.income) === null || _entity$modifier5 === void 0 ? void 0 : _entity$modifier5.effects) || {});
        var effects = Object.keys(((_entity$modifier6 = entity.modifier) === null || _entity$modifier6 === void 0 || (_entity$modifier6 = _entity$modifier6.multiplier) === null || _entity$modifier6 === void 0 ? void 0 : _entity$modifier6.effects) || {});
        var newAcc = acc;
        [].concat(incomes, effects).forEach(function (key) {
          newAcc[key] = newAcc[key] || entity.isUnlocked;
        });
        return newAcc;
      }, {});
      var list = [];
      for (var key in effectIdsUnique) {
        list.push(_objectSpread(_objectSpread({}, game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffect(key)), {}, {
          isUnlocked: effectIdsUnique[key] && game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.isEffectUnlocked(key)
        }));
      }
      return list;
    }
  }, {
    key: "sendAllFurnitureEffects",
    value: function sendAllFurnitureEffects(payload) {
      var data = this.getAllFurnitureEffects(payload.filterId);
      var label = 'all-property-effects';
      if (payload !== null && payload !== void 0 && payload.prefix) {
        label = "".concat(label, "-").concat(payload === null || payload === void 0 ? void 0 : payload.prefix);
      }
      this.eventHandler.sendData(label, data);
    }
  }, {
    key: "getGeneraPropertyStatsData",
    value: function getGeneraPropertyStatsData() {
      var shopStats = [];
      if (Math.abs(game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('prices_discount') - 1) > game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_4__.SMALL_NUMBER) {
        shopStats.push(_objectSpread(_objectSpread({}, game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffect('prices_discount')), {}, {
          isMultiplier: true
        }));
      }
      if (Math.abs((0,_items_shop_db__WEBPACK_IMPORTED_MODULE_7__.charismaMod)(game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('attribute_charisma')) - 1) > game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_4__.SMALL_NUMBER) {
        shopStats.push({
          name: 'Charisma Price Discount',
          description: 'Upgrades and items purchase discount based on your charisma attribute (1./(1 + 0.02*log2(charisma)^2))',
          value: (0,_items_shop_db__WEBPACK_IMPORTED_MODULE_7__.charismaMod)(game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('attribute_charisma'))
        });
      }
      var stats = {
        'property': [].concat(shopStats).filter(function (one) {
          return !one.isMultiplier || Math.abs(one.value - 1) > game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_4__.SMALL_NUMBER;
        }),
        'accessories': [],
        'amplifiers': [
          /*{...gameEffects.getEffect('restoration_spells_efficiency'), isMultiplier: true},
          {...gameEffects.getEffect('recovery_spells_efficiency'), isMultiplier: true},
          {...gameEffects.getEffect('illusion_spells_efficiency'), isMultiplier: true},
          {...gameEffects.getEffect('conjuration_spells_efficiency'), isMultiplier: true},
          {...gameEffects.getEffect('elemental_spells_efficiency'), isMultiplier: true},*/
        ].filter(function (one) {
          return !one.isMultiplier || Math.abs(one.value - 1) > game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_4__.SMALL_NUMBER;
        })
      };
      return stats;
    }
  }, {
    key: "sendGeneralPropetyStats",
    value: function sendGeneralPropetyStats(payload) {
      var data = this.getGeneraPropertyStatsData();
      var label = 'general-property-stats';
      if (payload !== null && payload !== void 0 && payload.prefix) {
        label = "".concat(label, "-").concat(payload === null || payload === void 0 ? void 0 : payload.prefix);
      }
      this.eventHandler.sendData(label, data);
    }
  }]);
}(_shared_game_module__WEBPACK_IMPORTED_MODULE_1__.GameModule);
