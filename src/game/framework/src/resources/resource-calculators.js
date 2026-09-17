import * as _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__ from './resource-modifiers.js';
import * as _utils_formulas__WEBPACK_IMPORTED_MODULE_1__ from '../utils/formulas.js';
import * as _game_resources__WEBPACK_IMPORTED_MODULE_2__ from './game-resources.js';
import * as _game_effects__WEBPACK_IMPORTED_MODULE_3__ from './game-effects.js';
import * as _utils_consts__WEBPACK_IMPORTED_MODULE_4__ from '../utils/consts.js';

class ResourceCalculators {
    constructor() {
        ResourceCalculators.instance = this;
    }


    getResourceBreakdowns(id) {
        const byRes = _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.modifiersGroupped.byResource[id];

        const modifiersBreakdown = {
            income: [],
            multiplier: [],
            consumption: [],
            rawCap: [],
            capMult: [],
            modifiers: 0,
        };
        byRes?.income?.forEach(mod => {
            const rmod = _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.getModifier(mod);
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
                const inc = _utils_formulas__WEBPACK_IMPORTED_MODULE_1__.Formulas.calculateValue(rmod.income?.resources?.[id], rmod.level) * rmod.efficiency * intensityMultiplier;
                if(inc != null && inc > _utils_consts__WEBPACK_IMPORTED_MODULE_4__.SMALL_NUMBER) {

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
            const rmod = _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.getModifier(mod);
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
                const amt = _utils_formulas__WEBPACK_IMPORTED_MODULE_1__.Formulas.calculateValue(rmod.multiplier?.resources?.[id], rmod.level * rmod.efficiency * intensityMultiplier);

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
            const rmod = _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.getModifier(mod);
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
                const amt = _utils_formulas__WEBPACK_IMPORTED_MODULE_1__.Formulas.calculateValue(rmod.consumption?.resources?.[id], rmod.level) * relevantEfficiency * intensityMultiplier;
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
            const rmod = _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.getModifier(mod);
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
                const amt = _utils_formulas__WEBPACK_IMPORTED_MODULE_1__.Formulas.calculateValue(rmod.rawCap?.resources?.[id], rmod.level) * rmod.efficiency * intensityMultiplier;
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
            const rmod = _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.getModifier(mod);
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
                const amt = _utils_formulas__WEBPACK_IMPORTED_MODULE_1__.Formulas.calculateValue(rmod.capMult?.resources?.[id], rmod.level*rmod.efficiency*intensityMultiplier);
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
        const byRes = _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.modifiersGroupped.byResource[id];
        _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.modifiersGroupped.byResource[id]?.income?.forEach(mod => {
            const rmod = _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.getModifier(mod);
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
                const amt = _utils_formulas__WEBPACK_IMPORTED_MODULE_1__.Formulas.calculateValue(rmod.income?.resources?.[id], rmod.level);
                if(amt != null && Math.abs(amt) > _utils_consts__WEBPACK_IMPORTED_MODULE_4__.SMALL_NUMBER) {
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
        _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.modifiersGroupped.byResource[id]?.multiplier?.forEach(mod => {
            const rmod = _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.getModifier(mod);
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
                const amt = _utils_formulas__WEBPACK_IMPORTED_MODULE_1__.Formulas.calculateValue(rmod.multiplier?.resources?.[id], rmod.level * rmod.efficiency * intensityMultiplier);
                multiplier *= amt;
                if(Math.abs(amt - 1) > _utils_consts__WEBPACK_IMPORTED_MODULE_4__.SMALL_NUMBER) {
                    modifiersBreakdown.multiplier.push({
                        id: mod,
                        name: rmod.name,
                        value: amt,
                        label: rmod.multiplier?.resources?.[id]?.label ?? rmod.name,
                    })
                }

            }
        });
        _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.modifiersGroupped.byResource[id]?.consumption?.forEach(mod => {
            const rmod = _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.getModifier(mod);
            if(skipByTags.some(tag => rmod.tags.includes(tag))) {
                return;
            }
            let intensityMultiplier = rmod.effectFactor;
            if(rmod.getCustomAmplifier && rmod.customAmplifierApplyTypes.includes('resources')) {
                intensityMultiplier *= rmod.getCustomAmplifier();
            }
            if (rmod.consumption?.resources?.[id]) {
                const amt = _utils_formulas__WEBPACK_IMPORTED_MODULE_1__.Formulas.calculateValue(rmod.consumption?.resources?.[id], rmod.level);
                const relevantEfficiency = rmod.consumption?.resources?.[id]?.ignoreEfficiency ? 1 : rmod.efficiency;
                if (relevantEfficiency === 0) {
                    return;
                }
                consumption += amt * relevantEfficiency * intensityMultiplier;
                if(amt > _utils_consts__WEBPACK_IMPORTED_MODULE_4__.SMALL_NUMBER) {
                    modifiersBreakdown.consumption.push({
                        id: mod,
                        name: rmod.name,
                        value: amt * relevantEfficiency * intensityMultiplier,
                        label: rmod.consumption?.resources?.[id]?.label ?? rmod.name,
                    })
                }

            }
        });
        _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.modifiersGroupped.byResource[id]?.rawCap?.forEach(mod => {
            const rmod = _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.getModifier(mod);
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
                const amt = _utils_formulas__WEBPACK_IMPORTED_MODULE_1__.Formulas.calculateValue(rmod.rawCap?.resources?.[id], rmod.level) * rmod.efficiency * intensityMultiplier;

                rawCap += amt;
                if(amt > _utils_consts__WEBPACK_IMPORTED_MODULE_4__.SMALL_NUMBER) {
                    storageBreakdown.income.push({
                        id: mod,
                        name: rmod.name,
                        value: amt,
                        label: rmod.rawCap?.resources?.[id]?.label ?? rmod.name,
                    })
                }

            }
        });
        _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.modifiersGroupped.byResource[id]?.capMult?.forEach(mod => {
            const rmod = _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.getModifier(mod);
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
                const amt = _utils_formulas__WEBPACK_IMPORTED_MODULE_1__.Formulas.calculateValue(rmod.capMult?.resources?.[id], rmod.level*rmod.efficiency*intensityMultiplier);
                capMult *= amt;

                if(Math.abs(amt - 1) > _utils_consts__WEBPACK_IMPORTED_MODULE_4__.SMALL_NUMBER) {
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

        _game_resources__WEBPACK_IMPORTED_MODULE_2__.gameResources.setResourceRawIncome(id, income);
        _game_resources__WEBPACK_IMPORTED_MODULE_2__.gameResources.setResourceMultiplier(id, multiplier);
        _game_resources__WEBPACK_IMPORTED_MODULE_2__.gameResources.setResourceRawConsumption(id, consumption);
        _game_resources__WEBPACK_IMPORTED_MODULE_2__.gameResources.setResourceRawCap(id, rawCap);
        _game_resources__WEBPACK_IMPORTED_MODULE_2__.gameResources.setResourceCapMult(id, capMult);
        _game_resources__WEBPACK_IMPORTED_MODULE_2__.gameResources.setBreakdown(id, modifiersBreakdown, storageBreakdown);
        // console.log(`asserted[${id}]: `, gameResources.resources[id]);
    }

    getEffectBreakdowns(id) {
        const byRes = _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.modifiersGroupped.byEffect[id];

        const modifiersBreakdown = {
            income: [],
            multiplier: [],
            consumption: [],
            rawCap: [],
            capMult: [],
            modifiers: 0,
        };
        _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.modifiersGroupped.byEffect[id]?.income?.forEach(mod => {
            const rmod = _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.getModifier(mod);
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
                const inc = _utils_formulas__WEBPACK_IMPORTED_MODULE_1__.Formulas.calculateValue(rmod.income?.effects?.[id], rmod.level) * rmod.efficiency * intensityMultiplier;
                if(inc != null && inc > _utils_consts__WEBPACK_IMPORTED_MODULE_4__.SMALL_NUMBER) {
                    const amt = _utils_formulas__WEBPACK_IMPORTED_MODULE_1__.Formulas.calculateValue(rmod.income?.effects?.[id], rmod.level) * rmod.efficiency * intensityMultiplier;

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
        _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.modifiersGroupped.byEffect[id]?.multiplier?.forEach(mod => {
            const rmod = _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.getModifier(mod);
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
                const amt = 1 + (_utils_formulas__WEBPACK_IMPORTED_MODULE_1__.Formulas.calculateValue(rmod.multiplier?.effects?.[id], rmod.level) - 1) * rmod.efficiency * intensityMultiplier;

                modifiersBreakdown.multiplier.push({
                    id: mod,
                    name: rmod.name,
                    value: amt,
                    label: rmod.multiplier?.effects?.[id]?.label ?? rmod.name,
                })
                modifiersBreakdown.modifiers++;
            }
        });
        _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.modifiersGroupped.byEffect[id]?.consumption?.forEach(mod => {
            const rmod = _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.getModifier(mod);
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
                const amt = _utils_formulas__WEBPACK_IMPORTED_MODULE_1__.Formulas.calculateValue(rmod.consumption?.effects?.[id], rmod.level) * relevantEfficiency * intensityMultiplier;
                modifiersBreakdown.consumption.push({
                    id: mod,
                    name: rmod.name,
                    value: amt,
                    label: rmod.consumption?.effects?.[id]?.label ?? rmod.name,
                })
                modifiersBreakdown.modifiers++;

            }
        });
        _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.modifiersGroupped.byEffect[id]?.rawCap?.forEach(mod => {
            const rmod = _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.getModifier(mod);
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
                const amt = _utils_formulas__WEBPACK_IMPORTED_MODULE_1__.Formulas.calculateValue(rmod.rawCap?.effects?.[id], rmod.level) * rmod.efficiency * intensityMultiplier;
                modifiersBreakdown.rawCap.push({
                    id: mod,
                    name: rmod.name,
                    value: amt,
                    label: rmod.rawCap?.effects?.[id]?.label ?? rmod.name,
                })
                modifiersBreakdown.modifiers++;
            }
        });
        _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.modifiersGroupped.byEffect[id]?.capMult?.forEach(mod => {
            const rmod = _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.getModifier(mod);
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
                const amt = 1 + (_utils_formulas__WEBPACK_IMPORTED_MODULE_1__.Formulas.calculateValue(rmod.capMult?.effects?.[id], rmod.level) - 1)*rmod.efficiency*intensityMultiplier;
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

        const byRes = _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.modifiersGroupped.byEffect[id];
        if(id === 'workersEfficiency') {
            console.log('byRes: ', byRes);
        }
        const modifiersBreakdown = this.getEffectBreakdowns(id);
        let isSaveTree = _game_effects__WEBPACK_IMPORTED_MODULE_3__.gameEffects.getEffect(id).saveBalanceTree;

        income = modifiersBreakdown.income?.reduce((acc, item) => acc + item.value, income);
        consumption = modifiersBreakdown.consumption?.reduce((acc, item) => acc + item.value, consumption);
        multiplier = modifiersBreakdown.multiplier?.reduce((acc, item) => acc * item.value, multiplier);
        rawCap = modifiersBreakdown.rawCap?.reduce((acc, item) => acc + item.value, rawCap);
        capMult = modifiersBreakdown.capMult?.reduce((acc, item) => acc * item.value, capMult);


        const prevValue = _game_effects__WEBPACK_IMPORTED_MODULE_3__.gameEffects.getEffectValue(id);
        _game_effects__WEBPACK_IMPORTED_MODULE_3__.gameEffects.setEffectRawIncome(id, income);
        _game_effects__WEBPACK_IMPORTED_MODULE_3__.gameEffects.setEffectMultiplier(id, multiplier);
        _game_effects__WEBPACK_IMPORTED_MODULE_3__.gameEffects.setEffectRawConsumption(id, consumption);
        _game_effects__WEBPACK_IMPORTED_MODULE_3__.gameEffects.setEffectRawCap(id, rawCap);
        _game_effects__WEBPACK_IMPORTED_MODULE_3__.gameEffects.setEffectCapMult(id, capMult);
        if(isSaveTree) {
            _game_effects__WEBPACK_IMPORTED_MODULE_3__.gameEffects.setBreakDown(id, modifiersBreakdown);
        }
        const currValue = _game_effects__WEBPACK_IMPORTED_MODULE_3__.gameEffects.getEffectValue(id);
        if(prevValue !== currValue) {
            // console.log(`Effect ${id} changed from ${prevValue} -> ${currValue}`, resourceModifiers.modifiersGroupped.byDeps);
            _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.modifiersGroupped.byDeps[id]?.forEach(modifierId => {
                _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.cacheModifier(modifierId); // regenerate caches
                this.regenerateModifier(modifierId, true)
            })
        }

    }

    regenerateModifier(id, preserveEfficiency = false) {
        const deps = _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.getDependenciesToRegenerate(id);
        /*if(!preserveEfficiency) {
            console.log('regeneratingModifier: ', id, deps.effects, preserveEfficiency);
        }*/
        if(deps.resources.length) {
            //TODO: if missing resources are present in deps - we need to reset those
            deps.resources.forEach(rs => {
                if(_game_resources__WEBPACK_IMPORTED_MODULE_2__.gameResources.getResource(rs).isMissing && !preserveEfficiency) {
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
        _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.updateLevel(id, level);
        this.regenerateModifier(id);
    }

    updateModifierEfficiency(id, efficiency) {
        _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.setEfficiency(id, efficiency);
        const deps = _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.getDependenciesToRegenerate(id);
        if(deps.resources.length) {
            deps.resources.forEach(rs => this.assertResource(rs));
        }
        if(deps.effects.length) {
            deps.effects.forEach(rs => this.assertEffect(rs));
        }
    }

    unsetModifier(id) {
        const deps = _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.getDependenciesToRegenerate(id);
        /*if(deps.resources.length) {
            deps.resources.forEach(rs => {
                console.log('BDEL: '+id, {...resourceModifiers.modifiersGroupped.byResource[rs]})
            })
        }*/
        _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.unsetModifier(id)
        // console.log('regeneratingModifier: ', id, deps.resources);
        if(deps.resources.length) {
            //TODO: if missing resources are present in deps - we need to reset those
            deps.resources.forEach(rs => {
                if(_game_resources__WEBPACK_IMPORTED_MODULE_2__.gameResources.getResource(rs).isMissing) {
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
        const consuming = _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.modifiersGroupped.byResource[resourceId]?.consumption;

        let affectedResourceIds = [];

        // console.log('Consuming: ', resourceModifiers.modifiersGroupped.byResource);
        if(consuming && consuming.length) {
            consuming.forEach(consumerId => {
                const consumer = _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.getModifier(consumerId);
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
        const consuming = _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.modifiersGroupped.byResource[resourceId]?.consumption;
        let targetEff = 1.;
        let affectedResources = [];
        if(consuming && consuming.length) {
            consuming.forEach(consumerId => {
                const consumer = _resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.getModifier(consumerId);
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

                affectedResources.push(..._resource_modifiers__WEBPACK_IMPORTED_MODULE_0__.resourceModifiers.getDependenciesToRegenerate(consumer.id).resources)

            })
        }
        _game_resources__WEBPACK_IMPORTED_MODULE_2__.gameResources.getResource(resourceId).isMissing = targetEff >= 1.;
        _game_resources__WEBPACK_IMPORTED_MODULE_2__.gameResources.getResource(resourceId).targetEfficiency = targetEff;

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
                name: _game_resources__WEBPACK_IMPORTED_MODULE_2__.gameResources.getResource(resourceId).name,
                requirement: prices[resourceId],
                actual: _game_resources__WEBPACK_IMPORTED_MODULE_2__.gameResources.getResource(resourceId).amount,
                max: prices[resourceId] > _utils_consts__WEBPACK_IMPORTED_MODULE_4__.SMALL_NUMBER ? Math.floor(_game_resources__WEBPACK_IMPORTED_MODULE_2__.gameResources.getResource(resourceId).amount / prices[resourceId]) : 1e+200,
            }
            if(_game_resources__WEBPACK_IMPORTED_MODULE_2__.gameResources.getResource(resourceId).amount >= prices[resourceId] || prices[resourceId] <= 0) {
                affordabilities[resourceId].isAffordable = true;
            } else {
                affordabilities[resourceId].isAffordable = false;
                affordabilities[resourceId].eta = _game_resources__WEBPACK_IMPORTED_MODULE_2__.gameResources.getResource(resourceId).balance > _utils_consts__WEBPACK_IMPORTED_MODULE_4__.SMALL_NUMBER ? (prices[resourceId] - _game_resources__WEBPACK_IMPORTED_MODULE_2__.gameResources.getResource(resourceId).amount) / _game_resources__WEBPACK_IMPORTED_MODULE_2__.gameResources.getResource(resourceId).balance : 1.e+20;
                affordabilities[resourceId].percentage = _game_resources__WEBPACK_IMPORTED_MODULE_2__.gameResources.getResource(resourceId).amount / prices[resourceId];
                isAffordable = false;
                if(_game_resources__WEBPACK_IMPORTED_MODULE_2__.gameResources.getResource(resourceId).hasCap && prices[resourceId] > _game_resources__WEBPACK_IMPORTED_MODULE_2__.gameResources.getResource(resourceId).cap) {
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
