const OutputView = require('./OutputView');
const InputView = require('./InputView');

class App {
  play() {
    OutputView.startGame();
    InputView.readBridgeSize();
  }
}

module.exports = App;
