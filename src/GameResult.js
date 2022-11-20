class GameResult {
  #resultMap;

  constructor() {
    this.#resultMap = new Map();
  }

  setResult(index, value) {
    const existing = this.#resultMap.get(index);
    if (!existing) this.#resultMap.set(index, { machine: value, player: null });
    else if (!existing?.player) this.#resultMap.set(index, { ...existing, player: value });
  }

  getResult() {
    return this.#resultMap;
  }
}

module.exports = GameResult;
