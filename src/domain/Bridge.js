class Bridge {
  #length;
  #map;

  constructor(length, map) {
    this.#length = length;
    this.#map = map;
    console.log(this.#map);
  }
}

module.exports = Bridge;
