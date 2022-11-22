const InputView = require('../src/InputView');
const OutputView = require('../src/OutputView');
const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');

class App {
  play() {
    OutputView.printGameStart();
    const size = InputView.readBridgeSize();
    BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    InputView.readMoving();
  }
}

module.exports = App;
