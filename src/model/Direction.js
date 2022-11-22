const ERROR_MESSAGE = require('../constant/ErrorMessage');
const VALID_VALUE = require('../constant/ValidValue');
const UserError = require('../util/UserError');

class Direction {
  #direction;

  constructor(direction) {
    this.#direction = direction;
    this.validate();
  }

  validate() {
    this.checkInput();
  }

  checkInput() {
    if (
      this.#direction === VALID_VALUE.DIRECTION.UP ||
      this.#direction === VALID_VALUE.DIRECTION.DOWN
    ) {
      return;
    }
    throw new UserError(ERROR_MESSAGE.DIRECTION);
  }
}

module.exports = Direction;
