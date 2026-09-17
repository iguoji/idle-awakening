import * as main_module from './main.module.js';

// console.log('re-inc', MainModule.instance);

const mainGame = (0,main_module.mainModule)();

self.addEventListener('message', (event) => {
    // Perform some computation
    mainGame.eventHandler.processEvent(event);
    /*const result = {
        received: event.data
    };
    self.postMessage(JSON.stringify({event: 'initialized', payload: result}));*/
});
