__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttributesBar: () => (/* binding */ AttributesBar),
/* harmony export */   BreakDown: () => (/* binding */ BreakDown),
/* harmony export */   ResourcesBar: () => (/* binding */ ResourcesBar),
/* harmony export */   Sidebar: () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../general/client */ "./src/general/client.js");
/* harmony import */ var _general_utils_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../general/utils/strings */ "./src/general/utils/strings.js");
/* harmony import */ var _shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/tippy-wrapper.jsx */ "./src/components/shared/tippy-wrapper.jsx");
/* harmony import */ var _shared_active_effects_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/active-effects.jsx */ "./src/components/shared/active-effects.jsx");
/* harmony import */ var _shared_random_events_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/random-events.jsx */ "./src/components/shared/random-events.jsx");
/* harmony import */ var _context_tutorial_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/tutorial-context */ "./src/context/tutorial-context.js");
/* harmony import */ var _shared_raw_resource_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/raw-resource.jsx */ "./src/components/shared/raw-resource.jsx");
/* harmony import */ var _personage_circle_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./personage-circle.jsx */ "./src/components/layout/personage-circle.jsx");
/* harmony import */ var _banked_time_wrap_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./banked-time-wrap.jsx */ "./src/components/layout/banked-time-wrap.jsx");
/* harmony import */ var _context_ui_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../context/ui-context */ "./src/context/ui-context.js");
/* harmony import */ var _shared_active_actions_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/active-actions.jsx */ "./src/components/shared/active-actions.jsx");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }













var Sidebar = function Sidebar() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('resources'),
    _useState2 = _slicedToArray(_useState, 2),
    activePanel = _useState2[0],
    setActivePanel = _useState2[1];
  var _useTutorial = (0,_context_tutorial_context__WEBPACK_IMPORTED_MODULE_7__.useTutorial)(),
    unlockNextById = _useTutorial.unlockNextById;
  var _useAppContext = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_11__.useAppContext)(),
    isMobile = _useAppContext.isMobile;
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isHidden = _useState4[0],
    setHidden = _useState4[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'sidebar'
  }, isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'show-hide-toggle'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'highlighted-span',
    onClick: function onClick() {
      return setHidden(!isHidden);
    }
  }, isHidden ? 'Show Resources Panel' : 'Hide Resources Panel')) : null, !isMobile || !isHidden ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'hideable-content'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'upper'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'personage-data'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_personage_circle_jsx__WEBPACK_IMPORTED_MODULE_9__.PersonageCircle, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_banked_time_wrap_jsx__WEBPACK_IMPORTED_MODULE_10__.BankedTimeWrap, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: 'menu toogleables bigger'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    id: 'tutorial-res-tab',
    className: "".concat(activePanel === 'resources' ? 'active' : ''),
    onClick: function onClick() {
      unlockNextById(3);
      setActivePanel('resources');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Resources")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    id: 'tutorial-attr-tab',
    className: "".concat(activePanel === 'attributes' ? 'active' : ''),
    onClick: function onClick() {
      unlockNextById(1);
      setActivePanel('attributes');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Attributes"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'main-bar'
  }, activePanel === 'resources' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ResourcesBar, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AttributesBar, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'lower'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_active_actions_jsx__WEBPACK_IMPORTED_MODULE_12__.ActiveActions, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_random_events_jsx__WEBPACK_IMPORTED_MODULE_6__.RandomEventSnippet, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'effects-list'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_active_effects_jsx__WEBPACK_IMPORTED_MODULE_5__.ActiveEffects, null)))) : null);
};
var ResourcesBar = function ResourcesBar() {
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    resourceData = _useState6[0],
    setResourceData = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var interval = setInterval(function () {
      sendData('query-resources-data', {
        includePinned: true
      });
    }, 200);
    return function () {
      clearInterval(interval);
    };
  }, []);
  onMessage('resources-data', function (resources) {
    setResourceData(resources);
  });
  var setMonitoredAttribute = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id) {
    sendData('set-monitored', {
      scope: 'actions',
      type: 'resource',
      id: id
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'resources',
    id: 'tutorial-resources'
  }, resourceData.map(function (res) {
    var _res$monitor;
    var aff = res.affData;
    var affClassData = '';
    if (aff) {
      affClassData = " monitored ".concat(aff.isAffordable ? 'affordable' : aff.hardLocked ? 'locked' : 'unavailable');
    }
    var isAffected = (_res$monitor = res.monitor) === null || _res$monitor === void 0 ? void 0 : _res$monitor.direction;
    var addClass = '';
    if (isAffected) {
      addClass = isAffected < 0 ? ' negative' : ' positive';
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: res.id,
      className: "holder ".concat(aff ? 'monitored' : '', " ").concat(addClass),
      onMouseOver: function onMouseOver() {
        return setMonitoredAttribute(res.id);
      },
      onMouseOut: function onMouseOut() {
        return setMonitoredAttribute(null);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "resource-item ".concat(affClassData)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'resource-label'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_raw_resource_jsx__WEBPACK_IMPORTED_MODULE_8__.RawResource, {
      name: res.name,
      id: res.id
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_4__.TippyWrapper, {
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'hint-popup'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BreakDown, {
        category: 'cap',
        breakDown: res.storageBreakdown
      }), res.eta >= 0 ? "".concat((0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.secondsToString)(res.eta), " to full") : "".concat((0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.secondsToString)(-res.eta), " to empty"))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "resource-amount ".concat(res.hasCap && res.isCapped ? 'capped' : '')
    }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(res.amount || 0), res.hasCap || res.isService ? " / ".concat((0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(res.isService ? res.total || 0 : res.cap || 0)) : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_4__.TippyWrapper, {
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'hint-popup'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BreakDown, {
        breakDown: res.breakDown
      }))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "resource-balance ".concat(res.isNegative ? 'red' : '', " ").concat(res.isPositive ? 'green' : '')
    }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(res.balance || 0))), res.capProgress ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'next-unlock-holder resource'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'next-unlock-bar',
      style: {
        width: "".concat(res.capProgress * 100, "%")
      }
    })) : null, aff ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'appendix'
    }, aff.isAffordable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(aff.requirement)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(aff.actual - aff.requirement), "(", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.secondsToString)(aff.eta), ")")) : null));
  }));
};
var AttributesBar = function AttributesBar() {
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient2 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient2.onMessage,
    sendData = _useWorkerClient2.sendData;
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      list: []
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    attributesData = _useState8[0],
    setAttributesData = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var interval = setInterval(function () {
      sendData('query-attributes-data', {});
    }, 200);
    return function () {
      clearInterval(interval);
    };
  }, []);
  onMessage('attributes-data', function (attributes) {
    setAttributesData(attributes);
  });
  var setMonitoredAttribute = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id) {
    sendData('set-monitored', {
      scope: 'actions',
      type: 'attribute',
      id: id
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'attributes-panel',
    id: 'tutorial-attributes'
  }, attributesData.list.map(function (res) {
    var _res$monitor2, _res$nextUnlocks;
    var aff = res.affData;
    var affClassData = '';
    if (aff) {
      affClassData = " monitored ".concat(aff.isAffordable ? 'affordable' : aff.hardLocked ? 'locked' : 'unavailable');
    }
    var isAffected = (_res$monitor2 = res.monitor) === null || _res$monitor2 === void 0 ? void 0 : _res$monitor2.direction;
    var addClass = '';
    if (isAffected) {
      addClass = isAffected < 0 ? ' negative' : ' positive';
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: res.id,
      className: "holder ".concat(aff ? 'monitored' : '', " ").concat(addClass),
      onMouseOver: function onMouseOver() {
        return setMonitoredAttribute(res.id);
      },
      onMouseOut: function onMouseOut() {
        return setMonitoredAttribute(null);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "resource-item ".concat(affClassData)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_4__.TippyWrapper, {
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'hint-popup'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'block'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, res.name, ": ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(res.value, 3))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'block'
      }, res.description), (_res$nextUnlocks = res.nextUnlocks) !== null && _res$nextUnlocks !== void 0 && _res$nextUnlocks.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'unlock block'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: 'hint'
      }, "Next unlock at level ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(res.nextUnlocks[0].level))) : null)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: 'resource-label'
    }, res.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_4__.TippyWrapper, {
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'hint-popup'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BreakDown, {
        breakDown: res.breakDown
      }))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: 'resource-balance'
    }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(Math.floor(res.value || 0), 2))), res.nextProgress ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'next-unlock-holder'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'next-unlock-bar',
      style: {
        width: "".concat(res.nextProgress * 100, "%")
      }
    })) : null, aff ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'appendix'
    }, aff.isAffordable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(aff.requirement)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(aff.actual - aff.requirement), "(", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.secondsToString)(aff.eta), ")")) : null));
  }));
};
var BreakDown = function BreakDown(_ref) {
  var _breakDown$income, _breakDown$multiplier, _breakDown$consumptio;
  var breakDown = _ref.breakDown,
    category = _ref.category,
    _ref$collapseByLabel = _ref.collapseByLabel,
    collapseByLabel = _ref$collapseByLabel === void 0 ? true : _ref$collapseByLabel;
  if (!breakDown) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'breakdown'
  }, (_breakDown$income = breakDown.income) !== null && _breakDown$income !== void 0 && _breakDown$income.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'box'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'sub-title'
  }, category === 'cap' ? 'Basic Storage' : 'Income'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'box-inner'
  }, breakDown.income.filter(function (one) {
    return Math.abs(one.value) > 1.e-8;
  }).map(function (one) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      key: one.id,
      className: 'line'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: 'name'
    }, one.label, ": "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: 'value'
    }, "+", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(one.value, 3)));
  }))) : null, (_breakDown$multiplier = breakDown.multiplier) !== null && _breakDown$multiplier !== void 0 && _breakDown$multiplier.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'box'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'sub-title'
  }, "Multiplier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'box-inner'
  }, breakDown.multiplier.filter(function (one) {
    return Math.abs(one.value - 1) > 1.e-8;
  }).map(function (one) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      key: one.id,
      className: 'line'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: 'name'
    }, one.label, ": "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: 'value'
    }, "X", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(one.value, 3)));
  }))) : null, (_breakDown$consumptio = breakDown.consumption) !== null && _breakDown$consumptio !== void 0 && _breakDown$consumptio.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'box'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'sub-title'
  }, "Consumption"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'box-inner'
  }, breakDown.consumption.filter(function (one) {
    return Math.abs(one.value) > 1.e-8;
  }).map(function (one) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      key: one.id,
      className: 'line'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: 'name'
    }, one.label, ": "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: 'value'
    }, "-", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(one.value, 3)));
  }))) : null);
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/layout/sidebar.jsx?
