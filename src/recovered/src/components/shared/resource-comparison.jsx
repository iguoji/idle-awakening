__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResourceComparison: () => (/* binding */ ResourceComparison)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _general_utils_resource_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../general/utils/resource-utils */ "./src/general/utils/resource-utils.js");
/* harmony import */ var _raw_resource_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./raw-resource.jsx */ "./src/components/shared/raw-resource.jsx");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }



var ResourceComparison = function ResourceComparison(_ref) {
  var effects1 = _ref.effects1,
    effects2 = _ref.effects2;
  var compareKeysUnique = _toConsumableArray(new Set([].concat(_toConsumableArray(Object.keys(effects1)), _toConsumableArray(Object.keys(effects2)))));
  var table = compareKeysUnique.map(function (key) {
    var prevValue = effects1[key];
    var nextValue = effects2[key];
    if (!prevValue) {
      prevValue = _objectSpread(_objectSpread({}, nextValue), {}, {
        value: nextValue.scope === 'multiplier' || nextValue.scope === 'capMult' ? 1 : 0
      });
    }
    if (!nextValue) {
      nextValue = _objectSpread(_objectSpread({}, prevValue), {}, {
        value: prevValue.scope === 'multiplier' || prevValue.scope === 'capMult' ? 1 : 0
      });
    }
    var prevMapped = (0,_general_utils_resource_utils__WEBPACK_IMPORTED_MODULE_1__.mapEffect)(prevValue);
    var nextMapped = (0,_general_utils_resource_utils__WEBPACK_IMPORTED_MODULE_1__.mapEffect)(nextValue);
    return {
      key: key,
      id: prevMapped.id || nextMapped.id,
      type: prevMapped.type || nextMapped.type,
      title: prevMapped.title || nextMapped.title,
      prevValue: prevMapped.value,
      nextValue: nextMapped.value,
      isImprovement: prevMapped.direction * prevValue.value < nextMapped.direction * nextValue.value,
      isWorse: prevMapped.direction * prevValue.value > nextMapped.direction * nextValue.value
    };
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'effects-table comparison'
  }, table.map(function (_ref2) {
    var id = _ref2.id,
      title = _ref2.title,
      type = _ref2.type,
      prevValue = _ref2.prevValue,
      nextValue = _ref2.nextValue,
      isImprovement = _ref2.isImprovement,
      isWorse = _ref2.isWorse,
      key = _ref2.key;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: key,
      className: 'effect-line'
    }, type === 'resources' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_raw_resource_jsx__WEBPACK_IMPORTED_MODULE_2__.RawResource, {
      className: 'title',
      id: id,
      name: title
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: 'title'
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: 'prevVal'
    }, prevValue), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: 'arrow'
    }, "\u2192"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "nextVal".concat(isImprovement ? ' green' : '').concat(isWorse ? ' red' : '')
    }, nextValue));
  }));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/shared/resource-comparison.jsx?
