__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewNotificationWrap: () => (/* binding */ NewNotificationWrap)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../general/client */ "./src/general/client.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




var NewNotificationWrap = function NewNotificationWrap(_ref) {
  var isNew = _ref.isNew,
    id = _ref.id,
    className = _ref.className,
    children = _ref.children,
    key = _ref.key;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    sendData = _useWorkerClient.sendData;
  var setViewed = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.debounce)(function () {
    if (id) {
      sendData('set-new-notification-viewed-by-id', {
        id: id
      });
    }
  }, 1000);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "".concat(className, " new-notification-wrapper ").concat(isNew ? 'is-new' : ''),
    onMouseOver: setViewed,
    key: key
  }, children);
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/shared/new-notification-wrap.jsx?
