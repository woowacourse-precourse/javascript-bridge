const { DIRECTION, MAP_ELEMENT } = require('../constant');

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
    this.#map[otherSide].push(MAP_ELEMENT.OTHERSIDE);

    return Object.values(this.#map);
  }
}

module.exports = BridgeMap;
