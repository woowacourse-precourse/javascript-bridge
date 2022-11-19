const BridgeGame = require("./BridgeGame");

class App {
  #startBridgeGame = new BridgeGame();
  play() {
    this.#startBridgeGame.getBridgeLengthFromUser();
  }
}

module.exports = App;
