class Attempt {
  #count;

  constructor() {
    this.#count = 0;
  }

  add() {
    this.#count += 1;
  }

  print() {
    return `총 시도한 횟수: ${this.#count}`;
  }
}

module.exports = Attempt;
