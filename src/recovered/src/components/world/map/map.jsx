__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionListsPopup: () => (/* binding */ ActionListsPopup),
/* harmony export */   Map: () => (/* binding */ Map),
/* harmony export */   MapListsPanel: () => (/* binding */ MapListsPanel),
/* harmony export */   MapTile: () => (/* binding */ MapTile),
/* harmony export */   TileDetailsPopup: () => (/* binding */ TileDetailsPopup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../general/client */ "./src/general/client.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _general_utils_strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../general/utils/strings */ "./src/general/utils/strings.js");
/* harmony import */ var _layout_sidebar_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layout/sidebar.jsx */ "./src/components/layout/sidebar.jsx");
/* harmony import */ var _shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/tippy-wrapper.jsx */ "./src/components/shared/tippy-wrapper.jsx");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _shared_pin_resource_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/pin-resource.jsx */ "./src/components/shared/pin-resource.jsx");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }









var customStyles = {
  control: function control(provided, state) {
    return _objectSpread(_objectSpread({}, provided), {}, {
      minHeight: '30px',
      // Зменшуємо мінімальну висоту
      height: '30px',
      padding: '0',
      // Видаляємо паддінги
      borderRadius: '2px',
      // Можливо, зменшимо border-radius
      fontSize: '13px',
      width: '300px',
      background: 'rgba(0,0,0,0.3)'
    });
  },
  valueContainer: function valueContainer(provided, state) {
    return _objectSpread(_objectSpread({}, provided), {}, {
      height: '30px',
      padding: '0 6px',
      // Зменшуємо горизонтальні відступи
      fontsize: '13px'
    });
  },
  multiValue: function multiValue(base) {
    return _objectSpread(_objectSpread({}, base), {}, {
      backgroundColor: "#222",
      // Customize background color
      borderRadius: "2px",
      // Rounded corners
      padding: "1px 4px",
      // Add some padding
      fontSize: "13px" // Customize font size
    });
  },
  multiValueLabel: function multiValueLabel(base) {
    return _objectSpread(_objectSpread({}, base), {}, {
      color: "#fff" // Customize text color
    });
  },
  input: function input(provided, state) {
    return _objectSpread(_objectSpread({}, provided), {}, {
      margin: '0',
      padding: '0',
      fontSize: '13px',
      color: '#fff'
    });
  },
  indicatorsContainer: function indicatorsContainer(provided, state) {
    return _objectSpread(_objectSpread({}, provided), {}, {
      height: '22px'
    });
  },
  dropdownIndicator: function dropdownIndicator(provided, state) {
    return _objectSpread(_objectSpread({}, provided), {}, {
      padding: '0' // Зменшуємо паддінг іконки
    });
  },
  clearIndicator: function clearIndicator(provided, state) {
    return _objectSpread(_objectSpread({}, provided), {}, {
      padding: '0' // Зменшуємо паддінг іконки очищення
    });
  },
  menu: function menu(provided, state) {
    return _objectSpread(_objectSpread({}, provided), {}, {
      marginTop: '0',
      // Видаляємо відступ між селектом і меню
      width: '240px'
    });
  },
  option: function option(provided, state) {
    return _objectSpread(_objectSpread({}, provided), {}, {
      padding: '2px 10px',
      // Зменшуємо відступи опцій
      color: '#000'
    });
  }
};
var Map = function Map(_ref) {
  var _mapData$filterableLo, _mapData$highlightFil, _mapData$highlightFil2;
  var setItemDetails = _ref.setItemDetails,
    openListDetails = _ref.openListDetails,
    isEditList = _ref.isEditList;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      mapTiles: [],
      explorationPoints: {
        balance: 0,
        consumption: 0,
        breakDown: {},
        isPinned: false
      },
      mapLists: {
        runningList: null,
        lists: [],
        automationEnabled: false,
        autotriggerIntervalSetting: 0,
        automationUnlocked: false
      },
      filterableLoot: [],
      highlightFilters: {}
    }),
    _useState2 = _slicedToArray(_useState, 2),
    mapData = _useState2[0],
    setMapTiles = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedTile = _useState4[0],
    setSelectedTile = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    hintForTileShown = _useState6[0],
    setHintShown = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var interval = setInterval(function () {
      sendData('query-map-data');
    }, 2000);
    sendData('query-map-data');
    return function () {
      clearInterval(interval);
    };
  }, []);
  onMessage('map-data', function (mapData) {
    setMapTiles(mapData);
    // console.log('mapData: ', mapData);
  });
  var setItemDetailsCb = function setItemDetailsCb(meta) {
    setItemDetails({
      meta: meta,
      type: 'map-tile'
    });
    setSelectedTile(meta);
  };

  /*    const unsetItemDetailsCb = meta => {
          setItemDetails({ meta: null, type: 'map-tile' });
          setSelectedTile(null);
      };*/

  var onEditList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (listData) {
    // console.log('onEditList: ', { listData, isEdit: true })
    openListDetails({
      listData: listData,
      isEdit: true,
      automationUnlocked: mapData.mapLists.automationUnlocked
    });
  }, []);
  var onViewList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (listData) {
    openListDetails({
      listData: listData,
      automationUnlocked: mapData.mapLists.automationUnlocked
    });
  }, []);
  var setHighlighted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (data) {
    sendData('map-highlight-resources', {
      ids: data.map(function (one) {
        return one.value;
      })
    });
  });
  var toggleUnexplored = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    sendData('map-highlight-filter', {
      highlightUnexplored: !mapData.highlightFilters.highlightUnexplored
    });
  });
  var changeMinEffort = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (val) {
    sendData('map-highlight-filter', {
      effortMin: val
    });
  });
  var changeMaxEffort = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (val) {
    sendData('map-highlight-filter', {
      effortMax: val
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'map-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'head'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'flex-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_6__.TippyWrapper, {
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'hint-popup'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: 'hint'
    }, "Shows the amount of available effort you can use for gathering resources."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: 'hint'
    }, "If your gathering effort is insufficient, loot chances and quantities will decrease."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_sidebar_jsx__WEBPACK_IMPORTED_MODULE_5__.BreakDown, {
      breakDown: mapData.explorationPoints.breakDown
    }))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'space-item'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'gather-label'
  }, "Gathering Efforts:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "gather-value ".concat(mapData.explorationPoints.balance > 1.e-7 ? 'green' : 'yellow')
  }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_4__.formatValue)(mapData.explorationPoints.balance), "/", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_4__.formatValue)(mapData.explorationPoints.balance + mapData.explorationPoints.consumption)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_pin_resource_jsx__WEBPACK_IMPORTED_MODULE_7__.PinResource, {
    isPinned: mapData.explorationPoints.isPinned,
    id: 'gathering_effort'
  })), (_mapData$filterableLo = mapData.filterableLoot) !== null && _mapData$filterableLo !== void 0 && _mapData$filterableLo.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'resources-filter'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Search resources"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_select__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isMulti: true,
    options: mapData.filterableLoot.map(function (one) {
      return {
        value: one.id,
        label: one.name
      };
    }),
    defaultValue: mapData.filterableLoot.filter(function (one) {
      return one.isSelected;
    }).map(function (one) {
      return {
        value: one.id,
        label: one.name
      };
    }),
    onChange: setHighlighted,
    styles: customStyles
  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'other-filters'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: 'effort-control'
  }, "Effort between:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: 'number',
    value: (_mapData$highlightFil = mapData.highlightFilters.effortMin) !== null && _mapData$highlightFil !== void 0 ? _mapData$highlightFil : 0,
    onChange: function onChange(e) {
      return changeMinEffort(+e.target.value);
    }
  }), "and", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: 'number',
    value: (_mapData$highlightFil2 = mapData.highlightFilters.effortMax) !== null && _mapData$highlightFil2 !== void 0 ? _mapData$highlightFil2 : 0,
    onChange: function onChange(e) {
      return changeMaxEffort(+e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: 'checkbox',
    checked: !!mapData.highlightFilters.highlightUnexplored,
    onChange: toggleUnexplored
  }), "Highlight not fully explored"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'map-cat'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'map-container'
  }, mapData.mapTiles.map(function (row, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'map-row'
    }, row.map(function (tile, j) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MapTile, {
        i: i,
        j: j,
        isSelected: selectedTile && (selectedTile === null || selectedTile === void 0 ? void 0 : selectedTile.i) === i && (selectedTile === null || selectedTile === void 0 ? void 0 : selectedTile.j) === j,
        icon: tile.metaData.icon,
        setItemDetails: setItemDetailsCb,
        isExploring: tile.isRunning,
        isHighlight: tile.isHighlight,
        isEditList: isEditList,
        hintForTileShown: hintForTileShown,
        setHintShown: setHintShown
      });
    }));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'map-lists-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MapListsPanel, {
    runningList: mapData.mapLists.runningList,
    lists: mapData.mapLists.lists,
    automationEnabled: mapData.mapLists.automationEnabled,
    autotriggerIntervalSetting: mapData.mapLists.autotriggerIntervalSetting,
    editListToDetails: function editListToDetails(id) {
      // console.log('editListToDetails: ', id);
      onEditList({
        id: id
      });
    },
    viewListToDetails: function viewListToDetails(id) {
      onViewList({
        id: id
      });
    },
    automationUnlocked: mapData.mapLists.automationUnlocked
  })));
};
var MapTile = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function (_ref2) {
  var icon = _ref2.icon,
    i = _ref2.i,
    j = _ref2.j,
    isSelected = _ref2.isSelected,
    setItemDetails = _ref2.setItemDetails,
    isExploring = _ref2.isExploring,
    isHighlight = _ref2.isHighlight,
    hintForTileShown = _ref2.hintForTileShown,
    setHintShown = _ref2.setHintShown,
    isEditList = _ref2.isEditList;
  // Тіло клітинки
  var tileBody = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "map-tile ".concat(isExploring ? "running" : "", " ").concat(isSelected ? "selected" : "", " ").concat(isHighlight ? "highlight" : ""),
    style: {
      backgroundImage: "url(icons/terrain/".concat(icon, ".png)")
    },
    onClick: function onClick() {
      return isSelected ? setItemDetails(null) : setItemDetails({
        i: i,
        j: j
      });
    }
  });
  if (!isEditList) {
    return tileBody;
  }

  // Відображення підказки, якщо редагування увімкнено
  var showPopup = hintForTileShown && hintForTileShown.i === i && hintForTileShown.j === j;
  var handleShow = function handleShow() {
    // console.log('Showing?: ', showPopup, i, j);
    // if (!showPopup) {
    setHintShown({
      i: i,
      j: j
    });
    //}
  };
  var handleHide = function handleHide() {
    if (showPopup) {
      setHintShown(null);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_6__.TippyWrapper, {
    lazy: true,
    onHide: handleHide,
    onShow: handleShow,
    content: showPopup ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "hint-popup"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TileDetailsPopup, {
      itemId: {
        i: i,
        j: j
      }
    })) : null
  }, tileBody);
});
var ActionListsPopup = function ActionListsPopup(_ref3) {
  var lists = _ref3.lists,
    isOpened = _ref3.isOpened,
    setOpenedFor = _ref3.setOpenedFor,
    onSelect = _ref3.onSelect,
    onHover = _ref3.onHover,
    onRun = _ref3.onRun,
    onDelete = _ref3.onDelete;
  if (!isOpened) return null;
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    search = _useState8[0],
    setSearch = _useState8[1];
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
    }, list.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_6__.TippyWrapper, {
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
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_6__.TippyWrapper, {
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
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_6__.TippyWrapper, {
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
var MapListsPanel = function MapListsPanel(_ref4) {
  var automationUnlocked = _ref4.automationUnlocked,
    runningList = _ref4.runningList,
    editListToDetails = _ref4.editListToDetails,
    lists = _ref4.lists,
    viewListToDetails = _ref4.viewListToDetails,
    automationEnabled = _ref4.automationEnabled,
    autotriggerIntervalSetting = _ref4.autotriggerIntervalSetting;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient2 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient2.onMessage,
    sendData = _useWorkerClient2.sendData;
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    openedFor = _useState10[0],
    setOpenedFor = _useState10[1];
  var toggleAutomation = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    sendData('set-map-automation-enabled', {
      flag: !automationEnabled
    });
  });
  var changeAutomationInterval = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (interval) {
    sendData('set-map-autotrigger-interval', {
      interval: interval
    });
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var setOp = function setOp() {
      // console.log('setOpToNull ')
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
    // console.log('Set to edit: ', id);
    editListToDetails(id);
  };
  var runList = function runList(id) {
    if (!id) {
      sendData('stop-map-tile-list', {
        id: id
      });
      return;
    }
    sendData('run-map-tile-list', {
      id: id
    });
  };
  var onDelete = function onDelete(id) {
    sendData('delete-map-tile-list', {
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
  })), automationUnlocked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, "1 hour"))))) : null));
};
var TileDetailsPopup = function TileDetailsPopup(_ref5) {
  var itemId = _ref5.itemId;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient3 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient3.onMessage,
    sendData = _useWorkerClient3.sendData;
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    item = _useState12[0],
    setDetailOpened = _useState12[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sendData('query-map-tile-details', itemId);
    var interval = setInterval(function () {
      // console.log('queryingMap query-map-tile-details: ', itemId)
      sendData('query-map-tile-details', itemId);
    }, 1000);
    return function () {
      clearInterval(interval);
    };
  }, []);
  onMessage('map-tile-details', function (items) {
    // console.log('Set in popup: ', item);
    setDetailOpened(items);
  });
  if (!itemId || !item) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'tile-hint'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, item.name, "[", item.i, ":", item.j, "]"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'description'
  }, item.description)), item.drops ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Drops:"), item.drops.map(function (drop) {
    var _drop$rarityTier;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "drop-row ".concat((_drop$rarityTier = drop.rarityTier) !== null && _drop$rarityTier !== void 0 ? _drop$rarityTier : '')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: 'name'
    }, drop.resource.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: 'probability'
    }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_4__.formatValue)(drop.probability * 100), "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: 'amounts'
    }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_4__.formatInt)(drop.amountMin), " - ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_4__.formatInt)(drop.amountMax)));
  }), item.unlockedUnrevealedAmount > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'hint pot-finds'
  }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_4__.formatInt)(item.unlockedUnrevealedAmount), " more items can be found") : null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Costs:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'stats-block costs'
  }, Object.values(item.cost || {}).map(function (cost) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, cost.name, ":"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_4__.formatValue)(cost.value)));
  }))));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/world/map/map.jsx?
