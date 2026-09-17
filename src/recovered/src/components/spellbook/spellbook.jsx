__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralStats: () => (/* binding */ GeneralStats),
/* harmony export */   SpellCard: () => (/* binding */ SpellCard),
/* harmony export */   SpellDetails: () => (/* binding */ SpellDetails),
/* harmony export */   Spellbook: () => (/* binding */ Spellbook)
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
/* harmony import */ var _shared_circular_progress_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/circular-progress.jsx */ "./src/components/shared/circular-progress.jsx");
/* harmony import */ var _layout_flash_overlay_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layout/flash-overlay.jsx */ "./src/components/layout/flash-overlay.jsx");
/* harmony import */ var _general_hooks_flash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../general/hooks/flash */ "./src/general/hooks/flash.js");
/* harmony import */ var _shared_rules_list_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/rules-list.jsx */ "./src/components/shared/rules-list.jsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/new-notification-wrap.jsx */ "./src/components/shared/new-notification-wrap.jsx");
/* harmony import */ var _context_ui_context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../context/ui-context */ "./src/context/ui-context.js");
/* harmony import */ var _shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/tippy-wrapper.jsx */ "./src/components/shared/tippy-wrapper.jsx");
/* harmony import */ var _shared_stat_row_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/stat-row.jsx */ "./src/components/shared/stat-row.jsx");
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
















var Spellbook = function Spellbook(_ref) {
  _objectDestructuringEmpty(_ref);
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useAppContext = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_13__.useAppContext)(),
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
      current: undefined
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    spellData = _useState4[0],
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
      sendData('query-spell-details', {
        id: id
      });
    }
  }, [viewedOpenedId, detailOpenedId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // console.log('SpellChanged: ', isChanged)
  }, [isChanged]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // console.log('New editData: ', editData);
  }, [editData]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var interval = setInterval(function () {
      sendData('query-spell-data', {});
    }, 100);
    sendData('query-all-resources', {});
    var interval2 = setInterval(function () {
      sendData('query-new-unlocks-notifications', {
        suffix: 'spellbook',
        scope: 'spellbook'
      });
    }, 1000);
    return function () {
      clearInterval(interval);
    };
  }, []);
  onMessage('new-unlocks-notifications-spellbook', function (payload) {
    setNewUnlocks(payload);
  });
  onMessage('all-resources', function (payload) {
    setResources(payload);
  });
  onMessage('spell-details', function (payload) {
    // console.log(`currViewing: ${viewedOpenedId}, edit: ${detailOpenedId}`, payload);
    if (viewedOpenedId) {
      setViewedData(payload);
    } else if (detailOpenedId) {
      setEditData(payload);
      setViewedData(null);
    }
  });
  onMessage('spell-level-effects', function (payload) {
    if (editData) {
      setEditData(_objectSpread(_objectSpread({}, editData), {}, {
        effects: payload.effects,
        potentialEffects: payload.potentialEffects,
        affordable: payload.affordable,
        xpRate: payload.xpRate
      }));
    }
  });
  onMessage('spell-data', function (spell) {
    setItemsData(spell);
  });
  var purchaseItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id) {
    sendData('use-spell', {
      id: id,
      amount: 1
    });
  });
  var setSpellDetailsEdit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_ref2) {
    var id = _ref2.id,
      name = _ref2.name;
    sendData('set-monitored', {
      scope: 'effects',
      type: 'spell',
      id: id
    });
    if (id) {
      // console.log('Edit: ', id, detailOpenedId, isChanged);
      if (detailOpenedId && isChanged) {
        if (!confirm("这将丢弃所有更改对于 ".concat(detailOpenedId.name, ". 你确定吗"))) {
          return;
        }
      }
      setViewedOpenedId(null);
      setDetailOpenedId({
        id: id,
        name: name
      });
      setChanged(false);
    }
  }, [isChanged, detailOpenedId]);
  var setSpellDetailsView = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id) {
    sendData('set-monitored', {
      scope: 'effects',
      type: 'spell',
      id: id
    });
    if (!id) {
      setViewedOpenedId(null);
      setViewedData(null);
      return;
    }
    setViewedOpenedId(id);
  });
  var onChangeLevel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (level) {
    if (editData) {
      var newEdit = (0,lodash__WEBPACK_IMPORTED_MODULE_11__.cloneDeep)(editData);
      newEdit.actualLevel = level;
      setEditData(newEdit);
      setChanged(true);
      sendData('get-spell-level-effects', {
        id: editData.id,
        level: level
      });
    }
  }, [editData]);
  var onSetAutocastPattern = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (pattern) {
    if (editData) {
      var newEdit = (0,lodash__WEBPACK_IMPORTED_MODULE_11__.cloneDeep)(editData);
      if (!newEdit.autocast) {
        newEdit.autocast = {};
      }
      if (!newEdit.autocast.rules) {
        newEdit.autocast.rules = [];
      }
      newEdit.autocast.pattern = pattern;
      setEditData(_objectSpread({}, newEdit));
      setChanged(true);
    }
  }, [editData]);
  var onAddAutoconsumeRule = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (editData) {
      var newEdit = (0,lodash__WEBPACK_IMPORTED_MODULE_11__.cloneDeep)(editData);
      newEdit.autocast.rules.push({
        resource_id: resources[0].id,
        condition: 'less_or_eq',
        value_type: 'percentage',
        value: 50
      });
      setEditData(newEdit);
      setChanged(true);
    }
  }, [editData]);
  var onDeleteAutoconsumeRule = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (index) {
    if (editData) {
      var newEdit = (0,lodash__WEBPACK_IMPORTED_MODULE_11__.cloneDeep)(editData);
      newEdit.autocast.rules.splice(index, 1);
      setEditData(newEdit);
      setChanged(true);
    }
  }, [editData]);
  var onSetAutoconsumeRuleValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (index, key, value) {
    setEditData(function (prevEditData) {
      if (!prevEditData) return prevEditData;
      var newEdit = (0,lodash__WEBPACK_IMPORTED_MODULE_11__.cloneDeep)(prevEditData);
      newEdit.autocast.rules[index] = _objectSpread(_objectSpread({}, newEdit.autocast.rules[index]), {}, _defineProperty({}, key, value));
      // console.log('Setting Value with updated editData: ', newEdit);
      return newEdit;
    });
    setChanged(true);
  }, [editData]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // console.log('New version of onSetAutoconsumeRuleValue created with editData:', editData);
  }, [onSetAutoconsumeRuleValue]);
  var onToggleAutotrigger = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (editData) {
      var newEdit = (0,lodash__WEBPACK_IMPORTED_MODULE_11__.cloneDeep)(editData);
      if (!newEdit.autocast) {
        newEdit.autocast = {};
      }
      newEdit.autocast.isEnabled = !newEdit.autocast.isEnabled;
      setEditData(newEdit);
      setChanged(true);
    }
  }, [editData]);
  var onSave = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    // console.log('saving: ', editData);
    sendData('save-spell-settings', editData);
    setChanged(false);
    if (isMobile) {
      onCancel();
    }
  });
  var onCancel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setViewedOpenedId(null);
    setDetailOpenedId(null);
    setEditData(null);
    setViewedData(null);
    setChanged(false);
  });
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState20 = _slicedToArray(_useState19, 2),
    overlayPositions = _useState20[0],
    setOverlayPositions = _useState20[1];
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'spell-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'ingame-box spell'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'flex-container'
  }, spellData.available.map(function (item) {
    var _newUnlocks$spellbook;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_12__.NewNotificationWrap, {
      id: "spell_".concat(item.id),
      className: 'narrow-wrapper',
      isNew: (_newUnlocks$spellbook = newUnlocks.spellbook) === null || _newUnlocks$spellbook === void 0 || (_newUnlocks$spellbook = _newUnlocks$spellbook.items) === null || _newUnlocks$spellbook === void 0 || (_newUnlocks$spellbook = _newUnlocks$spellbook.spellbook) === null || _newUnlocks$spellbook === void 0 || (_newUnlocks$spellbook = _newUnlocks$spellbook.items) === null || _newUnlocks$spellbook === void 0 || (_newUnlocks$spellbook = _newUnlocks$spellbook.all) === null || _newUnlocks$spellbook === void 0 || (_newUnlocks$spellbook = _newUnlocks$spellbook.items) === null || _newUnlocks$spellbook === void 0 || (_newUnlocks$spellbook = _newUnlocks$spellbook["spell_".concat(item.id)]) === null || _newUnlocks$spellbook === void 0 ? void 0 : _newUnlocks$spellbook.hasNew
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SpellCard, _extends({
      isChanged: isChanged,
      key: item.id
    }, item, {
      onPurchase: purchaseItem,
      onFlash: handleFlash,
      onShowDetails: setSpellDetailsView,
      onEditConfig: setSpellDetailsEdit,
      isMobile: isMobile
    })));
  }), overlayPositions.map(function (position, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_flash_overlay_jsx__WEBPACK_IMPORTED_MODULE_8__.FlashOverlay, {
      key: index,
      position: position
    });
  })))), !isMobile || editData || viewedData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'item-detail ingame-box detail-blade'
  }, editData || viewedData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SpellDetails, {
    isChanged: isChanged,
    editData: editData,
    viewedData: viewedData,
    resources: resources,
    onAddAutoconsumeRule: onAddAutoconsumeRule,
    onSetAutoconsumeRuleValue: onSetAutoconsumeRuleValue,
    onDeleteAutoconsumeRule: onDeleteAutoconsumeRule,
    onSetAutocastPattern: onSetAutocastPattern,
    onChangeLevel: onChangeLevel,
    onSave: onSave,
    onCancel: onCancel,
    onToggleAutotrigger: onToggleAutotrigger,
    automationUnlocked: spellData.automationUnlocked,
    isMobile: isMobile,
    onPurchase: purchaseItem
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GeneralStats, {
    setDetailVisible: setDetailVisible
  })) : null);
};
var SpellCard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function (_ref3) {
  var id = _ref3.id,
    monitored = _ref3.monitored,
    name = _ref3.name,
    isCasted = _ref3.isCasted,
    cooldownProg = _ref3.cooldownProg,
    isActive = _ref3.isActive,
    cooldown = _ref3.cooldown,
    onFlash = _ref3.onFlash,
    onPurchase = _ref3.onPurchase,
    onShowDetails = _ref3.onShowDetails,
    onEditConfig = _ref3.onEditConfig,
    isMobile = _ref3.isMobile;
  var elementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,_general_hooks_flash__WEBPACK_IMPORTED_MODULE_9__.useFlashOnLevelUp)(isCasted, onFlash, elementRef);
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
    // console.log('Triger onpurchase: ', id);
    onPurchase(id); // Your custom right-click action
  };

  // RERENDERING
  // console.log('Item: ', id, cooldownProg, cooldown);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: elementRef,
    className: "icon-card item bigger flashable spell-card  ".concat(isActive ? 'active' : '', " ").concat(monitored !== null && monitored !== void 0 ? monitored : ''),
    onMouseEnter: function onMouseEnter() {
      return !isMobile ? onShowDetails(id) : null;
    },
    onMouseLeave: function onMouseLeave() {
      return !isMobile ? onShowDetails(null) : null;
    },
    onClick: handleClick,
    onContextMenu: handleContextMenu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'icon-content'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_circular_progress_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
    progress: cooldownProg
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "icons/spells/".concat(id, ".png"),
    className: 'resource'
  }))));
}, function (prevProps, currProps) {
  if (prevProps.id !== currProps.id) {
    return false;
  }
  if (prevProps.monitored !== currProps.monitored) {
    return false;
  }
  if (prevProps.amount !== currProps.amount) {
    return false;
  }
  if (prevProps.cooldownProg !== currProps.cooldownProg) {
    return false;
  }
  if (prevProps.isCasted !== currProps.isCasted) {
    return false;
  }
  if (prevProps.isChanged !== currProps.isChanged) {
    return false;
  }
  // console.log('Rerender: ', prevProps, curr);
  return true;
});
var SpellDetails = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function (_ref4) {
  var _spellDetails$afforda, _item$autocast, _item$autocast2, _item$autocast3, _item$autocast4, _item$autocast5;
  var isChanged = _ref4.isChanged,
    editData = _ref4.editData,
    viewedData = _ref4.viewedData,
    resources = _ref4.resources,
    onAddAutoconsumeRule = _ref4.onAddAutoconsumeRule,
    onSetAutoconsumeRuleValue = _ref4.onSetAutoconsumeRuleValue,
    onDeleteAutoconsumeRule = _ref4.onDeleteAutoconsumeRule,
    onSetAutocastPattern = _ref4.onSetAutocastPattern,
    onChangeLevel = _ref4.onChangeLevel,
    onSave = _ref4.onSave,
    onCancel = _ref4.onCancel,
    onToggleAutotrigger = _ref4.onToggleAutotrigger,
    automationUnlocked = _ref4.automationUnlocked,
    isMobile = _ref4.isMobile,
    onPurchase = _ref4.onPurchase;
  var item = (0,lodash__WEBPACK_IMPORTED_MODULE_11__.cloneDeep)(viewedData ? viewedData : editData);
  var isEditing = !!editData && !viewedData;
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState22 = _slicedToArray(_useState21, 2),
    spellDetails = _useState22[0],
    setSpellDetails = _useState22[1];
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient2 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient2.onMessage,
    sendData = _useWorkerClient2.sendData;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!item) return;
    sendData('query-spell-details', {
      id: item.id,
      prefix: 'detail'
    });
    var timeout = setInterval(function () {
      sendData('query-spell-details', {
        id: item.id,
        prefix: 'detail'
      });
    }, 500);
    return function () {
      clearInterval(timeout);
    };
  }, [item === null || item === void 0 ? void 0 : item.id]);
  onMessage('detail-spell-details', function (data) {
    setSpellDetails(data);
  });
  if (!item) return null;
  var addAutoconsumeRule = function addAutoconsumeRule() {
    onAddAutoconsumeRule();
  };
  var setAutoconsumeRuleValue = function setAutoconsumeRuleValue(index, key, value) {
    onSetAutoconsumeRuleValue(index, key, value);
  };
  var deleteAutoconsumeRule = function deleteAutoconsumeRule(index) {
    onDeleteAutoconsumeRule(index);
  };
  var setAutocastPattern = function setAutocastPattern(pattern) {
    onSetAutocastPattern(pattern);
  };
  var toggleAutotrigger = function toggleAutotrigger() {
    onToggleAutotrigger();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'blade-inner'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, item.name, item.currentDuration && item.currentDuration > 0 ? "  ".concat((0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.secondsToString)(item.currentDuration)) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'description'
  }, item.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'tags-container'
  }, item.tags.map(function (tag) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'tag'
    }, tag);
  }))), item.isSpellLevelingAvailable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'bottom'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'xp-box'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'xp-text'
  }, "XP: ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(item.xp), "/", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(item.maxXP)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'xp-income'
  }, "+", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(item.xpRate), " / Cast")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_progress_bar_jsx__WEBPACK_IMPORTED_MODULE_4__.ProgressBar, {
    className: 'action-progress',
    percentage: item.xp / item.maxXP
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'set-level'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Set level to "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: 'number',
    value: item.actualLevel,
    min: 1,
    max: item.maxLevel,
    onChange: function onChange(e) {
      return onChangeLevel(Math.floor(+e.target.value));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "of ", item.maxLevel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'hint'
  }, "Increasing level will increase spells cost and consumption but also increase their output")) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Cooldown: ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(item.cooldown), " seconds"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Price reduction ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'hint'
  }, "(Based on max level)"), ": x", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(item.maxLevelCostReduction))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Effects on usage:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'effects'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_effects_section_jsx__WEBPACK_IMPORTED_MODULE_6__.EffectsSection, {
    effects: item.effects
  }))), item.duration ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Spell duration: ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(item.duration)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Effects during cast:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_effects_section_jsx__WEBPACK_IMPORTED_MODULE_6__.EffectsSection, {
    effects: item.potentialEffects,
    maxDisplay: 10
  })) : null, isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'cast-block block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: !spellDetails || !((_spellDetails$afforda = spellDetails.affordable) !== null && _spellDetails$afforda !== void 0 && _spellDetails$afforda.isAffordable) || spellDetails.currentDuration > 0 || spellDetails.currentCooldown > 0,
    onClick: function onClick() {
      return onPurchase(item.id);
    }
  }, "Cast Spell"), spellDetails !== null && spellDetails !== void 0 && spellDetails.currentDuration ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'small'
  }, "Running: ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.secondsToString)(spellDetails === null || spellDetails === void 0 ? void 0 : spellDetails.currentDuration)) : null, spellDetails !== null && spellDetails !== void 0 && spellDetails.currentCooldown ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'small'
  }, "Cooldown: ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.secondsToString)(spellDetails === null || spellDetails === void 0 ? void 0 : spellDetails.currentCooldown)) : null) : null, automationUnlocked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'autoconsume-setting'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'rules-header flex-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Autospell rules: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: 'checkbox',
    checked: (_item$autocast = item.autocast) === null || _item$autocast === void 0 ? void 0 : _item$autocast.isEnabled,
    onChange: toggleAutotrigger
  }), (_item$autocast2 = item.autocast) !== null && _item$autocast2 !== void 0 && _item$autocast2.isEnabled ? ' ON' : ' OFF'), isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: addAutoconsumeRule
  }, "Add rule (AND)") : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_rules_list_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
    isEditing: isEditing,
    rules: ((_item$autocast3 = item.autocast) === null || _item$autocast3 === void 0 ? void 0 : _item$autocast3.rules) || [],
    resources: resources,
    pattern: (_item$autocast4 = item.autocast) === null || _item$autocast4 === void 0 ? void 0 : _item$autocast4.pattern,
    deleteRule: deleteAutoconsumeRule,
    setRuleValue: setAutoconsumeRuleValue,
    setPattern: setAutocastPattern,
    isAutoCheck: (_item$autocast5 = item.autocast) === null || _item$autocast5 === void 0 ? void 0 : _item$autocast5.isEnabled
  })) : null, isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'buttons flex-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: !isChanged,
    onClick: onSave
  }, "Save"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: !isChanged && !isMobile,
    onClick: onCancel
  }, "Cancel")) : null));
}, function (prevProps, currentProps) {
  if (prevProps.isChanged !== currentProps.isChanged) {
    //console.log('isChanged: ', prevProps.isChanged, currentProps.isChanged)
    return false;
  }
  if (prevProps.editData !== currentProps.editData) {
    var _currentProps$editDat, _prevProps$editData;
    console.log('editData not equals: ', (_currentProps$editDat = currentProps.editData) === null || _currentProps$editDat === void 0 || (_currentProps$editDat = _currentProps$editDat.autocast) === null || _currentProps$editDat === void 0 ? void 0 : _currentProps$editDat.rules, (_prevProps$editData = prevProps.editData) === null || _prevProps$editData === void 0 || (_prevProps$editData = _prevProps$editData.autocast) === null || _prevProps$editData === void 0 ? void 0 : _prevProps$editData.rules);
    return false;
  }
  if (prevProps.viewedData !== currentProps.viewedData) {
    //console.log('viewedChng: ', prevProps.viewedData, currentProps.viewedData)
    return false;
  }
  return true;
});
var GeneralStats = function GeneralStats(_ref5) {
  var _item$magic_schools;
  var setDetailVisible = _ref5.setDetailVisible;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useAppContext2 = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_13__.useAppContext)(),
    isMobile = _useAppContext2.isMobile;
  var _useWorkerClient3 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient3.onMessage,
    sendData = _useWorkerClient3.sendData;
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState24 = _slicedToArray(_useState23, 2),
    item = _useState24[0],
    setDetailOpened = _useState24[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sendData('query-general-magic-stats', {});
    var interval = setInterval(function () {
      sendData('query-general-magic-stats', {});
    }, 1000);
    return function () {
      clearInterval(interval);
    };
  }, []);
  onMessage('general-magic-stats', function (items) {
    setDetailOpened(items);
  });
  var highLightMagicSchools = function highLightMagicSchools(id) {
    sendData('set-monitored', {
      scope: 'spells',
      type: 'school_efficiency',
      id: id
    });
  };
  if (!item) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'blade-inner'
  }, item.general.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "General Stats")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, item.general.map(function (stat) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'row flex-row'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_14__.TippyWrapper, {
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'hint-popup'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, stat.description))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, stat.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(stat.value)));
  }))) : null, (_item$magic_schools = item.magic_schools) !== null && _item$magic_schools !== void 0 && _item$magic_schools.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Magic Schools")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, item.magic_schools.map(function (stat) {
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

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/spellbook/spellbook.jsx?
