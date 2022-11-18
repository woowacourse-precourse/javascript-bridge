const BridgeGame = require('./BridgeGame');
const BridgeGameController = require('./controllers/BridgeGameController');

class App {
  #bridgeGame = new BridgeGame();
  #bridgeGameController;
  constructor() {
    this.#bridgeGameController = new BridgeGameController(this.#bridgeGame);
  }

  play() {
    this.#bridgeGameController.start();
  }
}

const app = new App();
app.play();

module.exports = App;
