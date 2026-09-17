__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Popup: () => (/* binding */ Popup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_ui_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/ui-context */ "./src/context/ui-context.js");
/* harmony import */ var _popup_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup-component.jsx */ "./src/components/layout/popup-component.jsx");
/* harmony import */ var _mage_skills_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mage/skills.jsx */ "./src/components/mage/skills.jsx");
/* harmony import */ var _mage_unlocks_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mage/unlocks.jsx */ "./src/components/mage/unlocks.jsx");
/* harmony import */ var _mage_statistics_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mage/statistics.jsx */ "./src/components/mage/statistics.jsx");
/* harmony import */ var _shared_random_events_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/random-events.jsx */ "./src/components/shared/random-events.jsx");
/* harmony import */ var _how_to_index_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../how-to/index.jsx */ "./src/components/how-to/index.jsx");
/* harmony import */ var _mage_skill_tree_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mage/skill-tree.jsx */ "./src/components/mage/skill-tree.jsx");









var Popup = function Popup() {
  var _useAppContext = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_1__.useAppContext)(),
    activePopup = _useAppContext.activePopup,
    setActivePopup = _useAppContext.setActivePopup,
    popupMeta = _useAppContext.popupMeta,
    onClosePopupCb = _useAppContext.onClosePopupCb;
  var HOWTO_TITLES = {
    actions: {
      title: 'How actions works?'
    },
    'action-lists': {
      title: 'How action list works?'
    },
    'lists-automation': {
      title: 'Lists automation'
    },
    'map': {
      title: 'Map Exploration'
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var listener = function listener(e) {
      if (e.key === "Escape") {
        setActivePopup(null);
      }
    };
    window.addEventListener('keydown', listener);
    return function () {
      window.removeEventListener('keydown', listener);
    };
  }, []);
  if (activePopup === 'skills') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_popup_component_jsx__WEBPACK_IMPORTED_MODULE_2__.PopupComponent, {
      title: 'Skills',
      onClose: onClosePopupCb
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mage_skill_tree_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], null));
  }
  if (activePopup === 'unlocks') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_popup_component_jsx__WEBPACK_IMPORTED_MODULE_2__.PopupComponent, {
      title: 'Upcoming Unlocks Requirements',
      onClose: onClosePopupCb
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mage_unlocks_jsx__WEBPACK_IMPORTED_MODULE_4__.UnlocksList, null));
  }
  if (activePopup === 'statistics') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_popup_component_jsx__WEBPACK_IMPORTED_MODULE_2__.PopupComponent, {
      title: 'Statistics',
      onClose: onClosePopupCb
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mage_statistics_jsx__WEBPACK_IMPORTED_MODULE_5__.Statistics, null));
  }
  if (activePopup === 'event') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_popup_component_jsx__WEBPACK_IMPORTED_MODULE_2__.PopupComponent, {
      title: 'Event',
      onClose: onClosePopupCb
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_random_events_jsx__WEBPACK_IMPORTED_MODULE_6__.RandomEventPopup, null));
  }
  if (activePopup === 'howto') {
    var title = HOWTO_TITLES[popupMeta.howToScope].title;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_popup_component_jsx__WEBPACK_IMPORTED_MODULE_2__.PopupComponent, {
      title: title,
      onClose: onClosePopupCb
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_how_to_index_jsx__WEBPACK_IMPORTED_MODULE_7__.HowTo, {
      scope: popupMeta.howToScope
    }));
  }
  return null;
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/layout/popup.jsx?
