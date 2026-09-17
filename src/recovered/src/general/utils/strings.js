__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatInt: () => (/* binding */ formatInt),
/* harmony export */   formatValue: () => (/* binding */ formatValue),
/* harmony export */   secondsToString: () => (/* binding */ secondsToString)
/* harmony export */ });
var formatValue = function formatValue(number) {
  var _window;
  var numDigits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var withSign = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (number == null) {
    number = 0;
  }
  if (((_window = window) === null || _window === void 0 ? void 0 : _window.notation) === 'scientific') {
    return Math.abs(number) > 999 ? number.toExponential(numDigits) : number.toFixed(numDigits);
  }
  var suffixes = ['', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc', 'UDc', 'DDc', 'TDc', 'QaDc', 'QiDc', 'SxDc', 'SpDc'];
  var sign = '';
  if (withSign && number > 0) {
    sign = '+';
  }
  if (number < 0) {
    sign = '-';
    number = Math.abs(number);
  }
  var suffixIndex = 0;
  while (number >= 1000 && suffixIndex < suffixes.length - 1) {
    number /= 1000;
    suffixIndex++;
  }
  return "".concat(sign).concat(number.toFixed(numDigits)).concat(suffixes[suffixIndex]);
};
var formatInt = function formatInt(number) {
  var _window2;
  var numDigits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  if (number == null) {
    number = 0;
  }
  if (((_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.notation) === 'scientific') {
    return Math.abs(Math.round(number)) > 999 ? Math.round(number).toExponential(numDigits) : Math.round(number);
  }
  var suffixes = ['', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc'];
  var sign = '';
  if (number < 0) {
    sign = '-';
    number = Math.abs(number);
  }
  number = Math.round(number);
  var suffixIndex = 0;
  while (number >= 1000 && suffixIndex < suffixes.length - 1) {
    number /= 1000;
    suffixIndex++;
  }
  if (suffixIndex === 0) {
    numDigits = 0;
  }
  return "".concat(sign).concat(number.toFixed(numDigits)).concat(suffixes[suffixIndex]);
};
function secondsToString(seconds) {
  if (seconds > 1.e+12) {
    return 'Never';
  }
  if (seconds < 0) {
    seconds = 0;
  }
  var days = Math.floor(seconds / (24 * 3600));
  seconds %= 24 * 3600;
  var hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  var minutes = Math.floor(seconds / 60);
  seconds %= 60;
  var result = "";
  if (days > 0) {
    result += "".concat(days, "d ");
  }
  result += "".concat(String(hours).padStart(2, '0'), ":");
  result += "".concat(String(minutes).padStart(2, '0'), ":");
  result += "".concat(String(Math.floor(seconds)).padStart(2, '0'));
  return result;
}

//# sourceURL=webpack://idlemancery-v2-reworked/./src/general/utils/strings.js?
