import * as game_framework__WEBPACK_IMPORTED_MODULE_0__ from '../../../framework/index.js';
import * as _shared_game_module__WEBPACK_IMPORTED_MODULE_1__ from '../../shared/game-module.js';
import * as _shop_db__WEBPACK_IMPORTED_MODULE_2__ from './shop-db.js';
import * as _inventory_inventory_items_db__WEBPACK_IMPORTED_MODULE_3__ from '../inventory/inventory-items-db.js';
import * as game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_4__ from '../../../framework/src/utils/consts.js';

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





var ShopModule = /*#__PURE__*/function (_GameModule) {
  function ShopModule() {
    var _this;
    _classCallCheck(this, ShopModule);
    _this = _callSuper(this, ShopModule);
    _this.purchasedItems = {};
    _this.isUnlocked = false;
    _this.leveledId = null;
    _this.purchaseMultiplier = 1;
    _this.autoPurchase = {};
    _this.autoPurchaseCd = 0;
    _this.sellStocks = {};
    _this.showMaxed = false;
    _this.stockRenewTimer = 0;
    _this.eventHandler.registerHandler('set-shop-autopurchase', function (_ref) {
      var id = _ref.id,
        flag = _ref.flag;
      var entities = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.listEntitiesByTags(['shop']).filter(function (one) {
        return one.isUnlocked && !one.isCapped;
      });
      entities.forEach(function (e) {
        if (!id || id === e.id) {
          _this.autoPurchase[e.id] = flag;
        }
      });
      _this.sendItemsData();
    });
    _this.eventHandler.registerHandler('set-purchase-multiplier', function (payload) {
      _this.setPurchaseMultiplier(payload.amount);
    });
    _this.eventHandler.registerHandler('purchase-item', function (payload) {
      _this.purchaseItem(payload.id);
    });
    _this.eventHandler.registerHandler('purchase-resource', function (payload) {
      _this.purchaseResource(payload.id, payload.amount);
    });
    _this.eventHandler.registerHandler('query-items-data', function (payload) {
      _this.sendItemsData();
    });
    _this.eventHandler.registerHandler('query-item-details', function (payload) {
      _this.sendItemDetails(payload.id);
    });
    _this.eventHandler.registerHandler('query-items-resources-data', function (payload) {
      _this.sendPurchaseableItemsData();
    });
    _this.eventHandler.registerHandler('query-item-resource-details', function (payload) {
      _this.sendPurchaseableItemDetails(payload.id);
    });
    _this.eventHandler.registerHandler('query-general-shop-stats', function (payload) {
      _this.sendGeneralShopStats(payload);
    });
    _this.eventHandler.registerHandler('set-shop-show-maxed', function (_ref2) {
      var flag = _ref2.flag;
      _this.showMaxed = flag;
      _this.sendItemsData();
    });
    return _this;
  }
  _inherits(ShopModule, _GameModule);
  return _createClass(ShopModule, [{
    key: "initialize",
    value: function initialize() {
      (0,_shop_db__WEBPACK_IMPORTED_MODULE_2__.registerShopItemsStage1)();
    }
  }, {
    key: "tick",
    value: function tick(game, delta) {
      var _this2 = this;
      if (!this.isUnlocked && game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource('coins').amount >= 2) {
        this.isUnlocked = true;
      }
      this.stockRenewTimer += delta;
      if (this.stockRenewTimer >= 1) {
        this.stockRenewTimer = 0;
        var items = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.listResourcesByTags(['inventory']);
        // console.log('items: ', items);
        var presentItems = items.filter(function (item) {
          return item.isUnlocked && item.get_cost;
        });
        presentItems.forEach(function (one) {
          var _one$purchaseRenewRat;
          var purchaseRenewRate = (_one$purchaseRenewRat = one.purchaseRenewRate) !== null && _one$purchaseRenewRat !== void 0 ? _one$purchaseRenewRat : 1;
          if (!(one.id in _this2.sellStocks)) {
            _this2.sellStocks[one.id] = 1000 * purchaseRenewRate;
          }
          if (_this2.sellStocks[one.id] < 1000 * purchaseRenewRate) {
            _this2.sellStocks[one.id] += 2 * purchaseRenewRate;
          }
        });
      }
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
              if (!game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.isEntityUnlocked(key)) {
                this.autoPurchase[key] = false;
                continue;
              }
              if (game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.isCapped(key)) {
                this.autoPurchase[key] = false;
                continue;
              }
              var newEnt = this.purchaseItem(key);
              // console.log('Purchase Auto: ', key, newEnt)
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
        items: this.purchasedItems,
        isUnlocked: this.isUnlocked,
        purchaseMultiplier: this.purchaseMultiplier,
        autoPurchase: this.autoPurchase,
        sellStocks: this.sellStocks
      };
    }
  }, {
    key: "load",
    value: function load(saveObject) {
      for (var key in this.purchasedItems) {
        this.setItem(key, 0, true);
      }
      this.purchasedItems = {};
      if (saveObject !== null && saveObject !== void 0 && saveObject.items) {
        for (var id in saveObject.items) {
          this.setItem(id, saveObject.items[id], true);
        }
      }
      this.isUnlocked = (saveObject === null || saveObject === void 0 ? void 0 : saveObject.isUnlocked) || false;
      this.purchaseMultiplier = (saveObject === null || saveObject === void 0 ? void 0 : saveObject.purchaseMultiplier) || 1;
      this.autoPurchase = (saveObject === null || saveObject === void 0 ? void 0 : saveObject.autoPurchase) || {};
      this.sellStocks = (saveObject === null || saveObject === void 0 ? void 0 : saveObject.sellStocks) || {};
      this.sendItemsData();
    }
  }, {
    key: "reset",
    value: function reset() {
      this.load({});
    }
  }, {
    key: "setItem",
    value: function setItem(itemId, amount) {
      var bForce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.setEntityLevel(itemId, amount, bForce);
      this.purchasedItems[itemId] = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel(itemId);
    }
  }, {
    key: "setPurchaseMultiplier",
    value: function setPurchaseMultiplier(amount) {
      this.purchaseMultiplier = Math.max(1, amount);
      // console.log('Set to: ', this.purchaseMultiplier);
      this.sendPurchaseableItemsData();
    }
  }, {
    key: "purchaseItem",
    value: function purchaseItem(itemId) {
      var newEnt = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.levelUpEntity(itemId);
      // console.log('Purchase: ', itemId, newEnt)
      if (newEnt.success) {
        this.purchasedItems[itemId] = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel(itemId);
        this.leveledId = itemId;
        game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('unlock-notifications').generateNotifications();
        this.sendItemsData();
      }
      return newEnt.success;
    }
  }, {
    key: "purchaseResource",
    value: function purchaseResource(itemId) {
      var _this$sellStocks$item;
      var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var res = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource(itemId);
      var cost = res.get_cost();
      var aff = game_framework__WEBPACK_IMPORTED_MODULE_0__.resourceCalculators.isAffordable(cost);

      // console.log('Affb: ', aff);
      amount = Math.min(amount, aff.max, (_this$sellStocks$item = this.sellStocks[itemId]) !== null && _this$sellStocks$item !== void 0 ? _this$sellStocks$item : 0);
      if (aff.isAffordable) {
        for (var key in cost) {
          game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.addResource(key, -cost[key] * amount);
        }
        game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.addResource(itemId, amount);
        this.sellStocks[itemId] -= amount;
        this.leveledId = itemId;
        this.sendPurchaseableItemsData();
      }
    }
  }, {
    key: "regenerateNotifications",
    value: function regenerateNotifications() {
      // NOW - check for actions if they have any new notifications
      var entities = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.listEntitiesByTags(['shop']);
      entities.forEach(function (entity) {
        game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('unlock-notifications').registerNewNotification('shop', 'upgrades', 'all', "shop_".concat(entity.id), entity.isUnlocked && !entity.isCapped);
      });
      var items = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.listResourcesByTags(['inventory']);
      var presentItems = items.filter(function (item) {
        return item.isUnlocked && item.get_cost;
      });
      presentItems.forEach(function (entity) {
        game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('unlock-notifications').registerNewNotification('shop', 'inventory', 'all', "shop_".concat(entity.id), entity.isUnlocked);
      });
    }
  }, {
    key: "sendGeneralShopStats",
    value: function sendGeneralShopStats(payload) {
      var stats = [];
      if (Math.abs(game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('prices_discount') - 1) > game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_4__.SMALL_NUMBER) {
        stats.push(game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffect('prices_discount'));
      }
      if (Math.abs((0,_shop_db__WEBPACK_IMPORTED_MODULE_2__.charismaMod)(game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('attribute_charisma')) - 1) > game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_4__.SMALL_NUMBER) {
        stats.push({
          name: 'Charisma Price Discount',
          description: 'Upgrades and items purchase discount based on your charisma attribute (1./(1 + 0.02*log2(charisma)^2))',
          value: (0,_shop_db__WEBPACK_IMPORTED_MODULE_2__.charismaMod)(game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('attribute_charisma'))
        });
      }
      this.eventHandler.sendData('general-shop-stats', {
        stats: stats
      });
    }
  }, {
    key: "getItemsData",
    value: function getItemsData() {
      var _this3 = this;
      var entities = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.listEntitiesByTags(['shop']);
      var total = entities.length;
      var totalComplete = entities.filter(function (e) {
        return e.isCapped;
      }).length;
      return {
        available: entities.filter(function (one) {
          return one.isUnlocked && (!one.isCapped || _this3.showMaxed);
        }).map(function (entity) {
          var _this3$autoPurchase$e;
          return {
            id: entity.id,
            name: entity.name,
            description: entity.description,
            max: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEntityMaxLevel(entity.id),
            level: _this3.purchasedItems[entity.id] || 0,
            affordable: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getAffordable(entity.id),
            potentialEffects: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEffects(entity.id, 1),
            isLeveled: _this3.leveledId === entity.id,
            isAutoPurchase: (_this3$autoPurchase$e = _this3.autoPurchase[entity.id]) !== null && _this3$autoPurchase$e !== void 0 ? _this3$autoPurchase$e : false,
            isCapped: entity.isCapped
          };
        }),
        unlocked: {
          total: total,
          totalComplete: totalComplete
        },
        purchaseMultiplier: this.purchaseMultiplier,
        isAutomationUnlocked: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_purchase_manager') > 0,
        showMaxed: this.showMaxed
      };
    }
  }, {
    key: "sendItemsData",
    value: function sendItemsData() {
      var data = this.getItemsData();
      this.eventHandler.sendData('items-data', data);
    }
  }, {
    key: "getItemDetails",
    value: function getItemDetails(id) {
      if (!id) return null;
      var entity = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEntity(id);
      return {
        id: entity.id,
        name: entity.name,
        description: entity.description,
        max: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEntityMaxLevel(entity.id),
        level: this.purchasedItems[entity.id] || 0,
        affordable: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getAffordable(entity.id),
        potentialEffects: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEffects(entity.id, 1),
        currentEffects: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEffects(entity.id),
        tags: entity.tags,
        purchaseMultiplier: 1
      };
    }
  }, {
    key: "sendItemDetails",
    value: function sendItemDetails(id) {
      var data = this.getItemDetails(id);
      this.eventHandler.sendData('item-details', data);
    }
  }, {
    key: "getPurchaseableItemsData",
    value: function getPurchaseableItemsData() {
      var _this4 = this;
      var items = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.listResourcesByTags(['inventory']);
      // console.log('items: ', items);
      var presentItems = items.filter(function (item) {
        return item.isUnlocked && item.get_cost;
      });
      presentItems.forEach(function (one) {
        if (!(one.id in _this4.sellStocks)) {
          var _one$purchaseRenewRat2;
          _this4.sellStocks[one.id] = 1000 * ((_one$purchaseRenewRat2 = one.purchaseRenewRate) !== null && _one$purchaseRenewRat2 !== void 0 ? _one$purchaseRenewRat2 : 1);
        }
      });
      return {
        available: presentItems.map(function (resource) {
          var _this4$sellStocks$res;
          var affordable = game_framework__WEBPACK_IMPORTED_MODULE_0__.resourceCalculators.isAffordable(resource.get_cost());
          return _objectSpread(_objectSpread({}, resource), {}, {
            stock: _this4.sellStocks[resource.id],
            affordable: affordable,
            isLeveled: _this4.leveledId === resource.id,
            purchaseMultiplier: Math.max(1, Math.min(_this4.purchaseMultiplier, affordable.max, (_this4$sellStocks$res = _this4.sellStocks[resource.id]) !== null && _this4$sellStocks$res !== void 0 ? _this4$sellStocks$res : 0))
          });
        }),
        purchaseMultiplier: this.purchaseMultiplier
      };
    }
  }, {
    key: "sendPurchaseableItemsData",
    value: function sendPurchaseableItemsData() {
      var data = this.getPurchaseableItemsData();
      this.eventHandler.sendData('items-resources-data', data);
    }
  }, {
    key: "getPurchaseableItemDetails",
    value: function getPurchaseableItemDetails(id) {
      var _this$sellStocks$id, _entity$purchaseRenew, _this$sellStocks$enti;
      if (!id) return null;
      var entity = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource(id);
      var affordable = game_framework__WEBPACK_IMPORTED_MODULE_0__.resourceCalculators.isAffordable(entity.get_cost());
      var potPurchase = Math.max(1, Math.min(this.purchaseMultiplier, affordable.max, (_this$sellStocks$id = this.sellStocks[id]) !== null && _this$sellStocks$id !== void 0 ? _this$sellStocks$id : Math.pow(1000, (_entity$purchaseRenew = entity.purchaseRenewRate) !== null && _entity$purchaseRenew !== void 0 ? _entity$purchaseRenew : 1)));
      return {
        id: entity.id,
        name: entity.name,
        description: entity.description,
        max: entity.max,
        level: this.purchasedItems[entity.id] || 0,
        affordable: game_framework__WEBPACK_IMPORTED_MODULE_0__.resourceCalculators.isAffordable(entity.get_cost(potPurchase)),
        potentialEffects: game_framework__WEBPACK_IMPORTED_MODULE_0__.resourceApi.unpackEffects(entity.usageGain || {}, 1),
        tags: entity.tags,
        purchaseMultiplier: Math.max(1, Math.min(this.purchaseMultiplier, affordable.max, (_this$sellStocks$enti = this.sellStocks[entity.id]) !== null && _this$sellStocks$enti !== void 0 ? _this$sellStocks$enti : 0))
      };
    }
  }, {
    key: "sendPurchaseableItemDetails",
    value: function sendPurchaseableItemDetails(id) {
      var data = this.getPurchaseableItemDetails(id);
      this.eventHandler.sendData('item-details', data);
    }
  }]);
}(_shared_game_module__WEBPACK_IMPORTED_MODULE_1__.GameModule);
