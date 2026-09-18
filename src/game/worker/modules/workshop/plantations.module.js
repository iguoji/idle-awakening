import * as index from '../../../framework/index.js';
import * as game_module from '../../shared/game-module.js';
import * as plantation_db from './plantation-db.js';

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



var PlantationsModule = /*#__PURE__*/function (_GameModule) {
  function PlantationsModule() {
    var _this;
    _classCallCheck(this, PlantationsModule);
    _this = _callSuper(this, PlantationsModule);
    _this.purchasedItems = {};
    _this.isUnlocked = false;
    _this.leveledId = null;
    _this.autoPurchase = {};
    _this.autoPurchaseCd = 10;
    _this.eventHandler.registerHandler('set-plantation-autopurchase', function (_ref) {
      var id = _ref.id,
        flag = _ref.flag;
      var entities = index.gameEntity.listEntitiesByTags(['plantation']).filter(function (one) {
        return one.isUnlocked && !one.isCapped;
      });
      entities.forEach(function (e) {
        if (!id || id === e.id) {
          _this.autoPurchase[e.id] = flag;
        }
      });
      _this.sendItemsData();
    });
    _this.eventHandler.registerHandler('purchase-plantation', function (payload) {
      _this.purchaseItem(payload.id);
    });
    _this.eventHandler.registerHandler('set-plantation-watering', function (payload) {
      _this.setWateringLevel(payload.id, payload.level);
    });
    _this.eventHandler.registerHandler('remove-plantation', function (payload) {
      _this.removeItem(payload.id);
    });
    _this.eventHandler.registerHandler('query-plantation-data', function (payload) {
      _this.sendItemsData();
    });
    _this.eventHandler.registerHandler('query-plantation-details', function (payload) {
      _this.sendItemDetails(payload.id);
    });
    return _this;
  }
  _inherits(PlantationsModule, _GameModule);
  return _createClass(PlantationsModule, [{
    key: "initialize",
    value: function initialize() {
      (0,plantation_db.registerPlantations)();
    }
  }, {
    key: "tick",
    value: function tick(game, delta) {
      this.leveledId = null;
      if (index.gameEntity.getLevel('shop_item_purchase_manager') > 0) {
        if (!this.autoPurchaseCd) {
          this.autoPurchaseCd = 10;
        }
        this.autoPurchaseCd -= delta;
        if (this.autoPurchaseCd <= 0) {
          this.autoPurchaseCd = 10;
          for (var key in this.autoPurchase) {
            if (this.autoPurchase[key]) {
              if (!index.gameEntity.isEntityUnlocked(key)) {
                this.autoPurchase[key] = false;
                console.log('Planter ' + key + ' is locked. Toggling autopurchase');
                continue;
              }
              var newEntSucc = this.purchaseItem(key);
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
        autoPurchase: this.autoPurchase
      };
    }
  }, {
    key: "load",
    value: function load(saveObject) {
      for (var key in this.purchasedItems) {
        if (!(_typeof(this.purchasedItems[key]) === 'object')) {
          this.purchasedItems[key] = {
            level: this.purchasedItems[key],
            wateringLevel: 0
          };
        }
        console.log("Set Init ".concat(key, " to: "), this.purchasedItems);
        this.setItem(key, 0, true);
      }
      this.purchasedItems = {};
      if (saveObject !== null && saveObject !== void 0 && saveObject.items) {
        for (var id in saveObject.items) {
          var _saveObject$items$id$, _saveObject$items$id2;
          if (!(_typeof(saveObject.items[id]) === 'object')) {
            var _saveObject$items$id;
            saveObject.items[id] = {
              level: (_saveObject$items$id = saveObject.items[id]) !== null && _saveObject$items$id !== void 0 ? _saveObject$items$id : 0,
              wateringLevel: 0
            };
          }
          // console.log(`Set Load ${id} to: `, this.purchasedItems);
          this.setItem(id, (_saveObject$items$id$ = (_saveObject$items$id2 = saveObject.items[id]) === null || _saveObject$items$id2 === void 0 ? void 0 : _saveObject$items$id2.level) !== null && _saveObject$items$id$ !== void 0 ? _saveObject$items$id$ : saveObject.items[id], true);
          if (saveObject.items[id].wateringLevel) {
            this.setWateringLevel(id, saveObject.items[id].wateringLevel);
          }
        }
      }
      this.autoPurchase = (saveObject === null || saveObject === void 0 ? void 0 : saveObject.autoPurchase) || {};
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
      index.gameEntity.setEntityLevel(itemId, amount, bForce);
      if (!this.purchasedItems[itemId]) {
        this.purchasedItems[itemId] = {
          level: 0,
          wateringLevel: 0
        };
      }
      this.purchasedItems[itemId].level = index.gameEntity.getLevel(itemId);
    }
  }, {
    key: "setWateringLevel",
    value: function setWateringLevel(id, level) {
      var rLevel = Math.max(0, Math.min(Math.floor(level), index.gameEffects.getEffectValue('plantations_max_watering')));
      index.gameEntity.setEntityLevel("".concat(id, "_watering_bonus"), rLevel, true);
      this.purchasedItems[id].wateringLevel = index.gameEntity.getLevel("".concat(id, "_watering_bonus"));
    }
  }, {
    key: "purchaseItem",
    value: function purchaseItem(itemId) {
      var newEnt = index.gameEntity.levelUpEntity(itemId);
      if (newEnt.success) {
        if (!this.purchasedItems[itemId]) {
          this.purchasedItems[itemId] = {
            level: 0
          };
        }
        this.purchasedItems[itemId].level = index.gameEntity.getLevel(itemId);
        this.leveledId = itemId;
        this.sendItemsData();
      }
      return newEnt.success;
    }
  }, {
    key: "removeItem",
    value: function removeItem(itemId) {
      console.log("Set Remove ".concat(itemId, " to: "), this.purchasedItems);
      this.setItem(itemId, 0, true);
    }
  }, {
    key: "regenerateNotifications",
    value: function regenerateNotifications() {
      var entities = index.gameEntity.listEntitiesByTags(['plantation']);
      entities.forEach(function (item) {
        index.gameCore.getModule('unlock-notifications').registerNewNotification('workshop', 'plantations', 'all', "plantation_".concat(item.id), item.isUnlocked && !item.isCapped);
      });
    }
  }, {
    key: "getItemsData",
    value: function getItemsData() {
      var _this2 = this;
      var entities = index.gameEntity.listEntitiesByTags(['plantation']);
      var rrs = index.gameResources.getResource('plantation_slots');
      var slots = {
        max: rrs.income,
        total: rrs.amount
      };
      return {
        available: entities.filter(function (one) {
          return one.isUnlocked && !one.isCapped;
        }).map(function (entity) {
          var _this2$purchasedItems, _this2$purchasedItems2, _gameResources$getRes, _gameResources$getRes2, _gameResources$getRes3, _this2$autoPurchase$e;
          return {
            id: entity.id,
            icon_id: entity.icon_id,
            name: entity.name,
            description: entity.description,
            max: index.gameEntity.getEntityMaxLevel(entity.id),
            level: ((_this2$purchasedItems = _this2.purchasedItems[entity.id]) === null || _this2$purchasedItems === void 0 ? void 0 : _this2$purchasedItems.level) || 0,
            wateringLevel: ((_this2$purchasedItems2 = _this2.purchasedItems[entity.id]) === null || _this2$purchasedItems2 === void 0 ? void 0 : _this2$purchasedItems2.wateringLevel) || 0,
            affordable: index.gameEntity.getAffordable(entity.id),
            potentialEffects: index.gameEntity.getEffects(entity.id, 1),
            isLeveled: _this2.leveledId === entity.id,
            wateringMult: index.gameEffects.getEffectValue((0,plantation_db.getWateringEffectId)(entity.id)),
            resourceAmount: (_gameResources$getRes = index.gameResources.getResource(index.gameEntity.getAttribute(entity.id, 'inventoryResource'))) === null || _gameResources$getRes === void 0 ? void 0 : _gameResources$getRes.amount,
            resourceBalance: (_gameResources$getRes2 = index.gameResources.getResource(index.gameEntity.getAttribute(entity.id, 'inventoryResource'))) === null || _gameResources$getRes2 === void 0 ? void 0 : _gameResources$getRes2.balance,
            breakDown: (_gameResources$getRes3 = index.gameResources.getResource(index.gameEntity.getAttribute(entity.id, 'inventoryResource'))) === null || _gameResources$getRes3 === void 0 ? void 0 : _gameResources$getRes3.breakDown,
            isAutoPurchase: (_this2$autoPurchase$e = _this2.autoPurchase[entity.id]) !== null && _this2$autoPurchase$e !== void 0 ? _this2$autoPurchase$e : false
          };
        }),
        slots: slots,
        isWateringUnlocked: index.gameResources.isResourceUnlocked('inventory_water'),
        maxWatering: index.gameEffects.getEffect('plantations_max_watering'),
        waterResource: index.gameResources.getResource('inventory_water'),
        isAutomationUnlocked: index.gameEntity.getLevel('shop_item_purchase_manager') > 0
      };
    }
  }, {
    key: "sendItemsData",
    value: function sendItemsData() {
      var data = this.getItemsData();
      this.eventHandler.sendData('plantations-data', data);
    }
  }, {
    key: "getItemDetails",
    value: function getItemDetails(id) {
      var _this$purchasedItems$, _this$purchasedItems$2;
      if (!id) return null;
      var entity = index.gameEntity.getEntity(id);
      return {
        id: entity.id,
        name: entity.name,
        description: entity.description,
        max: index.gameEntity.getEntityMaxLevel(entity.id),
        level: ((_this$purchasedItems$ = this.purchasedItems[entity.id]) === null || _this$purchasedItems$ === void 0 ? void 0 : _this$purchasedItems$.level) || 0,
        wateringLevel: ((_this$purchasedItems$2 = this.purchasedItems[entity.id]) === null || _this$purchasedItems$2 === void 0 ? void 0 : _this$purchasedItems$2.wateringLevel) || 0,
        affordable: index.gameEntity.getAffordable(entity.id),
        potentialEffects: index.gameEntity.getEffects(entity.id, 1),
        currentEffects: index.gameEntity.getEffects(entity.id),
        tags: entity.tags,
        purchaseMultiplier: 1,
        wateringMult: index.gameEffects.getEffectValue((0,plantation_db.getWateringEffectId)(entity.id)),
        isWateringUnlocked: index.gameResources.isResourceUnlocked('inventory_water'),
        maxWatering: index.gameEffects.getEffect('plantations_max_watering'),
        waterResource: index.gameResources.getResource('inventory_water'),
        wateringEffects: index.gameEntity.getEffects("".concat(id, "_watering_bonus")),
        nextWateringEffects: index.gameEntity.getEffects("".concat(id, "_watering_bonus"), 1)
      };
    }
  }, {
    key: "sendItemDetails",
    value: function sendItemDetails(id) {
      var data = this.getItemDetails(id);
      this.eventHandler.sendData('plantation-details', data);
    }
  }]);
}(game_module.GameModule);

export { PlantationsModule };
