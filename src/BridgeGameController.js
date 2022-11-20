const BridgeGameService = require("./BridgeGameService");

class BridgeGameController {
  #gameService;

  constructor() {
    this.#gameService = new BridgeGameService();
  }

  inputBridgeSize(size) {
    this.#gameService.generateBridge(size);
  }

  inputSpaceToMove(space) {
    this.#gameService.canMove(space);
  }
}
module.exports = BridgeGameController;
