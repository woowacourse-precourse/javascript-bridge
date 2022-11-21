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
      this.#readMovingStage();
    } catch (error) {
      OutputView.print(error.message);
      this.#readBridgeSizeStage();
    }
  }

  #readMovingStage() {
    InputView.readMoving(this.#readMovingCallback.bind(this));
  }

  #readMovingCallback(movement) {
    try {
      this.#brideGame.move(movement);
    } catch (error) {
      OutputView.print(error.message);
      this.#readMovingStage();
    }
  }
}
module.exports = App;
