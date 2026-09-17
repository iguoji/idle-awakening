__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralStats: () => (/* binding */ GeneralStats),
/* harmony export */   ItemDetails: () => (/* binding */ ItemDetails),
/* harmony export */   Social: () => (/* binding */ Social)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../general/client */ "./src/general/client.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_effects_section_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/effects-section.jsx */ "./src/components/shared/effects-section.jsx");
/* harmony import */ var _shared_resource_cost_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/resource-cost.jsx */ "./src/components/shared/resource-cost.jsx");
/* harmony import */ var _shared_resource_comparison_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/resource-comparison.jsx */ "./src/components/shared/resource-comparison.jsx");
/* harmony import */ var _guilds_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guilds.jsx */ "./src/components/social/guilds.jsx");
/* harmony import */ var _shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/new-notification-wrap.jsx */ "./src/components/shared/new-notification-wrap.jsx");
/* harmony import */ var _context_ui_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../context/ui-context */ "./src/context/ui-context.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }










var Social = function Social() {
  var _newUnlocks$social, _newUnlocks$social2;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useAppContext = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_9__.useAppContext)(),
    isMobile = _useAppContext.isMobile;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!isMobile),
    _useState2 = _slicedToArray(_useState, 2),
    isDetailVisible = _useState2[0],
    setDetailVisible = _useState2[1];
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    unlocks = _useState4[0],
    setUnlocksData = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('guilds'),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedTab = _useState6[0],
    setSelectedTab = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    detailOpened = _useState8[0],
    setDetailOpened = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState10 = _slicedToArray(_useState9, 2),
    newUnlocks = _useState10[0],
    setNewUnlocks = _useState10[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var interval = setInterval(function () {
      sendData('query-unlocks', {
        prefix: 'social'
      });
    }, 100);
    var interval2 = setInterval(function () {
      sendData('query-new-unlocks-notifications', {
        suffix: 'social',
        scope: 'social'
      });
    }, 1000);
    return function () {
      clearInterval(interval);
      clearInterval(interval2);
    };
  }, []);
  onMessage('new-unlocks-notifications-social', function (payload) {
    setNewUnlocks(payload);
  });
  onMessage('unlocks-social', function (unlocks) {
    setUnlocksData(unlocks);
  });
  var setItemDetails = function setItemDetails(id, meta) {
    if (!id) {
      setDetailOpened({
        id: null,
        meta: meta
      });
    } else {
      setDetailOpened({
        id: id,
        meta: meta
      });
    }
  };
  var purchaseGuildUpgrade = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id) {
    sendData("purchase-guild-item", {
      id: id
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'items-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'items ingame-box'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'menu-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: 'menu'
  }, unlocks.guilds ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "".concat(selectedTab === 'guilds' ? 'active' : ''),
    onClick: function onClick() {
      setSelectedTab('guilds');
      setDetailOpened(null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_8__.NewNotificationWrap, {
    isNew: (_newUnlocks$social = newUnlocks.social) === null || _newUnlocks$social === void 0 || (_newUnlocks$social = _newUnlocks$social.items) === null || _newUnlocks$social === void 0 || (_newUnlocks$social = _newUnlocks$social.guilds) === null || _newUnlocks$social === void 0 ? void 0 : _newUnlocks$social.hasNew
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Guilds"))) : null), isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'highlighted-span',
    onClick: function onClick() {
      return setDetailVisible(true);
    }
  }, "Info")) : null), selectedTab === 'guilds' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_guilds_jsx__WEBPACK_IMPORTED_MODULE_7__.Guilds, {
    filterId: selectedTab,
    setItemDetails: setItemDetails,
    newUnlocks: (_newUnlocks$social2 = newUnlocks.social) === null || _newUnlocks$social2 === void 0 || (_newUnlocks$social2 = _newUnlocks$social2.items) === null || _newUnlocks$social2 === void 0 || (_newUnlocks$social2 = _newUnlocks$social2.guilds) === null || _newUnlocks$social2 === void 0 ? void 0 : _newUnlocks$social2.items,
    isMobile: isMobile
  }) : null), !isMobile || isDetailVisible || detailOpened !== null && detailOpened !== void 0 && detailOpened.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'item-detail ingame-box detail-blade'
  }, detailOpened !== null && detailOpened !== void 0 && detailOpened.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ItemDetails, {
    itemId: detailOpened === null || detailOpened === void 0 ? void 0 : detailOpened.id,
    meta: detailOpened === null || detailOpened === void 0 ? void 0 : detailOpened.meta,
    category: selectedTab,
    setItemDetails: setItemDetails,
    purchaseGuildUpgrade: purchaseGuildUpgrade
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GeneralStats, {
    setDetailVisible: setDetailVisible
  })) : null);
};
var GeneralStats = function GeneralStats(_ref) {
  var setDetailVisible = _ref.setDetailVisible;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useAppContext2 = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_9__.useAppContext)(),
    isMobile = _useAppContext2.isMobile;
  var _useWorkerClient2 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient2.onMessage,
    sendData = _useWorkerClient2.sendData;
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    stats = _useState12[0],
    setStats = _useState12[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sendData('query-all-guilds-effects', {});
  }, []);
  onMessage('all-guilds-effects', function (items) {
    // console.log('all-guilds-effects: ', items)
    setStats(items);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'blade-inner'
  }, stats.map(function (guildStat) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'block'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, guildStat.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'effects-wrap-outer'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_effects_section_jsx__WEBPACK_IMPORTED_MODULE_4__.EffectsSection, {
      effects: guildStat.effects
    })));
  }), isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block buttons'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return setDetailVisible(false);
    }
  }, "Close")) : null));
};
var ItemDetails = function ItemDetails(_ref2) {
  var itemId = _ref2.itemId,
    meta = _ref2.meta,
    category = _ref2.category,
    setItemDetails = _ref2.setItemDetails,
    purchaseGuildUpgrade = _ref2.purchaseGuildUpgrade;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient3 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient3.onMessage,
    sendData = _useWorkerClient3.sendData;
  var _useAppContext3 = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_9__.useAppContext)(),
    isMobile = _useAppContext3.isMobile;
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    item = _useState14[0],
    setDetailOpened = _useState14[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (category === 'guilds') {
      var interval = setInterval(function () {
        sendData('query-guild-item-details', {
          id: itemId,
          meta: meta
        });
      }, 200);
      return function () {
        clearInterval(interval);
      };
    }
  }, [itemId]);
  onMessage('guild-item-details', function (items) {
    // console.log('GuildDetails: ', items)
    setDetailOpened(items);
  });
  if (!itemId || !item) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'blade-inner'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'description'
  }, item.description)), item.affordable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Cost:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'costs-wrap'
  }, Object.values(item.affordable.affordabilities || {}).map(function (aff) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_resource_cost_jsx__WEBPACK_IMPORTED_MODULE_5__.ResourceCost, {
      affordabilities: aff
    });
  }))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Effects:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'effects'
  }, item.currentEffects ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_resource_comparison_jsx__WEBPACK_IMPORTED_MODULE_6__.ResourceComparison, {
    effects1: item.currentEffects,
    effects2: item.potentialEffects
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_effects_section_jsx__WEBPACK_IMPORTED_MODULE_4__.EffectsSection, {
    effects: item.effects,
    maxDisplay: 10
  }))), isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block buttons flex-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: !item.affordable.isAffordable,
    onClick: function onClick() {
      return purchaseGuildUpgrade(item.id);
    }
  }, "Purchase"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return setItemDetails(null);
    }
  }, "Close")) : null));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/social/index.jsx?
