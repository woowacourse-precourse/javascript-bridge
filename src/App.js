const BridgeGameController = require('./controller/BridgeGameController');

class App {
  #bridgeGameController = new BridgeGameController();
  play() {
    this.#bridgeGameController.start();
  }
}

module.exports = App;
