const { INPUT_SIGN, BRIDGE_STRUCTURE } = require('../utils/constant');

class BridgeMap {
  #map;

  constructor() {
    this.#map = {
      [INPUT_SIGN.UP]: [],
      [INPUT_SIGN.DOWN]: [],
    };
  }

  update(isSuccess, moving) {
    const sign = this.isPassable(isSuccess);

    return moving === INPUT_SIGN.UP
      ? this.updateUpside(sign)
      : this.updateDownside(sign);
  }

  updateUpside(sign) {
    this.#map[INPUT_SIGN.UP].push(sign);
    this.#map[INPUT_SIGN.DOWN].push(' ');
  }

  updateDownside(sign) {
    this.#map[INPUT_SIGN.UP].push(' ');
    this.#map[INPUT_SIGN.DOWN].push(sign);
  }

  isPassable(isSuccess) {
    return isSuccess ? BRIDGE_STRUCTURE.PASSABLE : BRIDGE_STRUCTURE.UNPASSABLE;
  }

  toString() {
    return [
      `[ ${this.#map[INPUT_SIGN.UP].join(BRIDGE_STRUCTURE.WALL)} ]`,
      `[ ${this.#map[INPUT_SIGN.DOWN].join(BRIDGE_STRUCTURE.WALL)} ]`,
    ];
  }
}

module.exports = BridgeMap;
