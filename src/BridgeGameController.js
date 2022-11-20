const BridgeGameService = require("./BridgeGameService");

class BridgeGameController {
  #gameService;

  constructor() {
    this.#gameService = new BridgeGameService();
  }

  makeBridge(size) {
    this.#gameService.generateBridge(size);
  }
}
module.exports = BridgeGameController;
