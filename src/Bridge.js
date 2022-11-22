const BridgeMaker = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");

class Bridge {
  constructor() {
    this.bridge;
  }

  setBridge(bridgeSize) {
    this.bridge = BridgeMaker.makeBridge(bridgeSize, generate);
    // Console.print(this.bridge);
  }

  getBridge() {
    return this.bridge;
  }
}

module.exports = Bridge;
