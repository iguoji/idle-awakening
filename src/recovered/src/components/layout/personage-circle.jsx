__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonageCircle: () => (/* binding */ PersonageCircle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../general/client */ "./src/general/client.js");
/* harmony import */ var _context_ui_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/ui-context */ "./src/context/ui-context.js");
/* harmony import */ var _shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/tippy-wrapper.jsx */ "./src/components/shared/tippy-wrapper.jsx");
/* harmony import */ var _progress_bar_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./progress-bar.jsx */ "./src/components/layout/progress-bar.jsx");
/* harmony import */ var _general_utils_strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../general/utils/strings */ "./src/general/utils/strings.js");
var _excluded = ["settings"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







var PersonageCircle = function PersonageCircle() {
  var _mageData$xpBalance$a;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useAppContext = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_3__.useAppContext)(),
    setActivePopup = _useAppContext.setActivePopup;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    mageData = _useState2[0],
    setMageData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    settings = _useState4[0],
    setSettings = _useState4[1];
  var elementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sendData('query-mage-data', {
      prefix: 'xpbar'
    });
    var interval = setInterval(function () {
      sendData('query-mage-data', {
        prefix: 'xpbar'
      });
    }, 200);
    return function () {
      clearInterval(interval);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.notation = settings.notation;
    console.log('Settings: ', settings);
  }, [settings === null || settings === void 0 ? void 0 : settings.notation]);
  onMessage('mage-data-xpbar', function (data) {
    var settings = data.settings,
      mage = _objectWithoutProperties(data, _excluded);
    setMageData(mage);
    setSettings(settings);
  });
  return mageData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'mage-wrap flex-container',
    ref: elementRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_4__.TippyWrapper, {
    placement: "top",
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'hint-popup'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Level: ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatInt)(mageData.mageLevel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "XP: ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatInt)(mageData.mageXP), " / ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatInt)(mageData.mageMaxXP)), mageData !== null && mageData !== void 0 && mageData.xpBalance ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'balances block'
    }, (_mageData$xpBalance$a = mageData.xpBalance.actions) === null || _mageData$xpBalance$a === void 0 ? void 0 : _mageData$xpBalance$a.map(function (balance) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: 'small-hint'
      }, "Running action - ", balance.name, ": ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatValue)(balance.dxp));
    })) : null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'outer-xp-circle'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'inner-xp-circle',
    style: {
      '--angle': "".concat(mageData.mageXP / (mageData.mageMaxXP + 1.e-8) * 360)
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'holder-circle'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'level',
    id: 'level'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "skills-button ".concat(mageData.skillPoints > 0 ? 'highlight' : ''),
    onClick: function onClick() {
      return setActivePopup('skills');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: 'icons/ui/sp.png'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, mageData.skillPoints))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'level-circle'
  }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatInt)(mageData.mageLevel))))) : null;
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/layout/personage-circle.jsx?
