const Exception = require('./Exception');

class BridgeSizeException extends Exception {
  constructor(rules) {
    super(BridgeSizeException.#getErrorMessage(rules));
  }

  static #getErrorMessage({ min, max }) {
    return `다리의 길이는 ${min}이상 ${max}이하입니다.`;
  }
}

module.exports = BridgeSizeException;
