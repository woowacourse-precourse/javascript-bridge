const GameController = require('./controller/GameController');

class App {
  #gameController;

  constructor() {
    this.#gameController = new GameController();
  }

  play() {
    this.#gameController.playBridgeGame();
  }
}

module.exports = App;
