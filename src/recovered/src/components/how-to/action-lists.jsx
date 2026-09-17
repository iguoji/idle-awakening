__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HowActionListsWorking: () => (/* binding */ HowActionListsWorking)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var HowActionListsWorking = function HowActionListsWorking() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "actions-lists-tutorial"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "As you've noticed, some actions require additional resources. For example, \"Begging\" consumes energy. While you can manually switch between \"Begging\" and \"Rest,\" it's not the most efficient experience, right?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "That's where lists come in! You can combine actions into lists, allowing them to run simultaneously."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Lists work similarly to regular actions, but they combine the effects and upkeep of the actions added to them."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "image-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "icons/how-to/lists/how_to_create_list.png",
    alt: "How to create a list"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "At the bottom of the Actions page, you'll find the area dedicated to lists. On the leftmost side of the panel, you can see the currently running list. Next to it, you'll find the \"Create New\" button to create a list or the \"Pick\" button to manage existing lists. To the right, there's the automation section, which will be covered in a separate tutorial."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Click the \"Create New\" button (highlighted in the image above) to create a new list."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Once you've clicked \"Create New,\" the List Editor will appear on the right panel."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "image-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "icons/how-to/lists/how_to_add_actions.png",
    alt: "How to add actions"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Start by giving your list a name, then add some actions."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "You can add actions by dragging and dropping them from the left side of the page into the droppable area under the list name. Alternatively, you can click the actions directly."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "image-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "icons/how-to/lists/how_to_ajust_efforts.png",
    alt: "How to adjust efforts"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "After adding actions to the list (as shown in section #2 of the image), you'll see \"Average Resources per Second\" and \"Average Effects per Second.\" For example, the list might generate only half the coins compared to running just \"Begging\" alone. This happens because of the efforts distribution shown in section #1. Let's break it down:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "- Walking: 1 effort ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "- Begging: 3 effort ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "- Resting: 2 effort ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "This means that if your character runs this list for 6 seconds, they would spend:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "- 1 second walking", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "- 3 seconds begging", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "- 2 seconds resting", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "So, only half of the time is spent begging."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "If you increase \"Begging\" to 5 effort, the list would generate more coins but reduce energy income."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Lists are a convenient way to combine actions that generate resources for other actions. However, it's generally more efficient to focus on specific goals rather than adding all available actions to a list."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "After clicking \"Create,\" your new success plan will appear in the list."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "image-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "icons/how-to/lists/how_to_pick_list.png",
    alt: "How to pick a list"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "When you click \"Pick List,\" you'll see your newly created action list. You can choose to run or edit it as needed."));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/how-to/action-lists.jsx?
