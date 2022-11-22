const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');

class App {
  constructor() {
    this.bridgeSize;
    this.bridge = [];
  }

  play() {
    OutputView.printGameStart();
    this.bridgeSize = InputView.getBridgeSize();
    this.bridge = BridgeMaker.makeBridge(
      this.bridgeSize,
      BridgeRandomNumberGenerator.generate
    );
  }
}

module.exports = App;
