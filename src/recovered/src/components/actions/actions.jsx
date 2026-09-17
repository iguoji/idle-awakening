__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionCard: () => (/* binding */ ActionCard),
/* harmony export */   Actions: () => (/* binding */ Actions),
/* harmony export */   DetailBlade: () => (/* binding */ DetailBlade)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../general/client */ "./src/general/client.js");
/* harmony import */ var _general_utils_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../general/utils/strings */ "./src/general/utils/strings.js");
/* harmony import */ var _layout_progress_bar_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/progress-bar.jsx */ "./src/components/layout/progress-bar.jsx");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_effects_section_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/effects-section.jsx */ "./src/components/shared/effects-section.jsx");
/* harmony import */ var _layout_flash_overlay_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout/flash-overlay.jsx */ "./src/components/layout/flash-overlay.jsx");
/* harmony import */ var _general_hooks_flash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../general/hooks/flash */ "./src/general/hooks/flash.js");
/* harmony import */ var _shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/tippy-wrapper.jsx */ "./src/components/shared/tippy-wrapper.jsx");
/* harmony import */ var _shared_resource_comparison_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/resource-comparison.jsx */ "./src/components/shared/resource-comparison.jsx");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _action_xp_breakdown_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./action-xp-breakdown.jsx */ "./src/components/actions/action-xp-breakdown.jsx");
/* harmony import */ var _shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/new-notification-wrap.jsx */ "./src/components/shared/new-notification-wrap.jsx");
/* harmony import */ var _shared_search_field_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/search-field.jsx */ "./src/components/shared/search-field.jsx");
/* harmony import */ var _shared_how_to_sign_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/how-to-sign.jsx */ "./src/components/shared/how-to-sign.jsx");
/* harmony import */ var _context_tutorial_context__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../context/tutorial-context */ "./src/context/tutorial-context.js");
/* harmony import */ var _shared_custom_filter_jsx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/custom-filter.jsx */ "./src/components/shared/custom-filter.jsx");
/* harmony import */ var _actions_blades_jsx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./actions-blades.jsx */ "./src/components/actions/actions-blades.jsx");
/* harmony import */ var _actions_lists_jsx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./actions-lists.jsx */ "./src/components/actions/actions-lists.jsx");
/* harmony import */ var _shared_custom_filter_list_jsx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/custom-filter-list.jsx */ "./src/components/shared/custom-filter-list.jsx");
/* harmony import */ var _context_ui_context__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../context/ui-context */ "./src/context/ui-context.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["id", "category", "monitored", "entityEfficiency", "isEditingList", "index", "name", "level", "max", "xp", "maxXP", "xpRate", "isActive", "effort", "isLeveled", "focused", "isTraining", "actionEffect", "currentEffects", "potentialEffects", "isHidden", "onFlash", "onSelect", "onActivate", "onShowDetails", "toggleHiddenAction", "missingResourceId", "isSelected"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
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
var Actions = function Actions(_ref) {
  _objectDestructuringEmpty(_ref);
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useAppContext = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_21__.useAppContext)(),
    isMobile = _useAppContext.isMobile;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!isMobile),
    _useState2 = _slicedToArray(_useState, 2),
    isDetailVisible = _useState2[0],
    setDetailVisible = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      available: [],
      current: undefined,
      actionCategories: [],
      actionLists: [],
      automationEnabled: false,
      automationUnlocked: false,
      searchData: {
        search: ''
      },
      selectedCategory: 'all',
      stats: {},
      aspects: {
        isUnlocked: false,
        list: []
      },
      customFilters: {},
      customFiltersOrder: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    actionsData = _useState4[0],
    setActionsData = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    detailOpened = _useState6[0],
    setDetailOpened = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    editingList = _useState8[0],
    setEditingList = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    viewingList = _useState10[0],
    setViewingList = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    listData = _useState12[0],
    setListData = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    viewedData = _useState14[0],
    setViewedData = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    selectedAction = _useState16[0],
    setSelectedAction = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState18 = _slicedToArray(_useState17, 2),
    resources = _useState18[0],
    setResources = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState20 = _slicedToArray(_useState19, 2),
    newUnlocks = _useState20[0],
    setNewUnlocks = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    isCustomFilterOpened = _useState22[0],
    setCustomFilterOpened = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState24 = _slicedToArray(_useState23, 2),
    editingCustomFilter = _useState24[0],
    setEditingCustomFilter = _useState24[1];

  // const [filterId, setFilterId] = useState('all');

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var interval = setInterval(function () {
      sendData('query-actions-data', {});
    }, 100);
    sendData('query-all-resources', {});
    var interval2 = setInterval(function () {
      sendData('query-new-unlocks-notifications', {
        suffix: 'actions',
        scope: 'actions'
      });
    }, 1000);
    return function () {
      clearInterval(interval);
      clearInterval(interval2);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var id = viewingList !== null && viewingList !== void 0 ? viewingList : editingList;
    if (id !== null) {
      sendData('load-action-list', {
        id: id
      });
    }
  }, [editingList, viewingList]);
  onMessage('new-unlocks-notifications-actions', function (payload) {
    setNewUnlocks(payload);
  });
  onMessage('all-resources', function (payload) {
    setResources(payload);
  });
  onMessage('actions-data', function (actions) {
    setActionsData(actions);
  });
  onMessage('action-list-data', function (payload) {
    // console.log(`currViewing: ${viewingList}, edit: ${editingList}`, payload);
    if (viewingList) {
      setViewedData(payload);
    } else if (editingList || payload.bForceOpen) {
      if (payload.bForceOpen && !editingList) {
        setEditingList(payload.id);
        // console.log('Set Editing to: ', payload);
      }
      setListData(payload);
      setViewedData(null);
    }
  });
  onMessage('action-list-effects', function (payload) {
    if (listData) {
      setListData(_objectSpread(_objectSpread({}, listData), {}, {
        potentialEffects: payload.potentialEffects,
        resourcesEffects: payload.resourcesEffects,
        effectEffects: payload.effectEffects,
        prevEffects: payload.prevEffects,
        proportionsBar: payload.proportionsBar
      }));
    }
  });
  var activateAction = function activateAction(id) {
    sendData('run-action', {
      id: id,
      isForce: true
    });
  };
  var setActionsFilter = function setActionsFilter(filterId) {
    sendData('apply-actions-custom-filter', {
      id: filterId
    });
  };
  var setActionDetails = function setActionDetails(id) {
    // console.log('SettingOpened: ', id);
    // Additionally send signal to highlight action
    sendData('set-monitored', {
      scope: 'effects',
      type: 'action',
      id: id
    });
    if (!id) {
      setDetailOpened(null);
    } else {
      setDetailOpened(id);
    }
  };
  var editListToDetails = function editListToDetails(id) {
    if (id) {
      setViewingList(null);
      setEditingList(id);
    } else {
      // console.log('Create new list. Setting listData')
      setViewingList(null);
      setEditingList(null);
      setListData({
        name: '',
        actions: []
      });
    }
  };
  var viewListToDetails = function viewListToDetails(id) {
    if (!id) {
      setViewedData(null);
    }
    setViewingList(id);
  };
  var onSelectAction = function onSelectAction(_ref2) {
    var id = _ref2.id,
      name = _ref2.name,
      level = _ref2.level;
    if (listData) {
      var newList = listData;
      newList.actions.push({
        id: id,
        name: name,
        time: 1,
        isAvailable: true
      });
      setListData(_objectSpread({}, newList));
      sendData('query-action-list-effects', {
        listData: newList
      });
    } else {
      if (selectedAction === id) {
        setSelectedAction(null);
      } else {
        setSelectedAction(id);
      }
    }
  };
  var onDropActionFromList = function onDropActionFromList(id) {
    if (listData) {
      var newList = listData;
      newList.actions = newList.actions.filter(function (a) {
        return a.id !== id;
      });
      setListData(_objectSpread({}, newList));
      sendData('query-action-list-effects', {
        listData: newList
      });
    }
  };
  var onUpdateActionFromList = function onUpdateActionFromList(id, key, value) {
    if (listData) {
      var newList = listData;
      newList.actions = newList.actions.map(function (a) {
        return a.id !== id ? a : _objectSpread(_objectSpread({}, a), {}, _defineProperty({}, key, value));
      });
      setListData(_objectSpread({}, newList));
      sendData('query-action-list-effects', {
        listData: newList
      });
    }
  };
  var onUpdateListValue = function onUpdateListValue(key, value) {
    console.log('Updating: ', key, value, listData, viewedData);
    if (listData) {
      var newList = listData;
      newList[key] = value;
      setListData(_objectSpread({}, newList));
      // sendData('query-action-list-effects', { id });
    }
  };
  var onCloseList = function onCloseList() {
    setEditingList(null);
    setListData(null);
  };
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState26 = _slicedToArray(_useState25, 2),
    overlayPositions = _useState26[0],
    setOverlayPositions = _useState26[1];
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
  var onDragEnd = function onDragEnd(result) {
    var source = result.source,
      destination = result.destination,
      draggableId = result.draggableId;
    if (!destination) return;
    var sourceDroppableId = source.droppableId;
    var destinationDroppableId = destination.droppableId;

    // Розбираємо draggableId
    var _draggableId$split = draggableId.split('-'),
      _draggableId$split2 = _slicedToArray(_draggableId$split, 3),
      type = _draggableId$split2[0],
      actionId = _draggableId$split2[1],
      actionIndex = _draggableId$split2[2];
    if (sourceDroppableId === 'custom-filters' && destinationDroppableId === 'custom-filters') {
      if (source.index !== destination.index) {
        sendData('actions-change-custom-filters-order', {
          sourceIndex: source.index,
          destinationIndex: destination.index
        });
      }
    }
    if (sourceDroppableId === 'available-actions' && destinationDroppableId === 'action-list-editor') {
      var action = actionsData.available.find(function (a) {
        return a.id.toString() === actionId;
      });
      if (action) {
        var newListData = _objectSpread({}, listData);
        newListData.actions = Array.from(newListData.actions);
        newListData.actions.splice(destination.index, 0, {
          id: action.id,
          name: action.name,
          time: 2,
          isAvailable: true
        });
        setListData(newListData);
        sendData('query-action-list-effects', {
          listData: newListData
        });
      }
    } else if (sourceDroppableId === 'action-list-editor' && destinationDroppableId === 'action-list-editor') {
      var newActions = Array.from(listData.actions);
      var _newActions$splice = newActions.splice(source.index, 1),
        _newActions$splice2 = _slicedToArray(_newActions$splice, 1),
        movedAction = _newActions$splice2[0];
      newActions.splice(destination.index, 0, movedAction);
      var _newListData = _objectSpread(_objectSpread({}, listData), {}, {
        actions: newActions
      });
      setListData(_newListData);
      sendData('query-action-list-effects', {
        listData: _newListData
      });
    }
  };
  var setAutotriggerPriority = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (priority) {
    if (listData) {
      var newList = (0,lodash__WEBPACK_IMPORTED_MODULE_11__.cloneDeep)(listData);
      if (!newList.autotrigger) {
        newList.autotrigger = {};
      }
      if (!newList.autotrigger.rules) {
        newList.autotrigger.rules = [];
      }
      newList.autotrigger.priority = priority;
      setListData(_objectSpread({}, newList));
    }
  }, [listData]);
  var onSetAutotriggerPattern = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (pattern) {
    if (listData) {
      var newList = (0,lodash__WEBPACK_IMPORTED_MODULE_11__.cloneDeep)(listData);
      if (!newList.autotrigger) {
        newList.autotrigger = {};
      }
      if (!newList.autotrigger.rules) {
        newList.autotrigger.rules = [];
      }
      newList.autotrigger.pattern = pattern;
      setListData(_objectSpread({}, newList));
    }
  }, [listData]);
  var onToggleAutotrigger = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (listData) {
      var newList = (0,lodash__WEBPACK_IMPORTED_MODULE_11__.cloneDeep)(listData);
      if (!newList.autotrigger) {
        newList.autotrigger = {};
      }
      if (!newList.autotrigger.rules) {
        newList.autotrigger.rules = [];
      }
      newList.autotrigger.isEnabled = !newList.autotrigger.isEnabled;
      setListData(_objectSpread({}, newList));
    }
  }, [listData]);
  var onAddAutotriggerRule = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (listData) {
      var newList = (0,lodash__WEBPACK_IMPORTED_MODULE_11__.cloneDeep)(listData);
      if (!newList.autotrigger) {
        newList.autotrigger = {};
      }
      if (!newList.autotrigger.rules) {
        newList.autotrigger.rules = [];
      }
      newList.autotrigger.rules.push({
        resource_id: resources[0].id,
        condition: 'less_or_eq',
        value_type: 'percentage',
        value: 50
      });
      setListData(_objectSpread({}, newList));
    }
  }, [listData]);
  var onSetAutotriggerRuleValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (index, key, value) {
    if (listData) {
      var newList = (0,lodash__WEBPACK_IMPORTED_MODULE_11__.cloneDeep)(listData);
      if (!newList.autotrigger) {
        newList.autotrigger = {};
      }
      if (!newList.autotrigger.rules) {
        newList.autotrigger.rules = [];
      }
      newList.autotrigger.rules[index] = _objectSpread(_objectSpread({}, newList.autotrigger.rules[index]), {}, _defineProperty({}, key, value));
      setListData(_objectSpread({}, newList));
    }
  }, [listData]);
  var onDeleteAutotriggerRule = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (index) {
    if (listData) {
      var newList = (0,lodash__WEBPACK_IMPORTED_MODULE_11__.cloneDeep)(listData);
      if (!newList.autotrigger) {
        newList.autotrigger = {};
      }
      if (!newList.autotrigger.rules) {
        newList.autotrigger.rules = [];
      }
      newList.autotrigger.rules.splice(index, 1);
      setListData(_objectSpread({}, newList));
    }
  }, [listData]);
  var toggleAutomation = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    sendData('set-automation-enabled', {
      flag: !actionsData.automationEnabled
    });
  });
  var changeAutomationInterval = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (interval) {
    sendData('set-autotrigger-interval', {
      interval: interval
    });
  });
  var toggleShowHidden = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    sendData('toggle-show-hidden', !actionsData.showHidden);
  });
  var toggleHiddenAction = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id, flag) {
    sendData('toggle-hidden-action', {
      id: id,
      flag: flag
    });
  });
  var setSearch = function setSearch(searchData) {
    console.log('SetSearch: ', searchData);
    sendData('set-actions-search', {
      searchData: searchData
    });
  };
  var handlePinToggle = function handlePinToggle(id, newFlag) {
    sendData('toggle-actions-custom-filter-pinned', {
      id: id,
      flag: newFlag
    });
  };
  var handleApplyFilter = function handleApplyFilter(id) {
    sendData('apply-actions-custom-filter', {
      id: id
    });
  };
  var handleEditFilter = function handleEditFilter(id) {
    // знаходите фільтр, відкриваєте форму редагування
    // наприклад:
    var filterData = actionsData.customFilters[id];
    setEditingCustomFilter(_objectSpread({}, filterData));
  };
  var handleDeleteFilter = function handleDeleteFilter(id) {
    sendData('delete-actions-custom-filter', {
      id: id
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_22__.DragDropContext, {
    onDragEnd: onDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'actions-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'ingame-box actions'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'categories flex-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: 'menu'
  }, actionsData.actionCategories.filter(function (one) {
    return one.isPinned || one.isSelected;
  }).map(function (category) {
    var _newUnlocks$actions;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: category.id,
      className: "category ".concat(category.isSelected ? 'active' : ''),
      onClick: function onClick() {
        return setActionsFilter(category.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_13__.NewNotificationWrap, {
      isNew: (_newUnlocks$actions = newUnlocks.actions) === null || _newUnlocks$actions === void 0 || (_newUnlocks$actions = _newUnlocks$actions.items) === null || _newUnlocks$actions === void 0 || (_newUnlocks$actions = _newUnlocks$actions.all) === null || _newUnlocks$actions === void 0 || (_newUnlocks$actions = _newUnlocks$actions.items) === null || _newUnlocks$actions === void 0 || (_newUnlocks$actions = _newUnlocks$actions[category.id]) === null || _newUnlocks$actions === void 0 ? void 0 : _newUnlocks$actions.hasNew
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, category.name, "(", category.items.length, ")")));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: 'add-custom-filter additional'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'icon-content edit-icon interface-icon tiny',
    onClick: function onClick() {
      return editList(runningList.id);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "icons/interface/edit-icon.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'create-custom',
    onClick: function onClick() {
      setCustomFilterOpened(true);
      // setEditingCustomFilter({ rules: [], condition: '', category: 'action', name: ''})
    }
  }, "Edit Filters"), isCustomFilterOpened ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'custom-filter-edit-wrap'
  }, editingCustomFilter ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_custom_filter_jsx__WEBPACK_IMPORTED_MODULE_17__["default"], {
    prefix: 'actions-filter',
    category: 'action',
    id: editingCustomFilter === null || editingCustomFilter === void 0 ? void 0 : editingCustomFilter.id,
    name: editingCustomFilter === null || editingCustomFilter === void 0 ? void 0 : editingCustomFilter.name,
    rules: editingCustomFilter === null || editingCustomFilter === void 0 ? void 0 : editingCustomFilter.rules,
    condition: editingCustomFilter === null || editingCustomFilter === void 0 ? void 0 : editingCustomFilter.condition,
    onCancel: function onCancel() {
      setEditingCustomFilter(null);
    },
    onSave: function onSave(data) {
      console.log('saving: ', data);
      sendData('save-actions-custom-filter', data);
      setEditingCustomFilter(null);
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_custom_filter_list_jsx__WEBPACK_IMPORTED_MODULE_20__["default"], {
    filterOrder: actionsData.customFiltersOrder,
    filters: actionsData.customFilters,
    onPinToggle: handlePinToggle,
    onApply: handleApplyFilter,
    onEdit: handleEditFilter,
    onDelete: handleDeleteFilter,
    showAddButton: true,
    onAdd: handleAddFilter,
    showCloseButton: true,
    onClose: handleClose
  })) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'additional-filters'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_search_field_jsx__WEBPACK_IMPORTED_MODULE_14__.SearchField, {
    placeholder: 'Search',
    value: actionsData.searchData || '',
    onSetValue: function onSetValue(val) {
      return setSearch(val);
    },
    scopes: ACTIONS_SEARCH_SCOPES
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: !!actionsData.showHidden,
    onChange: toggleShowHidden
  }), "Show hidden"), isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'highlighted-span',
    onClick: function onClick() {
      return setDetailVisible(true);
    }
  }, "Info")) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_how_to_sign_jsx__WEBPACK_IMPORTED_MODULE_15__.HowToSign, {
    scope: 'actions'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'list-wrap',
    id: 'actions-list-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_22__.Droppable, {
    droppableId: "available-actions",
    isDropDisabled: true
  }, function (provided) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
      ref: provided.innerRef
    }, provided.droppableProps, {
      className: "flex-container"
    }), actionsData.available.map(function (action, index) {
      var _newUnlocks$actions2;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_13__.NewNotificationWrap, {
        key: action.id,
        id: action.id,
        className: 'narrow-wrapper',
        isNew: (_newUnlocks$actions2 = newUnlocks.actions) === null || _newUnlocks$actions2 === void 0 || (_newUnlocks$actions2 = _newUnlocks$actions2.items) === null || _newUnlocks$actions2 === void 0 || (_newUnlocks$actions2 = _newUnlocks$actions2.all) === null || _newUnlocks$actions2 === void 0 || (_newUnlocks$actions2 = _newUnlocks$actions2.items) === null || _newUnlocks$actions2 === void 0 || (_newUnlocks$actions2 = _newUnlocks$actions2[actionsData.selectedCategory]) === null || _newUnlocks$actions2 === void 0 || (_newUnlocks$actions2 = _newUnlocks$actions2.items) === null || _newUnlocks$actions2 === void 0 || (_newUnlocks$actions2 = _newUnlocks$actions2[action.id]) === null || _newUnlocks$actions2 === void 0 ? void 0 : _newUnlocks$actions2.hasNew
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ActionCard, _extends({
        isEditingList: !!listData,
        index: index,
        key: action.id
      }, action, {
        onFlash: handleFlash,
        onActivate: activateAction,
        onShowDetails: setActionDetails,
        onSelect: onSelectAction,
        toggleHiddenAction: toggleHiddenAction,
        isSelected: selectedAction && selectedAction === action.id
      })));
    }), provided.placeholder);
  }), overlayPositions.map(function (position, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_flash_overlay_jsx__WEBPACK_IMPORTED_MODULE_7__.FlashOverlay, {
      key: index,
      position: position
    });
  })))), actionsData.actionListsUnlocked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_actions_lists_jsx__WEBPACK_IMPORTED_MODULE_19__.ActionListsPanel, {
    automationUnlocked: actionsData.automationUnlocked,
    editListToDetails: editListToDetails,
    lists: actionsData.actionLists,
    viewListToDetails: viewListToDetails,
    runningList: actionsData.runningList,
    automationEnabled: actionsData.automationEnabled,
    toggleAutomation: toggleAutomation,
    autotriggerIntervalSetting: actionsData.autotriggerIntervalSetting,
    changeAutomationInterval: changeAutomationInterval
  }) : null), !isMobile || isDetailVisible || listData || viewedData || selectedAction ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "action-detail ingame-box detail-blade ".concat(listData ? 'wide-blade' : '', " ").concat(viewedData || listData ? 'forced-bottom' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DetailBlade, {
    actionId: detailOpened !== null && detailOpened !== void 0 ? detailOpened : selectedAction,
    isSelected: selectedAction && (!detailOpened || detailOpened === selectedAction),
    editListId: editingList,
    listData: listData,
    viewListId: viewingList,
    onUpdateActionFromList: onUpdateActionFromList,
    onDropActionFromList: onDropActionFromList,
    onUpdateListValue: onUpdateListValue,
    onCloseList: onCloseList,
    viewedData: viewedData,
    onAddAutotriggerRule: onAddAutotriggerRule,
    onSetAutotriggerRuleValue: onSetAutotriggerRuleValue,
    onDeleteAutotriggerRule: onDeleteAutotriggerRule,
    setAutotriggerPriority: setAutotriggerPriority,
    onSetAutotriggerPattern: onSetAutotriggerPattern,
    onToggleAutotrigger: onToggleAutotrigger,
    resources: resources,
    automationUnlocked: actionsData.automationUnlocked,
    stats: actionsData.stats,
    aspects: actionsData.aspects,
    onCloseDetails: function onCloseDetails() {
      return setSelectedAction(null);
    },
    setDetailVisible: setDetailVisible
  })) : null));
};
var DetailBlade = function DetailBlade(_ref3) {
  var actionId = _ref3.actionId,
    isSelected = _ref3.isSelected,
    viewListId = _ref3.viewListId,
    viewedData = _ref3.viewedData,
    editListId = _ref3.editListId,
    listData = _ref3.listData,
    onUpdateActionFromList = _ref3.onUpdateActionFromList,
    onDropActionFromList = _ref3.onDropActionFromList,
    onUpdateListValue = _ref3.onUpdateListValue,
    onCloseList = _ref3.onCloseList,
    onAddAutotriggerRule = _ref3.onAddAutotriggerRule,
    onSetAutotriggerRuleValue = _ref3.onSetAutotriggerRuleValue,
    onDeleteAutotriggerRule = _ref3.onDeleteAutotriggerRule,
    setAutotriggerPriority = _ref3.setAutotriggerPriority,
    onSetAutotriggerPattern = _ref3.onSetAutotriggerPattern,
    onToggleAutotrigger = _ref3.onToggleAutotrigger,
    resources = _ref3.resources,
    automationUnlocked = _ref3.automationUnlocked,
    stats = _ref3.stats,
    aspects = _ref3.aspects,
    onCloseDetails = _ref3.onCloseDetails,
    setDetailVisible = _ref3.setDetailVisible;
  if (listData) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_actions_blades_jsx__WEBPACK_IMPORTED_MODULE_18__.ListEditor, {
      listData: listData,
      editListId: editListId,
      onUpdateActionFromList: onUpdateActionFromList,
      onDropActionFromList: onDropActionFromList,
      onUpdateListValue: onUpdateListValue,
      onCloseList: onCloseList,
      isEditing: true,
      onAddAutotriggerRule: onAddAutotriggerRule,
      onSetAutotriggerRuleValue: onSetAutotriggerRuleValue,
      onDeleteAutotriggerRule: onDeleteAutotriggerRule,
      setAutotriggerPriority: setAutotriggerPriority,
      onSetAutotriggerPattern: onSetAutotriggerPattern,
      onToggleAutotrigger: onToggleAutotrigger,
      resources: resources,
      automationUnlocked: automationUnlocked
    });
  }
  if (actionId) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_actions_blades_jsx__WEBPACK_IMPORTED_MODULE_18__.ActionDetails, {
      actionId: actionId,
      onClose: onCloseDetails,
      isSelected: isSelected
    });
  }
  if (viewedData) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_actions_blades_jsx__WEBPACK_IMPORTED_MODULE_18__.ListEditor, {
      listData: viewedData,
      editListId: viewListId,
      onUpdateActionFromList: onUpdateActionFromList,
      onDropActionFromList: onDropActionFromList,
      onUpdateListValue: onUpdateListValue,
      onCloseList: onCloseList,
      isEditing: false,
      onAddAutotriggerRule: onAddAutotriggerRule,
      onSetAutotriggerRuleValue: onSetAutotriggerRuleValue,
      onDeleteAutotriggerRule: onDeleteAutotriggerRule,
      setAutotriggerPriority: setAutotriggerPriority,
      onToggleAutotrigger: onToggleAutotrigger,
      resources: resources,
      automationUnlocked: automationUnlocked
    });
  }
  if (listData || editListId) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_actions_blades_jsx__WEBPACK_IMPORTED_MODULE_18__.ListEditor, {
      listData: listData,
      editListId: editListId,
      onUpdateActionFromList: onUpdateActionFromList,
      onDropActionFromList: onDropActionFromList,
      onUpdateListValue: onUpdateListValue,
      onCloseList: onCloseList,
      isEditing: true,
      onAddAutotriggerRule: onAddAutotriggerRule,
      onSetAutotriggerRuleValue: onSetAutotriggerRuleValue,
      onDeleteAutotriggerRule: onDeleteAutotriggerRule,
      setAutotriggerPriority: setAutotriggerPriority,
      onToggleAutotrigger: onToggleAutotrigger,
      resources: resources,
      automationUnlocked: automationUnlocked
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_actions_blades_jsx__WEBPACK_IMPORTED_MODULE_18__.GeneralStats, {
    stats: stats,
    aspects: aspects,
    setDetailVisible: setDetailVisible
  });
};
var ActionCard = function ActionCard(_ref4) {
  var id = _ref4.id,
    category = _ref4.category,
    monitored = _ref4.monitored,
    entityEfficiency = _ref4.entityEfficiency,
    isEditingList = _ref4.isEditingList,
    index = _ref4.index,
    name = _ref4.name,
    level = _ref4.level,
    max = _ref4.max,
    xp = _ref4.xp,
    maxXP = _ref4.maxXP,
    xpRate = _ref4.xpRate,
    isActive = _ref4.isActive,
    effort = _ref4.effort,
    isLeveled = _ref4.isLeveled,
    focused = _ref4.focused,
    isTraining = _ref4.isTraining,
    actionEffect = _ref4.actionEffect,
    currentEffects = _ref4.currentEffects,
    potentialEffects = _ref4.potentialEffects,
    isHidden = _ref4.isHidden,
    onFlash = _ref4.onFlash,
    onSelect = _ref4.onSelect,
    onActivate = _ref4.onActivate,
    onShowDetails = _ref4.onShowDetails,
    toggleHiddenAction = _ref4.toggleHiddenAction,
    missingResourceId = _ref4.missingResourceId,
    isSelected = _ref4.isSelected,
    props = _objectWithoutProperties(_ref4, _excluded);
  var elementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useTutorial = (0,_context_tutorial_context__WEBPACK_IMPORTED_MODULE_16__.useTutorial)(),
    stepIndex = _useTutorial.stepIndex,
    unlockNextById = _useTutorial.unlockNextById,
    jumpOver = _useTutorial.jumpOver;
  (0,_general_hooks_flash__WEBPACK_IMPORTED_MODULE_8__.useFlashOnLevelUp)(isLeveled, onFlash, elementRef);
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState28 = _slicedToArray(_useState27, 2),
    isXpVisible = _useState28[0],
    setIsXpVisible = _useState28[1];
  if (id === 'action_visit_city') {
    if (level < 2) {
      console.log('AVC: ', stepIndex);
      unlockNextById(12);
    }
  }
  if (id === 'action_beggar') {
    if (stepIndex < 13) {
      unlockNextById(12);
    }
    unlockNextById(13);
  }
  if (id === 'action_walk' && level > 1 && stepIndex === 8) {
    console.log('JUMP! ');
    jumpOver(11);
  }
  var comp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_22__.Draggable, {
    key: "available-".concat(id),
    draggableId: "available-".concat(id),
    index: index,
    isDragDisabled: !isEditingList
  }, function (provided) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
      ref: provided.innerRef
    }, provided.draggableProps, provided.dragHandleProps, {
      id: "item_".concat(id),
      className: "card ".concat(category, " action ").concat(isSelected ? 'selected' : '', " ").concat(isActive ? 'active' : '', " ").concat(entityEfficiency < 1 ? ' efficiency-dropped' : '', " flashable ").concat(monitored !== null && monitored !== void 0 ? monitored : ''),
      onMouseEnter: function onMouseEnter() {
        onShowDetails(id);
      },
      onMouseOver: function onMouseOver() {
        onShowDetails(id);
      },
      onMouseLeave: function onMouseLeave() {
        if (stepIndex !== 6) {
          onShowDetails(null);
        }
      },
      onClick: function onClick() {
        return onSelect({
          id: id,
          name: name,
          level: level
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'head'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: 'title'
    }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: 'level'
    }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(level), max ? "/".concat((0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(max)) : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'bottom'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'xp-box'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: 'xp-text'
    }, "XP: ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(xp), "/", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(maxXP)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_9__.TippyWrapper, {
      lazy: true,
      content: isXpVisible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_action_xp_breakdown_jsx__WEBPACK_IMPORTED_MODULE_12__.ActionXPBreakdown, {
        id: id
      }) : null,
      onShow: function onShow() {
        return setIsXpVisible(true);
      },
      onHide: function onHide() {
        return setIsXpVisible(false);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "xp-income highlighted-span ".concat(entityEfficiency < 1 ? ' yellow' : '')
    }, "+", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(xpRate), entityEfficiency < 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: 'small-hint yellow'
    }, "\xA0(", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(100 * entityEfficiency), "%)") : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      id: "level_up_indicator_".concat(id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_progress_bar_jsx__WEBPACK_IMPORTED_MODULE_4__.ProgressBar, {
      className: 'action-progress',
      percentage: xp / maxXP
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'buttons'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'buttons-inner-wrap'
    }, isActive ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_9__.TippyWrapper, {
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'hint-popup'
      }, "Stop Action")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'icon-content interface-icon small',
      onClick: function onClick(e) {
        e.preventDefault();
        e.stopPropagation();
        onActivate();
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: "icons/interface/pause.png"
    }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_9__.TippyWrapper, {
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'hint-popup'
      }, "Start Action")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      id: "activate_".concat(id),
      className: 'icon-content interface-icon small',
      onClick: function onClick(e) {
        e.preventDefault();
        e.stopPropagation();
        unlockNextById(8);
        onActivate(id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: "icons/interface/run.png"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_9__.TippyWrapper, {
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'hint-popup'
      }, isHidden ? 'Show Action' : 'Hide Action')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'icon-content interface-icon small',
      onClick: function onClick(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleHiddenAction(id, !isHidden);
      }
    }, isHidden ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: "icons/interface/icon_show.png"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: "icons/interface/icon_hide.png"
    })))), focused && focused.isFocused ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_9__.TippyWrapper, {
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'hint-popup'
      }, !focused.isCapped ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "You are running this action for ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.secondsToString)(focused.focusTime)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Your focus is capped at ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.secondsToString)(focused.cap)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Focus providing x", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(focused.focusBonus), " to your learning speed"))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'icon-content focused-icon'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: "icons/interface/focused.png"
    }))) : null)), isActive ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'bottom-bar'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'progress-bg'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'progress-bar',
      style: {
        width: "".concat(100 * isActive.effort, "%")
      }
    }))) : null);
  });
  if (!isEditingList) return comp;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_9__.TippyWrapper, {
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'hint-popup effects-popup'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'block'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Action Effects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'effects'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_effects_section_jsx__WEBPACK_IMPORTED_MODULE_6__.EffectsSection, {
      effects: actionEffect,
      maxDisplay: 10
    }))), isTraining ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'block'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Action LevelUp bonuses"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'effects'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_resource_comparison_jsx__WEBPACK_IMPORTED_MODULE_10__.ResourceComparison, {
      effects1: currentEffects,
      effects2: potentialEffects
    }))) : null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, comp));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/actions/actions.jsx?
