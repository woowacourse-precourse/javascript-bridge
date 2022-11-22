const BridgeMaker = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');

class Path {
  static #path;

  static getPathSize() {
    return this.#path.length;
  }

  static positionOf(countIndex) {
    return this.#path[countIndex];
  }

  static makePath(size) {
    this.#path = BridgeMaker.makeBridge(size, generate);
  }
}

module.exports = Path;
