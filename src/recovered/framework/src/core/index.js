__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameCore: () => (/* binding */ GameCore),
/* harmony export */   gameCore: () => (/* binding */ gameCore)
/* harmony export */ });
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources */ "./node_modules/game-framework/src/resources/index.js");
/* harmony import */ var _game_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game-entity */ "./node_modules/game-framework/src/game-entity/index.js");
/* harmony import */ var _utils_unlocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/unlocks */ "./node_modules/game-framework/src/utils/unlocks.js");




class GameCore {

    constructor() {
        this.isInitialized = false;
        this.isTicking = false;
        this.modules = {};
        this.globalTime = 0;
        this.numTicks = 0;
        this.pid = Math.random();
        GameCore.instance = this;
    }

    registerModule(id, moduleProto) {
        if(this.modules[id]) return;

        const module = new moduleProto();

        module.gameInstance = this;

        if(!module.initialize) {
            throw new Error(`Module ${id} missing "initialize" method implementation`)
        }
        if(!module.tick) {
            throw new Error(`Module ${id} missing "tick" method implementation`)
        }
        if(!module.load) {
            throw new Error(`Module ${id} missing "load" method implementation`)
        }
        if(!module.save) {
            throw new Error(`Module ${id} missing "save" method implementation`)
        }
        this.modules[id] = module;
    }

    getModule(id) {
        return this.modules[id];
    }

    initialize(cb) {
        for(const key in this.modules) {
            this.modules[key].initialize(this);
        }
        _resources__WEBPACK_IMPORTED_MODULE_0__.resourcesManager.initialize();
        _utils_unlocks__WEBPACK_IMPORTED_MODULE_2__.gameUnlocks.initialize();
        if(cb) {
            cb(this);
        }

        this.isInitialized = true;
    }

    startTicking(interval, delta, cb, bDebug) {
        this.isTicking = true;
        this.ticker = setInterval(() => {
            const currentDelta = typeof delta === 'function' ? delta() : delta;
            if(this.isInitialized) {
                let ticks = {};
                let start;
                let total = 0;
                for(const key in this.modules) {
                    if(bDebug) {
                        start = performance.now();
                    }
                    this.modules[key].tick(this, currentDelta);
                    if(bDebug) {
                        const dt = performance.now() - start;
                        ticks[key] = dt;
                        total += dt;
                    }
                }
                if(bDebug) {
                    start = performance.now();
                }
                _resources__WEBPACK_IMPORTED_MODULE_0__.resourcesManager.tick(currentDelta);
                if(bDebug) {
                    ticks['resourcesManager'] = performance.now() - start;
                    total += ticks['resourcesManager'];
                    console.log('TICKS: ', ticks, total);
                }
                cb(this, currentDelta);
                this.numTicks++;
                this.globalTime += currentDelta;
            }
        }, interval)
    }

    stopTicking() {
        clearInterval(this.ticker);
    }

    save() {
        const obj = {};
        for(const key in this.modules) {
            obj[key] = this.modules[key].save();
        }
        obj.resources = _resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.save();
        obj.globalTime = this.globalTime;
        obj.numTicks = this.numTicks;
        obj.lastSave = Date.now();
        return obj;
    }

    load(obj) {
        _resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.load(obj.resources || {});
        for(const key in this.modules) {
            this.modules[key].load(obj[key]);
        }
        _resources__WEBPACK_IMPORTED_MODULE_0__.gameResources.load(obj.resources || {});
        this.numTicks = obj.numTicks || 0;
        this.globalTime = obj.globalTime || 0;
    }

    getModule(id) {
        return this.modules[id];
    }

}

const gameCore = GameCore.instance || new GameCore();

//# sourceURL=webpack://idlemancery-v2-reworked/./node_modules/game-framework/src/core/index.js?
