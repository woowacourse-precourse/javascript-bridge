const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  constructor() {
    this.bridgeSize = 0;
    this.correctBridge = "";
  }
  play() {
    OutputView.printStart();
    const bridgeGame = new BridgeGame();
    InputView.readBridgeSize(bridgeGame);
  }
}

module.exports = App;
