const BridegMaker = require("../BridgeMaker");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");

class Bridge {
  #bridgeLength;
  #bridgeStatus;

  constructor(bridgeLength) {
    this.#bridgeLength = bridgeLength;
    this.#bridgeStatus = this.setBridge();
  }

  setBridge() {
    const bridge = BridegMaker.makeBridge(
      this.#bridgeLength,
      BridgeRandomNumberGenerator.generate
    );

    return bridge;
  }

  get getBridgeStatus() {
    return this.#bridgeStatus;
  }
}

module.exports = Bridge;
