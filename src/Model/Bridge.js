const BridegMaker = require("../BridgeMaker");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");

class Bridge {
  #bridgeLength;
  #bridgeStatus;

  constructor(bridgeLength) {
    this.setBridgeLength(bridgeLength);
    this.#bridgeStatus = this.buildBridge();
  }

  setBridgeLength(bridgeLength) {
    this.#bridgeLength = bridgeLength;
  }

  buildBridge() {
    const bridge = BridegMaker.makeBridge(
      this.#bridgeLength,
      BridgeRandomNumberGenerator.generate()
    );
  }

  getBridgeStatus() {
    return this.#bridgeStatus;
  }
}

module.exports = Bridge;
