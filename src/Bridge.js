class Bridge {
  #directions;

  constructor(directions) {
    this.#directions = directions;
  }

  isCrossable(position, direction) {
    return this.#directions[position] === direction;
  }

  isEveryBlockPassed(passedBlockCount) {
    return this.#directions.length === passedBlockCount;
  }
}

module.exports = Bridge;
