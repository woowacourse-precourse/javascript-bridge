const InputView = require('./InputView');

class BridgeGameController {
  start() {
    InputView.readBridgeSize();
  }
}

module.exports = BridgeGameController;
