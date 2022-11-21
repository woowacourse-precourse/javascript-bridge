const generateRandomNumber = require("./BridgeRandomNumberGenerator").generate;

class ValidPathBridge {
  #validPath;
  #bridgeSize;

  get bridge() {
    return this.#validPath;
  }
  set size(size) {
    this.#bridgeSize = Number(size);
  }
  get size() {
    return this.#bridgeSize;
  }
  set bridge(callback) {
    this.#validPath = callback(this.#bridgeSize, generateRandomNumber);
  }
}
module.exports = ValidPathBridge;
