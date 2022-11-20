const { printIntro } = require("./OutputView");
const { readBridgeSize } = require("./InputView");
const { generate } = require("./BridgeRandomNumberGenerator");
const { makeBridge } = require("./BridgeMaker");

class App {
  play() {
    printIntro();

    this.inputSize();
  }

  inputSize() {
    readBridgeSize(this.generateBridge);
  }

  generateBridge(size) {
    const bridge = makeBridge(size, generate);

    console.log(bridge);
  }
}

const app = new App();
app.play();

module.exports = App;
