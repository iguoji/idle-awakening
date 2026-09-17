__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tippy-wrapper.jsx */ "./src/components/shared/tippy-wrapper.jsx");
/* harmony import */ var _layout_sidebar_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../layout/sidebar.jsx */ "./src/components/layout/sidebar.jsx");
/* harmony import */ var _general_utils_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../general/utils/strings */ "./src/general/utils/strings.js");

 // Переконайтесь, що шлях правильний

 // Компонент для розбивки, якщо необхідно

var StatRow = function StatRow(_ref) {
  var stat = _ref.stat,
    _ref$onHover = _ref.onHover,
    onHover = _ref$onHover === void 0 ? function () {} : _ref$onHover;
  if (!stat) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'row flex-row'
    // onMouseEnter={() => onHover(stat.id)}
    ,
    onMouseOver: function onMouseOver() {
      return onHover(stat.id);
    },
    onMouseLeave: function onMouseLeave() {
      return onHover();
    }
    // onMouseOut={() => onHover()}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_1__.TippyWrapper, {
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'hint-popup'
    }, stat.description)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, stat.name)), stat.breakDown ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_1__.TippyWrapper, {
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'hint-popup'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_sidebar_jsx__WEBPACK_IMPORTED_MODULE_2__.BreakDown, {
      breakDown: stat.breakDown
    }))
  }, stat.isMultiplier ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "X", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(stat.value)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(stat.value))) : stat.isMultiplier ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "X", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(stat.value)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(stat.value)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatRow);

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/shared/stat-row.jsx?
