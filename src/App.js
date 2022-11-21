const OutputView = require('./View/OutputView');
const InputView = require('./View/InputView');
const BridgeGame = require('./BridgeGame');

class App {
  #brideGame;

  play() {
    OutputView.printStart();
    this.#readBridgeSizeStage();
  }

  #readBridgeSizeStage() {
    InputView.readBridgeSize(this.#readBridgeSizeCallback.bind(this));
  }

  #readBridgeSizeCallback(size) {
    try {
      this.#brideGame = new BridgeGame(size);
    } catch (error) {
      OutputView.print(error.message);
      this.#readBridgeSizeStage();
    }
  }
}
module.exports = App;
