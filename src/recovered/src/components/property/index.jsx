__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralStats: () => (/* binding */ GeneralStats),
/* harmony export */   ItemDetails: () => (/* binding */ ItemDetails),
/* harmony export */   Property: () => (/* binding */ Property)
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
/* harmony import */ var _furniture_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./furniture.jsx */ "./src/components/property/furniture.jsx");
/* harmony import */ var _shared_resource_comparison_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/resource-comparison.jsx */ "./src/components/shared/resource-comparison.jsx");
/* harmony import */ var _accessories_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./accessories.jsx */ "./src/components/property/accessories.jsx");
/* harmony import */ var _shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/new-notification-wrap.jsx */ "./src/components/shared/new-notification-wrap.jsx");
/* harmony import */ var _general_hooks_local_cache__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../general/hooks/local-cache */ "./src/general/hooks/local-cache.js");
/* harmony import */ var _amplifiers_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./amplifiers.jsx */ "./src/components/property/amplifiers.jsx");
/* harmony import */ var _context_ui_context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../context/ui-context */ "./src/context/ui-context.js");
/* harmony import */ var _shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/tippy-wrapper.jsx */ "./src/components/shared/tippy-wrapper.jsx");
/* harmony import */ var _shared_stat_row_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/stat-row.jsx */ "./src/components/shared/stat-row.jsx");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectDestructuringEmpty(t) { if (null == t) throw new TypeError("Cannot destructure " + t); }
















var Property = function Property(_ref) {
  var _newUnlocks$property, _newUnlocks$property2, _newUnlocks$property3, _newUnlocks$property4, _newUnlocks$property5, _newUnlocks$property6;
  _objectDestructuringEmpty(_ref);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    detailOpened = _useState2[0],
    setDetailOpened = _useState2[1];
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    unlocks = _useState4[0],
    setUnlocksData = _useState4[1];
  var _useUICache = (0,_general_hooks_local_cache__WEBPACK_IMPORTED_MODULE_11__.useUICache)('property_tab', 'furniture'),
    _useUICache2 = _slicedToArray(_useUICache, 2),
    selectedTab = _useUICache2[0],
    setSelectedTab = _useUICache2[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    newUnlocks = _useState6[0],
    setNewUnlocks = _useState6[1];
  var _useAppContext = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_13__.useAppContext)(),
    isMobile = _useAppContext.isMobile;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sendData('query-unlocks', {
      prefix: 'property'
    });
    var interval = setInterval(function () {
      sendData('query-unlocks', {
        prefix: 'property'
      });
      sendData('query-new-unlocks-notifications', {
        suffix: 'property',
        scope: 'property'
      });
    }, 1000);
    return function () {
      clearInterval(interval);
    };
  }, []);
  onMessage('unlocks-property', function (unlocks) {
    setUnlocksData(unlocks);
    var mapToPages = {
      furniture: 'property',
      accessory: 'crafting',
      amplifier: 'amplifiers'
    };
    if (!unlocks[mapToPages[selectedTab]]) {
      var acceptable = Object.entries(mapToPages).filter(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
          tab = _ref3[0],
          unlock = _ref3[1];
        return unlocks[unlock];
      });
      if (acceptable.length) {
        setSelectedTab(acceptable[0][0]);
      }
    }
  });
  onMessage('new-unlocks-notifications-property', function (payload) {
    // console.log('Received unlocks: ', payload);
    setNewUnlocks(payload);
  });
  var purchaseItem = function purchaseItem(id) {
    sendData('purchase-furniture', {
      id: id,
      filterId: selectedTab
    });
  };
  var deleteItem = function deleteItem(id) {
    sendData('delete-furniture', {
      id: id,
      filterId: selectedTab
    });
  };
  var setItemDetails = function setItemDetails(id) {
    sendData('set-monitored', {
      scope: 'effects',
      type: selectedTab,
      id: id
    });
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
    className: 'menu-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: 'menu'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "".concat(selectedTab === 'furniture' ? 'active' : ''),
    onClick: function onClick() {
      setSelectedTab('furniture');
      setDetailOpened(null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_10__.NewNotificationWrap, {
    isNew: newUnlocks === null || newUnlocks === void 0 || (_newUnlocks$property = newUnlocks['property']) === null || _newUnlocks$property === void 0 || (_newUnlocks$property = _newUnlocks$property.items) === null || _newUnlocks$property === void 0 || (_newUnlocks$property = _newUnlocks$property['furniture']) === null || _newUnlocks$property === void 0 ? void 0 : _newUnlocks$property.hasNew
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Furniture"))), unlocks.crafting ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "".concat(selectedTab === 'accessory' ? 'active' : ''),
    onClick: function onClick() {
      setSelectedTab('accessory');
      setDetailOpened(null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_10__.NewNotificationWrap, {
    isNew: newUnlocks === null || newUnlocks === void 0 || (_newUnlocks$property2 = newUnlocks['property']) === null || _newUnlocks$property2 === void 0 || (_newUnlocks$property2 = _newUnlocks$property2.items) === null || _newUnlocks$property2 === void 0 || (_newUnlocks$property2 = _newUnlocks$property2['accessory']) === null || _newUnlocks$property2 === void 0 ? void 0 : _newUnlocks$property2.hasNew
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Accessories"))) : null, unlocks.amplifiers ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "".concat(selectedTab === 'amplifier' ? 'active' : ''),
    onClick: function onClick() {
      setSelectedTab('amplifier');
      setDetailOpened(null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_10__.NewNotificationWrap, {
    isNew: newUnlocks === null || newUnlocks === void 0 || (_newUnlocks$property3 = newUnlocks['property']) === null || _newUnlocks$property3 === void 0 || (_newUnlocks$property3 = _newUnlocks$property3.items) === null || _newUnlocks$property3 === void 0 || (_newUnlocks$property3 = _newUnlocks$property3['amplifier']) === null || _newUnlocks$property3 === void 0 ? void 0 : _newUnlocks$property3.hasNew
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Amplifiers"))) : null)), selectedTab === 'furniture' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_furniture_jsx__WEBPACK_IMPORTED_MODULE_7__.FurnitureUpgrades, {
    setItemDetails: setItemDetails,
    purchaseItem: purchaseItem,
    deleteItem: deleteItem,
    newUnlocks: newUnlocks === null || newUnlocks === void 0 || (_newUnlocks$property4 = newUnlocks['property']) === null || _newUnlocks$property4 === void 0 || (_newUnlocks$property4 = _newUnlocks$property4.items) === null || _newUnlocks$property4 === void 0 || (_newUnlocks$property4 = _newUnlocks$property4['furniture']) === null || _newUnlocks$property4 === void 0 ? void 0 : _newUnlocks$property4.items,
    isMobile: isMobile
  }) : null, selectedTab === 'accessory' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_accessories_jsx__WEBPACK_IMPORTED_MODULE_9__.AccessoryUpgrades, {
    setItemDetails: setItemDetails,
    purchaseItem: purchaseItem,
    deleteItem: deleteItem,
    newUnlocks: newUnlocks === null || newUnlocks === void 0 || (_newUnlocks$property5 = newUnlocks['property']) === null || _newUnlocks$property5 === void 0 || (_newUnlocks$property5 = _newUnlocks$property5.items) === null || _newUnlocks$property5 === void 0 || (_newUnlocks$property5 = _newUnlocks$property5['accessory']) === null || _newUnlocks$property5 === void 0 ? void 0 : _newUnlocks$property5.items,
    isMobile: isMobile
  }) : null, selectedTab === 'amplifier' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_amplifiers_jsx__WEBPACK_IMPORTED_MODULE_12__.AmplifiersUpgrades, {
    setItemDetails: setItemDetails,
    purchaseItem: purchaseItem,
    deleteItem: deleteItem,
    newUnlocks: newUnlocks === null || newUnlocks === void 0 || (_newUnlocks$property6 = newUnlocks['property']) === null || _newUnlocks$property6 === void 0 || (_newUnlocks$property6 = _newUnlocks$property6.items) === null || _newUnlocks$property6 === void 0 || (_newUnlocks$property6 = _newUnlocks$property6['amplifier']) === null || _newUnlocks$property6 === void 0 ? void 0 : _newUnlocks$property6.items,
    isMobile: isMobile
  }) : null), !isMobile || detailOpened ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'item-detail ingame-box detail-blade'
  }, detailOpened ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ItemDetails, {
    itemId: detailOpened,
    category: selectedTab,
    setItemDetails: setItemDetails,
    purchaseItem: purchaseItem
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GeneralStats, {
    setDetailVisible: setDetailOpened
  })) : null);
};
var ItemDetails = function ItemDetails(_ref4) {
  var itemId = _ref4.itemId,
    category = _ref4.category,
    setItemDetails = _ref4.setItemDetails,
    purchaseItem = _ref4.purchaseItem;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient2 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient2.onMessage,
    sendData = _useWorkerClient2.sendData;
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    item = _useState8[0],
    setDetailOpened = _useState8[1];
  var _useAppContext2 = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_13__.useAppContext)(),
    isMobile = _useAppContext2.isMobile;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (category === 'furniture' || category === 'accessory' || category === 'amplifier') {
      var interval = setInterval(function () {
        sendData('query-furniture-details', {
          id: itemId
        });
      }, 100);
      return function () {
        clearInterval(interval);
      };
    }
  });
  onMessage('furniture-details', function (items) {
    setDetailOpened(items);
  });
  if (!itemId || !item) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'blade-inner'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Cost:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'costs-wrap'
  }, Object.values(item.affordable.affordabilities || {}).map(function (aff) {
    var _aff$id;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_resource_cost_jsx__WEBPACK_IMPORTED_MODULE_6__.ResourceCost, {
      key: (_aff$id = aff.id) !== null && _aff$id !== void 0 ? _aff$id : aff.name,
      affordabilities: aff
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Effects:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'effects'
  }, item.currentEffects ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_resource_comparison_jsx__WEBPACK_IMPORTED_MODULE_8__.ResourceComparison, {
    effects1: item.currentEffects,
    effects2: item.potentialEffects
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_effects_section_jsx__WEBPACK_IMPORTED_MODULE_5__.EffectsSection, {
    effects: item.potentialEffects
  }))), isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'buttons flex-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: !item.affordable.isAffordable,
    onClick: function onClick(e) {
      return purchaseItem(item.id);
    }
  }, "Purchase"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick(e) {
      return setItemDetails(null);
    }
  }, "Close")) : null));
};
var GeneralStats = function GeneralStats(_ref5) {
  var _item$accessories, _item$amplifiers;
  var setDetailVisible = _ref5.setDetailVisible;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useAppContext3 = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_13__.useAppContext)(),
    isMobile = _useAppContext3.isMobile;
  var _useWorkerClient3 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient3.onMessage,
    sendData = _useWorkerClient3.sendData;
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    item = _useState10[0],
    setDetailOpened = _useState10[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sendData('query-general-property-stats', {});
    var interval = setInterval(function () {
      sendData('query-general-property-stats', {});
    }, 1000);
    return function () {
      clearInterval(interval);
    };
  }, []);
  onMessage('general-property-stats', function (items) {
    setDetailOpened(items);
  });
  var highLightMagicSchools = function highLightMagicSchools(id) {
    //sendData('set-monitored', { scope: 'spells', type: 'school_efficiency', id });
  };
  if (!item) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'blade-inner'
  }, item.property.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Property Stats")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, item.property.map(function (stat) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'row flex-row'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_14__.TippyWrapper, {
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'hint-popup'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, stat.description))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, stat.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(stat.value)));
  }))) : null, (_item$accessories = item.accessories) !== null && _item$accessories !== void 0 && _item$accessories.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Accessories")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, item.accessories.map(function (stat) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_stat_row_jsx__WEBPACK_IMPORTED_MODULE_15__["default"], {
      onHover: highLightMagicSchools,
      stat: stat
    });
  }))) : null, (_item$amplifiers = item.amplifiers) !== null && _item$amplifiers !== void 0 && _item$amplifiers.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Amplifiers")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, item.amplifiers.map(function (stat) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_stat_row_jsx__WEBPACK_IMPORTED_MODULE_15__["default"], {
      onHover: highLightMagicSchools,
      stat: stat
    });
  }))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/property/index.jsx?
