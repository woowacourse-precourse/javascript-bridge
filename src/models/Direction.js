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

  setSuccessful(nextCellDirection) {
    this.#successful = this.#direction === nextCellDirection;
  }

  getSuccessful() {
    return this.#successful;
  }
}

module.exports = Direction;
