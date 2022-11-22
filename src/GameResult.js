const { OUTPUT_FORMAT, INPUT_FORMAT, MESSAGE } = require('./constants');
const OutputView = require('./OutputView');

class GameResult {
  #result;
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
    const existing = this.#result.get(index);
    return existing.machine === existing.player;
  }

  update(index, value) {
    const existing = this.#result.get(index);
    this.#result.set(index, { ...existing, player: value });
  }

  getCurrentPosition() {
    return this.getAsArray().findIndex(([, value]) => !value.player);
  }

  clear() {
    this.getAsArray().forEach(([key, value]) => {
      this.#result.set(key, { ...value, player: null });
    });

    this.#tryCount += 1;
  }

  showTryCountSummary() {
    return `${MESSAGE.TRY_COUNT}${this.#tryCount}`;
  }

  makeHistory() {
    const history = this.getAsArray().filter(([, value]) => value.player);
    const sides = Array.from({ length: 2 }, () => []);
    for (let i = 0; i < history.length; i++) {
      const [up, down] = this.makeHistoryLine(history[i][1]);

      sides[0].push(up);
      sides[1].push(down);
    }

    return sides;
  }

  makeHistoryLine(value) {
    const { machine, player } = value;
    const selected = machine === player ? OUTPUT_FORMAT.MATCH : OUTPUT_FORMAT.UNMATCH;
    const notSelected = OUTPUT_FORMAT.NOT_SELECTED;

    const [up, down] = player === INPUT_FORMAT.UPSIDE ? [selected, notSelected] : [notSelected, selected];
    return [up, down];
  }
}

module.exports = GameResult;
