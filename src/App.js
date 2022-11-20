const BridgeGameController = require('./controller/BridgeGameController');

class App {
  #bridgeGameController = new BridgeGameController();

  play() {
    this.#bridgeGameController.run();
  }
}

module.exports = App;
