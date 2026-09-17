import * as _game_resources__WEBPACK_IMPORTED_MODULE_0__ from './game-resources.js';
import * as _resource_modifiers__WEBPACK_IMPORTED_MODULE_1__ from './resource-modifiers.js';
import * as _resource_calculators__WEBPACK_IMPORTED_MODULE_2__ from './resource-calculators.js';
import * as _game_effects__WEBPACK_IMPORTED_MODULE_3__ from './game-effects.js';
import * as _resource_api__WEBPACK_IMPORTED_MODULE_4__ from './resource-api.js';
import * as _utils_consts__WEBPACK_IMPORTED_MODULE_5__ from '../utils/consts.js';

class ResourcesManager {

    constructor() {
        ResourcesManager.instance = this;
    }

    initialize() {
        for(const resourceId in _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources) {
            _resource_calculators__WEBPACK_IMPORTED_MODULE_2__.resourceCalculators.assertResource(resourceId);
        }
    }

    tick(dT) {
        let isAssertsFinished = false;
        const start = performance.now();
        // console.log('iter started: ', JSON.parse(JSON.stringify(gameResources.resources['crafting_ability'])));
        _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.handleDelayed();
        let maxIter = 10;
        let iter = 0;
        // console.log('START_ITER: EntEEF', resourceModifiers.getModifier('entity_runningAction').efficiency);
        // console.log('asserting: ', JSON.parse(JSON.stringify(gameResources.resources['crafting_ability'])));
        let resourcesToUpdate = [];
        for (const resourceId in _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources) {
            resourcesToUpdate.push(resourceId);
        }

        while(!isAssertsFinished) {
            isAssertsFinished = true;
            iter++;
            let newResourcesToUpdate = [];
            for(const resourceId of resourcesToUpdate) {
                if(_game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].balance) {
                    if(_game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].isService && _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].balance < -_utils_consts__WEBPACK_IMPORTED_MODULE_5__.SMALL_NUMBER) {
                        // we are missing service resource
                        const effPercentage = _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].multiplier * _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].income / _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].consumption;
                        const togg = _resource_calculators__WEBPACK_IMPORTED_MODULE_2__.resourceCalculators.toggleConsumingEfficiency(resourceId, effPercentage, true);
                        newResourcesToUpdate.push(...togg.affectedResourceIds)
                        _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].isMissing = true;
                        _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].amount = 0;
                        _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].targetEfficiency = effPercentage * _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].targetEfficiency;
                        console.log(`Iter${iter}: ${resourceId} is missing: `, effPercentage, _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].targetEfficiency, _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.listMissing(), JSON.parse(JSON.stringify(_game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId])))
                        isAssertsFinished = false;
                    } else
                    if(-1*_game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].balance*dT - _utils_consts__WEBPACK_IMPORTED_MODULE_5__.SMALL_NUMBER > _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].amount) {
                        // now we should retain list of stuff consuming
                        const effPercentage = _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].multiplier * _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].income / _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].consumption;
                        // console.log('resource is finishing: ', resourceId, gameResources.resources[resourceId].balance, effPercentage);
                        const togg = _resource_calculators__WEBPACK_IMPORTED_MODULE_2__.resourceCalculators.toggleConsumingEfficiency(resourceId, effPercentage, true);
                        newResourcesToUpdate.push(...togg.affectedResourceIds)
                        _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].isMissing = true;
                        _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].amount = 0;
                        _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].targetEfficiency = effPercentage * _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].targetEfficiency;
                        console.log(`Iter${iter}: ${resourceId} is missing: `, effPercentage, _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].targetEfficiency, _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.listMissing(), JSON.parse(JSON.stringify(_game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId])))
                        isAssertsFinished = false;
                    } else {
                        if (_game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].isMissing && _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].balance > 0) {
                            // console.log('Toggling '+resourceId);
                            // ми тугланули на 100% ресурс котрий ми начебто міссили. (crafting_ability)
                            // але цей тугл тягне за собою необхідність апдейту тих resourceModifiers, у яких ботлнек - цей ресурс
                            // Ми апдейтимо ефективність крафту паперу на 1, але у магічного паперу ботлнек - папір, якого ми не чіпаємо
                            // Тому, нам потрібно також перевіряти список ресурсів, у яких баланс > 0 і ми їх місаємо.
                            // Для таких ресурсів вартувало б ресетити ефективність
                            // Якщо ми ресетнемо ефективність паперу, позаяк його баланс є > 0, і він міссінг - це призведе
                            // до того, що баланс паперу знову стане негативним, і ми будемо змушені його перерахувати.
                            // Для того нам потрібно баланс паперу додавати в масив
                            // Як знати що саме його додати - це ресурс, який генерується чи мультиплікується ентітьою,
                            // котрій ми шомно ресетнули
                            // Тобто, якщо ми ресетнули ефективність по ресурсу crafting_ability - перевіряємо усе що генерилося
                            // тим що консюмить resourceId, і докидуємо ссууудааа
                            const prEff = _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].targetEfficiency;
                            const exceedFactor = _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].consumption
                                ? _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].multiplier * _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].income / _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].consumption
                                : 1./Math.max(_utils_consts__WEBPACK_IMPORTED_MODULE_5__.SMALL_NUMBER, prEff);
                            const affected = _resource_calculators__WEBPACK_IMPORTED_MODULE_2__.resourceCalculators.toggleConsumingEfficiency(resourceId, exceedFactor, true);
                            _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].targetEfficiency = prEff * exceedFactor;
                            _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].isMissing = _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].targetEfficiency < 1;
                            const prUp = [...newResourcesToUpdate];
                            newResourcesToUpdate.push(resourceId);
                            if(affected.affectedResources) {
                                newResourcesToUpdate.push(...affected.affectedResources);
                            }
                            console.log(`Iter${iter}: Toggling `+resourceId, prEff, 1./(_utils_consts__WEBPACK_IMPORTED_MODULE_5__.SMALL_NUMBER + prEff), exceedFactor, JSON.parse(JSON.stringify(newResourcesToUpdate)), _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.listMissing(), JSON.parse(JSON.stringify(_game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId])));
                            isAssertsFinished = false;
                        }
                    }
                    resourcesToUpdate = [...new Set(newResourcesToUpdate)];
                }
            }
            // console.log(`Iter: ${iter}`, resourcesToUpdate.length, newResourcesToUpdate, JSON.parse(JSON.stringify(gameResources.resources)));
            if(iter > maxIter) {
                console.error('CRITICAL ERROR: not able to find resources divergence.', JSON.parse(JSON.stringify(_game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources)), _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.listMissing());
                isAssertsFinished = true;
            }
        }
        const end = performance.now();
        // console.log('FINISH_ITER: EntEEF', end - start, resourceModifiers.getModifier('entity_runningAction').efficiency);

        for(const resourceId in _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources) {
            if(_game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].isService) {
                _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.setResource(resourceId, _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].balance, false, true);
            } else {
                _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.addResource(resourceId, _game_resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.resources[resourceId].balance*dT, true);
            }

        }


        // console.log('iter ended: ', JSON.parse(JSON.stringify(gameResources.resources['crafting_ability'])));

        // console.log('END_UP: EntEEF', resourceModifiers.getModifier('entity_runningAction').efficiency);

    }

    reassertAll() {
        for(const modifierId in _resource_modifiers__WEBPACK_IMPORTED_MODULE_1__.resourceModifiers.modifiers) {
            _resource_modifiers__WEBPACK_IMPORTED_MODULE_1__.resourceModifiers.cacheModifier(modifierId);
            _resource_calculators__WEBPACK_IMPORTED_MODULE_2__.resourceCalculators.regenerateModifier(modifierId)
        }

    }

}

const resourcesManager = ResourcesManager.instance || new ResourcesManager();
