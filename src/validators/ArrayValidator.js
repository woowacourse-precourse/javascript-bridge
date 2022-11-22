const Validator = require('./Validator');

/**
 * 배열 값에 대한 검증을 수행합니다.
 */
class ArrayValidator extends Validator {
  /** @type {Array} */
  #value;

  constructor(value) {
    super(value);
    this.#value = value;
    this.#shouldArray();
  }

  /**
   * @param {function()} errorExpression
   * @returns {this}
   */
  #shouldArray(errorExpression = undefined) {
    return this.should(Array.isArray(this.#value), errorExpression ?? '배열 값이어야 합니다.');
  }

  /**
   * @param {function(Validator, number, Array): Validator} eachFunction
   * @returns {this}
   */
  each(eachFunction) {
    this.#value = this.#value.map((item, index, value) =>
      eachFunction(new Validator(item), index, value).get(),
    );
    return this;
  }
}

module.exports = ArrayValidator;
