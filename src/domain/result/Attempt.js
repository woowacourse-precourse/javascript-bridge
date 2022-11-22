class Attempt {
  static #DEFAULT_ATTEMPT_COUNT = 1;

  static #ATTEMPT_COUNT = 1;

  #count;

  constructor() {
    this.#count = Attempt.#DEFAULT_ATTEMPT_COUNT;
  }

  add() {
    this.#count += Attempt.#ATTEMPT_COUNT;
  }

  print() {
    return `총 시도한 횟수: ${this.#count}`;
  }
}

module.exports = Attempt;
