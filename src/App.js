const { initGame } = require('./BridgeGameController');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  static play() {
    OutputView.printStartMessage();
    InputView.readBridgeSize(initGame);
  }
}

App.play();
module.exports = App;
