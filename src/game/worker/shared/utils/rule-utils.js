import * as game_framework__WEBPACK_IMPORTED_MODULE_0__ from '../../../framework/index.js';

var checkMatchingResourceRule = function checkMatchingResourceRule(rule, key) {
  var resource = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameResources.getResource(rule.resource_id);
  if (!resource) return false;
  var compare = resource[key];
  if (rule.value_type === 'percentage') {
    if (!resource.cap) return false;
    compare = 100 * resource[key] / resource.cap;
  }
  switch (rule.condition) {
    case 'less':
      return compare < +rule.value;
    case 'less_or_eq':
      return compare <= +rule.value;
    case 'eq':
      return compare == +rule.value;
    case 'grt_or_eq':
      return compare >= +rule.value;
    case 'grt':
      return compare > +rule.value;
  }
  return false;
};
var checkMatchingActionRule = function checkMatchingActionRule(rule) {
  var actionRunning = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('actions').isRunningAction(rule.action_id);
  switch (rule.condition) {
    case 'true':
      return !!actionRunning;
    case 'false':
      return !actionRunning;
  }
  return false;
};
var checkMatchingActionListRule = function checkMatchingActionListRule(rule) {
  var _gameCore$getModule$l;
  var actionListRunning = ((_gameCore$getModule$l = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('actions').lists.runningList) === null || _gameCore$getModule$l === void 0 ? void 0 : _gameCore$getModule$l.id) === rule.action_list_id;
  switch (rule.condition) {
    case 'true':
      return !!actionListRunning;
    case 'false':
      return !actionListRunning;
  }
  return false;
};
var checkMatchingSpellRunningRule = function checkMatchingSpellRunningRule(rule) {
  var _gameCore$getModule$s;
  var spellIsRunning = (_gameCore$getModule$s = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('magic').spells[rule.spell_id]) === null || _gameCore$getModule$s === void 0 ? void 0 : _gameCore$getModule$s.isRunning;
  switch (rule.condition) {
    case 'true':
      return !!spellIsRunning;
    case 'false':
      return !spellIsRunning;
  }
  return false;
};
var checkMatchingActionTagRule = function checkMatchingActionTagRule(rule) {
  var actionRunning = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('actions').isRunningActionWithTag(rule.tag);
  switch (rule.condition) {
    case 'true':
      return !!actionRunning;
    case 'false':
      return !actionRunning;
  }
  return false;
};
var checkMatchingCraftingListRule = function checkMatchingCraftingListRule(rule) {
  var _gameCore$getModule$l2;
  var listRunning = ((_gameCore$getModule$l2 = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameCore.getModule('crafting').lists.runningList) === null || _gameCore$getModule$l2 === void 0 || (_gameCore$getModule$l2 = _gameCore$getModule$l2.crafting) === null || _gameCore$getModule$l2 === void 0 ? void 0 : _gameCore$getModule$l2.id) == rule.crafting_list_id;

  // console.log('CraftingList: ', gameCore.getModule('crafting').lists.runningList?.crafting, rule);

  switch (rule.condition) {
    case 'true':
      return !!listRunning;
    case 'false':
      return !listRunning;
  }
  return false;
};
var checkMatchingActionLevelRule = function checkMatchingActionLevelRule(rule, key) {
  var action = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEntity.getEntity(rule.action_id);
  if (!action) return false;
  var compare = action.level;
  switch (rule.condition) {
    case 'less':
      return compare < +rule.value;
    case 'less_or_eq':
      return compare <= +rule.value;
    case 'eq':
      return compare == +rule.value;
    case 'grt_or_eq':
      return compare >= +rule.value;
    case 'grt':
      return compare > +rule.value;
  }
  return false;
};
var checkMatchingAttributeValueRule = function checkMatchingAttributeValueRule(rule) {
  var attr = game_framework__WEBPACK_IMPORTED_MODULE_0__.gameEffects.getEffect(rule.attribute_id);
  if (!attr) return false;
  var compare = attr.value;
  switch (rule.condition) {
    case 'less':
      return compare < +rule.value;
    case 'less_or_eq':
      return compare <= +rule.value;
    case 'eq':
      return compare == +rule.value;
    case 'grt_or_eq':
      return compare >= +rule.value;
    case 'grt':
      return compare > +rule.value;
  }
  return false;
};
var checkMatchingRule = function checkMatchingRule(rule) {
  if (rule.compare_type === 'resource_amount') {
    return checkMatchingResourceRule(rule, 'amount');
  }
  if (rule.compare_type === 'resource_balance') {
    return checkMatchingResourceRule(rule, 'balance');
  }
  if (rule.compare_type === 'running_action') {
    return checkMatchingActionRule(rule);
  }
  if (rule.compare_type === 'running_action_tag') {
    return checkMatchingActionTagRule(rule);
  }
  if (rule.compare_type === 'action_level') {
    return checkMatchingActionLevelRule(rule);
  }
  if (rule.compare_type === 'running_action_list') {
    return checkMatchingActionListRule(rule);
  }
  if (rule.compare_type === 'spell_running') {
    return checkMatchingSpellRunningRule(rule);
  }
  if (rule.compare_type === 'crafting_list_running') {
    return checkMatchingCraftingListRule(rule);
  }
  if (rule.compare_type === 'attribute_value') {
    return checkMatchingAttributeValueRule(rule);
  }
};
var checkMatchingRules = function checkMatchingRules(rules) {
  var conditionStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var bExplain = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!rules.length) {
    if (!bExplain) return true;
    return {
      ruleResults: [],
      result: true
    };
  }
  var ruleResults = rules.map(function (rule) {
    return checkMatchingRule(rule);
  });
  if (!conditionStr) {
    if (!bExplain) {
      return ruleResults.every(function (result) {
        return result === true;
      });
    }
    return {
      ruleResults: ruleResults,
      result: ruleResults.length && ruleResults.every(function (result) {
        return result === true;
      })
    };
  }
  var conditionExpression = conditionStr;
  ruleResults.forEach(function (result, index) {
    conditionExpression = conditionExpression.replace(new RegExp("\\b".concat(index + 1, "\\b"), 'g'), result);
  });
  conditionExpression = conditionExpression.replace(/\bAND\b/g, '&&').replace(/\bOR\b/g, '||').replace(/\bNOT\b/g, '!');
  try {
    if (!bExplain) return eval(conditionExpression); // Виконуємо вираз

    return {
      ruleResults: ruleResults,
      result: eval(conditionExpression)
    };
  } catch (error) {
    console.error("Invalid condition string", error);
    return false;
  }
};
