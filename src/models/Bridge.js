const BridgeMap = require('./BridgeMap');

class Bridge {
  #state;

  #map;

  constructor(bridge) {
    this.#state = bridge;
    this.#map = new BridgeMap();
  }

  current(location) {
    return this.#state[location];
  }

  isLastLocation(location) {
    return this.#state.length - 1 === location;
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
