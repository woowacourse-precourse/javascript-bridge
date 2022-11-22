const { printStart } = require("./OutputView");
const { readBridgeSize } = require("./InputView");
const BridgeGame = require("./BridgeGame");

class App {
  play() {
    const bridgeGame = new BridgeGame();
    printStart();
    readBridgeSize(bridgeGame);
  }
}
const app = new App();
app.play();

module.exports = App;
