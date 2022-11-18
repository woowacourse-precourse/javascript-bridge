const GameController = require('./controllers/GameController');

class App {
  #gameCtrl;

  constructor() {
    this.#gameCtrl = new GameController();
  }

  play() {
    this.#gameCtrl.gameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
