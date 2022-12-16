const InputView = require('./InputView');
const OutputView = require('./OutputView');
const { MESSAGE } = require('./Const');

class App {
  play() {
    OutputView.print(MESSAGE.START + '\n');
    InputView.readBridgeSize();
  }
}

new App().play();

module.exports = App;
