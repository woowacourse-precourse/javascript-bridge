const BridgeMaker = require("./BridgeMaker");

class Bridge {
  #answer;
  #step;
  constructor() {
    this.#answer = [];
    this.#step = 0;
  }
  init(length) {
    this.#answer = BridgeMaker.makeBridge(length);
  }
  move() {
    this.#step += 1;
  }
  reset() {
    this.#step = 0;
  }
  get currentStage() {
    return this.#answer.slice(0, this.#step);
  }
  get length() {
    return this.#answer.length;
  }
  get currentAnswer() {
    return this.#answer[this.#step - 1];
  }
}

module.exports = Bridge;
