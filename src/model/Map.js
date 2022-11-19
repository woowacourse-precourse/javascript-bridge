class Map {
  #map;

  constructor() {
    this.#map = [];
  }

  updateMap(moving, canMove) {
    this.#map.push({ moving, canMove });
    return this.#map;
  }
}

module.exports = Map;
