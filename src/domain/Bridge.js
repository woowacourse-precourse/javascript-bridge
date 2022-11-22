class Bridge {
  #length;
  #map;

  constructor(length, map) {
    this.#length = length;
    this.#map = map;
  }

  getLength() {
    return this.#length;
  }

  getMap() {
    return this.#map;
  }
}

module.exports = Bridge;
