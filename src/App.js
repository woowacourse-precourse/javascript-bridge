const BridgeGameController = require('./BridgeGameController');

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

const app = new App();
app.play();
