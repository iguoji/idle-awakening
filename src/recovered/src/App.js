__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _worker_main_worker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./worker/main.worker.js */ "./src/worker/main.worker.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general/client */ "./src/general/client.js");
/* harmony import */ var _components_main_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main.jsx */ "./src/components/main.jsx");
/* harmony import */ var react_tippy_dist_tippy_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tippy/dist/tippy.css */ "./node_modules/react-tippy/dist/tippy.css");
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _assets_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/styles.css */ "./src/assets/styles.css");
/* harmony import */ var react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-perfect-scrollbar/dist/css/styles.css */ "./node_modules/react-perfect-scrollbar/dist/css/styles.css");
/* harmony import */ var _context_ui_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./context/ui-context */ "./src/context/ui-context.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }









function App() {
  var worker = window.worker || new _worker_main_worker_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  window.worker = worker;
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(window.worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    readyToGo = _useState2[0],
    setReadyToGo = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoading = _useState4[0],
    setIsLoading = _useState4[1];
  var _useAppContext = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_8__.useAppContext)(),
    setOpenedTab = _useAppContext.setOpenedTab;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sendData('initialize-game', {
      a: 1
    });

    // Cleanup
    return function () {
      // console.log('Worker terminated...');
      worker.terminate();
    };
  }, []);
  onMessage('initialized', function (event) {
    // console.log('Received from worker:', event);
    var saveString = window.localStorage.getItem('idlemanceryV2Reworked');
    if (!saveString) {
      sendData('reset-game', {});
      return;
    }
    // console.log('found save');
    sendData('load-game', JSON.parse(saveString));
  });
  onMessage('loading', function (event) {
    // console.log('Received from worker:', event);
    setReadyToGo(false);
  });
  onMessage('loaded', function (pl) {
    // console.log('Loaded received: ', pl);
    setReadyToGo(true);
    if (pl.isReset) {
      // console.log('Resetted: ', pl);
      setOpenedTab('actions');
    }
  });
  onMessage('save-game', function (data) {
    window.localStorage.setItem('idlemanceryV2Reworked', JSON.stringify(data));
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (readyToGo) {
      sendData('start-ticking');
      setTimeout(function () {
        setIsLoading(false);
      });
    } else {
      setIsLoading(true);
    }
  }, [readyToGo]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context_worker_context__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
    value: worker
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "App"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_main_jsx__WEBPACK_IMPORTED_MODULE_3__.Main, {
    readyToGo: readyToGo,
    isLoading: isLoading
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

//# sourceURL=webpack://idlemancery-v2-reworked/./src/App.js?
