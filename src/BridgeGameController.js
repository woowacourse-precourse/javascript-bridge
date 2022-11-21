const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");

class BridgeGameController {
  #bridgeGame;

  makeBridgeGame(size) {
    const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.#bridgeGame = new BridgeGame(bridge);
  }

  manageMoving(moving) {
    const isWrong = this.#bridgeGame.move(moving);
    const bridgeSketch = this.#bridgeGame.bringSketch();
    OutputView.printMap(bridgeSketch);
    return isWrong;
  }

  isGameEnd() {
    const isGameEnd = this.#bridgeGame.isGameEnd();
    return isGameEnd;
  }
}

module.exports = BridgeGameController;