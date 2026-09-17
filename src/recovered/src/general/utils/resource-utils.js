__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mapEffect: () => (/* binding */ mapEffect)
/* harmony export */ });
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./strings */ "./src/general/utils/strings.js");

var mapEffect = function mapEffect(effect) {
  var rVal = effect.isPercentage ? (effect.value || 0) * 100 : effect.value || 0;
  var value = (0,_strings__WEBPACK_IMPORTED_MODULE_0__.formatValue)(rVal, 3);
  if (effect.isPercentage) {
    value += '%';
  }
  var title = effect.name;
  var direction = 1;
  if (effect.scope === 'multiplier' || effect.scope === 'capMult') {
    value = "X".concat(value);
  } else if (effect.scope === 'consumption') {
    value = "-".concat(value);
    direction = -1;
  } else {
    if (effect.value > 0 && !effect.isPercentage) {
      value = "+".concat(value);
    } else {
      value = "".concat(value);
    }
  }
  if (effect.scope === 'rawCap' || effect.scope === 'capMult') {
    title = "".concat(title, " cap.");
  }
  return {
    title: title,
    value: value,
    type: effect.type,
    id: effect.id,
    direction: direction,
    originalValue: effect.value,
    balance: effect.balance
  };
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/general/utils/resource-utils.js?
