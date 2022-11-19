const Validator = require('../Validator');

class Direction {
  #direction;
  #nextCellDirection;

  constructor(direction, nextCellDirection) {
    Validator.directionValidityCheck(direction);
    this.#direction = direction;
    this.#nextCellDirection = nextCellDirection;
    this.successfulMove();
  }

  successfulMove() {
    return this.#direction === this.#nextCellDirection;
  }
}

module.exports = Direction;
