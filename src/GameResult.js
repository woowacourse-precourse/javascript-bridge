const { OUTPUT_FORMAT, INPUT_FORMAT } = require('./constants');
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
    console.log(values, this.#resultMap);
  }

  updateResult(index, value) {
    const existing = this.#resultMap.get(index);
    this.#resultMap.set(index, { ...existing, player: value });
  }

  getResult() {
    return this.#resultMap;
  }

  calcutateMatch(index, value) {
    this.updateResult(index, value);
    const existing = this.#resultMap.get(index);
    return existing.machine === existing.player;
  }

  // 리팩토링 사항
  makeHistory() {
    const entries = [...this.#resultMap];
    const upside = [];
    const downside = [];

    for (let i = 0; i < entries.length; i++) {
      const { machine, player } = entries[i][1];
      const isMatch = machine === player;
      if (player === INPUT_FORMAT.UPSIDE) {
        upside.push(isMatch ? OUTPUT_FORMAT.MATCH : OUTPUT_FORMAT.UNMATCH);
        downside.push(OUTPUT_FORMAT.NOT_SELECTED);
      } else if (player === INPUT_FORMAT.DOWNSIDE) {
        upside.push(OUTPUT_FORMAT.NOT_SELECTED);
        downside.push(isMatch ? OUTPUT_FORMAT.MATCH : OUTPUT_FORMAT.UNMATCH);
      }
    }
    return [upside, downside];
  }

  printHistory() {
    const result = this.makeHistory();
    OutputView.printMap(result);
  }
}

module.exports = GameResult;
