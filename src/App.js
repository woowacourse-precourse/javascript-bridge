const OutputView = require("./OutputView");
const InputView = require("./InputView");


class App {
  play() {
    OutputView.start();
    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
