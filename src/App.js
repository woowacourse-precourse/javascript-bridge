const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");

class App {
  play() {
    try {
      const game = new BridgeGame();
      OutputView.printStart();
      InputView.readBridgeSize(game);
    } catch (e) {
      OutputView.printError(e);
    }
  }
}

module.exports = App;
