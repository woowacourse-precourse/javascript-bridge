const ERROR_MESSAGE = require('../constant/ErrorMessage');
const VALID_VALUE = require('../constant/ValidValue');
const UserError = require('../util/UserError');

class Retry {
  #retry;

  constructor(retry) {
    this.#retry = retry;
    this.validate();
  }

  validate() {
    this.checkInput();
  }

  checkInput() {
    if (
      this.#retry === VALID_VALUE.RETRY.RETRY ||
      this.#retry === VALID_VALUE.RETRY.QUIT
    ) {
      return;
    }
    throw new UserError(ERROR_MESSAGE.RETRY);
  }
}

module.exports = Retry;
