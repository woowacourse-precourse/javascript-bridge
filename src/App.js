const InputView = require("../src/InputView");
const OutputView = require("../src/OutputView");


class App {
  
  play() {
    OutputView.printStart();
    InputView.readBridgeSize();

  }
}

const app = new App();
app.play();

module.exports = App;
