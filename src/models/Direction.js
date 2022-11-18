const Validator = require('../Validator');

class Direction {
  #direction;
  #successful;

  constructor(direction) {
    Validator.directionValidityCheck(direction);
    this.#direction = direction;
  }

  getDirection() {
    return this.#direction;
  }

  setSuccessful(curRightCell) {
    this.#successful = this.#direction === curRightCell;
  }

  getSuccessful() {
    return this.#successful;
  }
}

module.exports = Direction;
