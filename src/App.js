const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  play() {
    OutputView.startGame();
    InputView.readBridgeSize();
    InputView.readMoving();
  }
}

module.exports = App;
