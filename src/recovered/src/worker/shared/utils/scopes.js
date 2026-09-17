__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getScope: () => (/* binding */ getScope)
/* harmony export */ });
var getScope = function getScope(entity) {
  if (entity.tags.includes('action')) {
    return 'Action';
  }
  if (entity.tags.includes('shop')) {
    return 'Shop Upgrade';
  }
  if (entity.tags.includes('course-learning')) {
    return 'Course';
  }
  if (entity.tags.includes('spell')) {
    return 'Spell';
  }
  if (entity.tags.includes('accessory')) {
    return 'Accessory';
  }
  if (entity.tags.includes('furniture')) {
    return 'Furniture';
  }
  if (entity.tags.includes('amplifier')) {
    return 'Amplifier';
  }
  if (entity.tags.includes('recipe')) {
    return 'Recipe';
  }
  return '';
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/worker/shared/utils/scopes.js?
