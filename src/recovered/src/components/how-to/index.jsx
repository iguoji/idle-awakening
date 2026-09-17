__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HowTo: () => (/* binding */ HowTo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions.jsx */ "./src/components/how-to/actions.jsx");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _action_lists_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action-lists.jsx */ "./src/components/how-to/action-lists.jsx");
/* harmony import */ var _lists_automations_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lists-automations.jsx */ "./src/components/how-to/lists-automations.jsx");
/* harmony import */ var _map_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map.jsx */ "./src/components/how-to/map.jsx");






var HowTo = function HowTo(_ref) {
  var scope = _ref.scope;
  var contentChunk = null;
  switch (scope) {
    case 'actions':
      contentChunk = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_actions_jsx__WEBPACK_IMPORTED_MODULE_1__.HowActionsWorking, null);
      break;
    case 'action-lists':
      contentChunk = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_action_lists_jsx__WEBPACK_IMPORTED_MODULE_3__.HowActionListsWorking, null);
      break;
    case 'lists-automation':
      contentChunk = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lists_automations_jsx__WEBPACK_IMPORTED_MODULE_4__.HowListsAutomationsWorking, null);
      break;
    case 'map':
      contentChunk = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_map_jsx__WEBPACK_IMPORTED_MODULE_5__.HowMapWorking, null);
      break;
    default:
      contentChunk = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, scope, " tutorial");
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'how-to-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default()), null, contentChunk));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/how-to/index.jsx?
