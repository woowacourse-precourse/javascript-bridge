const BridgeMaker = require('../BridgeMaker');
const Bridge = require('./Bridge');
const { generate } = require('../BridgeRandomNumberGenerator');

class Path {
  static #path;

  static getPath() {
    return this.#path;
  }

  static getPathPositionOf(countIndex) {
    return this.#path[countIndex];
  }

  static makePath() {
    const size = Bridge.getSize();
    this.#path = BridgeMaker.makeBridge(size, generate);
    // console.log(this.#path);
  }
}

module.exports = Path;
