const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeValidator = require('./BridgeValidator');

const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  #bridgeGame;

  constructor() {
    this.#bridgeGame = new BridgeGame();
  }

  play() {
    OutputView.printGameStartMessage();
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize(this);
  }

  createBridge(bridgeSize) {
    try {
      BridgeValidator.validateBridgeSize(bridgeSize);
      BridgeMaker.makeBridge(bridgeSize, () => {});
    } catch (err) {
      OutputView.printErrorMessage(err.message);
      this.inputBridgeSize();
    }
  }
}

new App().play();

module.exports = App;
