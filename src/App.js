const BridgeGame = require("./models/BridgeGame");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");

class App {
  #bridgeGame = new BridgeGame();

  play() {
    OutputView.printStart();
    InputView.readBridgeSize(this.#bridgeGame);
  }
}

module.exports = App;
