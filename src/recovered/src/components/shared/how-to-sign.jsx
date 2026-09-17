__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HowToSign: () => (/* binding */ HowToSign)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_ui_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/ui-context */ "./src/context/ui-context.js");
/* harmony import */ var _tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tippy-wrapper.jsx */ "./src/components/shared/tippy-wrapper.jsx");



var HowToSign = function HowToSign(_ref) {
  var scope = _ref.scope;
  var _useAppContext = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_1__.useAppContext)(),
    setPopupMeta = _useAppContext.setPopupMeta,
    setActivePopup = _useAppContext.setActivePopup;
  var showHowTo = function showHowTo() {
    setActivePopup('howto');
    setPopupMeta({
      howToScope: scope
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_2__.TippyWrapper, {
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'hint-popup'
    }, "How it works?")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'how-to'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'how-to-sign',
    onClick: showHowTo
  }, "?")));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/shared/how-to-sign.jsx?
