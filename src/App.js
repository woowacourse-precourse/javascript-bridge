const BridgeGame = require("./BridgeGame");
const GameController = require("./GameController");

class App {
  #gameController;

  constructor() {
    this.#gameController = new GameController({
      game: new BridgeGame(),
    });
  }

  play() {
    this.#gameController.play();
  }
}

const app = new App();
app.play();

module.exports = App;
