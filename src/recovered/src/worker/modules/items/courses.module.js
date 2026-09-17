__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoursesModule: () => (/* binding */ CoursesModule)
/* harmony export */ });
/* harmony import */ var game_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! game-framework */ "./node_modules/game-framework/index.js");
/* harmony import */ var _shared_game_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/game-module */ "./src/worker/shared/game-module.js");
/* harmony import */ var _shop_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop-db */ "./src/worker/modules/items/shop-db.js");
/* harmony import */ var _inventory_inventory_items_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inventory/inventory-items-db */ "./src/worker/modules/inventory/inventory-items-db.js");
/* harmony import */ var _courses_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./courses-db */ "./src/worker/modules/items/courses-db.js");
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





var CoursesModule = /*#__PURE__*/function (_GameModule) {
  function CoursesModule() {
    var _this;
    _classCallCheck(this, CoursesModule);
    _this = _callSuper(this, CoursesModule);
    _this.courses = {};
    _this.leveledId = null;
    _this.purchaseMultiplier = 1;
    _this.runningCourse = null;
    _this.eventHandler.registerHandler('set-course-autopurchase', function (_ref) {
      var id = _ref.id,
        flag = _ref.flag;
      var entities = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.listEntitiesByTags(['course']).filter(function (one) {
        return one.isUnlocked && !one.isCapped;
      });
      entities.forEach(function (e) {
        if (!id || id === e.id) {
          _this.autoPurchase[e.id] = flag;
        }
      });
      _this.sendItemsData();
    });
    _this.eventHandler.registerHandler('run-course', function (payload) {
      _this.runCourse(payload.id);
    });
    _this.eventHandler.registerHandler('stop-course', function (payload) {
      _this.stopCourse(payload.id);
    });
    _this.eventHandler.registerHandler('query-course-data', function (payload) {
      _this.sendItemsData();
    });
    _this.eventHandler.registerHandler('query-course-details', function (payload) {
      _this.sendItemDetails(payload.id);
    });
    return _this;
  }
  _inherits(CoursesModule, _GameModule);
  return _createClass(CoursesModule, [{
    key: "initialize",
    value: function initialize() {
      (0,_courses_db__WEBPACK_IMPORTED_MODULE_4__.registerCourseItemsStage1)();
    }
  }, {
    key: "getDuration",
    value: function getDuration(id) {
      var _this$courses$id$leve, _this$courses$id;
      var base = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getAttribute(id, 'basicDuration');
      var level = (_this$courses$id$leve = (_this$courses$id = this.courses[id]) === null || _this$courses$id === void 0 ? void 0 : _this$courses$id.level) !== null && _this$courses$id$leve !== void 0 ? _this$courses$id$leve : 0;
      return base * Math.pow(1.25, level) / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('courses_learning_speed');
    }
  }, {
    key: "tick",
    value: function tick(game, delta) {
      this.leveledId = null;
      if (this.runningCourse) {
        var learningEntity = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEntity("learning_".concat(this.runningCourse));
        var eff = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEntityEfficiency(learningEntity.id);
        this.courses[this.runningCourse].progress += delta * eff;
        if (this.courses[learningEntity.attributes.learningEntityId].progress > this.getDuration(this.runningCourse)) {
          this.setItem(this.runningCourse, {
            progress: 0,
            level: this.courses[this.runningCourse].level + 1,
            autoResume: this.courses[this.runningCourse].autoResume
          }, true);
          // console.log('Leveled Running Course: ', this.courses[this.runningCourse]);
          game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.setEntityLevel("learning_".concat(this.runningCourse), this.courses[this.runningCourse].level, true);
          this.leveledId = this.runningCourse;
        }
      }
    }
  }, {
    key: "save",
    value: function save() {
      return {
        courses: this.courses,
        runningCourse: this.runningCourse
      };
    }
  }, {
    key: "load",
    value: function load(saveObject) {
      if (this.runningCourse) {
        this.stopCourse();
      }
      for (var key in this.courses) {
        this.setItem(key, {
          level: 0,
          progress: 0,
          autoResume: false
        }, true);
      }
      this.courses = {};
      if (saveObject !== null && saveObject !== void 0 && saveObject.courses) {
        for (var id in saveObject.courses) {
          this.setItem(id, saveObject.courses[id], true);
        }
      }
      if (saveObject !== null && saveObject !== void 0 && saveObject.runningCourse) {
        this.runCourse(saveObject.runningCourse);
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
    value: function setItem(itemId, course) {
      var bForce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.setEntityLevel(itemId, course.level, bForce);
      this.courses[itemId] = {
        level: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel(itemId),
        progress: course.progress,
        autoResume: course.autoResume
      };
    }
  }, {
    key: "runCourse",
    value: function runCourse(itemId) {
      var course = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEntity(itemId);
      if (!course.learningEntity) return;
      if (this.runningCourse) {
        this.stopCourse(this.runningCourse);
      }
      var learningEntity = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.registerGameEntity("learning_".concat(itemId), _objectSpread({}, course.learningEntity));
      game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.setEntityLevel(learningEntity.id, course.level, true);
      if (!this.courses[itemId]) {
        this.courses[itemId] = {
          level: course.level,
          progress: 0,
          autoResume: false
        };
      }
      this.runningCourse = itemId;
    }
  }, {
    key: "stopCourse",
    value: function stopCourse(itemId) {
      if (!this.runningCourse) return;
      if (itemId && this.runningCourse !== itemId) return;
      var learningEntity = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEntity("learning_".concat(this.runningCourse));
      game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.unsetEntity(learningEntity.id);
      this.runningCourse = null;
    }
  }, {
    key: "regenerateNotifications",
    value: function regenerateNotifications() {
      // NOW - check for actions if they have any new notifications
      var entities = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.listEntitiesByTags(['course']);
      entities.forEach(function (entity) {
        game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('unlock-notifications').registerNewNotification('shop', 'courses', 'all', "course_".concat(entity.id), entity.isUnlocked && !entity.isCapped);
      });
    }
  }, {
    key: "getItemsData",
    value: function getItemsData() {
      var _this2 = this;
      var entities = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.listEntitiesByTags(['course']);
      return {
        available: entities.filter(function (one) {
          return one.isUnlocked && !one.isCapped;
        }).map(function (entity) {
          var _this2$courses$entity, _this2$courses$entity2, _this2$courses$entity3, _this2$courses$entity4, _this2$courses$entity5;
          return {
            id: entity.id,
            name: entity.name,
            description: entity.description,
            max: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEntityMaxLevel(entity.id),
            level: ((_this2$courses$entity = _this2.courses[entity.id]) === null || _this2$courses$entity === void 0 ? void 0 : _this2$courses$entity.level) || 0,
            affordable: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getAffordable(entity.id),
            potentialEffects: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEffects(entity.id, 1),
            isLeveled: _this2.leveledId === entity.id,
            isAutoResume: (_this2$courses$entity2 = (_this2$courses$entity3 = _this2.courses[entity.id]) === null || _this2$courses$entity3 === void 0 ? void 0 : _this2$courses$entity3.autoResume) !== null && _this2$courses$entity2 !== void 0 ? _this2$courses$entity2 : false,
            progress: (_this2$courses$entity4 = _this2.courses[entity.id]) === null || _this2$courses$entity4 === void 0 ? void 0 : _this2$courses$entity4.progress,
            maxProgress: _this2.getDuration(entity.id),
            isRunning: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.entityExists("learning_".concat(entity.id)),
            learningEffects: game_framework__WEBPACK_IMPORTED_MODULE_0__.resourceApi.unpackEffects(entity.learningEntity.resourceModifier || {}, entity.level),
            efficiency: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.entityExists("learning_".concat(entity.id)) ? game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEntityEfficiency("learning_".concat(entity.id)) : 1,
            toNext: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.entityExists("learning_".concat(entity.id)) ? (_this2.getDuration(entity.id) - ((_this2$courses$entity5 = _this2.courses[entity.id]) === null || _this2$courses$entity5 === void 0 ? void 0 : _this2$courses$entity5.progress)) / (game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEntityEfficiency("learning_".concat(entity.id)) + 1.e-8) : 0
          };
        })
      };
    }
  }, {
    key: "sendItemsData",
    value: function sendItemsData() {
      var data = this.getItemsData();
      this.eventHandler.sendData('course-data', data);
    }
  }, {
    key: "getItemDetails",
    value: function getItemDetails(id) {
      var _this$courses$entity$, _this$courses$entity$2, _this$courses$entity$3, _this$courses$entity$4;
      if (!id) return null;
      var entity = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEntity(id);
      var entityData = {
        id: entity.id,
        name: entity.name,
        description: entity.description,
        max: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEntityMaxLevel(entity.id),
        level: ((_this$courses$entity$ = this.courses[entity.id]) === null || _this$courses$entity$ === void 0 ? void 0 : _this$courses$entity$.level) || 0,
        affordable: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getAffordable(entity.id),
        potentialEffects: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEffects(entity.id, 1),
        currentEffects: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEffects(entity.id),
        tags: entity.tags,
        isAutoResume: (_this$courses$entity$2 = (_this$courses$entity$3 = this.courses[entity.id]) === null || _this$courses$entity$3 === void 0 ? void 0 : _this$courses$entity$3.autoResume) !== null && _this$courses$entity$2 !== void 0 ? _this$courses$entity$2 : false,
        progress: (_this$courses$entity$4 = this.courses[entity.id]) === null || _this$courses$entity$4 === void 0 ? void 0 : _this$courses$entity$4.progress,
        maxProgress: this.getDuration(entity.id),
        isRunning: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.entityExists("learning_".concat(entity.id)),
        learningEffects: game_framework__WEBPACK_IMPORTED_MODULE_0__.resourceApi.unpackEffects(entity.learningEntity.resourceModifier || {}, entity.level),
        entityEfficiency: game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.entityExists("learning_".concat(entity.id)) ? game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEntityEfficiency("learning_".concat(entity.id)) : 1
      };
      if (entityData.entityEfficiency < 1) {
        var _gameEntity$getEntity;
        entityData.missingResource = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource((_gameEntity$getEntity = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEntity("learning_".concat(entity.id))) === null || _gameEntity$getEntity === void 0 || (_gameEntity$getEntity = _gameEntity$getEntity.modifier) === null || _gameEntity$getEntity === void 0 ? void 0 : _gameEntity$getEntity.bottleNeck);
      }
      return entityData;
    }
  }, {
    key: "sendItemDetails",
    value: function sendItemDetails(id) {
      var data = this.getItemDetails(id);
      this.eventHandler.sendData('item-details', data);
    }
  }]);
}(_shared_game_module__WEBPACK_IMPORTED_MODULE_1__.GameModule);

//# sourceURL=webpack://idlemancery-v2-reworked/./src/worker/modules/items/courses.module.js?
