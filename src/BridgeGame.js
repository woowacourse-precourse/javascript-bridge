const { BRIDGE, MAP } = require('./constant/Bridge');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class BridgeGame {
  #bridge;
  #tryCount;
  #currentPosition;
  #map;
  constructor(size) {
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.#currentPosition = -1;
    this.#tryCount = 1;
    this.#map = [[], []];
  }

  getTryCount() {
    return this.#tryCount;
  }

  getMap() {
    return this.#map;
  }

  move(space) {
    this.#currentPosition += 1;
    const passResult = space === this.#bridge[this.#currentPosition] ? MAP.PASS : MAP.NONPASS;
    if (space === BRIDGE.UP) {
      this.#map[BRIDGE.UPPER].push(passResult);
      this.#map[BRIDGE.LOWER].push(MAP.BLANK);
    } else {
      this.#map[BRIDGE.UPPER].push(MAP.BLANK);
      this.#map[BRIDGE.LOWER].push(passResult);
    }
  }

  retry() {
    this.#tryCount += 1;
    this.#currentPosition = -1;
    this.#map = [[], []];
  }

  isPass() {
    return (
      this.#map[BRIDGE.UPPER][this.#currentPosition] === MAP.PASS ||
      this.#map[BRIDGE.LOWER][this.#currentPosition] === MAP.PASS
    );
  }

  isClear() {
    if (this.#currentPosition !== this.#bridge.length - 1) return false;
    return this.isPass();
  }
}

module.exports = BridgeGame;
