const InputView = require("./InputView");

class App {
  play() {
    let tryCount = 1;
    let bridge = InputView.readBridgeSize(tryCount);
  }
}

module.exports = App;
