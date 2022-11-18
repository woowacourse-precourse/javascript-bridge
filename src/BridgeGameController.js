const InputView = require('./InputView');
const OutputView = require('./OutputView');

class BridgeGameController {
  constructor() {
    this.init();
  }
  init() {
    OutputView.printStart();
    InputView.readBridgeSize();
  }
}

//const bridgeGameController = new BridgeGameController();

module.exports = BridgeGameController;
