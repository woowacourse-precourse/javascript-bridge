const BridgeGame = require("../BridgeGame");

class BridgeGameController {
  constructor(mainController) {
    this.mainController = mainController;
    this.bridgeGame = new BridgeGame(this);
  }
}

module.exports = BridgeGameController;
