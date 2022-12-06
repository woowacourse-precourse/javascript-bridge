const BridgeGameController = require("./controller/BridgeGame.controller");
const BridgeGame = require("./models/BridgeGame");

class App {
  #bridgeGame = new BridgeGame();

  #controller = new BridgeGameController(this.#bridgeGame);

  play() {
    this.#controller.start();
  }
}

const app = new App();
app.play();

module.exports = App;
