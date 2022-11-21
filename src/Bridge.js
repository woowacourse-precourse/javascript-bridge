const { MOVABLE } = require('./data/constants');

/**
 * 다리 객체
 */
class Bridge {
  #length;

  #bridges;

  #bridgesArray;

  constructor(length, bridges) {
    this.#length = length;
    this.#bridges = bridges;
  }

  checkCorrectDirection(direction, index) {
    if (this.#bridges[index] === direction) return MOVABLE.MOVABLE;
    return MOVABLE.IMMOVABLE;
  }

  getBridgeLength() {
    return this.#length;
  }
}

module.exports = Bridge;
