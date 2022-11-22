const BridgeInteractPlayer = require("./Bridge.Domain/BridgeInteractPlayer");

class App {
  #bridgeGame;
  constructor() {
    this.#bridgeGame = new BridgeInteractPlayer();
  }

  play() {
    this.#bridgeGame.playerInputBridgeSize();
  }
}

module.exports = App;
