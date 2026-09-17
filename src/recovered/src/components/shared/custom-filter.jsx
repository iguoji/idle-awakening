__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../general/client */ "./src/general/client.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var customStyles = {
  control: function control(provided, state) {
    return _objectSpread(_objectSpread({}, provided), {}, {
      minHeight: '22px',
      // Зменшуємо мінімальну висоту
      height: '22px',
      padding: '0',
      // Видаляємо паддінги
      borderRadius: '1px',
      // Можливо, зменшимо border-radius
      fontSize: '13px'
    });
  },
  valueContainer: function valueContainer(provided, state) {
    return _objectSpread(_objectSpread({}, provided), {}, {
      height: '22px',
      padding: '0 6px',
      // Зменшуємо горизонтальні відступи
      fontsize: '13px'
    });
  },
  input: function input(provided, state) {
    return _objectSpread(_objectSpread({}, provided), {}, {
      margin: '0',
      padding: '0',
      fontSize: '13px'
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
var CustomFilter = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function (_ref) {
  var category = _ref.category,
    prefix = _ref.prefix,
    id = _ref.id,
    name = _ref.name,
    _ref$rules = _ref.rules,
    initialRules = _ref$rules === void 0 ? [] : _ref$rules,
    _ref$condition = _ref.condition,
    initialCondition = _ref$condition === void 0 ? '' : _ref$condition,
    onSave = _ref.onSave,
    onCancel = _ref.onCancel;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialRules),
    _useState2 = _slicedToArray(_useState, 2),
    rules = _useState2[0],
    setRules = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialCondition),
    _useState4 = _slicedToArray(_useState3, 2),
    condition = _useState4[0],
    setCondition = _useState4[1];

  // Lists loaded from server
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    tags = _useState6[0],
    setTags = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    attributesLists = _useState8[0],
    setAttributesLists = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    resources = _useState10[0],
    setResources = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(name),
    _useState12 = _slicedToArray(_useState11, 2),
    filterName = _useState12[0],
    setFilterName = _useState12[1];

  // Load data on mount (and when prefix changes)
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sendData('query-all-resources', {
      prefix: prefix
    });
    if (category === 'action') {
      sendData('query-all-action-tags', {
        prefix: prefix
      });
      sendData('query-all-attributes', {
        prefix: prefix
      });
    }
    if (category === 'furniture') {
      sendData('query-all-furniture-tags', {
        prefix: prefix
      });
      //query-all-property-effects
      sendData('query-all-property-effects', {
        prefix: prefix,
        filterId: category
      });
    }
    if (category === 'accessory') {
      sendData('query-all-accessory-tags', {
        prefix: prefix
      });
      sendData('query-all-property-effects', {
        prefix: prefix,
        filterId: category
      });
    }
  }, [prefix]);

  // Subscribe to incoming data
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    onMessage("all-resources-".concat(prefix), function (payload) {
      setResources(payload);
    });
    onMessage("all-attributes-".concat(prefix), function (payload) {
      setAttributesLists(payload);
    });
    onMessage("all-property-effects-".concat(prefix), function (payload) {
      setAttributesLists(payload);
    });
    onMessage("all-action-tags-".concat(prefix), function (payload) {
      setTags(payload);
    });
    onMessage("all-furniture-tags-".concat(prefix), function (payload) {
      setTags(payload);
    });
    onMessage("all-accessory-tags-".concat(prefix), function (payload) {
      setTags(payload);
    });
  }, [prefix]);

  // Add a new, empty rule
  var addRule = function addRule() {
    setRules(function (prev) {
      return [].concat(_toConsumableArray(prev), [{
        type: '',
        object: ''
      }]);
    });
  };

  // Update an existing rule
  var updateRule = function updateRule(index, newRule) {
    setRules(function (prev) {
      return prev.map(function (rule, i) {
        return i === index ? newRule : rule;
      });
    });
  };

  // Remove a rule
  var removeRule = function removeRule(index) {
    setRules(function (prev) {
      return prev.filter(function (_, i) {
        return i !== index;
      });
    });
  };
  var updateName = function updateName(name) {
    setFilterName(name);
  };

  // Handle save
  var handleSave = function handleSave() {
    onSave({
      id: id,
      name: filterName,
      rules: rules,
      condition: condition
    });
  };

  // Handle cancel
  var handleCancel = function handleCancel() {
    onCancel();
  };

  // Prepare options for the rule type
  var ruleTypeOptions = [{
    value: 'tag',
    label: 'Has tag'
  }, {
    value: 'attribute',
    label: category === 'action' ? 'Gives attribute' : 'Gives Effect'
  }, {
    value: 'resource',
    label: 'Gives resource'
  }];

  // Prepare react-select options for tags, attributes, resources
  var tagOptions = Array.isArray(tags) ? tags.filter(function (tag) {
    return tag.isUnlocked;
  }).map(function (tag) {
    return {
      value: tag.name,
      label: tag.id
    };
  }) : [];
  var attributeOptions = Array.isArray(attributesLists) ? attributesLists.filter(function (attr) {
    return attr.isUnlocked;
  }).map(function (attr) {
    return {
      value: attr.id,
      label: attr.name
    };
  }) : [];
  var resourceOptions = Array.isArray(resources) ? resources.filter(function (res) {
    return res.isUnlocked;
  }).map(function (res) {
    return {
      value: res.id,
      label: res.name
    };
  }) : [];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'custom-filter-box'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Custom Filter (category: ", category, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'block name-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Filter Name", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: 'text',
    value: filterName,
    onChange: function onChange(e) {
      return setFilterName(e.target.value);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Rules:"), rules.map(function (rule, index) {
    // Current type option
    var selectedType = ruleTypeOptions.find(function (opt) {
      return opt.value === rule.type;
    }) || null;

    // Depending on rule.type, choose which set of options to use
    var objectOptions = [];
    if (rule.type === 'tag') {
      objectOptions = tagOptions;
    } else if (rule.type === 'attribute') {
      objectOptions = attributeOptions;
    } else if (rule.type === 'resource') {
      objectOptions = resourceOptions;
    }

    // Current object option
    var selectedObject = objectOptions.find(function (opt) {
      return opt.value === rule.object;
    }) || null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: index,
      style: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '8px'
      },
      className: 'flex-container filter-row'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        width: '120px',
        marginRight: '8px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: selectedType,
      styles: customStyles,
      onChange: function onChange(selected) {
        return updateRule(index, _objectSpread(_objectSpread({}, rule), {}, {
          type: selected.value,
          object: '' // reset object if type changes
        }));
      },
      options: ruleTypeOptions,
      placeholder: "Select rule type"
    })), rule.type !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        width: '150px',
        marginRight: '8px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: selectedObject,
      styles: customStyles,
      onChange: function onChange(selected) {
        return updateRule(index, _objectSpread(_objectSpread({}, rule), {}, {
          object: selected.value
        }));
      },
      options: objectOptions,
      placeholder: "Select object"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return removeRule(index);
      }
    }, "Remove"));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: addRule
  }, "Add Rule")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: '16px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Condition:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    value: condition,
    onChange: function onChange(e) {
      return setCondition(e.target.value);
    },
    rows: 2,
    style: {
      width: '100%',
      marginTop: '8px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: '16px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleSave,
    style: {
      marginRight: '8px'
    }
  }, "Save"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleCancel
  }, "Cancel")));
}, function (prevProps, props) {
  if (prevProps.category !== props.category) return false;
  if (prevProps.id !== props.id) return false;
  return true;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomFilter);

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/shared/custom-filter.jsx?
