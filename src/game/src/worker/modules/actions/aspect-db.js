import * as game_framework__WEBPACK_IMPORTED_MODULE_0__ from '../../../../framework/index.js';

var registerAspects = function registerAspects() {
  game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.registerGameEntity('attribute_strength_aspect', {
    name: 'Strength Intensity',
    description: 'Increase strength-based actions intensity (meaning speed up both consumption and income)',
    tags: ['aspect', 'physical'],
    level: 0,
    resourceModifier: {
      multiplier: {
        effects: {
          'aspect_attribute_strength': {
            A: 0.25,
            B: 1,
            type: 0
          }
        }
      }
    },
    attributes: {
      keyAttribute: 'attribute_strength',
      color: '#ad4329'
    },
    unlockCondition: function unlockCondition() {
      return true;
    }
  });
  game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.registerGameEntity('attribute_charisma_aspect', {
    name: 'Charisma Intensity',
    description: 'Increase charisma-based actions intensity (meaning speed up both consumption and income)',
    tags: ['aspect', 'social'],
    level: 0,
    resourceModifier: {
      multiplier: {
        effects: {
          'aspect_attribute_charisma': {
            A: 0.25,
            B: 1,
            type: 0
          }
        }
      }
    },
    attributes: {
      keyAttribute: 'attribute_charisma',
      color: '#5da329'
    },
    unlockCondition: function unlockCondition() {
      return true;
    }
  });
  game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.registerGameEntity('attribute_patience_aspect', {
    name: 'Patience Intensity',
    description: 'Increase patience-based actions intensity (meaning speed up both consumption and income)',
    tags: ['aspect', 'patience'],
    level: 0,
    resourceModifier: {
      multiplier: {
        effects: {
          'aspect_attribute_patience': {
            A: 0.25,
            B: 1,
            type: 0
          }
        }
      }
    },
    attributes: {
      keyAttribute: 'attribute_patience',
      color: '#5da3f9'
    },
    unlockCondition: function unlockCondition() {
      return true;
    }
  });
};

export { registerAspects };
