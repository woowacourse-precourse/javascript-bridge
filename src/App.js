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
    });
  }
}

module.exports = App;
