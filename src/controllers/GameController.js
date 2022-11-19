const OutputView = require('../views/OutputView');
const InputView = require('../views/InputView');

const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');

class GameContoller {
  start() {
    OutputView.printStarting();
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize(this.onInputBridgeSize.bind(this));
  }

  onInputBridgeSize(size) {
    const bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate,
    );
    console.log(bridge);
  }
}

module.exports = GameContoller;
