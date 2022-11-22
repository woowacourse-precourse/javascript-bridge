// const { OUTPUT_FORMAT, INPUT_FORMAT, MESSAGE } = require('./constants');
// const OutputView = require('./OutputView');

class GameResult {
  #resultMap;
  #tryCount;

  constructor() {
    this.#result = new Map();
    this.#tryCount = 1;
  }

  initiate(values) {
    values.map((value, index) => this.#result.set(index, { machine: value, player: null }));
  }

  getAsArray() {
    return [...this.#result];
  }

  calculateMatch(index, value) {
    this.update(index, value);
    const existing = this.#resultMap.get(index);
    return existing.machine === existing.player;
  }

  update(index, value) {
    const existing = this.#result.get(index);
    this.#result.set(index, { ...existing, player: value });
  }
}

module.exports = GameResult;
