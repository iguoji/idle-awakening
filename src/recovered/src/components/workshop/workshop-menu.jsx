__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkshopMenu: () => (/* binding */ WorkshopMenu)
/* harmony export */ });
/* harmony import */ var _shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/new-notification-wrap.jsx */ "./src/components/shared/new-notification-wrap.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../general/client */ "./src/general/client.js");
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/worker-context */ "./src/context/worker-context.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var WorkshopMenu = function WorkshopMenu(_ref) {
  var _newUnlocks$workshop, _newUnlocks$workshop2, _newUnlocks$workshop3;
  var selectedTab = _ref.selectedTab,
    setSelectedTab = _ref.setSelectedTab;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_3__["default"]);
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    newUnlocks = _useState2[0],
    setNewUnlocks = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    unlocks = _useState4[0],
    setUnlocksData = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    sendData('query-unlocks', {
      prefix: 'world'
    });
    sendData('query-new-unlocks-notifications', {
      suffix: 'workshop',
      scope: 'workshop'
    });
    var interval = setInterval(function () {
      sendData('query-new-unlocks-notifications', {
        suffix: 'workshop',
        scope: 'workshop'
      });
    }, 1000);
    return function () {
      clearInterval(interval);
    };
  }, []);
  onMessage('unlocks-world', function (unlocks) {
    setUnlocksData(unlocks);
  });
  onMessage('new-unlocks-notifications-workshop', function (payload) {
    setNewUnlocks(payload);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: 'menu-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", {
    className: 'menu'
  }, unlocks.crafting ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "".concat(selectedTab === 'crafting' ? 'active' : ''),
    onClick: function onClick() {
      setSelectedTab('crafting');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_0__.NewNotificationWrap, {
    isNew: (_newUnlocks$workshop = newUnlocks.workshop) === null || _newUnlocks$workshop === void 0 || (_newUnlocks$workshop = _newUnlocks$workshop.items) === null || _newUnlocks$workshop === void 0 || (_newUnlocks$workshop = _newUnlocks$workshop.crafting) === null || _newUnlocks$workshop === void 0 ? void 0 : _newUnlocks$workshop.hasNew
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "Crafting"))) : null, unlocks.alchemy ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "".concat(selectedTab === 'alchemy' ? 'active' : ''),
    onClick: function onClick() {
      setSelectedTab('alchemy');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_0__.NewNotificationWrap, {
    isNew: (_newUnlocks$workshop2 = newUnlocks.workshop) === null || _newUnlocks$workshop2 === void 0 || (_newUnlocks$workshop2 = _newUnlocks$workshop2.items) === null || _newUnlocks$workshop2 === void 0 || (_newUnlocks$workshop2 = _newUnlocks$workshop2.alchemy) === null || _newUnlocks$workshop2 === void 0 ? void 0 : _newUnlocks$workshop2.hasNew
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "Alchemy"))) : null, unlocks.plantation ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "".concat(selectedTab === 'plantation' ? 'active' : ''),
    onClick: function onClick() {
      setSelectedTab('plantation');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_0__.NewNotificationWrap, {
    isNew: (_newUnlocks$workshop3 = newUnlocks.workshop) === null || _newUnlocks$workshop3 === void 0 || (_newUnlocks$workshop3 = _newUnlocks$workshop3.items) === null || _newUnlocks$workshop3 === void 0 || (_newUnlocks$workshop3 = _newUnlocks$workshop3.plantations) === null || _newUnlocks$workshop3 === void 0 ? void 0 : _newUnlocks$workshop3.hasNew
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "Plantations"))) : null));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/workshop/workshop-menu.jsx?
