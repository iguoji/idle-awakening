__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralStats: () => (/* binding */ GeneralStats),
/* harmony export */   ItemDetails: () => (/* binding */ ItemDetails),
/* harmony export */   MapTileListDetails: () => (/* binding */ MapTileListDetails),
/* harmony export */   MapWrap: () => (/* binding */ MapWrap)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../general/client */ "./src/general/client.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _map_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map.jsx */ "./src/components/world/map/map.jsx");
/* harmony import */ var _general_utils_strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../general/utils/strings */ "./src/general/utils/strings.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_rules_list_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/rules-list.jsx */ "./src/components/shared/rules-list.jsx");
/* harmony import */ var _shared_how_to_sign_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/how-to-sign.jsx */ "./src/components/shared/how-to-sign.jsx");
/* harmony import */ var _shared_resource_cost_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/resource-cost.jsx */ "./src/components/shared/resource-cost.jsx");
/* harmony import */ var _shared_stat_row_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/stat-row.jsx */ "./src/components/shared/stat-row.jsx");
/* harmony import */ var _context_ui_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../context/ui-context */ "./src/context/ui-context.js");
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












var MapWrap = function MapWrap(_ref) {
  var _newUnlocks$world;
  var children = _ref.children;
  var _useAppContext = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_11__.useAppContext)(),
    isMobile = _useAppContext.isMobile;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!isMobile),
    _useState2 = _slicedToArray(_useState, 2),
    isDetailVisible = _useState2[0],
    setDetailVisible = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    mapTileDetails = _useState4[0],
    setMapTileDetails = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    listDetails = _useState6[0],
    setListDetails = _useState6[1];
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState8 = _slicedToArray(_useState7, 2),
    unlocks = _useState8[0],
    setUnlocksData = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState10 = _slicedToArray(_useState9, 2),
    newUnlocks = _useState10[0],
    setNewUnlocks = _useState10[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sendData('query-unlocks', {
      prefix: 'world'
    });
    var interval = setInterval(function () {
      sendData('query-unlocks', {
        prefix: 'world'
      });
      sendData('query-new-unlocks-notifications', {
        suffix: 'world',
        scope: 'map'
      });
    }, 1000);
    return function () {
      clearInterval(interval);
    };
  }, []);
  onMessage('unlocks-world', function (unlocks) {
    setUnlocksData(unlocks);
  });
  onMessage('new-unlocks-notifications-world', function (payload) {
    // console.log('Received unlocks: ', payload);
    setNewUnlocks(payload);
  });
  onMessage('map-tile-list-data', function (payload) {
    // console.log(`currViewing LIST: `, payload, listDetails);
    if (!listDetails) return;
    setListDetails(_objectSpread(_objectSpread({}, listDetails), {}, {
      listData: payload,
      isEdit: listDetails.isEdit,
      isLoading: false,
      automationUnlocked: listDetails.automationUnlocked
    }));
  });
  onMessage('map-tile-list-effects', function (payload) {
    // console.log('GOT DATA: ', payload);
    setListDetails(_objectSpread(_objectSpread({}, listDetails), {}, {
      listData: _objectSpread(_objectSpread({}, listDetails.listData), {}, {
        drops: payload.potentialDrops,
        costs: payload.costs,
        proportionsBar: payload.proportionsBar
      })
    }));
  });
  var setAutotriggerPriority = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (priority) {
    var _ref2 = listDetails !== null && listDetails !== void 0 ? listDetails : {},
      listData = _ref2.listData;
    if (listData) {
      var newList = (0,lodash__WEBPACK_IMPORTED_MODULE_6__.cloneDeep)(listData);
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
      var newList = (0,lodash__WEBPACK_IMPORTED_MODULE_6__.cloneDeep)(listData);
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
      var newList = (0,lodash__WEBPACK_IMPORTED_MODULE_6__.cloneDeep)(listData);
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
      var newList = (0,lodash__WEBPACK_IMPORTED_MODULE_6__.cloneDeep)(listData);
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
      var newList = (0,lodash__WEBPACK_IMPORTED_MODULE_6__.cloneDeep)(listData);
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
      var newList = (0,lodash__WEBPACK_IMPORTED_MODULE_6__.cloneDeep)(listData);
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
  var setItemDetails = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (pl) {
    if (!pl) {
      setMapTileDetails(null);
      return;
    }
    var meta = pl === null || pl === void 0 ? void 0 : pl.meta;
    // console.log('Called select tile', meta, listDetails);
    if (listDetails !== null && listDetails !== void 0 && listDetails.listData && listDetails !== null && listDetails !== void 0 && listDetails.isEdit) {
      if (meta) {
        // console.log('Insert tile to list: ', meta, listDetails);
        if (!listDetails.listData.tiles.find(function (one) {
          return one.id === "".concat(meta.i, ":").concat(meta.j);
        })) {
          var newList = (0,lodash__WEBPACK_IMPORTED_MODULE_6__.cloneDeep)(listDetails.listData);
          newList.tiles.push({
            id: "".concat(meta.i, ":").concat(meta.j),
            name: "Tile ".concat(meta.i, ":").concat(meta.j),
            i: meta.i,
            j: meta.j,
            time: 1
          });
          setListDetails(_objectSpread(_objectSpread({}, listDetails), {}, {
            listData: _objectSpread({}, newList)
          }));
          sendData('query-map-tile-list-effects', {
            listData: newList
          });
        } else {
          onDropActionFromList("".concat(meta.i, ":").concat(meta.j));
        }
      }
    } else {
      if (!meta) {
        setMapTileDetails(null);
      } else {
        setListDetails(null);
        setMapTileDetails(meta);
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
      sendData('load-map-tile-list', {
        id: (_list$listData2 = list.listData) === null || _list$listData2 === void 0 ? void 0 : _list$listData2.id
      });
    } else {
      setListDetails(_objectSpread(_objectSpread({}, list || {}), {}, {
        listData: _objectSpread(_objectSpread({}, list.listData || {}), {}, {
          tiles: [],
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
    var _ref8 = listDetails !== null && listDetails !== void 0 ? listDetails : {},
      listData = _ref8.listData;
    if (listData) {
      var newList = listData;
      newList.tiles = newList.tiles.filter(function (a) {
        return a.id !== id;
      });
      setListDetails(_objectSpread(_objectSpread({}, listDetails), {}, {
        listData: _objectSpread({}, newList)
      }));
      sendData('query-map-tile-list-effects', {
        listData: newList
      });
    }
  };
  var onClearList = function onClearList() {
    var _ref9 = listDetails !== null && listDetails !== void 0 ? listDetails : {},
      listData = _ref9.listData;
    if (listData) {
      var newList = listData;
      newList.tiles = [];
      setListDetails(_objectSpread(_objectSpread({}, listDetails), {}, {
        listData: _objectSpread({}, newList)
      }));
      sendData('query-map-tile-list-effects', {
        listData: newList
      });
    }
  };
  var onAddTiles = function onAddTiles() {
    sendData('query-map-list-highlighted-tiles', {});
  };
  onMessage('map-list-highlighted-tiles', function (data) {
    var _ref10 = listDetails !== null && listDetails !== void 0 ? listDetails : {},
      listData = _ref10.listData;
    if (listData) {
      var newList = listData;
      data.tiles.map(function (_ref11) {
        var iRow = _ref11.iRow,
          iCol = _ref11.iCol;
        var oTP = {
          id: "".concat(iRow, ":").concat(iCol),
          name: "Tile ".concat(iRow, ":").concat(iCol),
          i: iRow,
          j: iCol,
          time: 1
        };
        if (!newList.tiles.find(function (o) {
          return o.id === oTP.id;
        })) {
          newList.tiles.push(oTP);
        }
      });
      setListDetails(_objectSpread(_objectSpread({}, listDetails), {}, {
        listData: _objectSpread({}, newList)
      }));
      sendData('query-map-tile-list-effects', {
        listData: newList
      });
    }
  });
  var onUpdateActionFromList = function onUpdateActionFromList(id, key, value) {
    var _ref12 = listDetails !== null && listDetails !== void 0 ? listDetails : {},
      listData = _ref12.listData;
    if (listData) {
      var newList = listData;
      newList.tiles = newList.tiles.map(function (a) {
        return a.id !== id ? a : _objectSpread(_objectSpread({}, a), {}, _defineProperty({}, key, value));
      });
      setListDetails(_objectSpread(_objectSpread({}, listDetails), {}, {
        listData: _objectSpread({}, newList)
      }));
      sendData('query-map-tile-list-effects', {
        listData: newList
      });
    }
  };
  var onUpdateListValue = function onUpdateListValue(key, value) {
    var _ref13 = listDetails !== null && listDetails !== void 0 ? listDetails : {},
      listData = _ref13.listData;
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
    className: 'menu-wrap map'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'head'
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'flex-container additional-filters'
  }, isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'highlighted-span',
    onClick: function onClick() {
      return setDetailVisible(true);
    }
  }, "Info")) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_how_to_sign_jsx__WEBPACK_IMPORTED_MODULE_8__.HowToSign, {
    scope: 'map'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_map_jsx__WEBPACK_IMPORTED_MODULE_4__.Map, {
    setItemDetails: setItemDetails,
    newUnlocks: newUnlocks === null || newUnlocks === void 0 || (_newUnlocks$world = newUnlocks['world']) === null || _newUnlocks$world === void 0 || (_newUnlocks$world = _newUnlocks$world.items) === null || _newUnlocks$world === void 0 || (_newUnlocks$world = _newUnlocks$world['map']) === null || _newUnlocks$world === void 0 ? void 0 : _newUnlocks$world.items,
    openListDetails: openListDetails,
    isEditList: listDetails === null || listDetails === void 0 ? void 0 : listDetails.isEdit
  })), !isMobile || isDetailVisible || listDetails !== null && listDetails !== void 0 && listDetails.listData || mapTileDetails ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "item-detail ingame-box detail-blade ".concat(listDetails !== null && listDetails !== void 0 && listDetails.listData && listDetails !== null && listDetails !== void 0 && listDetails.isEdit && !isMobile ? 'wide-blade' : '', " ").concat(listDetails !== null && listDetails !== void 0 && listDetails.listData ? 'forced-bottom' : '')
  }, listDetails !== null && listDetails !== void 0 && listDetails.listData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MapTileListDetails, {
    listDetails: listDetails.listData,
    isEditing: listDetails.isEdit,
    onUpdateActionFromList: onUpdateActionFromList,
    onDropActionFromList: onDropActionFromList,
    onUpdateListValue: onUpdateListValue,
    onAddTiles: onAddTiles,
    onClearList: onClearList,
    onAddAutotriggerRule: onAddAutotriggerRule,
    onSetAutotriggerRuleValue: onSetAutotriggerRuleValue,
    onDeleteAutotriggerRule: onDeleteAutotriggerRule,
    setAutotriggerPriority: setAutotriggerPriority,
    onSetAutotriggerPattern: onSetAutotriggerPattern,
    onToggleAutotrigger: onToggleAutotrigger,
    onCloseList: onCloseList,
    automationUnlocked: listDetails.automationUnlocked
  }) : null, mapTileDetails && !(listDetails !== null && listDetails !== void 0 && listDetails.listData) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ItemDetails, {
    itemId: mapTileDetails,
    setItemDetails: setItemDetails
  }) : null, !mapTileDetails && !(listDetails !== null && listDetails !== void 0 && listDetails.listData) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GeneralStats, {
    setDetailVisible: setDetailVisible
  }) : null) : null);
};
var GeneralStats = function GeneralStats(_ref14) {
  var _data$mapGeneration;
  var setDetailVisible = _ref14.setDetailVisible;
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      mapGeneration: {},
      stats: {
        effects: []
      }
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    data = _useState12[0],
    setData = _useState12[1];
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useAppContext2 = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_11__.useAppContext)(),
    isMobile = _useAppContext2.isMobile;
  var _useWorkerClient2 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient2.onMessage,
    sendData = _useWorkerClient2.sendData;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sendData('map-query-general-data', {});
    var interval = setInterval(function () {
      sendData('map-query-general-data', {});
    }, 200);
    return function () {
      clearInterval(interval);
    };
  }, []);
  onMessage('map-general-data', function (data) {
    setData(data);
  });
  var setMapLevel = function setMapLevel(level) {
    sendData('map-set-generated-level', {
      level: level
    });
  };
  var purchaseMap = function purchaseMap() {
    if (confirm('此操作将重新设置所有地图块和地图列表，因此您必须重新创建它们并更新所有引用它们的自动化操作。你确定要这么做吗？')) {
      sendData('map-generate-map', {});
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'blade-inner'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Map Exploration"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'hint separated'
  }, "Select a tile on the map and press 'Explore' to start searching for resources."), !data.isProducingGathering ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'hint warning yellow'
  }, "Resource gathering requires Gathering Effort, which is generated by specific actions. To find resources, make sure you are generating Gathering Effort.") : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "General Stats"), data.stats.effects.map(function (stat) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_stat_row_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
      stat: stat
    }));
  })), (_data$mapGeneration = data.mapGeneration) !== null && _data$mapGeneration !== void 0 && _data$mapGeneration.isUnlocked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Generate New Map"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'action-row flex-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Level"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: 'number',
    value: data.mapGeneration.level,
    onChange: function onChange(e) {
      return setMapLevel(Math.floor(+e.target.value));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'costs-wrap'
  }, Object.values(data.mapGeneration.affordable.affordabilities || {}).map(function (aff) {
    var _aff$id;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_resource_cost_jsx__WEBPACK_IMPORTED_MODULE_9__.ResourceCost, {
      key: (_aff$id = aff.id) !== null && _aff$id !== void 0 ? _aff$id : aff.name,
      affordabilities: aff
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'efforts'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Gathering Effort: ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_5__.formatValue)(data.mapGeneration.explorationBoundaries.min), " - ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_5__.formatValue)(data.mapGeneration.explorationBoundaries.max))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'buttons'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: !data.mapGeneration.affordable.isAffordable,
    onClick: purchaseMap
  }, "Generate Map")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'hint'
  }, "Regenerating map will totally regenerate all your map tiles and remove map lists")) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return setDetailVisible(false);
    }
  }, "Close") : null)));
};
var ItemDetails = function ItemDetails(_ref15) {
  var itemId = _ref15.itemId,
    setItemDetails = _ref15.setItemDetails;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient3 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient3.onMessage,
    sendData = _useWorkerClient3.sendData;
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    item = _useState14[0],
    setDetailOpened = _useState14[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sendData('query-map-tile-details', itemId);
    var interval = setInterval(function () {
      // console.log('queryingMap query-map-tile-details: ', itemId)
      sendData('query-map-tile-details', itemId);
    }, 1000);
    return function () {
      clearInterval(interval);
    };
  }, [itemId]);
  onMessage('map-tile-details', function (items) {
    setDetailOpened(items);
  });
  var toggleRunning = function toggleRunning(i, j, flag) {
    sendData('toggle-map-tile-running', {
      i: i,
      j: j,
      flag: flag
    });
  };
  if (!itemId || !item) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'blade-inner'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, item.name, "[", item.i, ":", item.j, "]"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'description'
  }, item.description)), item.isRunning ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Efficiency: ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_5__.formatValue)(100 * item.efficiency), "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Chance and amount effect: ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_5__.formatValue)(100 * item.effEff), "%")) : null, item.drops ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Drops:"), item.unlockedUnrevealedAmount > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'hint'
  }, "Discoverable as you explore") : null, item.drops.map(function (drop) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "drop-row ".concat(drop.rarityTier)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: 'name'
    }, drop.resource.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: 'probability'
    }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_5__.formatValue)(drop.probability * 100), "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: 'amounts'
    }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_5__.formatInt)(drop.amountMin), " - ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_5__.formatInt)(drop.amountMax)));
  }), item.unlockedUnrevealedAmount > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'hint pot-finds'
  }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_5__.formatInt)(item.unlockedUnrevealedAmount), " more items can be found") : null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Costs:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'stats-block costs'
  }, Object.values(item.cost || {}).map(function (cost) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, cost.name, ":"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_5__.formatValue)(cost.value)));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'buttons flex-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return toggleRunning(item.i, item.j, !item.isRunning);
    }
  }, item.isRunning ? 'Stop' : 'Explore'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return setItemDetails(null);
    }
  }, "Close")))));
};
var MapTileListDetails = function MapTileListDetails(_ref16) {
  var _editing$autotrigger, _editing$autotrigger2, _editing$autotrigger3, _editing$autotrigger4, _editing$autotrigger5, _editing$autotrigger6, _editing$autotrigger7;
  var listDetails = _ref16.listDetails,
    isEditing = _ref16.isEditing,
    onUpdateActionFromList = _ref16.onUpdateActionFromList,
    onDropActionFromList = _ref16.onDropActionFromList,
    onUpdateListValue = _ref16.onUpdateListValue,
    onAddTiles = _ref16.onAddTiles,
    onClearList = _ref16.onClearList,
    onAddAutotriggerRule = _ref16.onAddAutotriggerRule,
    onSetAutotriggerRuleValue = _ref16.onSetAutotriggerRuleValue,
    onDeleteAutotriggerRule = _ref16.onDeleteAutotriggerRule,
    setAutotriggerPriority = _ref16.setAutotriggerPriority,
    onSetAutotriggerPattern = _ref16.onSetAutotriggerPattern,
    onCloseList = _ref16.onCloseList,
    onToggleAutotrigger = _ref16.onToggleAutotrigger,
    automationUnlocked = _ref16.automationUnlocked;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient4 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient4.onMessage,
    sendData = _useWorkerClient4.sendData;
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      tiles: []
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    editing = _useState16[0],
    setEditing = _useState16[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // console.log('SET EDITING LIST MAP: ', listDetails, automationUnlocked);
    setEditing(listDetails);
  }, [listDetails]);
  var saveAndClose = function saveAndClose(isClose) {
    // console.log('Saving: ', editing);
    if (!isClose) {
      editing.isReopenEdit = true;
    }
    sendData('save-map-tile-list', editing);
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
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'main-row main-wrap map'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Name"), isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: 'text',
    value: editing.name,
    onChange: function onChange(e) {
      return onUpdateListValue('name', e.target.value);
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, editing.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'hint'
  }, "All tiles in the list are gathered simultaneously with corresponding weights."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'show-bar'
  }, editing !== null && editing !== void 0 && editing.proportionsBar ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'proportions-bar'
  }, editing === null || editing === void 0 ? void 0 : editing.proportionsBar.map(function (one) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        width: one.displayPercentage,
        backgroundColor: one.color
      },
      className: 'proportion-bar'
    });
  })) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Click on tiles to add/remove them from the list"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'tiles-list'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "actions-list-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "action-row flex-container header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'col title'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Tile")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'col amount'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Effort")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'col delete'
  }, isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Delete") : null)), editing.tiles.length ? editing.tiles.map(function (tile, index) {
    var _editing$proportionsB, _editing$proportionsB2, _editing$proportionsB3;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "action-row flex-container ".concat(!tile.isAvailable ? 'unavailable-tile' : '')
    }, editing.proportionsBar ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        width: (_editing$proportionsB = editing.proportionsBar) === null || _editing$proportionsB === void 0 || (_editing$proportionsB = _editing$proportionsB[index]) === null || _editing$proportionsB === void 0 ? void 0 : _editing$proportionsB.displayPercentage,
        backgroundColor: (_editing$proportionsB2 = editing.proportionsBar[index]) === null || _editing$proportionsB2 === void 0 ? void 0 : _editing$proportionsB2.color
      },
      className: 'prop-bg'
    }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'col title'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, tile.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "col amount ".concat(isEditing ? 'large' : '')
    }, isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'editing-amounts'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: 'number',
      value: tile.time,
      onChange: function onChange(e) {
        return onUpdateActionFromList(tile.id, 'time', +e.target.value);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_5__.formatValue)(((_editing$proportionsB3 = editing.proportionsBar) === null || _editing$proportionsB3 === void 0 || (_editing$proportionsB3 = _editing$proportionsB3[index]) === null || _editing$proportionsB3 === void 0 ? void 0 : _editing$proportionsB3.percentage) * 100 || 0), " %")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_5__.formatValue)(editing.proportionsBar[index].percentage * 100), " %")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'col delete'
    }, isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: 'close',
      onClick: function onClick() {
        return onDropActionFromList(tile.id);
      }
    }, "X") : null));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'hint yellow'
  }, "No map tiles added yet. Click on map tiles to add them into the map exploration list")))), isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block editing-bottom buttons'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onAddTiles
  }, "Add highlighted tiles"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onClearList
  }, "Clear")) : null, editing.drops ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Drops:"), editing.drops.map(function (drop) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "drop-row ".concat(drop.rarityTier)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: 'name'
    }, drop.resource.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: 'probability'
    }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_5__.formatValue)(drop.probability * 100), "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: 'amounts'
    }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_5__.formatInt)(drop.amountMin), " - ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_5__.formatInt)(drop.amountMax)));
  }), editing.unlockedUnrevealedAmount > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'hint pot-finds'
  }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_5__.formatInt)(editing.unlockedUnrevealedAmount), " more items can be found") : null) : null, editing.costs ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Costs:"), editing.costs.map(function (cost) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, cost.name, ":"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_5__.formatValue)(cost.cost)));
  })) : null, automationUnlocked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_rules_list_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isEditing: isEditing,
    rules: ((_editing$autotrigger5 = editing.autotrigger) === null || _editing$autotrigger5 === void 0 ? void 0 : _editing$autotrigger5.rules) || [],
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
  }, editing !== null && editing !== void 0 && editing.id ? 'Save' : 'Create'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return saveAndClose(true);
    }
  }, editing !== null && editing !== void 0 && editing.id ? 'Save & Close' : 'Create & Close'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onCloseList
  }, "Cancel")) : null));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/world/map/index.jsx?
