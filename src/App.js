const OutputView = require("./UI/OutputView");
const InputView = require("./UI/InputView");
const BridgeGame = require("./BridgeGame");
class App {
  play() {
    OutputView.printStart();
    const bridgeGame = new BridgeGame();
    InputView.readBridgeSize(bridgeGame);
  }
}

const app = new App();
app.play();

module.exports = App;
