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
      this.readBridgeSizeCallback(size);
    });
  }

  readBridgeSizeCallback(size) {
    try {
      this.tryReadBridgeSize(size);
    } catch (errorMessage) {
      this.catchError(errorMessage, this.requestBridgeSize);
    }
  }

  tryReadBridgeSize(size) {
    bridgeSizeValidator.isBridgeSizeValid(size);
    this.#bridgeGame = new BridgeGame(size);
    this.requestMoveDirection();
  }

  catchError(errorMessage, retryInput) {
    printError(errorMessage);
    retryInput();
  }

  requestMoveDirection() {
    readMoving((direction) => {
      this.readMovingCallback(direction);
    });
  }

  readMovingCallback(direction) {
    try {
      this.tryReadMoving(direction);
    } catch (errorMessage) {
      this.catchError(errorMessage, this.requestMoveDirection);
    }
  }

  tryReadMoving(direction) {
    directionValidator.isDirectionValid(direction);
    const movable = this.#bridgeGame.move(direction);
    printMap(this.#bridgeGame.getPath());
    movable ? this.isSuccess() : this.requestGameCommand();
  }

  isSuccess() {
    this.#bridgeGame.isGameClear()
      ? this.exitGame('성공')
      : this.requestMoveDirection();
  }

  requestGameCommand() {
    readGameCommand((command) => {
      readGameCommand(command);
    });
  }

  readGameCommandCallback(command) {
    try {
      this.tryGameCommand(command);
    } catch (errorMessage) {
      this.catchError(errorMessage, this.requestGameCommand);
    }
  }

  tryGameCommand(command) {
    commandValidator.isCommandValid(command);
    if (this.#bridgeGame.isRetry(command)) {
      this.#bridgeGame.retry();
      this.requestMoveDirection();
    } else {
      this.exitGame('실패');
    }
  }

  exitGame(gameResult) {
    const attempts = this.#bridgeGame.getAttempts();

    printResult(this.#bridgeGame.getPath(), gameResult, attempts);
  }
}

module.exports = BridgeGameHandler;
