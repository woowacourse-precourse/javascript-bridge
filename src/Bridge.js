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

  getBridgeSize() {
    return this.#directionSymbols.length;
  }
}

module.exports = Bridge;
