__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tippy-wrapper.jsx */ "./src/components/shared/tippy-wrapper.jsx");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }




/**
 * @param {Object} props
 * @param {string[]} props.filterOrder - масив ідентифікаторів, що визначає порядок відображення
 * @param {Object} props.filters - об’єкт { [id]: { name, isPinned, isRequired, ... } }
 * @param {Function} props.onPinToggle - викликається при зміні чекбокса `isPinned`
 * @param {Function} props.onApply - викликається при натисканні на "Apply Filter"
 * @param {Function} props.onEdit - викликається при натисканні на "Edit"
 * @param {Function} props.onDelete - викликається при натисканні на "Delete"
 * @param {boolean} props.showAddButton - чи показувати кнопку "Add"
 * @param {Function} props.onAdd - викликається при натисканні на "Add"
 * @param {boolean} props.showCloseButton - чи показувати кнопку "Close"
 * @param {Function} props.onClose - викликається при натисканні на "Close"
 * @param {string} [props.noFiltersHint="No custom filters were added yet"]
 * @param {string} [props.droppableId="custom-filters"] - Droppable ID для react-beautiful-dnd
 */
function CustomFiltersList(_ref) {
  var _ref$filterOrder = _ref.filterOrder,
    filterOrder = _ref$filterOrder === void 0 ? [] : _ref$filterOrder,
    _ref$filters = _ref.filters,
    filters = _ref$filters === void 0 ? {} : _ref$filters,
    _ref$onPinToggle = _ref.onPinToggle,
    onPinToggle = _ref$onPinToggle === void 0 ? function () {} : _ref$onPinToggle,
    _ref$onApply = _ref.onApply,
    onApply = _ref$onApply === void 0 ? function () {} : _ref$onApply,
    _ref$onEdit = _ref.onEdit,
    onEdit = _ref$onEdit === void 0 ? function () {} : _ref$onEdit,
    _ref$onDelete = _ref.onDelete,
    onDelete = _ref$onDelete === void 0 ? function () {} : _ref$onDelete,
    _ref$showAddButton = _ref.showAddButton,
    showAddButton = _ref$showAddButton === void 0 ? false : _ref$showAddButton,
    _ref$onAdd = _ref.onAdd,
    onAdd = _ref$onAdd === void 0 ? function () {} : _ref$onAdd,
    _ref$showCloseButton = _ref.showCloseButton,
    showCloseButton = _ref$showCloseButton === void 0 ? false : _ref$showCloseButton,
    _ref$onClose = _ref.onClose,
    onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
    _ref$noFiltersHint = _ref.noFiltersHint,
    noFiltersHint = _ref$noFiltersHint === void 0 ? 'No custom filters were added yet' : _ref$noFiltersHint,
    _ref$droppableId = _ref.droppableId,
    droppableId = _ref$droppableId === void 0 ? 'custom-filters' : _ref$droppableId;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "list-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__.Droppable, {
    droppableId: droppableId
  }, function (provided) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
      className: "list-items",
      ref: provided.innerRef
    }, provided.droppableProps), filterOrder.length > 0 ? filterOrder.map(function (id, index) {
      var one = filters[id];
      if (!one) return null; // про всяк випадок

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__.Draggable, {
        key: id,
        draggableId: String(id),
        index: index
      }, function (draggableProvided) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
          className: "flex-container filter-row",
          ref: draggableProvided.innerRef
        }, draggableProvided.draggableProps, draggableProvided.dragHandleProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
          className: "filter-name"
        }, one.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
          type: "checkbox",
          checked: !!one.isPinned,
          onChange: function onChange() {
            return onPinToggle(one.id, !one.isPinned);
          }
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_1__.TippyWrapper, {
          content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: "hint-popup"
          }, "Apply Filter")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "icon-content run-icon interface-icon small",
          onClick: function onClick() {
            return onApply(one.id);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
          src: "icons/interface/filter.png",
          alt: "Apply Filter"
        }))), !one.isRequired ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_1__.TippyWrapper, {
          content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: "hint-popup"
          }, "Edit Filter")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "icon-content edit-icon interface-icon small",
          onClick: function onClick() {
            return onEdit(one.id);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
          src: "icons/interface/edit-icon.png",
          alt: "Edit Filter"
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tippy_wrapper_jsx__WEBPACK_IMPORTED_MODULE_1__.TippyWrapper, {
          content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            className: "hint-popup"
          }, "Delete Filter")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "icon-content edit-icon interface-icon small",
          onClick: function onClick() {
            return onDelete(one.id);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
          src: "icons/interface/delete.png",
          alt: "Delete Filter"
        })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
          className: "hint yellow"
        }, "Required")));
      });
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "hint"
    }, noFiltersHint), provided.placeholder);
  }), (showAddButton || showCloseButton) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "buttons"
  }, showAddButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onAdd
  }, "Add"), showCloseButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onClose
  }, "Close")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomFiltersList);

//# sourceURL=webpack://idlemancery-v2-reworked/./src/components/shared/custom-filter-list.jsx?
