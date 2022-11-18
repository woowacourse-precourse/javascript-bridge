const InputView = require("./InputView");

class App {
  play() {
    let bridge = InputView.readBridgeSize();
  }
}

module.exports = App;
