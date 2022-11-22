const { BRIDGE, ERROR_MESSAGE } = require('./Constants');

class MovingValidation {
  constructor(input) {
    this.validation(input);
  }

  validation(input) {
    this.validForm(input);
  }

  validForm(input) {
    if (input !== BRIDGE.letter.up && input !== BRIDGE.letter.down) {
      throw new Error(ERROR_MESSAGE.moving.form);
    }
  }
}

module.exports = MovingValidation;