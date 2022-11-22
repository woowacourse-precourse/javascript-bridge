const BridgeMaker = require("../BridgeMaker");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");

class Bridge {
  #bridge;

  constructor(bridge) {
    this.#bridge = bridge;
  }

  canMove(position, index) {
    return this.#bridge[index] === position;
  }

  size() {
    return this.#bridge.length;
  }
}
module.exports = Bridge;
