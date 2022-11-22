const Bridge = require("./Bridge");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");

class BridgeGameService {
  #bridgeGame;
  #generator;

  constructor(generator) {
    this.#generator = generator;
  }

  generateBridge(size) {
    const bridge = BridgeMaker.makeBridge(size, this.#generator);
    this.#bridgeGame = new BridgeGame(new Bridge(bridge));
  }

  moveBridge(direction) {
    return this.#bridgeGame.move(direction);
  }

  getMap() {
    return this.#bridgeGame.getMap();
  }

  retryGame() {
    return this.#bridgeGame.retry();
  }

  checkGameEnd() {
    return this.#bridgeGame.checkGameEnd();
  }

  getResult() {
    return this.#bridgeGame.getResult();
  }
}

module.exports = BridgeGameService;
