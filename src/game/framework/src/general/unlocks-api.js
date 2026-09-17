import * as unlocks from '../utils/unlocks.js';
import * as index from '../resources/index.js';
import * as index_2 from '../game-entity/index.js';

class UnlocksApi {

    constructor() {
        UnlocksApi.instance = this;
    }

    getGeneralUnlocksStats() {
        let total = 0;
        let totalCompleted = 0;

        for (const scope in unlocks.gameUnlocks.unlockMapping) {

            const arr = unlocks.gameUnlocks.unlockMapping[scope];

            for (const unlockerId in arr) {
                total += arr[unlockerId].length;
                const cL = scope === 'effect' ? index.gameEffects.getEffectValue(unlockerId) : index_2.gameEntity.getLevel(unlockerId);
                const unl = unlocks.gameUnlocks.findNextUnlock(arr[unlockerId], cL);
                totalCompleted += (unl ? (unl?.index || 0) : arr[unlockerId].length);
                //this.unlockMapping[scope][unlockerId].sort((a, b) => a.level - b.level);
            }

        }

        return {
            totalCompleted,
            total,
        }
    }

}

const unlocksApi = UnlocksApi.instance || new UnlocksApi();

export { UnlocksApi };
export { unlocksApi };
