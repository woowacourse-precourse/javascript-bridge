const { OUTPUT_FORMAT, INPUT_FORMAT } = require('./constants');
const OutputView = require('./OutputView');

class GameResult {
  #resultMap;
  #upside;
  #downside;

  constructor() {
    this.#resultMap = new Map();
    this.#upside = [];
    this.#downside = [];
  }

  setResult(index, value) {
    const existing = this.#resultMap.get(index);
    if (!existing) this.#resultMap.set(index, { machine: value, player: null });
    else if (!existing?.player) this.#resultMap.set(index, { ...existing, player: value });
  }

  getResult() {
    return this.#resultMap;
  }

  calcutateMatch(index, value) {
    this.setResult(index, value);
    const existing = this.#resultMap.get(index);
    return existing.machine === existing.player;
  }

  // 리팩토링 사항
  makeHistory() {
    const entries = [...this.#resultMap].filter((v) => v[1].player);
    for (let i = 0; i < entries.length; i++) {
      const { player, machine } = entries[i][1];
      const [selected, notSelected] = [
        `${player === machine ? OUTPUT_FORMAT.MATCH : OUTPUT_FORMAT.UNMATCH}`,
        OUTPUT_FORMAT.NOT_SELECTED,
      ];
      const [up, down] = player === INPUT_FORMAT.UPSIDE ? [selected, notSelected] : [notSelected, selected];
      this.#upside.push(up);
      this.#downside.push(down);
    }

    return [this.#upside, this.#downside];
  }

  printHistory() {
    const result = this.makeHistory();
    OutputView.printMap(result);
  }
}

module.exports = GameResult;
