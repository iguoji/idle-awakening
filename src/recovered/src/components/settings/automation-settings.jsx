__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionsAutomations: () => (/* binding */ ActionsAutomations),
/* harmony export */   AlchemyAutomations: () => (/* binding */ AlchemyAutomations),
/* harmony export */   AutomatedAction: () => (/* binding */ AutomatedAction),
/* harmony export */   AutomatedAlchemy: () => (/* binding */ AutomatedAlchemy),
/* harmony export */   AutomatedConsumption: () => (/* binding */ AutomatedConsumption),
/* harmony export */   AutomatedCrafting: () => (/* binding */ AutomatedCrafting),
/* harmony export */   AutomatedItem: () => (/* binding */ AutomatedItem),
/* harmony export */   AutomatedMapTile: () => (/* binding */ AutomatedMapTile),
/* harmony export */   AutomatedSell: () => (/* binding */ AutomatedSell),
/* harmony export */   AutomatedSpell: () => (/* binding */ AutomatedSpell),
/* harmony export */   AutomationsSettings: () => (/* binding */ AutomationsSettings),
/* harmony export */   ConsumeAutomations: () => (/* binding */ ConsumeAutomations),
/* harmony export */   CraftingAutomations: () => (/* binding */ CraftingAutomations),
/* harmony export */   MapTilesAutomations: () => (/* binding */ MapTilesAutomations),
/* harmony export */   SellAutomations: () => (/* binding */ SellAutomations),
/* harmony export */   SpellAutomations: () => (/* binding */ SpellAutomations)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../general/client */ "./src/general/client.js");
/* harmony import */ var _shared_rules_list_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/rules-list.jsx */ "./src/components/shared/rules-list.jsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__);
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






var AutomationsSettings = function AutomationsSettings() {
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    resources = _useState2[0],
    setResources = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    unlocks = _useState4[0],
    setUnlocksData = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sendData('query-all-resources', {});
    sendData('query-unlocks', {});
  }, []);
  onMessage('all-resources', function (payload) {
    setResources(payload);
  });
  onMessage('unlocks', function (unlocks) {
    setUnlocksData(unlocks);
  });
  if (!unlocks.automations || !unlocks.actionLists && !unlocks.inventory && !unlocks.spellbook) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'inner-settings-wrap automations-wrap'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "You haven't unlocked any automations yet :=("), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Don't worry, you'll unlock them pretty soon"));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'inner-settings-wrap automations-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default()), null, unlocks.actionLists ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ActionsAutomations, {
    resources: resources
  }) : null, unlocks.inventory ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SellAutomations, {
    resources: resources
  }) : null, unlocks.inventory ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ConsumeAutomations, {
    resources: resources
  }) : null, unlocks.map ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MapTilesAutomations, {
    resources: resources
  }) : null, unlocks.crafting ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CraftingAutomations, {
    resources: resources
  }) : null, unlocks.alchemy ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AlchemyAutomations, {
    resources: resources
  }) : null, unlocks.spellbook ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SpellAutomations, {
    resources: resources
  }) : null));
};
var ActionsAutomations = function ActionsAutomations(_ref) {
  var resources = _ref.resources;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient2 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient2.onMessage,
    sendData = _useWorkerClient2.sendData;
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    automations = _useState6[0],
    setAutomations = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    isOpened = _useState8[0],
    setOpened = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sendData('query-actions-lists', {
      filterAutomated: true
    });
  }, []);
  onMessage('actions-lists', function (data) {
    setAutomations(data);
  });
  var onSaveAction = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id, saveData) {
    var prev = automations.find(function (a) {
      return a.id === id;
    });
    if (!prev) {
      console.error("Not found action by id: ".concat(id), id, saveData);
      return;
    }
    var toSave = _objectSpread(_objectSpread({}, prev), {}, {
      autotrigger: {
        priority: saveData.priority,
        rules: saveData.rules,
        pattern: saveData.pattern,
        isEnabled: saveData.isEnabled
      }
    });
    console.log('Saving data: ', toSave);
    sendData('save-action-list', toSave);
  });
  if (!automations || !automations.length || !resources) return;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "automations-box ".concat(isOpened ? 'opened' : 'closed')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'automation-panel-title',
    onClick: function onClick() {
      return setOpened(!isOpened);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Action Lists Automations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'arrow-down'
  }, "\u21E9")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'automated-list'
  }, automations.map(function (auto) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AutomatedAction, {
      auto: auto,
      resources: resources,
      onSaveAction: onSaveAction
    });
  })));
};
var AutomatedAction = function AutomatedAction(_ref2) {
  var auto = _ref2.auto,
    resources = _ref2.resources,
    onSaveAction = _ref2.onSaveAction;
  var onSave = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id, data) {
    onSaveAction(id, data);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AutomatedItem, {
    scope: 'autotrigger',
    id: auto.id,
    name: auto.name,
    rules: auto.autotrigger.rules,
    pattern: auto.autotrigger.pattern,
    resources: resources,
    isPriorityShown: true,
    priority: auto.autotrigger.priority,
    onSave: onSave,
    isEnabled: auto.autotrigger.isEnabled
  });
};
var ConsumeAutomations = function ConsumeAutomations(_ref3) {
  var resources = _ref3.resources;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient3 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient3.onMessage,
    sendData = _useWorkerClient3.sendData;
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    automations = _useState10[0],
    setAutomations = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isOpened = _useState12[0],
    setOpened = _useState12[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sendData('query-inventory-data', {
      filterAutomatedConsume: true,
      includeAutomations: true,
      prefix: 'autoconsume'
    });
  }, []);
  onMessage('inventory-data-autoconsume', function (data) {
    console.log('Received Cons: ', data);
    if (data.payload.filterAutomatedConsume) {
      setAutomations(data.available);
    }
  });
  var onSaveConsume = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id, saveData) {
    var prev = automations.find(function (a) {
      return a.id === id;
    });
    var toSave = _objectSpread(_objectSpread({}, prev), {}, {
      autoconsume: {
        rules: saveData.rules,
        pattern: saveData.pattern,
        isEnabled: saveData.isEnabled
      }
    });
    console.log('Saving consume: ', toSave);
    sendData('save-inventory-settings', toSave);
  });
  if (!automations || !automations.length || !resources) return;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "automations-box ".concat(isOpened ? 'opened' : 'closed')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'automation-panel-title',
    onClick: function onClick() {
      return setOpened(!isOpened);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Consumption Automations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'arrow-down'
  }, "\u21E9")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'automated-list'
  }, automations.map(function (auto) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AutomatedConsumption, {
      auto: auto,
      resources: resources,
      onSaveConsume: onSaveConsume
    });
  })));
};
var AutomatedConsumption = function AutomatedConsumption(_ref4) {
  var auto = _ref4.auto,
    resources = _ref4.resources,
    onSaveConsume = _ref4.onSaveConsume;
  var onSave = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id, data) {
    onSaveConsume(id, data);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AutomatedItem, {
    scope: 'autoconsume',
    id: auto.id,
    name: auto.name,
    rules: auto.autoconsume.rules,
    pattern: auto.autoconsume.pattern,
    resources: resources,
    isPriorityShown: false,
    onSave: onSave,
    isEnabled: auto.autoconsume.isEnabled
  });
};
var SellAutomations = function SellAutomations(_ref5) {
  var resources = _ref5.resources;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient4 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient4.onMessage,
    sendData = _useWorkerClient4.sendData;
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    automations = _useState14[0],
    setAutomations = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isOpened = _useState16[0],
    setOpened = _useState16[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sendData('query-inventory-data', {
      filterAutomatedSell: true,
      includeAutomations: true,
      prefix: 'autosell'
    });
  }, []);
  onMessage('inventory-data-autosell', function (data) {
    console.log('SELL))): ', data);
    if (data.payload.filterAutomatedSell) {
      setAutomations(data.available);
    }
  });
  var onSaveSell = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id, saveData) {
    var prev = automations.find(function (a) {
      return a.id === id;
    });
    var toSave = _objectSpread(_objectSpread({}, prev), {}, {
      autosell: {
        rules: saveData.rules,
        isEnabled: saveData.isEnabled
      }
    });
    console.log('Saving sell: ', toSave);
    sendData('save-inventory-settings', toSave);
  });
  if (!automations || !automations.length || !resources) return;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "automations-box ".concat(isOpened ? 'opened' : 'closed')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'automation-panel-title',
    onClick: function onClick() {
      return setOpened(!isOpened);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Sell Automations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'arrow-down'
  }, "\u21E9")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'automated-list'
  }, automations.map(function (auto) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AutomatedSell, {
      auto: auto,
      resources: resources,
      onSaveSell: onSaveSell
    });
  })));
};
var AutomatedSell = function AutomatedSell(_ref6) {
  var auto = _ref6.auto,
    resources = _ref6.resources,
    onSaveSell = _ref6.onSaveSell;
  var onSave = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id, data) {
    onSaveSell(id, data);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AutomatedItem, {
    scope: 'autosell',
    id: auto.id,
    name: auto.name,
    rules: auto.autosell.rules,
    pattern: auto.autosell.pattern,
    resources: resources,
    isPriorityShown: false,
    onSave: onSave,
    isEnabled: auto.autosell.isEnabled
  });
};
var MapTilesAutomations = function MapTilesAutomations(_ref7) {
  var resources = _ref7.resources;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient5 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient5.onMessage,
    sendData = _useWorkerClient5.sendData;
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    automations = _useState18[0],
    setAutomations = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState20 = _slicedToArray(_useState19, 2),
    isOpened = _useState20[0],
    setOpened = _useState20[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sendData('query-map-tile-lists', {
      filterAutomated: true
    });
  }, []);
  onMessage('map-tile-lists', function (data) {
    console.log('automated-lists: ', data);
    setAutomations(data.lists);
  });
  var onSaveAction = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id, saveData) {
    var prev = automations.find(function (a) {
      return a.id === id;
    });
    if (!prev) {
      console.error("Not found map tile by id: ".concat(id), id, saveData);
      return;
    }
    var toSave = _objectSpread(_objectSpread({}, prev), {}, {
      autotrigger: {
        priority: saveData.priority,
        rules: saveData.rules,
        pattern: saveData.pattern,
        isEnabled: saveData.isEnabled
      }
    });
    console.log('Saving data: ', toSave);
    sendData('save-map-tile-list', toSave);
  });
  if (!automations || !automations.length || !resources) return;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "automations-box ".concat(isOpened ? 'opened' : 'closed')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'automation-panel-title',
    onClick: function onClick() {
      return setOpened(!isOpened);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Map Lists Automations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'arrow-down'
  }, "\u21E9")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'automated-list'
  }, automations.map(function (auto) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AutomatedMapTile, {
      auto: auto,
      resources: resources,
      onSaveAction: onSaveAction
    });
  })));
};
var AutomatedMapTile = function AutomatedMapTile(_ref8) {
  var auto = _ref8.auto,
    resources = _ref8.resources,
    onSaveAction = _ref8.onSaveAction;
  var onSave = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id, data) {
    onSaveAction(id, data);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AutomatedItem, {
    scope: 'autoexplore',
    id: auto.id,
    name: auto.name,
    rules: auto.autotrigger.rules,
    pattern: auto.autotrigger.pattern,
    resources: resources,
    isPriorityShown: true,
    priority: auto.autotrigger.priority,
    onSave: onSave,
    isEnabled: auto.autotrigger.isEnabled
  });
};
var CraftingAutomations = function CraftingAutomations(_ref9) {
  var resources = _ref9.resources;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient6 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient6.onMessage,
    sendData = _useWorkerClient6.sendData;
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState22 = _slicedToArray(_useState21, 2),
    automations = _useState22[0],
    setAutomations = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState24 = _slicedToArray(_useState23, 2),
    isOpened = _useState24[0],
    setOpened = _useState24[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sendData('query-crafting-lists', {
      filterAutomated: true,
      category: 'crafting'
    });
  }, []);
  onMessage('crafting-lists-crafting', function (data) {
    console.log('automated-crafting: ', data);
    setAutomations(data.lists);
  });
  var onSaveAction = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id, saveData) {
    var prev = automations.find(function (a) {
      return a.id === id;
    });
    if (!prev) {
      console.error("Not found map tile by id: ".concat(id), id, saveData);
      return;
    }
    var toSave = _objectSpread(_objectSpread({}, prev), {}, {
      autotrigger: {
        priority: saveData.priority,
        rules: saveData.rules,
        pattern: saveData.pattern,
        isEnabled: saveData.isEnabled
      }
    });
    console.log('Saving data: ', toSave);
    sendData('save-crafting-list', toSave);
  });
  if (!automations || !automations.length || !resources) return;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "automations-box ".concat(isOpened ? 'opened' : 'closed')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'automation-panel-title',
    onClick: function onClick() {
      return setOpened(!isOpened);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Crafting Automations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'arrow-down'
  }, "\u21E9")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'automated-list'
  }, automations.map(function (auto) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AutomatedCrafting, {
      auto: auto,
      resources: resources,
      onSaveAction: onSaveAction
    });
  })));
};
var AutomatedCrafting = function AutomatedCrafting(_ref10) {
  var auto = _ref10.auto,
    resources = _ref10.resources,
    onSaveAction = _ref10.onSaveAction;
  var onSave = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id, data) {
    onSaveAction(id, data);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AutomatedItem, {
    scope: 'crafting',
    id: auto.id,
    name: auto.name,
    rules: auto.autotrigger.rules,
    pattern: auto.autotrigger.pattern,
    resources: resources,
    isPriorityShown: true,
    priority: auto.autotrigger.priority,
    onSave: onSave,
    isEnabled: auto.autotrigger.isEnabled
  });
};
var AlchemyAutomations = function AlchemyAutomations(_ref11) {
  var resources = _ref11.resources;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient7 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient7.onMessage,
    sendData = _useWorkerClient7.sendData;
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState26 = _slicedToArray(_useState25, 2),
    automations = _useState26[0],
    setAutomations = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState28 = _slicedToArray(_useState27, 2),
    isOpened = _useState28[0],
    setOpened = _useState28[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sendData('query-crafting-lists', {
      filterAutomated: true,
      category: 'alchemy'
    });
  }, []);
  onMessage('crafting-lists-alchemy', function (data) {
    console.log('automated-crafting: ', data);
    setAutomations(data.lists);
  });
  var onSaveAction = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id, saveData) {
    var prev = automations.find(function (a) {
      return a.id === id;
    });
    if (!prev) {
      console.error("Not found map tile by id: ".concat(id), id, saveData);
      return;
    }
    var toSave = _objectSpread(_objectSpread({}, prev), {}, {
      autotrigger: {
        priority: saveData.priority,
        rules: saveData.rules,
        pattern: saveData.pattern,
        isEnabled: saveData.isEnabled
      }
    });
    console.log('Saving data: ', toSave);
    sendData('save-crafting-list', toSave);
  });
  if (!automations || !automations.length || !resources) return;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "automations-box ".concat(isOpened ? 'opened' : 'closed')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'automation-panel-title',
    onClick: function onClick() {
      return setOpened(!isOpened);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Alchemy Automations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'arrow-down'
  }, "\u21E9")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'automated-list'
  }, automations.map(function (auto) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AutomatedAlchemy, {
      auto: auto,
      resources: resources,
      onSaveAction: onSaveAction
    });
  })));
};
var AutomatedAlchemy = function AutomatedAlchemy(_ref12) {
  var auto = _ref12.auto,
    resources = _ref12.resources,
    onSaveAction = _ref12.onSaveAction;
  var onSave = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id, data) {
    onSaveAction(id, data);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AutomatedItem, {
    scope: 'alchemy',
    id: auto.id,
    name: auto.name,
    rules: auto.autotrigger.rules,
    pattern: auto.autotrigger.pattern,
    resources: resources,
    isPriorityShown: true,
    priority: auto.autotrigger.priority,
    onSave: onSave,
    isEnabled: auto.autotrigger.isEnabled
  });
};
var SpellAutomations = function SpellAutomations(_ref13) {
  var resources = _ref13.resources;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient8 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient8.onMessage,
    sendData = _useWorkerClient8.sendData;
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState30 = _slicedToArray(_useState29, 2),
    automations = _useState30[0],
    setAutomations = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    isOpened = _useState32[0],
    setOpened = _useState32[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sendData('query-spell-data', {
      filterAutomated: true,
      includeAutomations: true,
      prefix: 'autocast'
    });
  }, []);
  onMessage('spell-data-autocast', function (data) {
    console.log('SPELLS: ', data);
    setAutomations(data.available);
  });
  var onSaveSpell = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id, saveData) {
    var prev = automations.find(function (a) {
      return a.id === id;
    });
    var toSave = _objectSpread(_objectSpread({}, prev), {}, {
      autocast: {
        rules: saveData.rules,
        pattern: saveData.pattern,
        isEnabled: saveData.isEnabled
      }
    });
    console.log('Saving spell: ', toSave);
    sendData('save-spell-settings', toSave);
  });
  if (!automations || !automations.length || !resources) return;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "automations-box ".concat(isOpened ? 'opened' : 'closed')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'automation-panel-title',
    onClick: function onClick() {
      return setOpened(!isOpened);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Spell Automations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'arrow-down'
  }, "\u21E9")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'automated-list'
  }, automations.map(function (auto) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AutomatedSpell, {
      auto: auto,
      resources: resources,
      onSaveSpell: onSaveSpell
    });
  })));
};
var AutomatedSpell = function AutomatedSpell(_ref14) {
  var auto = _ref14.auto,
    resources = _ref14.resources,
    onSaveSpell = _ref14.onSaveSpell;
  var onSave = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id, data) {
    onSaveSpell(id, data);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AutomatedItem, {
    scope: 'autocast',
    id: auto.id,
    name: auto.name,
    rules: auto.autocast.rules,
    pattern: auto.autocast.pattern,
    resources: resources,
    isPriorityShown: false,
    onSave: onSave,
    isEnabled: auto.autocast.isEnabled
  });
};
var AutomatedItem = function AutomatedItem(_ref15) {
  var scope = _ref15.scope,
    id = _ref15.id,
    name = _ref15.name,
    priority = _ref15.priority,
    isPriorityShown = _ref15.isPriorityShown,
    rules = _ref15.rules,
    pattern = _ref15.pattern,
    resources = _ref15.resources,
    onSave = _ref15.onSave,
    isEnabled = _ref15.isEnabled;
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState34 = _slicedToArray(_useState33, 2),
    isChanged = _useState34[0],
    setChanged = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState36 = _slicedToArray(_useState35, 2),
    isEditing = _useState36[0],
    setEditing = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      priority: 0,
      rules: []
    }),
    _useState38 = _slicedToArray(_useState37, 2),
    editedValues = _useState38[0],
    setEditedValues = _useState38[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setEditedValues({
      priority: priority,
      pattern: pattern,
      rules: rules !== null && rules !== void 0 ? rules : [],
      isEnabled: isEnabled
    });
  }, [rules, priority, pattern, isEnabled]);
  var setPriority = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (priority) {
    if (isEditing && editedValues) {
      var newValues = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(editedValues);
      if (!newValues.rules) {
        newValues.rules = [];
      }
      newValues.priority = priority;
      setEditedValues(_objectSpread({}, newValues));
      setChanged(true);
    }
  }, [editedValues, isEditing]);
  var setPattern = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (pattern) {
    if (isEditing && editedValues) {
      var newValues = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(editedValues);
      if (!newValues.rules) {
        newValues.rules = [];
      }
      newValues.pattern = pattern;
      setEditedValues(_objectSpread({}, newValues));
      setChanged(true);
    }
  }, [editedValues, isEditing]);
  var toggleEnabled = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (isEditing && editedValues) {
      var newValues = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(editedValues);
      if (!newValues.rules) {
        newValues.rules = [];
      }
      newValues.isEnabled = !newValues.isEnabled;
      setEditedValues(_objectSpread({}, newValues));
      setChanged(true);
    }
  }, [editedValues, isEditing]);
  var addRule = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (isEditing && editedValues) {
      var newList = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(editedValues);
      if (!newList.rules) {
        newList.rules = [];
      }
      newList.rules.push({
        resource_id: resources[0].id,
        condition: 'less_or_eq',
        value_type: 'percentage',
        value: 50
      });
      setEditedValues(_objectSpread({}, newList));
      setChanged(true);
    }
  }, [editedValues, isEditing]);
  var setRuleValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (index, key, value) {
    if (isEditing && editedValues) {
      var newList = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(editedValues);
      if (!newList.rules) {
        newList.rules = [];
      }
      newList.rules[index] = _objectSpread(_objectSpread({}, newList.rules[index]), {}, _defineProperty({}, key, value));
      setEditedValues(_objectSpread({}, newList));
      setChanged(true);
    }
  }, [editedValues, isEditing]);
  var deleteRule = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (index) {
    if (isEditing && editedValues) {
      var newList = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(editedValues);
      if (!newList.rules) {
        newList.rules = [];
      }
      newList.rules.splice(index, 1);
      setEditedValues(_objectSpread({}, newList));
      setChanged(true);
    }
  }, [editedValues, isEditing]);
  var cancelEditing = function cancelEditing() {
    setEditing(false);
    setChanged(false);
    setEditedValues({
      priority: priority,
      pattern: pattern,
      isEnabled: isEnabled,
      rules: rules !== null && rules !== void 0 ? rules : []
    });
  };
  var saveData = function saveData() {
    onSave(id, editedValues);
    setEditing(false);
    setChanged(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "automated-wrap ".concat(isEditing ? 'editing' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'col title'
  }, name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'on-off'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: 'checkbox',
    checked: editedValues.isEnabled,
    onChange: toggleEnabled
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "automation-turned-".concat(editedValues.isEnabled ? 'on' : 'off')
  }, "Automation ", editedValues.isEnabled ? ' ON' : ' OFF')))), isPriorityShown ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'col priority'
  }, isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: 'number',
    onChange: function onChange(e) {
      return setPriority(+e.target.value);
    },
    value: editedValues.priority
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, editedValues.priority)) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'col rules-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Rules ", isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: addRule
  }, "Add Rule") : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_rules_list_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    prefix: "".concat(scope, "-automation-").concat(id),
    rules: editedValues.rules,
    pattern: editedValues.pattern,
    isEditing: isEditing,
    resources: resources,
    setRuleValue: setRuleValue,
    deleteRule: deleteRule,
    setPattern: setPattern
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'col auto-actions-wrap'
  }, isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'buttons'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: !isChanged,
    onClick: saveData
  }, "Save"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: cancelEditing
  }, "Cancel")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'buttons'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      setEditing(true);
    }
  }, "Edit"))));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/settings/automation-settings.jsx?
