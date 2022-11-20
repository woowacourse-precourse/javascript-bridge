const { Console } = require("@woowacourse/mission-utils");
const { generate } = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const Validation = require("./Validation");
const BridgeGame = require("./BridgeGame");

class BridgeGameManager {
  constructor() {
    this.bridgeGame = null;
  }

  start() {
    OutputView.printStart();

    this.requestBridgeSize();
  }

  requestBridgeSize() {
    InputView.readBridgeSize((bridgeSize) => {
      const { errorMsg } = Validation.checkBridgeSize(bridgeSize);
      if (errorMsg) {
        Console.print(errorMsg);
        return this.requestBridgeSize();
      }

      const bridge = BridgeMaker.makeBridge(bridgeSize, generate);
      this.bridgeGame = new BridgeGame(bridge);

      this.requestDirection();
    });
  }

  requestDirection() {
    InputView.readMoving((direction) => {
      const { errorMsg } = Validation.checkDirection(direction);
      if (errorMsg) {
        Console.print(errorMsg);
        return this.requestDirection();
      }

      this.bridgeGame.move(direction);
      OutputView.printMap(this.bridgeGame.moveResult());

      if (this.bridgeGame.isFail()) return this.requestRestart();
      if (this.bridgeGame.isEnd()) return this.bridgeGame.quit();
      return this.requestDirection();
    });
  }

  requestRestart() {
    InputView.readGameCommand((restart) => {
      const { errorMsg } = Validation.checkRetry(restart);
      if (errorMsg) {
        Console.print(errorMsg);
        return this.requestRestart();
      }

      if (restart === "R") {
        bridgeGame.restart();
        return this.requestDirection();
      }

      return bridgeGame.quit();
    });
  }
}

module.exports = BridgeGameManager;
