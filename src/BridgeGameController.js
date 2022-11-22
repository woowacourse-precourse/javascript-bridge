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
        const bridge = BridgeMaker.makeBridge(Number(bridgeSize), BridgeRandomNumberGenerator.generate);
        this.#BridgeGame = new BridgeGame(bridge);
        this.getMovingDirection();
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
        if (this.#BridgeGame.canMove(direction)) {
          this.#BridgeGame.move(direction);
          OutputView.printMap(this.#BridgeGame.getBridgeMap());

          const isBridgeCrossed = this.#BridgeGame.checkBridgeCrossed();
          if (isBridgeCrossed) {
            OutputView.printResult(isBridgeCrossed, this.#BridgeGame.getAttemptCount(), this.#BridgeGame.getBridgeMap());
            Console.close();
          } else {
            this.getMovingDirection();
          }
        } else {
          this.#BridgeGame.stopMoving(direction);
          OutputView.printMap(this.#BridgeGame.getBridgeMap());
          this.getCommand();
        }
      } catch (error) {
        Console.print(error.message);
        this.getMovingDirection();
      }
    });
  }

  getCommand() {
    InputView.readGameCommand((command) => {
      try {
        InputValidator.checkGameCommand(command);
        if (command === "R") {
          this.#BridgeGame.retry();
          this.getMovingDirection();
        } else {
          OutputView.printResult(this.#BridgeGame.checkBridgeCrossed(), this.#BridgeGame.getAttemptCount(), this.#BridgeGame.getBridgeMap());
          Console.close();
        }
      } catch (error) {
        Console.print(error.message);
        this.getCommand();
      }
    });
  }
}

module.exports = BridgeGameController;
