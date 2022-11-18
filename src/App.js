const GameController = require('./controller/GameController');

class App {
  #gameController;

  constructor() {
    this.#gameController = new GameController();
  }

  play() {
    this.#gameController.initializeGame();
  }
}

const app = new App();
app.play();

module.exports = App;
