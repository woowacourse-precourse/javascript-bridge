const BridgeGameController = require("./controller/BridgeGameController");

class App {
  #bridgeGameController = new BridgeGameController();

  play() {
    this.#bridgeGameController.startGame();
  }
}

module.exports = App;
new App().play();
