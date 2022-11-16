const GameController = require('./controllers/gameController');

class App {
  #gameCtrl;

  constructor() {
    this.#gameCtrl = new GameController();
  }

  play() {
    this.#gameCtrl.gameStart();
  }

  exit() {}
}

const app = new App();
app.play();

module.exports = App;
