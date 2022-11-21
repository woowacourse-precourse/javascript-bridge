const RandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const OutputView = require("./OutputView");
const { SIGN, BLOCK } = require("./Constants");

class BridgeInformation {
  #bridgeInformation;
  #route;

  constructor(size) {
    this.#bridgeInformation = BridgeMaker.makeBridge(size, RandomNumberGenerator.generate);
    this.#route = Array.from(Array(2), () => Array());
  }
}

module.exports = BridgeInformation;
