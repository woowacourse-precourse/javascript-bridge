const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

class Bridge {
  #size;
  #bridge;

  constructor(size) {
    this.#size = size;
  }

  //prettier-ignore
  createBridge() {
    this.#bridge = BridgeMaker.makeBridge(this.#size, BridgeRandomNumberGenerator.generate);
  }
}
module.exports = Bridge;
