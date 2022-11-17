const GameController = require('./controllers/GameController');
const InputView = require('./views/InputView');

class App {
  #gameCtrl;

  constructor() {
    this.#gameCtrl = new GameController();
  }

  play() {
    this.#gameCtrl.gameStart();
    this.process();
  }

  process() {
    const sizeCallback = (size) => {
      this.#gameCtrl.makeBridge(size);
      this.#gameCtrl.nextStep();
    };

    InputView.readBridgeSize(sizeCallback);
  }
}

const app = new App();
app.play();

module.exports = App;
