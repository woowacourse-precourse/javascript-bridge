const GameController = require('./GameController');
const InputView = require('./views/InputView');

class App {
  // #gameCtrl;

  play() {
    // this.#gameCtrl = new GameController();
    this.gameStart();
  }

  gameStart() {
    // this.#gameCtrl.gameStart();
    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
