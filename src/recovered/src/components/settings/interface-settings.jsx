__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InterfaceSettings: () => (/* binding */ InterfaceSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../general/client */ "./src/general/client.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var automatedList = [{
  id: 'select_action_tab',
  checkId: '',
  action: 'selectTab',
  label: 'Switch to Actions tab',
  param: 'actions'
}, {
  id: 'select_shop_tab',
  checkId: 'shop',
  action: 'selectTab',
  label: 'Switch to Shop tab',
  param: 'shop'
}, {
  id: 'select_inventory_tab',
  checkId: 'inventory',
  action: 'selectTab',
  label: 'Switch to Inventory tab',
  param: 'inventory'
}, {
  id: 'select_property_tab',
  checkId: 'property',
  action: 'selectTab',
  label: 'Switch to Property tab',
  param: 'property'
}, {
  id: 'select_world_tab',
  checkId: 'world',
  action: 'selectTab',
  label: 'Switch to World tab',
  param: 'world'
}, {
  id: 'select_workshop_tab',
  checkId: 'workshop',
  action: 'selectTab',
  label: 'Switch to Workshop tab',
  param: 'workshop'
}, {
  id: 'select_spellbook_tab',
  checkId: 'spellbook',
  action: 'selectTab',
  label: 'Switch to Spellbook tab',
  param: 'spellbook'
}, {
  id: 'select_social_tab',
  checkId: 'social',
  action: 'selectTab',
  label: 'Switch to Social tab',
  param: 'social'
}, {
  id: 'select_settings_tab',
  checkId: '',
  action: 'selectTab',
  label: 'Switch to Settings tab',
  param: 'settings'
}];
var InterfaceSettings = function InterfaceSettings() {
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    unlocks = _useState2[0],
    setUnlocksData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    hotkeys = _useState4[0],
    setHotkeys = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    editingTab = _useState6[0],
    setEditingTab = _useState6[1]; // Tracks the tab being edited
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    currentCombination = _useState8[0],
    setCurrentCombination = _useState8[1]; // Tracks the active combination being edited
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState10 = _slicedToArray(_useState9, 2),
    settings = _useState10[0],
    setSettings = _useState10[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sendData("query-unlocks", {});
    sendData("query-all-hotkeys", {});
    sendData("query-settings", {});
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handleKeyDown = function handleKeyDown(event) {
      if (editingTab) {
        var keys = [];
        if (event.ctrlKey) keys.push("Ctrl");
        if (event.shiftKey) keys.push("Shift");
        if (event.altKey) keys.push("Alt");
        keys.push(event.key.toUpperCase());
        setCurrentCombination(keys.join("+"));
        event.preventDefault();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return function () {
      return window.removeEventListener("keydown", handleKeyDown);
    };
  }, [editingTab]);
  onMessage("unlocks", function (unlocks) {
    setUnlocksData(unlocks);
  });
  onMessage("settings", function (settings) {
    console.log('Settings: ', settings);
    setSettings(settings);
  });
  onMessage("all-hotkeys", function (payload) {
    setHotkeys(payload);
  });
  var setSettingChanged = function setSettingChanged(key, value) {
    sendData('set-setting', {
      key: key,
      value: value
    });
  };
  var clearAllNotifications = function clearAllNotifications() {
    sendData("set-all-new-notification-viewed", {});
  };
  var saveHotKey = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (tabId, newCombination) {
    // Check if the combination is already used
    var isDuplicate = Object.values(hotkeys).some(function (hotkey) {
      return hotkey.id !== tabId && hotkey.id === newCombination;
    });
    if (isDuplicate) {
      alert("This combination is already used for another tab!");
      return;
    }
    // Save the hotkey
    var params = automatedList.find(function (o) {
      return o.id === tabId;
    });
    sendData("update-hotkey", {
      id: tabId,
      action: params.action,
      param: params.param,
      combination: newCombination
    });
    /*setHotkeys((prevHotkeys) => ({
        ...prevHotkeys,
        [tabId]: { ...prevHotkeys[tabId], id: newCombination },
    }));*/
    setEditingTab(null);
  }, [hotkeys, sendData]);
  var discardChanges = function discardChanges() {
    setEditingTab(null);
    setCurrentCombination("");
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "inner-settings-wrap interface-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "General UI"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row flex-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: clearAllNotifications
  }, "Clear all notifications"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row flex-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'col'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Notation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'col'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    value: settings === null || settings === void 0 ? void 0 : settings.notation,
    onChange: function onChange(e) {
      return setSettingChanged('notation', e.target.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ''
  }, "Regular"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: 'scientific'
  }, "Scientific"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Shortcuts"), automatedList.filter(function (a) {
    return !a.checkId || unlocks[a.checkId];
  }).map(function (item) {
    var _hotkeys$item$id;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: item.id,
      className: "hotkey-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "tab-label"
    }, item.label), editingTab === item.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'hotkey-actions'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "hotkey-combination"
    }, currentCombination || "Press key combination"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return saveHotKey(item.id, currentCombination);
      }
    }, "Save"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: discardChanges
    }, "Discard")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'hotkey-actions'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "hotkey-combination"
    }, ((_hotkeys$item$id = hotkeys[item.id]) === null || _hotkeys$item$id === void 0 ? void 0 : _hotkeys$item$id.combination) || "None"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        var _hotkeys$item$id2;
        setEditingTab(item.id);
        setCurrentCombination(((_hotkeys$item$id2 = hotkeys[item.id]) === null || _hotkeys$item$id2 === void 0 ? void 0 : _hotkeys$item$id2.id) || "");
      }
    }, "Edit")));
  }))));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/settings/interface-settings.jsx?
