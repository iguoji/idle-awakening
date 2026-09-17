__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemSkillCard: () => (/* binding */ ItemSkillCard),
/* harmony export */   Skills: () => (/* binding */ Skills)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../general/client */ "./src/general/client.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _general_hooks_flash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../general/hooks/flash */ "./src/general/hooks/flash.js");
/* harmony import */ var _shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/tippy-wrapper.jsx */ "./src/components/shared/tippy-wrapper.jsx");
/* harmony import */ var _general_utils_strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../general/utils/strings */ "./src/general/utils/strings.js");
/* harmony import */ var _shared_effects_section_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/effects-section.jsx */ "./src/components/shared/effects-section.jsx");
/* harmony import */ var _shared_resource_cost_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/resource-cost.jsx */ "./src/components/shared/resource-cost.jsx");
/* harmony import */ var _layout_flash_overlay_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layout/flash-overlay.jsx */ "./src/components/layout/flash-overlay.jsx");
/* harmony import */ var _shared_resource_comparison_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/resource-comparison.jsx */ "./src/components/shared/resource-comparison.jsx");
/* harmony import */ var _context_ui_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../context/ui-context */ "./src/context/ui-context.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }












var Skills = function Skills() {
  var _detailsShown$afforda;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useAppContext = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_11__.useAppContext)(),
    isMobile = _useAppContext.isMobile;
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      available: [],
      sp: {
        total: 0,
        max: 0
      }
    }),
    _useState2 = _slicedToArray(_useState, 2),
    skillsData = _useState2[0],
    setSkillsData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    detailsShown = _useState4[0],
    setDetailsShown = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var interval = setInterval(function () {
      sendData('query-skills-data', {});
    }, 100);
    return function () {
      clearInterval(interval);
    };
  }, []);
  onMessage('skills-data', function (skills) {
    setSkillsData(skills);
  });
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    overlayPositions = _useState6[0],
    setOverlayPositions = _useState6[1];
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
  var onPurchase = function onPurchase(id) {
    // console.log('Purchase: ', id);
    sendData('purchase-skill', {
      id: id
    });
  };
  var onShowDetails = function onShowDetails(id) {
    if (isMobile) {
      setDetailsShown(skillsData.available.find(function (one) {
        return one.id === id;
      }));
    }
    // console.log('onShowDetails: ', id);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'skills-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'head'
  }, "Skill points available: ", skillsData.sp.total, " / ", skillsData.sp.max), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'skills-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'cards'
  }, skillsData.available.map(function (skill) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ItemSkillCard, _extends({
      key: skill.id
    }, skill, {
      onFlash: handleFlash,
      onPurchase: onPurchase,
      onShowDetails: onShowDetails,
      isMobile: isMobile
    }));
  }), overlayPositions.map(function (position, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_flash_overlay_jsx__WEBPACK_IMPORTED_MODULE_9__.FlashOverlay, {
      key: index,
      position: position
    });
  })))), isMobile && detailsShown ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'details-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'blade-inner'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, detailsShown.name, " (", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatInt)(detailsShown.level), ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'description'
  }, detailsShown.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Effects:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'effects'
  }, detailsShown.currentEffects ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_resource_comparison_jsx__WEBPACK_IMPORTED_MODULE_10__.ResourceComparison, {
    effects1: detailsShown.currentEffects,
    effects2: detailsShown.effects
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_effects_section_jsx__WEBPACK_IMPORTED_MODULE_7__.EffectsSection, {
    effects: detailsShown.effects
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Cost:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'costs-wrap'
  }, Object.values(detailsShown.affordable.affordabilities || {}).map(function (aff) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_resource_cost_jsx__WEBPACK_IMPORTED_MODULE_8__.ResourceCost, {
      affordabilities: aff
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: !((_detailsShown$afforda = detailsShown.affordable) !== null && _detailsShown$afforda !== void 0 && _detailsShown$afforda.isAffordable),
    onClick: function onClick() {
      return onPurchase(detailsShown.id);
    }
  }, "Purchase")))) : null);
};
var ItemSkillCard = function ItemSkillCard(_ref) {
  var id = _ref.id,
    name = _ref.name,
    description = _ref.description,
    level = _ref.level,
    max = _ref.max,
    effects = _ref.effects,
    currentEffects = _ref.currentEffects,
    affordable = _ref.affordable,
    isLeveled = _ref.isLeveled,
    onFlash = _ref.onFlash,
    onPurchase = _ref.onPurchase,
    onShowDetails = _ref.onShowDetails,
    isMobile = _ref.isMobile;
  var elementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,_general_hooks_flash__WEBPACK_IMPORTED_MODULE_4__.useFlashOnLevelUp)(isLeveled, onFlash, elementRef);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: elementRef,
    className: "icon-card bigger item flashable ".concat(!affordable.isAffordable ? 'unavailable' : ''),
    onMouseEnter: function onMouseEnter() {
      return isMobile ? null : onShowDetails(id);
    },
    onMouseLeave: function onMouseLeave() {
      return isMobile ? null : onShowDetails(null);
    },
    onClick: function onClick(e) {
      return isMobile ? onShowDetails(id) : onPurchase(id, e.shiftKey ? 1e9 : 1);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_5__.TippyWrapper, {
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'hint-popup effects-popup'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'blade-inner'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'block'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, name, " (", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatInt)(level), ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'description'
    }, description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'block'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Effects:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'effects'
    }, currentEffects ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_resource_comparison_jsx__WEBPACK_IMPORTED_MODULE_10__.ResourceComparison, {
      effects1: currentEffects,
      effects2: effects
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_effects_section_jsx__WEBPACK_IMPORTED_MODULE_7__.EffectsSection, {
      effects: effects
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'block'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Cost:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'costs-wrap'
    }, Object.values(affordable.affordabilities || {}).map(function (aff) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_resource_cost_jsx__WEBPACK_IMPORTED_MODULE_8__.ResourceCost, {
        affordabilities: aff
      });
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Press to buy.")))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'icon-content'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "icons/skills/".concat(id, ".png"),
    className: 'resource'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'level'
  }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatInt)(level)))));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/mage/skills.jsx?
