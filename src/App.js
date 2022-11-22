const BridgeGame = require("./BridgeGame");
const InputView = require("./ui/InputView");
const OutputView = require("./ui/OutputView");

class App {
  constructor() {
    this.game = new BridgeGame();
  }
  play() {
    OutputView.start();
    InputView.readBridgeSize(this.game);
  }
}

module.exports = App;
