__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Content: () => (/* binding */ Content),
/* harmony export */   GetContent: () => (/* binding */ GetContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sidebar_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.jsx */ "./src/components/layout/sidebar.jsx");
/* harmony import */ var _popup_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup.jsx */ "./src/components/layout/popup.jsx");
/* harmony import */ var _context_ui_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/ui-context */ "./src/context/ui-context.js");
/* harmony import */ var _actions_actions_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/actions.jsx */ "./src/components/actions/actions.jsx");
/* harmony import */ var _shop_shop_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shop/shop.jsx */ "./src/components/shop/shop.jsx");
/* harmony import */ var _inventory_inventory_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../inventory/inventory.jsx */ "./src/components/inventory/inventory.jsx");
/* harmony import */ var _property_index_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../property/index.jsx */ "./src/components/property/index.jsx");
/* harmony import */ var _spellbook_spellbook_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../spellbook/spellbook.jsx */ "./src/components/spellbook/spellbook.jsx");
/* harmony import */ var _settings_index_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../settings/index.jsx */ "./src/components/settings/index.jsx");
/* harmony import */ var _about_index_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../about/index.jsx */ "./src/components/about/index.jsx");
/* harmony import */ var _workshop_index_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../workshop/index.jsx */ "./src/components/workshop/index.jsx");
/* harmony import */ var _social_index_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../social/index.jsx */ "./src/components/social/index.jsx");
/* harmony import */ var _world_index_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../world/index.jsx */ "./src/components/world/index.jsx");
/* harmony import */ var _main_menu_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main-menu.jsx */ "./src/components/layout/main-menu.jsx");
/* harmony import */ var _secondary_menu_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./secondary-menu.jsx */ "./src/components/layout/secondary-menu.jsx");
















var Content = function Content() {
  var _useAppContext = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_3__.useAppContext)('actions'),
    openedTab = _useAppContext.openedTab,
    setOpenedTab = _useAppContext.setOpenedTab;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'content-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sidebar_jsx__WEBPACK_IMPORTED_MODULE_1__.Sidebar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'content'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'header'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_main_menu_jsx__WEBPACK_IMPORTED_MODULE_14__.MainMenu, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_secondary_menu_jsx__WEBPACK_IMPORTED_MODULE_15__.SecondaryMenu, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GetContent, {
    tab: openedTab
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_popup_jsx__WEBPACK_IMPORTED_MODULE_2__.Popup, null)));
};
var GetContent = function GetContent(_ref) {
  var tab = _ref.tab;
  if (tab === 'actions') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_actions_actions_jsx__WEBPACK_IMPORTED_MODULE_4__.Actions, null);
  }
  if (tab === 'shop') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shop_shop_jsx__WEBPACK_IMPORTED_MODULE_5__.Shop, null);
  }
  if (tab === 'inventory') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_inventory_inventory_jsx__WEBPACK_IMPORTED_MODULE_6__.Inventory, null);
  }
  if (tab === 'world') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_world_index_jsx__WEBPACK_IMPORTED_MODULE_13__.World, null);
  }
  if (tab === 'property') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_property_index_jsx__WEBPACK_IMPORTED_MODULE_7__.Property, null);
  }
  if (tab === 'workshop') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_workshop_index_jsx__WEBPACK_IMPORTED_MODULE_11__.Workshop, null);
  }
  if (tab === 'spellbook') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_spellbook_spellbook_jsx__WEBPACK_IMPORTED_MODULE_8__.Spellbook, null);
  }
  if (tab === 'social') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_social_index_jsx__WEBPACK_IMPORTED_MODULE_12__.Social, null);
  }
  if (tab === 'settings') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_settings_index_jsx__WEBPACK_IMPORTED_MODULE_9__.Settings, null);
  }
  if (tab === 'about') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_about_index_jsx__WEBPACK_IMPORTED_MODULE_10__.About, null);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Unknown tab");
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/layout/content.jsx?
