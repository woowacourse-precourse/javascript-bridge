const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

class GameController {
  #bridge;

  start() {
    OutputView.printStart();
    InputView.readBridgeSize(this.makeBridge.bind(this));
  }

  makeBridge(bridgeSize) {
    this.#bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);

    console.log(this.#bridge);
  }


}

module.exports = GameController;
