const InputView = require('./View/InputView');
const OutputView = require('./View/OutputView');

class App {
  play() {
    this.startGame();
  }

  startGame() {
    OutputView.printStart();
    InputView.readBridgeSize();
  }
}

module.exports = App;
