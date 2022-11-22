const InputView = require("../src/InputView");
const OutputView = require("./OutputView");
class App {
  play() {
    OutputView.printstart();
    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();
module.exports = App;
