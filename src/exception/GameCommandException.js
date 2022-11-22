const Exception = require('./Exception');

class GameCommandException extends Exception {
  constructor(rules) {
    super(GameCommandException.#getErrorMessage(rules));
  }

  static #getErrorMessage(commands) {
    return `커맨드는 ${commands.join(' / ')} 중 하나여야 합니다.`;
  }
}

module.exports = GameCommandException;
