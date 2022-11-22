const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  play() {
    OutputView.printInitGame();
    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
