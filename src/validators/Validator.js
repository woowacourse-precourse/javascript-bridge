const Messages = require('../intl/Messages');
const ValidationError = require('../errors/ValidationError');

/**
 * 값을 검증하는 클래스입니다.
 *
 * - as는 다른 검증 클래스로의 전환을 뜻합니다. 이 과정에서 값이 변경될 수 있습니다.
 * - should는 값이 조건을 만족해야한다는 뜻입니다.
 * - pipe는 값을 사용자 정의 validate 함수로 넘겨줍니다.
 * - get은 검증이 끝난 후의 값을 얻을 때 사용합니다.
 */
class Validator {
  /** @type {any} */
  #value;

  constructor(value) {
    this.#value = value;
  }

  /**
   * @param {any|function(any)} expression
   * @param {string|function(any)} errorExpression
   * @returns {this}
   */
  should(expression, errorExpression) {
    const assertion = typeof expression === 'function' ? expression(this.#value) : expression;
    if (!assertion) {
      if (typeof errorExpression === 'function') throw errorExpression(this.#value);
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
    return this.should(
      this.#value === value,
      errorExpression ?? Messages.format(Messages.VALIDATOR_SHOULD_BE, value),
    );
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
      errorExpression ?? Messages.VALIDATOR_SHOULD_BOOLEAN,
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
      errorExpression ?? Messages.format(
        Messages.VALIDATOR_SHOULD_INSTANCE_OF,
        GivenClass.constructor.name,
      ),
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

  /**
   * 검증이 끝난 값을 반환합니다.
   */
  get() {
    return this.#value;
  }
}

module.exports = Validator;
