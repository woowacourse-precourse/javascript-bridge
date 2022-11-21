const BridgeGameController = require("./controller/BridgeGameController");

class App {
  #bridgeGameController = new BridgeGameController();

  constructor() {}

  play() {
    this.#bridgeGameController.startGame();
  }
}

module.exports = App;
