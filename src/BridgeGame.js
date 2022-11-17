const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const OutputView = require("./OutputView");

class BridgeGame {
  #bridge;
  #order;
  #trialNumber;
  #bridgeResult;

  constructor(size) {
    this.#bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    this.#order = 0;
    this.#trialNumber = 1;
    this.#bridgeResult = {
      upResult: [],
      downResult: [],
    };
  }
}

module.exports = BridgeGame;
