const { readBridgeSize, readMoving, readGameCommand } = require('./InputView');
const {
  printStartGame,
  printError,
  printMap,
  printResult,
} = require('./OutputView');
const {
  bridgeSizeValidator,
  directionValidator,
  commandValidator,
} = require('./Validator');
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

  requestGameCommand() {
    readGameCommand((command) => {
      try {
        commandValidator.isCommandValid(command);
        if (this.#bridgeGame.isRetry(command)) {
          this.#bridgeGame.retry();
          this.requestMoveDirection();
        } else {
          this.exitGame('실패');
        }
      } catch (errorMessage) {
        printError(errorMessage);
        this.requestGameCommand();
      }
    });
  }

  exitGame(gameResult) {
    const attempts = this.#bridgeGame.getAttempts();

    printResult(this.#bridgeGame.getPath(), gameResult, attempts);
  }
}

module.exports = BridgeGameHandler;
