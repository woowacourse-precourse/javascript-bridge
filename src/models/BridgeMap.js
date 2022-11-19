const { DIRECTION, OTHERSIDE_ELEMENT } = require('../constant');

class BridgeMap {
  #map;

  constructor() {
    this.initMap();
  }

  initMap() {
    this.#map = { U: [], D: [] };
  }

  getMap() {
    return this.#map;
  }

  updateMap(direction, elem) {
    const otherSide = DIRECTION[(DIRECTION[direction] + 1) % 2];
    this.#map[direction].push(elem);
    this.#map[otherSide].push(OTHERSIDE_ELEMENT);

    return this.#map;
  }
}

module.exports = BridgeMap;
