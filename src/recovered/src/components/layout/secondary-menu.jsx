__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecondaryMenu: () => (/* binding */ SecondaryMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_ui_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/ui-context */ "./src/context/ui-context.js");
/* harmony import */ var _shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/tippy-wrapper.jsx */ "./src/components/shared/tippy-wrapper.jsx");



var SecondaryMenu = function SecondaryMenu() {
  var _useAppContext = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_1__.useAppContext)(),
    openedTab = _useAppContext.openedTab,
    setOpenedTab = _useAppContext.setOpenedTab;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'right-most'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: 'menu bigger'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: openedTab === 'settings' ? 'active' : ''
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_2__.TippyWrapper, {
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'hint-popup'
    }, "Settings")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: 'statistics',
    className: 'icon-content edit-icon interface-icon',
    onClick: function onClick() {
      return setOpenedTab('settings');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "icons/interface/settings.png"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_2__.TippyWrapper, {
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'hint-popup'
    }, "Join Discord")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: 'discord',
    className: 'icon-content edit-icon interface-icon'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    target: '_blank',
    href: 'https://discord.gg/TRRvKf4ZTG'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "icons/interface/discord.png"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    target: '_blank',
    href: 'https://patreon.com/user?u=83421544'
  }, "Support Me"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: openedTab === 'about' ? 'active' : '',
    onClick: function onClick() {
      return setOpenedTab('about');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "v0.1.3d"))));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/layout/secondary-menu.jsx?
