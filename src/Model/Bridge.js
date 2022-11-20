// @ts-checkts-check
const { makeBridge } = require('../BridgeMaker');
const {
  isNumber,
  isNaturalNumber,
  isRightNumberRange,
} = require('../Utils/Validator');

class Bridge {
  /** @type {string[]} */
  #bridge;

  /** @type {Function} */
  #generator;

  /**
   *
   * @param {number} input - Bridge의 길이를 결정
   * @param {Function} generator - Bridge의 Up, Down을 랜덤으로 만들어주는 함수
   */
  constructor(input, generator) {
    this.#generator = generator;
    this.#bridge = this.#setBridge(input);
  }

  /**
   *
   * @param {number} number
   */
  static validate(number) {
    isNumber(number);
    isNaturalNumber(number);
    isRightNumberRange(3, 20, number);
  }

  /**
   *
   * @returns {number}
   */
  get length() {
    return this.#bridge.length;
  }

  /**
   *
   * @param {number} level
   * @returns {string}
   */
  getElement(level) {
    return this.#bridge[level];
  }

  /**
   *
   * @param {number} number
   * @returns {string[]}
   */
  #setBridge(number) {
    this.constructor.validate(number);
    return makeBridge(number, this.#generator);
  }
}

module.exports = Bridge;
