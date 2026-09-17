__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Guilds: () => (/* binding */ Guilds),
/* harmony export */   ItemCard: () => (/* binding */ ItemCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../general/client */ "./src/general/client.js");
/* harmony import */ var _general_utils_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../general/utils/strings */ "./src/general/utils/strings.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/tippy-wrapper.jsx */ "./src/components/shared/tippy-wrapper.jsx");
/* harmony import */ var _layout_sidebar_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout/sidebar.jsx */ "./src/components/layout/sidebar.jsx");
/* harmony import */ var _shared_resource_comparison_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/resource-comparison.jsx */ "./src/components/shared/resource-comparison.jsx");
/* harmony import */ var _shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/new-notification-wrap.jsx */ "./src/components/shared/new-notification-wrap.jsx");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }









var Guilds = function Guilds(_ref) {
  var _newUnlocks$guild_lev;
  var setItemDetails = _ref.setItemDetails,
    filterId = _ref.filterId,
    newUnlocks = _ref.newUnlocks,
    isMobile = _ref.isMobile;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      guilds: [],
      current: null,
      availableUpgrades: [],
      tierUnlocks: [false, false, false],
      reputation: {},
      points: {}
    }),
    _useState2 = _slicedToArray(_useState, 2),
    guildsData = _useState2[0],
    setGuildsData = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var interval = setInterval(function () {
      sendData('query-guild-items-data', {
        filterId: filterId
      });
    }, 1000);
    sendData('query-guild-items-data', {
      filterId: filterId
    });
    return function () {
      clearInterval(interval);
    };
  }, []);
  onMessage("guild-items-data", function (guilds) {
    setGuildsData(guilds);
  });
  var purchaseUpgrade = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id) {
    sendData("purchase-guild-item", {
      id: id
    });
  });
  var selectGuild = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id) {
    sendData('select-guild', {
      id: id
    });
  });
  var leaveGuild = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    sendData('leave-guild', {});
  });
  if (!guildsData.current) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'guilds-selector-wrap'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'explanations'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "You can select only one guild. But you can change it anytime you want.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'guilds-list-wrap'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'guilds-container'
    }, guildsData.guilds.map(function (guild) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'guild-card',
        onMouseOver: function onMouseOver() {
          return setItemDetails(guild.id, 'guild');
        },
        onMouseLeave: function onMouseLeave() {
          return setItemDetails(null, 'guild');
        },
        onClick: function onClick() {
          return selectGuild(guild.id);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'guild-card-inner'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: 'image-holder'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: "icons/guilds/".concat(guild.icon_id, ".png"),
        className: 'guild big'
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, guild.name)));
    })))));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'guilds-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_new_notification_wrap_jsx__WEBPACK_IMPORTED_MODULE_8__.NewNotificationWrap, {
    isNew: newUnlocks === null || newUnlocks === void 0 || (_newUnlocks$guild_lev = newUnlocks.guild_leveled) === null || _newUnlocks$guild_lev === void 0 ? void 0 : _newUnlocks$guild_lev.hasNew,
    id: 'guild_leveled'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'guild-overview'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'flex-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'icon-holder left'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: 'guild-image',
    src: "icons/guilds/".concat(guildsData.current.icon_id, ".png")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'right'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'guild-name'
  }, guildsData.current.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'space-item padded'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'info'
  }, "Reputation Level: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(guildsData.current.level))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_5__.TippyWrapper, {
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'hint-popup'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "You can get reputation by performing jobs for your guilds"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout_sidebar_jsx__WEBPACK_IMPORTED_MODULE_6__.BreakDown, {
      breakDown: guildsData.reputation.breakDown
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "ETA: ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.secondsToString)(guildsData.reputation.eta)))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'padded'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'space-item'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Reputation Progress:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(guildsData.reputation.amount), "/", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatValue)(guildsData.reputation.cap))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'progress-wrap guilds-wrap'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'progress-bar'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'progress-bg',
    style: {
      width: "".concat(100 * guildsData.reputation.amount / guildsData.reputation.cap, "%")
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'space-item padded'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Reputation Points:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "slots-amount ".concat(guildsData.points.balance > 0 ? 'slots-available' : 'slots-unavailable')
  }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(guildsData.points.balance), "/", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(guildsData.points.income))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'buttons'
  }, guildsData.prestige.canPrestige ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_5__.TippyWrapper, {
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'hint-popup'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "You will loose all your guild reputation, levels and upgrades, but will get following bonuses (based on your new max reputation level):"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_resource_comparison_jsx__WEBPACK_IMPORTED_MODULE_7__.ResourceComparison, {
      effects1: guildsData.prestige.currentEffects,
      effects2: guildsData.prestige.potentialEffects
    }))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: leaveGuild
  }, "Prestige Guild")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_5__.TippyWrapper, {
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'hint-popup'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "You wont receive any new bonuses"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Reach ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(guildsData.maxLevel + 1), " reputation level to increase your bonuses"))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: leaveGuild
  }, "Abandon Guild")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'upgrades'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'tiers'
  }, Object.values(guildsData.availableUpgrades).map(function (list, tier) {
    var _guildsData$tierUnloc, _guildsData$tierUnloc2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'tier-wrap'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: 'tier-title'
    }, "Tier ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(tier + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: 'tier-content'
    }, (_guildsData$tierUnloc = guildsData.tierUnlocks[tier]) !== null && _guildsData$tierUnloc !== void 0 && _guildsData$tierUnloc.isUnlocked ? list.map(function (upgrade) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ItemCard, _extends({
        key: upgrade.id
      }, upgrade, {
        onPurchase: purchaseUpgrade,
        onShowDetails: setItemDetails,
        isMobile: isMobile
      }));
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Reach reputation level ", (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)((_guildsData$tierUnloc2 = guildsData.tierUnlocks[tier]) === null || _guildsData$tierUnloc2 === void 0 ? void 0 : _guildsData$tierUnloc2.level), " to unlock")));
  }))))));
};
var ItemCard = function ItemCard(_ref2) {
  var id = _ref2.id,
    name = _ref2.name,
    level = _ref2.level,
    maxLevel = _ref2.maxLevel,
    affordable = _ref2.affordable,
    onPurchase = _ref2.onPurchase,
    onShowDetails = _ref2.onShowDetails,
    isMobile = _ref2.isMobile;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card upgrade",
    onMouseEnter: function onMouseEnter() {
      return isMobile ? null : onShowDetails(id);
    },
    onMouseOver: function onMouseOver() {
      return isMobile ? null : onShowDetails(id);
    },
    onMouseLeave: function onMouseLeave() {
      return isMobile ? null : onShowDetails(null);
    },
    onClick: function onClick() {
      return isMobile ? onShowDetails(id) : null;
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'item-card'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'head'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: 'title'
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: 'level'
  }, (0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(level), maxLevel ? "/".concat((0,_general_utils_strings__WEBPACK_IMPORTED_MODULE_3__.formatInt)(maxLevel)) : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'bottom'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'buttons'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: !affordable.isAffordable,
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      onPurchase(id);
    }
  }, "Upgrade")))));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/social/guilds.jsx?
