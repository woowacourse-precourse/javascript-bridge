const { BRIDGE } = require('./utils/const');
const Validator = require('./utils/Validator');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class Bridge {
  #bridge;

  /**
   * @param {string} bridgeSize
   */
  constructor(bridgeSize) {
    this.validate(bridgeSize);
    const generate = BridgeRandomNumberGenerator.generate;
    this.#bridge = BridgeMaker.makeBridge(Number(bridgeSize), generate);
  }

  /**
   * @param {string} bridgeSize
   */
  validate(bridgeSize) {
    Validator.validateNaN(bridgeSize);
    Validator.validateNumberBound(Number(bridgeSize), BRIDGE.MIN, BRIDGE.MAX);
  }

  /**
   * @param {string} moving
   * @param {number} current
   * @returns
   */
  isCorrect(moving, current) {
    return moving === this.#bridge[current];
  }

  /**
   * @param {number} current
   * @returns
   */
  isLast(current) {
    return current == this.#bridge.length - 1;
  }
}

module.exports = Bridge;
