__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PinResource: () => (/* binding */ PinResource)
/* harmony export */ });
/* harmony import */ var _tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tippy-wrapper.jsx */ "./src/components/shared/tippy-wrapper.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../general/client */ "./src/general/client.js");




var PinResource = function PinResource(_ref) {
  var id = _ref.id,
    isPinned = _ref.isPinned;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_2__["default"]);
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_3__.useWorkerClient)(worker),
    sendData = _useWorkerClient.sendData,
    onMessage = _useWorkerClient.onMessage;
  var togglePinned = function togglePinned() {
    sendData('set-resource-pinned', {
      id: id,
      flag: !isPinned
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_0__.TippyWrapper, {
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: 'hint-popup'
    }, isPinned ? 'Unpin item to hide it from resources sidebar' : 'Pin item to make it visible at resources sidebar')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: 'icon-content small interface-icon',
    onClick: togglePinned
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
    src: isPinned ? 'icons/interface/unpin.png' : 'icons/interface/pin.png'
  })));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/shared/pin-resource.jsx?
