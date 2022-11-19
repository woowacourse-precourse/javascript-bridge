const OutputView = require('./OutputView');
const InputView = require('./InputView');

class App {
  play() {
    OutputView.printStart();
    this.gameStart();
  }

  gameStart() {
    InputView.readBridgeSize();
  }
}

module.exports = App;
