const BRIDGE = require('./Constants');

class MovingValidation {
  constructor(input) {
    this.validation(input);
  }

  validation(input) {
    this.validForm(input);
  }

  validForm(input) {
    if (input !== BRIDGE.letter.up && input !== BRIDGE.letter.down) {
      throw new Error('[ERROR] 사용자의 입력이 잘못되었습니다.');
    }
  }
}

module.exports = MovingValidation;