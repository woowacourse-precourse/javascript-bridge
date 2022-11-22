const OutputView = require('./view/OutputView');
const InputView = require('./view/InputView');

class App {
  play() {
    OutputView.startGame();
    InputView.readBridgeSize();
  }
}

module.exports = App;
