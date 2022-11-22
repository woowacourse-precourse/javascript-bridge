const OutputView = require("../src/OutputView");
const InputView = require("../src/InputView");

class App {
  play() {
    OutputView.printGameStart();
    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
