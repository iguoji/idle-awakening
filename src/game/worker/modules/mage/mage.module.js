import * as _shared_game_module__WEBPACK_IMPORTED_MODULE_0__ from '../../shared/game-module.js';
import * as game_framework__WEBPACK_IMPORTED_MODULE_1__ from '../../../framework/index.js';
import * as _skills_db_v2__WEBPACK_IMPORTED_MODULE_2__ from './skills-db-v2.js';
import * as _permanent_bonuses_db__WEBPACK_IMPORTED_MODULE_3__ from './permanent-bonuses-db.js';
import * as lodash__WEBPACK_IMPORTED_MODULE_4__ from 'lodash';
import * as game_framework_src_general_unlocks_api__WEBPACK_IMPORTED_MODULE_5__ from '../../../framework/src/general/unlocks-api.js';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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






// import {initMageRanks} from "./mage-ranks-db";

var MageModule = /*#__PURE__*/function (_GameModule) {
  function MageModule() {
    var _this;
    _classCallCheck(this, MageModule);
    _this = _callSuper(this, MageModule);
    _this.mageLevel = 0;
    _this.mageExp = 0;
    _this.skillUpgrades = {};
    _this.editModeSkills = null;
    _this.currentEditEffects = null;
    _this.tourStatus = null;
    _this.shouldSendSkills = false;
    _this.bankedTime = {
      current: 0,
      max: 3600 * 24 * 1000,
      speedUpFactor: 1
    };
    _this.actualVersion = 5;
    _this.currentVersion = 5;
    _this.skillsUnlock = {}; // Holds as key id of skill and as value array of skills that are unlocked BY this skill
    _this.skillDrafts = {};
    _this.isViewMode = false;
    _this.settings = {};
    /*
    this.eventHandler.registerHandler('feed-dragon', (data) => {
        this.feedDragon();
     })
    this.eventHandler.registerHandler('hunt', (data) => {
        const rs = gameResources.getResource('meat');
        gameResources.addResource('meat', 1*rs.multiplier);
    })
     */

    _this.skillGroupsCached = {};
    _this.eventHandler.registerHandler('query-settings', function () {
      _this.eventHandler.sendData('settings', _this.settings);
    });
    _this.eventHandler.registerHandler('set-setting', function (payload) {
      if (!_this.settings) {
        _this.settings = {};
      }
      _this.settings[payload.key] = payload.value;
      _this.eventHandler.sendData('settings', _this.settings);
    });
    _this.eventHandler.registerHandler('set_tour_finished', function (_ref) {
      var skipStep = _ref.skipStep;
      // console.log('TourFinished: ', skipStep);
      _this.tourStatus = {
        isComplete: true,
        skipStep: skipStep
      };
    });
    _this.eventHandler.registerHandler('query_tour_status', function () {
      _this.eventHandler.sendData('tour_status', _this.tourStatus);
    });
    _this.eventHandler.registerHandler('query-mage-data', function (_ref2) {
      var prefix = _ref2.prefix;
      var data = _this.getMageData();
      var label = 'mage-data';
      if (prefix) {
        label = "".concat(label, "-").concat(prefix);
      }
      _this.eventHandler.sendData(label, data);
    });
    _this.eventHandler.registerHandler('query-skills-data', function () {
      var data = _this.getSkillsData();
      _this.eventHandler.sendData('skills-data', data);
    });
    _this.eventHandler.registerHandler('purchase-skill', function (_ref3) {
      var id = _ref3.id;
      _this.addSkillLevel(id);
      var data = _this.getSkillsData();
      _this.eventHandler.sendData('skills-data', data);
    });
    _this.eventHandler.registerHandler('remove-skill', function (_ref4) {
      var id = _ref4.id;
      _this.removeSkillLevel(id);
      var data = _this.getSkillsData();
      _this.eventHandler.sendData('skills-data', data);
    });
    _this.eventHandler.registerHandler('apply-skill-changes', function (_ref5) {
      var id = _ref5.id;
      _this.applySkillChanges();
      var data = _this.getSkillsData();
      _this.eventHandler.sendData('skills-data', data);
    });
    _this.eventHandler.registerHandler('discard-skill-changes', function (_ref6) {
      var id = _ref6.id;
      _this.discardSkillChanges();
      var data = _this.getSkillsData();
      _this.eventHandler.sendData('skills-data', data);
    });
    _this.eventHandler.registerHandler('toggle-speedup', function () {
      _this.bankedTime.speedUpFactor = 5 - _this.bankedTime.speedUpFactor;
    });
    _this.eventHandler.registerHandler('query-active-effects', function () {
      _this.sendActiveEffectsData();
    });
    _this.eventHandler.registerHandler('query-statistics', function () {
      var data = _this.getStatistics();
      _this.eventHandler.sendData('statistics', data);
    });
    _this.eventHandler.registerHandler('save-skill-draft', function (payload) {
      _this.saveSkillDraft(payload.name);
      var data = _this.getSkillsData();
      _this.eventHandler.sendData('skills-data', data);
    });
    _this.eventHandler.registerHandler('delete-skill-draft', function (payload) {
      _this.deleteSkillDraft(payload.id);
      var data = _this.getSkillsData();
      _this.eventHandler.sendData('skills-data', data);
    });
    _this.eventHandler.registerHandler('load-skill-draft', function (payload) {
      _this.loadSkillDraft(payload.id, payload.isViewMode);
      var data = _this.getSkillsData();
      _this.eventHandler.sendData('skills-data', data);
    });
    _this.eventHandler.registerHandler('export-skill-draft', function (payload) {
      var blob = _this.exportSkillDraft(payload.id);
      _this.eventHandler.sendData('export-skill-draft-blob', blob);
    });
    _this.eventHandler.registerHandler('import-skill-draft', function (payload) {
      _this.importSkillDraft(payload.content);
      var data = _this.getSkillsData();
      _this.eventHandler.sendData('skills-data', data);
    });
    _this.eventHandler.registerHandler('query-total-unlocks', function () {
      var data = game_framework_src_general_unlocks_api__WEBPACK_IMPORTED_MODULE_5__.unlocksApi.getGeneralUnlocksStats();
      _this.eventHandler.sendData('total-unlocks', data);
    });
    return _this;
  }
  _inherits(MageModule, _GameModule);
  return _createClass(MageModule, [{
    key: "saveSkillDraft",
    value: function saveSkillDraft(name) {
      var draftId = "draft-".concat(Date.now(), "-").concat(Math.random());
      this.skillDrafts[draftId] = {
        id: draftId,
        name: name,
        timestamp: Date.now(),
        skills: (0,lodash__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(this.editModeSkills || this.skillUpgrades)
      };
      return this.skillDrafts[draftId];
    }

    /*loadSkillDraft(draftId) {
        const draft = this.skillDrafts[draftId];
        if (!draft) return false;
         this.editModeSkills = cloneDeep(draft.skills);
        this.currentEditEffects = this.getSkillTreeEffects(this.editModeSkills);
        return true;
    }*/
  }, {
    key: "loadSkillDraft",
    value: function loadSkillDraft(draftId) {
      var isViewMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var draft = this.skillDrafts[draftId];
      if (!draft) return false;
      this.isViewMode = isViewMode;
      if (!isViewMode) {
        if (this.canApplySkills(draft.skills)) {
          // 🎯 Мерджимо скіли, беручи максимальний рівень
          this.editModeSkills = _objectSpread({}, this.skillUpgrades);
          for (var skillId in draft.skills) {
            this.editModeSkills[skillId] = Math.max(this.editModeSkills[skillId] || 0, draft.skills[skillId]);
          }
          this.currentEditEffects = this.getSkillTreeEffects(this.editModeSkills);
        } else {
          // ❌ Якщо чернетку НЕ можна застосувати, просто показуємо її
          return false;
        }
      } else {
        this.editModeSkills = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(draft.skills);
        this.currentEditEffects = this.getSkillTreeEffects(this.editModeSkills);
      }
      this.shouldSendSkills = true;
      return true;
    }
  }, {
    key: "deleteSkillDraft",
    value: function deleteSkillDraft(draftId) {
      delete this.skillDrafts[draftId];
    }
  }, {
    key: "exportSkillDraft",
    value: function exportSkillDraft(draftId) {
      var draft = this.skillDrafts[draftId];
      if (!draft) return null;
      return draft;
    }
  }, {
    key: "importSkillDraft",
    value: function importSkillDraft(fileContent) {
      try {
        var draft = JSON.parse(fileContent);
        if (!draft.name || !draft.skills) {
          this.eventHandler.sendData("import-skill-draft-error", {
            error: "Invalid file format. Missing name or skills data."
          });
          return null;
        }
        var isValid = true;
        var invalidSkills = [];
        for (var skillId in draft.skills) {
          var _entity$unlockBySkill;
          var draftLevel = draft.skills[skillId];

          // 🔹 Перевіряємо, чи скіл існує у грі
          if (!game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.entityExists(skillId)) {
            isValid = false;
            invalidSkills.push({
              skillId: skillId,
              reason: "Skill does not exist."
            });
            continue;
          }

          // 🔹 Перевіряємо, чи рівень не перевищує максимальний
          var maxLevel = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getEntityMaxLevel(skillId);
          if (draftLevel > maxLevel) {
            isValid = false;
            invalidSkills.push({
              skillId: skillId,
              reason: "Level ".concat(draftLevel, " exceeds max (").concat(maxLevel, ").")
            });
          }

          // 🔹 Перевіряємо, чи цей скіл має залежності (unlockBySkills)
          var entity = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getEntity(skillId);
          if (draftLevel > 0 && (_entity$unlockBySkill = entity.unlockBySkills) !== null && _entity$unlockBySkill !== void 0 && _entity$unlockBySkill.length) {
            var isUnlocked = entity.unlockBySkills.some(function (_ref7) {
              var id = _ref7.id,
                level = _ref7.level;
              return (draft.skills[id] || 0) >= level;
            });
            if (!isUnlocked) {
              isValid = false;
              invalidSkills.push({
                skillId: skillId,
                reason: "Skill has prerequisites that are not met."
              });
            }
          }
        }
        if (!isValid) {
          this.eventHandler.sendData("import-skill-draft-error", {
            error: "Some skills in the draft are invalid.",
            details: invalidSkills
          });
          return null;
        }

        // ✅ Якщо все валідно - додаємо чернетку
        var draftId = "draft-".concat(Date.now(), "-").concat(Math.random());
        this.skillDrafts[draftId] = _objectSpread(_objectSpread({}, draft), {}, {
          id: draftId
        });

        // 🔹 Надсилаємо оновлений список чернеток на фронт
        this.eventHandler.sendData("skill-draft-updated", Object.values(this.skillDrafts));
        return draftId;
      } catch (error) {
        console.error("Invalid draft file:", error);
        this.eventHandler.sendData("import-skill-draft-error", {
          error: "Failed to parse JSON file. Please check the file format."
        });
        return null;
      }
    }

    /*importSkillDraft(fileContent) {
        try {
            const draft = JSON.parse(fileContent);
            if (draft.name && draft.skills) {
                const draftId = `draft-${Date.now()}-${Math.random()}`;
                this.skillDrafts[draftId] = {...draft, id: draftId};
                return draftId;
            }
        } catch (error) {
            console.error("Invalid draft file:", error);
        }
        return null;
    }*/
  }, {
    key: "getSkillTreeEffects",
    value: function getSkillTreeEffects(skillTree) {
      if (!skillTree) {
        skillTree = {};
      }
      var totalEffects = {};
      var levelsByGroup = {};
      for (var skillId in skillTree) {
        if (this.skillGroupsCached[skillId]) {
          var groupId = this.skillGroupsCached[skillId];
          if (!levelsByGroup[groupId]) {
            levelsByGroup[groupId] = {
              totalLevel: 0,
              protoSkillId: skillId,
              allSkills: []
            };
          }
          levelsByGroup[groupId].totalLevel += skillTree[skillId];
          levelsByGroup[groupId].allSkills.push(skillId);
          continue;
        }
        var entityEffects = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getEffectsStructured(skillId, 0, skillTree[skillId]);
        //console.log('EffectsAsserted: ', entityEffects, totalEffects);
        var total = game_framework__WEBPACK_IMPORTED_MODULE_1__.resourceApi.mergeEffects(totalEffects, entityEffects);
        //console.log('Merged: ', total);
      }
      //console.log('levelsByGroup', levelsByGroup);
      for (var _groupId in levelsByGroup) {
        var _entityEffects = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getEffectsStructured(levelsByGroup[_groupId].protoSkillId, 0, levelsByGroup[_groupId].totalLevel);
        //console.log('GroupEffectsAsserted: ', entityEffects, totalEffects);
        var _total = game_framework__WEBPACK_IMPORTED_MODULE_1__.resourceApi.mergeEffects(totalEffects, _entityEffects);
        //console.log('Merged: ', total);
      }
      console.log('totalEffects', totalEffects);
      return totalEffects;
    }
  }, {
    key: "getSkillTreeEffectsUnpacked",
    value: function getSkillTreeEffectsUnpacked(skillTree) {
      return game_framework__WEBPACK_IMPORTED_MODULE_1__.resourceApi.unpackEffectsToObject(this.getSkillTreeEffects(skillTree));
    }
  }, {
    key: "getFreeSPLeft",
    value: function getFreeSPLeft() {
      var _gameResources$getRes, _this$currentEditEffe;
      var total = (_gameResources$getRes = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.getResource('skill-points')) === null || _gameResources$getRes === void 0 ? void 0 : _gameResources$getRes.income;
      var consume = ((_this$currentEditEffe = this.currentEditEffects) === null || _this$currentEditEffe === void 0 || (_this$currentEditEffe = _this$currentEditEffe.resources) === null || _this$currentEditEffe === void 0 || (_this$currentEditEffe = _this$currentEditEffe.consumption) === null || _this$currentEditEffe === void 0 || (_this$currentEditEffe = _this$currentEditEffe['skill-points']) === null || _this$currentEditEffe === void 0 ? void 0 : _this$currentEditEffe.value) || 0;
      return total - consume;
    }
  }, {
    key: "canApplySkills",
    value: function canApplySkills(draftSkills) {
      var _gameResources$getRes2;
      if (!draftSkills) return false;
      var availablePoints = ((_gameResources$getRes2 = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.getResource('skill-points')) === null || _gameResources$getRes2 === void 0 ? void 0 : _gameResources$getRes2.balance) || 0;
      var requiredPoints = 0;
      for (var skillId in draftSkills) {
        var draftLevel = draftSkills[skillId] || 0;
        var currentLevel = this.skillUpgrades[skillId] || 0;
        if (draftLevel > currentLevel) {
          requiredPoints += draftLevel - currentLevel;
        }
      }
      return requiredPoints <= availablePoints;
    }
  }, {
    key: "applySkillChanges",
    value: function applySkillChanges() {
      if (!this.editModeSkills) {
        return; // Якщо немає змін, виходимо
      }
      if (!this.canApplySkills(this.editModeSkills)) {
        return;
      }

      // Копіюємо рівні скілів із редагування в основне дерево
      this.skillUpgrades = _objectSpread({}, this.editModeSkills);
      for (var key in this.skillUpgrades) {
        game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.setEntityLevel(key, this.skillUpgrades[key], true);
      }

      // Очищаємо режим редагування
      this.editModeSkills = null;
      this.currentEditEffects = null;

      // Відправляємо оновлені дані
      this.shouldSendSkills = true;
    }
  }, {
    key: "discardSkillChanges",
    value: function discardSkillChanges() {
      this.isViewMode = false;
      if (!this.editModeSkills) {
        return; // Якщо режим редагування не активний, нічого не робимо
      }

      // Очищаємо тимчасові дані, залишаючи все як було
      this.editModeSkills = null;
      this.currentEditEffects = null;

      // Відправляємо оновлені дані без змін
      this.shouldSendSkills = true;
    }
  }, {
    key: "addSkillLevel",
    value: function addSkillLevel(itemId) {
      var _ent$unlockBySkills,
        _this2 = this;
      var free = this.editModeSkills ? this.getFreeSPLeft() : game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.getResource('skill-points').balance;
      console.log('Free: ', free, this.currentEditEffects);
      if (!free) {
        return;
      }
      if (!this.editModeSkills) {
        this.editModeSkills = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(this.skillUpgrades);
        this.currentEditEffects = this.getSkillTreeEffects(this.editModeSkills);
      }

      // do check if unlocked and if requirements are met
      if (!game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.isEntityUnlocked(itemId)) {
        return;
      }
      // check if any of requirements are met
      var ent = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getEntity(itemId);
      if ((_ent$unlockBySkills = ent.unlockBySkills) !== null && _ent$unlockBySkills !== void 0 && _ent$unlockBySkills.length) {
        var isMatched = ent.unlockBySkills.some(function (unlock) {
          return unlock.level <= _this2.editModeSkills[unlock.id];
        });
        if (!isMatched) {
          return;
        }
      }
      if (game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getEntityMaxLevel(itemId) <= this.editModeSkills[itemId]) {
        return;
      }
      this.editModeSkills[itemId] = (this.editModeSkills[itemId] || 0) + 1;
      console.log('newEdit: ', this.editModeSkills, this.editModeSkills[itemId]);

      // once finish edit
      this.currentEditEffects = this.getSkillTreeEffects(this.editModeSkills);
      console.log('AfterEdit: ', this.getFreeSPLeft(), this.currentEditEffects);
    }
  }, {
    key: "removeUnavailableSkills",
    value: function removeUnavailableSkills(skillId) {
      var _this3 = this;
      var dependents = this.skillsUnlock[skillId] || [];
      console.log('>>>>>> ', dependents);
      var _iterator = _createForOfIteratorHelper(dependents),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var dependent = _step.value;
          var dependentId = dependent.id,
            requiredLevel = dependent.level;
          var currentDependentLevel = this.editModeSkills[dependentId] || 0;

          // Якщо рівень залежного скіла більше 0, але він більше не відповідає вимогам
          if (currentDependentLevel > 0) {
            var unlockBySkills = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getEntity(dependentId).unlockBySkills || [];

            // Перевіряємо, чи хоча б один із необхідних скілів більше не відповідає вимогам
            var isUnlocked = unlockBySkills.some(function (_ref8) {
              var id = _ref8.id,
                level = _ref8.level;
              return (_this3.editModeSkills[id] || 0) >= level;
            });
            if (!isUnlocked) {
              this.editModeSkills[dependentId] = 0; // Видаляємо скіл
              this.removeUnavailableSkills(dependentId); // Рекурсивно перевіряємо наступний рівень залежностей
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "removeSkillLevel",
    value: function removeSkillLevel(itemId) {
      if (!this.editModeSkills) {
        return; // Disable removal in non-edit mode
      }
      if (!this.editModeSkills[itemId]) {
        return;
      }
      if (this.editModeSkills[itemId] <= this.skillUpgrades[itemId]) {
        return;
      }

      // do check if unlocked and if requirements are met
      if (!game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.isEntityUnlocked(itemId)) {
        return;
      }

      // Here we should recursively go over items that require this skill and set them to 0 in case not enough current level
      this.editModeSkills[itemId]--;
      this.removeUnavailableSkills(itemId); // Запускаємо рекурсивну перевірку

      // Після видалень оновлюємо загальні ефекти
      this.currentEditEffects = this.getSkillTreeEffects(this.editModeSkills);
      console.log('After Edit: ', this.getFreeSPLeft(), this.currentEditEffects);
    }
  }, {
    key: "purchaseItem",
    value: function purchaseItem(itemId) {
      var _ent$unlockBySkills2,
        _this4 = this;
      var ent = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getEntity(itemId);
      if ((_ent$unlockBySkills2 = ent.unlockBySkills) !== null && _ent$unlockBySkills2 !== void 0 && _ent$unlockBySkills2.length) {
        var isMatched = ent.unlockBySkills.some(function (unlock) {
          return unlock.level <= _this4.skillUpgrades[unlock.id];
        });
        if (!isMatched) {
          return;
        }
      }
      var newEnt = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.levelUpEntity(itemId);
      console.log('Modifier: ', JSON.stringify(game_framework__WEBPACK_IMPORTED_MODULE_1__.resourceModifiers.getModifier("entity_".concat(itemId))), game_framework__WEBPACK_IMPORTED_MODULE_1__.resourceModifiers.getDependenciesToRegenerate("entity_".concat(itemId)), game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.getResource('skill-points').balance);
      if (newEnt.success) {
        this.skillUpgrades[itemId] = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getLevel(itemId);
        this.leveledId = itemId;
        /*const data = this.getSkillsData();
        this.eventHandler.sendData('skills-data', data);*/
      }
      this.shouldSendSkills = true;
      return newEnt.success;
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var _this5 = this;
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.registerResource('skill-points', {
        name: 'Skill Points',
        hasCap: true,
        tags: ['mage', 'skill'],
        defaultCap: 0,
        isService: true
      });
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEffects.registerEffect('mageLevel', {
        name: 'Mage Level',
        defaultValue: 0,
        hasCap: false
      });
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEffects.registerEffect('mage_levelup_requirement', {
        name: 'Mage Levelup Requirement',
        defaultValue: 1
      });
      (0,_skills_db_v2__WEBPACK_IMPORTED_MODULE_2__.registerSkillsStage1)();
      (0,_permanent_bonuses_db__WEBPACK_IMPORTED_MODULE_3__.registerPermanentBonuses)();

      // this.mageRanks = initMageRanks()

      var list = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.listEntitiesByTags(['skill'], false, [], {
        bRawData: true
      });
      list.forEach(function (item) {
        if (item.unlockBySkills) {
          item.unlockBySkills.forEach(function (unlock) {
            if (!_this5.skillsUnlock[unlock.id]) {
              _this5.skillsUnlock[unlock.id] = [];
            }
            _this5.skillsUnlock[unlock.id].push({
              level: unlock.level,
              id: item.id
            });
          });
        }
      });
      this.skillGroupsCached = list.filter(function (one) {
        return one.modifierGroupId;
      }).reduce(function (acc, skill) {
        acc[skill.id] = skill.modifierGroupId;
        return acc;
      });
      var entity = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.registerGameEntity('mage', {
        tags: ["mage", "general"],
        name: 'Mage',
        level: 1,
        resourceModifier: {
          get_rawCap: function get_rawCap() {
            return {
              resources: {
                'mage-xp': {
                  A: 50,
                  B: 200,
                  C: 1.11,
                  type: 3
                },
                'energy': {
                  A: 1,
                  B: 9 + game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEffects.getEffectValue('attribute_strength'),
                  type: 0,
                  label: 'Attribute: Strength'
                },
                'health': {
                  A: 1,
                  B: 9 + game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEffects.getEffectValue('attribute_vitality'),
                  type: 1,
                  label: 'Attribute: Vitality'
                },
                'knowledge': {
                  A: 1,
                  B: game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEffects.getEffectValue('attribute_memory'),
                  type: 0,
                  label: 'Attribute: Memory'
                },
                mana: {
                  A: 0,
                  B: 0.5 * (game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEffects.getEffectValue('attribute_magic_capability') - 1),
                  type: 0,
                  label: 'Attribute: Magic Capability'
                },
                mental_energy: {
                  A: 0,
                  B: 0.5 * (game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEffects.getEffectValue('attribute_willpower') - 1),
                  type: 0,
                  label: 'Attribute: Willpower'
                }
              }
            };
          },
          get_income: function get_income() {
            return {
              resources: {
                energy: {
                  A: 0,
                  B: 0.01 + 0.01 * game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEffects.getEffectValue('attribute_stamina'),
                  type: 0,
                  label: 'Attribute: Stamina'
                },
                health: {
                  A: 0,
                  B: 0.01 * (0.5 + game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEffects.getEffectValue('attribute_recovery')),
                  type: 0,
                  label: 'Attribute: Recovery'
                },
                mana: {
                  A: 0,
                  B: 0.01 * (5 + game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEffects.getEffectValue('attribute_magic_ability')),
                  type: 0,
                  label: 'Attribute: Magic Ability'
                },
                mental_energy: {
                  A: 0,
                  B: 0.01 * (5 + game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEffects.getEffectValue('attribute_clarity')),
                  type: 0,
                  label: 'Attribute: Clarity'
                },
                'skill-points': {
                  A: 1,
                  B: -1,
                  type: 0
                }
              }
            };
          },
          get_multiplier: function get_multiplier() {
            return {
              resources: {
                coins: {
                  A: 0,
                  B: 0.99 + 0.01 * Math.pow(game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEffects.getEffectValue('attribute_bargaining'), 0.75),
                  type: 0,
                  label: 'Attribute: Bargaining'
                }
              }
            };
          },
          effectDeps: ['workersEfficiencyPerDragonLevel', 'mage_levelup_requirement', 'attribute_stamina', 'attribute_strength', 'attribute_vitality', 'attribute_recovery', 'attribute_memory', 'attribute_magic_ability', 'attribute_magic_capability', 'attribute_bargaining', 'attribute_willpower', 'attribute_clarity']
        },
        get_cost: function get_cost() {
          return {
            'mage-xp': {
              A: 50,
              B: 200,
              C: 1.11,
              type: 3
            }
          };
        }
      });
    }

    /*getMageRank(level) {
        let rank = this.mageRanks[0]; // Default to the lowest rank
         for (const mageRank of this.mageRanks) {
            if (level >= mageRank.level) {
                rank = mageRank; // Update rank if level is sufficient
            } else {
                break; // Stop checking once we find a higher level rank
            }
        }
         console.log('MGR: ', rank, this.mageRanks)
         return rank;
    }
     reassertMageRank(level) {
        const rank = this.getMageRank(level);
        gameEntity.setEntityLevel('mage_rank', rank.rankLevel)
    }*/

    /*reassertCurrentMageLevel() {
        const level = gameEntity.getLevel('mage');
        return this.reassertMageRank(level);
    }*/
  }, {
    key: "topValues",
    value: function topValues(data) {
      return (data || []).sort(function (a, b) {
        return b.value - a.value;
      }).slice(0, 10);
    }
  }, {
    key: "getStatistics",
    value: function getStatistics() {
      var result = {};
      result.totalTimePlayed = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.globalTime;
      result.mageLevel = this.mageLevel;
      result.actionsUnlocked = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.listEntitiesByTags(['action']).filter(function (one) {
        return game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.isEntityUnlocked(one.id);
      }).length;
      result.actionTimes = this.topValues(Object.entries(game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('actions').actions).map(function (_ref9) {
        var _ref10 = _slicedToArray(_ref9, 2),
          id = _ref10[0],
          action = _ref10[1];
        return {
          name: game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getEntity(id).name,
          value: action.timeInvested
        };
      }));
      result.actionXP = this.topValues(Object.entries(game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('actions').actions).map(function (_ref11) {
        var _ref12 = _slicedToArray(_ref11, 2),
          id = _ref12[0],
          action = _ref12[1];
        return {
          name: game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getEntity(id).name,
          value: action.xpEarned
        };
      }));
      result.spellsCasted = this.topValues(Object.entries(game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('magic').spells).map(function (_ref13) {
        var _ref14 = _slicedToArray(_ref13, 2),
          id = _ref14[0],
          spell = _ref14[1];
        return {
          name: game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getEntity(id).name,
          value: spell.numCasted
        };
      }));
      // console.log('RS: ', result);
      return result;
    }
  }, {
    key: "tick",
    value: function tick(game, dT) {
      var _this$bankedTime;
      this.leveledId = null;
      this.isLeveledUp = false;
      var rs = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.getResource('mage-xp');
      if (rs.amount >= rs.cap) {
        var rslt = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.levelUpEntity('mage');
        // console.log('levelUp: ', rslt);
        // gameResources.addResource('skill-points', 1);
        this.isLeveledUp = true;
        var data = this.getMageData();
        // this.reassertCurrentMageLevel();
        this.eventHandler.sendData('mage-data', data);
      }

      // console.log('B_TICK: ', this.bankedTime)
      if (!this.bankedTime.current) {
        this.bankedTime.current = 0;
      }
      if (((_this$bankedTime = this.bankedTime) === null || _this$bankedTime === void 0 ? void 0 : _this$bankedTime.speedUpFactor) > 1) {
        var _this$bankedTime2, _this$bankedTime3, _this$bankedTime4;
        this.bankedTime.current -= dT * (((_this$bankedTime2 = this.bankedTime) === null || _this$bankedTime2 === void 0 ? void 0 : _this$bankedTime2.speedUpFactor) - 1) * 1000 / ((_this$bankedTime3 = this.bankedTime) === null || _this$bankedTime3 === void 0 ? void 0 : _this$bankedTime3.speedUpFactor);
        if (((_this$bankedTime4 = this.bankedTime) === null || _this$bankedTime4 === void 0 ? void 0 : _this$bankedTime4.current) <= 0) {
          this.bankedTime.current = 0;
          this.bankedTime.speedUpFactor = 1;
        }
      }
      if (this.shouldSendSkills) {
        this.shouldSendSkills = false;
        console.log('Sending skill through reassert');
        var _data = this.getSkillsData();
        this.eventHandler.sendData('skills-data', _data);
      }
      // console.log('A_TICK: ', this.bankedTime);
    }
  }, {
    key: "save",
    value: function save() {
      return {
        mageLevel: game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getLevel('mage'),
        skillUpgrades: {
          skills: this.skillUpgrades,
          currentVersion: this.actualVersion
        },
        permanentBonuses: game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.listEntitiesByTags(['bonus', 'permanent']).map(function (one) {
          return {
            id: one.id,
            level: one.level
          };
        }),
        bankedTime: _objectSpread(_objectSpread({}, this.bankedTime), {}, {
          lastSave: Date.now()
        }),
        tourStatus: this.tourStatus,
        drafts: this.skillDrafts,
        settings: this.settings
      };
    }
  }, {
    key: "reset",
    value: function reset() {
      this.load({});
    }
  }, {
    key: "load",
    value: function load(obj) {
      var _obj$skillUpgrades;
      this.mageLevel = (obj === null || obj === void 0 ? void 0 : obj.mageLevel) || 1;
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.setEntityLevel('mage', this.mageLevel);
      for (var key in this.skillUpgrades) {
        this.setSkill(key, 0, true);
      }
      this.skillUpgrades = {};
      if (obj !== null && obj !== void 0 && obj.skillUpgrades && obj !== null && obj !== void 0 && (_obj$skillUpgrades = obj.skillUpgrades) !== null && _obj$skillUpgrades !== void 0 && _obj$skillUpgrades.skills && obj !== null && obj !== void 0 && obj.skillUpgrades.currentVersion && (obj === null || obj === void 0 ? void 0 : obj.skillUpgrades.currentVersion) >= this.actualVersion) {
        for (var id in obj.skillUpgrades.skills) {
          if (game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.entityExists(id)) {
            this.setSkill(id, obj.skillUpgrades.skills[id], true);
          }
        }
      }
      var permanent = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.listEntitiesByTags(['bonus', 'permanent']).map(function (one) {
        return {
          id: one.id,
          level: one.level
        };
      });
      permanent.forEach(function (one) {
        game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.setEntityLevel(one.id, 0, true);
      });
      if (obj !== null && obj !== void 0 && obj.permanentBonuses) {
        obj.permanentBonuses.forEach(function (_ref15) {
          var id = _ref15.id,
            level = _ref15.level;
          if (game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.entityExists(id)) {
            game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.setEntityLevel(id, level, true);
          }
        });
      }
      this.bankedTime = {
        current: 0,
        max: 3600 * 24 * 1000,
        speedUpFactor: 1
      };
      if (obj !== null && obj !== void 0 && obj.bankedTime) {
        this.bankedTime = obj === null || obj === void 0 ? void 0 : obj.bankedTime;
        if (this.bankedTime.max < 3600 * 24 * 1000) {
          this.bankedTime.max = 3600 * 24 * 1000;
        }
        if (Date.now() > this.bankedTime.lastSave + 60000) {
          var delta = Date.now() - (this.bankedTime.lastSave + 60000);
          this.bankedTime.current = Math.min(this.bankedTime.max, this.bankedTime.current + delta);
        }
        // console.log('loadedBankedTime: ', this.bankedTime, Date.now(), Date.now() - (this.bankedTime.lastSave + 60000))
      }
      this.tourStatus = obj === null || obj === void 0 ? void 0 : obj.tourStatus;
      if (!this.skillUpgrades) {
        this.skillUpgrades = {};
      }
      if (obj !== null && obj !== void 0 && obj.drafts) {
        this.skillDrafts = obj === null || obj === void 0 ? void 0 : obj.drafts;
      }

      // this.reassertCurrentMageLevel();

      this.getSkillTreeEffects(this.skillUpgrades);
      this.settings = (obj === null || obj === void 0 ? void 0 : obj.settings) || {};
    }
  }, {
    key: "setSkill",
    value: function setSkill(skillId, amount) {
      var bForce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.setEntityLevel(skillId, amount, bForce);
      this.skillUpgrades[skillId] = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getLevel(skillId);
    }
  }, {
    key: "resetPerks",
    value: function resetPerks() {
      // console.log('resetPerks');
      for (var id in this.skillUpgrades) {
        this.setSkill(id, 0, true);
      }
    }
  }, {
    key: "getMageData",
    value: function getMageData() {
      var rs = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.getResource('mage-xp');
      var skills = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.getResource('skill-points');
      // const rank = gameEntity.getLevel('mage_rank');
      // const rankData = this.getMageRank(gameEntity.getLevel('mage'));

      // console.log('rank: ', rankData);

      return {
        mageLevel: game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getLevel('mage'),
        mageXP: rs.amount,
        mageMaxXP: rs.cap,
        skillPoints: skills.balance,
        timeSpent: game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.globalTime,
        isLeveledUp: this.isLeveledUp,
        bankedTime: this.bankedTime,
        settings: this.settings,
        xpBalance: {
          actions: game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('actions').getTotalPlayerXPGains()
        }
        // rankData,
      };
    }
  }, {
    key: "getSkillsData",
    value: function getSkillsData() {
      var _this6 = this,
        _skillsRs$breakDown;
      var skills = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.listEntitiesByTags(['skill']);
      var skillsRs = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameResources.getResource('skill-points');
      console.log('rsData: ', (0,lodash__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(skillsRs));
      var currentEffects = this.getSkillTreeEffectsUnpacked(this.skillUpgrades);
      var potentialEffects = this.editModeSkills ? this.getSkillTreeEffectsUnpacked(this.editModeSkills) : null;
      return {
        available: skills.map(function (entity) {
          return {
            isUnlocked: entity.isUnlocked,
            id: entity.id,
            name: entity.name,
            position: entity.uiPosition,
            description: entity.description,
            max: game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getEntityMaxLevel(entity.id) || 0,
            level: _this6.editModeSkills ? _this6.editModeSkills[entity.id] || 0 : _this6.skillUpgrades[entity.id] || 0,
            diff: _this6.editModeSkills ? (_this6.editModeSkills[entity.id] || 0) - (_this6.skillUpgrades[entity.id] || 0) : 0,
            affordable: game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getAffordable(entity.id),
            effects: game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getEffects(entity.id, 1, _this6.editModeSkills ? _this6.editModeSkills[entity.id] || 0 : _this6.skillUpgrades[entity.id] || 0),
            currentEffects: game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getEffects(entity.id, 0, _this6.editModeSkills ? _this6.editModeSkills[entity.id] || 0 : _this6.skillUpgrades[entity.id] || 0),
            isLeveled: _this6.leveledId === entity.id,
            isCapped: entity.isCapped,
            icon: entity.icon,
            unlockBySkills: (entity.unlockBySkills || []).map(function (unlock) {
              return _objectSpread(_objectSpread({}, unlock), {}, {
                isMet: unlock.level <= (_this6.editModeSkills ? _this6.editModeSkills[unlock.id] || 0 : _this6.skillUpgrades[unlock.id] || 0),
                relevantLevel: _this6.editModeSkills ? _this6.editModeSkills[unlock.id] || 0 : _this6.skillUpgrades[unlock.id] || 0
              });
            })
          };
        }).reduce(function (acc, skill) {
          skill.isRequirementsMet = !skill.unlockBySkills.length || skill.unlockBySkills.some(function (one) {
            return one.isMet;
          });
          acc[skill.id] = skill;
          return acc;
        }, {}),
        sp: {
          total: this.editModeSkills ? this.getFreeSPLeft() : skillsRs.balance,
          max: skillsRs.income,
          breakDown: {
            income: (_skillsRs$breakDown = skillsRs.breakDown) === null || _skillsRs$breakDown === void 0 ? void 0 : _skillsRs$breakDown.income
          }
        },
        drafts: Object.entries(this.skillDrafts).map(function (_ref16) {
          var _ref17 = _slicedToArray(_ref16, 2),
            id = _ref17[0],
            one = _ref17[1];
          var isAppliable = _this6.canApplySkills(one.skills); // Check if is applicable
          return {
            id: id,
            name: one.name,
            timestamp: one.timestamp,
            isAppliable: isAppliable
          };
        }),
        currentEffects: currentEffects,
        potentialEffects: potentialEffects,
        isEditMode: !!this.editModeSkills,
        isViewMode: this.isViewMode
      };
    }
  }, {
    key: "getActiveEffectsData",
    value: function getActiveEffectsData() {
      var items = game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.listEntitiesByTags(['active_effect']);
      // const presentSpells = items.filter(item => item.isUnlocked);
      // console.log('[debug-error] activeEvents: ', items);

      return {
        list: items.map(function (item) {
          var _item$originalId;
          return _objectSpread(_objectSpread({}, item), {}, {
            originalId: (_item$originalId = item.originalId) !== null && _item$originalId !== void 0 ? _item$originalId : item.copyFromId,
            effects: game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getEffects(item.id, item.level, 0, false, 1, item.modifier.efficiency),
            duration: game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getAttribute(item.id, 'current_duration'),
            durationProg: 1,
            className: game_framework__WEBPACK_IMPORTED_MODULE_1__.gameEntity.getAttribute(item.id, 'className')
          });
        })
      };
    }
  }, {
    key: "sendActiveEffectsData",
    value: function sendActiveEffectsData() {
      var activeEffectsData = this.getActiveEffectsData();
      this.eventHandler.sendData('active-effects', activeEffectsData);
    }
  }]);
}(_shared_game_module__WEBPACK_IMPORTED_MODULE_0__.GameModule);
