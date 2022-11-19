const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { readBridgeSize } = require('./InputView');
const OutputView = require('./OutputView');
const { bridgeSizeValidator } = require('./Validator');

class BridgeGameHandler {
  #bridge;

  startGame() {
    OutputView.printStartGame();
    readBridgeSize(() => this.setBridge());
  }

  setBridge(size) {
    try {
      bridgeSizeValidator.isBridgeSizeValid(size);
      this.#bridge = makeBridge(size, generate());
    } catch (errorMessage) {
      OutputView.printError(errorMessage);
      readBridgeSize(readBridgeSize(() => this.setBridge));
    }
  }
}

module.exports = BridgeGameHandler;
