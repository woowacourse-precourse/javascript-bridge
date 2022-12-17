const InputView = require('./console/InputView');
const ErrorHandler = require('../src2/console/ErrorHandler');

class Reader {
  bridgeSize(makeBridge, errorCallback, callback) {
    InputView.readBridgeSize(makeBridge, errorCallback, callback);
  }

  direction(callback, errorCallback) {
    InputView.readMoving(callback, errorCallback);
  }
}

module.exports = Reader;
