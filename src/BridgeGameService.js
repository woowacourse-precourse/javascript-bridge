const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./utils/BridgeRandomNumberGenerator");

class BridgeGameService {
  #bridge;

  //prettier-ignore
  generateBridge(size) {
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    console.log(this.#bridge);
  }
}

module.exports = BridgeGameService;
