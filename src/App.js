const BridgeGameManager = require("./BridgeGameManager");

class App {
  #bridgeGameManager;

  constructor() {
    this.#bridgeGameManager = new BridgeGameManager();
  }

  play() {
    this.#bridgeGameManager.game();
  }
}

module.exports = App;
