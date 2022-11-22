const { MARKING_PASS, MARKING_FAIL } = require("./Utils");

class BridgeGame {
  #bridge;
  #position;
  constructor() {
    this.#bridge = null;
    this.#position = 0;
  }

  setBridge(bridge) {
    this.#bridge = bridge;
  }

  move(moving) {
    if (moving === this.#bridge[this.#position++]) return MARKING_PASS;
    return MARKING_FAIL;
  }

  isAllPassed() {
    if (this.#position === this.#bridge.length) return true;
    return false;
  }

  retry() {
    this.#position = 0;
  }
}

module.exports = BridgeGame;
