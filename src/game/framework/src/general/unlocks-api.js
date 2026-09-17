import * as _utils_unlocks__WEBPACK_IMPORTED_MODULE_0__ from '../utils/unlocks.js';
import * as _resources__WEBPACK_IMPORTED_MODULE_1__ from '../resources/index.js';
import * as _game_entity__WEBPACK_IMPORTED_MODULE_2__ from '../game-entity/index.js';

class UnlocksApi {

    constructor() {
        UnlocksApi.instance = this;
    }

    getGeneralUnlocksStats() {
        let total = 0;
        let totalCompleted = 0;

        for (const scope in _utils_unlocks__WEBPACK_IMPORTED_MODULE_0__.gameUnlocks.unlockMapping) {

            const arr = _utils_unlocks__WEBPACK_IMPORTED_MODULE_0__.gameUnlocks.unlockMapping[scope];

            for (const unlockerId in arr) {
                total += arr[unlockerId].length;
                const cL = scope === 'effect' ? _resources__WEBPACK_IMPORTED_MODULE_1__.gameEffects.getEffectValue(unlockerId) : _game_entity__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getLevel(unlockerId);
                const unl = _utils_unlocks__WEBPACK_IMPORTED_MODULE_0__.gameUnlocks.findNextUnlock(arr[unlockerId], cL);
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
