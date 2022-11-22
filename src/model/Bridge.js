const { MOVABLE } = require('../data/constants');

/**
 * 다리 객체
 */
class Bridge {
  #bridges;

  constructor(bridges) {
    this.#bridges = bridges;
  }

  getBridgeLength() {
    return this.#bridges.length;
  }

  checkCorrectDirection(direction, index) {
    if (this.#bridges[index] === direction) return MOVABLE.MOVABLE;
    return MOVABLE.IMMOVABLE;
  }
}

module.exports = Bridge;
