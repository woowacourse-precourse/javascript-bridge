const { BRIDGE_SIZE, DIRECTION, ERROR_MESSAGE } = require('../constants');

class Bridge {
  #directions;

  constructor(directions) {
    this.#validate(directions);
    this.#directions = directions;
  }

  #validate(directions) {
    const validations = {
      invalidDirection: this.#hasValidDirection.bind(this),
      invalidRange: this.#hasValidRange.bind(this),
    };

    Object.entries(validations).forEach(([key, validateFunc]) => {
      this.#validateDirections(directions, validateFunc, ERROR_MESSAGE[key]);
    });
  }

  #validateDirections(directions, validateFunc, errorMessage) {
    if (!validateFunc(directions)) {
      throw new Error(errorMessage);
    }
  }

  #hasValidDirection(directions) {
    return directions.every((direction) => this.#isValidDirection(direction));
  }

  #isValidDirection(direction) {
    return direction === DIRECTION.up || direction === DIRECTION.down;
  }

  #hasValidRange(directions) {
    return this.#isInRange(directions.length);
  }

  #isInRange(number) {
    return number >= BRIDGE_SIZE.min && number <= BRIDGE_SIZE.max;
  }

  size() {
    return this.#directions.length;
  }

  isMovable(index, direction) {
    return this.#directions[index] === direction;
  }
}

module.exports = Bridge;
