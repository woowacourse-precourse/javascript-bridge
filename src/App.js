const GameController = require('./controllers/GameController');

class App {
  #gameController;

  constructor() {
    this.#gameController = new GameController();
  }

  play() {
    this.#gameController.start();
  }
}

module.exports = App;
