__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemDetails: () => (/* binding */ ItemDetails),
/* harmony export */   PlantationsWrap: () => (/* binding */ PlantationsWrap)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../general/client */ "./src/general/client.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_effects_section_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/effects-section.jsx */ "./src/components/shared/effects-section.jsx");
/* harmony import */ var _general_utils_strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../general/utils/strings */ "./src/general/utils/strings.js");
/* harmony import */ var _shared_resource_cost_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/resource-cost.jsx */ "./src/components/shared/resource-cost.jsx");
/* harmony import */ var _plantations_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plantations.jsx */ "./src/components/workshop/plantations/plantations.jsx");
/* harmony import */ var _shared_resource_comparison_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/resource-comparison.jsx */ "./src/components/shared/resource-comparison.jsx");
/* harmony import */ var _shared_resource_effects_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/resource-effects.jsx */ "./src/components/shared/resource-effects.jsx");
/* harmony import */ var _context_ui_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../context/ui-context */ "./src/context/ui-context.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }











var PlantationsWrap = function PlantationsWrap(_ref) {
  var _newUnlocks$workshop;
  var children = _ref.children;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useAppContext = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_10__.useAppContext)(),
    isMobile = _useAppContext.isMobile;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!isMobile),
    _useState2 = _slicedToArray(_useState, 2),
    isDetailVisible = _useState2[0],
    setDetailVisible = _useState2[1];
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    detailOpened = _useState4[0],
    setDetailOpened = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    newUnlocks = _useState6[0],
    setNewUnlocks = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var interval2 = setInterval(function () {
      sendData('query-new-unlocks-notifications', {
        suffix: 'plantations',
        scope: 'workshop'
      });
    }, 1000);
    return function () {
      clearInterval(interval2);
    };
  }, []);
  onMessage('new-unlocks-notifications-plantations', function (payload) {
    setNewUnlocks(payload);
  });
  var setItemDetails = function setItemDetails(id) {
    if (!id) {
      setDetailOpened(null);
    } else {
      setDetailOpened(id);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'items-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'items ingame-box'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'head workshop'
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_plantations_jsx__WEBPACK_IMPORTED_MODULE_7__.Plantations, {
    setItemDetails: setItemDetails,
    newUnlocks: (_newUnlocks$workshop = newUnlocks.workshop) === null || _newUnlocks$workshop === void 0 || (_newUnlocks$workshop = _newUnlocks$workshop.items) === null || _newUnlocks$workshop === void 0 || (_newUnlocks$workshop = _newUnlocks$workshop.plantations) === null || _newUnlocks$workshop === void 0 ? void 0 : _newUnlocks$workshop.items
  })), !isMobile || detailOpened || isDetailVisible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'item-detail ingame-box detail-blade'
  }, detailOpened ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ItemDetails, {
    itemId: detailOpened,
    category: 'plantations',
    setItemDetails: setItemDetails
  }) : null) : null);
};
var ItemDetails = function ItemDetails(_ref2) {
  var itemId = _ref2.itemId,
    category = _ref2.category,
    setItemDetails = _ref2.setItemDetails;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useAppContext2 = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_10__.useAppContext)(),
    isMobile = _useAppContext2.isMobile;
  var _useWorkerClient2 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient2.onMessage,
    sendData = _useWorkerClient2.sendData;
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    item = _useState8[0],
    setDetailOpened = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // console.log('Details: ', itemId, category);

    var interval = setInterval(function () {
      sendData('query-plantation-details', {
        id: itemId
      });
    }, 200);
    return function () {
      clearInterval(interval);
    };
  }, [itemId]);
  onMessage('plantation-details', function (items) {
    // console.log('PlantDetails: ', items)
    setDetailOpened(items);
  });
  if (!itemId || !item) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'blade-inner'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, item.name, " (x", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_5__.formatInt)(item.level), ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'description'
  }, item.description)), item.bottleNeck ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'hint'
  }, "This activity running at ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_5__.formatValue)(item.efficiency * 100), "% due to missing ", item.bottleNeck.name)) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Cost:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'costs-wrap'
  }, Object.values(item.affordable.affordabilities || {}).map(function (aff) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_resource_cost_jsx__WEBPACK_IMPORTED_MODULE_6__.ResourceCost, {
      affordabilities: aff
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Effects:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'effects'
  }, item.currentEffects ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_resource_comparison_jsx__WEBPACK_IMPORTED_MODULE_8__.ResourceComparison, {
    effects1: item.currentEffects,
    effects2: item.potentialEffects
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_effects_section_jsx__WEBPACK_IMPORTED_MODULE_4__.EffectsSection, {
    effects: item.effects,
    maxDisplay: 10
  }))), item.isWateringUnlocked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'watering block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Watering: ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_5__.formatInt)(item.wateringLevel), " / ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_5__.formatInt)(item.maxWatering.value)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'stats-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_resource_comparison_jsx__WEBPACK_IMPORTED_MODULE_8__.ResourceComparison, {
    effects1: item.wateringEffects,
    effects2: item.nextWateringEffects
  })), item.wateringLevel >= item.maxWatering.value ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'warn'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'hint yellow'
  }, "Build more water pumps to increase watering level (See property tab)")) : null) : null, isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block buttons'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return setItemDetails(null);
    }
  }, "Close")) : null));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/workshop/plantations/index.jsx?
