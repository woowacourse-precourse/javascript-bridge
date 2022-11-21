const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");
const OutputView = require("./OutputView");


class App {
  play() {
    OutputView.printGameStart();
    const bridgeGame = new BridgeGame();
    this.inputBridgeSize(bridgeGame);
  }

  inputBridgeSize(bridgeGame) {
    InputView.readBridgeSize(bridgeGame);
  }
}

const app = new App();
app.play();

module.exports = App;
