__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../general/client */ "./src/general/client.js");
/* harmony import */ var _tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tippy-wrapper.jsx */ "./src/components/shared/tippy-wrapper.jsx");
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
    var _state$selectProps;
    return _objectSpread(_objectSpread({}, provided), {}, {
      minHeight: '24px',
      // Зменшуємо мінімальну висоту
      height: '24px',
      padding: '0',
      // Видаляємо паддінги
      borderRadius: '1px',
      // Можливо, зменшимо border-radius
      fontSize: '13px',
      width: (_state$selectProps = state.selectProps) !== null && _state$selectProps !== void 0 && _state$selectProps.isMulti ? '280px' : '200px'
    });
  },
  valueContainer: function valueContainer(provided, state) {
    return _objectSpread(_objectSpread({}, provided), {}, {
      height: '24px',
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
  },
  multiValue: function multiValue(provided, state) {
    return _objectSpread(_objectSpread({}, provided), {}, {
      background: '#112',
      padding: '0px',
      borderRadius: '2px',
      marginTop: '-1px'
    });
  },
  multiValueLabel: function multiValueLabel(provided, state) {
    return _objectSpread(_objectSpread({}, provided), {}, {
      color: '#fff'
    });
  }
};
var mapRuleCond = function mapRuleCond(cond) {
  if (cond === 'less') {
    return '<';
  }
  if (cond === 'less_or_eq') {
    return '<=';
  }
  if (cond === 'eq') {
    return '=';
  }
  if (cond === 'n_eq') {
    return '!=';
  }
  if (cond === 'grt_or_eq') {
    return '>=';
  }
  if (cond === 'grt') {
    return '>';
  }
  if (cond === 'true') {
    return 'True';
  }
  if (cond === 'false') {
    return 'False';
  }
  return cond;
};
var mapCompareType = {
  'resource_amount': {
    label: 'Resource Amount',
    subject: 'resource_id',
    availableConditions: ['less', 'less_or_eq', 'eq', 'grt_or_eq', 'grt'],
    availableValueTypes: ['exact', 'percentage']
  },
  'resource_balance': {
    label: 'Resource Rate',
    subject: 'resource_id',
    availableConditions: ['less', 'less_or_eq', 'eq', 'grt_or_eq', 'grt'],
    availableValueTypes: ['exact', 'percentage']
  },
  'attribute_value': {
    label: 'Attribute Value',
    subject: 'attribute_id',
    availableConditions: ['less', 'less_or_eq', 'eq', 'grt_or_eq', 'grt'],
    availableValueTypes: ['exact']
  },
  'running_action': {
    label: 'Running Action',
    subject: 'action_id',
    availableConditions: ['true', 'false'],
    isHideValue: true
  },
  'running_action_list': {
    label: 'Running List',
    subject: 'action_list_id',
    availableConditions: ['true', 'false'],
    isHideValue: true
  },
  'running_action_tag': {
    label: 'Running Action With Tag',
    subject: 'tag',
    availableConditions: ['true', 'false'],
    isHideValue: true,
    allowMultiSubject: true
  },
  'action_level': {
    label: 'Action Level',
    subject: 'action_id',
    availableConditions: ['less', 'less_or_eq', 'eq', 'grt_or_eq', 'grt'],
    availableValueTypes: ['exact']
  },
  'spell_running': {
    label: 'Spell Running',
    subject: 'spell_id',
    availableConditions: ['true', 'false'],
    isHideValue: true,
    unlockCondition: function unlockCondition(unlocks) {
      return unlocks.spells;
    }
  },
  'crafting_list_running': {
    label: 'Crafting List',
    subject: 'crafting_list_id',
    availableConditions: ['true', 'false'],
    isHideValue: true,
    unlockCondition: function unlockCondition(unlocks) {
      return unlocks.crafting;
    }
  }
};
var RulesList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function (_ref) {
  var _ref$prefix = _ref.prefix,
    prefix = _ref$prefix === void 0 ? 'default' : _ref$prefix,
    rules = _ref.rules,
    isEditing = _ref.isEditing,
    setRuleValue = _ref.setRuleValue,
    deleteRule = _ref.deleteRule,
    pattern = _ref.pattern,
    setPattern = _ref.setPattern,
    isAutoCheck = _ref.isAutoCheck;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_2__["default"]);
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_3__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    resources = _useState2[0],
    setResources = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    actions = _useState4[0],
    setActions = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    attributes = _useState6[0],
    setAttributes = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    actionsLists = _useState8[0],
    setActionsLists = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    tags = _useState10[0],
    setTags = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    spells = _useState12[0],
    setSpells = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    craftingLists = _useState14[0],
    setCraftingLists = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    rulesMatched = _useState16[0],
    setRulesMatched = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState18 = _slicedToArray(_useState17, 2),
    unlocks = _useState18[0],
    setUnlocks = _useState18[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    sendData('query-all-resources', {
      prefix: prefix
    });
    sendData('query-all-actions', {
      prefix: prefix
    });
    sendData('query-all-attributes', {
      prefix: prefix
    });
    sendData('query-all-action-tags', {
      prefix: prefix
    });
    sendData('query-actions-lists', {
      prefix: prefix
    });
    sendData('query-all-spells', {
      prefix: prefix
    });
    sendData('query-all-crafting-lists', {
      prefix: prefix
    });
    sendData('query-unlocks', {
      prefix: "automation-".concat(prefix)
    });
    console.log('Sent queries...');
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isAutoCheck) {
      var interval = setInterval(function () {
        sendData('check-rule-conditions-matched', {
          prefix: prefix,
          rules: rules,
          pattern: pattern
        });
      }, 1000);
      return function () {
        clearInterval(interval);
      };
    }
  }, [isAutoCheck, rules, pattern, prefix]);
  onMessage("unlocks-automation-".concat(prefix), function (payload) {
    console.log('receivedUnlocks', payload);
    setUnlocks(payload);
  });
  onMessage("rule-conditions-matched-".concat(prefix), function (payload) {
    // console.log('set-matched', payload);
    setRulesMatched(payload);
  });
  onMessage("all-resources-".concat(prefix), function (payload) {
    setResources(payload);
    // console.log('RecRes: ', payload);
  });
  onMessage("all-attributes-".concat(prefix), function (payload) {
    setAttributes(payload);
    console.log('AllAttrs: ', payload);
  });
  onMessage("all-actions-".concat(prefix), function (payload) {
    setActions(payload);
  });
  onMessage("actions-lists-".concat(prefix), function (payload) {
    setActionsLists(payload);
  });
  onMessage("all-action-tags-".concat(prefix), function (payload) {
    setTags(payload);
  });
  onMessage("all-spells-".concat(prefix), function (payload) {
    setSpells(payload);
  });
  onMessage("all-crafting-lists-".concat(prefix), function (payload) {
    setCraftingLists(payload);
  });
  var checkViolation = function checkViolation(index, compare_type) {
    var rule = rules[index];
    var sett = mapCompareType[compare_type];
    /*if(!rule[sett.subject]) {
        setRuleValue(index, 'action_id', undefined);
        setRuleValue(index, 'resource_id', undefined);
        setRuleValue(index, 'tag', undefined);
    }*/
    if (sett.availableConditions && !sett.availableConditions.includes(rule.condition)) {
      setRuleValue(index, 'condition', sett.availableConditions[0]);
    }
    if (sett.availableValueTypes && !sett.availableValueTypes.includes(rule.value_type)) {
      setRuleValue(index, 'value_type', sett.availableValueTypes[0]);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "rules ".concat(isAutoCheck ? 'autocheck' : '', " ").concat(rulesMatched !== null && rulesMatched !== void 0 && rulesMatched.result ? 'matched' : 'unmatched')
  }, rules.map(function (rule, index) {
    var _rulesMatched$ruleRes, _mapCompareType$rule$, _mapCompareType$rule$2, _mapCompareType$rule$4, _subjectValue;
    var compareTypeOptions = Object.keys(mapCompareType).filter(function (one) {
      return !one.unlockCondition || one.unlockCondition(unlocks);
    }).map(function (key) {
      return {
        value: key,
        label: mapCompareType[key].label
      };
    });
    var selectedCompareType = mapCompareType[rule.compare_type];
    var subjectOptions = [];
    var subjectValue = null;
    var subjectName = '';
    if (selectedCompareType) {
      var subject = selectedCompareType.subject;
      subjectName = subject;
      var subjectArray = [];
      if (subject === 'resource_id') {
        subjectArray = resources;
      } else if (subject === 'action_id') {
        subjectArray = actions;
      } else if (subject === 'attribute_id') {
        subjectArray = attributes;
      } else if (subject === 'tag') {
        subjectArray = tags;
      } else if (subject === 'action_list_id') {
        subjectArray = actionsLists;
      } else if (subject === 'spell_id') {
        subjectArray = spells;
      } else if (subject === 'crafting_list_id') {
        subjectArray = craftingLists;
      }
      subjectOptions = subjectArray.filter(function (item) {
        var _rule$subjectName;
        return item.isUnlocked || item.id === rule[subjectName] || item.id === ((_rule$subjectName = rule[subjectName]) === null || _rule$subjectName === void 0 ? void 0 : _rule$subjectName.toString());
      }).map(function (item) {
        return {
          value: item.id,
          label: item.name
        };
      });
      if (mapCompareType[rule.compare_type].allowMultiSubject) {
        subjectValue = subjectOptions.filter(function (option) {
          return (rule[subjectName] || []).includes(option.value);
        });
      } else {
        var _subjectOptions;
        subjectValue = subjectOptions.find(function (option) {
          var _rule$subjectName2;
          return option.value === rule[subjectName] || option.value === ((_rule$subjectName2 = rule[subjectName]) === null || _rule$subjectName2 === void 0 ? void 0 : _rule$subjectName2.toString());
        });
        if (!subjectValue && (_subjectOptions = subjectOptions) !== null && _subjectOptions !== void 0 && _subjectOptions.length) {
          subjectValue = _objectSpread({}, subjectOptions[0]);
          if (subjectValue) {
            console.log('Setting: ', mapCompareType[rule.compare_type].subject, subjectValue, subjectOptions);
            setRuleValue(index, mapCompareType[rule.compare_type].subject, subjectValue.value);
          }
        }
      }
    }
    var conditionOptions = selectedCompareType ? selectedCompareType.availableConditions.map(function (cond) {
      return {
        value: cond,
        label: mapRuleCond(cond)
      };
    }) : [];
    var selectedCondition = rule.condition;
    if (!conditionOptions.find(function (c) {
      return c.value === selectedCondition;
    })) {
      var _conditionOptions$;
      selectedCondition = (_conditionOptions$ = conditionOptions[0]) === null || _conditionOptions$ === void 0 ? void 0 : _conditionOptions$.value;
      setRuleValue(index, 'condition', selectedCondition);
    }
    var valueTypeOptions = selectedCompareType && selectedCompareType.availableValueTypes ? selectedCompareType.availableValueTypes.map(function (valType) {
      return {
        value: valType,
        label: valType.charAt(0).toUpperCase() + valType.slice(1)
      };
    }) : [];
    if (selectedCompareType && selectedCompareType.availableValueTypes) {
      if (!selectedCompareType.availableValueTypes.includes(rule.value_type)) {
        setRuleValue(index, 'value_type', selectedCompareType.availableValueTypes[0]);
      }
    }
    var isHideValue = selectedCompareType ? selectedCompareType.isHideValue : false;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "rule row add-row ".concat(rulesMatched !== null && rulesMatched !== void 0 && (_rulesMatched$ruleRes = rulesMatched.ruleResults) !== null && _rulesMatched$ruleRes !== void 0 && _rulesMatched$ruleRes[index] ? 'matched' : 'unmatched'),
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "col compare-type"
    }, isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: "compare_type",
      options: compareTypeOptions,
      value: compareTypeOptions.find(function (option) {
        return option.value === rule.compare_type;
      }),
      onChange: function onChange(selectedOption) {
        setRuleValue(index, 'compare_type', selectedOption.value);
      },
      className: "react-select-container",
      classNamePrefix: "react-select",
      styles: customStyles
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, ((_mapCompareType$rule$ = mapCompareType[rule.compare_type]) === null || _mapCompareType$rule$ === void 0 ? void 0 : _mapCompareType$rule$.label) || 'Invalid')), selectedCompareType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "col subject"
    }, isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: subjectName,
      options: subjectOptions,
      value: subjectValue,
      isMulti: (_mapCompareType$rule$2 = mapCompareType[rule.compare_type]) === null || _mapCompareType$rule$2 === void 0 ? void 0 : _mapCompareType$rule$2.allowMultiSubject,
      onChange: function onChange(selectedOption) {
        var _mapCompareType$rule$3;
        setRuleValue(index, subjectName, (_mapCompareType$rule$3 = mapCompareType[rule.compare_type]) !== null && _mapCompareType$rule$3 !== void 0 && _mapCompareType$rule$3.allowMultiSubject ? selectedOption.map(function (option) {
          return option.value;
        }) : selectedOption.value);
      },
      className: "react-select-container ".concat((_mapCompareType$rule$4 = mapCompareType[rule.compare_type]) !== null && _mapCompareType$rule$4 !== void 0 && _mapCompareType$rule$4.allowMultiSubject ? 'multi' : ''),
      classNamePrefix: "react-select",
      styles: customStyles
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, Array.isArray(subjectValue) ? subjectValue.map(function (one) {
      return "".concat(one === null || one === void 0 ? void 0 : one.label);
    }).join(',') : ((_subjectValue = subjectValue) === null || _subjectValue === void 0 ? void 0 : _subjectValue.label) || 'Invalid')), selectedCompareType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "col condition"
    }, isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
      name: "condition",
      onChange: function onChange(e) {
        return setRuleValue(index, 'condition', e.target.value);
      },
      value: selectedCondition
    }, conditionOptions.map(function (option) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        key: option.value,
        value: option.value
      }, option.label);
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, mapRuleCond(rule.condition))), selectedCompareType && !isHideValue && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "col value_type"
    }, isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
      name: "value_type",
      onChange: function onChange(e) {
        return setRuleValue(index, 'value_type', e.target.value);
      },
      value: rule.value_type
    }, valueTypeOptions.map(function (option) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        key: option.value,
        value: option.value
      }, option.label);
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, rule.value_type)), selectedCompareType && !isHideValue && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "col value"
    }, isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "number",
      onChange: function onChange(e) {
        return setRuleValue(index, 'value', e.target.value);
      },
      value: rule.value,
      max: rule.value_type === 'percentage' ? 100 : undefined,
      min: "0",
      step: rule.value_type === 'percentage' ? 5 : 1
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, rule.value)), isEditing && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "col delete-rule"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "close",
      onClick: function onClick() {
        return deleteRule(index);
      }
    }, "X")));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_4__.TippyWrapper, {
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'hint-popup'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "You can set more complex matching conditions, like (1 AND 2) OR 3, where numbers are numbers of your rules"))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'pattern-wrap flex-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'pattern-label'
  }, "Rules Condition: "), isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    value: pattern,
    placeholder: Array.from({
      length: rules.length
    }).map(function (a, i) {
      return i + 1;
    }).join(' AND '),
    onChange: function onChange(e) {
      var _e$target$value;
      return setPattern((_e$target$value = e.target.value) === null || _e$target$value === void 0 ? void 0 : _e$target$value.toUpperCase());
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, pattern || Array.from({
    length: rules.length
  }).map(function (a, i) {
    return i + 1;
  }).join(' AND ')))));
}, function (prev, curr) {
  if (!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual)(prev.rules, curr.rules)) {
    return false;
  }
  if (prev.pattern !== curr.pattern) {
    return false;
  }
  if (prev.isEditing !== curr.isEditing) return false;
  if (prev.isAutoCheck !== curr.isAutoCheck) return false;
  return true;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RulesList);

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/shared/rules-list.jsx?
