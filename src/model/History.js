class History {
  #history;

  constructor() {
    this.#history = [];
  }

  getHistory() {
    return this.#history;
  }

  updateHistory(moving, canMove) {
    this.#history.push({ moving, canMove });
    return this.#history;
  }

  resetHistory() {
    this.#history = [];
  }
}

module.exports = History;
