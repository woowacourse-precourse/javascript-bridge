const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  constructor() {
    this.bridgeSize;
  }

  play() {
    OutputView.printGameStart();
    this.bridgeSize = InputView.getBridgeSize();
  }
}

module.exports = App;
