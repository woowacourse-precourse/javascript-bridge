const BridgeMaker = require("./BridgeMaker");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const validBridgeSize = require("./validation/validBridgeSize");

class App {
  play() {
    OutputView.printStartMessage();
    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
