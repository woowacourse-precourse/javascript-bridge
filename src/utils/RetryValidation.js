const { BRIDGE, ERROR_MESSAGE } = require('./Constants');

class RetryValidation {
  constructor(input) {
    this.validation(input);
  }

  validation(input) {
    this.validForm(input);
  }

  validForm(input) {
    if (input !== BRIDGE.game.quit && input !== BRIDGE.game.retry) {
      throw new Error(ERROR_MESSAGE.retry.form);
    }
  }
}

module.exports = RetryValidation;