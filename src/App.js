const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeValidator = require('./BridgeValidator');

const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  play() {
    OutputView.printGameStartMessage();
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize(this);
  }

  validateBridgeSize(bridgeSizeInput) {
    try {
      BridgeValidator.validateBridgeSize(bridgeSizeInput);
      this.makeBridge(parseInt(bridgeSizeInput, 10));
    } catch (err) {
      OutputView.printErrorMessage(err.message);
      this.inputBridgeSize();
    }
  }

  makeBridge(bridgeSize) {
    BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
  }
}

new App().play();

module.exports = App;
