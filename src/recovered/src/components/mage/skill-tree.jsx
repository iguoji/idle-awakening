__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemSkillCard: () => (/* binding */ ItemSkillCard),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-perfect-scrollbar/dist/css/styles.css */ "./node_modules/react-perfect-scrollbar/dist/css/styles.css");
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _context_ui_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/ui-context */ "./src/context/ui-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../general/client */ "./src/general/client.js");
/* harmony import */ var _general_utils_strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../general/utils/strings */ "./src/general/utils/strings.js");
/* harmony import */ var _shared_resource_comparison_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/resource-comparison.jsx */ "./src/components/shared/resource-comparison.jsx");
/* harmony import */ var _shared_effects_section_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/effects-section.jsx */ "./src/components/shared/effects-section.jsx");
/* harmony import */ var _shared_resource_cost_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/resource-cost.jsx */ "./src/components/shared/resource-cost.jsx");
/* harmony import */ var _general_hooks_flash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../general/hooks/flash */ "./src/general/hooks/flash.js");
/* harmony import */ var _shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/tippy-wrapper.jsx */ "./src/components/shared/tippy-wrapper.jsx");
/* harmony import */ var _layout_sidebar_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../layout/sidebar.jsx */ "./src/components/layout/sidebar.jsx");
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













var SkillTree = function SkillTree() {
  var _detailsShown$afforda;
  var scale = 80;
  var center = {
    x: 1250,
    y: 1250
  };
  var scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var contentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDragging = _useState2[0],
    setIsDragging = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      x: 0,
      y: 0,
      scrollX: 0,
      scrollY: 0
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    start = _useState4[0],
    setStart = _useState4[1];
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_3__["default"]);
  var _useAppContext = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_4__.useAppContext)(),
    isMobile = _useAppContext.isMobile;
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_5__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      available: {},
      sp: {
        total: 0,
        max: 0
      },
      currentEffects: [],
      drafts: []
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    skillsData = _useState6[0],
    setSkillsData = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    detailsShown = _useState8[0],
    setDetailsShown = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sendData('query-skills-data', {});
    /*const interval = setInterval(() => {
        sendData('query-skills-data', {});
    }, 100);
    return () => {
        clearInterval(interval);
    }*/
  }, []);
  onMessage('skills-data', function (skills) {
    console.log('skills: ', skills);
    setSkillsData(skills);
  });
  onMessage('import-skill-draft-error', function (data) {
    alert(data.error);
    console.warn(data.error, data.details);
  });
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    overlayPositions = _useState10[0],
    setOverlayPositions = _useState10[1];
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
  var onDelete = function onDelete(id) {
    // console.log('Purchase: ', id);
    sendData('remove-skill', {
      id: id
    });
  };
  var onApply = function onApply() {
    // console.log('Purchase: ', id);
    sendData('apply-skill-changes', {});
  };
  var onDiscard = function onDiscard() {
    // console.log('Purchase: ', id);
    sendData('discard-skill-changes', {});
  };
  var onShowDetails = function onShowDetails(id) {
    if (isMobile) {
      setDetailsShown(skillsData.available[id]);
    }
    // console.log('onShowDetails: ', id);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (scrollRef.current) {
      var container = scrollRef.current._container;
      if (container) {
        container.scrollLeft = center.x - container.clientWidth / 2;
        container.scrollTop = center.y - container.clientHeight / 2;
      }
    }
  }, []);
  var handleMouseDown = function handleMouseDown(e) {
    setIsDragging(true);
    var container = scrollRef.current._container;
    setStart({
      x: e.pageX,
      y: e.pageY,
      scrollX: container.scrollLeft,
      scrollY: container.scrollTop
    });
  };
  var handleMouseMove = function handleMouseMove(e) {
    if (!isDragging) return;
    e.preventDefault();
    var container = scrollRef.current._container;
    container.scrollLeft = start.scrollX - (e.pageX - start.x);
    container.scrollTop = start.scrollY - (e.pageY - start.y);
  };
  var handleMouseUp = function handleMouseUp() {
    setIsDragging(false);
  };
  var saveDraft = function saveDraft() {
    var name = prompt("Enter draft name:");
    if (name) sendData('save-skill-draft', {
      name: name
    });
  };
  var loadDraft = function loadDraft(id) {
    sendData('load-skill-draft', {
      id: id,
      isViewMode: false
    });
  };
  var viewDraft = function viewDraft(id) {
    sendData('load-skill-draft', {
      id: id,
      isViewMode: true
    });
  };
  var deleteDraft = function deleteDraft(id) {
    sendData('delete-skill-draft', {
      id: id
    });
  };
  var exportDraft = function exportDraft(id) {
    sendData('export-skill-draft', {
      id: id
    });
  };
  onMessage('export-skill-draft-blob', function (data) {
    try {
      // Якщо `data` ще не є блобом, створюємо його
      var blob = new Blob([JSON.stringify(data)], {
        type: "application/json"
      });

      // Створюємо URL-об'єкт
      var url = window.URL.createObjectURL(blob);

      // Створюємо приховану кнопку завантаження
      var a = document.createElement('a');
      a.href = url;
      a.download = "skill-draft-".concat(data.name.toLowerCase().replaceAll(/[^\w\d]/g, '_'), "-").concat(Date.now(), ".json");

      // Автоматично клікаємо для скачування
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Звільняємо пам'ять
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading skill draft:", error);
    }
  });
  var importDraft = function importDraft(event) {
    var file = event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onload = function (e) {
        sendData('import-skill-draft', {
          content: e.target.result
        });
      };
      reader.readAsText(file);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'skills-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'head'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_11__.TippyWrapper, {
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'hint-popup'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_sidebar_jsx__WEBPACK_IMPORTED_MODULE_12__.BreakDown, {
      breakDown: skillsData.sp.breakDown
    }), " ")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Skill points available: ", skillsData.sp.total, " / ", skillsData.sp.max)), skillsData.isEditMode ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'buttons'
  }, !skillsData.isViewMode ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onApply
  }, "Apply") : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onDiscard
  }, !skillsData.isViewMode ? 'Discard' : 'Close')) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'skill-popup-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onMouseMove: handleMouseMove,
    onMouseUp: handleMouseUp,
    onMouseLeave: handleMouseUp,
    className: 'skills-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default()), {
    ref: scrollRef,
    style: {
      width: "100%",
      height: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: contentRef,
    onMouseDown: handleMouseDown,
    style: {
      position: "relative",
      width: "2500px",
      height: "2500px",
      cursor: isDragging ? "grabbing" : "grab"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "2500",
    height: "2500",
    style: {
      position: "absolute",
      top: 0,
      left: 0
    }
  }, Object.entries(skillsData.available).map(function (_ref) {
    var _skill$unlockBySkills;
    var _ref2 = _slicedToArray(_ref, 2),
      id = _ref2[0],
      skill = _ref2[1];
    return (_skill$unlockBySkills = skill.unlockBySkills) === null || _skill$unlockBySkills === void 0 ? void 0 : _skill$unlockBySkills.map(function (req, index) {
      var _skillsData$available, _skillsData$available2;
      var from = skillsData.available[req.id];
      if (!from) return null;
      var x1 = center.x + from.position.left * scale;
      var y1 = center.y + from.position.top * scale;
      var x2 = center.x + skill.position.left * scale;
      var y2 = center.y + skill.position.top * scale;
      var midX = (x1 + x2) / 2;
      var midY = (y1 + y2) / 2;
      var currentLevel = ((_skillsData$available = skillsData.available[req.id]) === null || _skillsData$available === void 0 ? void 0 : _skillsData$available.level) || 0;
      var requiredLevel = req.level;
      var mutualSkill = (_skillsData$available2 = skillsData.available[req.id]) === null || _skillsData$available2 === void 0 || (_skillsData$available2 = _skillsData$available2.unlockBySkills) === null || _skillsData$available2 === void 0 ? void 0 : _skillsData$available2.find(function (s) {
        return s.id === skill.id;
      });
      if (mutualSkill) {
        var _skillsData$available3;
        currentLevel = Math.max(currentLevel, ((_skillsData$available3 = skillsData.available[id]) === null || _skillsData$available3 === void 0 ? void 0 : _skillsData$available3.level) || 0);
      }
      var arrowPosition = 0.75; // 75% ближче до дочірнього скіла
      var arrowX = x1 + (x2 - x1) * arrowPosition;
      var arrowY = y1 + (y2 - y1) * arrowPosition;
      var strokeColor = req.isMet || currentLevel >= requiredLevel ? '#999' : '#333';
      var fillColor = req.isMet || currentLevel >= requiredLevel ? '#111' : '#333';
      var textColor = req.isMet || currentLevel >= requiredLevel ? '#2dfa50' : '#da8a11';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
        key: "".concat(id, "-line-").concat(index)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2,
        stroke: strokeColor,
        strokeWidth: "2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polygon", {
        points: "-8,-5 8,0 -8,5",
        transform: "translate(".concat(arrowX, ", ").concat(arrowY, ") rotate(").concat(Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI, ")"),
        fill: strokeColor
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
        cx: midX,
        cy: midY,
        r: "10",
        fill: fillColor,
        stroke: "#999",
        strokeWidth: "2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
        x: midX,
        y: midY,
        textAnchor: "middle",
        alignmentBaseline: "middle",
        fontSize: "12",
        fill: textColor
      }, "".concat(currentLevel, "/").concat(requiredLevel)));
    });
  })), Object.entries(skillsData.available).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      id = _ref4[0],
      skill = _ref4[1];
    var x = center.x + skill.position.left * scale;
    var y = center.y + skill.position.top * scale;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ItemSkillCard, _extends({
      x: x,
      y: y,
      key: skill.id
    }, skill, {
      onFlash: handleFlash,
      onPurchase: onPurchase,
      onShowDetails: onShowDetails,
      isMobile: isMobile
    })), skill.diff ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'delete-diff',
      style: {
        left: "".concat(x + 30, "px"),
        top: "".concat(y - 60, "px")
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "+", skill.diff), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return onDelete(skill.id);
      }
    }, "-")) : null);
  })))), !isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'skills-sidebar'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block comparison'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Current skills effects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'table'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'eff-wrap'
  }, skillsData.potentialEffects ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_resource_comparison_jsx__WEBPACK_IMPORTED_MODULE_7__.ResourceComparison, {
    effects1: skillsData.currentEffects,
    effects2: skillsData.potentialEffects
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_effects_section_jsx__WEBPACK_IMPORTED_MODULE_8__.EffectsSection, {
    effects: skillsData.currentEffects,
    maxDisplay: 200
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block draft-workarea'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "draft-controls"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: saveDraft
  }, "Save Draft"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return document.getElementById("import-draft-input").click();
    }
  }, "Import Draft"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "file",
    id: "import-draft-input",
    onChange: importDraft,
    style: {
      display: "none"
    } // Приховуємо інпут
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'list'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, skillsData.drafts.map(function (draft) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: draft.id,
      className: "draft-item ".concat(draft.isAppliable ? ' available' : ' unavailable')
    }, draft.name, " (", new Date(draft.timestamp).toLocaleString(), ")", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'icons flex-container'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_11__.TippyWrapper, {
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'hint-popup'
      }, "View Build")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'icon-content edit-icon interface-icon small',
      onClick: function onClick() {
        return viewDraft(draft.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: "icons/interface/icon_show.png"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_11__.TippyWrapper, {
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'hint-popup'
      }, "Apply Build")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "icon-content edit-icon interface-icon small ".concat(!draft.isAppliable ? 'disabled' : ''),
      onClick: function onClick() {
        return loadDraft(draft.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: "icons/interface/run.png"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_11__.TippyWrapper, {
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'hint-popup'
      }, "Export Build")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "icon-content edit-icon interface-icon small",
      onClick: function onClick() {
        return exportDraft(draft.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: "icons/interface/download.png"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_11__.TippyWrapper, {
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'hint-popup'
      }, "Delete Build")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "icon-content edit-icon interface-icon small",
      onClick: function onClick() {
        return deleteDraft(draft.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: "icons/interface/delete.png"
    })))));
  })))))) : null), isMobile && detailsShown ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, detailsShown.currentEffects ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_resource_comparison_jsx__WEBPACK_IMPORTED_MODULE_7__.ResourceComparison, {
    effects1: detailsShown.currentEffects,
    effects2: detailsShown.effects
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_effects_section_jsx__WEBPACK_IMPORTED_MODULE_8__.EffectsSection, {
    effects: detailsShown.effects
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Cost:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'costs-wrap'
  }, Object.values(detailsShown.affordable.affordabilities || {}).map(function (aff) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_resource_cost_jsx__WEBPACK_IMPORTED_MODULE_9__.ResourceCost, {
      affordabilities: aff
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: !((_detailsShown$afforda = detailsShown.affordable) !== null && _detailsShown$afforda !== void 0 && _detailsShown$afforda.isAffordable) || !detailsShown.isRequirementsMet,
    onClick: function onClick() {
      return onPurchase(detailsShown.id);
    }
  }, "Purchase")))) : null);
};
var ItemSkillCard = function ItemSkillCard(_ref5) {
  var id = _ref5.id,
    isUnlocked = _ref5.isUnlocked,
    x = _ref5.x,
    y = _ref5.y,
    icon = _ref5.icon,
    isRequirementsMet = _ref5.isRequirementsMet,
    name = _ref5.name,
    description = _ref5.description,
    level = _ref5.level,
    max = _ref5.max,
    isCapped = _ref5.isCapped,
    effects = _ref5.effects,
    currentEffects = _ref5.currentEffects,
    affordable = _ref5.affordable,
    isLeveled = _ref5.isLeveled,
    onFlash = _ref5.onFlash,
    onPurchase = _ref5.onPurchase,
    onShowDetails = _ref5.onShowDetails,
    isMobile = _ref5.isMobile;
  var elementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,_general_hooks_flash__WEBPACK_IMPORTED_MODULE_10__.useFlashOnLevelUp)(isLeveled, onFlash, elementRef);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: elementRef,
    className: "icon-card absolute item flashable ".concat(!affordable.isAffordable || !isRequirementsMet || isCapped ? 'unavailable' : '', " ").concat(isCapped ? ' complete' : '', " ").concat(icon ? 'rounded semi-color' : '', " ").concat(!isUnlocked ? 'black-out' : ''),
    onMouseEnter: function onMouseEnter() {
      return isMobile ? null : onShowDetails(id);
    },
    onMouseLeave: function onMouseLeave() {
      return isMobile ? null : onShowDetails(null);
    },
    onClick: function onClick(e) {
      return isMobile ? onShowDetails(id) : onPurchase(id, e.shiftKey ? 1e9 : 1);
    },
    style: {
      left: "".concat(x - 25, "px"),
      top: "".concat(y - 25, "px")
    }
  }, isUnlocked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_11__.TippyWrapper, {
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
    }, currentEffects ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_resource_comparison_jsx__WEBPACK_IMPORTED_MODULE_7__.ResourceComparison, {
      effects1: currentEffects,
      effects2: effects
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_effects_section_jsx__WEBPACK_IMPORTED_MODULE_8__.EffectsSection, {
      effects: effects
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'block'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Cost:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'costs-wrap'
    }, Object.values(affordable.affordabilities || {}).map(function (aff) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_resource_cost_jsx__WEBPACK_IMPORTED_MODULE_9__.ResourceCost, {
        affordabilities: aff
      });
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Press to buy.")))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "icon-content"
  }, icon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'semi-color',
    style: {
      backgroundColor: icon.color
    }
  }, "+") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "icons/skills/".concat(id, ".png"),
    className: 'resource'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'level'
  }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatInt)(level), max ? "/".concat((0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatInt)(max)) : ''))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "icon-content black"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkillTree);

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/mage/skill-tree.jsx?
