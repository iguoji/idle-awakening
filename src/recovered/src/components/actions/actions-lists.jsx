__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionListsPanel: () => (/* binding */ ActionListsPanel),
/* harmony export */   ActionListsPopup: () => (/* binding */ ActionListsPopup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_worker_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/worker-context */ "./src/context/worker-context.js");
/* harmony import */ var _general_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../general/client */ "./src/general/client.js");
/* harmony import */ var _shared_how_to_sign_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/how-to-sign.jsx */ "./src/components/shared/how-to-sign.jsx");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/tippy-wrapper.jsx */ "./src/components/shared/tippy-wrapper.jsx");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







var ActionListsPanel = function ActionListsPanel(_ref) {
  var automationUnlocked = _ref.automationUnlocked,
    runningList = _ref.runningList,
    editListToDetails = _ref.editListToDetails,
    lists = _ref.lists,
    viewListToDetails = _ref.viewListToDetails,
    automationEnabled = _ref.automationEnabled,
    toggleAutomation = _ref.toggleAutomation,
    autotriggerIntervalSetting = _ref.autotriggerIntervalSetting,
    changeAutomationInterval = _ref.changeAutomationInterval;
  var worker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_worker_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var _useWorkerClient = (0,_general_client__WEBPACK_IMPORTED_MODULE_2__.useWorkerClient)(worker),
    onMessage = _useWorkerClient.onMessage,
    sendData = _useWorkerClient.sendData;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    openedFor = _useState2[0],
    setOpenedFor = _useState2[1];
  var editList = function editList(id) {
    console.log('Set to edit: ', id);
    editListToDetails(id);
    setOpenedFor(null);
  };
  var runList = function runList(id) {
    sendData('run-list', {
      id: id
    });
    setOpenedFor(null);
  };
  var onDelete = function onDelete(id) {
    sendData('delete-action-list', {
      id: id
    });
    setOpenedFor('edit');
  };
  var setActionListOrder = function setActionListOrder(newOrder) {
    sendData('set-action-lists-order', newOrder);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'action-lists-panel'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'flex-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'current-list panel-col'
  }, "Current list: ", runningList ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'flex-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, runningList.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'icon-content stop-icon interface-icon',
    onClick: function onClick() {
      return runList(null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "icons/interface/pause.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'icon-content edit-icon interface-icon',
    onClick: function onClick() {
      return editList(runningList.id);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "icons/interface/edit-icon.png"
  }))) : 'None'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'lists-editor panel-col'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return editListToDetails();
    }
  }, "Create New")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'lists-editor panel-col'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick(e) {
      e.stopPropagation();
      setOpenedFor('edit');
    }
  }, "Pick list"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ActionListsPopup, {
    lists: lists,
    isOpened: openedFor === 'edit',
    setOpenedFor: setOpenedFor,
    onSelect: editList,
    onRun: runList,
    onHover: viewListToDetails,
    onDelete: onDelete,
    setActionListOrder: setActionListOrder
  })), automationUnlocked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'automation-enabled panel-col'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: 'checkbox',
    checked: !!automationEnabled,
    onChange: toggleAutomation
  }), "Lists automation enabled")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'panel-col automation-interval'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Switch lists interval:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    onChange: function onChange(e) {
      return changeAutomationInterval(+e.target.value);
    },
    value: autotriggerIntervalSetting
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: 10
  }, "10 seconds"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: 30
  }, "30 seconds"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: 60
  }, "1 minute"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: 300
  }, "5 minutes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: 900
  }, "15 minutes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: 1800
  }, "30 minutes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: 3600
  }, "1 hour")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_how_to_sign_jsx__WEBPACK_IMPORTED_MODULE_3__.HowToSign, {
    scope: 'action-lists'
  })) : null));
};
var ActionListsPopup = function ActionListsPopup(_ref2) {
  var lists = _ref2.lists,
    isOpened = _ref2.isOpened,
    setOpenedFor = _ref2.setOpenedFor,
    onSelect = _ref2.onSelect,
    onHover = _ref2.onHover,
    onRun = _ref2.onRun,
    onDelete = _ref2.onDelete,
    setActionListOrder = _ref2.setActionListOrder;
  var popupRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    search = _useState4[0],
    setSearch = _useState4[1];
  var listsDisplayed = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (!search) return lists;
    return lists.filter(function (l) {
      return l.name.includes(search);
    });
  }, [lists, search]);
  var onDragEnd = function onDragEnd(result) {
    var source = result.source,
      destination = result.destination;

    // If dropped outside the list, do nothing
    if (!destination) return;

    // Reorder lists based on drag-and-drop
    var reorderedLists = Array.from(listsDisplayed);
    var _reorderedLists$splic = reorderedLists.splice(source.index, 1),
      _reorderedLists$splic2 = _slicedToArray(_reorderedLists$splic, 1),
      removed = _reorderedLists$splic2[0];
    reorderedLists.splice(destination.index, 0, removed);

    // Call the callback with the new order
    setActionListOrder(reorderedLists.map(function (list, index) {
      return {
        id: list.id,
        sort: index + 1 // Update the sort index
      };
    }));
  };
  var handleClickOutside = function handleClickOutside(event) {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setOpenedFor(null); // Close the popup if click outside
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isOpened) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return function () {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpened]);
  if (!isOpened) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__.DragDropContext, {
    onDragEnd: onDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "list-selector",
    ref: popupRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "list-selector-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "search-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__.Droppable, {
    droppableId: "actionLists"
  }, function (provided) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
      className: "lists-wrap",
      ref: provided.innerRef
    }, provided.droppableProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "list-inner"
    }, listsDisplayed.map(function (list, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__.Draggable, {
        key: list.id,
        draggableId: list.id.toString(),
        index: index
      }, function (provided) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
          className: "item",
          ref: provided.innerRef
        }, provided.draggableProps, provided.dragHandleProps, {
          onMouseEnter: function onMouseEnter() {
            return onHover(list.id);
          },
          onMouseLeave: function onMouseLeave() {
            return onHover(null);
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "list-item-row flex-container"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
          className: "list-name"
        }, list.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_5__.TippyWrapper, {
          content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: "hint-popup"
          }, "Run List")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "icon-content run-icon interface-icon small",
          onClick: function onClick() {
            return onRun(list.id);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
          src: "icons/interface/run.png"
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_5__.TippyWrapper, {
          content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: "hint-popup"
          }, "Edit List")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "icon-content edit-icon interface-icon small",
          onClick: function onClick() {
            return onSelect(list.id);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
          src: "icons/interface/edit-icon.png"
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_5__.TippyWrapper, {
          content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: "hint-popup"
          }, "Delete List")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "icon-content edit-icon interface-icon small",
          onClick: function onClick() {
            return onDelete(list.id);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
          src: "icons/interface/delete.png"
        })))));
      });
    }), provided.placeholder)));
  }))));
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/actions/actions-lists.jsx?
