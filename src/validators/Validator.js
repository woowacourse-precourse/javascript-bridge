const ValidationError = require('../errors/ValidationError');

class Validator {
  /** @type {any} */
  #value;

  constructor(value) {
    this.#value = value;
  }

  /**
   * @param {any|function(any)} assertion
   * @param expression
   * @param {string|function(any)} errorExpression
   */
  should(expression, errorExpression) {
    const assertion = typeof expression === 'function' ? expression(this.#value) : expression;
    if (!assertion) {
      if (typeof errorExpression === 'function') errorExpression(this.#value);
      if (typeof errorExpression === 'string') throw new ValidationError(errorExpression);
      throw new ValidationError('Generic Validation Error');
    }
    return this;
  }

  /**
   * 값이 일치하는지 검증합니다.
   *
   * @param {any} value
   * @param {function()} errorExpression
   * @returns {this}
   */
  shouldBe(value, errorExpression = undefined) {
    return this.should(this.#value === value, errorExpression ?? `${value} 값이어야 합니다.`);
  }

  /**
   * 값이 boolean인지 검증합니다.
   *
   * @param {function()} errorExpression
   * @returns {this}
   */
  shouldBoolean(errorExpression = undefined) {
    return this.should(
      typeof this.#value === 'boolean',
      errorExpression ?? 'true 또는 false 값이어야 합니다.',
    );
  }

  /**
   * 주어진 클래스를 상속하는 값인지 검증합니다.
   *
   * @param {typeof Object} GivenClass
   * @param {function()} errorExpression
   * @returns {this}
   */
  shouldInstanceOf(GivenClass, errorExpression = undefined) {
    return this.should(
      this.#value instanceof GivenClass,
      errorExpression ?? `${GivenClass.constructor.name} 을 상속한 값이어야 합니다.`,
    );
  }

  /**
   * 주어진 Validator로 전환합니다.
   *
   * @param {typeof Validator} ValidatorClass
   */
  as(ValidatorClass) {
    return new ValidatorClass(this.#value);
  }

  /**
   * 주어진 validate 함수로 값을 파이프합니다.
   *
   * @param {function(any)} validate
   */
  pipe(validate) {
    return validate(this.#value);
  }

  get() {
    return this.#value;
  }
}

module.exports = Validator;
