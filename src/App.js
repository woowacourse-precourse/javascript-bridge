const GameController = require('./Controllers/GameController');

class App {
  #gameController;

  constructor() {
    this.#gameController = new GameController();
  }

  play() {
    this.#gameController.startGame();
  }
}

module.exports = App;
