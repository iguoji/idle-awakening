import * as game_framework__WEBPACK_IMPORTED_MODULE_0__ from '../../../../framework/index.js';
import * as _shared_game_module__WEBPACK_IMPORTED_MODULE_1__ from '../../../../worker/shared/game-module.js';
import * as _guilds_db__WEBPACK_IMPORTED_MODULE_2__ from '../../../../worker/modules/social/guilds-db.js';
import * as _guild_upgrades_db__WEBPACK_IMPORTED_MODULE_3__ from '../../../../worker/modules/social/guild-upgrades-db.js';
import * as _shared_utils_objects__WEBPACK_IMPORTED_MODULE_4__ from '../../../../worker/shared/utils/objects.js';

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





var GuildsModule = /*#__PURE__*/function (_GameModule) {
  function GuildsModule() {
    var _this;
    _classCallCheck(this, GuildsModule);
    _this = _callSuper(this, GuildsModule);
    _this.purchasedUpgrades = {};
    _this.guildsStats = {};
    _this.selectedGuild = null;
    _this.leveledId = null;
    _this.eventHandler.registerHandler('select-guild', function (payload) {
      _this.selectGuild(payload.id);
    });
    _this.eventHandler.registerHandler('leave-guild', function (payload) {
      _this.leaveGuild(payload.id);
    });
    _this.eventHandler.registerHandler('purchase-guild-item', function (payload) {
      _this.purchaseItem(payload.id);
    });
    _this.eventHandler.registerHandler('query-guild-items-data', function (payload) {
      _this.sendItemsData();
    });
    _this.eventHandler.registerHandler('query-guild-item-details', function (payload) {
      _this.sendItemDetails(payload.id, payload.meta);
    });
    _this.eventHandler.registerHandler('query-all-guilds-effects', function () {
      _this.sendAllGuildsEffects();
    });
    return _this;
  }
  _inherits(GuildsModule, _GameModule);
  return _createClass(GuildsModule, [{
    key: "initialize",
    value: function initialize() {
      (0,_guilds_db__WEBPACK_IMPORTED_MODULE_2__.registerGuilds)();
      (0,_guild_upgrades_db__WEBPACK_IMPORTED_MODULE_3__.registerGuildUpgrades)();
    }
  }, {
    key: "leaveGuild",
    value: function leaveGuild() {
      if (!this.selectedGuild) {
        return;
      }
      //
      if (!this.guildsStats) {
        this.guildsStats = {};
      }
      if (!this.guildsStats[this.selectedGuild]) {
        this.guildsStats[this.selectedGuild] = {
          maxLevel: 0
        };
      }
      this.guildsStats[this.selectedGuild].maxLevel = Math.max(this.guildsStats[this.selectedGuild].maxLevel, game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel(this.selectedGuild));
      for (var key in this.purchasedUpgrades) {
        this.setItem(key, 0, true);
      }
      this.purchasedUpgrades = {};
      game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.setEntityLevel(this.selectedGuild, 0, true);
      game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.setResource('guild_reputation', 0);
      /*gameEntity.listEntitiesByTags(['action', 'guild-activity']).map(a => {
          gameCore.getModule('actions').setAction(a.id, 1, true);
          if(gameCore.getModule('actions').actions[a.id]) {
              gameCore.getModule('actions').actions[a.id].xp = 0;
          }
      })*/
      this.setPermaBonus(this.selectedGuild, this.guildsStats[this.selectedGuild].maxLevel - 1, true);
      game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('unlock-notifications').generateNotifications();

      // handle perma guild bonus
      this.selectedGuild = null;
    }
  }, {
    key: "selectGuild",
    value: function selectGuild(id) {
      this.selectedGuild = id;
      game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.setEntityLevel(this.selectedGuild, 1, true);
      game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('unlock-notifications').generateNotifications();
      game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.setResource('guild_reputation', 0);
    }
  }, {
    key: "getPotentialPermaLevel",
    value: function getPotentialPermaLevel(id) {
      var cl = this.selectedGuild === id ? game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel(this.selectedGuild) : this.guildsStats[id].maxLevel;
      return Math.max(0, cl - 1);
    }
  }, {
    key: "getCurrentPermaLevel",
    value: function getCurrentPermaLevel(id) {
      var _this$guildsStats$id;
      var cl = ((_this$guildsStats$id = this.guildsStats[id]) === null || _this$guildsStats$id === void 0 ? void 0 : _this$guildsStats$id.maxLevel) || 0;
      return Math.max(0, cl - 1);
    }
  }, {
    key: "getCurrentActualPermaLevel",
    value: function getCurrentActualPermaLevel(id) {
      var _gameEntity$getLevel;
      var ent = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getAttribute(id, 'permaBonusId');
      var relLevel = (_gameEntity$getLevel = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel(ent)) !== null && _gameEntity$getLevel !== void 0 ? _gameEntity$getLevel : 1;
      return relLevel;
    }
  }, {
    key: "setPermaBonus",
    value: function setPermaBonus(id, level) {
      var bForce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var ent = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getAttribute(id, 'permaBonusId');
      // console.log('Setting: ', id, ent, level);
      game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.setEntityLevel(ent, level, bForce);
    }
  }, {
    key: "tick",
    value: function tick(game, delta) {
      this.leveledId = null;
      if (!this.selectedGuild) return;
      var guild = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel(this.selectedGuild);
      var rs = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource('guild_reputation');
      if (rs.amount >= rs.cap) {
        var rslt = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.levelUpEntity(this.selectedGuild);
        // gameResources.addResource('guild-points', 1);
        this.isLeveledUp = true;
        game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('unlock-notifications').setViewedById("guild_leveled", false);
        // const data = this.getMageData();
        // this.eventHandler.sendData('mage-data', data);
      }
    }
  }, {
    key: "save",
    value: function save() {
      return {
        selectedGuild: this.selectedGuild,
        guildLevel: this.selectedGuild ? game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel(this.selectedGuild) : 0,
        purchasedUpgrades: this.purchasedUpgrades,
        guildsStats: this.guildsStats
      };
    }
  }, {
    key: "load",
    value: function load(obj) {
      if (this.selectedGuild) {
        game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.setEntityLevel(this.selectedGuild, 0, true);
      }
      this.selectedGuild = obj === null || obj === void 0 ? void 0 : obj.selectedGuild;
      if (this.selectedGuild) {
        game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.setEntityLevel(this.selectedGuild, obj === null || obj === void 0 ? void 0 : obj.guildLevel);
      }
      for (var key in this.purchasedUpgrades) {
        this.setItem(key, 0, true);
      }
      this.purchasedUpgrades = {};
      if (obj !== null && obj !== void 0 && obj.purchasedUpgrades) {
        for (var id in obj.purchasedUpgrades) {
          this.setItem(id, obj.purchasedUpgrades[id], true);
        }
      }
      if (this.guildsStats) {
        for (var _key in this.guildsStats) {
          this.guildsStats[_key].maxLevel = 0;
          this.setPermaBonus(_key, 0, true);
        }
      }
      if (obj !== null && obj !== void 0 && obj.guildsStats) {
        this.guildsStats = obj === null || obj === void 0 ? void 0 : obj.guildsStats;
        for (var _key2 in this.guildsStats) {
          this.setPermaBonus(_key2, this.getCurrentPermaLevel(_key2), true);
        }
      }
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
      this.purchasedUpgrades[itemId] = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel(itemId);
    }
  }, {
    key: "purchaseItem",
    value: function purchaseItem(itemId) {
      var newEnt = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.levelUpEntity(itemId);
      // console.log('Purchase Guild Upgrade: ', newEnt)
      if (newEnt.success) {
        this.purchasedUpgrades[itemId] = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel(itemId);
        this.leveledId = itemId;
        this.sendItemsData();
      }
      return newEnt.success;
    }
  }, {
    key: "regenerateNotifications",
    value: function regenerateNotifications() {
      game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('unlock-notifications').registerNewNotification('social', 'guilds', 'all', "no_guild_selected", !this.selectedGuild);
      game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('unlock-notifications').registerNewNotification('social', 'guilds', 'all', "guild_leveled", this.selectedGuild && game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel(this.selectedGuild) > 0);
    }
  }, {
    key: "getItemsData",
    value: function getItemsData() {
      var _this2 = this,
        _this$guildsStats$thi;
      var guilds = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.listEntitiesByTags(['guild']).map(function (one) {
        return _objectSpread(_objectSpread({}, one), {}, {
          icon_id: one.attributes.icon_id
        });
      });
      var current = this.selectedGuild ? guilds.find(function (g) {
        return g.id === _this2.selectedGuild;
      }) : undefined;
      var upgrades = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.listEntitiesByTags(['guild-upgrade']);
      var cLv = this.selectedGuild ? game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel(this.selectedGuild) : 0;
      return {
        guilds: guilds,
        current: current,
        availableUpgrades: upgrades.filter(function (one) {
          return one.isUnlocked && !one.isCapped;
        }).map(function (entity) {
          return {
            id: entity.id,
            name: entity.name,
            description: entity.description,
            max: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEntityMaxLevel(entity.id),
            level: _this2.purchasedUpgrades[entity.id] || 0,
            affordable: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getAffordable(entity.id),
            potentialEffects: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEffects(entity.id, 1),
            isLeveled: _this2.leveledId === entity.id,
            tier: entity.attributes.tier
          };
        }).reduce(function (acc, upgrade) {
          // Check if the tier already exists in the accumulator
          if (!acc[upgrade.tier - 1]) {
            acc[upgrade.tier - 1] = []; // Initialize the tier as an empty array
          }
          acc[upgrade.tier - 1].push(upgrade); // Add the upgrade to the corresponding tier
          return acc;
        }, {
          0: [],
          1: [],
          2: []
        }),
        tierUnlocks: [1, 5, 10].map(function (c) {
          return {
            isUnlocked: c <= cLv,
            level: c
          };
        }),
        points: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource('guild-points'),
        reputation: _objectSpread(_objectSpread({}, game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource('guild_reputation')), {}, {
          eta: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.assertToCapOrEmpty('guild_reputation')
        }),
        maxLevel: this.selectedGuild ? ((_this$guildsStats$thi = this.guildsStats[this.selectedGuild]) === null || _this$guildsStats$thi === void 0 ? void 0 : _this$guildsStats$thi.maxLevel) || 1 : 1,
        prestige: this.selectedGuild ? {
          canPrestige: this.getPotentialPermaLevel(this.selectedGuild) > this.getCurrentActualPermaLevel(this.selectedGuild),
          currentEffects: (0,_shared_utils_objects__WEBPACK_IMPORTED_MODULE_4__.packEffects)(game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEffects(current.attributes.permaBonusId)),
          potentialEffects: (0,_shared_utils_objects__WEBPACK_IMPORTED_MODULE_4__.packEffects)(game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEffects(current.attributes.permaBonusId, 0, this.getPotentialPermaLevel(this.selectedGuild)))
        } : null
      };
    }
  }, {
    key: "sendItemsData",
    value: function sendItemsData() {
      var data = this.getItemsData();
      this.eventHandler.sendData('guild-items-data', data);
    }
  }, {
    key: "getItemDetails",
    value: function getItemDetails(id, meta) {
      if (!id) return null;
      var entity = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEntity(id);
      return {
        id: entity.id,
        name: entity.name,
        description: entity.description,
        max: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEntityMaxLevel(entity.id),
        level: this.purchasedUpgrades[entity.id] || 0,
        affordable: meta === 'guild' ? undefined : game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getAffordable(entity.id),
        potentialEffects: meta === 'guild' ? undefined : game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEffects(entity.id, 1),
        effects: meta === 'guild' ? (0,_shared_utils_objects__WEBPACK_IMPORTED_MODULE_4__.packEffects)(game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEffects(entity.id, 1).filter(function (one) {
          return one.id !== 'guild_reputation';
        })) : undefined,
        currentEffects: meta === 'guild' ? undefined : game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEffects(entity.id),
        tags: entity.tags,
        purchaseMultiplier: 1
      };
    }
  }, {
    key: "getAllGuildsPermas",
    value: function getAllGuildsPermas() {
      var permas = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.listEntitiesByTags(['guild-bonus', 'permanent']);
      var effects = permas.map(function (one) {
        return {
          id: one.id,
          name: one.name,
          effects: (0,_shared_utils_objects__WEBPACK_IMPORTED_MODULE_4__.packEffects)(game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEffects(one.id).filter(function (one) {
            return one.id !== 'guild_reputation';
          }))
        };
      });
      return effects;
    }
  }, {
    key: "sendAllGuildsEffects",
    value: function sendAllGuildsEffects() {
      var guildEffects = this.getAllGuildsPermas();
      this.eventHandler.sendData('all-guilds-effects', guildEffects);
    }
  }, {
    key: "sendItemDetails",
    value: function sendItemDetails(id, meta) {
      var data = this.getItemDetails(id, meta);
      this.eventHandler.sendData('guild-item-details', data);
    }
  }]);
}(_shared_game_module__WEBPACK_IMPORTED_MODULE_1__.GameModule);

export { GuildsModule };
