__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.module */ "./src/worker/main.module.js");


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


//# sourceURL=webpack://idlemancery-v2-reworked/./src/worker/main.worker.js?
