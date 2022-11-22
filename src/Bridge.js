class Bridge {
  #bridge;

  constructor(numbers) {
    this.#bridge = numbers;
  }

  checkAnswer(moveCount, input) {
    return [this.#isRight(moveCount, input), this.#isDone(moveCount)];
  }

  #isRight(moveCount, input) {
    return this.#bridge[moveCount] === input;
  }

  #isDone(moveCount) {
    switch (this.#bridge.length === moveCount + 1) {
    case (true):
      return true;
    default:
      return false;
    }
  }
}

module.exports = Bridge;
