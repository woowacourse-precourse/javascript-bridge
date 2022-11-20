const BridgeGame = require("./BridgeGame");
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  async play() {
    const bridgeSize = await InputView.readBridgeSize();
    const bridge = makeBridge(bridgeSize, generate);

    console.log(bridge);
  }
}

/*
const app = new App();
app.play();
*/

module.exports = App;
