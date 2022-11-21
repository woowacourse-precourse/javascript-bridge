const BridgeGame = require("./BridgeGame");
const InputView = require("./ui/InputView");
const OutputView = require("./ui/OutputView");

class App {
  #bridgeGame = new BridgeGame();

  play() {
    OutputView.printStart();
    InputView.readBridgeSize();
  }
}

module.exports = App;
