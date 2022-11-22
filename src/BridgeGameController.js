const InputView = require("./InputView");
const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
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
        this.#BridgeGame.canMove(direction) ? this.moveNext(direction) : this.stopMove(direction);
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
        this.isRestart(command) ? this.restartGame() : this.quitGame();
      } catch (error) {
        Console.print(error.message);
        this.getGameCommand();
      }
    });
  }

  createBridgeGame(bridgeSize) {
    this.#BridgeGame = new BridgeGame(Number(bridgeSize));
    this.getMovingDirection();
  }

  moveNext(direction) {
    this.#BridgeGame.move(direction);
    OutputView.printMap(this.#BridgeGame.getBridgeMap());
    this.#BridgeGame.isBridgeCrossed() ? this.endGame() : this.getMovingDirection();
  }

  endGame() {
    OutputView.printResult(this.#BridgeGame.checkBridgeCrossed(), this.#BridgeGame.getAttemptCount(), this.#BridgeGame.getBridgeMap());
    Console.close();
  }

  stopMove(direction) {
    this.#BridgeGame.stopMoving(direction);
    OutputView.printMap(this.#BridgeGame.getBridgeMap());
    this.getGameCommand();
  }

  isRestart(command) {
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
