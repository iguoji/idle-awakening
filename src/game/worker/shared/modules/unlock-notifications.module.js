import * as _game_module__WEBPACK_IMPORTED_MODULE_0__ from '../game-module.js';
import * as game_framework__WEBPACK_IMPORTED_MODULE_1__ from '../../../framework/index.js';

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


var UnlockNotificationsModule = /*#__PURE__*/function (_GameModule) {
  function UnlockNotificationsModule() {
    var _this;
    _classCallCheck(this, UnlockNotificationsModule);
    _this = _callSuper(this, UnlockNotificationsModule);
    _this.notifications = {};
    _this.byId = {};
    _this.viewedById = {};
    _this.eventHandler.registerHandler('query-new-unlocks-notifications', function (payload) {
      _this.sendNewUnlocks(payload);
    });
    _this.eventHandler.registerHandler('set-new-notification-viewed', function (payload) {
      // Якщо додається четвертий рівень, він передається через payload.subcategory
      _this.setViewed(payload.scope, payload.category, payload.subcategory, payload.id);
    });
    _this.eventHandler.registerHandler('set-all-new-notification-viewed', function (payload) {
      _this.setAllViewed();
    });
    _this.eventHandler.registerHandler('set-new-notification-viewed-by-id', function (payload) {
      _this.setViewedById(payload.id);
    });
    return _this;
  }

  // Порожні методи, як у початковій версії
  _inherits(UnlockNotificationsModule, _GameModule);
  return _createClass(UnlockNotificationsModule, [{
    key: "initialize",
    value: function initialize() {}
  }, {
    key: "tick",
    value: function tick() {}

    /**
     * Метод, який реєструє шлях до повідомлення.
     * Якщо передано subcategory – використовується 4 рівень, інакше – залишається 3 рівня.
     */
  }, {
    key: "registerPath",
    value: function registerPath(scope, category, subcategory, id) {
      // Якщо немає запису для id, створюємо базову інформацію
      if (!this.viewedById[id]) {
        this.viewedById[id] = {
          isUnlocked: false,
          isViewed: false
        };
      }
      // Рівень scope
      if (!this.notifications[scope]) {
        this.notifications[scope] = {};
      }
      // Рівень category
      if (!this.notifications[scope][category]) {
        this.notifications[scope][category] = {};
      }

      // Якщо передано subcategory – використовуємо четвертий рівень
      var target;
      if (subcategory !== undefined && subcategory !== null) {
        if (!this.notifications[scope][category][subcategory]) {
          this.notifications[scope][category][subcategory] = {};
        }
        target = this.notifications[scope][category][subcategory];
      } else {
        target = this.notifications[scope][category];
      }

      // Регіструємо повідомлення для даного id, якщо ще не було
      if (!target[id]) {
        target[id] = {
          isUnlocked: this.viewedById[id].isUnlocked,
          isViewed: this.viewedById[id].isViewed
        };
      }

      // Зберігаємо шлях до цього id для синхронізації змін
      if (!this.byId[id]) {
        this.byId[id] = [];
      }
      if (!this.byId[id].find(function (one) {
        return one.scope === scope && one.category === category && one.subcategory === subcategory;
      })) {
        this.byId[id].push({
          scope: scope,
          category: category,
          subcategory: subcategory
        });
      }
    }

    /**
     * Синхронізує прапорці isViewed/isUnlocked у всіх шляхах (byId) для повідомлення з id.
     */
  }, {
    key: "syncNotificationCats",
    value: function syncNotificationCats(id) {
      var _this2 = this;
      if (!this.byId[id]) return;
      this.byId[id].forEach(function (_ref) {
        var scope = _ref.scope,
          category = _ref.category,
          subcategory = _ref.subcategory;
        var target = subcategory !== undefined && subcategory !== null ? _this2.notifications[scope][category][subcategory] : _this2.notifications[scope][category];
        if (target && target[id]) {
          target[id].isViewed = _this2.viewedById[id].isViewed;
          target[id].isUnlocked = _this2.viewedById[id].isUnlocked;
        }
      });
    }

    /**
     * Реєструє нове повідомлення.
     * Якщо передано subcategory – використовується 4 рівень.
     */
  }, {
    key: "registerNewNotification",
    value: function registerNewNotification(scope, category, subcategory, id) {
      var isUnlocked = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      this.registerPath(scope, category, subcategory, id);
      this.viewedById[id].isUnlocked = isUnlocked;
      this.syncNotificationCats(id);
    }

    /**
     * Позначає повідомлення як переглянуте.
     * Якщо передано subcategory – використовується 4 рівень.
     */
  }, {
    key: "setViewed",
    value: function setViewed(scope, category, subcategory, id) {
      var isViewed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
      console.log('Setting viewed: ', scope, category, subcategory, id);
      this.registerPath(scope, category, subcategory, id);
      this.viewedById[id].isViewed = isViewed;
      this.syncNotificationCats(id);
    }

    /**
     * Позначає повідомлення (за id) як переглянуте.
     */
  }, {
    key: "setViewedById",
    value: function setViewedById(id) {
      var isViewed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (!this.byId[id]) {
        return;
      }
      this.viewedById[id].isViewed = isViewed;
      this.syncNotificationCats(id);
    }

    /**
     * Позначає всі повідомлення як переглянуті, якщо вони розблоковані.
     */
  }, {
    key: "setAllViewed",
    value: function setAllViewed() {
      for (var id in this.byId) {
        if (this.viewedById[id].isUnlocked) {
          this.setViewedById(id, true);
        }
      }
    }

    /**
     * Завантаження збережених даних.
     * Після завантаження відбувається генерація повідомлень.
     */
  }, {
    key: "load",
    value: function load(saveObj) {
      this.viewedById = (saveObj === null || saveObj === void 0 ? void 0 : saveObj.viewedById) || {};
      this.generateNotifications();
    }

    /**
     * Зберігання даних.
     */
  }, {
    key: "save",
    value: function save() {
      return {
        viewedById: this.viewedById
      };
    }

    /**
     * Метод для генерації повідомлень.
     * Він викликає методи regenerateNotifications у різних модулях.
     */
  }, {
    key: "generateNotifications",
    value: function generateNotifications() {
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('actions').regenerateNotifications();
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('shop').regenerateNotifications();
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('courses').regenerateNotifications();
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('inventory').regenerateNotifications();
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('property').regenerateNotifications();
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('crafting').regenerateNotifications();
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('plantations').regenerateNotifications();
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('magic').regenerateNotifications();
      game_framework__WEBPACK_IMPORTED_MODULE_1__.gameCore.getModule('guilds').regenerateNotifications();
    }

    /**
     * Повертає всі нові повідомлення для заданої категорії.
     * Якщо передано subcategory – фільтрує на 4-му рівні.
     */
  }, {
    key: "fetchCategoryNew",
    value: function fetchCategoryNew(scope, category) {
      var subcategory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var results = {};
      var target;
      if (subcategory !== undefined && subcategory !== null) {
        if (this.notifications[scope] && this.notifications[scope][category] && this.notifications[scope][category][subcategory]) {
          target = this.notifications[scope][category][subcategory];
        }
      } else {
        if (this.notifications[scope] && this.notifications[scope][category]) {
          target = this.notifications[scope][category];
        }
      }
      if (target) {
        for (var key in target) {
          if (target[key].isUnlocked && !target[key].isViewed) {
            results[key] = true;
          }
        }
      }
      return results;
    }

    /**
     * Перевіряє, чи є нові повідомлення.
     * Аргументи scope, category, subcategory та id є необов'язковими, щоб фільтрувати результати.
     */
  }, {
    key: "hasNewNotifications",
    value: function hasNewNotifications() {
      var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var category = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var subcategory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var result = {};
      for (var scopeId in this.notifications) {
        if (scope && scopeId !== scope) {
          continue;
        }
        if (!result[scopeId]) {
          result[scopeId] = {
            items: {},
            hasNew: false
          };
        }
        for (var categoryId in this.notifications[scopeId]) {
          if (category && categoryId !== category) {
            continue;
          }
          if (!result[scopeId].items[categoryId]) {
            result[scopeId].items[categoryId] = {
              items: {},
              hasNew: false
            };
          }

          // Перевіряємо, чи є в цій категорії підкатегорії
          var categoryData = this.notifications[scopeId][categoryId];
          if (_typeof(categoryData) === 'object' && !Array.isArray(categoryData)) {
            for (var subcategoryId in categoryData) {
              if (subcategory && subcategoryId !== subcategory) {
                continue;
              }
              if (!result[scopeId].items[categoryId].items[subcategoryId]) {
                result[scopeId].items[categoryId].items[subcategoryId] = {
                  items: {},
                  hasNew: false
                };
              }
              var subcategoryData = categoryData[subcategoryId];
              for (var itemId in subcategoryData) {
                if (id && itemId !== id) {
                  continue;
                }
                var hasNew = subcategoryData[itemId].isUnlocked && !subcategoryData[itemId].isViewed;
                if (hasNew) {
                  result[scopeId].items[categoryId].items[subcategoryId].items[itemId] = {
                    hasNew: true
                  };
                  result[scopeId].items[categoryId].items[subcategoryId].hasNew = true;
                  result[scopeId].items[categoryId].hasNew = true;
                  result[scopeId].hasNew = true;
                }
              }
            }
          } else {
            // Якщо підкатегорій немає, працюємо на рівні категорії
            for (var _itemId in categoryData) {
              if (id && _itemId !== id) {
                continue;
              }
              var _hasNew = categoryData[_itemId].isUnlocked && !categoryData[_itemId].isViewed;
              if (_hasNew) {
                result[scopeId].items[categoryId].items[_itemId] = {
                  hasNew: true
                };
                result[scopeId].items[categoryId].hasNew = true;
                result[scopeId].hasNew = true;
              }
            }
          }
        }
      }
      return result;
    }

    /**
     * Відправляє нові повідомлення за допомогою eventHandler.
     */
  }, {
    key: "sendNewUnlocks",
    value: function sendNewUnlocks(payload) {
      var result = this.hasNewNotifications(payload.scope, payload.category, payload.subcategory, payload.id);
      // console.log('NOTS: ', this.notifications, payload, result);
      var label = 'new-unlocks-notifications';
      if (payload.suffix) {
        label = "".concat(label, "-").concat(payload.suffix);
      }
      this.eventHandler.sendData(label, result);
    }
  }]);
}(_game_module__WEBPACK_IMPORTED_MODULE_0__.GameModule);

export { UnlockNotificationsModule };
