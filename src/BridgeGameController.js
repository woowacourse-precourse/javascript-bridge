const OutputView = require('./Views/OutputView');
const InputView = require('./Views/InputView');
const BridgeMaker = require('./BridgeMaker');

class BridgeGameController {
  constructor() {
    const outputView = new OutputView();
    const inputView = new InputView();
    const bridgeMaker = new BridgeMaker();
  }

  start() {
    this.OutputView.printStartMessage();
    this.inputView.readBridgeSize(this.CrossBridge.bind(this));
  }

  CrossBridge(size) {
    this.bridgeMaker.makeBridge(size);
  }
}

module.exports = BridgeGameController;
