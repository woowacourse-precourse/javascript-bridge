class BridgeGame {
  #answer;
  #currentPosition;
  #totalTrial;

  constructor(bridge) {
    this.#answer = bridge;
    this.#currentPosition = 0;
    this.#totalTrial = 1;
  }

  move() {
    if (this.#currentPosition < this.#answer.length) this.#currentPosition += 1;
  }

  retry() {
    this.#totalTrial += 1;
    this.#currentPosition = 0;
  }

  get totalTrial() {
    return this.#totalTrial;
  }

  get currentPosition() {
    return this.#currentPosition;
  }

  getCorrectDirection() {
    return this.#answer[this.#currentPosition];
  }

  getIsLastPosition() {
    return this.#currentPosition === this.#answer.length;
  }

  getCrossState(state) {
    if (state === "failed")
      return [
        ...this.#answer.filter((v, i) => i < this.#currentPosition),
        `X${this.#answer[this.#currentPosition]}`,
      ];

    return this.#answer.filter((v, i) => i < this.#currentPosition);
  }
}

module.exports = BridgeGame;
