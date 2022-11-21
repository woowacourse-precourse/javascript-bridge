const BridgeGameController = require("./controller/BridgeGameController");

class App {
  #bridgeGameController = new BridgeGameController();

  constructor() {}

  play() {
    this.#bridgeGameController.start();
  }
}

module.exports = App;
new App().play();
