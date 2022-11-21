const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
class App {
  play() {
    this.printPlay();
    const bridgeGame = new BridgeGame();
    InputView.readBridgeSize(bridgeGame);
  }

  printPlay() {
    OutputView.printStart();
  }
}

const app = new App();
app.play();

module.exports = App;
