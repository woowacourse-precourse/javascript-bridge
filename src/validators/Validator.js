const ValidationError = require('../errors/ValidationError');

class Validator {
  /** @type {any} */
  #value;

  constructor(value) {
    this.#value = value;
  }

  /**
   *
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

  as(ValidatorClass) {
    return new ValidatorClass(this.#value);
  }

  get() {
    return this.#value;
  }
}

module.exports = Validator;
