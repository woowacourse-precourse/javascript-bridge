const Bridge = require("./Bridge");
const BridgeGame = require("./BridgeGame");

class BridgeGameService {
  #bridge;
  #bridgeGame;

  generateBridge(size) {
    this.#bridge = new Bridge(size);
    this.#bridge.createBridge();
  }

  canMove(space) {
    this.#bridgeGame.move(space, this.#bridge);
  }
}

module.exports = BridgeGameService;
