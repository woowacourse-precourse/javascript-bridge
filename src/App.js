const GameController = require('./GameController');

class App {
  #gameCtrl;

  play() {
    this.#gameCtrl = new GameController();
    this.#gameCtrl.gameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
