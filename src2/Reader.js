const InputView = require('./console/InputView');

class Reader {
  bridgeSize(callback) {
    InputView.readBridgeSize(callback);
  }
}

module.exports = Reader;
