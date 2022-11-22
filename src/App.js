const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');
const Validation = require('./Validation');

class App {
  #bridgeGame;

  play() {
    OutputView.startGame();
    this.#readBridgeSize();
  }

  #readBridgeSize() {
    const bridgeSize = InputView.readBridgeSize();
    try {
      Validation.isValidBridgeSize(bridgeSize);
      this.#bridgeGame = new BridgeGame(parseInt(bridgeSize));
    } catch (error) {
      OutputView.printError(error.message);
      this.#readBridgeSize();
    }
  }
}

module.exports = App;
