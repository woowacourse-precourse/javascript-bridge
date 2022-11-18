const Validator = require('./Validator');

class Validation {
  /**
   * @param {Array} target validatorName, check할 요소로 구성
   * @return {} 유효성 검사의 결과가 참이면 매개변수 반환, 거짓이면 오류 메세지 반환한다.
   */

  #target;
  #callback;

  constructor(target, callback) {
    this.#target = target;
    this.#callback = callback;
  }

  showResult() {
    const message = this.#validate(this.#target);
    return message.length ? this.#makeError(message.join(' ')) : this.#callback.callback;
  }

  #validate(target) {
    return target
      .map(({ validatorName, check }) => Validator[validatorName](...check))
      .filter((isErrorMessage) => isErrorMessage !== true);
  }

  #makeError(errorMessage) {
    throw new Error(errorMessage);
  }
}

module.exports = Validation;
