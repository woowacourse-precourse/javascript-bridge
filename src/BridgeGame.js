class BridgeGame {
  #answer;
  #result = [];
  #cnt = 1;
  #size;

  constructor(answer, size) {
    this.#answer = answer;
    this.#size = size;
  }

  move(index, input) {
    let compare;
    this.#answer[index] === input ? (compare = 'O') : (compare = 'X');
    this.#result.push([input, compare]);
    return this.#result;
  }

  retry() {
    this.#result = [];
    this.#cnt += 1;
  }

  getCnt() {
    return this.#cnt;
  }

  getResult() {
    return this.#result;
  }

  getSize() {
    return this.#size;
  }
}

module.exports = BridgeGame;
