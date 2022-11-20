const BridgeMap = require('./BridgeMap');

class Bridge {
  #data;

  #map;

  constructor(bridge) {
    this.#data = bridge;
    this.#map = new BridgeMap();
  }

  current(location) {
    return this.#data[location];
  }

  size() {
    return this.#data.length;
  }

  getMap() {
    return this.#map;
  }

  addMap(movingCommand, location) {
    this.#map.add(movingCommand, this.current(location));
  }

  resetMap() {
    this.#map.reset();
  }
}

module.exports = Bridge;
