__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HowListsAutomationsWorking: () => (/* binding */ HowListsAutomationsWorking)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var HowListsAutomationsWorking = function HowListsAutomationsWorking() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "lists-automation-tutorial"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Sometimes, when you want to step away from the game for a while, you\u2019ll want to ensure that it continues to run efficiently."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "This is where list automation becomes useful. In fact, almost everything in the game can be automated! More features will be unlocked in the future that can also be automated. Since automation works similarly across the game, let\u2019s focus on automating action lists as an example."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Automation functions through a set of conditions that must be met for a list to run automatically."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "image-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "icons/how-to/automations/how_to_add_rule.png",
    alt: "How to add automation rules"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "To set up autotrigger conditions, you\u2019ll need to add a \"rule.\" A list must have at least one rule to enable automation. Click \"Add Rule\" to get started."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "image-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "icons/how-to/automations/how_to_select_rule_conditions.png",
    alt: "How to set up a rule"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "After adding a rule, you can choose from available rule types (e.g., resource amount, resource rate, currently running action, etc.) and define the condition under which the rule will be considered TRUE."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "image-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "icons/how-to/automations/how_to_select_trigger_conditions.png",
    alt: "How to set up trigger conditions"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Above the rules list (#1 in the image), you can also set a priority. If multiple automated lists meet their autotrigger conditions, the game will select the one with the highest priority (priority = 1 is the highest, 2 is lower, and so on).", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "By default, if you add several rules, they are matched using AND logic. This can be changed in the rules condition field (#2 in the image)."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Once you\u2019ve set up automation settings for your lists, ensure that automation is turned on."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "image-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "icons/how-to/automations/how_to_automation_settings.png",
    alt: "Automation settings"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "#1 Checkbox: Enables or disables automation for lists."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "#2 Dropdown: Sets the autotrigger interval (how frequently the game checks if a list should be changed)."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "For example, suppose you want to \"Beg\" only when your coins aren\u2019t capped and switch to \"Walking\" otherwise. You can create two lists:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Begging")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Create a list, add \"Begging\" to it, and set one rule:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "Resource Amount -- Coins -- Less Than -- 100 -- Percentage")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Set priority to 1.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Walking")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Create a list, add \"Walking\" to it, and set one rule:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "Resource Amount -- Coins -- Greater Than -- 90 -- Percentage")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Set priority to 2."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "By assigning higher priority (lower number) to actions with more specific conditions, the system will try to run those actions first as soon as their conditions are met."));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/how-to/lists-automations.jsx?
