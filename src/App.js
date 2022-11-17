const OutputView = require('../view/OutputView.js');
const InputView = require('../view/InputView.js');

class App {
  play() {
    new OutputView().printStart();
    new InputView().readBridgeSize();
  }
}

module.exports = App;
