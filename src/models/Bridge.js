class Bridge {
  #directions;
  #currentDirection;

  constructor(directions) {
    this.#directions = directions;
    this.#currentDirection = 0;
  } 

  isCurrentDirection(direction) {
    return this.#directions[this.#currentDirection] === direction;
  }

  isBridgeEnd() {
    return this.#currentDirection === this.#directions.length - 1;
  }

  move() {
    this.#currentDirection += 1;
  }

  initializeCurrentDirection() {
    this.#currentDirection = 0;
  }
}

module.exports = Bridge;