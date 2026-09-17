__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFlashOnLevelUp: () => (/* binding */ useFlashOnLevelUp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useFlashOnLevelUp = function useFlashOnLevelUp(isLeveled, onFlash, elementRef) {
  var prevIsLeveledRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isLeveled && !prevIsLeveledRef.current) {
      var _elementRef$current;
      // isLeveled змінився з false на true
      var cardElement = ((_elementRef$current = elementRef.current) === null || _elementRef$current === void 0 ? void 0 : _elementRef$current.querySelector('.flashable')) || elementRef.current;
      if (cardElement) {
        var rect = cardElement.getBoundingClientRect();
        onFlash({
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height
        });
      }
    }
    // Оновлюємо попереднє значення isLeveled
    prevIsLeveledRef.current = isLeveled;
  }, [isLeveled, onFlash, elementRef]);
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/general/hooks/flash.js?
