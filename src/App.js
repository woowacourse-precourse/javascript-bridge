const OutputView = require("./OutputView");
const InputView = require("./InputView");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
class App {
  play() {
    OutputView.printStart();
    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();
module.exports = App;
