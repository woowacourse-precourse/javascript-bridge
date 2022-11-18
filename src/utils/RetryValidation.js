const BRIDGE = require('./Constants');

class RetryValidation {
  constructor(input) {
    this.validation(input);
  }

  validation(input) {
    this.validForm(input);
  }

  validForm(input) {
    if (input !== BRIDGE.game.quit && input !== BRIDGE.game.retry) {
      throw new Error('[ERROR] 사용자의 입력이 잘못되었습니다.');
    }
  }
}

module.exports = RetryValidation;