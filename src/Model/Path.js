const BridgeMaker = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');

class Path {
  static #path;

  static getPath() {
    return this.#path;
  }

  static positionOf(countIndex) {
    return this.#path[countIndex];
  }

  static makePath(size) {
    this.#path = BridgeMaker.makeBridge(size, generate);
  }
}

module.exports = Path;
