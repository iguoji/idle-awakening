__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PopupComponent: () => (/* binding */ PopupComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_ui_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/ui-context */ "./src/context/ui-context.js");


var PopupComponent = function PopupComponent(_ref) {
  var children = _ref.children,
    onClose = _ref.onClose,
    title = _ref.title;
  var _useAppContext = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_1__.useAppContext)(),
    setActivePopup = _useAppContext.setActivePopup;
  var popupRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var onClosePopup = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (onClose) {
      onClose(true);
    }
    setActivePopup(null);
  }, [onClose, setActivePopup]);
  var handleClickOutside = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    if (popupRef.current) {
      var rect = popupRef.current.getBoundingClientRect();
      var x = event.clientX;
      var y = event.clientY;
      if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
        return;
      } else {
        onClosePopup();
      }
    }
  }, [onClosePopup]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.addEventListener('mousedown', handleClickOutside);
    // Або використайте 'click' замість 'mousedown' за потреби

    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'popup-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'popup',
    ref: popupRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'popup-heading'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    onClick: onClosePopup,
    className: 'close'
  }, "X")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'popup-content'
  }, children)));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/layout/popup-component.jsx?
