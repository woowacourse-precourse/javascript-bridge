const GameController = require('./Controller/GameContoller');

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
