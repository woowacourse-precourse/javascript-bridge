const Exception = require('./Exception');

class BridgeDirectionException extends Exception {
  constructor(rules) {
    super(BridgeDirectionException.#getErrorMessage(rules));
  }

  static #getErrorMessage(directions) {
    return `방향은 ${directions.join(' / ')} 중 하나여야 합니다.`;
  }
}

module.exports = BridgeDirectionException;
