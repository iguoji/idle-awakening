__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDetails: () => (/* binding */ ActionDetails),
/* harmony export */   ActionDetailsComponent: () => (/* binding */ ActionDetailsComponent),
/* harmony export */   GeneralStats: () => (/* binding */ GeneralStats),
/* harmony export */   ListEditor: () => (/* binding */ ListEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../general/client */ "./src/general/client.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_how_to_sign_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/how-to-sign.jsx */ "./src/components/shared/how-to-sign.jsx");
/* harmony import */ var _shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/tippy-wrapper.jsx */ "./src/components/shared/tippy-wrapper.jsx");
/* harmony import */ var _general_utils_strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../general/utils/strings */ "./src/general/utils/strings.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _shared_resource_comparison_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/resource-comparison.jsx */ "./src/components/shared/resource-comparison.jsx");
/* harmony import */ var _shared_effects_section_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/effects-section.jsx */ "./src/components/shared/effects-section.jsx");
/* harmony import */ var _shared_rules_list_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/rules-list.jsx */ "./src/components/shared/rules-list.jsx");
/* harmony import */ var _shared_stat_row_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/stat-row.jsx */ "./src/components/shared/stat-row.jsx");
/* harmony import */ var _context_tutorial_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../context/tutorial-context */ "./src/context/tutorial-context.js");
/* harmony import */ var _layout_progress_bar_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../layout/progress-bar.jsx */ "./src/components/layout/progress-bar.jsx");
/* harmony import */ var _context_ui_context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../context/ui-context */ "./src/context/ui-context.js");
/* harmony import */ var _general_hooks_local_cache__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../general/hooks/local-cache */ "./src/general/hooks/local-cache.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["onClose", "isSelected"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
















var ActionDetails = function ActionDetails(_ref) {
  var actionId = _ref.actionId,
    onClose = _ref.onClose,
    isSelected = _ref.isSelected;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    action = _useState2[0],
    setDetailOpened = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    interval = _useState4[0],
    setIntervalRef = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var intervalLoc = setInterval(function () {
      sendData('query-action-details', {
        id: actionId
      });
    }, 100);
    setIntervalRef(intervalLoc);
    return function () {
      clearInterval(intervalLoc);
    };
  }, [actionId]);
  onMessage('action-details', function (actions) {
    // console.log('received-details: ', actions, actionId);
    setDetailOpened(actions);
  });
  if (!actionId || !action) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ActionDetailsComponent, _extends({}, action, {
    onClose: onClose,
    isSelected: isSelected
  }));
};
var ActionDetailsComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function (_ref2) {
  var _action$missingResour, _action$aspect;
  var onClose = _ref2.onClose,
    isSelected = _ref2.isSelected,
    action = _objectWithoutProperties(_ref2, _excluded);
  var _useTutorial = (0,_context_tutorial_context__WEBPACK_IMPORTED_MODULE_11__.useTutorial)(),
    stepIndex = _useTutorial.stepIndex,
    unlockNextById = _useTutorial.unlockNextById;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (action.id === 'action_walk') {
      // console.log('COMRF: ', stepIndex);
      requestAnimationFrame(function () {
        unlockNextById(5);
      });
    }
  }, [action.id]);
  // console.log('re-render');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'blade-inner'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: 'title'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, action.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "(", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatInt)(action.level, 3), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'close',
    onClick: onClose
  }, "X")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'description'
  }, action.description)), action.nextUnlock ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'unlock block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'hint'
  }, "Next unlock at level ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatInt)(action.nextUnlock.level))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'tags-container'
  }, action.tags.map(function (tag) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'tag'
    }, tag);
  }))), action.entityEfficiency < 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'hint yellow'
  }, "This action is running ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatValue)(100 * action.entityEfficiency), "% efficiency due to missing ", action === null || action === void 0 || (_action$missingResour = action.missingResource) === null || _action$missingResour === void 0 ? void 0 : _action$missingResour.name)) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'bottom'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'xp-box'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'xp-text'
  }, "XP: ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatInt)(action.xp), "/", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatInt)(action.maxXP)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'xp-income'
  }, "+", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatValue)(action.xpRate))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_progress_bar_jsx__WEBPACK_IMPORTED_MODULE_12__.ProgressBar, {
    className: 'action-progress',
    percentage: action.xp / action.maxXP
  })))), action.rankData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_5__.TippyWrapper, {
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'hint-popup'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Every 100 level this action will receive new rank, providing you more benefits per level"))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'bottom'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'xp-box rank'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'rank-text'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'icon-content rank-icon interface-icon'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "icons/interface/rank_icon.png"
  })), "Rank: ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatInt)(action.rankData.rank), "(x", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatValue)(action.rankData.bonus), ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'xp-income'
  }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatValue)(action.level), "/", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatValue)(action.rankData.nextRankLevel))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_progress_bar_jsx__WEBPACK_IMPORTED_MODULE_12__.ProgressBar, {
    className: 'action-progress rank-progress',
    percentage: action.rankData.progress
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'hint'
  }, "Every 100 levels this action will receive new rank, improving benefits you get from it.")))) : null, action.primaryAttribute ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Primary Attribute: ", action.primaryAttribute.name, " (", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatValue)(action.primaryAttribute.value), "), providing ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatValue)(100 * action.primaryAttributeEffect), "% learning rate")) : null, action.aspect && ((_action$aspect = action.aspect) === null || _action$aspect === void 0 || (_action$aspect = _action$aspect.aspect) === null || _action$aspect === void 0 ? void 0 : _action$aspect.level) > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Intensity: X", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatValue)(action.aspect.intensity), " (From ", action.aspect.aspect.name, ", level ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatInt)(action.aspect.aspect.level), ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'hint'
  }, "Action intensity determines amount of action done per unit of time, affecting production, consumption, and leveling speed")) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block',
    id: 'item_action_bonuses'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Action Effects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'effects'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_effects_section_jsx__WEBPACK_IMPORTED_MODULE_8__.EffectsSection, {
    effects: action === null || action === void 0 ? void 0 : action.actionEffect,
    maxDisplay: 10
  }))), action.isTraining ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block',
    id: 'item_action_levelup'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Action LevelUp bonuses"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'effects'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_resource_comparison_jsx__WEBPACK_IMPORTED_MODULE_7__.ResourceComparison, {
    effects1: action === null || action === void 0 ? void 0 : action.currentEffects,
    effects2: action === null || action === void 0 ? void 0 : action.potentialEffects
  }))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Action Statistics"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'stats-block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Time spent:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.secondsToString)(action.timeInvested))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "XP earned:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatValue)(action.xpEarned))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Learn ETA's"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'stats-block'
  }, Object.entries(action.etas).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      level = _ref4[0],
      eta = _ref4[1];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      key: level
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Level ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatInt)(level), ": "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.secondsToString)(eta)));
  }))), isSelected ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'buttons'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onClose
  }, "Close")) : null));
}, function (prevProps, currentProps) {
  if (!prevProps && !currentProps) return true;
  if (!prevProps || !currentProps) {
    //console.log('One of prp null or undefined. Re-render: ', prevProps, currentProps);
    return false;
  }
  if (prevProps.level !== currentProps.level) {
    //console.log('Level mismatch. Re-render: ', prevProps, currentProps);
    return false;
  }
  if (prevProps.xp !== currentProps.xp) {
    //console.log('XP mismatch. Re-render: ', prevProps, currentProps);
    return false;
  }
  if (prevProps.id !== currentProps.id) {
    //console.log('id mismatch. Re-render: ', prevProps, currentProps);
    return false;
  }
  if (prevProps.timeInvested !== currentProps.timeInvested) {
    //console.log('id mismatch. Re-render: ', prevProps, currentProps);
    return false;
  }
  if (currentProps.potentialEffects.length) {
    for (var i = 0; i < currentProps.potentialEffects.length; i++) {
      if (!prevProps.potentialEffects[i]) {
        //console.log('potEff mismatch length. Re-render: ', prevProps, currentProps);
        return false;
      }
      if (prevProps.potentialEffects[i].value !== currentProps.potentialEffects[i].value) {
        // console.log('One of prp of potEff mismatched: '+i+'. Re-render: ', prevProps, currentProps);
        return false;
      }
    }
  }
  return true;
});
var ListEditor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function (_ref5) {
  var _editing$name, _editing$effectEffect, _editing$autotrigger, _editing$autotrigger2, _editing$autotrigger3, _editing$autotrigger4, _editing$autotrigger5, _editing$autotrigger6, _editing$autotrigger7;
  var editListId = _ref5.editListId,
    listData = _ref5.listData,
    onUpdateActionFromList = _ref5.onUpdateActionFromList,
    onDropActionFromList = _ref5.onDropActionFromList,
    onUpdateListValue = _ref5.onUpdateListValue,
    onCloseList = _ref5.onCloseList,
    isEditing = _ref5.isEditing,
    onAddAutotriggerRule = _ref5.onAddAutotriggerRule,
    onSetAutotriggerRuleValue = _ref5.onSetAutotriggerRuleValue,
    onDeleteAutotriggerRule = _ref5.onDeleteAutotriggerRule,
    setAutotriggerPriority = _ref5.setAutotriggerPriority,
    onSetAutotriggerPattern = _ref5.onSetAutotriggerPattern,
    onToggleAutotrigger = _ref5.onToggleAutotrigger,
    resources = _ref5.resources,
    automationUnlocked = _ref5.automationUnlocked;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient2 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient2.onMessage,
    sendData = _useWorkerClient2.sendData;
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      actions: []
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    editing = _useState6[0],
    setEditing = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setEditing(listData);
  }, [listData]);
  var saveAndClose = function saveAndClose(isClose) {
    // console.log('Saving: ', editing);
    if (!isClose) {
      editing.isReopenEdit = true;
    }
    sendData('save-action-list', editing);
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
  if (!editing) return;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'list-editor'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'main-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'main-row'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Name"), isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: 'text',
    value: (_editing$name = editing.name) !== null && _editing$name !== void 0 ? _editing$name : '',
    onChange: function onChange(e) {
      return onUpdateListValue('name', e.target.value);
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, editing.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_how_to_sign_jsx__WEBPACK_IMPORTED_MODULE_4__.HowToSign, {
    scope: 'action-lists'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'hint'
  }, "All actions in the list are performed simultaneously."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'show-bar'
  }, editing !== null && editing !== void 0 && editing.proportionsBar ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'proportions-bar'
  }, editing === null || editing === void 0 ? void 0 : editing.proportionsBar.map(function (one) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_5__.TippyWrapper, {
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'hint-popup'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, one.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Effort: ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatValue)(one.percentage * 100), "%"))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        width: one.displayPercentage,
        backgroundColor: one.color
      },
      className: 'proportion-bar'
    }));
  })) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_15__.Droppable, {
    droppableId: "action-list-editor"
  }, function (provided) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
      ref: provided.innerRef
    }, provided.droppableProps, {
      className: "actions-list-wrap"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "action-row flex-container header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'col title'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Action")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'col amount'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Effort")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'col delete'
    }, isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Delete") : null)), editing.actions.length ? editing.actions.map(function (action, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_15__.Draggable, {
        key: "list-".concat(action.id, "-").concat(index),
        draggableId: "list-".concat(action.id, "-").concat(index),
        index: index
      }, function (provided) {
        var _editing$proportionsB, _editing$proportionsB2, _editing$proportionsB3;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
          className: "action-row flex-container ".concat(!action.isAvailable ? 'unavailable' : ''),
          ref: provided.innerRef
        }, provided.draggableProps, provided.dragHandleProps), editing.proportionsBar ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          style: {
            width: (_editing$proportionsB = editing.proportionsBar) === null || _editing$proportionsB === void 0 || (_editing$proportionsB = _editing$proportionsB[index]) === null || _editing$proportionsB === void 0 ? void 0 : _editing$proportionsB.displayPercentage,
            backgroundColor: (_editing$proportionsB2 = editing.proportionsBar[index]) === null || _editing$proportionsB2 === void 0 ? void 0 : _editing$proportionsB2.color
          },
          className: 'prop-bg'
        }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: 'col title'
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, action.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "col amount ".concat(isEditing ? 'large' : '')
        }, isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: 'editing-amounts'
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
          type: 'number',
          value: action.time,
          onChange: function onChange(e) {
            return onUpdateActionFromList(action.id, 'time', +e.target.value);
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatValue)(((_editing$proportionsB3 = editing.proportionsBar) === null || _editing$proportionsB3 === void 0 || (_editing$proportionsB3 = _editing$proportionsB3[index]) === null || _editing$proportionsB3 === void 0 ? void 0 : _editing$proportionsB3.percentage) * 100 || 0), " %")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatValue)(editing.proportionsBar[index].percentage * 100), " %")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: 'col delete'
        }, isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
          className: 'close',
          onClick: function onClick() {
            return onDropActionFromList(action.id);
          }
        }, "X") : null));
      });
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: 'hint'
    }, "Click on actions or drag & drop them to add"), provided.placeholder);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'effects-wrap'
  }, Object.keys((editing === null || editing === void 0 ? void 0 : editing.resourcesEffects) || {}).length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Average Resources per second"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_resource_comparison_jsx__WEBPACK_IMPORTED_MODULE_7__.ResourceComparison, {
    effects1: editing === null || editing === void 0 ? void 0 : editing.prevEffects,
    effects2: editing === null || editing === void 0 ? void 0 : editing.resourcesEffects,
    maxDisplay: 10
  })) : null, editing !== null && editing !== void 0 && (_editing$effectEffect = editing.effectEffects) !== null && _editing$effectEffect !== void 0 && _editing$effectEffect.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Average Effects per second"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_effects_section_jsx__WEBPACK_IMPORTED_MODULE_8__.EffectsSection, {
    effects: (editing === null || editing === void 0 ? void 0 : editing.effectEffects) || [],
    maxDisplay: 10
  })) : null), automationUnlocked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'autotrigger-settings autoconsume-setting block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'rules-header flex-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Autotrigger rules: ", editing !== null && editing !== void 0 && (_editing$autotrigger = editing.autotrigger) !== null && _editing$autotrigger !== void 0 && (_editing$autotrigger = _editing$autotrigger.rules) !== null && _editing$autotrigger !== void 0 && _editing$autotrigger.length ? null : 'None'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: 'checkbox',
    checked: (_editing$autotrigger2 = editing.autotrigger) === null || _editing$autotrigger2 === void 0 ? void 0 : _editing$autotrigger2.isEnabled,
    onChange: toggleAutotrigger
  }), (_editing$autotrigger3 = editing.autotrigger) !== null && _editing$autotrigger3 !== void 0 && _editing$autotrigger3.isEnabled ? ' ON' : ' OFF'), isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: addAutotriggerRule
  }, "Add rule (AND)") : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_how_to_sign_jsx__WEBPACK_IMPORTED_MODULE_4__.HowToSign, {
    scope: 'lists-automation'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
    resources: resources,
    deleteRule: deleteAutotriggerRule,
    setRuleValue: setAutotriggerRuleValue,
    setPattern: setAutotriggerPattern,
    pattern: ((_editing$autotrigger6 = editing.autotrigger) === null || _editing$autotrigger6 === void 0 ? void 0 : _editing$autotrigger6.pattern) || '',
    isAutoCheck: (_editing$autotrigger7 = editing.autotrigger) === null || _editing$autotrigger7 === void 0 ? void 0 : _editing$autotrigger7.isEnabled
  })) : null, isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'buttons'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return saveAndClose(false);
    }
  }, listData !== null && listData !== void 0 && listData.id ? 'Save' : 'Create'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return saveAndClose(true);
    }
  }, listData !== null && listData !== void 0 && listData.id ? 'Save & Close' : 'Create & Close'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onCloseList
  }, "Cancel")) : null));
}, function (prevProps, currentProps) {
  if (prevProps.isEditing !== currentProps.isEditing) return false;
  if (prevProps.listData !== currentProps.listData) return false;

  // if(prevProps.editListId !== currentProps.editListId) return false;

  return true;
});
var GeneralStats = function GeneralStats(_ref6) {
  var stats = _ref6.stats,
    aspects = _ref6.aspects,
    setDetailVisible = _ref6.setDetailVisible;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient3 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient3.onMessage,
    sendData = _useWorkerClient3.sendData;
  var _useAppContext = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_13__.useAppContext)(),
    isMobile = _useAppContext.isMobile;
  var _useUICache = (0,_general_hooks_local_cache__WEBPACK_IMPORTED_MODULE_14__.useUICache)('actions_intensity_hidden', false),
    _useUICache2 = _slicedToArray(_useUICache, 2),
    isIntensityHidden = _useUICache2[0],
    setIntensityHidden = _useUICache2[1];
  var _useUICache3 = (0,_general_hooks_local_cache__WEBPACK_IMPORTED_MODULE_14__.useUICache)('learning_rates_hidden', false),
    _useUICache4 = _slicedToArray(_useUICache3, 2),
    isLearningRatesHidden = _useUICache4[0],
    setLearningRatesHidden = _useUICache4[1];
  var _useUICache5 = (0,_general_hooks_local_cache__WEBPACK_IMPORTED_MODULE_14__.useUICache)('discounts_hidden', false),
    _useUICache6 = _slicedToArray(_useUICache5, 2),
    isDiscountsHidden = _useUICache6[0],
    setDiscountsHidden = _useUICache6[1];
  var setAspectLevel = function setAspectLevel(id, level) {
    sendData('set-action-aspect-level', {
      id: id,
      level: level
    });
  };
  var toggleMaxed = function toggleMaxed(id, flag) {
    sendData('toggle-action-aspect-maxed', {
      id: id,
      flag: flag
    });
  };
  var hasEffect = function hasEffect(stat) {
    if (!(stat !== null && stat !== void 0 && stat.value)) return false;
    return Math.abs((stat === null || stat === void 0 ? void 0 : stat.value) - 1.0) > 1.e-7;
  };
  var highLightAffectedActions = function highLightAffectedActions(id) {
    sendData('set-monitored', {
      scope: 'actions',
      type: 'learn_modifier',
      id: id
    });
  };
  var highLightDiscountedActions = function highLightDiscountedActions(id) {
    sendData('set-monitored', {
      scope: 'actions',
      type: 'discount',
      id: id
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default()), null, aspects.isUnlocked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block-heading flex-container flex-row'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Actions Intensity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "interface-icon icon-content small ".concat(!isIntensityHidden ? ' reverted' : ''),
    onClick: function onClick() {
      return setIntensityHidden(!isIntensityHidden);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "icons/interface/toggle_hidden.png"
  }))), !isIntensityHidden ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'intensity-block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'hint'
  }, "Intensity boosts work speed but increases resource use. Max intensity depends on the attribute. \"Keep Max\" uses the highest available level. Lower intensity saves resources."), aspects.list.map(function (one) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'aspect-wrap'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'flex-container aspect-row'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: 'col title'
    }, one.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'col amount'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: 'number',
      value: one.level,
      onChange: function onChange(e) {
        return setAspectLevel(one.id, +e.target.value);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " of ", one.maxLevel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: 'checkbox',
      checked: one.keepMaxed,
      onChange: function onChange(e) {
        return toggleMaxed(one.id, !one.keepMaxed);
      }
    }), "Keep Max"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'progress-wrap'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        width: "".concat(one.progress * 100, "%"),
        backgroundColor: one.color
      },
      className: 'prop-bg'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'flex-container aspect-row'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, one.attributeData.name, ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatValue)(one.attributeData.value), "/", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatValue)(one.nextPoint)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: 'hint'
    }, "".concat((0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatValue)(one.nextPoint - one.attributeData.value), " more ").concat(one.attributeData.name, " to unlock next level")))));
  })) : null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block-heading flex-container flex-row'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Learn Speed Multipliers:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "interface-icon icon-content small ".concat(!isLearningRatesHidden ? ' reverted' : ''),
    onClick: function onClick() {
      return setLearningRatesHidden(!isLearningRatesHidden);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "icons/interface/toggle_hidden.png"
  }))), !isLearningRatesHidden ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'learning-block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'effects'
  }, Object.values((stats === null || stats === void 0 ? void 0 : stats.learnMults) || {}).filter(function (one) {
    return hasEffect(one);
  }).map(function (one) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_stat_row_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
      onHover: highLightAffectedActions,
      stat: _objectSpread(_objectSpread({}, one), {}, {
        isMultiplier: true
      })
    });
  }))) : null), Object.values((stats === null || stats === void 0 ? void 0 : stats.xpDiscounts) || {}).filter(function (one) {
    return hasEffect(one);
  }).length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block-heading flex-container flex-row'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Learn XP Discounts:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "interface-icon icon-content small ".concat(!isDiscountsHidden ? ' reverted' : ''),
    onClick: function onClick() {
      return setDiscountsHidden(!isDiscountsHidden);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "icons/interface/toggle_hidden.png"
  }))), !isDiscountsHidden ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'learning-block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'effects'
  }, Object.values((stats === null || stats === void 0 ? void 0 : stats.xpDiscounts) || {}).filter(function (one) {
    return hasEffect(one);
  }).map(function (one) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_stat_row_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
      onHover: highLightDiscountedActions,
      stat: _objectSpread(_objectSpread({}, one), {}, {
        isMultiplier: true
      })
    });
  }))) : null) : null, isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return setDetailVisible(false);
    }
  }, "Close")) : null);
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/actions/actions-blades.jsx?
