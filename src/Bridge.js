class Bridge {
  #directionSymbols;

  constructor(direcionSymbols) {
    this.#directionSymbols = direcionSymbols;
  }

  isCrossable(position, direction) {
    return this.#directionSymbols[position] === direction;
  }
}

module.exports = Bridge;
