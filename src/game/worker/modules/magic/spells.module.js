import * as index from '../../../framework/index.js';
import * as game_module from '../../shared/game-module.js';
import * as spells_db from './spells-db.js';
import * as rule_utils from '../../shared/utils/rule-utils.js';
import * as consts from '../../../framework/src/utils/consts.js';
import * as shop_db from '../items/shop-db.js';

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






var SpellModule = /*#__PURE__*/function (_GameModule) {
  function SpellModule() {
    var _this;
    _classCallCheck(this, SpellModule);
    _this = _callSuper(this, SpellModule);
    _this.spells = {};
    _this.isUnlocked = false;
    _this.autoConsumeCD = 2;
    _this.eventHandler.registerHandler('use-spell', function (payload) {
      _this.useSpell(payload.id, payload.amount);
    });
    _this.eventHandler.registerHandler('query-spell-data', function (payload) {
      _this.sendSpellData(payload);
    });
    _this.eventHandler.registerHandler('query-spell-details', function (payload) {
      _this.sendSpellDetails(payload.id, payload.prefix);
    });
    _this.eventHandler.registerHandler('save-spell-settings', function (payload) {
      _this.saveSettings(payload);
    });
    _this.eventHandler.registerHandler('get-spell-level-effects', function (payload) {
      var effects = _this.querySpellEffects(payload.id, payload.level);
      _this.eventHandler.sendData('spell-level-effects', effects);
    });
    _this.eventHandler.registerHandler('query-all-spells', function (payload) {
      _this.sendAllSpells(payload);
    });
    _this.eventHandler.registerHandler('query-general-magic-stats', function (payload) {
      _this.sendGeneralMagicStats(payload);
    });
    return _this;
  }
  _inherits(SpellModule, _GameModule);
  return _createClass(SpellModule, [{
    key: "initialize",
    value: function initialize() {
      (0,spells_db.initSpellsDB1)();
    }
  }, {
    key: "setMonitored",
    value: function setMonitored(_ref) {
      var type = _ref.type,
        id = _ref.id;
      console.log('CHMON: ', id, type);
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
      if (this.monitorData.type === 'school_efficiency') {
        var _entity$effectsDeps;
        if ((_entity$effectsDeps = entity.effectsDeps) !== null && _entity$effectsDeps !== void 0 && _entity$effectsDeps.length && entity.effectsDeps.includes(this.monitorData.id)) {
          return 'produce';
        }
      }
    }
  }, {
    key: "isSpellLevelingAvailable",
    value: function isSpellLevelingAvailable() {
      return index.gameEntity.getLevel('shop_item_spellcraft') > 0;
    }
  }, {
    key: "getMaxXP",
    value: function getMaxXP(id, level) {
      if (!level) {
        var _this$spells$id;
        level = ((_this$spells$id = this.spells[id]) === null || _this$spells$id === void 0 ? void 0 : _this$spells$id.level) || 1;
      }
      var mx = index.gameEntity.getAttribute(id, 'baseXPCost', 100);
      return mx * Math.pow(3, level);
    }
  }, {
    key: "getXPPerCast",
    value: function getXPPerCast(id, level) {
      if (!level) {
        var _this$spells$id2;
        level = ((_this$spells$id2 = this.spells[id]) === null || _this$spells$id2 === void 0 ? void 0 : _this$spells$id2.actualLevel) || 1;
      }
      var sp = index.gameEntity.getAttribute(id, 'xpOnCast', 0);
      return sp * Math.pow(1.4, level) * index.gameEffects.getEffectValue('spell_xp_rate') * Math.pow(1 + 0.25 * index.gameEffects.getEffectValue('attribute_spell_reading'), 2);
    }
  }, {
    key: "tick",
    value: function tick(game, delta) {
      this.autoConsumeCD -= delta;

      // trigger autocast
      for (var itemId in this.spells) {
        var _this$spells$itemId, _this$spells$itemId2, _this$spells$itemId3, _this$spells$itemId4;
        var checkAutoThisTick = false;
        this.spells[itemId].isCasted = false;
        if (this.spells[itemId].duration > 0) {
          // console.log('SPELL: ', itemId, this.spells[itemId].duration);
          this.spells[itemId].duration -= delta;
          if (index.gameEntity.entityExists("active_".concat(itemId))) {
            index.gameEntity.setAttribute("active_".concat(itemId), 'current_duration', this.spells[itemId].duration);
          }
        }
        if (this.spells[itemId].duration <= 0 && this.spells[itemId].isRunning) {
          var _gameEntity$getEntity;
          this.spells[itemId].duration = 0;
          this.spells[itemId].isRunning = false;
          this.spells[itemId].cooldown = (_gameEntity$getEntity = index.gameEntity.getEntity(itemId).getUsageCooldown()) !== null && _gameEntity$getEntity !== void 0 ? _gameEntity$getEntity : 0;
          // console.log('Set cooldown of '+itemId, this.spells[itemId].cooldown);
          if (index.gameEntity.entityExists("active_".concat(itemId))) {
            index.gameEntity.unsetEntity("active_".concat(itemId));
          }
          // Check automation right away
          checkAutoThisTick = !this.spells[itemId].cooldown;
        }
        if (this.spells[itemId].cooldown > 0) {
          this.spells[itemId].cooldown -= delta;
        }
        if (this.autoConsumeCD > 0 && !checkAutoThisTick) {
          continue;
        }
        if (!((_this$spells$itemId = this.spells[itemId]) !== null && _this$spells$itemId !== void 0 && (_this$spells$itemId = _this$spells$itemId.autocast) !== null && _this$spells$itemId !== void 0 && _this$spells$itemId.isEnabled)) {
          continue;
        }

        // check if matching rules
        var isMatching = (0,rule_utils.checkMatchingRules)((_this$spells$itemId2 = this.spells[itemId]) === null || _this$spells$itemId2 === void 0 || (_this$spells$itemId2 = _this$spells$itemId2.autocast) === null || _this$spells$itemId2 === void 0 ? void 0 : _this$spells$itemId2.rules, (_this$spells$itemId3 = this.spells[itemId]) === null || _this$spells$itemId3 === void 0 || (_this$spells$itemId3 = _this$spells$itemId3.autocast) === null || _this$spells$itemId3 === void 0 ? void 0 : _this$spells$itemId3.pattern);

        // console.log('RULES MATCHED: ', isMatching);
        if (isMatching && (((_this$spells$itemId4 = this.spells[itemId]) === null || _this$spells$itemId4 === void 0 ? void 0 : _this$spells$itemId4.cooldown) || 0) <= 0) {
          this.useSpell(itemId, 1);
        }
      }
      if (this.autoConsumeCD <= 0) {
        this.autoConsumeCD = 1;
      }
    }
  }, {
    key: "save",
    value: function save() {
      return {
        spells: this.spells
      };
    }
  }, {
    key: "load",
    value: function load(saveObject) {
      for (var key in this.spells) {
        this.setSpell(key, 0, true);
        index.gameEntity.setEntityLevel((0,spells_db.getMaxId)(key), 0, true);
        if (index.gameEntity.entityExists("active_".concat(key))) {
          index.gameEntity.unsetEntity("active_".concat(key));
        }
      }
      this.spells = {};
      if (saveObject !== null && saveObject !== void 0 && saveObject.spells) {
        for (var id in saveObject.spells) {
          this.spells[id] = saveObject.spells[id];
          if (!this.spells[id].level) {
            this.spells[id].level = 1;
          }
          if (!this.spells[id].actualLevel) {
            this.spells[id].actualLevel = 1;
            this.spells[id].xp = 0;
          }
          index.gameEntity.setEntityLevel((0,spells_db.getMaxId)(id), this.spells[id].level - 1, true);
          this.setSpell(id, saveObject.spells[id].actualLevel || 1, true);
          this.spells[id].duration = saveObject.spells[id].duration;
          if (this.spells[id].duration && this.spells[id].duration > 0) {
            this.spells[id].isRunning = true;
            index.gameEntity.registerGameEntity("active_".concat(id), {
              copyFromId: id,
              isAbstract: false,
              tags: ['active_spell', 'active_effect'],
              scope: 'spells',
              level: saveObject.spells[id].actualLevel,
              unlockedBy: undefined
            });
          }
        }
      }
      this.isUnlocked = (saveObject === null || saveObject === void 0 ? void 0 : saveObject.isUnlocked) || false;
      this.sendSpellData();
    }
  }, {
    key: "reset",
    value: function reset() {
      this.load({});
    }
  }, {
    key: "setSpell",
    value: function setSpell(spellId, amount) {
      var bForce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (amount < 1) amount = 1;
      if (amount > this.spells[spellId].level) {
        amount = this.spells[spellId].level;
      }
      index.gameEntity.setEntityLevel(spellId, amount, bForce);
      this.spells[spellId].actualLevel = index.gameEntity.getLevel(spellId);
    }
  }, {
    key: "getConsumeAffordable",
    value: function getConsumeAffordable(entity, level) {
      var result = {
        isAffordable: true,
        consume: {}
      };
      if (!level) {
        level = entity.level;
      }
      if (entity.usageGain) {
        var effects = index.resourceApi.unpackEffects(entity.usageGain, level);
        if (effects.length) {
          var rsToRemove = effects.filter(function (eff) {
            return eff.scope === 'consumption' && eff.type === 'resources';
          });
          rsToRemove.forEach(function (rs) {
            result.consume[rs.id] = rs.value; // *this.getSpellMaxLvlDiscount(entity.id);
            if (result.consume[rs.id] > index.gameResources.getResource(rs.id).amount) {
              result.isAffordable = false;
            }
          });
        }
      }
      return result;
    }
  }, {
    key: "getSpellMaxLvlDiscount",
    value: function getSpellMaxLvlDiscount(id) {
      var _this$spells$id3;
      return Math.pow(0.975, ((_this$spells$id3 = this.spells[id]) === null || _this$spells$id3 === void 0 ? void 0 : _this$spells$id3.level) || 0);
    }
  }, {
    key: "useSpell",
    value: function useSpell(id) {
      var _this$spells$id4, _this$spells$id5;
      var spell = index.gameEntity.getEntity(id);
      if (!this.spells[id]) {
        this.spells[id] = {
          duration: 0,
          cooldown: 0,
          level: 1,
          actualLevel: 1,
          numCasted: 0,
          xp: 0
        };
      }
      if ((((_this$spells$id4 = this.spells[id]) === null || _this$spells$id4 === void 0 ? void 0 : _this$spells$id4.duration) || 0) > 0) {
        return;
      }
      if ((((_this$spells$id5 = this.spells[id]) === null || _this$spells$id5 === void 0 ? void 0 : _this$spells$id5.cooldown) || 0) > 0) {
        return;
      }
      if (spell.usageGain) {
        var aff = this.getConsumeAffordable(spell);
        if (!aff.isAffordable) {
          return;
        }
      }
      this.spells[id].isRunning = true;
      this.spells[id].duration = 0;
      if (this.isSpellLevelingAvailable()) {
        var dXP = this.getXPPerCast(id);
        this.spells[id].xp += dXP;
        if (this.spells[id].xp >= this.getMaxXP(id)) {
          this.spells[id].xp = 0;
          // level-up spell
          this.spells[id].level++;
          index.gameEntity.setEntityLevel((0,spells_db.getMaxId)(id), this.spells[id].level - 1, true);
        }
      }
      if (spell.usageGain) {
        var _aff = this.getConsumeAffordable(spell);
        if (!_aff.isAffordable) {
          return;
        }
        var effects = index.resourceApi.unpackEffects(spell.usageGain, spell.level);
        if (effects.length) {
          var rsToAdd = effects.filter(function (eff) {
            return eff.scope === 'income' && eff.type === 'resources';
          });
          rsToAdd.forEach(function (rs) {
            index.gameResources.addResource(rs.id, rs.value);
          });
        }
        for (var key in _aff.consume) {
          index.gameResources.addResource(key, -_aff.consume[key]);
        }
        if (index.gameEntity.getAttribute(spell.id, 'duration')) {
          var _spell$level;
          index.gameEntity.registerGameEntity("active_".concat(id), {
            copyFromId: id,
            isAbstract: false,
            level: spell.level,
            tags: ['active_spell', 'active_effect'],
            scope: 'spells',
            unlockedBy: undefined
          });
          index.gameEntity.setEntityLevel("active_".concat(id), (_spell$level = spell === null || spell === void 0 ? void 0 : spell.level) !== null && _spell$level !== void 0 ? _spell$level : 1);
          this.spells[id].duration = index.gameEntity.getAttribute(spell.id, 'duration');
        }
        if (!this.spells[id]) {
          this.spells[id] = {};
        }
        this.spells[id].isCasted = true;
        this.spells[id].numCasted = (this.spells[id].numCasted || 0) + 1;
      }
      this.sendSpellData();
    }
  }, {
    key: "saveSettings",
    value: function saveSettings(payload) {
      if (payload.id) {
        // check if level was changed
        if (!this.spells[payload.id]) {
          this.spells[payload.id] = {
            duration: 0,
            cooldown: 0,
            level: 1,
            actualLevel: 1,
            xp: 0
          };
        }
        if (payload.actualLevel && payload.actualLevel !== this.spells[payload.id].actualLevel) {
          this.setSpell(payload.id, payload.actualLevel, true);
        }
        this.spells[payload.id] = _objectSpread(_objectSpread({}, this.spells[payload.id] || {}), {}, {
          autocast: payload.autocast
        });
      }
    }
  }, {
    key: "regenerateNotifications",
    value: function regenerateNotifications() {
      var entities = index.gameEntity.listEntitiesByTags(['spell']);
      entities.forEach(function (item) {
        index.gameCore.getModule('unlock-notifications').registerNewNotification('spellbook', 'spellbook', 'all', "spell_".concat(item.id), item.isUnlocked);
      });
    }
  }, {
    key: "getSpellsData",
    value: function getSpellsData(payload) {
      var _this2 = this;
      var items = index.gameEntity.listEntitiesByTags(['spell']);
      var presentSpells = items.filter(function (item) {
        return item.isUnlocked;
      });
      if (payload !== null && payload !== void 0 && payload.filterAutomated) {
        presentSpells = presentSpells.filter(function (one) {
          var _this2$spells$one$id, _this2$spells$one$id2;
          return ((_this2$spells$one$id = _this2.spells[one.id]) === null || _this2$spells$one$id === void 0 || (_this2$spells$one$id = _this2$spells$one$id.autocast) === null || _this2$spells$one$id === void 0 || (_this2$spells$one$id = _this2$spells$one$id.rules) === null || _this2$spells$one$id === void 0 ? void 0 : _this2$spells$one$id.length) || ((_this2$spells$one$id2 = _this2.spells[one.id]) === null || _this2$spells$one$id2 === void 0 || (_this2$spells$one$id2 = _this2$spells$one$id2.autocast) === null || _this2$spells$one$id2 === void 0 ? void 0 : _this2$spells$one$id2.isEnabled);
        });
      }
      if (payload !== null && payload !== void 0 && payload.includeAutomations) {
        presentSpells = presentSpells.map(function (spell) {
          var _this2$spells$spell$i;
          return _objectSpread(_objectSpread({}, spell), {}, {
            autocast: (_this2$spells$spell$i = _this2.spells[spell.id]) === null || _this2$spells$spell$i === void 0 ? void 0 : _this2$spells$spell$i.autocast
          });
        });
      }
      return {
        available: presentSpells.map(function (spell) {
          var _this2$spells$spell$i2, _this2$spells$spell$i3, _this2$spells$spell$i4, _this2$spells$spell$i5, _this2$spells$spell$i6, _this2$spells$spell$i7, _this2$spells$spell$i8;
          return _objectSpread(_objectSpread({}, spell), {}, {
            currentDuration: (_this2$spells$spell$i2 = _this2.spells[spell.id]) === null || _this2$spells$spell$i2 === void 0 ? void 0 : _this2$spells$spell$i2.duration,
            isActive: ((_this2$spells$spell$i3 = _this2.spells[spell.id]) === null || _this2$spells$spell$i3 === void 0 ? void 0 : _this2$spells$spell$i3.duration) > 0,
            isCasted: (_this2$spells$spell$i4 = _this2.spells[spell.id]) === null || _this2$spells$spell$i4 === void 0 ? void 0 : _this2$spells$spell$i4.isCasted,
            cooldown: (_this2$spells$spell$i5 = (_this2$spells$spell$i6 = _this2.spells[spell.id]) === null || _this2$spells$spell$i6 === void 0 ? void 0 : _this2$spells$spell$i6.cooldown) !== null && _this2$spells$spell$i5 !== void 0 ? _this2$spells$spell$i5 : 0,
            cooldownProg: spell.getUsageCooldown ? (spell.getUsageCooldown() + consts.SMALL_NUMBER - ((_this2$spells$spell$i7 = (_this2$spells$spell$i8 = _this2.spells[spell.id]) === null || _this2$spells$spell$i8 === void 0 ? void 0 : _this2$spells$spell$i8.cooldown) !== null && _this2$spells$spell$i7 !== void 0 ? _this2$spells$spell$i7 : 0)) / (spell.getUsageCooldown() + consts.SMALL_NUMBER) : 1,
            monitored: _this2.getMonitoredData(spell)
          });
        }),
        isSpellLevelingAvailable: this.isSpellLevelingAvailable(),
        automationUnlocked: index.gameEntity.getLevel('shop_item_planner') > 0
      };
    }
  }, {
    key: "sendSpellData",
    value: function sendSpellData(payload) {
      var data = this.getSpellsData(payload);
      var label = 'spell-data';
      if (payload !== null && payload !== void 0 && payload.prefix) {
        label = "".concat(label, "-").concat(payload.prefix);
      }
      this.eventHandler.sendData(label, data);
    }
  }, {
    key: "querySpellEffects",
    value: function querySpellEffects(id, level) {
      var spell = index.gameEntity.getEntity(id);
      var effects = [];
      if (spell.usageGain) {
        effects = index.resourceApi.unpackEffects(spell.usageGain, level);
      }
      return {
        effects: effects,
        potentialEffects: index.gameEntity.getEffects(id, 0, level, true),
        affordable: index.resourceCalculators.isAffordable(this.getConsumeAffordable(spell, level).consume),
        xpRate: this.getXPPerCast(id, level)
      };
    }
  }, {
    key: "getSpellDetails",
    value: function getSpellDetails(id) {
      var _this$spells$id6, _this$spells$id$autoc, _this$spells$id7, _this$spells$id8, _this$spells$id9, _this$spells$id10, _this$spells$id11;
      if (!id) return null;
      var spell = index.gameEntity.getEntity(id);
      var effects = [];
      if (spell.usageGain) {
        effects = index.resourceApi.unpackEffects(spell.usageGain, spell.level);
      }
      return {
        id: spell.id,
        name: spell.name,
        description: spell.description,
        breakdown: spell.breakdown,
        amount: spell.amount,
        effects: effects,
        duration: index.gameEntity.getAttribute(id, 'duration'),
        currentDuration: (_this$spells$id6 = this.spells[id]) === null || _this$spells$id6 === void 0 ? void 0 : _this$spells$id6.duration,
        potentialEffects: index.gameEntity.getEffects(id, 0, spell.level, true),
        affordable: index.resourceCalculators.isAffordable(this.getConsumeAffordable(spell).consume),
        tags: spell.tags || [],
        autocast: (_this$spells$id$autoc = (_this$spells$id7 = this.spells[id]) === null || _this$spells$id7 === void 0 ? void 0 : _this$spells$id7.autocast) !== null && _this$spells$id$autoc !== void 0 ? _this$spells$id$autoc : {
          rules: []
        },
        isCasted: (_this$spells$id8 = this.spells[id]) === null || _this$spells$id8 === void 0 ? void 0 : _this$spells$id8.isCasted,
        maxLevel: ((_this$spells$id9 = this.spells[id]) === null || _this$spells$id9 === void 0 ? void 0 : _this$spells$id9.level) || 1,
        maxLevelCostReduction: (0,spells_db.getCostReduction)(id),
        maxXP: this.getMaxXP(id),
        xp: ((_this$spells$id10 = this.spells[id]) === null || _this$spells$id10 === void 0 ? void 0 : _this$spells$id10.xp) || 0,
        xpRate: this.getXPPerCast(id),
        actualLevel: spell.level,
        isSpellLevelingAvailable: this.isSpellLevelingAvailable(),
        cooldown: spell.getUsageCooldown(),
        currentCooldown: (_this$spells$id11 = this.spells[id]) === null || _this$spells$id11 === void 0 ? void 0 : _this$spells$id11.cooldown
      };
    }
  }, {
    key: "sendSpellDetails",
    value: function sendSpellDetails(id, prefix) {
      var data = this.getSpellDetails(id);
      var label = 'spell-details';
      if (prefix) {
        label = "".concat(prefix, "-").concat(label);
      }
      this.eventHandler.sendData(label, data);
    }
  }, {
    key: "getAllSpellsData",
    value: function getAllSpellsData() {
      var items = index.gameEntity.listEntitiesByTags(['spell']);
      return items.map(function (spell) {
        return _objectSpread(_objectSpread({}, spell), {}, {
          // monitor: this.monitoredData[effect.id] ?? null, // Will need it in nearest future
          isUnlocked: spell.isUnlocked
        });
      });
    }
  }, {
    key: "sendAllSpells",
    value: function sendAllSpells(payload) {
      var data = this.getAllSpellsData();
      var label = 'all-spells';
      if (payload !== null && payload !== void 0 && payload.prefix) {
        label = "".concat(label, "-").concat(payload === null || payload === void 0 ? void 0 : payload.prefix);
      }
      this.eventHandler.sendData(label, data);
    }
  }, {
    key: "getGeneralMagicStatsData",
    value: function getGeneralMagicStatsData() {
      var stats = {
        'general': [_objectSpread(_objectSpread({}, index.gameEffects.getEffect('spell_xp_rate')), {}, {
          isMultiplier: true
        })].filter(function (one) {
          return !one.isMultiplier || Math.abs(one.value - 1) > consts.SMALL_NUMBER;
        }),
        'magic_schools': [_objectSpread(_objectSpread({}, index.gameEffects.getEffect('restoration_spells_efficiency')), {}, {
          isMultiplier: true
        }), _objectSpread(_objectSpread({}, index.gameEffects.getEffect('recovery_spells_efficiency')), {}, {
          isMultiplier: true
        }), _objectSpread(_objectSpread({}, index.gameEffects.getEffect('illusion_spells_efficiency')), {}, {
          isMultiplier: true
        }), _objectSpread(_objectSpread({}, index.gameEffects.getEffect('conjuration_spells_efficiency')), {}, {
          isMultiplier: true
        }), _objectSpread(_objectSpread({}, index.gameEffects.getEffect('elemental_spells_efficiency')), {}, {
          isMultiplier: true
        })].filter(function (one) {
          return !one.isMultiplier || Math.abs(one.value - 1) > consts.SMALL_NUMBER;
        })
      };
      return stats;
    }
  }, {
    key: "sendGeneralMagicStats",
    value: function sendGeneralMagicStats(payload) {
      var data = this.getGeneralMagicStatsData();
      var label = 'general-magic-stats';
      if (payload !== null && payload !== void 0 && payload.prefix) {
        label = "".concat(label, "-").concat(payload === null || payload === void 0 ? void 0 : payload.prefix);
      }
      this.eventHandler.sendData(label, data);
    }
  }]);
}(game_module.GameModule);

export { SpellModule };
