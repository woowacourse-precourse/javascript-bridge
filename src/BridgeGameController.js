const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

class BridgeGameController {
  #bridgeGame;

  makeBridgeGame(size) {
    const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.#bridgeGame = new BridgeGame(bridge);
  }

  manageMoving(moving) {
    const bridgeSketch = this.#bridgeGame.move(moving);
    console.log(bridgeSketch);
  }
}

module.exports = BridgeGameController;