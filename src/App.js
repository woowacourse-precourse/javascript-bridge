const OutputView = require("./View/OutputView");
const InputView = require("./View/InputView");
class App {
  constructor() {}
  play() {
    OutputView.printStart();
    this.bridge = InputView.readBridgeSize();
  }
}
const app = new App();
app.play();
module.exports = App;
