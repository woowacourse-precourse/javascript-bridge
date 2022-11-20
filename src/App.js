const OutputView = require('./OutputView');
const InputView = require('./InputView');

class App {
  play() {
    OutputView.printStart();
    App.gameStart();
  }

  static gameStart() {
    InputView.readBridgeSize();
  }
}

module.exports = App;
