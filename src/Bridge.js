class Bridge {
  #directions;

  constructor(directions) {
    this.#directions = directions;
  }

  isCrossable(position, direction) {
    return this.#directions[position] === direction;
  }

  isEveryBlockPassed(position) {
    return this.#directions.length === position;
  }
}

module.exports = Bridge;
