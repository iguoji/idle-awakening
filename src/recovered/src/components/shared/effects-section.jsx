__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EffectsSection: () => (/* binding */ EffectsSection)
/* harmony export */ });
/* harmony import */ var _resource_effects_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource-effects.jsx */ "./src/components/shared/resource-effects.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tippy-wrapper.jsx */ "./src/components/shared/tippy-wrapper.jsx");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var EffectsSection = function EffectsSection(_ref) {
  var effects = _ref.effects,
    _ref$maxDisplay = _ref.maxDisplay,
    maxDisplay = _ref$maxDisplay === void 0 ? 3 : _ref$maxDisplay,
    _ref$isShowBalance = _ref.isShowBalance,
    isShowBalance = _ref$isShowBalance === void 0 ? false : _ref$isShowBalance;
  var fullList = Object.entries(effects || {}).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      key = _ref3[0],
      value = _ref3[1];
    return _objectSpread({
      key: key
    }, value);
  });
  var hidden = [];
  if (fullList.length > maxDisplay) {
    hidden = fullList.splice(maxDisplay);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: 'effects-section'
  }, fullList.map(function (aff) {
    var _aff$key, _aff$id;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_resource_effects_jsx__WEBPACK_IMPORTED_MODULE_0__.ResourceEffects, {
      key: (_aff$key = aff.key) !== null && _aff$key !== void 0 ? _aff$key : (_aff$id = aff.id) !== null && _aff$id !== void 0 ? _aff$id : aff.name,
      effect: aff,
      isShowBalance: isShowBalance
    });
  }), hidden.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_2__.TippyWrapper, {
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: 'hint-popup'
    }, hidden.map(function (aff) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_resource_effects_jsx__WEBPACK_IMPORTED_MODULE_0__.ResourceEffects, {
        effect: aff,
        isShowBalance: isShowBalance
      });
    }))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: 'show-more'
  }, "Show ", hidden.length, " more effects")) : null);
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/shared/effects-section.jsx?
