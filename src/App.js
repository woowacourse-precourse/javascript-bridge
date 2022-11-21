const BridgeGameController = require("./controller/BridgeGameController");

class App {
  #startBridgeGame = new BridgeGameController();
  play() {
    this.#startBridgeGame.getBridgeLengthFromUser();
  }
}

module.exports = App;
