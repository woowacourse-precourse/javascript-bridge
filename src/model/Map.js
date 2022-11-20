class Map {
  #map;

  constructor() {
    this.#map = [];
  }

  getMap() {
    return this.#map;
  }

  updateMap(moving, canMove) {
    this.#map.push({ moving, canMove });
    return this.#map;
  }

  resetMap() {
    this.#map = [];
  }
}

module.exports = Map;
