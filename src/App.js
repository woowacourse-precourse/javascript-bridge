const OutputView = require("./OutputView");
const InputView = require("./InputView");
// const BridgeGame = require("./BridgeGame");
// const bridgeGame = new BridgeGame();
class App {
  play() {
    OutputView.printGameStart();
    InputView.readBridgeSize();
  }
}
const app = new App();
app.play();
module.exports = App;
