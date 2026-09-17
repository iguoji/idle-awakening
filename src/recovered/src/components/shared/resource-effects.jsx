__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResourceEffects: () => (/* binding */ ResourceEffects)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _general_utils_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../general/utils/strings */ "./src/general/utils/strings.js");
/* harmony import */ var _general_utils_resource_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../general/utils/resource-utils */ "./src/general/utils/resource-utils.js");
/* harmony import */ var _raw_resource_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./raw-resource.jsx */ "./src/components/shared/raw-resource.jsx");




var ResourceEffects = function ResourceEffects(_ref) {
  var effect = _ref.effect,
    isShowBalance = _ref.isShowBalance;
  var _mapEffect = (0,_general_utils_resource_utils__WEBPACK_IMPORTED_MODULE_2__.mapEffect)(effect),
    title = _mapEffect.title,
    value = _mapEffect.value,
    id = _mapEffect.id,
    type = _mapEffect.type,
    balance = _mapEffect.balance;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'effect-line'
  }, type === 'resources' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_raw_resource_jsx__WEBPACK_IMPORTED_MODULE_3__.RawResource, {
    name: title,
    id: id,
    className: 'fixed-width-sidebar'
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'title'
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'value'
  }, value), isShowBalance ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'secondary-value'
  }, "(", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_1__.formatValue)(balance), ")") : null);
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/shared/resource-effects.jsx?
