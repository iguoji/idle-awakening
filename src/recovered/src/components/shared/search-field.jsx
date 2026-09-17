__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchField: () => (/* binding */ SearchField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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

var SearchField = function SearchField(_ref) {
  var value = _ref.value,
    onSetValue = _ref.onSetValue,
    scopes = _ref.scopes,
    placeholder = _ref.placeholder;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value === null || value === void 0 ? void 0 : value.search),
    _useState2 = _slicedToArray(_useState, 2),
    search = _useState2[0],
    setSearch = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedScopes = _useState4[0],
    setSelectedScopes = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    isScopesOpened = _useState6[0],
    setScopesOpened = _useState6[1];
  var popupRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!selectedScopes && value.selectedScopes) {
      setSelectedScopes(value.selectedScopes);
    }
  }, [value]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // skip set data c
    if (!Array.isArray(selectedScopes)) return;
    onSetValue({
      search: search,
      selectedScopes: selectedScopes
    });
  }, [search, selectedScopes]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (search) {
      setScopesOpened(true);
    } else {
      setScopesOpened(false);
    }
  }, [search]);
  var onToggleScope = function onToggleScope(id) {
    console.log('Scopes: ', scopes, selectedScopes);
    if (scopes.map(function (s) {
      return s.id;
    }).includes(id)) {
      var newScopes = _toConsumableArray(selectedScopes);
      if (!newScopes.includes(id)) {
        newScopes.push(id);
      } else {
        newScopes.splice(newScopes.indexOf(id), 1);
      }
      setSelectedScopes(newScopes);
    }
  };
  var onChangeSearch = function onChangeSearch(e) {
    setSearch(e.target.value.toLowerCase());
  };
  var handleClickOutside = function handleClickOutside(event) {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setScopesOpened(false);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "search-rel-wrap",
    ref: popupRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'search-input-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: placeholder,
    value: search,
    onChange: onChangeSearch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'clear',
    onClick: function onClick() {
      setSearch('');
    }
  }, "X")), isScopesOpened && scopes !== null && scopes !== void 0 && scopes.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "scopes-popup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "title"
  }, "Search by: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "chips-container"
  }, scopes.map(function (scope) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: scope.id,
      className: "scope-chips ".concat(selectedScopes && selectedScopes.includes(scope.id) ? "selected" : ""),
      onClick: function onClick() {
        return onToggleScope(scope.id);
      }
    }, scope.label);
  }))) : null);
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/shared/search-field.jsx?
