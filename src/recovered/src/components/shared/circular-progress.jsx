__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var CircularProgress = function CircularProgress(_ref) {
  var progress = _ref.progress,
    children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "circular-progress"
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "overlay",
    style: {
      '--progress': progress,
      '--angle': "".concat((1 - progress) * 360)
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CircularProgress);

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/shared/circular-progress.jsx?
