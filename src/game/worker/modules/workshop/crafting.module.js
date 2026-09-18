import * as game_module from '../../shared/game-module.js';
import * as recipes_db from './recipes-db.js';
import * as index from '../../../framework/index.js';
import * as crafting_lists_submodule from './crafting-lists.submodule.js';
import * as consts from '../../../framework/src/utils/consts.js';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
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





var CraftingModule = /*#__PURE__*/function (_GameModule) {
  function CraftingModule(props) {
    var _this;
    _classCallCheck(this, CraftingModule);
    _this = _callSuper(this, CraftingModule, [props]);
    _this.lists = new crafting_lists_submodule.CraftingListsSubmodule();
    _this.craftingSlots = {};
    _this.filters = [{
      id: 'crafting',
      name: 'Crafting',
      tags: ['material'],
      isDefault: true
    }, {
      id: 'alchemy',
      name: 'Alchemy',
      tags: ['alchemy'],
      isDefault: false
    }];
    _this.eventHandler.registerHandler('query-crafting-general-data', function (payload) {
      _this.sendGeneralData(payload.filterId);
    });
    _this.eventHandler.registerHandler('query-crafting-data', function (payload) {
      _this.sendCraftingData(payload);
    });
    _this.eventHandler.registerHandler('query-crafting-details', function (payload) {
      _this.sendCraftingDetails(payload.id);
    });
    _this.eventHandler.registerHandler('set-crafting-level', function (payload) {
      _this.setCraftingLevel(payload);
      _this.sendCraftingData(payload);
    });
    return _this;
  }
  _inherits(CraftingModule, _GameModule);
  return _createClass(CraftingModule, [{
    key: "initialize",
    value: function initialize() {
      (0,recipes_db.registerCraftingRecipes)();
    }
  }, {
    key: "tick",
    value: function tick(game, delta) {
      this.lists.tick(game, delta);
      /*if(gameEntity.entityExists('activeCrafting_craft_herbal_fibers')) {
          console.log('DT: ',
              gameEntity.getEntity('activeCrafting_craft_herbal_fibers'),
              gameResources.getResource('inventory_ginseng')
          )
      }*/
    }
  }, {
    key: "save",
    value: function save() {
      return {
        slots: this.craftingSlots,
        craftingLists: this.lists.save()
      };
    }
  }, {
    key: "load",
    value: function load(obj) {
      if (this.craftingSlots) {
        for (var id in this.craftingSlots) {
          this.setCraftingLevel({
            id: id,
            level: 0,
            isForce: true
          });
        }
      }
      this.craftingSlots = (obj === null || obj === void 0 ? void 0 : obj.slots) || {};
      if (Array.isArray(this.craftingSlots)) {
        this.craftingSlots = {};
      }
      for (var _id in this.craftingSlots) {
        this.setCraftingLevel({
          id: _id,
          level: this.craftingSlots[_id].level,
          isForce: true
        });
      }
      if (obj !== null && obj !== void 0 && obj.craftingLists) {
        this.lists.load(obj.craftingLists);
      }
    }
  }, {
    key: "stopAllCrafting",
    value: function stopAllCrafting(category) {
      var tagToCat = {
        'crafting': 'material',
        alchemy: 'alchemy'
      };
      if (this.craftingSlots) {
        for (var id in this.craftingSlots) {
          var isIgnore = category && !index.gameEntity.getEntity(id).tags.includes(tagToCat[category]);
          // console.log('Stop Craft: ', category, id, isIgnore, gameEntity.getEntity(id).tags)
          if (!isIgnore) {
            this.setCraftingLevel({
              id: id,
              level: 0,
              isForce: true
            });
          }
        }
      }
    }
  }, {
    key: "setCraftingLevel",
    value: function setCraftingLevel(_ref) {
      var id = _ref.id,
        level = _ref.level,
        _ref$isForce = _ref.isForce,
        isForce = _ref$isForce === void 0 ? false : _ref$isForce,
        filterId = _ref.filterId;
      if (!this.craftingSlots[id]) {
        this.craftingSlots[id] = {
          level: 0
        };
      }
      if (level < 0) {
        level = 0;
      }
      if (!isForce) {
        var rrs = filterId === 'crafting' ? index.gameResources.getResource('crafting_slots') : index.gameResources.getResource('alchemy_slots');
        var max = this.craftingSlots[id].level + rrs.amount;
        if (level > max) {
          level = Math.floor(max);
        }
      }
      if (level === 0 && index.gameEntity.entityExists("activeCrafting_".concat(id))) {
        index.gameEntity.unsetEntity("activeCrafting_".concat(id));
        this.craftingSlots[id].level = 0;
      }
      if (level > 0) {
        if (!index.gameEntity.entityExists("activeCrafting_".concat(id))) {
          index.gameEntity.registerGameEntity("activeCrafting_".concat(id), {
            copyFromId: id,
            level: level,
            allowedImpacts: ['resources'],
            tags: ['running', 'runningCrafting']
          });
        }
        var rs = index.gameEntity.setEntityLevel("activeCrafting_".concat(id), level, isForce);
        // console.log('Update result: ', rs);
        this.craftingSlots[id].level = index.gameEntity.getLevel("activeCrafting_".concat(id));
      }
    }
  }, {
    key: "regenerateNotifications",
    value: function regenerateNotifications() {
      this.filters.forEach(function (filter) {
        var entities = index.gameEntity.listEntitiesByTags(['recipe'].concat(_toConsumableArray(filter.tags)));
        entities.forEach(function (item) {
          index.gameCore.getModule('unlock-notifications').registerNewNotification('workshop', filter.id, 'all', "crafting_".concat(item.id), item.isUnlocked && !item.isCapped);
        });
      });
    }
  }, {
    key: "getCraftingData",
    value: function getCraftingData(payload) {
      var _this2 = this,
        _gameCore$getModule$p;
      if (!(payload !== null && payload !== void 0 && payload.filterId)) {
        throw new Error("FilterId is required");
      }
      var filterId = payload === null || payload === void 0 ? void 0 : payload.filterId;
      var filter = this.filters.find(function (o) {
        return o.id === filterId;
      });
      if (!filter) {
        throw new Error("".concat(filterId, " not found"));
      }
      var entities = index.gameEntity.listEntitiesByTags(['recipe'].concat(_toConsumableArray(filter.tags))).filter(function (one) {
        return one.isUnlocked;
      });
      var rrs = filterId === 'crafting' ? index.gameResources.getResource('crafting_slots') : index.gameResources.getResource('alchemy_slots');
      var efrs = filterId === 'crafting' ? index.gameResources.getResource('crafting_ability') : index.gameResources.getResource('alchemy_ability');
      var eff_key = filterId === 'crafting' ? 'crafting_ability' : 'alchemy_ability';
      var available = entities.map(function (recipe) {
        var _this2$craftingSlots$, _this2$craftingSlots$2, _gameResources$getRes, _gameResources$getRes2, _gameResources$getRes3, _gameEntity$getEntity;
        return _objectSpread(_objectSpread({}, recipe), {}, {
          icon_id: recipe.resourceId,
          level: ((_this2$craftingSlots$ = _this2.craftingSlots[recipe.id]) === null || _this2$craftingSlots$ === void 0 ? void 0 : _this2$craftingSlots$.level) || 0,
          maxLevel: rrs.amount + (((_this2$craftingSlots$2 = _this2.craftingSlots[recipe.id]) === null || _this2$craftingSlots$2 === void 0 ? void 0 : _this2$craftingSlots$2.level) || 0),
          resourceAmount: (_gameResources$getRes = index.gameResources.getResource(recipe.resourceId)) === null || _gameResources$getRes === void 0 ? void 0 : _gameResources$getRes.amount,
          resourceBalance: (_gameResources$getRes2 = index.gameResources.getResource(recipe.resourceId)) === null || _gameResources$getRes2 === void 0 ? void 0 : _gameResources$getRes2.balance,
          breakDown: (_gameResources$getRes3 = index.gameResources.getResource(recipe.resourceId)) === null || _gameResources$getRes3 === void 0 ? void 0 : _gameResources$getRes3.breakDown,
          isRunning: index.gameEntity.entityExists("activeCrafting_".concat(recipe.id)),
          isLowerEfficiency: index.gameEntity.entityExists("activeCrafting_".concat(recipe.id)) && ((_gameEntity$getEntity = index.gameEntity.getEntity("activeCrafting_".concat(recipe.id)).modifier) === null || _gameEntity$getEntity === void 0 ? void 0 : _gameEntity$getEntity.efficiency) < 1 - consts.SMALL_NUMBER
        });
      });
      var slots = {
        max: rrs.income,
        total: rrs.amount
      };
      return {
        available: available,
        slots: slots,
        efforts: _objectSpread(_objectSpread({}, efrs), {}, {
          isPinned: !!((_gameCore$getModule$p = index.gameCore.getModule('resource-pool').pinnedResources) !== null && _gameCore$getModule$p !== void 0 && _gameCore$getModule$p[eff_key])
        }),
        craftingLists: this.lists.getLists({
          category: filterId
        })
      };
    }
  }, {
    key: "getCraftingDetails",
    value: function getCraftingDetails(id) {
      var _this$craftingSlots$e, _this$craftingSlots$e2, _this$craftingSlots$e3, _this$craftingSlots$e4;
      var entity = index.gameEntity.getEntity(id);
      var isRunning = index.gameEntity.entityExists("activeCrafting_".concat(id));
      var actualEntity = entity;
      var efficiency = 1;
      var bottleNeck = null;
      if (isRunning) {
        var _actualEntity$modifie, _actualEntity$modifie2, _actualEntity$modifie3, _actualEntity$modifie4;
        actualEntity = index.gameEntity.getEntity("activeCrafting_".concat(id));
        efficiency = (_actualEntity$modifie = (_actualEntity$modifie2 = actualEntity.modifier) === null || _actualEntity$modifie2 === void 0 ? void 0 : _actualEntity$modifie2.efficiency) !== null && _actualEntity$modifie !== void 0 ? _actualEntity$modifie : 1;
        bottleNeck = (_actualEntity$modifie3 = actualEntity.modifier) !== null && _actualEntity$modifie3 !== void 0 && _actualEntity$modifie3.bottleNeck ? index.gameResources.getResource((_actualEntity$modifie4 = actualEntity.modifier) === null || _actualEntity$modifie4 === void 0 ? void 0 : _actualEntity$modifie4.bottleNeck) : null;
      }
      return _objectSpread(_objectSpread({}, entity), {}, {
        efficiency: efficiency,
        bottleNeck: bottleNeck,
        effects: isRunning ? index.gameEntity.getEffects("activeCrafting_".concat(id), 0, ((_this$craftingSlots$e = this.craftingSlots[entity.id]) === null || _this$craftingSlots$e === void 0 ? void 0 : _this$craftingSlots$e.level) || 1, false, 1) : index.gameEntity.getEffects(entity.id, 0, ((_this$craftingSlots$e2 = this.craftingSlots[entity.id]) === null || _this$craftingSlots$e2 === void 0 ? void 0 : _this$craftingSlots$e2.level) || 1, true, 1, 1),
        affordable: index.gameEntity.getAffordable(entity.id),
        level: ((_this$craftingSlots$e3 = this.craftingSlots[entity.id]) === null || _this$craftingSlots$e3 === void 0 ? void 0 : _this$craftingSlots$e3.level) || 0,
        maxLevel: index.gameResources.getResource('crafting_slots').amount + (((_this$craftingSlots$e4 = this.craftingSlots[entity.id]) === null || _this$craftingSlots$e4 === void 0 ? void 0 : _this$craftingSlots$e4.level) || 0)
      });
    }
  }, {
    key: "sendCraftingData",
    value: function sendCraftingData(payload) {
      var data = this.getCraftingData(payload);
      this.eventHandler.sendData("crafting-data-".concat(payload.filterId), data);
    }
  }, {
    key: "sendCraftingDetails",
    value: function sendCraftingDetails(payload) {
      var data = this.getCraftingDetails(payload);
      // console.log('Send crafting: crafting-details', data);
      this.eventHandler.sendData("crafting-details", data);
    }
  }, {
    key: "sendGeneralData",
    value: function sendGeneralData(category_id) {
      var rs = category_id === 'crafting' ? 'crafting_ability' : 'alchemy_ability';
      var sl = category_id === 'crafting' ? 'crafting_slots' : 'alchemy_slots';
      var stats = {};
      if (category_id === 'crafting') {
        stats = {
          crafting_efficiency: _objectSpread(_objectSpread({}, index.gameEffects.getEffect('crafting_efficiency')), {}, {
            isMultiplier: true
          }),
          crafting_materials_discount: _objectSpread(_objectSpread({}, index.gameEffects.getEffect('crafting_materials_discount')), {}, {
            isMultiplier: true
          })
        };
      }
      if (category_id === 'alchemy') {
        stats = {
          alchemy_efficiency: _objectSpread(_objectSpread({}, index.gameEffects.getEffect('alchemy_efficiency')), {}, {
            isMultiplier: true
          }),
          alchemy_materials_discount: _objectSpread(_objectSpread({}, index.gameEffects.getEffect('alchemy_materials_discount')), {}, {
            isMultiplier: true
          })
        };
      }
      var data = {
        isProducingEffort: index.gameResources.getResource(rs).income > consts.SMALL_NUMBER,
        hasSlots: index.gameResources.getResource(sl).income > consts.SMALL_NUMBER,
        stats: stats
      };
      this.eventHandler.sendData('crafting-general-data', data);
    }
  }]);
}(game_module.GameModule);

export { CraftingModule };
