const BridgeGame = require('./BridgeGame');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

class App {
  play() {
    OutputView.printStart();
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize((length) => {
      this.bridgeGame = new BridgeGame(Number(length));
      this.inputReadMoving();
    });
  }

  inputReadMoving() {
    InputView.readMoving((direction) => {
      if (this.bridgeGame.move(direction)) {
        this.inputReadMoving();
      }
    });
  }
}

module.exports = App;
