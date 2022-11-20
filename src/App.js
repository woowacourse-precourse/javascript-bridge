const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  play() {
    OutputView.printStart();
    const bridgeSize = InputView.readBridgeSize();
  }
}

module.exports = App;
