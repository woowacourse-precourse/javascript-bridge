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
    return Object.values(this.#map);
  }

  updateMap(direction, elem) {
    const otherSide = DIRECTION[(DIRECTION[direction] + 1) % 2];
    this.#map[direction].push(elem);
    this.#map[otherSide].push(OTHERSIDE_ELEMENT);

    return Object.values(this.#map);
  }
}

module.exports = BridgeMap;
