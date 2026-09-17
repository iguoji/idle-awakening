__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CourseCard: () => (/* binding */ CourseCard),
/* harmony export */   CourseItems: () => (/* binding */ CourseItems),
/* harmony export */   GeneralStats: () => (/* binding */ GeneralStats),
/* harmony export */   ItemCard: () => (/* binding */ ItemCard),
/* harmony export */   ItemDetails: () => (/* binding */ ItemDetails),
/* harmony export */   ItemResourceCard: () => (/* binding */ ItemResourceCard),
/* harmony export */   Shop: () => (/* binding */ Shop),
/* harmony export */   ShopItems: () => (/* binding */ ShopItems),
/* harmony export */   ShopUpgrades: () => (/* binding */ ShopUpgrades)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../general/client */ "./src/general/client.js");
/* harmony import */ var _general_utils_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../general/utils/strings */ "./src/general/utils/strings.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_effects_section_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/effects-section.jsx */ "./src/components/shared/effects-section.jsx");
/* harmony import */ var _shared_resource_cost_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/resource-cost.jsx */ "./src/components/shared/resource-cost.jsx");
/* harmony import */ var _shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/tippy-wrapper.jsx */ "./src/components/shared/tippy-wrapper.jsx");
/* harmony import */ var _layout_flash_overlay_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layout/flash-overlay.jsx */ "./src/components/layout/flash-overlay.jsx");
/* harmony import */ var _general_hooks_flash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../general/hooks/flash */ "./src/general/hooks/flash.js");
/* harmony import */ var _shared_resource_comparison_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/resource-comparison.jsx */ "./src/components/shared/resource-comparison.jsx");
/* harmony import */ var _shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/new-notification-wrap.jsx */ "./src/components/shared/new-notification-wrap.jsx");
/* harmony import */ var _context_ui_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../context/ui-context */ "./src/context/ui-context.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectDestructuringEmpty(t) { if (null == t) throw new TypeError("Cannot destructure " + t); }













var Shop = function Shop(_ref) {
  var _newUnlocks$shop, _newUnlocks$shop2, _newUnlocks$shop3, _newUnlocks$shop4, _newUnlocks$shop5, _newUnlocks$shop6;
  _objectDestructuringEmpty(_ref);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    detailOpened = _useState2[0],
    setDetailOpened = _useState2[1];
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useAppContext = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_12__.useAppContext)(),
    isMobile = _useAppContext.isMobile;
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!isMobile),
    _useState4 = _slicedToArray(_useState3, 2),
    isDetailVisible = _useState4[0],
    setDetailVisible = _useState4[1];
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('upgrades'),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedTab = _useState6[0],
    setSelectedTab = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    unlocks = _useState8[0],
    setUnlocksData = _useState8[1];
  var purchaseItem = function purchaseItem(id) {
    sendData('purchase-item', {
      id: id
    });
  };
  var purchaseResource = function purchaseResource(id, amount) {
    sendData('purchase-resource', {
      id: id,
      amount: amount
    });
  };
  var purchaseCourse = function purchaseCourse(id, flag) {
    if (flag) {
      sendData('run-course', {
        id: id
      });
    } else {
      sendData('stop-course', {
        id: id
      });
    }
  };
  var setItemDetails = function setItemDetails(id) {
    if (!id) {
      setDetailOpened(null);
    } else {
      setDetailOpened(id);
    }
  };
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState10 = _slicedToArray(_useState9, 2),
    newUnlocks = _useState10[0],
    setNewUnlocks = _useState10[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sendData('query-new-unlocks-notifications', {
      suffix: 'shop',
      scope: 'shop'
    });
    sendData('query-unlocks', {
      prefix: 'shop'
    });
    var interval = setInterval(function () {
      sendData('query-new-unlocks-notifications', {
        suffix: 'shop',
        scope: 'shop'
      });
      sendData('query-unlocks', {});
    }, 1000);
    return function () {
      clearInterval(interval);
    };
  }, []);
  onMessage('unlocks-shop', function (unlocks) {
    setUnlocksData(unlocks);
  });
  onMessage('new-unlocks-notifications-shop', function (payload) {
    setNewUnlocks(payload);
  });
  var onCloseDetails = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    setDetailVisible(false);
    setItemDetails(null);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'items-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'items ingame-box'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'menu-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: 'menu'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "".concat(selectedTab === 'upgrades' ? 'active' : ''),
    onClick: function onClick() {
      setSelectedTab('upgrades');
      setDetailOpened(null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_11__.NewNotificationWrap, {
    isNew: newUnlocks === null || newUnlocks === void 0 || (_newUnlocks$shop = newUnlocks['shop']) === null || _newUnlocks$shop === void 0 || (_newUnlocks$shop = _newUnlocks$shop.items) === null || _newUnlocks$shop === void 0 || (_newUnlocks$shop = _newUnlocks$shop['upgrades']) === null || _newUnlocks$shop === void 0 ? void 0 : _newUnlocks$shop.hasNew
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Upgrades"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "".concat(selectedTab === 'items' ? 'active' : ''),
    onClick: function onClick() {
      setSelectedTab('items');
      setDetailOpened(null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_11__.NewNotificationWrap, {
    isNew: newUnlocks === null || newUnlocks === void 0 || (_newUnlocks$shop2 = newUnlocks['shop']) === null || _newUnlocks$shop2 === void 0 || (_newUnlocks$shop2 = _newUnlocks$shop2.items) === null || _newUnlocks$shop2 === void 0 || (_newUnlocks$shop2 = _newUnlocks$shop2['inventory']) === null || _newUnlocks$shop2 === void 0 ? void 0 : _newUnlocks$shop2.hasNew
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Items"))), unlocks !== null && unlocks !== void 0 && unlocks.courses ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "".concat(selectedTab === 'courses' ? 'active' : ''),
    onClick: function onClick() {
      setSelectedTab('courses');
      setDetailOpened(null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_11__.NewNotificationWrap, {
    isNew: newUnlocks === null || newUnlocks === void 0 || (_newUnlocks$shop3 = newUnlocks['shop']) === null || _newUnlocks$shop3 === void 0 || (_newUnlocks$shop3 = _newUnlocks$shop3.items) === null || _newUnlocks$shop3 === void 0 || (_newUnlocks$shop3 = _newUnlocks$shop3['courses']) === null || _newUnlocks$shop3 === void 0 ? void 0 : _newUnlocks$shop3.hasNew
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Courses"))) : null), isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'highlighted-span',
    onClick: function onClick() {
      return setDetailVisible(true);
    }
  }, "Info")) : null), selectedTab === 'upgrades' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopUpgrades, {
    isMobile: isMobile,
    setItemDetails: setItemDetails,
    purchaseItem: purchaseItem,
    newUnlocks: newUnlocks === null || newUnlocks === void 0 || (_newUnlocks$shop4 = newUnlocks['shop']) === null || _newUnlocks$shop4 === void 0 || (_newUnlocks$shop4 = _newUnlocks$shop4.items) === null || _newUnlocks$shop4 === void 0 || (_newUnlocks$shop4 = _newUnlocks$shop4['upgrades']) === null || _newUnlocks$shop4 === void 0 ? void 0 : _newUnlocks$shop4.items
  }) : null, selectedTab === 'items' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItems, {
    isMobile: isMobile,
    setItemDetails: setItemDetails,
    purchaseItem: purchaseResource,
    newUnlocks: newUnlocks === null || newUnlocks === void 0 || (_newUnlocks$shop5 = newUnlocks['shop']) === null || _newUnlocks$shop5 === void 0 || (_newUnlocks$shop5 = _newUnlocks$shop5.items) === null || _newUnlocks$shop5 === void 0 || (_newUnlocks$shop5 = _newUnlocks$shop5['inventory']) === null || _newUnlocks$shop5 === void 0 ? void 0 : _newUnlocks$shop5.items
  }) : null, selectedTab === 'courses' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CourseItems, {
    isMobile: isMobile,
    setItemDetails: setItemDetails,
    purchaseItem: purchaseCourse,
    newUnlocks: newUnlocks === null || newUnlocks === void 0 || (_newUnlocks$shop6 = newUnlocks['shop']) === null || _newUnlocks$shop6 === void 0 || (_newUnlocks$shop6 = _newUnlocks$shop6.items) === null || _newUnlocks$shop6 === void 0 || (_newUnlocks$shop6 = _newUnlocks$shop6['courses']) === null || _newUnlocks$shop6 === void 0 ? void 0 : _newUnlocks$shop6.items
  }) : null), !isMobile || isDetailVisible || detailOpened ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'item-detail ingame-box detail-blade'
  }, detailOpened ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ItemDetails, {
    itemId: detailOpened,
    category: selectedTab,
    onClose: onCloseDetails,
    onPurchase: selectedTab === 'items' ? purchaseResource : undefined
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GeneralStats, {
    setDetailVisible: setDetailVisible
  })) : null);
};
var ShopUpgrades = function ShopUpgrades(_ref2) {
  var setItemDetails = _ref2.setItemDetails,
    purchaseItem = _ref2.purchaseItem,
    newUnlocks = _ref2.newUnlocks,
    isMobile = _ref2.isMobile;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient2 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient2.onMessage,
    sendData = _useWorkerClient2.sendData;
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      available: [],
      current: undefined,
      isAutomationUnlocked: false,
      showMaxed: false,
      unlocked: {
        total: 0,
        totalComplete: 0
      }
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    itemsData = _useState12[0],
    setItemsData = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    overlayPositions = _useState14[0],
    setOverlayPositions = _useState14[1];
  var handleFlash = function handleFlash(position) {
    setOverlayPositions(function (prev) {
      return [].concat(_toConsumableArray(prev), [position]);
    });
    setTimeout(function () {
      setOverlayPositions(function (prev) {
        return prev.filter(function (p) {
          return p !== position;
        });
      });
    }, 1000);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var interval = setInterval(function () {
      sendData('query-items-data', {});
    }, 100);
    return function () {
      clearInterval(interval);
    };
  }, []);
  onMessage('items-data', function (items) {
    setItemsData(items);
  });
  var toggleAutopurchase = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id, flag) {
    sendData('set-shop-autopurchase', {
      id: id,
      flag: flag
    });
  });
  var toggleShowMaxed = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (flag) {
    sendData('set-shop-show-maxed', {
      flag: flag
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'upgrades-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'sub-heading'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'complete'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Upgrades Completed: ", itemsData.unlocked.totalComplete, " / ", itemsData.unlocked.total)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: 'checkbox',
    checked: itemsData.showMaxed,
    onChange: function onChange() {
      return toggleShowMaxed(!itemsData.showMaxed);
    }
  }), "Show purchased")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'items-cat'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'flex-container'
  }, itemsData.available.map(function (item) {
    var _newUnlocks$all;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_11__.NewNotificationWrap, {
      key: "shop_".concat(item.id),
      id: "shop_".concat(item.id),
      className: 'narrow-wrapper',
      isNew: newUnlocks === null || newUnlocks === void 0 || (_newUnlocks$all = newUnlocks.all) === null || _newUnlocks$all === void 0 || (_newUnlocks$all = _newUnlocks$all.items) === null || _newUnlocks$all === void 0 || (_newUnlocks$all = _newUnlocks$all["shop_".concat(item.id)]) === null || _newUnlocks$all === void 0 ? void 0 : _newUnlocks$all.hasNew
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ItemCard, _extends({
      isMobile: isMobile,
      onFlash: handleFlash,
      key: item.id
    }, item, {
      onPurchase: purchaseItem,
      onShowDetails: setItemDetails,
      toggleAutopurchase: toggleAutopurchase,
      isAutomationUnlocked: itemsData.isAutomationUnlocked
    })));
  }), overlayPositions.map(function (position, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_flash_overlay_jsx__WEBPACK_IMPORTED_MODULE_8__.FlashOverlay, {
      key: index,
      position: position
    });
  })))));
};
var ShopItems = function ShopItems(_ref3) {
  var setItemDetails = _ref3.setItemDetails,
    purchaseItem = _ref3.purchaseItem,
    newUnlocks = _ref3.newUnlocks,
    isMobile = _ref3.isMobile;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient3 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient3.onMessage,
    sendData = _useWorkerClient3.sendData;
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      available: [],
      current: undefined,
      purchaseMultiplier: 1
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    itemsData = _useState16[0],
    setItemsData = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    overlayPositions = _useState18[0],
    setOverlayPositions = _useState18[1];
  var handleFlash = function handleFlash(position) {
    // console.log('Adding flash: ', position);
    setOverlayPositions(function (prev) {
      return [].concat(_toConsumableArray(prev), [position]);
    });
    setTimeout(function () {
      setOverlayPositions(function (prev) {
        return prev.filter(function (p) {
          return p !== position;
        });
      });
    }, 1000);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var interval = setInterval(function () {
      sendData('query-items-resources-data', {});
    }, 100);
    return function () {
      clearInterval(interval);
    };
  }, []);
  var setPurchaseMultiplier = function setPurchaseMultiplier(amount) {
    sendData('set-purchase-multiplier', {
      amount: amount
    });
  };
  onMessage('items-resources-data', function (items) {
    setItemsData(items);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'items-cat'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'heading flex-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Purchase X: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: 'menu'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "".concat(itemsData.purchaseMultiplier === 1 ? 'active' : ''),
    onClick: function onClick() {
      return setPurchaseMultiplier(1);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "".concat(itemsData.purchaseMultiplier === 5 ? 'active' : ''),
    onClick: function onClick() {
      return setPurchaseMultiplier(5);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "".concat(itemsData.purchaseMultiplier === 10 ? 'active' : ''),
    onClick: function onClick() {
      return setPurchaseMultiplier(10);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "10")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "".concat(itemsData.purchaseMultiplier === 25 ? 'active' : ''),
    onClick: function onClick() {
      return setPurchaseMultiplier(25);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "25")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "".concat(itemsData.purchaseMultiplier === 100 ? 'active' : ''),
    onClick: function onClick() {
      return setPurchaseMultiplier(100);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "100")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "".concat(itemsData.purchaseMultiplier > 1000 ? 'active' : ''),
    onClick: function onClick() {
      return setPurchaseMultiplier(1e+8);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Max")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'items-holder'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'flex-container'
  }, itemsData.available.map(function (item) {
    var _newUnlocks$all2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_11__.NewNotificationWrap, {
      key: "shop_".concat(item.id),
      id: "shop_".concat(item.id),
      className: 'narrow-wrapper',
      isNew: newUnlocks === null || newUnlocks === void 0 || (_newUnlocks$all2 = newUnlocks.all) === null || _newUnlocks$all2 === void 0 || (_newUnlocks$all2 = _newUnlocks$all2.items) === null || _newUnlocks$all2 === void 0 || (_newUnlocks$all2 = _newUnlocks$all2["shop_".concat(item.id)]) === null || _newUnlocks$all2 === void 0 ? void 0 : _newUnlocks$all2.hasNew
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ItemResourceCard, _extends({
      isMobile: isMobile,
      onFlash: handleFlash,
      key: item.id
    }, item, {
      onPurchase: purchaseItem,
      onShowDetails: setItemDetails
    })));
  }), overlayPositions.map(function (position, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_flash_overlay_jsx__WEBPACK_IMPORTED_MODULE_8__.FlashOverlay, {
      key: index,
      position: position
    });
  })))));
};
var CourseItems = function CourseItems(_ref4) {
  var setItemDetails = _ref4.setItemDetails,
    purchaseItem = _ref4.purchaseItem,
    newUnlocks = _ref4.newUnlocks,
    isMobile = _ref4.isMobile;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient4 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient4.onMessage,
    sendData = _useWorkerClient4.sendData;
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      available: [],
      current: undefined,
      isAutomationUnlocked: false
    }),
    _useState20 = _slicedToArray(_useState19, 2),
    itemsData = _useState20[0],
    setItemsData = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState22 = _slicedToArray(_useState21, 2),
    overlayPositions = _useState22[0],
    setOverlayPositions = _useState22[1];
  var handleFlash = function handleFlash(position) {
    setOverlayPositions(function (prev) {
      return [].concat(_toConsumableArray(prev), [position]);
    });
    setTimeout(function () {
      setOverlayPositions(function (prev) {
        return prev.filter(function (p) {
          return p !== position;
        });
      });
    }, 1000);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var interval = setInterval(function () {
      sendData('query-course-data', {});
    }, 100);
    return function () {
      clearInterval(interval);
    };
  }, []);
  onMessage('course-data', function (items) {
    setItemsData(items);
  });
  var toggleAutopurchase = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id, flag) {
    sendData('set-course-autopurchase', {
      id: id,
      flag: flag
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'items-cat'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'flex-container'
  }, itemsData.available.map(function (item) {
    var _newUnlocks$all3;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_11__.NewNotificationWrap, {
      key: "course_".concat(item.id),
      id: "course_".concat(item.id),
      className: 'narrow-wrapper',
      isNew: newUnlocks === null || newUnlocks === void 0 || (_newUnlocks$all3 = newUnlocks.all) === null || _newUnlocks$all3 === void 0 || (_newUnlocks$all3 = _newUnlocks$all3.items) === null || _newUnlocks$all3 === void 0 || (_newUnlocks$all3 = _newUnlocks$all3["course_".concat(item.id)]) === null || _newUnlocks$all3 === void 0 ? void 0 : _newUnlocks$all3.hasNew
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CourseCard, _extends({
      isMobile: isMobile,
      onFlash: handleFlash,
      key: item.id
    }, item, {
      onPurchase: purchaseItem,
      onShowDetails: setItemDetails,
      toggleAutopurchase: toggleAutopurchase,
      isAutomationUnlocked: itemsData.isAutomationUnlocked
    })));
  }), overlayPositions.map(function (position, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_flash_overlay_jsx__WEBPACK_IMPORTED_MODULE_8__.FlashOverlay, {
      key: index,
      position: position
    });
  }))));
};
var ItemCard = function ItemCard(_ref5) {
  var id = _ref5.id,
    name = _ref5.name,
    level = _ref5.level,
    max = _ref5.max,
    affordable = _ref5.affordable,
    isLeveled = _ref5.isLeveled,
    isCapped = _ref5.isCapped,
    onFlash = _ref5.onFlash,
    onPurchase = _ref5.onPurchase,
    onShowDetails = _ref5.onShowDetails,
    isAutoPurchase = _ref5.isAutoPurchase,
    toggleAutopurchase = _ref5.toggleAutopurchase,
    isAutomationUnlocked = _ref5.isAutomationUnlocked,
    isMobile = _ref5.isMobile;
  var elementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,_general_hooks_flash__WEBPACK_IMPORTED_MODULE_9__.useFlashOnLevelUp)(isLeveled, onFlash, elementRef);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: elementRef,
    className: "shop-card card item flashable ".concat(affordable.hardLocked ? 'hard-locked' : '', "  ").concat(!affordable.isAffordable ? 'unavailable' : '', " ").concat(isCapped ? 'capped' : ''),
    onMouseEnter: function onMouseEnter() {
      if (!isMobile) onShowDetails(id);
    },
    onMouseLeave: function onMouseLeave() {
      if (!isMobile) onShowDetails(null);
    },
    onClick: function onClick() {
      if (isMobile) onShowDetails(id);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'head'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'title'
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'level'
  }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(level), max ? "/".concat((0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(max)) : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'bottom'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'buttons'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: !affordable.isAffordable || isCapped,
    className: "purchase-button ".concat(isCapped ? 'capped' : ''),
    style: {
      '--progress': "".concat(affordable.percentage * 100, "%")
    },
    onClick: function onClick(e) {
      e.stopPropagation();
      e.preventDefault();
      onPurchase(id);
    }
  }, "Purchase"), isAutomationUnlocked && !isCapped ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
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
  }), "Autobuy") : null)));
};
var ItemResourceCard = function ItemResourceCard(_ref6) {
  var id = _ref6.id,
    name = _ref6.name,
    purchaseMultiplier = _ref6.purchaseMultiplier,
    stock = _ref6.stock,
    level = _ref6.level,
    max = _ref6.max,
    amount = _ref6.amount,
    affordable = _ref6.affordable,
    isLeveled = _ref6.isLeveled,
    onFlash = _ref6.onFlash,
    onPurchase = _ref6.onPurchase,
    onShowDetails = _ref6.onShowDetails,
    isMobile = _ref6.isMobile;
  var elementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,_general_hooks_flash__WEBPACK_IMPORTED_MODULE_9__.useFlashOnLevelUp)(isLeveled, onFlash, elementRef);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: elementRef,
    className: "icon-card item flashable ".concat(affordable.hardLocked ? 'hard-locked' : '', "  ").concat(!affordable.isAffordable ? 'unavailable' : ''),
    onMouseEnter: function onMouseEnter() {
      return isMobile ? null : onShowDetails(id);
    },
    onMouseLeave: function onMouseLeave() {
      return isMobile ? null : onShowDetails(null);
    },
    onClick: function onClick(e) {
      console.log('isMobile', isMobile);
      if (isMobile) {
        onShowDetails(id);
      } else {
        onPurchase(id, e.shiftKey ? 1e9 : purchaseMultiplier);
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_7__.TippyWrapper, {
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'hint-popup'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, name, " ", amount > 0 ? "(".concat((0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(amount), " in inventory)") : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Press to buy x", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(purchaseMultiplier), ". Hold Shift to by max"))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'icon-content'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "icons/resources/".concat(id, ".png"),
    className: 'resource'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'level'
  }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(stock)))));
};
var CourseCard = function CourseCard(_ref7) {
  var toNext = _ref7.toNext,
    id = _ref7.id,
    efficiency = _ref7.efficiency,
    isRunning = _ref7.isRunning,
    name = _ref7.name,
    level = _ref7.level,
    progress = _ref7.progress,
    maxProgress = _ref7.maxProgress,
    max = _ref7.max,
    affordable = _ref7.affordable,
    isLeveled = _ref7.isLeveled,
    onFlash = _ref7.onFlash,
    onPurchase = _ref7.onPurchase,
    onShowDetails = _ref7.onShowDetails,
    isAutoPurchase = _ref7.isAutoPurchase,
    toggleAutopurchase = _ref7.toggleAutopurchase,
    isAutomationUnlocked = _ref7.isAutomationUnlocked,
    isMobile = _ref7.isMobile;
  var elementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,_general_hooks_flash__WEBPACK_IMPORTED_MODULE_9__.useFlashOnLevelUp)(isLeveled, onFlash, elementRef);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: elementRef,
    className: "course-card card item flashable ".concat(isRunning ? ' running' : '', " ").concat(efficiency < 1 ? ' efficiency-dropped lower-eff' : '', "  ").concat(affordable.hardLocked ? 'hard-locked' : '', "  ").concat(!affordable.isAffordable ? 'unavailable' : ''),
    onMouseEnter: function onMouseEnter() {
      return isMobile ? null : onShowDetails(id);
    },
    onMouseLeave: function onMouseLeave() {
      return isMobile ? null : onShowDetails(null);
    },
    onClick: function onClick(e) {
      console.log('isMobile', isMobile);
      if (isMobile) {
        onShowDetails(id);
      } else {
        onPurchase(id, e.shiftKey ? 1e9 : purchaseMultiplier);
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'progress-bg',
    style: {
      width: "".concat(100 * Math.min(1., progress / maxProgress), "%")
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'flex-container two-side-card'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'left'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "icons/courses/".concat(id, ".png"),
    className: 'resource big'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'right'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'head'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'title'
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'level'
  }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(level), max ? "/".concat((0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(max)) : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, isRunning ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'to-next'
  }, "ETA: ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.secondsToString)(toNext)) : null, efficiency < 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'small-hint yellow'
  }, "(", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(100 * efficiency), "%)") : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'bottom'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'buttons'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: !affordable.isAffordable,
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      onPurchase(id, !isRunning);
    }
  }, isRunning ? 'Stop' : 'Start'), isAutomationUnlocked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: 'autobuy-label'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: 'checkbox',
    checked: isAutoPurchase,
    onChange: function onChange() {
      return toggleAutopurchase(id, !isAutoPurchase);
    }
  }), "Autoresume") : null)))));
};
var ItemDetails = function ItemDetails(_ref8) {
  var _item$missingResource, _item$potentialEffect, _item$learningEffects;
  var itemId = _ref8.itemId,
    category = _ref8.category,
    onClose = _ref8.onClose,
    onPurchase = _ref8.onPurchase;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useAppContext2 = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_12__.useAppContext)(),
    isMobile = _useAppContext2.isMobile;
  var _useWorkerClient5 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient5.onMessage,
    sendData = _useWorkerClient5.sendData;
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState24 = _slicedToArray(_useState23, 2),
    item = _useState24[0],
    setDetailOpened = _useState24[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (category === 'upgrades') {
      var interval = setInterval(function () {
        sendData('query-item-details', {
          id: itemId
        });
      }, 100);
      return function () {
        clearInterval(interval);
      };
    } else if (category === 'items') {
      var _interval = setInterval(function () {
        sendData('query-item-resource-details', {
          id: itemId
        });
      }, 100);
      return function () {
        clearInterval(_interval);
      };
    } else if (category === 'courses') {
      var _interval2 = setInterval(function () {
        sendData('query-course-details', {
          id: itemId
        });
      }, 100);
      return function () {
        clearInterval(_interval2);
      };
    }
  }, [itemId]);
  onMessage('item-details', function (items) {
    setDetailOpened(items);
  });
  if (!itemId || !item) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'blade-inner'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'heading flex-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'level-indicator'
  }, "Level ", item.level, " ", item.max ? "of ".concat(item.max) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'description'
  }, item.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'tags-container'
  }, item.tags.map(function (tag) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: tag,
      className: 'tag'
    }, tag);
  }))), item !== null && item !== void 0 && item.missingResource && item.entityEfficiency < 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'hint yellow'
  }, "This course is running ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(100 * item.entityEfficiency), "% efficiency due to missing ", item === null || item === void 0 || (_item$missingResource = item.missingResource) === null || _item$missingResource === void 0 ? void 0 : _item$missingResource.name)) : null, Object.values(item.affordable.affordabilities || {}).length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Cost: (x", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(item.purchaseMultiplier), ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'costs-wrap'
  }, Object.values(item.affordable.affordabilities || {}).map(function (aff) {
    var _aff$id;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_resource_cost_jsx__WEBPACK_IMPORTED_MODULE_6__.ResourceCost, {
      key: (_aff$id = aff.id) !== null && _aff$id !== void 0 ? _aff$id : aff.name,
      affordabilities: aff
    });
  }))) : null, (_item$potentialEffect = item.potentialEffects) !== null && _item$potentialEffect !== void 0 && _item$potentialEffect.length || item.currentEffects ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Effects:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'effects'
  }, item.currentEffects ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_resource_comparison_jsx__WEBPACK_IMPORTED_MODULE_10__.ResourceComparison, {
    effects1: item.currentEffects,
    effects2: item.potentialEffects
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_effects_section_jsx__WEBPACK_IMPORTED_MODULE_5__.EffectsSection, {
    effects: item.potentialEffects,
    maxDisplay: 10
  }))) : null, (_item$learningEffects = item.learningEffects) !== null && _item$learningEffects !== void 0 && _item$learningEffects.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Learning Upkeep:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'effects'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_effects_section_jsx__WEBPACK_IMPORTED_MODULE_5__.EffectsSection, {
    effects: item.learningEffects,
    maxDisplay: 10
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Learning Duration: ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.secondsToString)(item.maxProgress))) : null, isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block buttons flex-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onClose
  }, "Close"), onPurchase ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return onPurchase(item.id);
    }
  }, "Purchase"), item.purchaseMultiplier > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return onPurchase(item.id, item.purchaseMultiplier);
    }
  }, "Purchase x", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(item.purchaseMultiplier)) : null) : null) : null));
};
var GeneralStats = function GeneralStats(_ref9) {
  var category = _ref9.category,
    setDetailVisible = _ref9.setDetailVisible;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useAppContext3 = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_12__.useAppContext)(),
    isMobile = _useAppContext3.isMobile;
  var _useWorkerClient6 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient6.onMessage,
    sendData = _useWorkerClient6.sendData;
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState26 = _slicedToArray(_useState25, 2),
    item = _useState26[0],
    setDetailOpened = _useState26[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sendData('query-general-shop-stats', {
      category: category
    });
    var interval = setInterval(function () {
      sendData('query-general-shop-stats', {
        category: category
      });
    }, 1000);
    return function () {
      clearInterval(interval);
    };
  }, []);
  onMessage('general-shop-stats', function (items) {
    setDetailOpened(items);
  });
  if (!item) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'blade-inner'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "General Stats")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, item.stats.map(function (stat) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'row flex-row'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_7__.TippyWrapper, {
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'hint-popup'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, stat.description))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, stat.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(stat.value)));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'hint'
  }, "Hover over specific item to see it details")), isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block buttons'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return setDetailVisible(false);
    }
  }, "Close")) : null));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/shop/shop.jsx?
