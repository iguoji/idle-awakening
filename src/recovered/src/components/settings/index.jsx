__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Settings: () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _save_settings_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save-settings.jsx */ "./src/components/settings/save-settings.jsx");
/* harmony import */ var _automation_settings_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./automation-settings.jsx */ "./src/components/settings/automation-settings.jsx");
/* harmony import */ var _interface_settings_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interface-settings.jsx */ "./src/components/settings/interface-settings.jsx");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var Settings = function Settings() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('save'),
    _useState2 = _slicedToArray(_useState, 2),
    selectedTab = _useState2[0],
    setSelectedTab = _useState2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'items-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'items ingame-box'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'menu-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: 'menu'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "".concat(selectedTab === 'save' ? 'active' : ''),
    onClick: function onClick() {
      setSelectedTab('save');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Save")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "".concat(selectedTab === 'interface' ? 'active' : ''),
    onClick: function onClick() {
      setSelectedTab('interface');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Interface")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "".concat(selectedTab === 'automations' ? 'active' : ''),
    onClick: function onClick() {
      setSelectedTab('automations');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Automation")))), selectedTab === 'save' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_save_settings_jsx__WEBPACK_IMPORTED_MODULE_1__.SaveSettings, null) : null, selectedTab === 'interface' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_interface_settings_jsx__WEBPACK_IMPORTED_MODULE_3__.InterfaceSettings, null) : null, selectedTab === 'automations' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_automation_settings_jsx__WEBPACK_IMPORTED_MODULE_2__.AutomationsSettings, null) : null));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/settings/index.jsx?
