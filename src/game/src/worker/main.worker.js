import * as _main_module__WEBPACK_IMPORTED_MODULE_0__ from '../../worker/main.module.js';

// console.log('re-inc', MainModule.instance);

const mainGame = (0,_main_module__WEBPACK_IMPORTED_MODULE_0__.mainModule)();

self.addEventListener('message', (event) => {
    // Perform some computation
    mainGame.eventHandler.processEvent(event);
    /*const result = {
        received: event.data
    };
    self.postMessage(JSON.stringify({event: 'initialized', payload: result}));*/
});
