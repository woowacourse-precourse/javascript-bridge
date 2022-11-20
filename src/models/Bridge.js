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

  isLastLocation(location) {
    return this.#data.length - 1 === location;
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
