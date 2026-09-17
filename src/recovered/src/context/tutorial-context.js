__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TutorialProvider: () => (/* binding */ TutorialProvider),
/* harmony export */   useTutorial: () => (/* binding */ useTutorial)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_joyride__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-joyride */ "./node_modules/react-joyride/dist/index.mjs");
/* harmony import */ var _worker_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general/client */ "./src/general/client.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var TutorialContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
function MyTooltip(_ref) {
  var step = _ref.step,
    closeProps = _ref.closeProps,
    primaryProps = _ref.primaryProps;
  var handleSkip = function handleSkip(e) {
    // console.log('Skip button clicked');

    if (closeProps.onClick) {
      if (confirm('你确定要跳过教程吗？如果您这样做，您将无法重新启动它。')) {
        closeProps.onClick(e);
      }
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'hint-popup tutorial-popup'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'step-content'
  }, step.content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'buttons'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'left'
  }, !step.actionRequired ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", primaryProps, "Next") : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleSkip
  }, "Skip"))));
}
function TutorialProvider(_ref2) {
  var children = _ref2.children;
  // Стан управління Joyride
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    stepIndex = _useState2[0],
    setStepIndex = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    run = _useState4[0],
    setRun = _useState4[1];
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;

  // Описуємо всі кроки “туру”
  var steps = [{
    target: '#tutorial-resources',
    content: 'Here you can see your resources. Resources are used in many activities',
    disableBeacon: true,
    disableOverlayClose: true,
    placement: 'bottom'
  }, {
    target: '#tutorial-attr-tab',
    content: 'Click here to see your attributes',
    disableBeacon: true,
    disableOverlayClose: true,
    spotlightClicks: true,
    actionRequired: true
  }, {
    target: '#tutorial-attributes',
    content: 'Attributes are your primary character stats. Hover over specific attribute to see what it does',
    disableBeacon: true,
    spotlightClicks: true,
    disableOverlayClose: true,
    placement: 'bottom',
    offset: 120,
    floaterProps: {
      // Найнадійніший спосіб задати зсув у Popper v2 – через modifiers:
      modifiers: [{
        name: 'offset',
        options: {
          offset: [0, 30]
          // offset: [горизонтальнийЗсув, вертикальнийЗсув]
        }
      }]
    }
  }, {
    target: '#tutorial-res-tab',
    content: 'Lets switch back to resources tab',
    disableBeacon: true,
    disableOverlayClose: true,
    spotlightClicks: true,
    actionRequired: true
  }, {
    target: '#actions-list-wrap',
    content: 'Here you can see list of actions available for you. To progress (earn resources, improve attributes) you need to perform various actions',
    disableBeacon: true,
    disableOverlayClose: true
  }, {
    target: '#item_action_walk',
    content: 'Hovering over specific action will show you its details in the right panel. If you click on the action card - you will be able to pin its details to right sidebar.',
    disableBeacon: true,
    disableOverlayClose: true,
    spotlightClicks: true,
    actionRequired: true
  }, {
    target: '#item_action_bonuses',
    content: 'Here is the list of action effects that you will receive for running the action. As you can see, Walking will consume energy',
    disableBeacon: true,
    disableOverlayClose: true
  }, {
    target: '#item_action_levelup',
    content: 'Here are passive permanent bonuses that action will provide for level-up. So, Walking will consume energy, but leveling it will increase Stamina (that increases passive energy generation). To upgrade action level you have to run it',
    disableBeacon: true,
    disableOverlayClose: true
  }, {
    target: '#activate_action_walk',
    content: 'Click "Start" button to start walking, and increase your Stamina',
    disableBeacon: true,
    disableOverlayClose: true,
    spotlightClicks: true,
    actionRequired: true
  }, {
    target: '#level_up_indicator_action_walk',
    content: 'Now, once action is running - it increasing XP. When your progress indicator fills up - your action will level up. Each next level will require more XP.',
    disableBeacon: true,
    disableOverlayClose: true,
    spotlightClicks: true
  }, {
    target: '#tutorial-resources',
    content: 'So, you can see that your energy rate is reduced, but do not worry. Your energy is consumed by running action, but as you get higher Stamina attribute your net energy income will increase',
    disableBeacon: true,
    disableOverlayClose: true
  }, {
    target: '#tutorial-resources',
    content: 'If some of your resources fall below zero - actions and other stuff using them starts running at reduced efficiency.',
    disableBeacon: true,
    disableOverlayClose: true
  }, {
    target: '#item_action_walk',
    content: 'Lets wait for your walk action to level up',
    disableBeacon: true,
    disableOverlayClose: true,
    spotlightClicks: true,
    actionRequired: true
  }, {
    target: '#activate_action_visit_city',
    content: 'Some actions are required to unlock new content. Run visit city till level 2 to unlock new actions and stuff',
    disableBeacon: true,
    disableOverlayClose: true,
    spotlightClicks: true,
    actionRequired: true
  }, {
    target: '#level',
    content: 'During running actions your mage will also receive experience. Each new mage level gives you one skill point. Unspent skill points will be displayed here. Clicking this indicator allows you to allocate your skill point.',
    disableBeacon: true,
    disableOverlayClose: true,
    spotlightClicks: true
  }, {
    target: '#shop',
    content: 'Now, you can run some actions that will help you to earn coins. Dont forget to visit shop once you earn 2 coins',
    disableBeacon: true,
    disableOverlayClose: true,
    spotlightClicks: true
  }, {
    target: '#goals',
    content: 'If you are not sure what to do - visit your next unlocks. It will give you better understanding of what to do to unlock new content',
    disableBeacon: true,
    disableOverlayClose: true,
    spotlightClicks: true
  }, {
    target: '#statistics',
    content: 'And you can click here to see various neat stats about your game. Thats all for now, good luck!',
    disableOverlayClose: true,
    // не даємо закрити кліком поза
    spotlightClicks: true
  }];

  // Допоміжні функції
  var startTutorial = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setStepIndex(0);
    setRun(true);
  }, []);
  var stopTutorial = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setRun(false);
  }, []);
  var nextStep = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setStepIndex(function (prev) {
      return prev + 1;
    });
  }, []);
  var jumpOver = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (idx) {
    setStepIndex(function (prev) {
      return idx !== null && idx !== void 0 ? idx : prev + 2;
    });
  }, []);
  var unlockNextById = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (check_index) {
    setStepIndex(function (prev) {
      return prev === check_index ? prev + 1 : prev;
    });
  });

  // Можемо передбачити й інші методи (goToStep, prevStep, тощо)

  // Будуємо контекстне значення
  var value = {
    stepIndex: stepIndex,
    setStepIndex: setStepIndex,
    run: run,
    setRun: setRun,
    startTutorial: startTutorial,
    stopTutorial: stopTutorial,
    nextStep: nextStep,
    unlockNextById: unlockNextById,
    jumpOver: jumpOver
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TutorialContext.Provider, {
    value: value
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_joyride__WEBPACK_IMPORTED_MODULE_3__["default"], {
    steps: steps,
    tooltipComponent: MyTooltip,
    stepIndex: stepIndex,
    run: run,
    continuous: true,
    showSkipButton: true,
    disableBeacon: true,
    callback: function callback(data) {
      var index = data.index,
        type = data.type,
        action = data.action,
        status = data.status;

      // console.log('UNN: ', data);

      if (type === 'tour:end') {
        if (status === 'skipped') {
          // Користувач пропустив тур
          sendData('set_tour_finished', {
            skipStep: stepIndex
          });
        } else if (status === 'finished') {
          // Тур завершено нормально
          sendData('set_tour_finished', {});
        }
        setRun(false);
      }
      if (type === 'step:after' && action === 'next') {
        if (index >= steps.length - 1) {
          // console.log('Finishhh!');
          sendData('set_tour_finished', {});
        }
        setStepIndex(index + 1);
      }
      if (type === 'step:after' && action === 'close') {
        sendData('set_tour_finished', {
          skipStep: stepIndex
        });
        setRun(false);
      }
    },
    styles: {
      options: {
        arrowColor: '#fff',
        // Фоновий колір тултипу
        backgroundColor: '#111',
        // Колір затемнення фону (оверлею)
        overlayColor: 'rgba(0, 0, 0, 0.5)',
        // Основний колір (колір кнопок Next, Back, Skip)
        primaryColor: '#112',
        // Колір тексту (у тултипі)
        textColor: '#fff',
        zIndex: 10000
      },
      tooltip: {
        // Стиль основного контейнера тултипу
        borderRadius: '2px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#777'
      },
      spotlight: {
        pointerEvents: 'none'
      }
    }
  }), children);
}
function useTutorial() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TutorialContext);
}

//# sourceURL=webpack://idlemancery-v2-reworked/./src/context/tutorial-context.js?
