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

const app = new App();
app.play();

module.exports = App;
