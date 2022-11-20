const { printIntro } = require("./OutputView");
const { readBridgeSize, readMoving } = require("./InputView");
const { generate } = require("./BridgeRandomNumberGenerator");
const { makeBridge } = require("./BridgeMaker");

class App {
  play() {
    printIntro();

    readBridgeSize(this.generateBridge);
  }

  generateBridge(size) {
    const bridge = makeBridge(size, generate);

    console.log(bridge);

    readMoving();
  }
}

const app = new App();
app.play();

module.exports = App;
