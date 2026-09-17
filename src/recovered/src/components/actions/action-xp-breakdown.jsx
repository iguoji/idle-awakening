__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionXPBreakdown: () => (/* binding */ ActionXPBreakdown)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../general/client */ "./src/general/client.js");
/* harmony import */ var _layout_sidebar_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/sidebar.jsx */ "./src/components/layout/sidebar.jsx");
/* harmony import */ var _general_utils_strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../general/utils/strings */ "./src/general/utils/strings.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





var ActionXPBreakdown = function ActionXPBreakdown(_ref) {
  var id = _ref.id;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      breakDowns: {},
      total: 0,
      nextEtas: {}
    }),
    _useState2 = _slicedToArray(_useState, 2),
    breakdowns = _useState2[0],
    setBreakdowns = _useState2[1];

  // const [filterId, setFilterId] = useState('all');

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var interval = setInterval(function () {
      sendData('query-action-xp-breakdown', {
        id: id
      });
    }, 1000);
    sendData('query-action-xp-breakdown', {
      id: id
    });
    return function () {
      clearInterval(interval);
    };
  }, []);
  onMessage("action-xp-breakdown-".concat(id), function (breakdowns) {
    setBreakdowns(breakdowns);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'hint-popup breakdowns'
  }, breakdowns.breakDowns && Object.values(breakdowns.breakDowns).length ? Object.values(breakdowns.breakDowns).map(function (breakDown) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: breakDown.title,
      className: 'breakdown-section'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: 'semi-title'
    }, breakDown.title, ": ", breakDown.isPlain ? '+' : 'X', (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_4__.formatValue)(breakDown.value)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'breakdown-section-sub'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_sidebar_jsx__WEBPACK_IMPORTED_MODULE_3__.BreakDown, {
      breakDown: breakDown.breakDown
    })));
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block etas-milestones'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Level Milestones:"), Object.entries(breakdowns.nextEtas || {}).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      level = _ref3[0],
      time = _ref3[1];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'flex-row'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Level ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_4__.formatInt)(level), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_4__.secondsToString)(time)));
  })));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/actions/action-xp-breakdown.jsx?
