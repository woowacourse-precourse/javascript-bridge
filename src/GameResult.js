const { OUTPUT_FORMAT, INPUT_FORMAT, MESSAGE } = require('./constants');
const OutputView = require('./OutputView');

class GameResult {
  #resultMap;
  #tryCount;

  constructor() {
    this.#resultMap = new Map();
    this.#tryCount = 1;
  }

  generate(values) {
    values.map((value, index) => this.#resultMap.set(index, { machine: value, player: null }));
  }

  updateResult(index, value) {
    const existing = this.#resultMap.get(index);
    this.#resultMap.set(index, { ...existing, player: value });
  }

  calculateMatch(index, value) {
    this.updateResult(index, value);
    const existing = this.#resultMap.get(index);
    return existing.machine === existing.player;
  }

  getResultAsArray() {
    return [...this.#resultMap];
  }

  getCurrentPosition() {
    return this.getResultAsArray().findIndex(([, value]) => !value.player);
  }

  makeHistory() {
    const history = this.getResultAsArray().filter(([, value]) => value.player);
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

  showTryCountSummary() {
    return `${MESSAGE.TRY_COUNT}${this.#tryCount}`;
  }

  clear() {
    this.getResultAsArray().forEach(([key, value]) => {
      this.#resultMap.set(key, { ...value, player: null });
    });

    this.#tryCount += 1;
  }
}

module.exports = GameResult;
