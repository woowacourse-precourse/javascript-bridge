class Attempt {
  #count;

  constructor() {
    this.#count = 1;
  }

  add() {
    this.#count += 1;
  }

  print() {
    return `총 시도한 횟수: ${this.#count}`;
  }
}

module.exports = Attempt;
