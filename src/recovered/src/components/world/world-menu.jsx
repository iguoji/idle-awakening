__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorldMenu: () => (/* binding */ WorldMenu)
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




var WorldMenu = function WorldMenu() {
  var _newUnlocks$world;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_3__["default"]);
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('map'),
    _useState2 = _slicedToArray(_useState, 2),
    selectedTab = _useState2[0],
    setSelectedTab = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    newUnlocks = _useState4[0],
    setNewUnlocks = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    unlocks = _useState6[0],
    setUnlocksData = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    sendData('query-unlocks', {
      prefix: 'world'
    });
    var interval = setInterval(function () {
      sendData('query-new-unlocks-notifications', {
        suffix: 'world',
        scope: 'map'
      });
    }, 1000);
    return function () {
      clearInterval(interval);
    };
  }, []);
  onMessage('unlocks-world', function (unlocks) {
    setUnlocksData(unlocks);
  });
  onMessage('new-unlocks-notifications-world', function (payload) {
    // console.log('Received unlocks: ', payload);
    setNewUnlocks(payload);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", {
    className: 'menu'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "".concat(selectedTab === 'map' ? 'active' : ''),
    onClick: function onClick() {
      setSelectedTab('map');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_0__.NewNotificationWrap, {
    isNew: newUnlocks === null || newUnlocks === void 0 || (_newUnlocks$world = newUnlocks['world']) === null || _newUnlocks$world === void 0 || (_newUnlocks$world = _newUnlocks$world.items) === null || _newUnlocks$world === void 0 || (_newUnlocks$world = _newUnlocks$world['map']) === null || _newUnlocks$world === void 0 ? void 0 : _newUnlocks$world.hasNew
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "Map"))));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/world/world-menu.jsx?
