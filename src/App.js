const GameController = require('./controllers/gameController');

class App {
  #gameCtrl;

  constructor() {
    this.#gameCtrl = new GameController();
  }

  play() {
    this.gameProgress();
  }

  gameProgress() {
    this.#gameCtrl.gameStart();
    this.#gameCtrl.askBridgeSize();
  }

  exit() {}
}

const app = new App();
app.play();

module.exports = App;
