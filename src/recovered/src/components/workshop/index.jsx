__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Workshop: () => (/* binding */ Workshop)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _workshop_menu_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workshop-menu.jsx */ "./src/components/workshop/workshop-menu.jsx");
/* harmony import */ var _crafting_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crafting/index.jsx */ "./src/components/workshop/crafting/index.jsx");
/* harmony import */ var _alchemy_index_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alchemy/index.jsx */ "./src/components/workshop/alchemy/index.jsx");
/* harmony import */ var _plantations_index_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plantations/index.jsx */ "./src/components/workshop/plantations/index.jsx");
/* harmony import */ var _general_hooks_local_cache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../general/hooks/local-cache */ "./src/general/hooks/local-cache.js");
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _context_ui_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/ui-context */ "./src/context/ui-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../general/client */ "./src/general/client.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectDestructuringEmpty(t) { if (null == t) throw new TypeError("Cannot destructure " + t); }









var Workshop = function Workshop(_ref) {
  _objectDestructuringEmpty(_ref);
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_6__["default"]);
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_8__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useUICache = (0,_general_hooks_local_cache__WEBPACK_IMPORTED_MODULE_5__.useUICache)('workshop_tab', 'crafting'),
    _useUICache2 = _slicedToArray(_useUICache, 2),
    selectedTab = _useUICache2[0],
    setSelectedTab = _useUICache2[1];

  // check for unlocks and switch once unavailable
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sendData('query-unlocks', {
      prefix: 'workshop-main'
    });
  }, []);
  onMessage('unlocks-workshop-main', function (unlocks) {
    var mapToPages = {
      crafting: 'crafting',
      alchemy: 'alchemy',
      plantation: 'plantation'
    };
    if (!unlocks[mapToPages[selectedTab]]) {
      var acceptable = Object.entries(mapToPages).filter(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
          tab = _ref3[0],
          unlock = _ref3[1];
        return unlocks[unlock];
      });
      if (acceptable.length) {
        setSelectedTab(acceptable[0][0]);
      }
    }
  });
  if (selectedTab === 'crafting') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_crafting_index_jsx__WEBPACK_IMPORTED_MODULE_2__.CraftingWrap, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_workshop_menu_jsx__WEBPACK_IMPORTED_MODULE_1__.WorkshopMenu, {
      selectedTab: selectedTab,
      setSelectedTab: setSelectedTab
    }));
  }
  if (selectedTab === 'alchemy') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_alchemy_index_jsx__WEBPACK_IMPORTED_MODULE_3__.AlchemyWrap, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_workshop_menu_jsx__WEBPACK_IMPORTED_MODULE_1__.WorkshopMenu, {
      selectedTab: selectedTab,
      setSelectedTab: setSelectedTab
    }));
  }
  if (selectedTab === 'plantation') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_plantations_index_jsx__WEBPACK_IMPORTED_MODULE_4__.PlantationsWrap, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_workshop_menu_jsx__WEBPACK_IMPORTED_MODULE_1__.WorkshopMenu, {
      selectedTab: selectedTab,
      setSelectedTab: setSelectedTab
    }));
  }
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/workshop/index.jsx?
