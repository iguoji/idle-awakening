__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaveSettings: () => (/* binding */ SaveSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../general/client */ "./src/general/client.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



function fromBase64Unicode(str) {
  return decodeURIComponent(escape(atob(str)));
}
var SaveSettings = function SaveSettings() {
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    saveString = _useState2[0],
    setSaveString = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    importString = _useState4[0],
    setImportString = _useState4[1];
  var generateSaveText = function generateSaveText() {
    sendData("get-save-string", {
      type: "text"
    });
  };
  var generateSaveFile = function generateSaveFile() {
    sendData("get-save-string", {
      type: "file"
    });
  };
  var setImportText = function setImportText(value) {
    setImportString(JSON.parse(value));
  };
  var importSaveText = function importSaveText() {
    var parsed;
    try {
      // Спроба розкодувати з base64
      var decoded = fromBase64Unicode(importString);
      parsed = JSON.parse(decoded);
      console.log("Decoded from base64");
    } catch (err) {
      try {
        // Якщо не вдалось, пробуємо старий формат
        parsed = JSON.parse(importString);
        console.log("Used plain JSON");
      } catch (err2) {
        console.error("Invalid save text format");
        return;
      }
    }
    sendData("load-game", parsed);
  };
  var importSaveFile = function importSaveFile(event) {
    var file = event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onload = function (e) {
        var importedData = e.target.result;
        console.log("IMPORTING: ", importedData);
        var parsed;
        try {
          // Спроба розкодувати з base64
          var decoded = fromBase64Unicode(importedData);
          parsed = JSON.parse(decoded);
          console.log("Decoded from base64");
        } catch (err) {
          try {
            // Якщо не вдалось, пробуємо старий формат
            parsed = JSON.parse(importedData);
            console.log("Used plain JSON");
          } catch (err2) {
            console.error("Invalid save file format");
            return;
          }
        }
        sendData("load-game", parsed);
      };
      reader.readAsText(file);
    }
  };
  onMessage("saved-string", function (_ref) {
    var type = _ref.type,
      string = _ref.string;
    setSaveString(string);
    if (type === "file") {
      var blob = new Blob([string], {
        type: "text/plain;charset=utf-8"
      });
      var url = URL.createObjectURL(blob);
      var link = document.createElement("a");
      link.href = url;
      var date = new Date();
      var year = date.getFullYear();
      var month = String(date.getMonth() + 1).padStart(2, '0'); // Місяці нумеруються з 0
      var day = String(date.getDate()).padStart(2, '0');
      var hours = String(date.getHours()).padStart(2, '0');
      var minutes = String(date.getMinutes()).padStart(2, '0');
      var seconds = String(date.getSeconds()).padStart(2, '0');
      var dateString = "".concat(year, "-").concat(month, "-").concat(day, "_").concat(hours, "-").concat(minutes, "-").concat(seconds);
      link.download = "idle_awakening_".concat(dateString, ".txt");

      // Append to the document to initiate the download in all browsers
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  });
  var resetGame = function resetGame() {
    if (confirm('你确定要重置游戏吗？它会抹掉你所有的进度！')) {
      sendData('reset-game', {});
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "save-settings-wrap inner-settings-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row flex-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Export:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: generateSaveText
  }, "Export as text"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: generateSaveFile
  }, "Export as file")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    className: "text-input",
    value: saveString,
    readOnly: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row flex-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Import:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: importSaveText
  }, "Import text"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "file-upload",
    className: "custom-file-upload"
  }, "Import file"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    id: "file-upload",
    type: "file",
    accept: ".txt",
    onChange: importSaveFile,
    style: {
      display: "none"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    className: "text-input",
    onChange: function onChange(e) {
      return setImportText(e.target.value);
    },
    value: importString
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row flex-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: resetGame
  }, "Hard Reset Game")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'col'
  })));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/settings/save-settings.jsx?
