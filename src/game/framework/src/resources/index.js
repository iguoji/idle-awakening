import * as game_resources from './game-resources.js';
import * as resource_modifiers from './resource-modifiers.js';
import * as resource_calculators from './resource-calculators.js';
import * as game_effects from './game-effects.js';
import * as resource_api from './resource-api.js';
import * as consts from '../utils/consts.js';

class ResourcesManager {

    constructor() {
        ResourcesManager.instance = this;
    }

    initialize() {
        for(const resourceId in game_resources.gameResources.resources) {
            resource_calculators.resourceCalculators.assertResource(resourceId);
        }
    }

    tick(dT) {
        let isAssertsFinished = false;
        const start = performance.now();
        // console.log('iter started: ', JSON.parse(JSON.stringify(gameResources.resources['crafting_ability'])));
        game_resources.gameResources.handleDelayed();
        let maxIter = 10;
        let iter = 0;
        // console.log('START_ITER: EntEEF', resourceModifiers.getModifier('entity_runningAction').efficiency);
        // console.log('asserting: ', JSON.parse(JSON.stringify(gameResources.resources['crafting_ability'])));
        let resourcesToUpdate = [];
        for (const resourceId in game_resources.gameResources.resources) {
            resourcesToUpdate.push(resourceId);
        }

        while(!isAssertsFinished) {
            isAssertsFinished = true;
            iter++;
            let newResourcesToUpdate = [];
            for(const resourceId of resourcesToUpdate) {
                if(game_resources.gameResources.resources[resourceId].balance) {
                    if(game_resources.gameResources.resources[resourceId].isService && game_resources.gameResources.resources[resourceId].balance < -consts.SMALL_NUMBER) {
                        // we are missing service resource
                        const effPercentage = game_resources.gameResources.resources[resourceId].multiplier * game_resources.gameResources.resources[resourceId].income / game_resources.gameResources.resources[resourceId].consumption;
                        const togg = resource_calculators.resourceCalculators.toggleConsumingEfficiency(resourceId, effPercentage, true);
                        newResourcesToUpdate.push(...togg.affectedResourceIds)
                        game_resources.gameResources.resources[resourceId].isMissing = true;
                        game_resources.gameResources.resources[resourceId].amount = 0;
                        game_resources.gameResources.resources[resourceId].targetEfficiency = effPercentage * game_resources.gameResources.resources[resourceId].targetEfficiency;
                        console.log(`Iter${iter}: ${resourceId} is missing: `, effPercentage, game_resources.gameResources.resources[resourceId].targetEfficiency, game_resources.gameResources.listMissing(), JSON.parse(JSON.stringify(game_resources.gameResources.resources[resourceId])))
                        isAssertsFinished = false;
                    } else
                    if(-1*game_resources.gameResources.resources[resourceId].balance*dT - consts.SMALL_NUMBER > game_resources.gameResources.resources[resourceId].amount) {
                        // now we should retain list of stuff consuming
                        const effPercentage = game_resources.gameResources.resources[resourceId].multiplier * game_resources.gameResources.resources[resourceId].income / game_resources.gameResources.resources[resourceId].consumption;
                        // console.log('resource is finishing: ', resourceId, gameResources.resources[resourceId].balance, effPercentage);
                        const togg = resource_calculators.resourceCalculators.toggleConsumingEfficiency(resourceId, effPercentage, true);
                        newResourcesToUpdate.push(...togg.affectedResourceIds)
                        game_resources.gameResources.resources[resourceId].isMissing = true;
                        game_resources.gameResources.resources[resourceId].amount = 0;
                        game_resources.gameResources.resources[resourceId].targetEfficiency = effPercentage * game_resources.gameResources.resources[resourceId].targetEfficiency;
                        console.log(`Iter${iter}: ${resourceId} is missing: `, effPercentage, game_resources.gameResources.resources[resourceId].targetEfficiency, game_resources.gameResources.listMissing(), JSON.parse(JSON.stringify(game_resources.gameResources.resources[resourceId])))
                        isAssertsFinished = false;
                    } else {
                        if (game_resources.gameResources.resources[resourceId].isMissing && game_resources.gameResources.resources[resourceId].balance > 0) {
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
                            const prEff = game_resources.gameResources.resources[resourceId].targetEfficiency;
                            const exceedFactor = game_resources.gameResources.resources[resourceId].consumption
                                ? game_resources.gameResources.resources[resourceId].multiplier * game_resources.gameResources.resources[resourceId].income / game_resources.gameResources.resources[resourceId].consumption
                                : 1./Math.max(consts.SMALL_NUMBER, prEff);
                            const affected = resource_calculators.resourceCalculators.toggleConsumingEfficiency(resourceId, exceedFactor, true);
                            game_resources.gameResources.resources[resourceId].targetEfficiency = prEff * exceedFactor;
                            game_resources.gameResources.resources[resourceId].isMissing = game_resources.gameResources.resources[resourceId].targetEfficiency < 1;
                            const prUp = [...newResourcesToUpdate];
                            newResourcesToUpdate.push(resourceId);
                            if(affected.affectedResources) {
                                newResourcesToUpdate.push(...affected.affectedResources);
                            }
                            console.log(`Iter${iter}: Toggling `+resourceId, prEff, 1./(consts.SMALL_NUMBER + prEff), exceedFactor, JSON.parse(JSON.stringify(newResourcesToUpdate)), game_resources.gameResources.listMissing(), JSON.parse(JSON.stringify(game_resources.gameResources.resources[resourceId])));
                            isAssertsFinished = false;
                        }
                    }
                    resourcesToUpdate = [...new Set(newResourcesToUpdate)];
                }
            }
            // console.log(`Iter: ${iter}`, resourcesToUpdate.length, newResourcesToUpdate, JSON.parse(JSON.stringify(gameResources.resources)));
            if(iter > maxIter) {
                console.error('CRITICAL ERROR: not able to find resources divergence.', JSON.parse(JSON.stringify(game_resources.gameResources.resources)), game_resources.gameResources.listMissing());
                isAssertsFinished = true;
            }
        }
        const end = performance.now();
        // console.log('FINISH_ITER: EntEEF', end - start, resourceModifiers.getModifier('entity_runningAction').efficiency);

        for(const resourceId in game_resources.gameResources.resources) {
            if(game_resources.gameResources.resources[resourceId].isService) {
                game_resources.gameResources.setResource(resourceId, game_resources.gameResources.resources[resourceId].balance, false, true);
            } else {
                game_resources.gameResources.addResource(resourceId, game_resources.gameResources.resources[resourceId].balance*dT, true);
            }

        }


        // console.log('iter ended: ', JSON.parse(JSON.stringify(gameResources.resources['crafting_ability'])));

        // console.log('END_UP: EntEEF', resourceModifiers.getModifier('entity_runningAction').efficiency);

    }

    reassertAll() {
        for(const modifierId in resource_modifiers.resourceModifiers.modifiers) {
            resource_modifiers.resourceModifiers.cacheModifier(modifierId);
            resource_calculators.resourceCalculators.regenerateModifier(modifierId)
        }

    }

}

const resourcesManager = ResourcesManager.instance || new ResourcesManager();

export const gameEffects = game_effects.gameEffects;
export const gameResources = game_resources.gameResources;
export const resourceApi = resource_api.resourceApi;
export const resourceCalculators = resource_calculators.resourceCalculators;
export const resourceModifiers = resource_modifiers.resourceModifiers;
export { resourcesManager };
