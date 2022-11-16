const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

class App {
  play() {
    OutputView.printStart();
    this.inputBridgeLength();
  }

  inputBridgeLength() {
    InputView.readBridgeSize((bridgeLength) => {
      console.log(bridgeLength);
      this.inputReadMoving();
    });
  }

  inputReadMoving() {
    InputView.readMoving((move) => {
      console.log(move);
    });
  }
}

module.exports = App;
