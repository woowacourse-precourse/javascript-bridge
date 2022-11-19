class BridgeGame {
  #bridge = [];
  #user = [];
  #isSuccess = true;
  #score = 1;

  move(direction) {
    this.#isSuccess = this.#bridge[this.round] === direction;
    this.#user = [...this.#user, direction];
  }

  retry() {
    this.#user = [];
    this.#isSuccess = true;
    this.#score += 1;
  }

  get round() {
    return this.#user.length;
  }

  get isSuccess() {
    return this.#isSuccess;
  }

  get isEnd() {
    return this.isSuccess && this.#user.length === this.#bridge.length;
  }

  get score() {
    return this.#score;
  }

  /**
   * @param {string[]} bridge
   */
  set bridge(bridge) {
    this.#bridge = bridge;
  }

  get bridge() {
    return this.#user;
  }
}

module.exports = BridgeGame;
