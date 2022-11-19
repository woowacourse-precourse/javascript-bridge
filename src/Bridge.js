class Bridge {
  #directions;
  #currentDirection;

  constructor(directions) {
    this.#directions = directions;
  } 

  isCurrentDirection(direction) {
    return this.#directions === direction;
  }

  isBridgeEnd() {
    return this.#currentDirection === this.#directions.length - 1;
  }

  move() {
    this.#currentDirection += 1;
  }
}

module.exports = Bridge;