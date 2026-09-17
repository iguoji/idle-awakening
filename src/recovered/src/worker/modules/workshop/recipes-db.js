__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPrimaryBonus: () => (/* binding */ getPrimaryBonus),
/* harmony export */   registerCraftingRecipe: () => (/* binding */ registerCraftingRecipe),
/* harmony export */   registerCraftingRecipes: () => (/* binding */ registerCraftingRecipes)
/* harmony export */ });
/* harmony import */ var game_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! game-framework */ "./node_modules/game-framework/index.js");

var getPrimaryBonus = function getPrimaryBonus(attributeId) {
  return 0.98 + 0.02 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue(attributeId);
};
var registerCraftingRecipe = function registerCraftingRecipe(id, options) {
  var primaryAttribute = options.attributes.primaryAttribute;
  if (!primaryAttribute || !options.resourceModifier) {
    return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.registerGameEntity(id, options);
  }
  if (!options.resourceModifier.effectDeps) {
    options.resourceModifier.effectDeps = [];
  }
  if (!options.resourceModifier.effectDeps.includes(primaryAttribute)) {
    options.resourceModifier.effectDeps.push(primaryAttribute);
  }
  options.getPrimaryEffect = function () {
    return getPrimaryBonus(primaryAttribute);
  };
  if (options.attributes.isTraining) {
    options.resourceModifier.customAmplifierApplyTypes = ['resources'];
  } else {
    options.resourceModifier.customAmplifierApplyTypes = ['effects', 'resources'];
  }
  options.resourceModifier.getCustomAmplifier = function () {
    return options.getPrimaryEffect();
  };
  return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.registerGameEntity(id, options);
};
var registerCraftingRecipes = function registerCraftingRecipes() {
  registerCraftingRecipe('craft_refined_wood', {
    tags: ["recipe", "crafting", "material", "physical"],
    name: 'Craft Refined Wood',
    isAbstract: false,
    allowedImpacts: ['effects'],
    description: 'Refine wood and use it for your needs, or just sell it',
    level: 1,
    resourceId: 'inventory_refined_wood',
    resourceModifier: {
      get_income: function get_income() {
        return {
          resources: {
            'inventory_refined_wood': {
              A: 1.3,
              B: 0.2 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('crafting_efficiency'),
              type: 1
            }
          }
        };
      },
      get_consumption: function get_consumption() {
        return {
          resources: {
            'inventory_wood': {
              A: 1.5,
              B: 1 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('crafting_materials_discount'),
              type: 1
            },
            'crafting_ability': {
              A: 1.5,
              B: 1,
              type: 1
            },
            'crafting_slots': {
              A: 1,
              B: 0,
              type: 0,
              ignoreEfficiency: true
            }
          }
        };
      },
      effectDeps: ['crafting_efficiency', 'crafting_materials_discount']
    },
    unlockCondition: function unlockCondition() {
      return true;
    },
    attributes: {
      baseXPCost: 10
    },
    get_cost: function get_cost() {
      return {
        'crafting_slots': {
          A: 1,
          B: 0,
          type: 0
        }
      };
    }
  });
  registerCraftingRecipe('craft_paper', {
    tags: ["recipe", "crafting", "material", "physical"],
    name: 'Craft Paper',
    isAbstract: false,
    allowedImpacts: ['effects'],
    description: 'Make a paper out of your wood',
    level: 1,
    resourceId: 'inventory_paper',
    resourceModifier: {
      get_income: function get_income() {
        return {
          resources: {
            'inventory_paper': {
              A: 1.3,
              B: 0.05 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('crafting_efficiency'),
              type: 1
            }
          }
        };
      },
      get_consumption: function get_consumption() {
        return {
          resources: {
            'inventory_wood': {
              A: 1.5,
              B: 1 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('crafting_materials_discount'),
              type: 1
            },
            'crafting_ability': {
              A: 1.5,
              B: 1,
              type: 1
            },
            'crafting_slots': {
              A: 1,
              B: 0,
              type: 0,
              ignoreEfficiency: true
            }
          }
        };
      },
      effectDeps: ['crafting_efficiency', 'crafting_materials_discount']
    },
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.isResourceUnlocked('inventory_paper');
    },
    attributes: {
      baseXPCost: 10
    },
    get_cost: function get_cost() {
      return {
        'crafting_slots': {
          A: 1,
          B: 0,
          type: 0
        }
      };
    }
  });
  registerCraftingRecipe('craft_enchanted_paper', {
    tags: ["recipe", "crafting", "material", "physical"],
    name: 'Enchant Paper',
    isAbstract: false,
    allowedImpacts: ['effects'],
    description: 'Craft Enchanted magical paper scrolls',
    level: 1,
    resourceId: 'inventory_enchanted_paper',
    resourceModifier: {
      get_income: function get_income() {
        return {
          resources: {
            'inventory_enchanted_paper': {
              A: 1.3,
              B: 0.1 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('crafting_efficiency'),
              type: 1
            }
          }
        };
      },
      get_consumption: function get_consumption() {
        return {
          resources: {
            'inventory_paper': {
              A: 1.5,
              B: 1 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('crafting_materials_discount'),
              type: 1
            },
            mana: {
              A: 1.5,
              B: 40 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('crafting_materials_discount'),
              type: 1
            },
            'crafting_ability': {
              A: 1.5,
              B: 2,
              type: 1
            },
            'crafting_slots': {
              A: 1,
              B: 0,
              type: 0,
              ignoreEfficiency: true
            }
          }
        };
      },
      effectDeps: ['crafting_efficiency', 'crafting_materials_discount']
    },
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.isResourceUnlocked('inventory_enchanted_paper');
    },
    attributes: {
      baseXPCost: 10
    },
    get_cost: function get_cost() {
      return {
        'crafting_slots': {
          A: 1,
          B: 0,
          type: 0
        }
      };
    }
  });
  registerCraftingRecipe('craft_herbal_fibers', {
    tags: ["recipe", "crafting", "material", "physical"],
    name: 'Craft Herbal Fibers',
    isAbstract: false,
    allowedImpacts: ['effects'],
    description: 'Dry and weave your herbs in fibers for further usage',
    level: 1,
    resourceId: 'inventory_herbal_fibers',
    resourceModifier: {
      get_income: function get_income() {
        return {
          resources: {
            'inventory_herbal_fibers': {
              A: 1.3,
              B: 0.2 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('crafting_efficiency'),
              type: 1
            }
          }
        };
      },
      get_consumption: function get_consumption() {
        return {
          resources: {
            'inventory_ginseng': {
              A: 1.5,
              B: 0.5 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('crafting_materials_discount'),
              type: 1
            },
            'inventory_aloe_vera': {
              A: 1.5,
              B: 0.5 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('crafting_materials_discount'),
              type: 1
            },
            'crafting_ability': {
              A: 1.5,
              B: 1,
              type: 1
            },
            'crafting_slots': {
              A: 1,
              B: 0,
              type: 0,
              ignoreEfficiency: true
            }
          }
        };
      },
      effectDeps: ['crafting_efficiency', 'crafting_materials_discount']
    },
    unlockCondition: function unlockCondition() {
      return true;
    },
    attributes: {
      baseXPCost: 10
    },
    get_cost: function get_cost() {
      return {
        'crafting_slots': {
          A: 1,
          B: 0,
          type: 0
        }
      };
    }
  });
  registerCraftingRecipe('craft_ruby', {
    tags: ["recipe", "crafting", "material", "physical"],
    name: 'Refine Ruby',
    isAbstract: false,
    allowedImpacts: ['effects'],
    description: 'Refine your stones to obtain trace amounts of rubies',
    level: 1,
    resourceId: 'inventory_ruby',
    resourceModifier: {
      get_income: function get_income() {
        return {
          resources: {
            'inventory_ruby': {
              A: 1.3,
              B: 0.05 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('crafting_efficiency'),
              type: 1
            }
          }
        };
      },
      get_consumption: function get_consumption() {
        return {
          resources: {
            'inventory_stone': {
              A: 1.5,
              B: 1 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('crafting_materials_discount'),
              type: 1
            },
            'crafting_ability': {
              A: 1.5,
              B: 1,
              type: 1
            },
            'crafting_slots': {
              A: 1,
              B: 0,
              type: 0,
              ignoreEfficiency: true
            }
          }
        };
      },
      effectDeps: ['crafting_efficiency', 'crafting_materials_discount']
    },
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.isResourceUnlocked('inventory_stone');
    },
    attributes: {
      baseXPCost: 10
    },
    get_cost: function get_cost() {
      return {
        'crafting_slots': {
          A: 1,
          B: 0,
          type: 0
        }
      };
    }
  });
  registerCraftingRecipe('craft_sapphire', {
    tags: ["recipe", "crafting", "material", "physical"],
    name: 'Refine Sapphire',
    isAbstract: false,
    allowedImpacts: ['effects'],
    description: 'Refine your stones to obtain trace amounts of sapphires',
    level: 1,
    resourceId: 'inventory_sapphire',
    resourceModifier: {
      get_income: function get_income() {
        return {
          resources: {
            'inventory_sapphire': {
              A: 1.3,
              B: 0.05 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('crafting_efficiency'),
              type: 1
            }
          }
        };
      },
      get_consumption: function get_consumption() {
        return {
          resources: {
            'inventory_stone': {
              A: 1.5,
              B: 1 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('crafting_materials_discount'),
              type: 1
            },
            'crafting_ability': {
              A: 1.5,
              B: 1,
              type: 1
            },
            'crafting_slots': {
              A: 1,
              B: 0,
              type: 0,
              ignoreEfficiency: true
            }
          }
        };
      },
      effectDeps: ['crafting_efficiency', 'crafting_materials_discount']
    },
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.isResourceUnlocked('inventory_stone');
    },
    attributes: {
      baseXPCost: 10
    },
    get_cost: function get_cost() {
      return {
        'crafting_slots': {
          A: 1,
          B: 0,
          type: 0
        }
      };
    }
  });
  registerCraftingRecipe('craft_obsidian_shards', {
    tags: ["recipe", "crafting", "material", "physical"],
    name: 'Extract Obsidian Shard',
    isAbstract: false,
    allowedImpacts: ['effects'],
    description: 'Extract small shiny crystals from your stones',
    level: 1,
    unlockedBy: [{
      type: 'effect',
      id: 'attribute_strength',
      level: 5000
    }],
    resourceId: 'inventory_obsidian_shard',
    resourceModifier: {
      get_income: function get_income() {
        return {
          resources: {
            'inventory_obsidian_shard': {
              A: 1.3,
              B: 0.02 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('crafting_efficiency'),
              type: 1
            }
          }
        };
      },
      get_consumption: function get_consumption() {
        return {
          resources: {
            'inventory_stone': {
              A: 1.5,
              B: 100 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('crafting_materials_discount'),
              type: 1
            },
            'crafting_ability': {
              A: 1.5,
              B: 40,
              type: 1
            },
            'crafting_slots': {
              A: 1,
              B: 0,
              type: 0,
              ignoreEfficiency: true
            }
          }
        };
      },
      effectDeps: ['crafting_efficiency', 'crafting_materials_discount']
    },
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.isResourceUnlocked('inventory_obsidian_shard');
    },
    attributes: {
      baseXPCost: 10
    },
    get_cost: function get_cost() {
      return {
        'crafting_slots': {
          A: 1,
          B: 0,
          type: 0
        }
      };
    }
  });
  registerCraftingRecipe('craft_iron_plate', {
    tags: ["recipe", "crafting", "material", "physical"],
    name: 'Craft Iron Plate',
    isAbstract: false,
    allowedImpacts: ['effects'],
    description: 'Smelt iron ore into iron plates',
    level: 1,
    resourceId: 'inventory_iron_plate',
    resourceModifier: {
      get_income: function get_income() {
        return {
          resources: {
            'inventory_iron_plate': {
              A: 1.3,
              B: 0.02 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('crafting_efficiency'),
              type: 1
            }
          }
        };
      },
      get_consumption: function get_consumption() {
        return {
          resources: {
            'inventory_iron_ore': {
              A: 1.5,
              B: 1 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('crafting_materials_discount'),
              type: 1
            },
            'crafting_ability': {
              A: 1.5,
              B: 1,
              type: 1
            },
            'crafting_slots': {
              A: 1,
              B: 0,
              type: 0,
              ignoreEfficiency: true
            }
          }
        };
      },
      effectDeps: ['crafting_efficiency', 'crafting_materials_discount']
    },
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.isResourceUnlocked('inventory_iron_ore');
    },
    attributes: {
      baseXPCost: 10
    },
    get_cost: function get_cost() {
      return {
        'crafting_slots': {
          A: 1,
          B: 0,
          type: 0
        }
      };
    }
  });
  registerCraftingRecipe('craft_forged_steel', {
    tags: ["recipe", "crafting", "material", "physical"],
    name: 'Craft Forged Steel',
    isAbstract: false,
    allowedImpacts: ['effects'],
    description: 'Create forged durable steel from your iron plates',
    level: 1,
    unlockedBy: [{
      type: 'effect',
      id: 'attribute_strength',
      level: 7500
    }],
    resourceId: 'inventory_forged_steel',
    resourceModifier: {
      get_income: function get_income() {
        return {
          resources: {
            'inventory_forged_steel': {
              A: 1.3,
              B: 0.02 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('crafting_efficiency'),
              type: 1
            }
          }
        };
      },
      get_consumption: function get_consumption() {
        return {
          resources: {
            'inventory_iron_plate': {
              A: 1.5,
              B: 0.25 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('crafting_materials_discount'),
              type: 1
            },
            'crafting_ability': {
              A: 1.5,
              B: 4,
              type: 1
            },
            'crafting_slots': {
              A: 1,
              B: 0,
              type: 0,
              ignoreEfficiency: true
            }
          }
        };
      },
      effectDeps: ['crafting_efficiency', 'crafting_materials_discount']
    },
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.isResourceUnlocked('inventory_iron_ore');
    },
    attributes: {
      baseXPCost: 10
    },
    get_cost: function get_cost() {
      return {
        'crafting_slots': {
          A: 1,
          B: 0,
          type: 0
        }
      };
    }
  });
  registerCraftingRecipe('craft_green_ink', {
    tags: ["recipe", "crafting", "material", "physical"],
    name: 'Green Ink',
    isAbstract: false,
    allowedImpacts: ['effects'],
    description: 'Use your herb concentrate to create ink',
    level: 1,
    resourceId: 'inventory_green_ink',
    resourceModifier: {
      get_income: function get_income() {
        return {
          resources: {
            'inventory_green_ink': {
              A: 1.3,
              B: 0.02 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('crafting_efficiency'),
              type: 1
            }
          }
        };
      },
      get_consumption: function get_consumption() {
        return {
          resources: {
            'inventory_knowledge_moss': {
              A: 1.5,
              B: 6 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('crafting_materials_discount'),
              type: 1
            },
            'inventory_golden_algae': {
              A: 1.5,
              B: 6 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('crafting_materials_discount'),
              type: 1
            },
            'crafting_ability': {
              A: 1.5,
              B: 2,
              type: 1
            },
            'crafting_slots': {
              A: 1,
              B: 0,
              type: 0,
              ignoreEfficiency: true
            }
          }
        };
      },
      effectDeps: ['crafting_efficiency', 'crafting_materials_discount']
    },
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.isResourceUnlocked('inventory_green_ink');
    },
    attributes: {
      baseXPCost: 10
    },
    get_cost: function get_cost() {
      return {
        'crafting_slots': {
          A: 1,
          B: 0,
          type: 0
        }
      };
    }
  });
  registerCraftingRecipe('craft_red_ink', {
    tags: ["recipe", "crafting", "material", "physical"],
    name: 'Red Ink',
    isAbstract: false,
    allowedImpacts: ['effects'],
    description: 'Use your herb concentrate to create red ink',
    level: 1,
    resourceId: 'inventory_red_ink',
    resourceModifier: {
      get_income: function get_income() {
        return {
          resources: {
            'inventory_red_ink': {
              A: 1.3,
              B: 0.02 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('crafting_efficiency'),
              type: 1
            }
          }
        };
      },
      get_consumption: function get_consumption() {
        return {
          resources: {
            'inventory_ember_leaf': {
              A: 1.5,
              B: 2 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('crafting_materials_discount'),
              type: 1
            },
            'inventory_harmony_blossom': {
              A: 1.5,
              B: 2 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('crafting_materials_discount'),
              type: 1
            },
            'crafting_ability': {
              A: 1.5,
              B: 4,
              type: 1
            },
            'crafting_slots': {
              A: 1,
              B: 0,
              type: 0,
              ignoreEfficiency: true
            }
          }
        };
      },
      effectDeps: ['crafting_efficiency', 'crafting_materials_discount']
    },
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.isResourceUnlocked('inventory_red_ink');
    },
    attributes: {
      baseXPCost: 10
    },
    get_cost: function get_cost() {
      return {
        'crafting_slots': {
          A: 1,
          B: 0,
          type: 0
        }
      };
    }
  });
  registerCraftingRecipe('craft_map_fragment', {
    tags: ["recipe", "crafting", "material", "physical"],
    name: 'Map Fragment',
    isAbstract: false,
    allowedImpacts: ['effects'],
    description: 'Create map fragments and turn them into reality with your magic',
    level: 1,
    resourceId: 'inventory_map_fragment',
    resourceModifier: {
      get_income: function get_income() {
        return {
          resources: {
            'inventory_map_fragment': {
              A: 1.3,
              B: 0.02 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('crafting_efficiency'),
              type: 1
            }
          }
        };
      },
      get_consumption: function get_consumption() {
        return {
          resources: {
            'inventory_paper': {
              A: 1.5,
              B: 6 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('crafting_materials_discount'),
              type: 1
            },
            'inventory_green_ink': {
              A: 1.5,
              B: 1 / 1.5 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('crafting_materials_discount'),
              type: 1
            },
            'crafting_ability': {
              A: 1.5,
              B: 4,
              type: 1
            },
            'crafting_slots': {
              A: 1,
              B: 0,
              type: 0,
              ignoreEfficiency: true
            }
          }
        };
      },
      effectDeps: ['crafting_efficiency', 'crafting_materials_discount']
    },
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.isResourceUnlocked('inventory_map_fragment');
    },
    attributes: {
      baseXPCost: 10
    },
    get_cost: function get_cost() {
      return {
        'crafting_slots': {
          A: 1,
          B: 0,
          type: 0
        }
      };
    }
  });

  // alchemy

  registerCraftingRecipe('craft_small_endurance_flask', {
    tags: ["recipe", "crafting", "alchemy", "physical"],
    name: 'Craft Small Endurance Flask',
    isAbstract: false,
    allowedImpacts: ['effects'],
    description: 'Use your herbs to create more efficient substance to boost your energy',
    level: 1,
    resourceId: 'inventory_small_endurance_flask',
    resourceModifier: {
      get_income: function get_income() {
        return {
          resources: {
            'inventory_small_endurance_flask': {
              A: 1.3,
              B: 1 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('alchemy_efficiency'),
              type: 1
            }
          }
        };
      },
      get_consumption: function get_consumption() {
        return {
          resources: {
            'inventory_ginseng': {
              A: 1.5,
              B: 5 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('alchemy_materials_discount'),
              type: 1
            },
            'inventory_berry': {
              A: 1.5,
              B: 25 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('alchemy_materials_discount'),
              type: 1
            },
            'alchemy_ability': {
              A: 1.5,
              B: 1,
              type: 1
            },
            'alchemy_slots': {
              A: 1,
              B: 0,
              type: 0,
              ignoreEfficiency: true
            }
          }
        };
      },
      effectDeps: ['alchemy_efficiency', 'alchemy_materials_discount']
    },
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_alchemy_courses') > 0;
    },
    attributes: {
      baseXPCost: 10
    },
    get_cost: function get_cost() {
      return {
        'alchemy_slots': {
          A: 1,
          B: 0,
          type: 0
        }
      };
    }
  });
  registerCraftingRecipe('craft_healing_potion', {
    tags: ["recipe", "crafting", "alchemy", "physical"],
    name: 'Craft Small Healing Potion',
    isAbstract: false,
    allowedImpacts: ['effects'],
    description: 'Use healing herbs concentrate to save yourself from falling deceased',
    level: 1,
    resourceId: 'inventory_healing_potion',
    resourceModifier: {
      get_income: function get_income() {
        return {
          resources: {
            'inventory_healing_potion': {
              A: 1.3,
              B: 1 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('alchemy_efficiency'),
              type: 1
            }
          }
        };
      },
      get_consumption: function get_consumption() {
        return {
          resources: {
            'inventory_aloe_vera': {
              A: 1.5,
              B: 5 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('alchemy_materials_discount'),
              type: 1
            },
            'inventory_berry': {
              A: 1.5,
              B: 25 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('alchemy_materials_discount'),
              type: 1
            },
            'alchemy_ability': {
              A: 1.5,
              B: 1,
              type: 1
            },
            'alchemy_slots': {
              A: 1,
              B: 0,
              type: 0,
              ignoreEfficiency: true
            }
          }
        };
      },
      effectDeps: ['alchemy_efficiency', 'alchemy_materials_discount']
    },
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_alchemy_courses') > 0;
    },
    attributes: {
      baseXPCost: 10
    },
    get_cost: function get_cost() {
      return {
        'alchemy_slots': {
          A: 1,
          B: 0,
          type: 0
        }
      };
    }
  });
  registerCraftingRecipe('craft_experience_potion', {
    tags: ["recipe", "crafting", "alchemy", "physical"],
    name: 'Craft Small Experience Potion',
    isAbstract: false,
    allowedImpacts: ['effects'],
    description: 'Use experimental and dangerous herbs at your risk in searching for better understanding of human and mages being',
    level: 1,
    resourceId: 'inventory_experience_potion',
    resourceModifier: {
      get_income: function get_income() {
        return {
          resources: {
            'inventory_experience_potion': {
              A: 1.3,
              B: 0.1 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('alchemy_efficiency'),
              type: 1
            }
          }
        };
      },
      get_consumption: function get_consumption() {
        return {
          resources: {
            'inventory_nightshade': {
              A: 1.5,
              B: 2.5 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('alchemy_materials_discount'),
              type: 1
            },
            'inventory_fly_mushroom': {
              A: 1.5,
              B: 10 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('alchemy_materials_discount'),
              type: 1
            },
            'alchemy_ability': {
              A: 1.5,
              B: 2. / 1.5,
              type: 1
            },
            'alchemy_slots': {
              A: 1,
              B: 0,
              type: 0,
              ignoreEfficiency: true
            }
          }
        };
      },
      effectDeps: ['alchemy_efficiency', 'alchemy_materials_discount']
    },
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_alchemy_courses') > 0;
    },
    attributes: {
      baseXPCost: 10
    },
    get_cost: function get_cost() {
      return {
        'alchemy_slots': {
          A: 1,
          B: 0,
          type: 0
        }
      };
    }
  });
  registerCraftingRecipe('craft_insight_potion', {
    tags: ["recipe", "crafting", "alchemy", "physical"],
    name: 'Craft Insight Potion',
    isAbstract: false,
    allowedImpacts: ['effects'],
    description: 'A simple yet potent concoction brewed from golden algae and knowledge moss. Consuming it grants a one-time surge in experience.',
    level: 1,
    resourceId: 'inventory_insight_potion',
    resourceModifier: {
      get_income: function get_income() {
        return {
          resources: {
            'inventory_insight_potion': {
              A: 1.3,
              B: 0.1 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('alchemy_efficiency'),
              type: 1
            }
          }
        };
      },
      get_consumption: function get_consumption() {
        return {
          resources: {
            'inventory_knowledge_moss': {
              A: 1.5,
              B: 75 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('alchemy_materials_discount'),
              type: 1
            },
            'inventory_golden_algae': {
              A: 1.5,
              B: 250 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('alchemy_materials_discount'),
              type: 1
            },
            'alchemy_ability': {
              A: 1.5,
              B: 2. / 1.5,
              type: 1
            },
            'alchemy_slots': {
              A: 1,
              B: 0,
              type: 0,
              ignoreEfficiency: true
            }
          }
        };
      },
      effectDeps: ['alchemy_efficiency', 'alchemy_materials_discount']
    },
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_alchemy_courses') > 0;
    },
    attributes: {
      baseXPCost: 10
    },
    get_cost: function get_cost() {
      return {
        'alchemy_slots': {
          A: 1,
          B: 0,
          type: 0
        }
      };
    }
  });
  registerCraftingRecipe('craft_amnesia_potion', {
    tags: ["recipe", "crafting", "alchemy", "physical"],
    name: 'Amnesia Potion',
    isAbstract: false,
    allowedImpacts: ['effects'],
    description: 'Forget your previously learned skills, feel yourself refreshed. Of course, it will have consequences',
    level: 1,
    resourceId: 'inventory_amnesia_potion',
    resourceModifier: {
      get_income: function get_income() {
        return {
          resources: {
            'inventory_amnesia_potion': {
              A: 1.3,
              B: 0.1 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('alchemy_efficiency'),
              type: 1
            }
          }
        };
      },
      get_consumption: function get_consumption() {
        return {
          resources: {
            'inventory_nightshade': {
              A: 1.5,
              B: 100 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('alchemy_materials_discount'),
              type: 1
            },
            'inventory_fly_mushroom': {
              A: 1.5,
              B: 1000 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('alchemy_materials_discount'),
              type: 1
            },
            'alchemy_ability': {
              A: 1.5,
              B: 2. / 1.5,
              type: 1
            },
            'alchemy_slots': {
              A: 1,
              B: 0,
              type: 0,
              ignoreEfficiency: true
            }
          }
        };
      },
      effectDeps: ['alchemy_efficiency', 'alchemy_materials_discount']
    },
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_alchemy_courses') > 0;
    },
    attributes: {
      baseXPCost: 10
    },
    get_cost: function get_cost() {
      return {
        'alchemy_slots': {
          A: 1,
          B: 0,
          type: 0
        }
      };
    }
  });
  registerCraftingRecipe('craft_crafting_potion', {
    tags: ["recipe", "crafting", "alchemy", "physical"],
    name: 'Crafting Potion',
    isAbstract: false,
    allowedImpacts: ['effects'],
    description: 'Dangerous and toxic but still powerful elixir providing boost to your crafting efficiency',
    level: 1,
    resourceId: 'inventory_crafting_potion',
    resourceModifier: {
      get_income: function get_income() {
        return {
          resources: {
            'inventory_crafting_potion': {
              A: 1.3,
              B: 0.05 * game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('alchemy_efficiency'),
              type: 1
            }
          }
        };
      },
      get_consumption: function get_consumption() {
        return {
          resources: {
            'inventory_ember_leaf': {
              A: 1.5,
              B: 5 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('alchemy_materials_discount'),
              type: 1
            },
            'inventory_fly_mushroom': {
              A: 1.5,
              B: 500 / game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffectValue('alchemy_materials_discount'),
              type: 1
            },
            'alchemy_ability': {
              A: 1.5,
              B: 8. / 1.5,
              type: 1
            },
            'alchemy_slots': {
              A: 1,
              B: 0,
              type: 0,
              ignoreEfficiency: true
            }
          }
        };
      },
      effectDeps: ['alchemy_efficiency', 'alchemy_materials_discount']
    },
    unlockCondition: function unlockCondition() {
      return game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getLevel('shop_item_alchemy_courses') > 0 && game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.isResourceUnlocked('inventory_ember_leaf');
    },
    attributes: {
      baseXPCost: 10
    },
    get_cost: function get_cost() {
      return {
        'alchemy_slots': {
          A: 1,
          B: 0,
          type: 0
        }
      };
    }
  });
};

//# sourceURL=webpack://idlemancery-v2-reworked/./src/worker/modules/workshop/recipes-db.js?
