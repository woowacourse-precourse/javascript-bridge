const { INPUT_SIGN, BRIDGE_STRUCTURE } = require('../utils/constant');

class BridgeMap {
  #map;

  constructor() {
    this.#map = {
      [INPUT_SIGN.UP]: [],
      [INPUT_SIGN.DOWN]: [],
    };
  }

  update(isCorrect, moving) {
    const sign = this.isPassable(isCorrect);

    moving === INPUT_SIGN.UP
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

  isPassable(isCorrect) {
    return isCorrect ? BRIDGE_STRUCTURE.PASSABLE : BRIDGE_STRUCTURE.UNPASSABLE;
  }

  toString() {
    return [
      `${BRIDGE_STRUCTURE.BEGIN} ${this.#map[INPUT_SIGN.UP].join(
        BRIDGE_STRUCTURE.WALL
      )} ${BRIDGE_STRUCTURE.END}`,
      `${BRIDGE_STRUCTURE.BEGIN} ${this.#map[INPUT_SIGN.DOWN].join(
        BRIDGE_STRUCTURE.WALL
      )} ${BRIDGE_STRUCTURE.END}`,
    ];
  }
}

module.exports = BridgeMap;
