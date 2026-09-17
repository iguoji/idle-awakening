import * as game_framework__WEBPACK_IMPORTED_MODULE_0__ from '../../../../framework/index.js';
import * as _shared_game_module__WEBPACK_IMPORTED_MODULE_1__ from '../../../../worker/shared/game-module.js';
import * as _inventory_items_db__WEBPACK_IMPORTED_MODULE_2__ from '../../../../worker/modules/inventory/inventory-items-db.js';
import * as _shared_utils_rule_utils__WEBPACK_IMPORTED_MODULE_3__ from '../../../../worker/shared/utils/rule-utils.js';
import * as game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_4__ from '../../../../framework/src/utils/consts.js';
import * as _shared_utils_objects__WEBPACK_IMPORTED_MODULE_5__ from '../../../../worker/shared/utils/objects.js';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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






var InventoryModule = /*#__PURE__*/function (_GameModule) {
  function InventoryModule() {
    var _this;
    _classCallCheck(this, InventoryModule);
    _this = _callSuper(this, InventoryModule);
    _this.inventoryItems = {};
    _this.isUnlocked = false;
    _this.autoConsumeCD = 2;
    _this.selectedFilterId = 'all';
    _this.filters = [{
      id: 'all',
      name: 'All',
      tags: [],
      isDefault: true
    }, {
      id: 'consumable',
      name: 'Consumable',
      tags: ['consumable'],
      isDefault: true
    }, {
      id: 'materials',
      name: 'Materials',
      tags: ['material'],
      isDefault: false
    }, {
      id: 'elemental',
      name: 'Elemental',
      tags: ['elemental'],
      isDefault: false
    }];
    _this.searchData = {};
    _this.eventHandler.registerHandler('consume-inventory', function (payload) {
      _this.consumeItem(payload.id, payload.amount);
      if (payload.sendDetails) {
        _this.sendItemDetails(payload.id);
      }
    });
    _this.eventHandler.registerHandler('set-inventory-search', function (_ref) {
      var searchData = _ref.searchData;
      _this.searchData = searchData;
    });
    _this.eventHandler.registerHandler('sell-inventory', function (payload) {
      _this.sellItem(payload.id, payload.amount);
    });
    _this.eventHandler.registerHandler('query-inventory-data', function (payload) {
      _this.sendInventoryData(_this.selectedFilterId, _objectSpread(_objectSpread({}, payload), {}, {
        searchData: _this.searchData
      }));
    });
    _this.eventHandler.registerHandler('query-inventory-details', function (payload) {
      _this.sendItemDetails(payload.id, payload.prefix);
    });
    _this.eventHandler.registerHandler('query-sell-details', function (payload) {
      _this.sendSellDetails(payload.id);
    });
    _this.eventHandler.registerHandler('save-inventory-settings', function (payload) {
      _this.saveSettings(payload);
    });
    _this.eventHandler.registerHandler('set-selected-inventory-filter', function (_ref2) {
      var filterId = _ref2.filterId;
      _this.selectedFilterId = filterId;
    });
    return _this;
  }
  _inherits(InventoryModule, _GameModule);
  return _createClass(InventoryModule, [{
    key: "initialize",
    value: function initialize() {

      // registerInventoryItems();
    }
  }, {
    key: "tick",
    value: function tick(game, delta) {
      this.autoConsumeCD -= delta;

      // trigger autoconsume

      for (var itemId in this.inventoryItems) {
        var _this$inventoryItems$, _this$inventoryItems$5;
        var checkAutoThisTick = false;
        this.inventoryItems[itemId].isConsumed = false;
        if (this.inventoryItems[itemId].duration > 0) {
          this.inventoryItems[itemId].duration -= delta;
          if (game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.entityExists("active_".concat(itemId))) {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.setAttribute("active_".concat(itemId), 'current_duration', this.inventoryItems[itemId].duration);
          }
        }
        if (this.inventoryItems[itemId].duration <= 0) {
          this.inventoryItems[itemId].duration = 0;
          if (game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.entityExists("active_".concat(itemId))) {
            var _gameResources$getRes;
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.unsetEntity("active_".concat(itemId));
            this.inventoryItems[itemId].cooldown = (_gameResources$getRes = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource(itemId).getUsageCooldown()) !== null && _gameResources$getRes !== void 0 ? _gameResources$getRes : 0;
          }
          checkAutoThisTick = !this.inventoryItems[itemId].cooldown;
        }
        if (this.inventoryItems[itemId].cooldown > 0) {
          this.inventoryItems[itemId].cooldown -= delta;
        }
        if (this.inventoryItems[itemId].stockCapacity < game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('shop_max_stock')) {
          this.inventoryItems[itemId].stockCapacity += delta * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('shop_stock_renew_rate');
        }
        if (this.autoConsumeCD > 0 && !checkAutoThisTick) {
          continue;
        }
        if ((_this$inventoryItems$ = this.inventoryItems[itemId]) !== null && _this$inventoryItems$ !== void 0 && (_this$inventoryItems$ = _this$inventoryItems$.autoconsume) !== null && _this$inventoryItems$ !== void 0 && _this$inventoryItems$.isEnabled) {
          var _this$inventoryItems$2, _this$inventoryItems$3;
          // check if matching rules
          var isMatching = (0,_shared_utils_rule_utils__WEBPACK_IMPORTED_MODULE_3__.checkMatchingRules)((_this$inventoryItems$2 = this.inventoryItems[itemId]) === null || _this$inventoryItems$2 === void 0 || (_this$inventoryItems$2 = _this$inventoryItems$2.autoconsume) === null || _this$inventoryItems$2 === void 0 ? void 0 : _this$inventoryItems$2.rules, (_this$inventoryItems$3 = this.inventoryItems[itemId]) === null || _this$inventoryItems$3 === void 0 || (_this$inventoryItems$3 = _this$inventoryItems$3.autoconsume) === null || _this$inventoryItems$3 === void 0 ? void 0 : _this$inventoryItems$3.pattern);

          // console.log('RULES MATCHED: ', isMatching);
          if (isMatching) {
            var _this$inventoryItems$4, _gameResources$getRes2;
            var amount = 1;
            var reserved = ((_this$inventoryItems$4 = this.inventoryItems[itemId]) === null || _this$inventoryItems$4 === void 0 || (_this$inventoryItems$4 = _this$inventoryItems$4.autosell) === null || _this$inventoryItems$4 === void 0 ? void 0 : _this$inventoryItems$4.reserved) || 0;
            var reserveLimit = Math.floor(Math.max(0, game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource(itemId).amount - reserved));
            if ((_gameResources$getRes2 = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource(itemId).attributes) !== null && _gameResources$getRes2 !== void 0 && _gameResources$getRes2.allowMultiConsume) {
              amount = reserveLimit;
            }
            if (amount > 0) {
              this.consumeItem(itemId, amount);
            }
          }
        }
        if ((_this$inventoryItems$5 = this.inventoryItems[itemId]) !== null && _this$inventoryItems$5 !== void 0 && (_this$inventoryItems$5 = _this$inventoryItems$5.autosell) !== null && _this$inventoryItems$5 !== void 0 && _this$inventoryItems$5.isEnabled) {
          var _this$inventoryItems$6, _this$inventoryItems$7, _this$inventoryItems$8;
          var coinsRs = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource('coins');
          if (coinsRs.cap - coinsRs.amount <= game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_4__.SMALL_NUMBER) {
            continue;
          }
          ; // don't waste items since coins are capped
          var _isMatching = (0,_shared_utils_rule_utils__WEBPACK_IMPORTED_MODULE_3__.checkMatchingRules)((_this$inventoryItems$6 = this.inventoryItems[itemId]) === null || _this$inventoryItems$6 === void 0 || (_this$inventoryItems$6 = _this$inventoryItems$6.autosell) === null || _this$inventoryItems$6 === void 0 ? void 0 : _this$inventoryItems$6.rules, (_this$inventoryItems$7 = this.inventoryItems[itemId]) === null || _this$inventoryItems$7 === void 0 || (_this$inventoryItems$7 = _this$inventoryItems$7.autosell) === null || _this$inventoryItems$7 === void 0 ? void 0 : _this$inventoryItems$7.pattern);
          if (!('stockCapacity' in this.inventoryItems[itemId])) {
            this.inventoryItems[itemId].stockCapacity = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('shop_max_stock');
          }
          var sellAmount = this.inventoryItems[itemId].stockCapacity;
          // now we should understand that we do not violate resource rule
          var _reserved = ((_this$inventoryItems$8 = this.inventoryItems[itemId]) === null || _this$inventoryItems$8 === void 0 || (_this$inventoryItems$8 = _this$inventoryItems$8.autosell) === null || _this$inventoryItems$8 === void 0 ? void 0 : _this$inventoryItems$8.reserved) || 0;
          var _reserveLimit = Math.floor(Math.max(0, game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource(itemId).amount - _reserved));
          var realSell = Math.min(sellAmount, _reserveLimit);
          // console.log('INVDEBUG Reserved: ', itemId, reserved, reserveLimit, sellAmount, realSell, gameResources.getResource(itemId).amount, this.inventoryItems[itemId]);

          if (_isMatching) {
            this.sellItem(itemId, Math.min(sellAmount, _reserveLimit));
          }
        }
      }
      if (this.autoConsumeCD <= 0) {
        this.autoConsumeCD = 2;
      }
    }
  }, {
    key: "save",
    value: function save() {
      return {
        inventory: this.inventoryItems,
        selectedFilterId: this.selectedFilterId,
        searchData: this.searchData
      };
    }
  }, {
    key: "load",
    value: function load(saveObject) {
      var _saveObject$inventory;
      for (var key in this.inventoryItems) {
        if (this.inventoryItems[key].duration && this.inventoryItems[key].duration > 0) {
          // we should unset existing
          if (game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.entityExists("active_".concat(key))) {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.unsetEntity("active_".concat(key));
          }
        }
      }
      this.inventoryItems = (_saveObject$inventory = saveObject === null || saveObject === void 0 ? void 0 : saveObject.inventory) !== null && _saveObject$inventory !== void 0 ? _saveObject$inventory : {};
      this.selectedFilterId = (saveObject === null || saveObject === void 0 ? void 0 : saveObject.selectedFilterId) || 'all';
      this.searchData = (saveObject === null || saveObject === void 0 ? void 0 : saveObject.searchData) || {
        search: '',
        selectedScopes: ['name', 'tags']
      };
      for (var _key in this.inventoryItems) {
        if (!('stockCapacity' in this.inventoryItems[_key])) {
          this.inventoryItems[_key].stockCapacity = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('shop_max_stock');
        }
        if (this.inventoryItems[_key].duration && this.inventoryItems[_key].duration > 0) {
          var _gameResources$getRes3;
          // console.log('INVDEBUG REGISTER ITEM '+key+':', this.inventoryItems[key]);
          game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.registerGameEntity("active_".concat(_key), {
            originalId: _key,
            name: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource(_key).name,
            isAbstract: false,
            tags: ['active_consumable', 'active_effect'],
            scope: 'resources',
            level: 1,
            resourceModifier: (_gameResources$getRes3 = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource(_key).resourceModifier) !== null && _gameResources$getRes3 !== void 0 ? _gameResources$getRes3 : undefined
          });
          game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.setEntityLevel("active_".concat(_key), 1);
        }
      }
      this.sendInventoryData(this.selectedFilterId, {
        searchData: this.searchData
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.load({});
    }
  }, {
    key: "getConsumeAffordable",
    value: function getConsumeAffordable(resource, realCons) {
      var result = {
        isAffordable: true,
        consume: {}
      };
      if (resource.usageGain) {
        var effects = game_framework__WEBPACK_IMPORTED_MODULE_0__.resourceApi.unpackEffects(resource.usageGain, realCons);
        if (effects.length) {
          var rsToRemove = effects.filter(function (eff) {
            return eff.scope === 'consumption' && eff.type === 'resources';
          });

          // console.log('IIII: ', effects, rsToRemove, realCons);

          rsToRemove.forEach(function (rs) {
            result.consume[rs.id] = rs.value;
            if (result.consume[rs.id] > game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource(rs.id).amount) {
              result.isAffordable = false;
            }
          });
        }
      }
      return result;
    }
  }, {
    key: "consumeItem",
    value: function consumeItem(id, amount) {
      var resource = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource(id);
      var realCons = Math.min(amount, resource.amount);
      if (this.inventoryItems[id] && (this.inventoryItems[id].cooldown > 0 || this.inventoryItems[id].duration > 0)) return;
      if (realCons < 1) return;
      if (resource.usageGain || resource.resourceModifier) {
        var _resource$attributes;
        var aff = this.getConsumeAffordable(resource, realCons);
        if (!aff.isAffordable) {
          return;
        }
        var effects = game_framework__WEBPACK_IMPORTED_MODULE_0__.resourceApi.unpackEffects(resource.usageGain || {}, realCons);
        if (effects.length) {
          var rsToAdd = effects.filter(function (eff) {
            return eff.scope === 'income' && eff.type === 'resources';
          });

          // console.log('consAddR: ', effects, rsToAdd, realCons);

          rsToAdd.forEach(function (rs) {
            game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.addResource(rs.id, rs.value);
          });
        }
        for (var key in aff.consume) {
          game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.addResource(key, -aff.consume[key]);
        }
        if (!this.inventoryItems[id]) {
          this.inventoryItems[id] = {
            stockCapacity: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('shop_max_stock')
          };
        }
        this.inventoryItems[id].isConsumed = true;
        if ((_resource$attributes = resource.attributes) !== null && _resource$attributes !== void 0 && _resource$attributes.duration && resource.resourceModifier) {
          var _resource$resourceMod;
          // has active effect

          game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.registerGameEntity("active_".concat(id), {
            originalId: id,
            name: resource.name,
            isAbstract: false,
            level: 1,
            tags: ['active_consumable', 'active_effect'],
            scope: 'resources',
            resourceModifier: (_resource$resourceMod = resource.resourceModifier) !== null && _resource$resourceMod !== void 0 ? _resource$resourceMod : undefined
          });
          game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.setEntityLevel("active_".concat(id), 1);
          this.inventoryItems[id].duration = resource.attributes.duration;
        } else {
          var _resource$getUsageCoo;
          this.inventoryItems[id].cooldown = (_resource$getUsageCoo = resource.getUsageCooldown()) !== null && _resource$getUsageCoo !== void 0 ? _resource$getUsageCoo : 0;
        }
      }
      if (resource.onUse) {
        resource.onUse(realCons);
      }
      this.inventoryItems[id].numConsumed = (this.inventoryItems[id].numConsumed || 0) + realCons;
      game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.addResource(id, -realCons);
      this.sendInventoryData(this.selectedFilterId, {
        searchData: this.searchData
      });
    }
  }, {
    key: "sellItem",
    value: function sellItem(id, amount) {
      var _this$inventoryItems$9;
      var resource = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource(id);
      var realCons = Math.min(amount, resource.amount, ((_this$inventoryItems$9 = this.inventoryItems[id]) === null || _this$inventoryItems$9 === void 0 ? void 0 : _this$inventoryItems$9.stockCapacity) || 10);
      if (this.inventoryItems[id] && this.inventoryItems[id].stockCapacity <= 0) return;
      if (realCons < 1) return;
      if (resource.sellPrice) {
        if (!this.inventoryItems[id]) {
          this.inventoryItems[id] = {
            stockCapacity: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('shop_max_stock')
          };
        }
        this.inventoryItems[id].stockCapacity -= realCons;
        if (!this.inventoryItems[id].soldAmount) {
          this.inventoryItems[id].soldAmount = 0;
        }
        if (!this.inventoryItems[id].coinsEarned) {
          this.inventoryItems[id].coinsEarned = 0;
        }
        var earnings = realCons * resource.sellPrice * (0,_inventory_items_db__WEBPACK_IMPORTED_MODULE_2__.sellPriceMod)(game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('attribute_bargaining'));
        game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.addResource(id, -realCons);
        game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.addResource('coins', earnings);
        this.inventoryItems[id].soldAmount += realCons;
        this.inventoryItems[id].coinsEarned += earnings;
      }
      this.sendInventoryData(this.selectedFilterId, {
        searchData: this.searchData
      });
    }
  }, {
    key: "saveSettings",
    value: function saveSettings(payload) {
      if (payload.id) {
        this.inventoryItems[payload.id] = _objectSpread(_objectSpread({}, this.inventoryItems[payload.id]), {}, {
          autoconsume: payload.autoconsume,
          autosell: payload.autosell
        });
      }
    }
  }, {
    key: "regenerateNotifications",
    value: function regenerateNotifications() {
      // NOW - check for actions if they have any new notifications

      this.filters.forEach(function (filter) {
        var items = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.listResourcesByTags(['inventory'].concat(_toConsumableArray(filter.tags)));
        items.forEach(function (item) {
          game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('unlock-notifications').registerNewNotification('inventory', 'all', filter.id, "inventory_".concat(item.id), item.isUnlocked && (game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource(item.id).amount >= game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_4__.SMALL_NUMBER || Math.abs(game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource(item.id).income) >= game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_4__.SMALL_NUMBER));
        });
      });
    }
  }, {
    key: "matchInventorySearch",
    value: function matchInventorySearch(one, searchData) {
      var _one$searchableMeta, _one$searchableMeta2, _one$searchableMeta3, _one$searchableMeta4;
      if (!searchData) return true;
      var search = searchData.search,
        selectedScopes = searchData.selectedScopes;
      if (!search) return true;
      if (selectedScopes.includes('name') && one.name.toLowerCase().includes(search)) return true;
      if (selectedScopes.includes('tags') && one.tags && one.tags.some(function (tag) {
        return tag.includes(search);
      })) return true;
      if (selectedScopes.includes('resources') && (_one$searchableMeta = one.searchableMeta) !== null && _one$searchableMeta !== void 0 && _one$searchableMeta['resources'] && (_one$searchableMeta2 = one.searchableMeta) !== null && _one$searchableMeta2 !== void 0 && _one$searchableMeta2['resources'].some(function (tag) {
        return tag.includes(search.toLowerCase());
      })) return true;
      if (selectedScopes.includes('effects') && (_one$searchableMeta3 = one.searchableMeta) !== null && _one$searchableMeta3 !== void 0 && _one$searchableMeta3['effects'] && (_one$searchableMeta4 = one.searchableMeta) !== null && _one$searchableMeta4 !== void 0 && _one$searchableMeta4['effects'].some(function (tag) {
        return tag.includes(search.toLowerCase());
      })) return true;
      return false;
    }
  }, {
    key: "getItemsData",
    value: function getItemsData(filterId, pl) {
      var _this2 = this,
        _this$searchData;
      var perCats = this.filters.reduce(function (acc, filter) {
        acc[filter.id] = {
          id: filter.id,
          name: filter.name,
          tags: filter.tags,
          items: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.listResourcesByTags(['inventory'].concat(_toConsumableArray(filter.tags))).filter(function (one) {
            var _this2$inventoryItems, _this2$inventoryItems2, _this2$inventoryItems3, _this2$inventoryItems4;
            return one.isUnlocked && !one.isCapped && (game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource(one.id).amount >= game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_4__.SMALL_NUMBER || Math.abs(game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource(one.id).income) >= game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_4__.SMALL_NUMBER || ((_this2$inventoryItems = _this2.inventoryItems[one.id]) === null || _this2$inventoryItems === void 0 || (_this2$inventoryItems = _this2$inventoryItems.autoconsume) === null || _this2$inventoryItems === void 0 || (_this2$inventoryItems = _this2$inventoryItems.rules) === null || _this2$inventoryItems === void 0 ? void 0 : _this2$inventoryItems.length) || ((_this2$inventoryItems2 = _this2.inventoryItems[one.id]) === null || _this2$inventoryItems2 === void 0 || (_this2$inventoryItems2 = _this2$inventoryItems2.autoconsume) === null || _this2$inventoryItems2 === void 0 ? void 0 : _this2$inventoryItems2.isEnabled) || ((_this2$inventoryItems3 = _this2.inventoryItems[one.id]) === null || _this2$inventoryItems3 === void 0 || (_this2$inventoryItems3 = _this2$inventoryItems3.autosell) === null || _this2$inventoryItems3 === void 0 || (_this2$inventoryItems3 = _this2$inventoryItems3.rules) === null || _this2$inventoryItems3 === void 0 ? void 0 : _this2$inventoryItems3.length) || ((_this2$inventoryItems4 = _this2.inventoryItems[one.id]) === null || _this2$inventoryItems4 === void 0 || (_this2$inventoryItems4 = _this2$inventoryItems4.autosell) === null || _this2$inventoryItems4 === void 0 ? void 0 : _this2$inventoryItems4.isEnabled)) && _this2.matchInventorySearch(one, pl.searchData);
          }),
          isSelected: filterId === filter.id
        };
        return acc;
      }, {});
      if (!filterId) {
        filterId = 'all';
      }
      var entities = perCats[filterId].items;
      var presentItems = entities;
      if (pl !== null && pl !== void 0 && pl.filterAutomatedSell) {
        presentItems = presentItems.filter(function (p) {
          var _this2$inventoryItems5, _this2$inventoryItems6;
          return ((_this2$inventoryItems5 = _this2.inventoryItems[p.id]) === null || _this2$inventoryItems5 === void 0 || (_this2$inventoryItems5 = _this2$inventoryItems5.autosell) === null || _this2$inventoryItems5 === void 0 || (_this2$inventoryItems5 = _this2$inventoryItems5.rules) === null || _this2$inventoryItems5 === void 0 ? void 0 : _this2$inventoryItems5.length) || ((_this2$inventoryItems6 = _this2.inventoryItems[p.id]) === null || _this2$inventoryItems6 === void 0 || (_this2$inventoryItems6 = _this2$inventoryItems6.autosell) === null || _this2$inventoryItems6 === void 0 ? void 0 : _this2$inventoryItems6.isEnabled);
        });
      }
      if (pl !== null && pl !== void 0 && pl.filterAutomatedConsume) {
        presentItems = presentItems.filter(function (p) {
          var _this2$inventoryItems7, _this2$inventoryItems8;
          return ((_this2$inventoryItems7 = _this2.inventoryItems[p.id]) === null || _this2$inventoryItems7 === void 0 || (_this2$inventoryItems7 = _this2$inventoryItems7.autoconsume) === null || _this2$inventoryItems7 === void 0 || (_this2$inventoryItems7 = _this2$inventoryItems7.rules) === null || _this2$inventoryItems7 === void 0 ? void 0 : _this2$inventoryItems7.length) || ((_this2$inventoryItems8 = _this2.inventoryItems[p.id]) === null || _this2$inventoryItems8 === void 0 || (_this2$inventoryItems8 = _this2$inventoryItems8.autoconsume) === null || _this2$inventoryItems8 === void 0 ? void 0 : _this2$inventoryItems8.isEnabled);
        });
      }
      if (pl !== null && pl !== void 0 && pl.includeAutomations) {
        presentItems = presentItems.map(function (item) {
          var _this2$inventoryItems9, _this2$inventoryItems10, _this2$inventoryItems11, _this2$inventoryItems12;
          return _objectSpread(_objectSpread({}, item), {}, {
            autoconsume: (_this2$inventoryItems9 = (_this2$inventoryItems10 = _this2.inventoryItems[item.id]) === null || _this2$inventoryItems10 === void 0 ? void 0 : _this2$inventoryItems10.autoconsume) !== null && _this2$inventoryItems9 !== void 0 ? _this2$inventoryItems9 : {
              rules: []
            },
            autosell: (_this2$inventoryItems11 = (_this2$inventoryItems12 = _this2.inventoryItems[item.id]) === null || _this2$inventoryItems12 === void 0 ? void 0 : _this2$inventoryItems12.autosell) !== null && _this2$inventoryItems11 !== void 0 ? _this2$inventoryItems11 : {
              rules: []
            }
          });
        });
      }
      return {
        available: presentItems.map(function (resource) {
          var _resource$attributes2, _this2$inventoryItems13, _this2$inventoryItems14, _this2$inventoryItems15, _this2$inventoryItems16, _this2$inventoryItems17, _resource$attributes3, _gameCore$getModule$p;
          return _objectSpread(_objectSpread({}, resource), {}, {
            isRare: (_resource$attributes2 = resource.attributes) === null || _resource$attributes2 === void 0 ? void 0 : _resource$attributes2.isRare,
            isConsumable: resource.tags.includes('consumable'),
            isConsumed: (_this2$inventoryItems13 = _this2.inventoryItems[resource.id]) === null || _this2$inventoryItems13 === void 0 ? void 0 : _this2$inventoryItems13.isConsumed,
            cooldown: (_this2$inventoryItems14 = (_this2$inventoryItems15 = _this2.inventoryItems[resource.id]) === null || _this2$inventoryItems15 === void 0 ? void 0 : _this2$inventoryItems15.cooldown) !== null && _this2$inventoryItems14 !== void 0 ? _this2$inventoryItems14 : 0,
            cooldownProg: resource.getUsageCooldown ? (resource.getUsageCooldown() + game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_4__.SMALL_NUMBER - ((_this2$inventoryItems16 = (_this2$inventoryItems17 = _this2.inventoryItems[resource.id]) === null || _this2$inventoryItems17 === void 0 ? void 0 : _this2$inventoryItems17.cooldown) !== null && _this2$inventoryItems16 !== void 0 ? _this2$inventoryItems16 : 0)) / (resource.getUsageCooldown() + game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_4__.SMALL_NUMBER) : 1,
            allowMultiConsume: (_resource$attributes3 = resource.attributes) === null || _resource$attributes3 === void 0 ? void 0 : _resource$attributes3.allowMultiConsume,
            isPinned: !!((_gameCore$getModule$p = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('resource-pool').pinnedResources) !== null && _gameCore$getModule$p !== void 0 && _gameCore$getModule$p[resource.id])
          });
        }),
        itemCategories: Object.values(perCats).filter(function (cat) {
          return cat.items.length > 0;
        }),
        payload: pl,
        selectedFilterId: filterId,
        searchData: (_this$searchData = this.searchData) !== null && _this$searchData !== void 0 ? _this$searchData : {
          search: '',
          selectedScopes: ['name']
        },
        automationUnlocked: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_planner') > 0,
        details: {
          /*metabolism_rate: {...gameEffects.getEffect('metabolism_rate'), isMultiplier: false},
          cooldown_bonus: {
              ...gameEffects.getEffect('metabolism_rate'),
              id: 'cooldown_bonus',
              name: 'Consumable Effects Multiplier',
              description: 'Herbs and Potions effects multiplier (metabolism^0.25)',
              value: metabolismIntensityMod(gameEffects.getEffectValue('metabolism_rate')),
              isMultiplier: true,
          },*/
          bargaining: _objectSpread(_objectSpread({}, game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffect('attribute_bargaining')), {}, {
            isMultiplier: false
          }),
          bargaining_mod: _objectSpread(_objectSpread({}, game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffect('attribute_bargaining')), {}, {
            id: 'bargaining_mod',
            description: 'Sell price multiplier from bargaining (1 + 0.02*log2(bargaining)^2)',
            name: 'Bargaining Sell Price Mult',
            value: (0,_inventory_items_db__WEBPACK_IMPORTED_MODULE_2__.sellPriceMod)(game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('attribute_bargaining')),
            isMultiplier: true
          }),
          shop_max_stock: _objectSpread(_objectSpread({}, game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffect('shop_max_stock')), {}, {
            isMultiplier: false
          }),
          shop_stock_renew_rate: _objectSpread(_objectSpread({}, game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffect('shop_stock_renew_rate')), {}, {
            id: 'shop_stock_renew_rate',
            isMultiplier: false
          })
        }
      };
    }
  }, {
    key: "sendInventoryData",
    value: function sendInventoryData(filter, pl) {
      var data = this.getItemsData(filter, pl);
      var label = 'inventory-data';
      if (pl !== null && pl !== void 0 && pl.prefix) {
        label = "".concat(label, "-").concat(pl.prefix);
      }
      this.eventHandler.sendData(label, data);
    }
  }, {
    key: "getItemDetails",
    value: function getItemDetails(id) {
      var _resource$attributes4, _this$inventoryItems$10, _this$inventoryItems$11, _this$inventoryItems$12, _this$inventoryItems$13, _this$inventoryItems$14, _this$inventoryItems$15, _this$inventoryItems$16, _resource$attributes7, _this$inventoryItems$17, _this$inventoryItems$18, _this$inventoryItems$19, _this$inventoryItems$20, _this$inventoryItems$21, _this$inventoryItems$22, _this$inventoryItems$23, _gameCore$getModule$p2;
      if (!id) return null;
      var resource = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource(id);
      var effects = [];
      if (resource.usageGain) {
        effects = game_framework__WEBPACK_IMPORTED_MODULE_0__.resourceApi.unpackEffects(resource.usageGain, 1);
      }

      // const currentEffects = resource.attributes?.entityEffect ? gameEntity.getEffects(resource.attributes?.entityEffect) : null;
      // let potentialEffects = resource.resourceModifier ? resourceApi.unpackEffects(resource.resourceModifier, 1) : [];

      var permanentEffects;
      var potentialPermanentEffects;
      if ((_resource$attributes4 = resource.attributes) !== null && _resource$attributes4 !== void 0 && _resource$attributes4.entityEffect) {
        var _resource$attributes5, _resource$attributes6;
        permanentEffects = (0,_shared_utils_objects__WEBPACK_IMPORTED_MODULE_5__.packEffects)(game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEffects((_resource$attributes5 = resource.attributes) === null || _resource$attributes5 === void 0 ? void 0 : _resource$attributes5.entityEffect));
        potentialPermanentEffects = (0,_shared_utils_objects__WEBPACK_IMPORTED_MODULE_5__.packEffects)(game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEffects((_resource$attributes6 = resource.attributes) === null || _resource$attributes6 === void 0 ? void 0 : _resource$attributes6.entityEffect, 1));
      }

      // console.log('EEFF: ', resource.attributes?.entityEffect, permanentEffects, potentialPermanentEffects);
      return {
        id: resource.id,
        name: resource.name,
        description: resource.description,
        breakdown: resource.breakdown,
        amount: Math.floor(resource.amount || 0),
        isConsumable: resource.tags.includes('consumable'),
        effects: effects,
        tags: resource.tags || [],
        autoconsume: (_this$inventoryItems$10 = (_this$inventoryItems$11 = this.inventoryItems[resource.id]) === null || _this$inventoryItems$11 === void 0 ? void 0 : _this$inventoryItems$11.autoconsume) !== null && _this$inventoryItems$10 !== void 0 ? _this$inventoryItems$10 : {
          rules: []
        },
        autosell: (_this$inventoryItems$12 = (_this$inventoryItems$13 = this.inventoryItems[resource.id]) === null || _this$inventoryItems$13 === void 0 ? void 0 : _this$inventoryItems$13.autosell) !== null && _this$inventoryItems$12 !== void 0 ? _this$inventoryItems$12 : {
          rules: []
        },
        isConsumed: (_this$inventoryItems$14 = this.inventoryItems[resource.id]) === null || _this$inventoryItems$14 === void 0 ? void 0 : _this$inventoryItems$14.isConsumed,
        isSellable: !!resource.sellPrice,
        sellPrice: resource.sellPrice * (0,_inventory_items_db__WEBPACK_IMPORTED_MODULE_2__.sellPriceMod)(game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('attribute_bargaining')),
        maxSell: Math.min((_this$inventoryItems$15 = (_this$inventoryItems$16 = this.inventoryItems[resource.id]) === null || _this$inventoryItems$16 === void 0 ? void 0 : _this$inventoryItems$16.stockCapacity) !== null && _this$inventoryItems$15 !== void 0 ? _this$inventoryItems$15 : game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('shop_max_stock'), Math.floor(resource.amount)),
        duration: ((_resource$attributes7 = resource.attributes) === null || _resource$attributes7 === void 0 ? void 0 : _resource$attributes7.duration) || 0,
        potentialEffects: resource.resourceModifier ? game_framework__WEBPACK_IMPORTED_MODULE_0__.resourceApi.unpackEffects(resource.resourceModifier, 1) : [],
        consumptionCooldown: resource.getUsageCooldown ? resource.getUsageCooldown() : 0,
        cooldownProg: resource.getUsageCooldown ? (resource.getUsageCooldown() - ((_this$inventoryItems$17 = (_this$inventoryItems$18 = this.inventoryItems[resource.id]) === null || _this$inventoryItems$18 === void 0 ? void 0 : _this$inventoryItems$18.cooldown) !== null && _this$inventoryItems$17 !== void 0 ? _this$inventoryItems$17 : 0)) / resource.getUsageCooldown() : 1,
        permanentEffects: permanentEffects,
        potentialPermanentEffects: potentialPermanentEffects,
        numConsumed: ((_this$inventoryItems$19 = this.inventoryItems[resource.id]) === null || _this$inventoryItems$19 === void 0 ? void 0 : _this$inventoryItems$19.numConsumed) || 0,
        soldAmount: ((_this$inventoryItems$20 = this.inventoryItems[resource.id]) === null || _this$inventoryItems$20 === void 0 ? void 0 : _this$inventoryItems$20.soldAmount) || 0,
        coinsEarned: ((_this$inventoryItems$21 = this.inventoryItems[resource.id]) === null || _this$inventoryItems$21 === void 0 ? void 0 : _this$inventoryItems$21.coinsEarned) || 0,
        currentCooldown: ((_this$inventoryItems$22 = this.inventoryItems[id]) === null || _this$inventoryItems$22 === void 0 ? void 0 : _this$inventoryItems$22.cooldown) || 0,
        currentDuration: ((_this$inventoryItems$23 = this.inventoryItems[id]) === null || _this$inventoryItems$23 === void 0 ? void 0 : _this$inventoryItems$23.duration) || 0,
        isPinned: !!((_gameCore$getModule$p2 = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('resource-pool').pinnedResources) !== null && _gameCore$getModule$p2 !== void 0 && _gameCore$getModule$p2[resource.id])
      };
    }
  }, {
    key: "sendItemDetails",
    value: function sendItemDetails(id, prefix) {
      var data = this.getItemDetails(id);
      var label = 'inventory-details';
      if (prefix) {
        label = "".concat(prefix, "-").concat(label);
      }
      this.eventHandler.sendData(label, data);
    }
  }, {
    key: "sendSellDetails",
    value: function sendSellDetails(id) {
      var _this$inventoryItems$24, _this$inventoryItems$25;
      if (!id) return null;
      var resource = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource(id);
      var data = {
        id: id,
        isSellable: !!resource.sellPrice,
        sellPrice: resource.sellPrice,
        maxSell: Math.min((_this$inventoryItems$24 = (_this$inventoryItems$25 = this.inventoryItems[resource.id]) === null || _this$inventoryItems$25 === void 0 ? void 0 : _this$inventoryItems$25.stockCapacity) !== null && _this$inventoryItems$24 !== void 0 ? _this$inventoryItems$24 : game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('shop_max_stock'), Math.floor(resource.amount))
      };
      this.eventHandler.sendData('sell-details', data);
    }
  }]);
}(_shared_game_module__WEBPACK_IMPORTED_MODULE_1__.GameModule);

export { InventoryModule };
