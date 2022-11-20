const BridgeGameController = require('./controllers/BridgeGameController');

class App {
  #bridgeGameController = new BridgeGameController();

  play() {
    this.#bridgeGameController.start();
  }
}

const app = new App();
app.play();

module.exports = App;
