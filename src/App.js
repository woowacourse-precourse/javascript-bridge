const OutputView = require("./OutputView");
const InputView = require("./InputView");
const { validateReadBridgeSize } = require("./util/Validate");

class App {
  play() {
    OutputView.printStart();
    InputView.readBridgeSize(this.onReadBridgeSize);
  }

  onReadBridgeSize(answer) {
    validateReadBridgeSize(answer);
    OutputView.printResult();
  }
}

module.exports = App;
