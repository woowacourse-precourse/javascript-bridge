const OutputView = require("../src/OutputView");
const InputView = require("../src/InputView");

class App {
  play() {
    OutputView.printStartGame();
    InputView.readBridgeSize();

    // InputView.readGameCommand();
  }
}

const app = new App();
app.play();

module.exports = App;
