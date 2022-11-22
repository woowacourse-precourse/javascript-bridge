const InputView = require("./InputView");
const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const OutputView = require("./OutputView");
const InputValidator = require("./InputValidator");

class BridgeGameController {
  #BridgeGame;

  getBridgeSize() {
    InputView.readBridgeSize((bridgeSize) => {
      try {
        InputValidator.checkBridgeSize(bridgeSize);
        this.createBridgeGame(bridgeSize);
      } catch (error) {
        Console.print(error.message);
        this.getBridgeSize();
      }
    });
  }

  getMovingDirection() {
    InputView.readMoving((direction) => {
      try {
        InputValidator.checkMoving(direction);
        this.checkAbleToMove(direction);
      } catch (error) {
        Console.print(error.message);
        this.getMovingDirection();
      }
    });
  }

  getGameCommand() {
    InputView.readGameCommand((command) => {
      try {
        InputValidator.checkGameCommand(command);
        this.checkRestartOrQuit() ? this.restartGame() : this.quitGame();
      } catch (error) {
        Console.print(error.message);
        this.getGameCommand();
      }
    });
  }

  createBridgeGame(bridgeSize) {
    const bridge = BridgeMaker.makeBridge(Number(bridgeSize), BridgeRandomNumberGenerator.generate);
    this.#BridgeGame = new BridgeGame(bridge);
    this.getMovingDirection();
  }

  moveNext(direction) {
    this.#BridgeGame.move(direction);
    OutputView.printMap(this.#BridgeGame.getBridgeMap());
  }

  checkGameCompleted() {
    return this.#BridgeGame.checkBridgeCrossed();
  }

  endGame() {
    OutputView.printResult(isBridgeCrossed, this.#BridgeGame.getAttemptCount(), this.#BridgeGame.getBridgeMap());
    Console.close();
  }

  stopGame(direction) {
    this.#BridgeGame.stopMoving(direction);
    OutputView.printMap(this.#BridgeGame.getBridgeMap());
    this.getGameCommand();
  }

  decideToMove(direction) {
    if (this.#BridgeGame.canMove(direction)) {
      this.moveNext(direction);
      this.checkGameCompleted() ? this.endGame() : this.getMovingDirection();
    } else {
      this.stopGame(direction);
    }
  }

  checkRestartOrQuit() {
    return command === "R";
  }

  restartGame() {
    this.#BridgeGame.retry();
    this.getMovingDirection();
  }

  quitGame() {
    OutputView.printResult(this.#BridgeGame.checkBridgeCrossed(), this.#BridgeGame.getAttemptCount(), this.#BridgeGame.getBridgeMap());
    Console.close();
  }
}

module.exports = BridgeGameController;
