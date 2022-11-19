const OutputView = require("../src/OutputView");
const InputView = require("../src/InputView");
const Bridge = require("../src/Bridge");

class App {
  play() {
    OutputView.printStartGame();
    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
