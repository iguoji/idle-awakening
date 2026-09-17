__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CraftingListDetails: () => (/* binding */ CraftingListDetails),
/* harmony export */   CraftingWrap: () => (/* binding */ CraftingWrap),
/* harmony export */   GeneralStats: () => (/* binding */ GeneralStats),
/* harmony export */   ItemDetails: () => (/* binding */ ItemDetails)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../general/client */ "./src/general/client.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_effects_section_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/effects-section.jsx */ "./src/components/shared/effects-section.jsx");
/* harmony import */ var _general_utils_strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../general/utils/strings */ "./src/general/utils/strings.js");
/* harmony import */ var _crafting_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crafting.jsx */ "./src/components/workshop/crafting/crafting.jsx");
/* harmony import */ var _shared_resource_cost_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/resource-cost.jsx */ "./src/components/shared/resource-cost.jsx");
/* harmony import */ var _shared_resource_comparison_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/resource-comparison.jsx */ "./src/components/shared/resource-comparison.jsx");
/* harmony import */ var _shared_rules_list_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/rules-list.jsx */ "./src/components/shared/rules-list.jsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shared_stat_row_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/stat-row.jsx */ "./src/components/shared/stat-row.jsx");
/* harmony import */ var _context_ui_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../context/ui-context */ "./src/context/ui-context.js");
/* harmony import */ var _shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/tippy-wrapper.jsx */ "./src/components/shared/tippy-wrapper.jsx");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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














var CraftingWrap = function CraftingWrap(_ref) {
  var _newUnlocks$workshop;
  var children = _ref.children;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useAppContext = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_12__.useAppContext)(),
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
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    listDetails = _useState8[0],
    setListDetails = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var interval2 = setInterval(function () {
      sendData('query-new-unlocks-notifications', {
        suffix: 'crafting',
        scope: 'workshop'
      });
    }, 1000);
    return function () {
      clearInterval(interval2);
    };
  }, []);
  onMessage('new-unlocks-notifications-crafting', function (payload) {
    setNewUnlocks(payload);
  });
  var setItemDetails = function setItemDetails(id) {
    if (!id) {
      setDetailOpened(null);
    } else {
      setDetailOpened(id);
    }
  };
  var setItemLevel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id, level) {
    sendData('set-crafting-level', {
      id: id,
      level: level,
      filterId: 'crafting'
    });
  });
  onMessage('crafting-list-data', function (payload) {
    // console.log(`currViewing LIST: `, payload, listDetails);
    if (!listDetails) return;
    setListDetails(_objectSpread(_objectSpread({}, listDetails), {}, {
      listData: payload,
      isEdit: listDetails.isEdit,
      isLoading: false
    }));
  });
  onMessage('crafting-list-effects', function (payload) {
    setListDetails(_objectSpread(_objectSpread({}, listDetails), {}, {
      listData: _objectSpread(_objectSpread({}, listDetails.listData), {}, {
        potentialEffects: payload.potentialEffects,
        resourcesEffects: payload.resourcesEffects,
        effectEffects: payload.effectEffects,
        prevEffects: payload.prevEffects,
        assumedDistribution: payload.assumedDistribution
      })
    }));
  });
  var setAutotriggerPriority = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (priority) {
    var _ref2 = listDetails !== null && listDetails !== void 0 ? listDetails : {},
      listData = _ref2.listData;
    if (listData) {
      var newList = (0,lodash__WEBPACK_IMPORTED_MODULE_10__.cloneDeep)(listData);
      if (!newList.autotrigger) {
        newList.autotrigger = {};
      }
      if (!newList.autotrigger.rules) {
        newList.autotrigger.rules = [];
      }
      newList.autotrigger.priority = priority;
      setListDetails(_objectSpread(_objectSpread({}, listDetails), {}, {
        listData: _objectSpread({}, newList)
      }));
    }
  }, [listDetails]);
  var onSetAutotriggerPattern = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (pattern) {
    var _ref3 = listDetails !== null && listDetails !== void 0 ? listDetails : {},
      listData = _ref3.listData;
    if (listData) {
      var newList = (0,lodash__WEBPACK_IMPORTED_MODULE_10__.cloneDeep)(listData);
      if (!newList.autotrigger) {
        newList.autotrigger = {};
      }
      if (!newList.autotrigger.rules) {
        newList.autotrigger.rules = [];
      }
      newList.autotrigger.pattern = pattern;
      setListDetails(_objectSpread(_objectSpread({}, listDetails), {}, {
        listData: _objectSpread({}, newList)
      }));
    }
  }, [listDetails]);
  var onAddAutotriggerRule = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var _ref4 = listDetails !== null && listDetails !== void 0 ? listDetails : {},
      listData = _ref4.listData;
    if (listData) {
      var newList = (0,lodash__WEBPACK_IMPORTED_MODULE_10__.cloneDeep)(listData);
      if (!newList.autotrigger) {
        newList.autotrigger = {};
      }
      if (!newList.autotrigger.rules) {
        newList.autotrigger.rules = [];
      }
      newList.autotrigger.rules.push({
        resource_id: 'mage_xp',
        condition: 'less_or_eq',
        value_type: 'percentage',
        value: 50
      });
      setListDetails(_objectSpread(_objectSpread({}, listDetails), {}, {
        listData: _objectSpread({}, newList)
      }));
    }
  }, [listDetails]);
  var onSetAutotriggerRuleValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (index, key, value) {
    var _ref5 = listDetails !== null && listDetails !== void 0 ? listDetails : {},
      listData = _ref5.listData;
    if (listData) {
      var newList = (0,lodash__WEBPACK_IMPORTED_MODULE_10__.cloneDeep)(listData);
      if (!newList.autotrigger) {
        newList.autotrigger = {};
      }
      if (!newList.autotrigger.rules) {
        newList.autotrigger.rules = [];
      }
      newList.autotrigger.rules[index] = _objectSpread(_objectSpread({}, newList.autotrigger.rules[index]), {}, _defineProperty({}, key, value));
      setListDetails(_objectSpread(_objectSpread({}, listDetails), {}, {
        listData: _objectSpread({}, newList)
      }));
    }
  }, [listDetails]);
  var onDeleteAutotriggerRule = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (index) {
    var _ref6 = listDetails !== null && listDetails !== void 0 ? listDetails : {},
      listData = _ref6.listData;
    if (listData) {
      var newList = (0,lodash__WEBPACK_IMPORTED_MODULE_10__.cloneDeep)(listData);
      if (!newList.autotrigger) {
        newList.autotrigger = {};
      }
      if (!newList.autotrigger.rules) {
        newList.autotrigger.rules = [];
      }
      newList.autotrigger.rules.splice(index);
      setListDetails(_objectSpread(_objectSpread({}, listDetails), {}, {
        listData: _objectSpread({}, newList)
      }));
    }
  }, [listDetails]);
  var onToggleAutotrigger = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var _ref7 = listDetails !== null && listDetails !== void 0 ? listDetails : {},
      listData = _ref7.listData;
    if (listData) {
      var newList = (0,lodash__WEBPACK_IMPORTED_MODULE_10__.cloneDeep)(listData);
      if (!newList.autotrigger) {
        newList.autotrigger = {};
      }
      if (!newList.autotrigger.rules) {
        newList.autotrigger.rules = [];
      }
      newList.autotrigger.isEnabled = !newList.autotrigger.isEnabled;
      setListDetails(_objectSpread(_objectSpread({}, listDetails), {}, {
        listData: _objectSpread({}, newList)
      }));
    }
  }, [listDetails]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // console.log('Called select list', listDetails);
  }, [listDetails]);
  var addItemToList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_ref8) {
    var id = _ref8.id,
      name = _ref8.name;
    // console.log('Add recipe to list', id, listDetails);
    if (listDetails !== null && listDetails !== void 0 && listDetails.listData && listDetails !== null && listDetails !== void 0 && listDetails.isEdit) {
      if (id) {
        // console.log('Insert recipe to list: ', id, listDetails);
        if (!listDetails.listData.recipes.find(function (one) {
          return one.id === id;
        })) {
          var newList = (0,lodash__WEBPACK_IMPORTED_MODULE_10__.cloneDeep)(listDetails.listData);
          newList.recipes.push({
            id: id,
            name: name,
            min: 0,
            max: 0,
            percentage: 25
          });
          setListDetails(_objectSpread(_objectSpread({}, listDetails), {}, {
            listData: _objectSpread({}, newList)
          }));
          sendData('query-crafting-list-effects', {
            listData: newList
          });
        }
      }
    }
  }, [listDetails]);
  var openListDetails = function openListDetails(list) {
    var _list$listData;
    if ((_list$listData = list.listData) !== null && _list$listData !== void 0 && _list$listData.id) {
      var _list$listData2;
      // console.log('loading list: ', list);
      setListDetails({
        isEdit: list.isEdit,
        isLoading: true
      });
      sendData('load-crafting-list', {
        id: (_list$listData2 = list.listData) === null || _list$listData2 === void 0 ? void 0 : _list$listData2.id
      });
    } else {
      if (!list.isEdit) {
        setListDetails(null);
        return;
      }
      setListDetails(_objectSpread(_objectSpread({}, list || {}), {}, {
        listData: _objectSpread(_objectSpread({}, list.listData || {}), {}, {
          recipes: [],
          category: 'crafting',
          autotrigger: {
            priority: 10,
            rules: [],
            pattern: ''
          }
        })
      }));
    }
  };
  var onDropActionFromList = function onDropActionFromList(id) {
    var _ref9 = listDetails !== null && listDetails !== void 0 ? listDetails : {},
      listData = _ref9.listData;
    if (listData) {
      var newList = listData;
      newList.recipes = newList.recipes.filter(function (a) {
        return a.id !== id;
      });
      setListDetails(_objectSpread(_objectSpread({}, listDetails), {}, {
        listData: _objectSpread({}, newList)
      }));
      sendData('query-crafting-list-effects', {
        listData: newList
      });
    }
  };
  var onUpdateActionFromList = function onUpdateActionFromList(id, key, value) {
    var _ref10 = listDetails !== null && listDetails !== void 0 ? listDetails : {},
      listData = _ref10.listData;
    if (listData) {
      var newList = listData;
      newList.recipes = newList.recipes.map(function (a) {
        return a.id !== id ? a : _objectSpread(_objectSpread({}, a), {}, _defineProperty({}, key, value));
      });
      setListDetails(_objectSpread(_objectSpread({}, listDetails), {}, {
        listData: _objectSpread({}, newList)
      }));
      sendData('query-crafting-list-effects', {
        listData: newList
      });
    }
  };
  var onUpdateListValue = function onUpdateListValue(key, value) {
    var _ref11 = listDetails !== null && listDetails !== void 0 ? listDetails : {},
      listData = _ref11.listData;
    if (listData) {
      var newList = listData;
      newList[key] = value;
      setListDetails(_objectSpread(_objectSpread({}, listDetails), {}, {
        listData: _objectSpread({}, newList)
      }));
      // sendData('query-action-list-effects', { id });
    }
  };
  var onCloseList = function onCloseList() {
    setListDetails(null);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'items-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'items ingame-box'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'head workshop'
  }, children, isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'highlighted-span',
    onClick: function onClick() {
      return setDetailVisible(true);
    }
  }, "Info")) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_crafting_jsx__WEBPACK_IMPORTED_MODULE_6__.Crafting, {
    filterId: 'crafting',
    setItemDetails: setItemDetails,
    setItemLevel: setItemLevel,
    newUnlocks: (_newUnlocks$workshop = newUnlocks.workshop) === null || _newUnlocks$workshop === void 0 || (_newUnlocks$workshop = _newUnlocks$workshop.items) === null || _newUnlocks$workshop === void 0 || (_newUnlocks$workshop = _newUnlocks$workshop.crafting) === null || _newUnlocks$workshop === void 0 ? void 0 : _newUnlocks$workshop.items,
    openListDetails: openListDetails,
    addItemToList: addItemToList,
    isEditList: listDetails === null || listDetails === void 0 ? void 0 : listDetails.isEdit
  })), !isMobile || isDetailVisible || listDetails !== null && listDetails !== void 0 && listDetails.listData || detailOpened ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "item-detail ingame-box detail-blade ".concat(listDetails !== null && listDetails !== void 0 && listDetails.listData && (listDetails !== null && listDetails !== void 0 && listDetails.isEdit || !detailOpened) ? 'wide-blade' : '', " ").concat(listDetails !== null && listDetails !== void 0 && listDetails.listData ? 'forced-bottom' : '')
  }, listDetails !== null && listDetails !== void 0 && listDetails.listData && (listDetails !== null && listDetails !== void 0 && listDetails.isEdit || !detailOpened) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CraftingListDetails, {
    listDetails: listDetails.listData,
    isEditing: listDetails.isEdit,
    onUpdateActionFromList: onUpdateActionFromList,
    onDropActionFromList: onDropActionFromList,
    onUpdateListValue: onUpdateListValue,
    onAddAutotriggerRule: onAddAutotriggerRule,
    onSetAutotriggerRuleValue: onSetAutotriggerRuleValue,
    onDeleteAutotriggerRule: onDeleteAutotriggerRule,
    setAutotriggerPriority: setAutotriggerPriority,
    onSetAutotriggerPattern: onSetAutotriggerPattern,
    onCloseList: onCloseList,
    onToggleAutotrigger: onToggleAutotrigger
  }) : null, detailOpened && !(listDetails !== null && listDetails !== void 0 && listDetails.isEdit) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ItemDetails, {
    itemId: detailOpened,
    category: 'crafting',
    setItemDetails: setItemDetails
  }) : null, !detailOpened && !(listDetails !== null && listDetails !== void 0 && listDetails.listData) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GeneralStats, {
    setDetailVisible: setDetailVisible
  }) : null) : null);
};
var GeneralStats = function GeneralStats(_ref12) {
  var setDetailVisible = _ref12.setDetailVisible;
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      isProducingEffort: false,
      hasSlots: false,
      stats: {}
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    data = _useState10[0],
    setData = _useState10[1];
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useAppContext2 = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_12__.useAppContext)(),
    isMobile = _useAppContext2.isMobile;
  var _useWorkerClient2 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient2.onMessage,
    sendData = _useWorkerClient2.sendData;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sendData('query-crafting-general-data', {
      filterId: 'crafting'
    });
    var interval = setInterval(function () {
      sendData('query-crafting-general-data', {
        filterId: 'crafting'
      });
    }, 500);
    return function () {
      clearInterval(interval);
    };
  }, []);
  onMessage('crafting-general-data', function (data) {
    setData(data);
  });
  var hasEffect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (stat) {
    if (!(stat !== null && stat !== void 0 && stat.value)) return false;
    return !stat.isMultiplier || Math.abs((stat === null || stat === void 0 ? void 0 : stat.value) - 1.0) > 1.e-7;
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'blade-inner'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Crafting"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'hint separated'
  }, "You can craft multiple items at once, if you have enough available crafting slots. Assigning more effort to crafting of specific resource will make crafting faster but more wasteful"), !data.isProducingEffort ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'hint warning yellow'
  }, "Crafting requires Crafting Effort, which is generated by specific actions. To be able to craft something, make sure you are generating Crafting Effort.") : null, !data.hasSlots ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'hint warning yellow'
  }, "Each material crafting require crafting slot. Make sure you've purchased corresponding furniture") : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "General Stats"), Object.values(data.stats).map(function (stat) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, hasEffect(stat) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_stat_row_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
      stat: stat
    }) : null);
  })), isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block buttons'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return setDetailVisible(false);
    }
  }, "Close")) : null));
};
var ItemDetails = function ItemDetails(_ref13) {
  var itemId = _ref13.itemId,
    category = _ref13.category,
    setItemDetails = _ref13.setItemDetails;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useAppContext3 = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_12__.useAppContext)(),
    isMobile = _useAppContext3.isMobile;
  var _useWorkerClient3 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient3.onMessage,
    sendData = _useWorkerClient3.sendData;
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    item = _useState12[0],
    setDetailOpened = _useState12[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // console.log('Details: ', itemId, category);
    if (category === 'crafting') {
      var interval = setInterval(function () {
        sendData('query-crafting-details', {
          id: itemId
        });
      }, 200);
      return function () {
        clearInterval(interval);
      };
    }
  }, [itemId]);
  onMessage('crafting-details', function (items) {
    // console.log('CraftDetails: ', items)
    setDetailOpened(items);
  });

  /*onMessage('plantation-details', (items) => {
      console.log('PlantDetails: ', items)
      setDetailOpened(items);
  })*/

  if (!itemId || !item) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'blade-inner'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, item.name, " (x", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_5__.formatInt)(item.level), ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'description'
  }, item.description)), item.bottleNeck && item.efficiency < 1. - 1.e-7 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'hint'
  }, "This activity running at ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_5__.formatValue)(item.efficiency * 100), "% due to missing ", item.bottleNeck.name)) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Cost:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'costs-wrap'
  }, Object.values(item.affordable.affordabilities || {}).map(function (aff) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_resource_cost_jsx__WEBPACK_IMPORTED_MODULE_7__.ResourceCost, {
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
    maxDisplay: 10,
    isShowBalance: true
  }))), isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block buttons'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return setItemDetails(null);
    }
  }, "Close")) : null));
};
var CraftingListDetails = function CraftingListDetails(_ref14) {
  var _editing$effectEffect, _editing$autotrigger, _editing$autotrigger2, _editing$autotrigger3, _editing$autotrigger4, _editing$autotrigger5, _editing$autotrigger6, _editing$autotrigger7;
  var listDetails = _ref14.listDetails,
    isEditing = _ref14.isEditing,
    onUpdateActionFromList = _ref14.onUpdateActionFromList,
    onDropActionFromList = _ref14.onDropActionFromList,
    onUpdateListValue = _ref14.onUpdateListValue,
    onAddAutotriggerRule = _ref14.onAddAutotriggerRule,
    onSetAutotriggerRuleValue = _ref14.onSetAutotriggerRuleValue,
    onDeleteAutotriggerRule = _ref14.onDeleteAutotriggerRule,
    setAutotriggerPriority = _ref14.setAutotriggerPriority,
    onSetAutotriggerPattern = _ref14.onSetAutotriggerPattern,
    onCloseList = _ref14.onCloseList,
    onToggleAutotrigger = _ref14.onToggleAutotrigger;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient4 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient4.onMessage,
    sendData = _useWorkerClient4.sendData;
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      recipes: []
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    editing = _useState14[0],
    setEditing = _useState14[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // console.log('SET EDITING LIST: ', listDetails);
    setEditing(listDetails);
  }, [listDetails]);
  var saveAndClose = function saveAndClose(isClose) {
    // console.log('Saving: ', editing);
    if (!isClose) {
      editing.isReopenEdit = true;
    }
    sendData('save-crafting-list', editing);
    if (isClose) {
      onCloseList();
    }
  };
  var addAutotriggerRule = function addAutotriggerRule() {
    onAddAutotriggerRule();
  };
  var setAutotriggerRuleValue = function setAutotriggerRuleValue(index, key, value) {
    onSetAutotriggerRuleValue(index, key, value);
  };
  var deleteAutotriggerRule = function deleteAutotriggerRule(index) {
    onDeleteAutotriggerRule(index);
  };
  var setAutotriggerPattern = function setAutotriggerPattern(pattern) {
    onSetAutotriggerPattern(pattern);
  };
  var toggleAutotrigger = function toggleAutotrigger() {
    onToggleAutotrigger();
  };
  if (!listDetails) return;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'blade-inner list-editor'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block main-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'main-row'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Name"), isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: 'text',
    value: editing.name,
    onChange: function onChange(e) {
      return onUpdateListValue('name', e.target.value);
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, editing.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Click on craft recipes to add/remove them from the list"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'recipes-list'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "actions-list-wrap"
  }, editing.recipes.length ? editing.recipes.map(function (recipe, index) {
    var _editing$assumedDistr;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "action-row flex-container ".concat(!recipe.isAvailable ? 'unavailable-recipe' : '')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'col title'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, recipe.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'col amount'
    }, isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Min: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: 'number',
      value: recipe.min,
      onChange: function onChange(e) {
        return onUpdateActionFromList(recipe.id, 'min', +e.target.value);
      }
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Min: ", recipe.min)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'col amount'
    }, isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Max: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: 'number',
      value: recipe.max,
      onChange: function onChange(e) {
        return onUpdateActionFromList(recipe.id, 'max', +e.target.value);
      }
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Max: ", recipe.max)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'col amount'
    }, isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "% of slots", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: 'number',
      value: recipe.percentage,
      onChange: function onChange(e) {
        return onUpdateActionFromList(recipe.id, 'percentage', +e.target.value);
      }
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " ", recipe.percentage, "%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'col assumed'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_13__.TippyWrapper, {
      placement: 'bottom',
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'hint-popup'
      }, "Asserted amount of slots that would be assigned to this recipe using current list settings")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (editing === null || editing === void 0 || (_editing$assumedDistr = editing.assumedDistribution) === null || _editing$assumedDistr === void 0 || (_editing$assumedDistr = _editing$assumedDistr.find(function (one) {
      return one.id === recipe.id;
    })) === null || _editing$assumedDistr === void 0 ? void 0 : _editing$assumedDistr.level) || 0))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'col delete'
    }, isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: 'close',
      onClick: function onClick() {
        return onDropActionFromList(recipe.id);
      }
    }, "X") : null));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'hint'
  }, "No map recipes added yet")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'effects-wrap'
  }, Object.keys((editing === null || editing === void 0 ? void 0 : editing.resourcesEffects) || {}).length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Average Resources per second"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_resource_comparison_jsx__WEBPACK_IMPORTED_MODULE_8__.ResourceComparison, {
    effects1: editing === null || editing === void 0 ? void 0 : editing.prevEffects,
    effects2: editing === null || editing === void 0 ? void 0 : editing.resourcesEffects,
    maxDisplay: 10
  })) : null, editing !== null && editing !== void 0 && (_editing$effectEffect = editing.effectEffects) !== null && _editing$effectEffect !== void 0 && _editing$effectEffect.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Average Effects per second"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_effects_section_jsx__WEBPACK_IMPORTED_MODULE_4__.EffectsSection, {
    effects: (editing === null || editing === void 0 ? void 0 : editing.effectEffects) || [],
    maxDisplay: 10
  })) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'autotrigger-settings autoconsume-setting block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'rules-header flex-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Autotrigger rules: ", editing !== null && editing !== void 0 && (_editing$autotrigger = editing.autotrigger) !== null && _editing$autotrigger !== void 0 && (_editing$autotrigger = _editing$autotrigger.rules) !== null && _editing$autotrigger !== void 0 && _editing$autotrigger.length ? null : 'None'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: 'checkbox',
    checked: (_editing$autotrigger2 = editing.autotrigger) === null || _editing$autotrigger2 === void 0 ? void 0 : _editing$autotrigger2.isEnabled,
    onChange: toggleAutotrigger
  }), (_editing$autotrigger3 = editing.autotrigger) !== null && _editing$autotrigger3 !== void 0 && _editing$autotrigger3.isEnabled ? ' ON' : ' OFF'), isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: addAutotriggerRule
  }, "Add rule (AND)") : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'priority-line flex-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Priority: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: 'number',
    value: ((_editing$autotrigger4 = editing.autotrigger) === null || _editing$autotrigger4 === void 0 ? void 0 : _editing$autotrigger4.priority) || 0,
    onChange: function onChange(e) {
      return setAutotriggerPriority(+(e.target.value || 0));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_rules_list_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
    isEditing: isEditing,
    rules: ((_editing$autotrigger5 = editing.autotrigger) === null || _editing$autotrigger5 === void 0 ? void 0 : _editing$autotrigger5.rules) || [],
    deleteRule: deleteAutotriggerRule,
    setRuleValue: setAutotriggerRuleValue,
    setPattern: setAutotriggerPattern,
    pattern: ((_editing$autotrigger6 = editing.autotrigger) === null || _editing$autotrigger6 === void 0 ? void 0 : _editing$autotrigger6.pattern) || '',
    isAutoCheck: (_editing$autotrigger7 = editing.autotrigger) === null || _editing$autotrigger7 === void 0 ? void 0 : _editing$autotrigger7.isEnabled
  })), isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'buttons'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return saveAndClose(false);
    }
  }, editing !== null && editing !== void 0 && editing.id ? 'Save' : 'Create'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return saveAndClose(true);
    }
  }, editing !== null && editing !== void 0 && editing.id ? 'Save & Close' : 'Create & Close'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onCloseList
  }, "Cancel")) : null));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/workshop/crafting/index.jsx?
