const BridgeGame = require("./BridgeGame");
const OutputView = require("./view/OutputView");
const InputView = require("./view/InputView");
class App {
  play() {
    OutputView.printStart();
    InputView.readBridgeSize(new BridgeGame());
  }
}

const app = new App();
app.play();

module.exports = App;
