const Validator = require('./Validator');

class Direction {
  #direction;

  constructor(direction) {
    Validator.directionValidityCheck(direction);
    this.#direction = direction;
  }

  getDirection() {
    return this.#direction;
  }
}

module.exports = Direction;
