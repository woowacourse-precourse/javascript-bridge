const { DIRECTION } = require('../constant');

class BridgeMap {
  #map;

  constructor() {
    this.#map = { U: [], D: [] };
  }

  updateMap(direction, elem) {
    const otherSide = DIRECTION[(DIRECTION[direction] + 1) % 2];
    this.#map[direction].push(elem);
    this.#map[otherSide].push(' ');

    return this.#map;
  }
}

module.exports = BridgeMap;
