__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionListsPopup: () => (/* binding */ ActionListsPopup),
/* harmony export */   Alchemy: () => (/* binding */ Alchemy),
/* harmony export */   CraftingListsPanel: () => (/* binding */ CraftingListsPanel),
/* harmony export */   ItemCard: () => (/* binding */ ItemCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../general/client */ "./src/general/client.js");
/* harmony import */ var _general_utils_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../general/utils/strings */ "./src/general/utils/strings.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/tippy-wrapper.jsx */ "./src/components/shared/tippy-wrapper.jsx");
/* harmony import */ var _layout_sidebar_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layout/sidebar.jsx */ "./src/components/layout/sidebar.jsx");
/* harmony import */ var _shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/new-notification-wrap.jsx */ "./src/components/shared/new-notification-wrap.jsx");
/* harmony import */ var _shared_raw_resource_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/raw-resource.jsx */ "./src/components/shared/raw-resource.jsx");
/* harmony import */ var _shared_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared.jsx */ "./src/components/workshop/shared.jsx");
/* harmony import */ var _context_ui_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../context/ui-context */ "./src/context/ui-context.js");
/* harmony import */ var _shared_pin_resource_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/pin-resource.jsx */ "./src/components/shared/pin-resource.jsx");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }












var Alchemy = function Alchemy(_ref) {
  var setItemDetails = _ref.setItemDetails,
    setItemLevel = _ref.setItemLevel,
    filterId = _ref.filterId,
    newUnlocks = _ref.newUnlocks,
    openListDetails = _ref.openListDetails,
    addItemToList = _ref.addItemToList,
    isEditList = _ref.isEditList;
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
      efforts: {
        consumption: 0,
        balance: 0,
        breakDown: null,
        isPinned: false
      },
      craftingLists: {
        lists: [],
        runningList: null,
        automationEnabled: false,
        autotriggerIntervalSetting: 10
      }
    }),
    _useState2 = _slicedToArray(_useState, 2),
    craftingData = _useState2[0],
    setItemsData = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var interval = setInterval(function () {
      sendData('query-crafting-data', {
        filterId: filterId
      });
    }, 100);
    return function () {
      clearInterval(interval);
    };
  }, []);
  onMessage("crafting-data-".concat(filterId), function (craftables) {
    setItemsData(craftables);
  });
  var onEditList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (listData) {
    console.log('onEditList: ', {
      listData: listData,
      isEdit: true
    });
    openListDetails({
      listData: listData,
      isEdit: true
    });
  }, []);
  var onViewList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (listData) {
    console.log('onViewList: ', listData);
    openListDetails({
      listData: listData
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'crafting-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'head'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'space-item'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_raw_resource_jsx__WEBPACK_IMPORTED_MODULE_8__.RawResource, {
    id: 'alchemy_slots',
    name: 'Alchemy Slots'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "slots-amount ".concat(craftingData.slots.total > 0 ? 'slots-available' : 'slots-unavailable')
  }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(craftingData.slots.total), "/", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(craftingData.slots.max))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'flex-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_5__.TippyWrapper, {
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'hint-popup'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: 'hint'
    }, "Shows the amount of available effort you can use for alchemy."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: 'hint'
    }, "If your alchemy effort is insufficient, your alchemy efficiency will decrease."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_sidebar_jsx__WEBPACK_IMPORTED_MODULE_6__.BreakDown, {
      breakDown: craftingData.efforts.breakDown
    }))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'space-item'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Alchemy Efforts:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(craftingData.efforts.balance), "/", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(craftingData.efforts.balance + craftingData.efforts.consumption)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_pin_resource_jsx__WEBPACK_IMPORTED_MODULE_11__.PinResource, {
    isPinned: craftingData.efforts.isPinned,
    id: 'alchemy_ability'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'craftables-cat'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'flex-container'
  }, craftingData.available.map(function (craftable) {
    var _newUnlocks$all;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_7__.NewNotificationWrap, {
      id: "crafting_".concat(craftable.id),
      className: 'narrow-wrapper',
      isNew: newUnlocks === null || newUnlocks === void 0 || (_newUnlocks$all = newUnlocks.all) === null || _newUnlocks$all === void 0 || (_newUnlocks$all = _newUnlocks$all.items) === null || _newUnlocks$all === void 0 || (_newUnlocks$all = _newUnlocks$all["crafting_".concat(craftable.id)]) === null || _newUnlocks$all === void 0 ? void 0 : _newUnlocks$all.hasNew
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ItemCard, _extends({
      addItemToList: addItemToList,
      key: craftable.id
    }, craftable, {
      onSetLevel: setItemLevel,
      onShowDetails: setItemDetails,
      isMobile: isMobile,
      isEditList: isEditList
    })));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'map-lists-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CraftingListsPanel, {
    runningList: craftingData.craftingLists.runningList,
    lists: craftingData.craftingLists.lists,
    automationEnabled: craftingData.craftingLists.automationEnabled,
    autotriggerIntervalSetting: craftingData.craftingLists.autotriggerIntervalSetting,
    editListToDetails: function editListToDetails(id) {
      console.log('editListToDetails: ', id);
      onEditList({
        id: id
      });
    },
    viewListToDetails: function viewListToDetails(id) {
      onViewList({
        id: id
      });
    }
  })));
};
var ItemCard = function ItemCard(_ref2) {
  var id = _ref2.id,
    icon_id = _ref2.icon_id,
    isRunning = _ref2.isRunning,
    resourceAmount = _ref2.resourceAmount,
    resourceBalance = _ref2.resourceBalance,
    breakDown = _ref2.breakDown,
    isLowerEfficiency = _ref2.isLowerEfficiency,
    name = _ref2.name,
    level = _ref2.level,
    maxLevel = _ref2.maxLevel,
    onSetLevel = _ref2.onSetLevel,
    onShowDetails = _ref2.onShowDetails,
    addItemToList = _ref2.addItemToList,
    isMobile = _ref2.isMobile,
    isEditList = _ref2.isEditList;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card craftable ".concat(isRunning ? 'running' : '', " ").concat(isLowerEfficiency ? 'lower-eff' : ''),
    onMouseEnter: function onMouseEnter() {
      return !isMobile ? onShowDetails(id) : null;
    },
    onMouseOver: function onMouseOver() {
      return !isMobile ? onShowDetails(id) : null;
    },
    onMouseLeave: function onMouseLeave() {
      return !isMobile ? onShowDetails(null) : null;
    },
    onClick: function onClick() {
      return isMobile && !isEditList ? onShowDetails(id) : addItemToList({
        id: id,
        name: name
      });
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'bottom'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'buttons'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'label'
  }, "Set Effort:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_5__.TippyWrapper, {
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'hint-popup'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Increasing the effort level boosts both production and alchemy costs exponentially, but costs grow faster than output. Each additional effort level multiplies costs by 1.5 while increasing output by only 1.2."))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'effort-control flex-container flex-row'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'icon-content minimize-icon interface-icon tiny',
    onClick: function onClick(e) {
      e.stopPropagation();
      e.preventDefault();
      onSetLevel(id, 0);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "icons/interface/minimize.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: 'number',
    min: 0,
    max: maxLevel,
    value: level,
    onChange: function onChange(e) {
      e.stopPropagation();
      e.preventDefault();
      onSetLevel(id, Math.round(+e.target.value));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'icon-content maximize-icon interface-icon tiny',
    onClick: function onClick(e) {
      e.stopPropagation();
      e.preventDefault();
      onSetLevel(id, 1.e+9);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "icons/interface/maximize.png"
  })))))))));
};
var ActionListsPopup = function ActionListsPopup(_ref3) {
  var lists = _ref3.lists,
    isOpened = _ref3.isOpened,
    setOpenedFor = _ref3.setOpenedFor,
    onSelect = _ref3.onSelect,
    onHover = _ref3.onHover,
    onRun = _ref3.onRun,
    onDelete = _ref3.onDelete;
  if (!isOpened) return null;
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    search = _useState4[0],
    setSearch = _useState4[1];
  var listsDisplayed = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (!search) return lists;
    return lists.filter(function (l) {
      return l.name.includes(search);
    });
  }, [lists, search]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'list-selector'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'list-selector-inner'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    clallName: 'search-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: 'text',
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'lists-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'list-inner'
  }, listsDisplayed.map(function (list) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'item',
      onMouseEnter: function onMouseEnter() {
        return onHover(list.id);
      },
      onMouseLeave: function onMouseLeave() {
        return onHover(null);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'list-item-row flex-container'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: 'list-name'
    }, list.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_5__.TippyWrapper, {
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'hint-popup'
      }, "Run List")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'icon-content run-icon interface-icon small',
      onClick: function onClick() {
        return onRun(list.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: "icons/interface/run.png"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_5__.TippyWrapper, {
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'hint-popup'
      }, "Edit List")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'icon-content edit-icon interface-icon small',
      onClick: function onClick() {
        return onSelect(list.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: "icons/interface/edit-icon.png"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_5__.TippyWrapper, {
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'hint-popup'
      }, "Delete List")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'icon-content edit-icon interface-icon small',
      onClick: function onClick() {
        return onDelete(list.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: "icons/interface/delete.png"
    })))));
  }))))));
};
var CraftingListsPanel = function CraftingListsPanel(_ref4) {
  var runningList = _ref4.runningList,
    editListToDetails = _ref4.editListToDetails,
    lists = _ref4.lists,
    viewListToDetails = _ref4.viewListToDetails,
    automationEnabled = _ref4.automationEnabled,
    autotriggerIntervalSetting = _ref4.autotriggerIntervalSetting;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient2 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient2.onMessage,
    sendData = _useWorkerClient2.sendData;
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    openedFor = _useState6[0],
    setOpenedFor = _useState6[1];
  var toggleAutomation = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    sendData('set-crafting-automation-enabled', {
      category: 'alchemy',
      flag: !automationEnabled
    });
  });
  var changeAutomationInterval = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (interval) {
    sendData('set-crafting-autotrigger-interval', {
      category: 'alchemy',
      interval: interval
    });
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var setOp = function setOp() {
      console.log('setOpToNull ');
      setOpenedFor(null);
    };
    if (openedFor) {
      document.addEventListener('click', setOp);
    } else {
      document.removeEventListener('click', setOp);
    }
    return function () {
      document.removeEventListener('click', setOp);
    };
  }, [openedFor]);
  var editList = function editList(id) {
    console.log('Set to edit: ', id);
    editListToDetails(id);
  };
  var runList = function runList(id) {
    if (!id) {
      sendData('stop-crafting-list', {
        category: 'alchemy'
      });
      return;
    }
    sendData('run-crafting-list', {
      id: id
    });
  };
  var onDelete = function onDelete(id) {
    sendData('delete-crafting-list', {
      id: id
    });
    setOpenedFor('edit');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'action-lists-panel'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'flex-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'current-list panel-col'
  }, "Current list: ", runningList ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'flex-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, runningList.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'icon-content stop-icon interface-icon',
    onClick: function onClick() {
      return runList(null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "icons/interface/pause.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'icon-content edit-icon interface-icon',
    onClick: function onClick() {
      return editList(runningList.id);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "icons/interface/edit-icon.png"
  }))) : 'None'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'lists-editor panel-col'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return editListToDetails();
    }
  }, "Create New")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'lists-editor panel-col'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick(e) {
      e.stopPropagation();
      setOpenedFor('edit');
    }
  }, "Pick list"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ActionListsPopup, {
    lists: lists,
    isOpened: openedFor === 'edit',
    setOpenedFor: setOpenedFor,
    onSelect: editList,
    onRun: runList,
    onHover: viewListToDetails,
    onDelete: onDelete
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'automation-enabled panel-col'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: 'checkbox',
    checked: automationEnabled,
    onChange: toggleAutomation
  }), "Lists automation enabled")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'panel-col automation-interval'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Switch lists interval:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    onChange: function onChange(e) {
      return changeAutomationInterval(+e.target.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: 10,
    selected: autotriggerIntervalSetting === 10
  }, "10 seconds"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: 30,
    selected: autotriggerIntervalSetting === 30
  }, "30 seconds"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: 60,
    selected: autotriggerIntervalSetting === 60
  }, "1 minute"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: 300,
    selected: autotriggerIntervalSetting === 300
  }, "5 minutes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: 900,
    selected: autotriggerIntervalSetting === 900
  }, "15 minutes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: 1800,
    selected: autotriggerIntervalSetting === 1800
  }, "30 minutes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: 3600,
    selected: autotriggerIntervalSetting === 3600
  }, "1 hour"))))));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/workshop/alchemy/alchemy.jsx?
