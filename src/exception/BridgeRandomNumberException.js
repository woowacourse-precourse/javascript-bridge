const Exception = require('./Exception');

class BridgeRandomNumberException extends Exception {
  static #ERROR_MESSAGE = '랜덤 숫자가 범위에 포함되지 않습니다.';

  constructor() {
    super(BridgeRandomNumberException.#ERROR_MESSAGE);
  }
}

module.exports = BridgeRandomNumberException;
