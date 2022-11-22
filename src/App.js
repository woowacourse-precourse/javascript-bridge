const BridgeGameController = require('./BridgeGameController');
const InputView = require('./InputView');
const { printStartMessage } = require('./OutputView');

class App {
  #view;

  constructor() {
    this.#view = InputView;
  }

  play() {
    printStartMessage();
    this.#view.readBridgeSize(BridgeGameController.initGame);
  }
}

const app = new App();
app.play();
module.exports = App;
