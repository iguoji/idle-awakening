__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResourceCost: () => (/* binding */ ResourceCost)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _general_utils_strings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../general/utils/strings.js */ "./src/general/utils/strings.js");
/* harmony import */ var _tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tippy-wrapper.jsx */ "./src/components/shared/tippy-wrapper.jsx");
/* harmony import */ var _raw_resource_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./raw-resource.jsx */ "./src/components/shared/raw-resource.jsx");




var ResourceCost = function ResourceCost(_ref) {
  var _affordabilities$reso;
  var affordabilities = _ref.affordabilities;
  var content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "res-cost ".concat(affordabilities.hardLocked ? 'red' : '', " ").concat(!affordabilities.isAffordable ? 'yellow' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_raw_resource_jsx__WEBPACK_IMPORTED_MODULE_3__.RawResource, {
    id: (_affordabilities$reso = affordabilities.resourceId) !== null && _affordabilities$reso !== void 0 ? _affordabilities$reso : affordabilities.id,
    name: affordabilities.name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'resource-eta'
  }, !affordabilities.isAffordable ? (0,_general_utils_strings_js__WEBPACK_IMPORTED_MODULE_1__.secondsToString)(affordabilities.eta) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'resource-req'
  }, (0,_general_utils_strings_js__WEBPACK_IMPORTED_MODULE_1__.formatValue)(affordabilities.actual), " / ", (0,_general_utils_strings_js__WEBPACK_IMPORTED_MODULE_1__.formatValue)(affordabilities.requirement)));
  if (affordabilities.isAffordable === false) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_2__.TippyWrapper, {
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'hint-popup'
      }, "ETA: ", (0,_general_utils_strings_js__WEBPACK_IMPORTED_MODULE_1__.secondsToString)(affordabilities.eta))
    }, content);
  }
  return content;
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/shared/resource-cost.jsx?
