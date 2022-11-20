class Bridge {
  #length;
  #map;

  constructor(length, map) {
    this.#length = length;
    this.#map = map;
  }

  getMap() {
    return this.#map;
  }
}

module.exports = Bridge;
