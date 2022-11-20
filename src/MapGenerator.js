class MapGenerator {
  #upperSymbol = [];
  #lowerSymbol = [];

  LETTER_UP = 'U';
  LETTER_DOWN = 'D';
  SYMBOL_CORRECT = 'O';
  SYMBOL_WRONG = 'X';
  SYMBOL_NONE = ' ';
  SYMBOL_SEPARATOR = ' | ';

  generate(result) {
    result.forEach(([direction, isCorrect]) => {
      this.makeSymbol(direction, isCorrect);
    });
    return [this.generateMap(this.#upperSymbol), this.generateMap(this.#lowerSymbol)];
  }

  makeSymbol(direction, isCorrect) {
    const symbol = isCorrect ? this.SYMBOL_CORRECT : this.SYMBOL_WRONG;
    if (direction === this.LETTER_UP) {
      this.#upperSymbol.push(symbol);
      this.#lowerSymbol.push(this.SYMBOL_NONE);
    }
    if (direction === this.LETTER_DOWN) {
      this.#upperSymbol.push(this.SYMBOL_NONE);
      this.#lowerSymbol.push(symbol);
    }
  }

  generateMap(symbol) {
    return `[ ${symbol.join(this.SYMBOL_SEPARATOR)} ]`;
  }
}

module.exports = MapGenerator;
