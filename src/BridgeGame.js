const { BRIDGE, MAP } = require('./constant/Bridge');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const Validator = require('./Validator');

class BridgeGame {
  #bridge;
  #tryCount;
  #map;
  constructor(size) {
    this.validate(size);
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.#tryCount = 1;
    this.#map = [[], []];
  }

  validate(size) {
    Validator.validateBridgeSize(size);
  }

  getTryCount() {
    return this.#tryCount;
  }

  getMap() {
    return this.#map;
  }

  move(space) {
    Validator.validateSpace(space);
    const currentPosition = this.#map[BRIDGE.UPPER].length;
    const passResult = space === this.#bridge[currentPosition] ? MAP.PASS : MAP.NONPASS;
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
    this.#map = [[], []];
  }

  isPass() {
    const currentPosition = this.#map[BRIDGE.UPPER].length - 1;
    return (
      this.#map[BRIDGE.UPPER][currentPosition] === MAP.PASS ||
      this.#map[BRIDGE.LOWER][currentPosition] === MAP.PASS
    );
  }

  isClear() {
    const currentPosition = this.#map[BRIDGE.UPPER].length - 1;
    if (currentPosition !== this.#bridge.length - 1) return false;
    return this.isPass();
  }
}

module.exports = BridgeGame;
