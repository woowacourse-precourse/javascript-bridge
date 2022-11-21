const { OUTPUT_FORMAT, INPUT_FORMAT, MESSAGE } = require('./constants');
const OutputView = require('./OutputView');

class GameResult {
  #resultMap;
  #tryCount;

  constructor() {
    this.#resultMap = new Map();
    this.#tryCount = 1;
  }

  setDefault(values) {
    values.map((value, index) => this.#resultMap.set(index, { machine: value, player: null }));
  }

  updateResult(index, value) {
    const existing = this.#resultMap.get(index);
    this.#resultMap.set(index, { ...existing, player: value });
  }

  getResult() {
    return this.#resultMap;
  }

  calculateMatch(index, value) {
    this.updateResult(index, value);
    const existing = this.#resultMap.get(index);
    return existing.machine === existing.player;
  }

  getAsArray() {
    return [...this.#resultMap];
  }

  getCurrentIndex() {
    return this.getAsArray().findIndex(([, value]) => !value.player);
  }

  printHistory() {
    const result = this.makeHistory();
    OutputView.printMap(result);
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

  printTryCount() {
    OutputView.printMessage(`${MESSAGE.TRY_COUNT}${this.#tryCount}`);
  }

  clear() {
    this.getAsArray().forEach(([key, value]) => {
      this.#resultMap.set(key, { ...value, player: null });
    });

    this.#tryCount += 1;
  }
}

module.exports = GameResult;
