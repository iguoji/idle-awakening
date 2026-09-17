__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BankedTimeWrap: () => (/* binding */ BankedTimeWrap)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/tippy-wrapper.jsx */ "./src/components/shared/tippy-wrapper.jsx");
/* harmony import */ var _general_utils_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../general/utils/strings */ "./src/general/utils/strings.js");
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../general/client */ "./src/general/client.js");
/* harmony import */ var _context_ui_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/ui-context */ "./src/context/ui-context.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }






var BankedTimeWrap = function BankedTimeWrap() {
  var _mageData$bankedTime, _mageData$bankedTime2, _mageData$bankedTime3, _mageData$bankedTime4, _mageData$bankedTime5;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_3__["default"]);
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_4__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useAppContext = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_5__.useAppContext)(),
    setActivePopup = _useAppContext.setActivePopup;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    mageData = _useState2[0],
    setMageData = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sendData('query-mage-data', {
      prefix: 'banked'
    });
    var interval = setInterval(function () {
      sendData('query-mage-data', {
        prefix: 'banked'
      });
    }, 200);
    return function () {
      clearInterval(interval);
    };
  }, []);
  var toggleSpeedUp = function toggleSpeedUp() {
    sendData('toggle-speedup', {});
  };
  onMessage('mage-data-banked', function (data) {
    setMageData(data);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'banked-time-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'time-spent'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Offline Time:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_1__.TippyWrapper, {
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'hint-popup'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "You were offline ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_2__.secondsToString)((((_mageData$bankedTime = mageData.bankedTime) === null || _mageData$bankedTime === void 0 ? void 0 : _mageData$bankedTime.current) || 0) / 1000)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Speed up bonus capped at ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_2__.secondsToString)((((_mageData$bankedTime2 = mageData.bankedTime) === null || _mageData$bankedTime2 === void 0 ? void 0 : _mageData$bankedTime2.max) || 0) / 1000)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "You can use this time to speed up your game by factor of 4"))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'banked-time footer-add-info'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: 'ui-icon',
    src: "icons/interface/time.png"
  }), (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_2__.secondsToString)((((_mageData$bankedTime3 = mageData.bankedTime) === null || _mageData$bankedTime3 === void 0 ? void 0 : _mageData$bankedTime3.current) || 0) / 1000), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "banked-toggle ".concat(((_mageData$bankedTime4 = mageData.bankedTime) === null || _mageData$bankedTime4 === void 0 ? void 0 : _mageData$bankedTime4.speedUpFactor) > 1 ? 'activated' : '', " ").concat(((_mageData$bankedTime5 = mageData.bankedTime) === null || _mageData$bankedTime5 === void 0 ? void 0 : _mageData$bankedTime5.current) <= 0 ? 'disabled' : ''),
    onClick: toggleSpeedUp
  }, "X", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_2__.formatInt)(4)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: 'menu small'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_1__.TippyWrapper, {
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'hint-popup'
    }, "View unlocks")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: 'goals',
    className: 'icon-content edit-icon interface-icon',
    onClick: function onClick() {
      return setActivePopup('unlocks');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "icons/interface/icon_unlocks.png"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_1__.TippyWrapper, {
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'hint-popup'
    }, "View statistics")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: 'statistics',
    className: 'icon-content edit-icon interface-icon',
    onClick: function onClick() {
      return setActivePopup('statistics');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "icons/interface/icon_statistics.png"
  }))))));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/layout/banked-time-wrap.jsx?
