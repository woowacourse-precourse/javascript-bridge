const BridgeGameController = require("./controller/BridgeGameController");

class App {
  #startBridgeGame = new BridgeGameController();
  play() {
    this.#startBridgeGame.updateBridgeLengthFromUser();
  }
}

module.exports = App;
