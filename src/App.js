const BridgeGameController = require('./BridgeGameController');

class App {
  #bridgeGameController = new BridgeGameController();

  play() {
    this.#bridgeGameController.start();
  }
}

const app = new App();
app.play();

module.exports = App;