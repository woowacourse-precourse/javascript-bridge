const { BRIDGE } = require('./utils/const');
const Validator = require('./utils/Validator');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const MoveStatusGenerator = require('./MoveStatusGenerator');

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
   * @param {string[]} path
   * @returns
   */
  isCorrect(path) {
    const bridge = this.getBridge();
    const current = path.length - 1;

    return path[current] === bridge[current];
  }

  /**
   * @param {string[]} path
   * @returns
   */
  isLast(path) {
    const bridge = this.getBridge();
    return path.length === bridge.length;
  }

  /**
   * @param {string[]} path
   * @returns {0 | 1 | 2}
   */
  compare(path) {
    const isLast = this.isLast(path);
    const isCorrect = this.isCorrect(path);

    return MoveStatusGenerator.generate(isCorrect, isLast);
  }

  getBridge() {
    return this.#bridge;
  }
}

module.exports = Bridge;
