const Directions = require("../utils/Directions");

class BridgeMapMaker {
  static UP = 0;
  static DOWN = 1;
  #map = [[], []];

  makeMap(direction, isPlaceToPass, distance) {
    for (let i = 0; i < 2; i++) {
      const mapDirection = i % 2;
      if (mapDirection === BridgeMapMaker.UP) {
        this.mapUpBlock(direction, isPlaceToPass, distance);
        continue;
      }
      this.mapDownBlock(direction, isPlaceToPass, distance);
    }
    return this.getCurrentMap();
  }

  mapUpBlock(direction, isPlaceToPass, distance) {
    const point = distance > 1 ? "|" : "[";

    this.#map[BridgeMapMaker.UP] = this.#map[BridgeMapMaker.UP].map((value) =>
      value.replace("]", "")
    );

    if (direction === Directions.UP_DIRECTION)
      return this.#map[BridgeMapMaker.UP].push(`${point} ${isPlaceToPass} ]`);

    this.#map[BridgeMapMaker.UP].push(`${point}   ]`);
  }

  mapDownBlock(direction, isPlaceToPass, distance) {
    const point = distance > 1 ? "|" : "[";

    this.#map[BridgeMapMaker.DOWN] = this.#map[BridgeMapMaker.DOWN].map(
      (value) => value.replace("]", "")
    );

    if (direction === Directions.DOWN_DIRECTION)
      return this.#map[BridgeMapMaker.DOWN].push(`${point} ${isPlaceToPass} ]`);

    this.#map[BridgeMapMaker.DOWN].push(`${point}   ]`);
  }

  getCurrentMap() {
    return [...this.#map];
  }

  onRetry() {
    this.#map = [[], []];
  }
}

module.exports = BridgeMapMaker;
