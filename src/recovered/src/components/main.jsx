__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadedMain: () => (/* binding */ LoadedMain),
/* harmony export */   Main: () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_content_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/content.jsx */ "./src/components/layout/content.jsx");
/* harmony import */ var _context_tutorial_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/tutorial-context */ "./src/context/tutorial-context.js");
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../general/client */ "./src/general/client.js");





var Main = function Main(_ref) {
  var readyToGo = _ref.readyToGo,
    isLoading = _ref.isLoading;
  if (!readyToGo || isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'ingame-box full-size'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'image'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: 'icons/general/preloader.png'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'loading-text'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Loading")));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context_tutorial_context__WEBPACK_IMPORTED_MODULE_2__.TutorialProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LoadedMain, null));
};
var LoadedMain = function LoadedMain() {
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_3__["default"]);
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_4__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useTutorial = (0,_context_tutorial_context__WEBPACK_IMPORTED_MODULE_2__.useTutorial)(),
    startTutorial = _useTutorial.startTutorial,
    stopTutorial = _useTutorial.stopTutorial,
    setStepIndex = _useTutorial.setStepIndex;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sendData('query_tour_status', {});
    // startTutorial();
  }, []);
  onMessage('tour_status', function (payload) {
    if (!(payload !== null && payload !== void 0 && payload.isComplete)) {
      startTutorial();
      if (payload !== null && payload !== void 0 && payload.skipStep) {
        setStepIndex(payload.skipStep);
      }
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'page-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_content_jsx__WEBPACK_IMPORTED_MODULE_1__.Content, null));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/main.jsx?
