const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

class Bridge {
  constructor() {
    this.size;
    this.bridge;
  }

  setBridge(size) {
    this.bridge = BridgeMaker.makeBridge(
      Number(size),
      () => (this.bridge = BridgeRandomNumberGenerator.generate())
    );
  }

  getBridge() {
    return this.bridge;
  }
}

module.exports = Bridge;
