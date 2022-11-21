const { OUTPUT_FORMAT, INPUT_FORMAT } = require('./constants');

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

  // 리팩토링 사항ㅜㅜㅜ
  makeHistory() {
    const history = this.getAsArray().filter(([, value]) => value.player);
    const [upside, downside] = Array.from({ length: 2 }, () => []);

    for (let i = 0; i < history.length; i++) {
      const [up, down] = this.makeHistoryLine(history[i][1]);
      // const { machine, player } = history[i][1];
      // const [selected, notSeleted] = [
      //   machine === player ? OUTPUT_FORMAT.MATCH : OUTPUT_FORMAT.UNMATCH,
      //   OUTPUT_FORMAT.NOT_SELECTED,
      // ];
      // const [up, down] = player === INPUT_FORMAT.UPSIDE ? [selected, notSeleted] : [notSeleted, selected];

      upside.push(up);
      downside.push(down);
    }

    return [upside, downside];
  }

  makeHistoryLine(value) {
    const { machine, player } = value;
    const [selected, notSeleted] = [
      machine === player ? OUTPUT_FORMAT.MATCH : OUTPUT_FORMAT.UNMATCH,
      OUTPUT_FORMAT.NOT_SELECTED,
    ];
    const [up, down] = player === INPUT_FORMAT.UPSIDE ? [selected, notSeleted] : [notSeleted, selected];

    return [up, down];
  }

  // getter 줄일 것
  getTryCount() {
    return this.#tryCount;
  }

  clear() {
    this.getAsArray().forEach(([key, value]) => {
      this.#resultMap.set(key, { ...value, player: null });
    });

    this.#tryCount += 1;
  }
}

module.exports = GameResult;
