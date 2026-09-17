__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnlocksList: () => (/* binding */ UnlocksList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _general_utils_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../general/utils/strings */ "./src/general/utils/strings.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../general/client */ "./src/general/client.js");
/* harmony import */ var _shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/tippy-wrapper.jsx */ "./src/components/shared/tippy-wrapper.jsx");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }






var UnlocksList = function UnlocksList() {
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_3__["default"]);
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_4__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    actions = _useState2[0],
    setActions = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    effects = _useState4[0],
    setEffects = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    totalUnlocks = _useState6[0],
    setTotalUnlocks = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showUnlocked = _useState8[0],
    setShowUnlocked = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sendData('query-actions-unlocks', {
      showUnlocked: showUnlocked
    });
    sendData('query-attributes-unlocks', {
      showUnlocked: showUnlocked
    });
    sendData('query-total-unlocks', {
      showUnlocked: showUnlocked
    });
  }, [showUnlocked]);
  onMessage('actions-unlocks', function (actionsData) {
    setActions(actionsData);
  });
  onMessage('attributes-unlocks', function (attributesData) {
    setEffects(attributesData);
  });
  onMessage('total-unlocks', function (unlocksData) {
    // console.log('unlocksData: ', unlocksData);
    setTotalUnlocks(unlocksData);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'unlocks-map'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'heading'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Total Unlocked: ", totalUnlocks === null || totalUnlocks === void 0 ? void 0 : totalUnlocks.totalCompleted, " / ", totalUnlocks === null || totalUnlocks === void 0 ? void 0 : totalUnlocks.total)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'unlocks-scrollable'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'unlocks-inner'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'flex-container flex-row'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, "Attributes unlocks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Show Unlocked", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: 'checkbox',
    checked: showUnlocked,
    onChange: function onChange() {
      return setShowUnlocked(!showUnlocked);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'body'
  }, effects.map(function (effect) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'effect-block block'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'row flex-container'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: 'unlock-title'
    }, effect.name), effect.unlocks ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'unlocks-progress'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'progress-bg',
      style: {
        width: "".concat(effect.unlocks.progress, "%")
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: 'centered-percentage'
    }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_1__.formatValue)(effect.value), " / ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_1__.formatInt)(effect.unlocks.level), "\xA0(", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_1__.formatValue)(effect.unlocks.progress), "%)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'unlocked-items-container'
    }, effect.unlocks.items.map(function (item) {
      var _item$meta, _item$meta2, _item$meta3;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_5__.TippyWrapper, {
        placement: 'bottom',
        content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: 'hint-popup'
        }, (_item$meta = item.meta) === null || _item$meta === void 0 ? void 0 : _item$meta.description)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: 'unlock-goal'
      }, (_item$meta2 = item.meta) === null || _item$meta2 === void 0 ? void 0 : _item$meta2.scope, ": ", (_item$meta3 = item.meta) === null || _item$meta3 === void 0 ? void 0 : _item$meta3.name));
    }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'completed'
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Complete"))), effect.prevUnlocks.map(function (prev) {
      var _prev$data;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'prev-unlock flex-container flex-row'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: 'unlock-subtitle'
      }, (_prev$data = prev.data) === null || _prev$data === void 0 ? void 0 : _prev$data.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: 'unlock-subtitle'
      }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_1__.formatValue)(effect.value), "/", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_1__.formatValue)(prev.level)));
    }));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, "Actions unlocks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'body'
  }, actions.map(function (action) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'row flex-container'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: 'unlock-title'
    }, action.name), action.unlocks ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'unlocks-progress'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'progress-bg',
      style: {
        width: "".concat(action.progress, "%")
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: 'centered-percentage'
    }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_1__.formatValue)(action.level), " / ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_1__.formatInt)(action.unlocks.level), "\xA0(", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_1__.formatValue)(action.unlocks.progress), "%)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'unlocked-items-container'
    }, action.unlocks.items.map(function (item) {
      var _item$meta4, _item$meta5, _item$meta6;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_5__.TippyWrapper, {
        placement: 'bottom',
        content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: 'hint-popup'
        }, (_item$meta4 = item.meta) === null || _item$meta4 === void 0 ? void 0 : _item$meta4.description)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: 'unlock-goal'
      }, (_item$meta5 = item.meta) === null || _item$meta5 === void 0 ? void 0 : _item$meta5.scope, ": ", (_item$meta6 = item.meta) === null || _item$meta6 === void 0 ? void 0 : _item$meta6.name));
    }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'completed'
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Complete"), action.prevUnlocks.map(function (prev) {
      var _prev$data2;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'prev-unlock flex-container flex-row'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: 'unlock-subtitle'
      }, (_prev$data2 = prev.data) === null || _prev$data2 === void 0 ? void 0 : _prev$data2.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: 'unlock-subtitle'
      }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_1__.formatValue)(action.level), "/", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_1__.formatValue)(prev.level)));
    })));
  })))))));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/mage/unlocks.jsx?
