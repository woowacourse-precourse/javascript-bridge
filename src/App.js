const { makeBridge } = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const validBridgeSize = require("./validation/validBridgeSize");

class App {
  #bridge;

  play() {
    OutputView.printStartMessage();
    InputView.readBridgeSize(this.requestBridgeSize.bind(this));
  }

  requestBridgeSize(size) {
    size = Number(size);
    validBridgeSize(size);
    this.#bridge = makeBridge(size, BridgeRandomNumberGenerator.generate);
  }
}

const app = new App();
app.play();

module.exports = App;
