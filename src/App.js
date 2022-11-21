const BridgeMaker = require("./BridgeMaker");
const BridgeRandom = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
class App {
  bridge;
  async play() {
    OutputView.printGameStart();
    const bridgeSize = parseInt(await InputView.readBridgeSize());

    this.bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandom.generate);
    console.log(this.bridge);
  }
}

const app = new App();
app.play();
module.exports = App;
