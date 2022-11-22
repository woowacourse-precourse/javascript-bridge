const Messages = require('../intl/Messages');
const Validator = require('./Validator');

/**
 * 숫자 값에 대한 검증을 수행합니다.
 */
class NumberValidator extends Validator {
  /** @type {number} */
  #value;

  constructor(value) {
    super(Number(value));
    this.#value = Number(value);
    this.#shouldNumber();
  }

  /**
   * @param {function()} errorExpression
   * @returns {this}
   */
  #shouldNumber(errorExpression = undefined) {
    return this.should(
      typeof this.#value === 'number' && !Number.isNaN(this.#value) && Number.isFinite(this.#value),
      errorExpression ?? Messages.NUMBER_VALIDATOR_SHOULD_NUMBER,
    );
  }

  /**
   * 소숫점이 없는 정수 값인지 검증합니다.
   *
   * @param {function()} errorExpression
   * @returns {this}
   */
  shouldInteger(errorExpression = undefined) {
    return this.should(
      Number.isInteger(this.#value),
      errorExpression ?? Messages.NUMBER_VALIDATOR_SHOULD_INTEGER,
    );
  }

  /**
   * 양수 값인지 검증합니다.
   *
   * @param {function()} errorExpression
   * @returns {this}
   */
  shouldPositive(errorExpression = undefined) {
    return this.should(
      this.#value > 0,
      errorExpression ?? Messages.NUMBER_VALIDATOR_SHOULD_POSITIVE,
    );
  }

  /**
   * 주어진 두 숫자 사이에 해당되는 숫자인지 검증합니다.
   *
   * @param {number} lowerInclusive
   * @param {number} upperInclusive
   * @param {function()} errorExpression
   * @returns {this}
   */
  shouldRangeInclusive(lowerInclusive, upperInclusive, errorExpression = undefined) {
    return this.should(
      lowerInclusive <= this.#value && this.#value <= upperInclusive,
      errorExpression ?? Messages.format(
        Messages.NUMBER_VALIDATOR_SHOULD_RANGE_INCLUSIVE,
        lowerInclusive,
        upperInclusive,
      ),
    );
  }
}

module.exports = NumberValidator;
