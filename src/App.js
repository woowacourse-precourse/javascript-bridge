const InputView = require("./InputView");

class App {
  play() {
    InputView.readBridgeSize();
    InputView.readMoving();
  }
}

module.exports = App;
