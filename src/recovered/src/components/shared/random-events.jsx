__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RandomEventPopup: () => (/* binding */ RandomEventPopup),
/* harmony export */   RandomEventSnippet: () => (/* binding */ RandomEventSnippet)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../general/client */ "./src/general/client.js");
/* harmony import */ var _context_ui_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/ui-context */ "./src/context/ui-context.js");
/* harmony import */ var _new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-notification-wrap.jsx */ "./src/components/shared/new-notification-wrap.jsx");
/* harmony import */ var _resource_cost_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resource-cost.jsx */ "./src/components/shared/resource-cost.jsx");
/* harmony import */ var _general_utils_strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../general/utils/strings */ "./src/general/utils/strings.js");
/* harmony import */ var _tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tippy-wrapper.jsx */ "./src/components/shared/tippy-wrapper.jsx");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }








var RandomEventSnippet = function RandomEventSnippet() {
  var _eventData$openedEven, _eventData$list, _eventData$list2, _eventData$list3;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useAppContext = (0,_context_ui_context__WEBPACK_IMPORTED_MODULE_3__.useAppContext)(),
    setActivePopup = _useAppContext.setActivePopup,
    setOnClosePopupCb = _useAppContext.setOnClosePopupCb;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    eventData = _useState2[0],
    setEventData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showMore = _useState4[0],
    setShowMore = _useState4[1];
  var popupRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); // Reference for the popup

  // Listen for random events data
  onMessage('random-events-data', function (event) {
    setEventData(event);
  });
  var openEvent = function openEvent(eventId) {
    setActivePopup('event');
    sendData('set-event-data-opened', {
      eventId: eventId,
      isOpened: true
    });
    setOnClosePopupCb(function () {
      return function (a) {
        if (!a) {
          throw new Error('Invalid trigger of close');
        }
        sendData('set-event-data-opened', {
          eventId: eventId,
          isOpened: false
        });
      };
    });
  };
  var buttonData = (_eventData$openedEven = eventData === null || eventData === void 0 ? void 0 : eventData.openedEventData) !== null && _eventData$openedEven !== void 0 ? _eventData$openedEven : (_eventData$list = eventData.list) === null || _eventData$list === void 0 ? void 0 : _eventData$list[0];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var interval = setInterval(function () {
      sendData('query-event-data', {});
    }, 1000);
    return function () {
      clearInterval(interval);
    };
  }, []);

  // Close popup if clicking outside of it
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handleClickOutside = function handleClickOutside(event) {
      console.log('handleClickOutside');
      if (popupRef.current && !popupRef.current.contains(event.target) && event.target.id != 'show-more-events-button') {
        setShowMore(false); // Hide the popup
      }
    };
    if (showMore) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMore]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "event-holder"
  }, buttonData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_4__.NewNotificationWrap, {
    className: "event-wrap narrow-wrapper",
    isNew: !buttonData.selectedOption
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: buttonData.selectedOption ? 'used' : 'new',
    onClick: function onClick() {
      return openEvent(buttonData.id);
    }
  }, buttonData.name)) : null, (eventData === null || eventData === void 0 || (_eventData$list2 = eventData.list) === null || _eventData$list2 === void 0 ? void 0 : _eventData$list2.length) > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "others"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "showMore",
    onClick: function onClick() {
      return setShowMore(!showMore);
    },
    id: 'show-more-events-button'
  }, !showMore ? "Show all ".concat(eventData === null || eventData === void 0 || (_eventData$list3 = eventData.list) === null || _eventData$list3 === void 0 ? void 0 : _eventData$list3.length, " events") : "Hide full events list"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: popupRef // Attach the reference to the popup
    ,
    className: "events-popup ".concat(!showMore ? 'hidden' : 'visible')
  }, eventData.list.map(function (one) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "event",
      key: one.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "event-name ".concat(one.selectedOption != null ? 'used' : 'new'),
      onClick: function onClick() {
        return openEvent(one.id);
      }
    }, one.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: 'event-time'
    }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.secondsToString)(one.expiresIn)));
  }))) : null);
};
var RandomEventPopup = function RandomEventPopup() {
  var _eventData$openedEven2;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient2 = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient2.onMessage,
    sendData = _useWorkerClient2.sendData;
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    eventData = _useState6[0],
    setEventData = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var interval = setInterval(function () {
      sendData('query-event-data', {
        prefix: 'popup'
      });
    }, 100);
    return function () {
      clearInterval(interval);
    };
  }, []);
  onMessage('random-events-data-popup', function (data) {
    // console.log('Received data', data);
    setEventData(data);
  });
  var selectOption = function selectOption(eventId, optionId) {
    sendData('select-event-option', {
      eventId: eventId,
      optionId: optionId
    });
  };
  if (!eventData.openedEventData) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'expired'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "The event have expired. But don't worry, they repeat sometimes"));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'evt'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'event-content'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, eventData.openedEventData.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, eventData.openedEventData.description), eventData.openedEventData.selectedOption ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'event-option-selected'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, eventData.openedEventData.selectedOption.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'event-effect'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, (_eventData$openedEven2 = eventData.openedEventData.selectedOption.triggeredEffect) === null || _eventData$openedEven2 === void 0 ? void 0 : _eventData$openedEven2.description))) : null), !eventData.openedEventData.selectedOption ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'choices'
  }, eventData.openedEventData.options.map(function (option) {
    var _option$affordable;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'option-wrap'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_7__.TippyWrapper, {
      content: option.revealedEffects && option.revealedEffects.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'hint-popup'
      }, option.revealedEffects.map(function (eff) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_6__.formatInt)(100 * eff.probability), "% - ", eff.description);
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'hint-popup'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Some choices can provide different outcomes. Try it to reveal potential bonuses and risks"))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "option-button ".concat(option.affordable.isAffordable ? 'affordable' : 'unavailable'),
      onClick: function onClick() {
        return selectOption(eventData.openedEventData.id, option.id);
      }
    }, option.name)), (_option$affordable = option.affordable) !== null && _option$affordable !== void 0 && _option$affordable.affordabilities ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'consumptions'
    }, Object.values(option.affordable.affordabilities).map(function (affordabilities) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_resource_cost_jsx__WEBPACK_IMPORTED_MODULE_5__.ResourceCost, {
        affordabilities: affordabilities
      });
    })) : null);
  })) : null);
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/shared/random-events.jsx?
