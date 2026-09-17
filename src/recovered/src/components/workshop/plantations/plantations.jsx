__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemCard: () => (/* binding */ ItemCard),
/* harmony export */   Plantations: () => (/* binding */ Plantations)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../general/client */ "./src/general/client.js");
/* harmony import */ var _general_utils_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../general/utils/strings */ "./src/general/utils/strings.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/new-notification-wrap.jsx */ "./src/components/shared/new-notification-wrap.jsx");
/* harmony import */ var _shared_raw_resource_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/raw-resource.jsx */ "./src/components/shared/raw-resource.jsx");
/* harmony import */ var _layout_sidebar_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../layout/sidebar.jsx */ "./src/components/layout/sidebar.jsx");
/* harmony import */ var _shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/tippy-wrapper.jsx */ "./src/components/shared/tippy-wrapper.jsx");
/* harmony import */ var _shared_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared.jsx */ "./src/components/workshop/shared.jsx");
/* harmony import */ var _context_ui_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../context/ui-context */ "./src/context/ui-context.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }











var Plantations = function Plantations(_ref) {
  var setItemDetails = _ref.setItemDetails,
    newUnlocks = _ref.newUnlocks;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useAppContext = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_10__.useAppContext)(),
    isMobile = _useAppContext.isMobile;
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      available: [],
      slots: {
        total: 0,
        max: 0
      },
      isWateringUnlocked: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    plantationsData = _useState2[0],
    setItemsData = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var interval = setInterval(function () {
      sendData('query-plantation-data', {});
    }, 100);
    return function () {
      clearInterval(interval);
    };
  }, []);
  onMessage("plantations-data", function (plantations) {
    setItemsData(plantations);
  });
  var purchaseItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id) {
    sendData("purchase-plantation", {
      id: id
    });
  });
  var onDemolish = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id) {
    if (confirm('你确定吗？这一行动无法挽回。')) {
      sendData("remove-plantation", {
        id: id
      });
    }
  });
  var setWateringLevel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id, level) {
    sendData("set-plantation-watering", {
      id: id,
      level: level
    });
  });
  var toggleAutopurchase = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id, flag) {
    sendData('set-plantation-autopurchase', {
      id: id,
      flag: flag
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'crafting-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'head'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'space-item'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_raw_resource_jsx__WEBPACK_IMPORTED_MODULE_6__.RawResource, {
    id: 'plantation_slots',
    name: 'Plantation Slots'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "".concat(plantationsData.slots.total > 0 ? 'slots-available' : 'slots-unavailable')
  }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(plantationsData.slots.total), "/", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(plantationsData.slots.max))), plantationsData.isWateringUnlocked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_8__.TippyWrapper, {
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'hint-popup'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: 'hint'
    }, "Congrats! You can now use water to increase your plantations efficiency by setting watering level"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: 'hint'
    }, "If you try to use more water than you have - watering bonus will decrease"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_sidebar_jsx__WEBPACK_IMPORTED_MODULE_7__.BreakDown, {
      breakDown: plantationsData.waterResource.breakDown
    }))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'space-item'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_raw_resource_jsx__WEBPACK_IMPORTED_MODULE_6__.RawResource, {
    id: 'inventory_water',
    name: plantationsData.waterResource.name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(plantationsData.waterResource.amount), "(", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(plantationsData.waterResource.balance), ")"))) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'plantations-cat'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'flex-container'
  }, plantationsData.available.map(function (plantable) {
    var _newUnlocks$all;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_5__.NewNotificationWrap, {
      id: "plantation_".concat(plantable.id),
      className: 'narrow-wrapper',
      isNew: newUnlocks === null || newUnlocks === void 0 || (_newUnlocks$all = newUnlocks.all) === null || _newUnlocks$all === void 0 || (_newUnlocks$all = _newUnlocks$all.items) === null || _newUnlocks$all === void 0 || (_newUnlocks$all = _newUnlocks$all["plantation_".concat(plantable.id)]) === null || _newUnlocks$all === void 0 ? void 0 : _newUnlocks$all.hasNew
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ItemCard, _extends({
      key: plantable.id
    }, plantable, {
      onPurchase: purchaseItem,
      onShowDetails: setItemDetails,
      onDemolish: onDemolish,
      isWateringUnlocked: plantationsData.isWateringUnlocked,
      setWateringLevel: setWateringLevel,
      isMobile: isMobile,
      toggleAutopurchase: toggleAutopurchase,
      isAutomationUnlocked: plantationsData.isAutomationUnlocked
    })));
  })))));
};
var ItemCard = function ItemCard(_ref2) {
  var id = _ref2.id,
    icon_id = _ref2.icon_id,
    resourceAmount = _ref2.resourceAmount,
    resourceBalance = _ref2.resourceBalance,
    breakDown = _ref2.breakDown,
    name = _ref2.name,
    level = _ref2.level,
    maxLevel = _ref2.maxLevel,
    affordable = _ref2.affordable,
    isAutoPurchase = _ref2.isAutoPurchase,
    onPurchase = _ref2.onPurchase,
    onDemolish = _ref2.onDemolish,
    onShowDetails = _ref2.onShowDetails,
    wateringLevel = _ref2.wateringLevel,
    isWateringUnlocked = _ref2.isWateringUnlocked,
    setWateringLevel = _ref2.setWateringLevel,
    toggleAutopurchase = _ref2.toggleAutopurchase,
    isAutomationUnlocked = _ref2.isAutomationUnlocked,
    isMobile = _ref2.isMobile;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card craftable plantable",
    onMouseEnter: function onMouseEnter() {
      return !isMobile ? onShowDetails(id) : null;
    },
    onMouseLeave: function onMouseLeave() {
      return !isMobile ? onShowDetails(null) : null;
    },
    onClick: function onClick() {
      return isMobile ? onShowDetails(id) : null;
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'flex-container two-side-card'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'left'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "icons/resources/".concat(icon_id, ".png"),
    className: 'resource big'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'right'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'head'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'title'
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'level'
  }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(level), maxLevel ? "/".concat((0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(maxLevel)) : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_jsx__WEBPACK_IMPORTED_MODULE_9__.Balances, {
    resourceAmount: resourceAmount,
    resourceBalance: resourceBalance,
    breakDown: breakDown
  }), isWateringUnlocked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'watering-settings'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Watering Level:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: 'number',
    value: wateringLevel,
    onChange: function onChange(e) {
      e.preventDefault();
      e.stopPropagation();
      setWateringLevel(id, +e.target.value);
    }
  }))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'bottom'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'buttons'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: !affordable.isAffordable,
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      onPurchase(id);
    },
    className: 'purchase-button',
    style: {
      '--progress': "".concat(affordable.percentage * 100, "%")
    }
  }, level > 0 ? 'Upgrade' : 'Purchase'), isAutomationUnlocked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: 'autobuy-label',
    onClick: function onClick(e) {
      e.stopPropagation();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: 'checkbox',
    checked: isAutoPurchase,
    onChange: function onChange(e) {
      e.stopPropagation();
      e.preventDefault();
      toggleAutopurchase(id, !isAutoPurchase);
    }
  }), "Autobuy") : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: level <= 0,
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      onDemolish(id);
    }
  }, "Demolish"))))));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/workshop/plantations/plantations.jsx?
