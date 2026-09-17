__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useWorkerClient: () => (/* binding */ useWorkerClient)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers */ "./src/general/handlers.js");


var workerListeners = new WeakMap();

/**
 * A React hook that creates a client to interact with a web worker.
 *
 * @param {Worker} worker - The web worker instance to interact with.
 */
function useWorkerClient(worker) {
  // Function to register event handlers
  var onMessage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event, callback) {
    _handlers__WEBPACK_IMPORTED_MODULE_1__.globalEventHandlers[event] = callback;
  }, []);

  // Function to send data to the worker
  var sendData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event, payload) {
    if (worker) {
      worker.postMessage(JSON.stringify({
        event: event,
        payload: payload
      }));
    }
  }, [worker]);

  // Function to process messages received from the worker
  var handleMessage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    if (!event.data) return;
    var parsed = JSON.parse(event.data);
    if (!parsed.event || !_handlers__WEBPACK_IMPORTED_MODULE_1__.globalEventHandlers[parsed.event]) {
      // console.warn('Invalid event or handler not registered', parsed);
      // console.warn(globalEventHandlers);
      // console.warn(parsed)
      return;
    }
    var handler = _handlers__WEBPACK_IMPORTED_MODULE_1__.globalEventHandlers[parsed.event];
    // console.log('handling '+parsed.event);
    if (handler) {
      handler(parsed.payload);
    }
  }, []);

  // Effect to attach and detach the message listener
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (worker) {
      // Check if the worker already has a listener
      if (!workerListeners.has(worker)) {
        worker.addEventListener('message', handleMessage);
        workerListeners.set(worker, handleMessage);
      }

      // Cleanup function to remove the event listener
      return function () {
        // Only remove the event listener if it's the same handleMessage function
        var registeredHandler = workerListeners.get(worker);
        if (registeredHandler === handleMessage) {
          worker.removeEventListener('message', handleMessage);
          workerListeners["delete"](worker);
        }
      };
    }
  }, [worker, handleMessage]);
  return {
    onMessage: onMessage,
    sendData: sendData
  };
}

//# sourceURL=webpack://idlemancery-v2-reworked/./src/general/client.js?
