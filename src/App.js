const InputView = require("./InputView");
const { printStart, printResult } = require("./OutputView");
const { validateReadBridgeSize } = require("./util/Validate");
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");

class App {
  play() {
    printStart();
    InputView.readBridgeSize(this.onReadBridgeSize);
  }

  onReadBridgeSize(size) {
    validateReadBridgeSize(size);
    const bridge = makeBridge(size, generate);
    console.log(bridge);
    printResult();
  }
}

module.exports = App;
