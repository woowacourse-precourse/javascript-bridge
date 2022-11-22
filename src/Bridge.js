const { MOVABLE } = require('./data/constants');

/**
 * 다리 객체
 */
class Bridge {
  #length;

  #bridges;

  constructor(length, bridges) {
    this.#length = length;
    this.#bridges = bridges;
  }

  getBridgeLength() {
    return this.#length;
  }

  checkCorrectDirection(direction, index) {
    if (this.#bridges[index] === direction) return MOVABLE.MOVABLE;
    return MOVABLE.IMMOVABLE;
  }
}

module.exports = Bridge;
