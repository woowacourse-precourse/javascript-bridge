const OutputView = require('./Views/OutputView');
const InputView = require('./Views/InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class BridgeGameController {
  constructor() {
    const outputView = new OutputView();
    const inputView = new InputView();
  }

  start() {
    this.OutputView.printStartMessage();
    this.inputView.readBridgeSize(this.CrossBridge.bind(this));
  }

  CrossBridge(size) {
    BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator);
  }
}

module.exports = BridgeGameController;
