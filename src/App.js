const OutputView = require('./View/OutputView');
const InputView = require('./View/InputView');
class App {
  play() {
    OutputView.start();
    InputView.bridgeSizeControl();
  }
}

module.exports = App;
