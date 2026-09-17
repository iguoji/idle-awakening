__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Balances: () => (/* binding */ Balances)
/* harmony export */ });
/* harmony import */ var _general_utils_strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../general/utils/strings */ "./src/general/utils/strings.js");
/* harmony import */ var _shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/tippy-wrapper.jsx */ "./src/components/shared/tippy-wrapper.jsx");
/* harmony import */ var _layout_sidebar_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/sidebar.jsx */ "./src/components/layout/sidebar.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




var Balances = function Balances(_ref) {
  var resourceAmount = _ref.resourceAmount,
    resourceBalance = _ref.resourceBalance,
    breakDown = _ref.breakDown;
  var content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: 'mid small-text'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", null, "You own: ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_0__.formatValue)(resourceAmount), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    className: "balance ".concat(resourceBalance > 1.e-8 ? 'green' : '', " ").concat(resourceBalance < -1.e-8 ? 'yellow' : '')
  }, "(", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_0__.formatValue)(resourceBalance, 2, true), ")")));
  if (!breakDown || !Object.values(breakDown).length) return content;
  if (Math.abs(resourceBalance) < 1.e-8) return content;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_1__.TippyWrapper, {
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      className: 'hint-popup'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_layout_sidebar_jsx__WEBPACK_IMPORTED_MODULE_2__.BreakDown, {
      breakDown: breakDown
    }))
  }, content);
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/workshop/shared.jsx?
