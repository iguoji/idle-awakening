__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TippyWrapper: () => (/* binding */ TippyWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tippyjs/react */ "./node_modules/@tippyjs/react/dist/tippy-react.esm.js");


var TippyWrapper = function TippyWrapper(_ref) {
  var content = _ref.content,
    children = _ref.children,
    _ref$lazy = _ref.lazy,
    lazy = _ref$lazy === void 0 ? false : _ref$lazy,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? "right" : _ref$placement,
    onShow = _ref.onShow,
    onHide = _ref.onHide;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tippyjs_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
    content: content,
    duration: 0,
    placement: placement,
    unmountHTMLWhenHide: lazy,
    onShow: onShow,
    onHide: onHide
  }, children);
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/shared/tippy-wrapper.jsx?
