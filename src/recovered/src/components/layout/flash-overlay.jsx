__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlashOverlay: () => (/* binding */ FlashOverlay)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");


var FlashOverlay = function FlashOverlay(_ref) {
  var position = _ref.position,
    className = _ref.className;
  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flash-overlay ".concat(className),
    style: {
      position: 'fixed',
      top: position.top,
      left: position.left,
      width: position.width,
      height: position.height
      // ...other styles
    }
  }), document.body);
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/layout/flash-overlay.jsx?
