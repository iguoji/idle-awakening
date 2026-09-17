__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainMenu: () => (/* binding */ MainMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../general/client */ "./src/general/client.js");
/* harmony import */ var _context_ui_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/ui-context */ "./src/context/ui-context.js");
/* harmony import */ var _shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/new-notification-wrap.jsx */ "./src/components/shared/new-notification-wrap.jsx");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





var MainMenu = function MainMenu() {
  var _newUnlocks$actions, _newUnlocks$shop, _newUnlocks$inventory, _newUnlocks$property, _newUnlocks$world, _newUnlocks$workshop, _newUnlocks$social, _newUnlocks$spellbook;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useAppContext = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_3__.useAppContext)(),
    openedTab = _useAppContext.openedTab,
    setOpenedTab = _useAppContext.setOpenedTab;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    unlocks = _useState2[0],
    setUnlocksData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    newUnlocks = _useState4[0],
    setNewUnlocks = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    hotkeys = _useState6[0],
    setHotkeys = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sendData('query-unlocks', {
      prefix: 'main-menu'
    });
    sendData('query-new-unlocks-notifications', {
      suffix: 'main-menu',
      depth: 0
    });
    sendData('query-all-hotkeys', {
      suffix: 'all',
      depth: 0
    });
    var interval = setInterval(function () {
      sendData('query-unlocks', {
        prefix: 'main-menu'
      });
      sendData('query-new-unlocks-notifications', {
        suffix: 'main-menu',
        depth: 0
      });
    }, 200);
    return function () {
      clearInterval(interval);
    };
  }, []);
  var triggerHotkey = function triggerHotkey(combination) {
    var hotkey = Object.values(hotkeys || {}).find(function (h) {
      return h.combination === combination;
    });
    if (!hotkey) return;
    if (hotkey.action === 'selectTab') {
      openTab(hotkey.param);
    }
  };
  var openTab = function openTab(id) {
    setOpenedTab(id);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handleKeyDown = function handleKeyDown(event) {
      var keys = [];
      if (event.ctrlKey) keys.push("Ctrl");
      if (event.shiftKey) keys.push("Shift");
      if (event.altKey) keys.push("Alt");
      keys.push(event.key.toUpperCase());
      var combination = keys.join("+");
      triggerHotkey(combination); // Call triggerHotkey when a combination is pressed
    };
    window.addEventListener("keydown", handleKeyDown);
    return function () {
      return window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hotkeys]);
  onMessage('all-hotkeys-all', function (payload) {
    console.log('Received AllHotkeys: ', payload);
    setHotkeys(payload);
  });
  onMessage('unlocks-main-menu', setUnlocksData);
  onMessage('new-unlocks-notifications-main-menu', setNewUnlocks);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'left-most'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: 'menu bigger'
  }, unlocks.actions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: openedTab === 'actions' ? 'active' : '',
    onClick: function onClick() {
      return setOpenedTab('actions');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_4__.NewNotificationWrap, {
    isNew: (_newUnlocks$actions = newUnlocks.actions) === null || _newUnlocks$actions === void 0 ? void 0 : _newUnlocks$actions.hasNew
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Actions"))), unlocks.shop ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    id: 'shop',
    className: openedTab === 'shop' ? 'active' : '',
    onClick: function onClick() {
      return setOpenedTab('shop');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_4__.NewNotificationWrap, {
    isNew: (_newUnlocks$shop = newUnlocks.shop) === null || _newUnlocks$shop === void 0 ? void 0 : _newUnlocks$shop.hasNew
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Shop"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    id: 'shop',
    className: 'locked'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Locked (Reach 2 coins)")), unlocks.inventory && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: openedTab === 'inventory' ? 'active' : '',
    onClick: function onClick() {
      return setOpenedTab('inventory');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_4__.NewNotificationWrap, {
    isNew: (_newUnlocks$inventory = newUnlocks.inventory) === null || _newUnlocks$inventory === void 0 ? void 0 : _newUnlocks$inventory.hasNew
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Inventory"))), unlocks.property && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: openedTab === 'property' ? 'active' : '',
    onClick: function onClick() {
      return setOpenedTab('property');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_4__.NewNotificationWrap, {
    isNew: (_newUnlocks$property = newUnlocks.property) === null || _newUnlocks$property === void 0 ? void 0 : _newUnlocks$property.hasNew
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Property"))), unlocks.world && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: openedTab === 'world' ? 'active' : '',
    onClick: function onClick() {
      return setOpenedTab('world');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_4__.NewNotificationWrap, {
    isNew: (_newUnlocks$world = newUnlocks.world) === null || _newUnlocks$world === void 0 ? void 0 : _newUnlocks$world.hasNew
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "World"))), unlocks.workshop && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: openedTab === 'workshop' ? 'active' : '',
    onClick: function onClick() {
      return setOpenedTab('workshop');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_4__.NewNotificationWrap, {
    isNew: (_newUnlocks$workshop = newUnlocks.workshop) === null || _newUnlocks$workshop === void 0 ? void 0 : _newUnlocks$workshop.hasNew
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Workshop"))), unlocks.social && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: openedTab === 'social' ? 'active' : '',
    onClick: function onClick() {
      return setOpenedTab('social');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_4__.NewNotificationWrap, {
    isNew: (_newUnlocks$social = newUnlocks.social) === null || _newUnlocks$social === void 0 ? void 0 : _newUnlocks$social.hasNew
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Social"))), unlocks.spellbook && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: openedTab === 'spellbook' ? 'active' : '',
    onClick: function onClick() {
      return setOpenedTab('spellbook');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_4__.NewNotificationWrap, {
    isNew: (_newUnlocks$spellbook = newUnlocks.spellbook) === null || _newUnlocks$spellbook === void 0 ? void 0 : _newUnlocks$spellbook.hasNew
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Spellbook")))));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/layout/main-menu.jsx?
