const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");

class App {
  play() {
    const game = new BridgeGame();
    OutputView.printStart();
    InputView.readBridgeSize(game);
  }
}

module.exports = App;
