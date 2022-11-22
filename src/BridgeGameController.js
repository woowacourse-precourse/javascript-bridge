const BridgeGameService = require("./BridgeGameService");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

class BridgeGameController {
  #gameService;

  constructor() {
    this.#gameService = new BridgeGameService(
      BridgeRandomNumberGenerator.generate
    );
  }

  inputBridgeSize(size) {
    this.#gameService.generateBridge(size);
  }

  inputMove(direction) {
    return this.#gameService.moveBridge(direction);
  }

  getMap() {
    return this.#gameService.getMap();
  }

  retryGame() {
    return this.#gameService.retryGame();
  }

  checkGameEnd() {
    return this.#gameService.checkGameEnd();
  }

  getResult() {
    return this.#gameService.getResult();
  }
}
module.exports = BridgeGameController;
