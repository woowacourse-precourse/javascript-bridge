const BridgeMap = require('./BridgeMap');

class GameState {
  #currentLocation;

  #map;

  #bridge;

  constructor(bridge) {
    this.#currentLocation = 0;
    this.#map = new BridgeMap();
    this.#bridge = bridge;
  }

  checkBridgePath(moving) {
    const isSuccess = this.#bridge.checkPath(moving, this.#currentLocation);

    this.#map.update(isSuccess, moving);
    this.nextLocation();

    const isDestination = this.checkLocation();

    return { isSuccess, isDestination };
  }

  checkLocation() {
    return this.#bridge.getSize() === this.#currentLocation;
  }

  toStringMap() {
    return this.#map.toString();
  }

  nextLocation() {
    this.#currentLocation += 1;
  }
}

module.exports = GameState;
