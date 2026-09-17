__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessoryUpgrades: () => (/* binding */ AccessoryUpgrades),
/* harmony export */   ItemCard: () => (/* binding */ ItemCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../general/client */ "./src/general/client.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _general_utils_strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../general/utils/strings */ "./src/general/utils/strings.js");
/* harmony import */ var _layout_flash_overlay_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout/flash-overlay.jsx */ "./src/components/layout/flash-overlay.jsx");
/* harmony import */ var _general_hooks_flash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../general/hooks/flash */ "./src/general/hooks/flash.js");
/* harmony import */ var _shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/new-notification-wrap.jsx */ "./src/components/shared/new-notification-wrap.jsx");
/* harmony import */ var _shared_search_field_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/search-field.jsx */ "./src/components/shared/search-field.jsx");
/* harmony import */ var _shared_custom_filter_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/custom-filter.jsx */ "./src/components/shared/custom-filter.jsx");
/* harmony import */ var _shared_custom_filter_list_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/custom-filter-list.jsx */ "./src/components/shared/custom-filter-list.jsx");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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












var ACTIONS_SEARCH_SCOPES = [{
  id: 'name',
  label: 'Name'
}, {
  id: 'tags',
  label: 'Tags'
}, {
  id: 'description',
  label: 'description'
}, {
  id: 'resources',
  label: 'resources'
}, {
  id: 'effects',
  label: 'effects'
}];
var AccessoryUpgrades = function AccessoryUpgrades(_ref) {
  var setItemDetails = _ref.setItemDetails,
    purchaseItem = _ref.purchaseItem,
    newUnlocks = _ref.newUnlocks,
    isMobile = _ref.isMobile;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      available: [],
      space: {
        total: 0,
        max: 0
      },
      searchData: {
        search: ''
      },
      hideMaxed: false,
      propertyCategories: [],
      selectedCategory: 'all',
      customFilters: {},
      customFiltersOrder: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    furnituresData = _useState2[0],
    setItemsData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isCustomFilterOpened = _useState4[0],
    setCustomFilterOpened = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    editingCustomFilter = _useState6[0],
    setEditingCustomFilter = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var interval = setInterval(function () {
      sendData('query-furnitures-data', {
        filterId: 'accessory'
      });
    }, 100);
    return function () {
      clearInterval(interval);
    };
  }, []);
  onMessage('furnitures-data', function (furnitures) {
    setItemsData(furnitures);
  });
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    overlayPositions = _useState8[0],
    setOverlayPositions = _useState8[1];
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
  var setSearch = function setSearch(searchData) {
    sendData('set-furniture-search-text', {
      filterId: 'accessory',
      searchData: searchData
    });
  };
  var handlePinToggle = function handlePinToggle(id, newFlag) {
    sendData('toggle-property-custom-filter-pinned', {
      id: id,
      flag: newFlag,
      filterId: 'accessory'
    });
  };
  var toggleAutopurchase = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id, flag) {
    sendData('set-furniture-autopurchase', {
      id: id,
      flag: flag,
      filterId: 'accessory'
    });
  });
  var setActionsFilter = function setActionsFilter(filterId) {
    sendData('apply-property-custom-filter', {
      id: filterId,
      filterId: 'accessory'
    });
  };
  var handleEditFilter = function handleEditFilter(id) {
    // знаходите фільтр, відкриваєте форму редагування
    // наприклад:
    var filterData = furnituresData.customFilters[id];
    setEditingCustomFilter(_objectSpread({}, filterData));
  };
  var handleDeleteFilter = function handleDeleteFilter(id) {
    sendData('delete-property-custom-filter', {
      id: id,
      filterId: 'accessory'
    });
  };
  var handleAddFilter = function handleAddFilter() {
    setEditingCustomFilter({
      rules: [],
      condition: '',
      category: 'action',
      name: ''
    });
  };
  var handleClose = function handleClose() {
    setCustomFilterOpened(false);
  };
  var onDragEnd = function onDragEnd(result) {
    var source = result.source,
      destination = result.destination,
      draggableId = result.draggableId;
    if (!destination) return;
    var sourceDroppableId = source.droppableId;
    var destinationDroppableId = destination.droppableId;
    if (sourceDroppableId === 'custom-filters' && destinationDroppableId === 'custom-filters') {
      if (source.index !== destination.index) {
        sendData('actions-change-custom-filters-order', {
          sourceIndex: source.index,
          destinationIndex: destination.index
        });
      }
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_11__.DragDropContext, {
    onDragEnd: onDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'furniture-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'head'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'filters'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_search_field_jsx__WEBPACK_IMPORTED_MODULE_8__.SearchField, {
    placeholder: 'Search',
    value: furnituresData.searchData,
    onSetValue: function onSetValue(val) {
      return setSearch(val);
    },
    scopes: ACTIONS_SEARCH_SCOPES
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'categories flex-container sub-heading'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: 'menu'
  }, furnituresData.propertyCategories.filter(function (one) {
    return one.isPinned || one.isSelected;
  }).map(function (category) {
    var _newUnlocks$category$;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: category.id,
      className: "category ".concat(category.isSelected ? 'active' : ''),
      onClick: function onClick() {
        return setActionsFilter(category.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_7__.NewNotificationWrap, {
      isNew: newUnlocks === null || newUnlocks === void 0 || (_newUnlocks$category$ = newUnlocks[category.id]) === null || _newUnlocks$category$ === void 0 ? void 0 : _newUnlocks$category$.hasNew
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, category.name, "(", category.items.length, ")")));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: 'add-custom-filter additional'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'create-custom',
    onClick: function onClick() {
      setCustomFilterOpened(true);
      // setEditingCustomFilter({ rules: [], condition: '', category: 'action', name: ''})
    }
  }, "Edit Filters"), isCustomFilterOpened ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'custom-filter-edit-wrap'
  }, editingCustomFilter ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_custom_filter_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
    prefix: 'actions-filter',
    category: 'accessory',
    id: editingCustomFilter === null || editingCustomFilter === void 0 ? void 0 : editingCustomFilter.id,
    name: editingCustomFilter === null || editingCustomFilter === void 0 ? void 0 : editingCustomFilter.name,
    rules: editingCustomFilter === null || editingCustomFilter === void 0 ? void 0 : editingCustomFilter.rules,
    condition: editingCustomFilter === null || editingCustomFilter === void 0 ? void 0 : editingCustomFilter.condition,
    onCancel: function onCancel() {
      setEditingCustomFilter(null);
    },
    onSave: function onSave(data) {
      // console.log('saving: ', data)
      sendData('save-property-custom-filter', _objectSpread(_objectSpread({}, data), {}, {
        filterId: 'accessory'
      }));
      setEditingCustomFilter(null);
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_custom_filter_list_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
    filterOrder: furnituresData.customFiltersOrder,
    filters: furnituresData.customFilters,
    onPinToggle: handlePinToggle,
    onApply: setActionsFilter,
    onEdit: handleEditFilter,
    onDelete: handleDeleteFilter,
    showAddButton: true,
    onAdd: handleAddFilter,
    showCloseButton: true,
    onClose: handleClose
  })) : null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'furnitures-cat'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'flex-container'
  }, furnituresData.available.map(function (furniture) {
    var _newUnlocks$furniture;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_7__.NewNotificationWrap, {
      key: furniture.id,
      id: furniture.id,
      className: 'narrow-wrapper',
      isNew: newUnlocks === null || newUnlocks === void 0 || (_newUnlocks$furniture = newUnlocks[furnituresData.selectedCategory]) === null || _newUnlocks$furniture === void 0 || (_newUnlocks$furniture = _newUnlocks$furniture.items) === null || _newUnlocks$furniture === void 0 || (_newUnlocks$furniture = _newUnlocks$furniture[furniture.id]) === null || _newUnlocks$furniture === void 0 ? void 0 : _newUnlocks$furniture.hasNew
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ItemCard, _extends({
      key: furniture.id
    }, furniture, {
      onFlash: handleFlash,
      onPurchase: purchaseItem,
      onShowDetails: setItemDetails,
      toggleAutopurchase: toggleAutopurchase,
      isAutomationUnlocked: furnituresData.isAutomationUnlocked,
      isMobile: isMobile
    })));
  }), overlayPositions.map(function (position, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_flash_overlay_jsx__WEBPACK_IMPORTED_MODULE_5__.FlashOverlay, {
      key: index,
      position: position
    });
  }))))));
};
var ItemCard = function ItemCard(_ref2) {
  var id = _ref2.id,
    name = _ref2.name,
    level = _ref2.level,
    max = _ref2.max,
    affordable = _ref2.affordable,
    isLeveled = _ref2.isLeveled,
    isCapped = _ref2.isCapped,
    onFlash = _ref2.onFlash,
    onPurchase = _ref2.onPurchase,
    onShowDetails = _ref2.onShowDetails,
    isAutoPurchase = _ref2.isAutoPurchase,
    onDelete = _ref2.onDelete,
    toggleAutopurchase = _ref2.toggleAutopurchase,
    isAutomationUnlocked = _ref2.isAutomationUnlocked,
    isMobile = _ref2.isMobile;
  var elementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,_general_hooks_flash__WEBPACK_IMPORTED_MODULE_6__.useFlashOnLevelUp)(isLeveled, onFlash, elementRef);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: elementRef,
    className: "card furniture flashable ".concat(affordable.hardLocked ? 'hard-locked' : '', "  ").concat(!affordable.isAffordable ? 'unavailable' : ''),
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
    className: 'head'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'title'
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'level'
  }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_4__.formatInt)(level), max ? "/".concat((0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_4__.formatInt)(max)) : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'bottom'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'buttons'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: !affordable.isAffordable || isCapped,
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      onPurchase(id);
    },
    className: "purchase-button ".concat(isCapped ? 'capped' : ''),
    style: {
      '--progress': "".concat(affordable.percentage * 100, "%")
    }
  }, "Purchase"), isAutomationUnlocked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: 'autobuy-label',
    onClick: function onClick(e) {
      e.stopPropagation();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: 'checkbox',
    checked: isAutoPurchase,
    onChange: function onChange(e) {
      e.preventDefault();
      e.stopPropagation();
      toggleAutopurchase(id, !isAutoPurchase);
    }
  }), "Autobuy") : null)));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/property/accessories.jsx?
