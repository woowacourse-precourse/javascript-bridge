const { readBridgeSize, readMoving } = require('./InputView');
const { printStartGame, printError, printMap } = require('./OutputView');
const { bridgeSizeValidator, directionValidator } = require('./Validator');
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

  requestMoveDirection() {
    readMoving((direction) => {
      try {
        directionValidator.isDirectionValid(direction);
        if (this.#bridgeGame.move(direction)) {
          printMap(this.#bridgeGame.getPath());
          this.isSuccess();
        } else {
          this.requestGameCommand();
        }
      } catch (errorMessage) {
        printError(errorMessage);
        this.requestMoveDirection();
      }
    });
  }

  isSuccess() {
    this.#bridgeGame.isGameClear()
      ? this.exitGame('성공')
      : this.requestMoveDirection();
  }
}

module.exports = BridgeGameHandler;
