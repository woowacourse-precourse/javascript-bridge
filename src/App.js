const InputView = require("./InputView")
const OutputView = require("./OutputView")

class App {
  play() {
    OutputView.printGameStart();
    InputView.readBridgeSize();
  }
}

module.exports = App;
