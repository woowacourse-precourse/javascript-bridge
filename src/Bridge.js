class Bridge {
  #directionSymbols;

  constructor(direcionSymbols) {
    this.#directionSymbols = direcionSymbols;
  }

  isCrossable(position, direction) {
    return this.#directionSymbols[position] === direction;
  }

  isEveryBlockPassed(passedBlockCount) {
    return this.#directionSymbols.length === passedBlockCount;
  }
}

module.exports = Bridge;
