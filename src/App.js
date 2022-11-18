const GameController = require('./controllers/GameController');
const OutputView = require('./views/OutputView');

class App {
  #gameCtrl;

  constructor() {
    this.#gameCtrl = new GameController();
  }

  play() {
    this.#gameCtrl.gameStart();
  }

  sizeCallback(size) {
    try {
      this.#gameCtrl.makeBridge(size);
      this.#gameCtrl.nextStep();
    } catch (error) {
      OutputView.printMessage(error);
      this.#gameCtrl.askBridgeSize();
    }
  }

  directionCallback(direction) {
    try {
      const isRightChoice = this.movePlayer(direction);
      this.#gameCtrl.printCurMap();
      isRightChoice ? this.#gameCtrl.isDone() : this.#gameCtrl.askRetry();
    } catch (error) {
      OutputView.printMessage(error);
      this.#gameCtrl.nextStep();
    }
  }

  retryCommandCallback(command) {
    try {
      this.#gameCtrl.checkRetry(command);
    } catch (error) {
      OutputView.printMessage(error);
      this.#gameCtrl.askRetry();
    }
  }
}

const app = new App();
app.play();

module.exports = App;
