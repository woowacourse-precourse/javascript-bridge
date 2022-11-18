const OutputView = require("./View/OutputView");
const InputView = require("./View/InputView");
class App {
  constructor() {
    OutputView.printStart();
  }
  play() {
    this.bridge = InputView.readBridgeSize();
  }
}
const app = new App();
app.play();
module.exports = App;
