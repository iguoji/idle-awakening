__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnlocksApi: () => (/* binding */ UnlocksApi),
/* harmony export */   unlocksApi: () => (/* binding */ unlocksApi)
/* harmony export */ });
/* harmony import */ var _utils_unlocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/unlocks */ "./node_modules/game-framework/src/utils/unlocks.js");
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources */ "./node_modules/game-framework/src/resources/index.js");
/* harmony import */ var _game_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game-entity */ "./node_modules/game-framework/src/game-entity/index.js");




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

//# sourceURL=webpack://idlemancery-v2-reworked/./node_modules/game-framework/src/general/unlocks-api.js?
