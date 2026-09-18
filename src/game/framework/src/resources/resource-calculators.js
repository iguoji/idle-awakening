import * as resource_modifiers from './resource-modifiers.js';
import * as formulas from '../utils/formulas.js';
import * as game_resources from './game-resources.js';
import * as game_effects from './game-effects.js';
import * as consts from '../utils/consts.js';

class ResourceCalculators {
    constructor() {
        ResourceCalculators.instance = this;
    }


    getResourceBreakdowns(id) {
        const byRes = resource_modifiers.resourceModifiers.modifiersGroupped.byResource[id];

        const modifiersBreakdown = {
            income: [],
            multiplier: [],
            consumption: [],
            rawCap: [],
            capMult: [],
            modifiers: 0,
        };
        byRes?.income?.forEach(mod => {
            const rmod = resource_modifiers.resourceModifiers.getModifier(mod);
            if (rmod.level === 0) {
                return;
            }
            if (rmod.efficiency === 0) {
                return;
            }
            let intensityMultiplier = rmod.effectFactor;
            if(rmod.getCustomAmplifier && rmod.customAmplifierApplyTypes.includes('resources')) {
                intensityMultiplier *= rmod.getCustomAmplifier();
            }
            if (rmod.income?.resources?.[id]) {
                const inc = formulas.Formulas.calculateValue(rmod.income?.resources?.[id], rmod.level) * rmod.efficiency * intensityMultiplier;
                if(inc != null && inc > consts.SMALL_NUMBER) {

                    modifiersBreakdown.income.push({
                        id: mod,
                        name: rmod.name,
                        value: inc,
                        label: rmod.income?.resources?.[id]?.label ?? rmod.name,
                    })
                    modifiersBreakdown.modifiers++;
                }
            }
        });
        byRes?.multiplier?.forEach(mod => {
            const rmod = resource_modifiers.resourceModifiers.getModifier(mod);
            if (rmod.level === 0) {
                return;
            }
            if (rmod.efficiency === 0) {
                return;
            }
            let intensityMultiplier = rmod.effectFactor;
            if(rmod.getCustomAmplifier && rmod.customAmplifierApplyTypes.includes('resources')) {
                intensityMultiplier *= rmod.getCustomAmplifier();
            }
            if (rmod.multiplier?.resources?.[id]) {
                const amt = formulas.Formulas.calculateValue(rmod.multiplier?.resources?.[id], rmod.level * rmod.efficiency * intensityMultiplier);

                modifiersBreakdown.multiplier.push({
                    id: mod,
                    name: rmod.name,
                    value: amt,
                    label: rmod.multiplier?.resources?.[id]?.label ?? rmod.name,
                })
                modifiersBreakdown.modifiers++;
            }
        });
        byRes?.consumption?.forEach(mod => {
            const rmod = resource_modifiers.resourceModifiers.getModifier(mod);
            if (rmod.level === 0) {
                return;
            }
            let intensityMultiplier = rmod.effectFactor;
            if(rmod.getCustomAmplifier && rmod.customAmplifierApplyTypes.includes('resources')) {
                intensityMultiplier *= rmod.getCustomAmplifier();
            }
            if (rmod.consumption?.effects?.[id]) {
                const relevantEfficiency = rmod.consumption?.resources?.[id]?.ignoreEfficiency ? 1 : rmod.efficiency;
                if (relevantEfficiency === 0) {
                    return;
                }
                const amt = formulas.Formulas.calculateValue(rmod.consumption?.resources?.[id], rmod.level) * relevantEfficiency * intensityMultiplier;
                modifiersBreakdown.consumption.push({
                    id: mod,
                    name: rmod.name,
                    value: amt,
                    label: rmod.consumption?.resources?.[id]?.label ?? rmod.name,
                })
                modifiersBreakdown.modifiers++;

            }
        });
        byRes?.rawCap?.forEach(mod => {
            const rmod = resource_modifiers.resourceModifiers.getModifier(mod);
            if (rmod.level === 0) {
                return;
            }
            if (rmod.efficiency === 0) {
                return;
            }
            let intensityMultiplier = rmod.effectFactor;
            if(rmod.getCustomAmplifier && rmod.customAmplifierApplyTypes.includes('resources')) {
                intensityMultiplier *= rmod.getCustomAmplifier();
            }
            if (rmod.rawCap?.effects?.[id]) {
                const amt = formulas.Formulas.calculateValue(rmod.rawCap?.resources?.[id], rmod.level) * rmod.efficiency * intensityMultiplier;
                modifiersBreakdown.rawCap.push({
                    id: mod,
                    name: rmod.name,
                    value: amt,
                    label: rmod.rawCap?.resources?.[id]?.label ?? rmod.name,
                })
                modifiersBreakdown.modifiers++;
            }
        });
        byRes?.capMult?.forEach(mod => {
            const rmod = resource_modifiers.resourceModifiers.getModifier(mod);
            if (rmod.level === 0) {
                return;
            }
            if (rmod.efficiency === 0) {
                return;
            }

            let intensityMultiplier = rmod.effectFactor;
            if(rmod.getCustomAmplifier && rmod.customAmplifierApplyTypes.includes('resources')) {
                intensityMultiplier *= rmod.getCustomAmplifier();
            }

            if(rmod.capMult?.effects?.[id]) {
                const amt = formulas.Formulas.calculateValue(rmod.capMult?.resources?.[id], rmod.level*rmod.efficiency*intensityMultiplier);
                modifiersBreakdown.capMult.push({
                    id: mod,
                    name: rmod.name,
                    value: amt,
                    label: rmod.capMult?.resources?.[id]?.label ?? rmod.name,
                })
                modifiersBreakdown.modifiers++;
            }
        });

        return modifiersBreakdown;
    }

    assertResource(id, doUpdate = true, skipByTags = []) {
        // now we walking through all the modifiers
        let income = 0;
        let multiplier = 1;
        let consumption = 0;
        let rawCap = 0;
        let capMult = 1;
        let effectIncome = 0;
        let effectMultiplier = 1;

        const modifiersBreakdown = {
            income: [],
            multiplier: [],
            consumption: []
        };

        const storageBreakdown = {
            income: [],
            multiplier: []
        }
        //
        const byRes = resource_modifiers.resourceModifiers.modifiersGroupped.byResource[id];
        resource_modifiers.resourceModifiers.modifiersGroupped.byResource[id]?.income?.forEach(mod => {
            const rmod = resource_modifiers.resourceModifiers.getModifier(mod);
            if(skipByTags.some(tag => rmod.tags.includes(tag))) {
                return;
            }
            if (rmod.efficiency === 0) {
                return;
            }
            let intensityMultiplier = rmod.effectFactor;
            if(rmod.getCustomAmplifier && rmod.customAmplifierApplyTypes.includes('resources')) {
                intensityMultiplier *= rmod.getCustomAmplifier();
            }
            if (rmod.income?.resources?.[id]) {
                const amt = formulas.Formulas.calculateValue(rmod.income?.resources?.[id], rmod.level);
                if(amt != null && Math.abs(amt) > consts.SMALL_NUMBER) {
                    income += amt * rmod.efficiency * intensityMultiplier;
                    modifiersBreakdown.income.push({
                        id: mod,
                        name: rmod.name,
                        value: amt * rmod.efficiency * intensityMultiplier,
                        label: rmod.income?.resources?.[id]?.label ?? rmod.name,
                    })
                }

            }
        });
        resource_modifiers.resourceModifiers.modifiersGroupped.byResource[id]?.multiplier?.forEach(mod => {
            const rmod = resource_modifiers.resourceModifiers.getModifier(mod);
            if(skipByTags.some(tag => rmod.tags.includes(tag))) {
                return;
            }
            if (rmod.efficiency === 0) {
                return;
            }
            let intensityMultiplier = rmod.effectFactor;
            if(rmod.getCustomAmplifier && rmod.customAmplifierApplyTypes.includes('resources')) {
                intensityMultiplier *= rmod.getCustomAmplifier();
            }
            if (rmod.multiplier?.resources?.[id]) {
                const amt = formulas.Formulas.calculateValue(rmod.multiplier?.resources?.[id], rmod.level * rmod.efficiency * intensityMultiplier);
                multiplier *= amt;
                if(Math.abs(amt - 1) > consts.SMALL_NUMBER) {
                    modifiersBreakdown.multiplier.push({
                        id: mod,
                        name: rmod.name,
                        value: amt,
                        label: rmod.multiplier?.resources?.[id]?.label ?? rmod.name,
                    })
                }

            }
        });
        resource_modifiers.resourceModifiers.modifiersGroupped.byResource[id]?.consumption?.forEach(mod => {
            const rmod = resource_modifiers.resourceModifiers.getModifier(mod);
            if(skipByTags.some(tag => rmod.tags.includes(tag))) {
                return;
            }
            let intensityMultiplier = rmod.effectFactor;
            if(rmod.getCustomAmplifier && rmod.customAmplifierApplyTypes.includes('resources')) {
                intensityMultiplier *= rmod.getCustomAmplifier();
            }
            if (rmod.consumption?.resources?.[id]) {
                const amt = formulas.Formulas.calculateValue(rmod.consumption?.resources?.[id], rmod.level);
                const relevantEfficiency = rmod.consumption?.resources?.[id]?.ignoreEfficiency ? 1 : rmod.efficiency;
                if (relevantEfficiency === 0) {
                    return;
                }
                consumption += amt * relevantEfficiency * intensityMultiplier;
                if(amt > consts.SMALL_NUMBER) {
                    modifiersBreakdown.consumption.push({
                        id: mod,
                        name: rmod.name,
                        value: amt * relevantEfficiency * intensityMultiplier,
                        label: rmod.consumption?.resources?.[id]?.label ?? rmod.name,
                    })
                }

            }
        });
        resource_modifiers.resourceModifiers.modifiersGroupped.byResource[id]?.rawCap?.forEach(mod => {
            const rmod = resource_modifiers.resourceModifiers.getModifier(mod);
            if(skipByTags.some(tag => rmod.tags.includes(tag))) {
                return;
            }
            if (rmod.efficiency === 0) {
                return;
            }
            let intensityMultiplier = rmod.effectFactor;
            if(rmod.getCustomAmplifier && rmod.customAmplifierApplyTypes.includes('resources')) {
                intensityMultiplier *= rmod.getCustomAmplifier();
            }
            if (rmod.rawCap?.resources?.[id]) {
                const amt = formulas.Formulas.calculateValue(rmod.rawCap?.resources?.[id], rmod.level) * rmod.efficiency * intensityMultiplier;

                rawCap += amt;
                if(amt > consts.SMALL_NUMBER) {
                    storageBreakdown.income.push({
                        id: mod,
                        name: rmod.name,
                        value: amt,
                        label: rmod.rawCap?.resources?.[id]?.label ?? rmod.name,
                    })
                }

            }
        });
        resource_modifiers.resourceModifiers.modifiersGroupped.byResource[id]?.capMult?.forEach(mod => {
            const rmod = resource_modifiers.resourceModifiers.getModifier(mod);
            if(skipByTags.some(tag => rmod.tags.includes(tag))) {
                return;
            }
            if (rmod.efficiency === 0) {
                return;
            }
            let intensityMultiplier = rmod.effectFactor;
            if(rmod.getCustomAmplifier && rmod.customAmplifierApplyTypes.includes('resources')) {
                intensityMultiplier *= rmod.getCustomAmplifier();
            }
            if(rmod.capMult?.resources?.[id]) {
                const amt = formulas.Formulas.calculateValue(rmod.capMult?.resources?.[id], rmod.level*rmod.efficiency*intensityMultiplier);
                capMult *= amt;

                if(Math.abs(amt - 1) > consts.SMALL_NUMBER) {
                    storageBreakdown.multiplier.push({
                        id: mod,
                        name: rmod.name,
                        value: amt,
                        label: rmod.capMult?.resources?.[id]?.label ?? rmod.name,
                    })
                }
            }
        });

        if(!doUpdate) {
            return {
                income,
                multiplier,
                consumption,
                rawCap,
                capMult,
                balance: income*multiplier - consumption,
                modifiersBreakdown,
                storageBreakdown
            }
        }

        game_resources.gameResources.setResourceRawIncome(id, income);
        game_resources.gameResources.setResourceMultiplier(id, multiplier);
        game_resources.gameResources.setResourceRawConsumption(id, consumption);
        game_resources.gameResources.setResourceRawCap(id, rawCap);
        game_resources.gameResources.setResourceCapMult(id, capMult);
        game_resources.gameResources.setBreakdown(id, modifiersBreakdown, storageBreakdown);
        // console.log(`asserted[${id}]: `, gameResources.resources[id]);
    }

    getEffectBreakdowns(id) {
        const byRes = resource_modifiers.resourceModifiers.modifiersGroupped.byEffect[id];

        const modifiersBreakdown = {
            income: [],
            multiplier: [],
            consumption: [],
            rawCap: [],
            capMult: [],
            modifiers: 0,
        };
        resource_modifiers.resourceModifiers.modifiersGroupped.byEffect[id]?.income?.forEach(mod => {
            const rmod = resource_modifiers.resourceModifiers.getModifier(mod);
            if (rmod.level === 0) {
                return;
            }
            if (rmod.efficiency === 0) {
                return;
            }
            let intensityMultiplier = rmod.effectFactor;
            if(rmod.getCustomAmplifier && rmod.customAmplifierApplyTypes.includes('effects')) {
                intensityMultiplier *= rmod.getCustomAmplifier();
            }
            if (rmod.income?.effects?.[id]) {
                const inc = formulas.Formulas.calculateValue(rmod.income?.effects?.[id], rmod.level) * rmod.efficiency * intensityMultiplier;
                if(inc != null && inc > consts.SMALL_NUMBER) {
                    const amt = formulas.Formulas.calculateValue(rmod.income?.effects?.[id], rmod.level) * rmod.efficiency * intensityMultiplier;

                    modifiersBreakdown.income.push({
                        id: mod,
                        name: rmod.name,
                        value: amt,
                        label: rmod.income?.effects?.[id]?.label ?? rmod.name,
                    })
                    modifiersBreakdown.modifiers++;
                }
            }
        });
        resource_modifiers.resourceModifiers.modifiersGroupped.byEffect[id]?.multiplier?.forEach(mod => {
            const rmod = resource_modifiers.resourceModifiers.getModifier(mod);
            if (rmod.level === 0) {
                return;
            }
            if (rmod.efficiency === 0) {
                return;
            }
            let intensityMultiplier = rmod.effectFactor;
            if(rmod.getCustomAmplifier && rmod.customAmplifierApplyTypes.includes('effects')) {
                intensityMultiplier *= rmod.getCustomAmplifier();
            }
            if (rmod.multiplier?.effects?.[id]) {
                const amt = 1 + (formulas.Formulas.calculateValue(rmod.multiplier?.effects?.[id], rmod.level) - 1) * rmod.efficiency * intensityMultiplier;

                modifiersBreakdown.multiplier.push({
                    id: mod,
                    name: rmod.name,
                    value: amt,
                    label: rmod.multiplier?.effects?.[id]?.label ?? rmod.name,
                })
                modifiersBreakdown.modifiers++;
            }
        });
        resource_modifiers.resourceModifiers.modifiersGroupped.byEffect[id]?.consumption?.forEach(mod => {
            const rmod = resource_modifiers.resourceModifiers.getModifier(mod);
            if (rmod.level === 0) {
                return;
            }
            let intensityMultiplier = rmod.effectFactor;
            if(rmod.getCustomAmplifier && rmod.customAmplifierApplyTypes.includes('effects')) {
                intensityMultiplier *= rmod.getCustomAmplifier();
            }
            if (rmod.consumption?.effects?.[id]) {
                const relevantEfficiency = rmod.consumption?.effects?.[id]?.ignoreEfficiency ? 1 : rmod.efficiency;
                if (relevantEfficiency === 0) {
                    return;
                }
                const amt = formulas.Formulas.calculateValue(rmod.consumption?.effects?.[id], rmod.level) * relevantEfficiency * intensityMultiplier;
                modifiersBreakdown.consumption.push({
                    id: mod,
                    name: rmod.name,
                    value: amt,
                    label: rmod.consumption?.effects?.[id]?.label ?? rmod.name,
                })
                modifiersBreakdown.modifiers++;

            }
        });
        resource_modifiers.resourceModifiers.modifiersGroupped.byEffect[id]?.rawCap?.forEach(mod => {
            const rmod = resource_modifiers.resourceModifiers.getModifier(mod);
            if (rmod.level === 0) {
                return;
            }
            if (rmod.efficiency === 0) {
                return;
            }
            let intensityMultiplier = rmod.effectFactor;
            if(rmod.getCustomAmplifier && rmod.customAmplifierApplyTypes.includes('effects')) {
                intensityMultiplier *= rmod.getCustomAmplifier();
            }
            if (rmod.rawCap?.effects?.[id]) {
                const amt = formulas.Formulas.calculateValue(rmod.rawCap?.effects?.[id], rmod.level) * rmod.efficiency * intensityMultiplier;
                modifiersBreakdown.rawCap.push({
                    id: mod,
                    name: rmod.name,
                    value: amt,
                    label: rmod.rawCap?.effects?.[id]?.label ?? rmod.name,
                })
                modifiersBreakdown.modifiers++;
            }
        });
        resource_modifiers.resourceModifiers.modifiersGroupped.byEffect[id]?.capMult?.forEach(mod => {
            const rmod = resource_modifiers.resourceModifiers.getModifier(mod);
            if (rmod.level === 0) {
                return;
            }
            if (rmod.efficiency === 0) {
                return;
            }

            let intensityMultiplier = rmod.effectFactor;
            if(rmod.getCustomAmplifier && rmod.customAmplifierApplyTypes.includes('effects')) {
                intensityMultiplier *= rmod.getCustomAmplifier();
            }

            if(rmod.capMult?.effects?.[id]) {
                const amt = 1 + (formulas.Formulas.calculateValue(rmod.capMult?.effects?.[id], rmod.level) - 1)*rmod.efficiency*intensityMultiplier;
                modifiersBreakdown.capMult.push({
                    id: mod,
                    name: rmod.name,
                    value: amt,
                    label: rmod.capMult?.effects?.[id]?.label ?? rmod.name,
                })
                modifiersBreakdown.modifiers++;
            }
        });

        return modifiersBreakdown;
    }

    assertEffect(id) {
        // now we walking through all the modifiers
        let income = 0;
        let multiplier = 1;
        let consumption = 0;
        let rawCap = 0;
        let capMult = 1;

        const byRes = resource_modifiers.resourceModifiers.modifiersGroupped.byEffect[id];
        if(id === 'workersEfficiency') {
            console.log('byRes: ', byRes);
        }
        const modifiersBreakdown = this.getEffectBreakdowns(id);
        let isSaveTree = game_effects.gameEffects.getEffect(id).saveBalanceTree;

        income = modifiersBreakdown.income?.reduce((acc, item) => acc + item.value, income);
        consumption = modifiersBreakdown.consumption?.reduce((acc, item) => acc + item.value, consumption);
        multiplier = modifiersBreakdown.multiplier?.reduce((acc, item) => acc * item.value, multiplier);
        rawCap = modifiersBreakdown.rawCap?.reduce((acc, item) => acc + item.value, rawCap);
        capMult = modifiersBreakdown.capMult?.reduce((acc, item) => acc * item.value, capMult);


        const prevValue = game_effects.gameEffects.getEffectValue(id);
        game_effects.gameEffects.setEffectRawIncome(id, income);
        game_effects.gameEffects.setEffectMultiplier(id, multiplier);
        game_effects.gameEffects.setEffectRawConsumption(id, consumption);
        game_effects.gameEffects.setEffectRawCap(id, rawCap);
        game_effects.gameEffects.setEffectCapMult(id, capMult);
        if(isSaveTree) {
            game_effects.gameEffects.setBreakDown(id, modifiersBreakdown);
        }
        const currValue = game_effects.gameEffects.getEffectValue(id);
        if(prevValue !== currValue) {
            // console.log(`Effect ${id} changed from ${prevValue} -> ${currValue}`, resourceModifiers.modifiersGroupped.byDeps);
            resource_modifiers.resourceModifiers.modifiersGroupped.byDeps[id]?.forEach(modifierId => {
                resource_modifiers.resourceModifiers.cacheModifier(modifierId); // regenerate caches
                this.regenerateModifier(modifierId, true)
            })
        }

    }

    regenerateModifier(id, preserveEfficiency = false) {
        const deps = resource_modifiers.resourceModifiers.getDependenciesToRegenerate(id);
        /*if(!preserveEfficiency) {
            console.log('regeneratingModifier: ', id, deps.effects, preserveEfficiency);
        }*/
        if(deps.resources.length) {
            //TODO: if missing resources are present in deps - we need to reset those
            deps.resources.forEach(rs => {
                if(game_resources.gameResources.getResource(rs).isMissing && !preserveEfficiency) {
                    this.resetConsumingEfficiency(rs);
                }
                this.assertResource(rs);
            });
        }
        if(deps.effects.length) {
            //TODO: if missing resources are present in deps - we need to reset those
            deps.effects.forEach(effId => {
                this.assertEffect(effId);
                // console.log('Reasserted: ', effId);
            });
        }
    }


    updateModifierLevel(id, level) {
        resource_modifiers.resourceModifiers.updateLevel(id, level);
        this.regenerateModifier(id);
    }

    updateModifierEfficiency(id, efficiency) {
        resource_modifiers.resourceModifiers.setEfficiency(id, efficiency);
        const deps = resource_modifiers.resourceModifiers.getDependenciesToRegenerate(id);
        if(deps.resources.length) {
            deps.resources.forEach(rs => this.assertResource(rs));
        }
        if(deps.effects.length) {
            deps.effects.forEach(rs => this.assertEffect(rs));
        }
    }

    unsetModifier(id) {
        const deps = resource_modifiers.resourceModifiers.getDependenciesToRegenerate(id);
        /*if(deps.resources.length) {
            deps.resources.forEach(rs => {
                console.log('BDEL: '+id, {...resourceModifiers.modifiersGroupped.byResource[rs]})
            })
        }*/
        resource_modifiers.resourceModifiers.unsetModifier(id)
        // console.log('regeneratingModifier: ', id, deps.resources);
        if(deps.resources.length) {
            //TODO: if missing resources are present in deps - we need to reset those
            deps.resources.forEach(rs => {
                if(game_resources.gameResources.getResource(rs).isMissing) {
                    this.resetConsumingEfficiency(rs);
                }
                this.assertResource(rs);
            });
        }
        if(deps.effects.length) {
            //TODO: if missing resources are present in deps - we need to reset those
            deps.effects.forEach(effId => {
                this.assertEffect(effId);
                // console.log('Reasserted: ', effId);
            });
        }
    }

    toggleConsumingEfficiency(resourceId, efficiency, bReset = false) {
        const consuming = resource_modifiers.resourceModifiers.modifiersGroupped.byResource[resourceId]?.consumption;

        let affectedResourceIds = [];

        // console.log('Consuming: ', resourceModifiers.modifiersGroupped.byResource);
        if(consuming && consuming.length) {
            consuming.forEach(consumerId => {
                const consumer = resource_modifiers.resourceModifiers.getModifier(consumerId);
                /*if(resourceId === 'energy' || resourceId === 'coins') {
                    console.log(`${resourceId} consumption/production toggled. Reassert: `, efficiency, consumer, consumer.nIter);
                }*/
                if(bReset) {
                    consumer.nIter = 0;
                }
                consumer.nIter = (consumer.nIter) + 1;
                if(consumer.nIter > 8) {
                    return;
                }
                this.updateModifierEfficiency(consumer.id, Math.min(1, consumer.efficiency * efficiency));
                if(consumer.bottleNeck && consumer.bottleNeck !== resourceId) {
                    affectedResourceIds.push(consumer.bottleNeck);
                }
                if(efficiency < 1) {
                    consumer.bottleNeck = resourceId;
                }
                /*if(resourceId === 'crafting_ability' || resourceId === 'inventory_paper' || resourceId === 'inventory_enchanted_paper') {
                    console.log('Consumers of '+resourceId, consumer.id, consumer.efficiency, efficiency, JSON.parse(JSON.stringify(affectedResourceIds)), consumer.nIter);
                }*/
                /*if(consumerId === 'entity_runningAction') {
                    console.log('AfterUpd EntEEF: ', JSON.stringify(resourceModifiers.getModifier(consumerId)), efficiency);
                }*/
            })
        }

        return {
            efficiency,
            affectedResourceIds
        }
    }

    resetConsumingEfficiency(resourceId, bCheckBottleneck = false) {
        const consuming = resource_modifiers.resourceModifiers.modifiersGroupped.byResource[resourceId]?.consumption;
        let targetEff = 1.;
        let affectedResources = [];
        if(consuming && consuming.length) {
            consuming.forEach(consumerId => {
                const consumer = resource_modifiers.resourceModifiers.getModifier(consumerId);
                if(!bCheckBottleneck) {
                    this.updateModifierEfficiency(consumer.id, 1);
                } else {
                    console.log('CHKN Checking bottleneck for '+resourceId, consumer.id, consumer.bottleNeck);
                    //
                    // We should get here next target, but for now use this dirty hack
                    targetEff = 1.; // Math.min(1, Math.max(consumer.efficiency, 100*SMALL_NUMBER)*4);
                    if(consumer.bottleNeck === resourceId) {
                        this.updateModifierEfficiency(consumer.id,targetEff);
                    }
                }

                affectedResources.push(...resource_modifiers.resourceModifiers.getDependenciesToRegenerate(consumer.id).resources)

            })
        }
        game_resources.gameResources.getResource(resourceId).isMissing = targetEff >= 1.;
        game_resources.gameResources.getResource(resourceId).targetEfficiency = targetEff;

        return {
            affectedResources
        }
    }

    isAffordable(prices) {
        let isAffordable = true;
        let affordabilities = {};
        let eta = 0;
        let percentage = 1;
        let hardLocked = false;
        let max = 1e+200;
        for(const resourceId in prices) {
            affordabilities[resourceId] = {
                resourceId,
                name: game_resources.gameResources.getResource(resourceId).name,
                requirement: prices[resourceId],
                actual: game_resources.gameResources.getResource(resourceId).amount,
                max: prices[resourceId] > consts.SMALL_NUMBER ? Math.floor(game_resources.gameResources.getResource(resourceId).amount / prices[resourceId]) : 1e+200,
            }
            if(game_resources.gameResources.getResource(resourceId).amount >= prices[resourceId] || prices[resourceId] <= 0) {
                affordabilities[resourceId].isAffordable = true;
            } else {
                affordabilities[resourceId].isAffordable = false;
                affordabilities[resourceId].eta = game_resources.gameResources.getResource(resourceId).balance > consts.SMALL_NUMBER ? (prices[resourceId] - game_resources.gameResources.getResource(resourceId).amount) / game_resources.gameResources.getResource(resourceId).balance : 1.e+20;
                affordabilities[resourceId].percentage = game_resources.gameResources.getResource(resourceId).amount / prices[resourceId];
                isAffordable = false;
                if(game_resources.gameResources.getResource(resourceId).hasCap && prices[resourceId] > game_resources.gameResources.getResource(resourceId).cap) {
                    affordabilities[resourceId].hardLocked = true;
                    affordabilities[resourceId].eta = 1.e+20;
                    hardLocked = true;
                }
                eta = Math.max(eta, affordabilities[resourceId].eta);
                percentage = Math.min(percentage, affordabilities[resourceId].percentage);
            }
            max = Math.min(max, affordabilities[resourceId].max);
        }
        return {
            isAffordable,
            hardLocked,
            eta,
            percentage,
            affordabilities,
            max
        }
    }
}

const resourceCalculators = ResourceCalculators.instance || new ResourceCalculators();

export { resourceCalculators };
