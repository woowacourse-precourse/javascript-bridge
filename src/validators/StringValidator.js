const Messages = require('../intl/Messages');
const Validator = require('./Validator');

class StringValidator extends Validator {
  /** @type {string} */
  #value;

  constructor(value) {
    super(String(value));
    this.#value = String(value);
  }

  /**
   * 숫자로만 이루어져 있는 문자열인지 검증합니다.
   *
   * @param {function()} errorExpression
   * @returns {this}
   */
  shouldNumeric(errorExpression = undefined) {
    return this.should(
      /^-?\d+$/.test(this.#value),
      errorExpression ?? Messages.STRING_VALIDATOR_SHOULD_NUMERIC,
    );
  }

  /**
   * 주어진 문자 배열 중 하나에 해당되는 값인지 검증합니다.
   *
   * @param {string[]} values
   * @param {function()} errorExpression
   * @returns {this}
   */
  shouldOneOf(values, errorExpression = undefined) {
    return this.should(
      values.includes(this.#value),
      errorExpression ?? Messages.format(
        Messages.STRING_VALIDATOR_SHOULD_ONE_OF,
        values.join(', '),
      ),
    );
  }
}

module.exports = StringValidator;
