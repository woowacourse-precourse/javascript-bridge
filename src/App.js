const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");
const InputView = require("./InputView");
class App {
  play() {
    OutputView.printStart();
    InputView.readBridgeSize(new BridgeGame());
  }
}

const app = new App();
app.play();

module.exports = App;
