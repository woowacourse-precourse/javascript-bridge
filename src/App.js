const InputView = require('./InputView');
const OutputView = require('./OutputView');
// const OutputView = require('./OutputView');

class App {
  static play() {
    OutputView.printStartMessage();
    InputView.readBridgeSize();
  }
}

App.play();
module.exports = App;
