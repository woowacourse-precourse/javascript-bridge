const InputView = require("./InputView");
const OutputView = require("./OutputView");
class App {
  play() {
    OutputView.gameStart();
    InputView.readBridgeSize();
  }
}

module.exports = App;
