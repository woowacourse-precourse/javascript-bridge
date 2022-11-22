const BridgeGameController = require('./Game/BridgeGameController');

class App {
  #bridgeGameController;

  constructor() {
    this.#bridgeGameController = new BridgeGameController();
  }

  play() {
    this.#bridgeGameController.run();
  }
}

module.exports = App;
