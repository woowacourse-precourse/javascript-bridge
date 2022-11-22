const OutputView = require("../src/OutputView");
const InputView = require("../src/InputView");
const Bridge = require("../src/Bridge");
const BridgeGame = require("./BridgeGame");

class App {
  play() {
    const bridge = new Bridge();
    const bridgeGame = new BridgeGame();

    OutputView.printStartGame();
    InputView.readBridgeSize(bridge, bridgeGame);
  }
}

const app = new App();
app.play();

module.exports = App;
