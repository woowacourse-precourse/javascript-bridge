const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");

class App {
  play() {
    InputView.readBridgeSize();
  }
}

module.exports = App;
