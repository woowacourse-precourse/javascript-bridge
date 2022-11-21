const { readBridgeSize } = require('./InputView');
const { printStartGame, printError } = require('./OutputView');
const { bridgeSizeValidator } = require('./Validator');
const BridgeGame = require('./BridgeGame');

class BridgeGameHandler {
  #bridgeGame;

  startGame() {
    printStartGame();
    this.requestBridgeSize();
  }

  requestBridgeSize() {
    readBridgeSize((size) => {
      try {
        bridgeSizeValidator.isBridgeSizeValid(size);
        this.#bridgeGame = new BridgeGame(size);
        this.requestMoveDirection();
      } catch (errorMessage) {
        printError(errorMessage);
        this.requestBridgeSize();
      }
    });
  }
}

module.exports = BridgeGameHandler;
