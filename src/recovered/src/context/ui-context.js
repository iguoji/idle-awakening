__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppProvider: () => (/* binding */ AppProvider),
/* harmony export */   useAppContext: () => (/* binding */ useAppContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


// Create a context
var AppContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();

// Create a provider component
var AppProvider = function AppProvider(_ref) {
  var children = _ref.children;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('actions'),
    _useState2 = _slicedToArray(_useState, 2),
    openedTab = _useState2[0],
    setOpenedTab = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    activePopup = _useState4[0],
    setActivePopup = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    popupMeta = _useState6[0],
    setPopupMeta = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    onClosePopupCb = _useState8[0],
    setOnClosePopupCb = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerWidth < 1300),
    _useState10 = _slicedToArray(_useState9, 2),
    isMobile = _useState10[0],
    setIsMobile = _useState10[1];
  window.addEventListener('resize', function (e) {
    setIsMobile(window.innerWidth < 1300);
  });
  document.addEventListener('load', function (e) {
    setIsMobile(window.innerWidth < 1300);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setOnClosePopupCb(null);
  }, [activePopup]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppContext.Provider, {
    value: {
      openedTab: openedTab,
      setOpenedTab: setOpenedTab,
      activePopup: activePopup,
      setActivePopup: setActivePopup,
      popupMeta: popupMeta,
      setPopupMeta: setPopupMeta,
      onClosePopupCb: onClosePopupCb,
      setOnClosePopupCb: setOnClosePopupCb,
      isMobile: isMobile
    }
  }, children);
};

// Custom hook to use the AppContext
var useAppContext = function useAppContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AppContext);
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/context/ui-context.js?
