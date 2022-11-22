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
}

module.exports = BridgeGameController;
