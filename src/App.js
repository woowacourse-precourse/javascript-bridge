const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { MESSAGE } = require('./constant');
const GameController = require('./GameController');
const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');

class App {
  #gameCtrl;

  play() {
    this.#gameCtrl = new GameController();
    OutputView.printMessage(MESSAGE.START_NOTIFICATION);
    this.askBridgeSize();
  }

  askBridgeSize() {
    InputView.readBridgeSize((size) => {
      try {
        this.handleSize(size);
      } catch ({ message }) {
        OutputView.printMessage(message);
        this.askBridgeSize();
      }
    });
  }

  handleSize(size) {
    const bridge = makeBridge(size, generate);
    this.#gameCtrl.gameStart(bridge);
  }
}

const app = new App();
app.play();

module.exports = App;
