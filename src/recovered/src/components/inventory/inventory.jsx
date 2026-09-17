__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Inventory: () => (/* binding */ Inventory),
/* harmony export */   InventoryCard: () => (/* binding */ InventoryCard),
/* harmony export */   InventoryDetails: () => (/* binding */ InventoryDetails),
/* harmony export */   InventoryStats: () => (/* binding */ InventoryStats)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../general/client */ "./src/general/client.js");
/* harmony import */ var _general_utils_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../general/utils/strings */ "./src/general/utils/strings.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_effects_section_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/effects-section.jsx */ "./src/components/shared/effects-section.jsx");
/* harmony import */ var _shared_circular_progress_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/circular-progress.jsx */ "./src/components/shared/circular-progress.jsx");
/* harmony import */ var _layout_flash_overlay_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout/flash-overlay.jsx */ "./src/components/layout/flash-overlay.jsx");
/* harmony import */ var _general_hooks_flash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../general/hooks/flash */ "./src/general/hooks/flash.js");
/* harmony import */ var _shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/tippy-wrapper.jsx */ "./src/components/shared/tippy-wrapper.jsx");
/* harmony import */ var _shared_rules_list_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/rules-list.jsx */ "./src/components/shared/rules-list.jsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _layout_sidebar_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../layout/sidebar.jsx */ "./src/components/layout/sidebar.jsx");
/* harmony import */ var _shared_resource_comparison_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/resource-comparison.jsx */ "./src/components/shared/resource-comparison.jsx");
/* harmony import */ var _shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/new-notification-wrap.jsx */ "./src/components/shared/new-notification-wrap.jsx");
/* harmony import */ var _shared_stat_row_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/stat-row.jsx */ "./src/components/shared/stat-row.jsx");
/* harmony import */ var _shared_search_field_jsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/search-field.jsx */ "./src/components/shared/search-field.jsx");
/* harmony import */ var _context_ui_context__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../context/ui-context */ "./src/context/ui-context.js");
/* harmony import */ var _shared_pin_resource_jsx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/pin-resource.jsx */ "./src/components/shared/pin-resource.jsx");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectDestructuringEmpty(t) { if (null == t) throw new TypeError("Cannot destructure " + t); }



















var INVENTORY_SEARCH_SCOPES = [{
  id: 'name',
  label: 'Name'
}, {
  id: 'tags',
  label: 'Tags'
}, {
  id: 'resources',
  label: 'resources'
}, {
  id: 'effects',
  label: 'effects'
}];
var Inventory = function Inventory(_ref) {
  _objectDestructuringEmpty(_ref);
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useAppContext = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_17__.useAppContext)(),
    isMobile = _useAppContext.isMobile;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!isMobile),
    _useState2 = _slicedToArray(_useState, 2),
    isDetailVisible = _useState2[0],
    setDetailVisible = _useState2[1];
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      available: [],
      current: undefined,
      itemCategories: [],
      selectedFilterId: 'all',
      automationUnlocked: false,
      details: {},
      searchData: {
        search: ''
      }
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    inventoryData = _useState4[0],
    setItemsData = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    detailOpenedId = _useState6[0],
    setDetailOpenedId = _useState6[1]; // here should be object containing id and rules
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    viewedOpenedId = _useState8[0],
    setViewedOpenedId = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    editData = _useState10[0],
    setEditData = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    viewedData = _useState12[0],
    setViewedData = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    resources = _useState14[0],
    setResources = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isChanged = _useState16[0],
    setChanged = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState18 = _slicedToArray(_useState17, 2),
    newUnlocks = _useState18[0],
    setNewUnlocks = _useState18[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var id = viewedOpenedId !== null && viewedOpenedId !== void 0 ? viewedOpenedId : detailOpenedId === null || detailOpenedId === void 0 ? void 0 : detailOpenedId.id;
    if (id !== null) {
      if (!viewedOpenedId && isChanged) {
        return;
      }
      sendData('query-inventory-details', {
        id: id
      });
    }
  }, [viewedOpenedId, detailOpenedId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var interval = setInterval(function () {
      sendData('query-inventory-data', {});
    }, 100);
    sendData('query-all-resources', {});
    var interval2 = setInterval(function () {
      sendData('query-new-unlocks-notifications', {
        suffix: 'inventory',
        scope: 'inventory'
      });
    }, 1000);
    return function () {
      clearInterval(interval);
      clearInterval(interval2);
    };
  }, []);
  onMessage('new-unlocks-notifications-inventory', function (payload) {
    setNewUnlocks(payload);
  });
  onMessage('all-resources', function (payload) {
    setResources(payload);
  });
  onMessage('inventory-details', function (payload) {
    if (viewedOpenedId) {
      setViewedData(payload);
    } else if (detailOpenedId) {
      setEditData(payload);
      setViewedData(null);
    }
  });
  onMessage('inventory-data', function (inventory) {
    setItemsData(inventory);
  });

  // Handle sell-details messages
  onMessage("sell-details", function (payload) {
    if (editData && payload.id === editData.id) {
      setEditData(function (prevData) {
        return _objectSpread(_objectSpread({}, prevData), {}, {
          isSellable: payload.isSellable,
          maxSell: payload.maxSell
        });
      });
    }
  });

  // Set up interval to query sell details
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var interval = null;
    if (detailOpenedId && editData && editData.isSellable) {
      interval = setInterval(function () {
        sendData("query-sell-details", {
          id: detailOpenedId.id
        });
      }, 500);
    }
    return function () {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [detailOpenedId, editData]);
  var purchaseItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id) {
    var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    sendData('consume-inventory', {
      id: id,
      amount: amount,
      sendDetails: true
    });
    // sendData('query-inventory-details', { id, amount: 1 })
  });
  var setInventoryDetailsEdit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_ref2) {
    var id = _ref2.id,
      name = _ref2.name;
    if (id) {
      if (detailOpenedId && isChanged) {
        if (!confirm("这将丢弃所有更改对于 ".concat(detailOpenedId.name, ". 你确定吗"))) {
          return;
        }
      }
      setEditData(null);
      setViewedOpenedId(null);
      setDetailOpenedId({
        id: id,
        name: name
      });
      setChanged(false);
    }
  }, [isChanged, detailOpenedId]);
  var setInventoryDetailsView = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id) {
    if (!id) {
      setViewedOpenedId(null);
      setViewedData(null);
      return;
    }
    setViewedOpenedId(id);
  });
  var onSetAutoconsumePattern = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (pattern) {
    if (editData) {
      var newEdit = (0,lodash__WEBPACK_IMPORTED_MODULE_11__.cloneDeep)(editData);
      if (!newEdit.autoconsume) {
        newEdit.autoconsume = {};
      }
      if (!newEdit.autoconsume.rules) {
        newEdit.autoconsume.rules = [];
      }
      newEdit.autoconsume.pattern = pattern;
      setEditData(_objectSpread({}, newEdit));
      setChanged(true);
    }
  }, [editData]);
  var onAddAutoconsumeRule = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (editData) {
      var newEdit = (0,lodash__WEBPACK_IMPORTED_MODULE_11__.cloneDeep)(editData);
      ;
      newEdit.autoconsume.rules.push({
        resource_id: resources[0].id,
        condition: 'less_or_eq',
        value_type: 'percentage',
        value: 50
      });
      setEditData(newEdit);
      setChanged(true);
    }
  }, [editData]);
  var onSetAutoconsumeRuleValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (index, key, value) {
    if (editData) {
      console.log('Changing: ', index, key, value);
      var newEdit = (0,lodash__WEBPACK_IMPORTED_MODULE_11__.cloneDeep)(editData);
      newEdit.autoconsume.rules[index] = _objectSpread(_objectSpread({}, newEdit.autoconsume.rules[index]), {}, _defineProperty({}, key, value));
      setEditData(newEdit);
      setChanged(true);
    }
  }, [editData]);
  var onDeleteAutoconsumeRule = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (index) {
    if (editData) {
      var newEdit = (0,lodash__WEBPACK_IMPORTED_MODULE_11__.cloneDeep)(editData);
      newEdit.autoconsume.rules.splice(index, 1);
      setEditData(newEdit);
      setChanged(true);
    }
  }, [editData]);
  var onSetAutosellPattern = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (pattern) {
    if (editData) {
      var newEdit = (0,lodash__WEBPACK_IMPORTED_MODULE_11__.cloneDeep)(editData);
      if (!newEdit.autosell) {
        newEdit.autosell = {};
      }
      if (!newEdit.autosell.rules) {
        newEdit.autosell.rules = [];
      }
      newEdit.autosell.pattern = pattern;
      setEditData(_objectSpread({}, newEdit));
      setChanged(true);
    }
  }, [editData]);
  var onSetAutosellReserved = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (reserved) {
    if (editData) {
      var newEdit = (0,lodash__WEBPACK_IMPORTED_MODULE_11__.cloneDeep)(editData);
      if (!newEdit.autosell) {
        newEdit.autosell = {};
      }
      if (!newEdit.autosell.rules) {
        newEdit.autosell.rules = [];
      }
      newEdit.autosell.reserved = reserved;
      setEditData(_objectSpread({}, newEdit));
      setChanged(true);
    }
  }, [editData]);
  var onToggleAutosell = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (editData) {
      var newEdit = (0,lodash__WEBPACK_IMPORTED_MODULE_11__.cloneDeep)(editData);
      if (!newEdit.autosell) {
        newEdit.autosell = {};
      }
      if (!newEdit.autosell.rules) {
        newEdit.autosell.rules = [];
      }
      newEdit.autosell.isEnabled = !newEdit.autosell.isEnabled;
      setEditData(_objectSpread({}, newEdit));
      setChanged(true);
    }
  }, [editData]);
  var onToggleAutoconsume = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (editData) {
      var newEdit = (0,lodash__WEBPACK_IMPORTED_MODULE_11__.cloneDeep)(editData);
      if (!newEdit.autoconsume) {
        newEdit.autoconsume = {};
      }
      if (!newEdit.autoconsume.rules) {
        newEdit.autoconsume.rules = [];
      }
      newEdit.autoconsume.isEnabled = !newEdit.autoconsume.isEnabled;
      setEditData(_objectSpread({}, newEdit));
      setChanged(true);
    }
  }, [editData]);
  var onAddAutosellRule = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (editData) {
      var newEdit = (0,lodash__WEBPACK_IMPORTED_MODULE_11__.cloneDeep)(editData);
      ;
      newEdit.autosell.rules.push({
        resource_id: (viewedData !== null && viewedData !== void 0 ? viewedData : editData).id,
        condition: 'grt',
        value_type: 'exact',
        value: 5
      });
      setEditData(newEdit);
      setChanged(true);
    }
  }, [editData]);
  var onSetAutosellRuleValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (index, key, value) {
    if (editData) {
      var newEdit = (0,lodash__WEBPACK_IMPORTED_MODULE_11__.cloneDeep)(editData);
      ;
      newEdit.autosell.rules[index] = _objectSpread(_objectSpread({}, newEdit.autosell.rules[index]), {}, _defineProperty({}, key, value));
      setEditData(newEdit);
      setChanged(true);
    }
  }, [editData]);
  var onDeleteAutosellRule = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (index) {
    if (editData) {
      var newEdit = (0,lodash__WEBPACK_IMPORTED_MODULE_11__.cloneDeep)(editData);
      newEdit.autosell.rules.splice(index, 1);
      setEditData(newEdit);
      setChanged(true);
    }
  }, [editData]);
  var onSave = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    // console.log('saving: ', editData);
    sendData('save-inventory-settings', editData);
    console.log('setDet changed to false onSave!');
    setChanged(false);
  });
  var onCancel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setViewedOpenedId(null);
    setDetailOpenedId(null);
    setEditData(null);
    setViewedData(null);
    setChanged(false);
    console.log('setDet changed to false onCancel!');
  });
  var onSell = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id, amount) {
    sendData('sell-inventory', {
      id: id,
      amount: amount
    });
  });
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState20 = _slicedToArray(_useState19, 2),
    overlayPositions = _useState20[0],
    setOverlayPositions = _useState20[1];
  var handleFlash = function handleFlash(position) {
    console.log('Adding flash: ', position);
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
  var setItemsFilter = function setItemsFilter(filterId) {
    sendData('set-selected-inventory-filter', {
      filterId: filterId
    });
  };
  var setSearch = function setSearch(searchData) {
    console.log('SetSearch: ', searchData);
    sendData('set-inventory-search', {
      searchData: searchData
    });
  };
  var onTogglePinned = function onTogglePinned(id, flag) {
    console.log('toggle-pinned: ', id, flag);
    sendData('set-resource-pinned', {
      id: id,
      flag: flag
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'inventory-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'ingame-box inventory'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'categories flex-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: 'menu'
  }, inventoryData.itemCategories.map(function (category) {
    var _newUnlocks$inventory;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: category.id,
      className: "category ".concat(category.isSelected ? 'active' : ''),
      onClick: function onClick() {
        return setItemsFilter(category.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_14__.NewNotificationWrap, {
      isNew: (_newUnlocks$inventory = newUnlocks.inventory) === null || _newUnlocks$inventory === void 0 || (_newUnlocks$inventory = _newUnlocks$inventory.items) === null || _newUnlocks$inventory === void 0 || (_newUnlocks$inventory = _newUnlocks$inventory.all) === null || _newUnlocks$inventory === void 0 || (_newUnlocks$inventory = _newUnlocks$inventory.items) === null || _newUnlocks$inventory === void 0 || (_newUnlocks$inventory = _newUnlocks$inventory[category.id]) === null || _newUnlocks$inventory === void 0 ? void 0 : _newUnlocks$inventory.hasNew
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, category.name, "(", category.items.length, ")")));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'additional-filters'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_search_field_jsx__WEBPACK_IMPORTED_MODULE_16__.SearchField, {
    placeholder: 'Search',
    value: inventoryData.searchData || '',
    onSetValue: function onSetValue(val) {
      return setSearch(val);
    },
    scopes: INVENTORY_SEARCH_SCOPES
  })), isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'highlighted-span',
    onClick: function onClick() {
      return setDetailVisible(true);
    }
  }, "Info")) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'inventory-items-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'flex-container'
  }, inventoryData.available.map(function (item) {
    var _newUnlocks$inventory2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_14__.NewNotificationWrap, {
      key: "inventory_".concat(item.id),
      id: "inventory_".concat(item.id),
      className: 'narrow-wrapper',
      isNew: (_newUnlocks$inventory2 = newUnlocks.inventory) === null || _newUnlocks$inventory2 === void 0 || (_newUnlocks$inventory2 = _newUnlocks$inventory2.items) === null || _newUnlocks$inventory2 === void 0 || (_newUnlocks$inventory2 = _newUnlocks$inventory2.all) === null || _newUnlocks$inventory2 === void 0 || (_newUnlocks$inventory2 = _newUnlocks$inventory2.items) === null || _newUnlocks$inventory2 === void 0 || (_newUnlocks$inventory2 = _newUnlocks$inventory2[inventoryData.selectedFilterId]) === null || _newUnlocks$inventory2 === void 0 || (_newUnlocks$inventory2 = _newUnlocks$inventory2.items) === null || _newUnlocks$inventory2 === void 0 || (_newUnlocks$inventory2 = _newUnlocks$inventory2["inventory_".concat(item.id)]) === null || _newUnlocks$inventory2 === void 0 ? void 0 : _newUnlocks$inventory2.hasNew
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InventoryCard, _extends({
      key: item.id,
      isSelected: item.id === (detailOpenedId === null || detailOpenedId === void 0 ? void 0 : detailOpenedId.id),
      isChanged: isChanged
    }, item, {
      onPurchase: purchaseItem,
      onFlash: handleFlash,
      onShowDetails: setInventoryDetailsView,
      onEditConfig: setInventoryDetailsEdit,
      isMobile: isMobile
    })));
  }), overlayPositions.map(function (position, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_flash_overlay_jsx__WEBPACK_IMPORTED_MODULE_7__.FlashOverlay, {
      key: index,
      position: position
    });
  }))))), !isMobile || isDetailVisible || editData || viewedData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'item-detail ingame-box detail-blade'
  }, editData || viewedData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InventoryDetails, {
    isChanged: isChanged,
    editData: editData,
    viewedData: viewedData,
    resources: resources,
    onAddAutoconsumeRule: onAddAutoconsumeRule,
    onSetAutoconsumeRuleValue: onSetAutoconsumeRuleValue,
    onDeleteAutoconsumeRule: onDeleteAutoconsumeRule,
    onAddAutosellRule: onAddAutosellRule,
    onSetAutosellRuleValue: onSetAutosellRuleValue,
    onDeleteAutosellRule: onDeleteAutosellRule,
    onSetAutoconsumePattern: onSetAutoconsumePattern,
    onSetAutosellReserved: onSetAutosellReserved,
    onSetAutosellPattern: onSetAutosellPattern,
    onToggleAutoconsume: onToggleAutoconsume,
    onToggleAutosell: onToggleAutosell,
    onSave: onSave,
    onCancel: onCancel,
    onSell: onSell,
    automationUnlocked: inventoryData.automationUnlocked,
    onConsume: purchaseItem,
    onTogglePinned: onTogglePinned
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InventoryStats, {
    details: inventoryData.details,
    setDetailVisible: setDetailVisible
  })) : null);
};
var InventoryCard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function (_ref3) {
  var isChanged = _ref3.isChanged,
    allowMultiConsume = _ref3.allowMultiConsume,
    isConsumable = _ref3.isConsumable,
    isRare = _ref3.isRare,
    isSelected = _ref3.isSelected,
    id = _ref3.id,
    name = _ref3.name,
    amount = _ref3.amount,
    balance = _ref3.balance,
    breakDown = _ref3.breakDown,
    isConsumed = _ref3.isConsumed,
    cooldownProg = _ref3.cooldownProg,
    cooldown = _ref3.cooldown,
    onFlash = _ref3.onFlash,
    onPurchase = _ref3.onPurchase,
    onShowDetails = _ref3.onShowDetails,
    onEditConfig = _ref3.onEditConfig,
    isMobile = _ref3.isMobile;
  var elementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,_general_hooks_flash__WEBPACK_IMPORTED_MODULE_8__.useFlashOnLevelUp)(isConsumed, onFlash, elementRef);
  var handleClick = function handleClick(e) {
    if (e.button === 0) {
      // Left-click
      onEditConfig({
        id: id,
        name: name
      });
    }
  };
  var handleContextMenu = function handleContextMenu(e) {
    e.preventDefault(); // Prevents the default context menu
    console.log('Triger onpurchase: ', id);
    if (!isConsumable) return;
    var amt = 1;
    if (allowMultiConsume) {
      if (e.shiftKey) amt = amount;
      if (e.ctrlKey && amount >= 1) amt = Math.max(0.1 * amount, 1);
    }
    onPurchase(id, amt); // Your custom right-click action
  };

  // RERENDERING
  // console.log('Item: ', id, cooldownProg, cooldown);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: elementRef,
    className: "icon-card item bigger flashable ".concat(isSelected ? 'selected' : '', " ").concat(isRare ? 'bluish' : ''),
    onMouseEnter: function onMouseEnter() {
      return !isMobile ? onShowDetails(id) : null;
    },
    onMouseLeave: function onMouseLeave() {
      return !isMobile ? onShowDetails(null) : null;
    },
    onClick: handleClick,
    onContextMenu: handleContextMenu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_9__.TippyWrapper, {
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'hint-popup'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, name, "(", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(amount), ")"), breakDown ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_sidebar_jsx__WEBPACK_IMPORTED_MODULE_12__.BreakDown, {
      breakDown: breakDown
    }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Balance: ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(balance)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Left click to select"), isConsumable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Right click to consume") : null, isConsumable && allowMultiConsume && amount > 10 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Right click + CTRL to consume ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(0.1 * amount)) : null, isConsumable && allowMultiConsume ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Right click + SHIFT to consume all") : null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'icon-content'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_circular_progress_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    progress: cooldownProg
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "icons/resources/".concat(id, ".png"),
    className: 'resource'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'level'
  }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(amount)))));
}, function (prevProps, currProps) {
  if (prevProps.id !== currProps.id) {
    return false;
  }
  if (prevProps.amount !== currProps.amount) {
    return false;
  }
  if (prevProps.cooldownProg !== currProps.cooldownProg) {
    return false;
  }
  if (prevProps.isConsumed !== currProps.isConsumed) {
    return false;
  }
  if (prevProps.isChanged !== currProps.isChanged) {
    return false;
  }
  if (prevProps.isSelected !== currProps.isSelected) {
    return false;
  }
  // console.log('Rerender: ', prevProps, curr);
  return true;
});
var InventoryDetails = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function (_ref4) {
  var _item$effects, _item$autoconsume, _item$autoconsume2, _item$autoconsume3, _item$autoconsume4, _item$autoconsume5, _item$autoconsume6, _item$autosell, _item$autosell2, _item$autosell3, _item$autosell4, _item$autosell5, _item$autosell6, _item$autosell7;
  var isChanged = _ref4.isChanged,
    editData = _ref4.editData,
    viewedData = _ref4.viewedData,
    resources = _ref4.resources,
    onAddAutoconsumeRule = _ref4.onAddAutoconsumeRule,
    onSetAutoconsumeRuleValue = _ref4.onSetAutoconsumeRuleValue,
    onDeleteAutoconsumeRule = _ref4.onDeleteAutoconsumeRule,
    onAddAutosellRule = _ref4.onAddAutosellRule,
    onSetAutosellRuleValue = _ref4.onSetAutosellRuleValue,
    onDeleteAutosellRule = _ref4.onDeleteAutosellRule,
    onSave = _ref4.onSave,
    onCancel = _ref4.onCancel,
    onSell = _ref4.onSell,
    onSetAutosellPattern = _ref4.onSetAutosellPattern,
    onSetAutoconsumePattern = _ref4.onSetAutoconsumePattern,
    onSetAutosellReserved = _ref4.onSetAutosellReserved,
    onToggleAutoconsume = _ref4.onToggleAutoconsume,
    onToggleAutosell = _ref4.onToggleAutosell,
    automationUnlocked = _ref4.automationUnlocked,
    onConsume = _ref4.onConsume,
    onTogglePinned = _ref4.onTogglePinned;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient2 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    sendData = _useWorkerClient2.sendData,
    onMessage = _useWorkerClient2.onMessage;
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState22 = _slicedToArray(_useState21, 2),
    details = _useState22[0],
    setDetails = _useState22[1];
  var item = viewedData ? viewedData : editData;
  var isEditing = !!editData && !viewedData;
  if (!item) return null;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (item) {
      sendData('query-inventory-details', {
        id: item.id,
        prefix: 'detail-blade'
      });
    }
  }, [item]);

  // console.log('ItemReceived: ', item);

  onMessage('detail-blade-inventory-details', function (data) {
    setDetails(data);
  });
  var setAutoconsumePattern = function setAutoconsumePattern(pattern) {
    onSetAutoconsumePattern(pattern);
  };
  var addAutoconsumeRule = function addAutoconsumeRule() {
    onAddAutoconsumeRule();
  };
  var setAutoconsumeRuleValue = function setAutoconsumeRuleValue(index, key, value) {
    console.log('Setting: ', key, value);
    onSetAutoconsumeRuleValue(index, key, value);
  };
  var deleteAutoconsumeRule = function deleteAutoconsumeRule(index) {
    onDeleteAutoconsumeRule(index);
  };
  var setAutosellPattern = function setAutosellPattern(pattern) {
    onSetAutosellPattern(pattern);
  };
  var addAutosellRule = function addAutosellRule() {
    onAddAutosellRule();
  };
  var setAutosellRuleValue = function setAutosellRuleValue(index, key, value) {
    onSetAutosellRuleValue(index, key, value);
  };
  var deleteAutosellRule = function deleteAutosellRule(index) {
    onDeleteAutosellRule(index);
  };
  var setReservedValue = function setReservedValue(reserved) {
    onSetAutosellReserved(reserved);
  };
  var toggleAutosell = function toggleAutosell() {
    onToggleAutosell();
  };
  var toggleAutoconsume = function toggleAutoconsume() {
    onToggleAutoconsume();
  };
  var consumeItem = function consumeItem() {
    onConsume(item.id);
  };
  var togglePinned = function togglePinned() {
    onTogglePinned(item.id, !(details || item).isPinned);
  };

  //console.log('item?.autoconsume: ', item?.autoconsume);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'blade-inner'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'inner-heading flex-container flex-row'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, item.name, " (x", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(item.amount), ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_pin_resource_jsx__WEBPACK_IMPORTED_MODULE_18__.PinResource, {
    id: item.id,
    isPinned: details === null || details === void 0 ? void 0 : details.isPinned
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }))), item !== null && item !== void 0 && (_item$effects = item.effects) !== null && _item$effects !== void 0 && _item$effects.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Effects on usage:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'effects'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_effects_section_jsx__WEBPACK_IMPORTED_MODULE_5__.EffectsSection, {
    effects: item.effects
  }))) : null, item.potentialPermanentEffects ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Permanent Effects:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'effects'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_resource_comparison_jsx__WEBPACK_IMPORTED_MODULE_13__.ResourceComparison, {
    effects1: item.permanentEffects,
    effects2: item.potentialPermanentEffects
  }))) : null, item.duration ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Effects lasting: ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.secondsToString)(item.duration)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'effects'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_effects_section_jsx__WEBPACK_IMPORTED_MODULE_5__.EffectsSection, {
    effects: item.potentialEffects
  }))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, item.consumptionCooldown ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'flex-container consumption-block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'stats'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Consumption Cooldown: ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.secondsToString)(item.consumptionCooldown)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Consumed amount: ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(item.numConsumed))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'consume-block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: consumeItem,
    disabled: (details === null || details === void 0 ? void 0 : details.currentCooldown) > 0 || (details === null || details === void 0 ? void 0 : details.currentDuration) > 0
  }, "Consume"), details !== null && details !== void 0 && details.currentDuration ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'small'
  }, "Running: ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.secondsToString)(details === null || details === void 0 ? void 0 : details.currentDuration)) : null, details !== null && details !== void 0 && details.currentCooldown ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'small'
  }, "Cooldown: ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.secondsToString)(details === null || details === void 0 ? void 0 : details.currentCooldown)) : null)) : null, item.isSellable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Sold amount: ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(item.soldAmount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Coins Earned: ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(item.coinsEarned))) : null), item.isConsumable && automationUnlocked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'autoconsume-setting block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'rules-header flex-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Autoconsumption rules: ", (_item$autoconsume = item.autoconsume) !== null && _item$autoconsume !== void 0 && (_item$autoconsume = _item$autoconsume.rules) !== null && _item$autoconsume !== void 0 && _item$autoconsume.length ? null : 'None'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: 'checkbox',
    checked: (_item$autoconsume2 = item.autoconsume) === null || _item$autoconsume2 === void 0 ? void 0 : _item$autoconsume2.isEnabled,
    onChange: toggleAutoconsume
  }), (_item$autoconsume3 = item.autoconsume) !== null && _item$autoconsume3 !== void 0 && _item$autoconsume3.isEnabled ? ' ON' : ' OFF'), isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: addAutoconsumeRule
  }, "Add rule (AND)") : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_rules_list_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
    prefix: 'autoconsume',
    isEditing: isEditing,
    rules: ((_item$autoconsume4 = item.autoconsume) === null || _item$autoconsume4 === void 0 ? void 0 : _item$autoconsume4.rules) || [],
    resources: resources,
    pattern: (_item$autoconsume5 = item.autoconsume) === null || _item$autoconsume5 === void 0 ? void 0 : _item$autoconsume5.pattern,
    deleteRule: deleteAutoconsumeRule,
    setRuleValue: setAutoconsumeRuleValue,
    setPattern: setAutoconsumePattern,
    isAutoCheck: (_item$autoconsume6 = item.autoconsume) === null || _item$autoconsume6 === void 0 ? void 0 : _item$autoconsume6.isEnabled
  })) : null, item.isSellable && automationUnlocked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'autoconsume-setting block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'rules-header flex-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Autosell rules: ", (_item$autosell = item.autosell) !== null && _item$autosell !== void 0 && (_item$autosell = _item$autosell.rules) !== null && _item$autosell !== void 0 && _item$autosell.length ? null : 'None'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: 'checkbox',
    checked: (_item$autosell2 = item.autosell) === null || _item$autosell2 === void 0 ? void 0 : _item$autosell2.isEnabled,
    onChange: toggleAutosell
  }), (_item$autosell3 = item.autosell) !== null && _item$autosell3 !== void 0 && _item$autosell3.isEnabled ? ' ON' : ' OFF'), isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: addAutosellRule
  }, "Add rule (AND)") : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_rules_list_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
    prefix: 'autosell',
    isEditing: isEditing,
    rules: ((_item$autosell4 = item.autosell) === null || _item$autosell4 === void 0 ? void 0 : _item$autosell4.rules) || [],
    pattern: (_item$autosell5 = item.autosell) === null || _item$autosell5 === void 0 ? void 0 : _item$autosell5.pattern,
    resources: resources,
    deleteRule: deleteAutosellRule,
    setRuleValue: setAutosellRuleValue,
    setPattern: setAutosellPattern,
    isAutoCheck: (_item$autosell6 = item.autosell) === null || _item$autosell6 === void 0 ? void 0 : _item$autosell6.isEnabled
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'autosell-amount flex-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Reserved Amount:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: 'number',
    onChange: function onChange(e) {
      return setReservedValue(+e.target.value);
    },
    value: ((_item$autosell7 = item.autosell) === null || _item$autosell7 === void 0 ? void 0 : _item$autosell7.reserved) || 0
  }))) : null, item.isSellable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block sell-block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'text-desc'
  }, "Sell price: ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(item.sellPrice)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'buttons flex-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: item.maxSell < 1,
    onClick: function onClick() {
      return onSell(item.id, 1);
    }
  }, "Sell"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: item.maxSell < 1,
    onClick: function onClick() {
      return onSell(item.id, item.maxSell);
    }
  }, "Sell max (x", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(item.maxSell), ")"))) : null, isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'buttons flex-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: !isChanged,
    onClick: onSave
  }, "Save"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_9__.TippyWrapper, {
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'hint-popup'
    }, "Pinning item will make it visible at resources panel")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: togglePinned
  }, details !== null && details !== void 0 && details.isPinned ? 'Unpin' : 'Pin')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onCancel
  }, "Cancel")) : null));
}, function (prevProps, currentProps) {
  if (prevProps.isChanged !== currentProps.isChanged) {
    //console.log('isChanged: ', prevProps.isChanged, currentProps.isChanged)
    return false;
  }
  if (prevProps.editData !== currentProps.editData) {
    return false;
  }
  if (prevProps.viewedData !== currentProps.viewedData) {
    //console.log('viewedChng: ', prevProps.viewedData, currentProps.viewedData)
    return false;
  }
  return true;
});
var InventoryStats = function InventoryStats(_ref5) {
  var details = _ref5.details,
    setDetailVisible = _ref5.setDetailVisible;
  var _useAppContext2 = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_17__.useAppContext)(),
    isMobile = _useAppContext2.isMobile;
  // Масив статистик, які потрібно відобразити
  var statsToDisplay = [
  /*details.metabolism_rate,
  details.cooldown_bonus,*/
  details.bargaining, details.bargaining_mod, details.shop_max_stock, details.shop_stock_renew_rate
  // Додайте інші статистики за потребою
  ];
  var hasEffect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (stat) {
    if (!(stat !== null && stat !== void 0 && stat.value)) return false;
    return !stat.isMultiplier || Math.abs((stat === null || stat === void 0 ? void 0 : stat.value) - 1.0) > 1.e-7;
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'blade-inner'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "General Stats:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'effects'
  }, statsToDisplay.map(function (stat) {
    return hasEffect(stat) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_stat_row_jsx__WEBPACK_IMPORTED_MODULE_15__["default"], {
      key: stat.id,
      stat: stat
    }) : null;
  }))), isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block buttons'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return setDetailVisible(false);
    }
  }, "Close")) : null));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/inventory/inventory.jsx?
