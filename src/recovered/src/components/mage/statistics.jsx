__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Statistics: () => (/* binding */ Statistics)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _general_utils_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../general/utils/strings */ "./src/general/utils/strings.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../general/client */ "./src/general/client.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/ResponsiveContainer.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/chart/PieChart.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/polar/Pie.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/Cell.js");
/* harmony import */ var react_tippy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-tippy */ "./node_modules/react-tippy/dist/react-tippy.js");
/* harmony import */ var react_tippy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_tippy__WEBPACK_IMPORTED_MODULE_5__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







var COLORS = ['#6088FE', '#00C49F', '#FFBB28', '#FF8042', '#1019FE', '#30309F', '#AD09AD', '#FE66FE', '#30F9FE', '#F0306F', '#FFFE33', '#99FE99'];
var MyPieChart = function MyPieChart(_ref) {
  var data = _ref.data,
    key = _ref.key,
    fmt = _ref.fmt;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_6__.ResponsiveContainer, {
    width: "95%",
    height: 300
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_7__.PieChart, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_8__.Pie, {
    data: data,
    cx: "50%",
    cy: "50%",
    outerRadius: 75,
    fill: "#8884d8",
    dataKey: "value",
    label: fmt
  }, data.map(function (entry, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_9__.Cell, {
      key: "cell-".concat(key, "-").concat(index),
      fill: COLORS[index % COLORS.length]
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_tippy__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
    formatter: function formatter(value, name) {
      return ["".concat(value), "".concat(name)];
    }
  })));
};
var Statistics = function Statistics() {
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_3__["default"]);
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_4__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    stats = _useState2[0],
    setStats = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sendData('query-statistics', {});
  }, []);
  onMessage('statistics', function (stats) {
    setStats(stats);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'statistics'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'stats-inner'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'flex-row stats'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'stat-title'
  }, "Total time played:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'stat-value'
  }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_1__.secondsToString)(stats.totalTimePlayed))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'flex-row stats'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'stat-title'
  }, "Mage Level:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'stat-value'
  }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_1__.formatInt)(stats.mageLevel))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'flex-row stats'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'stat-title'
  }, "Actions Unlocked:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'stat-value'
  }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_1__.formatInt)(stats.actionsUnlocked))), stats.actionTimes ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'flex-row stats'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'stat-title'
  }, "Actions Time Spent:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'stat-value'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MyPieChart, {
    key: 'time-spent',
    data: stats.actionTimes,
    fmt: function fmt(entry) {
      return "".concat(entry.name, ": ").concat((0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_1__.secondsToString)(entry.value));
    }
  }))) : null)));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/mage/statistics.jsx?
