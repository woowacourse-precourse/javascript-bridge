const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

class Bridge {
  #answer;

  constructor() {
    this.#answer = [];
  }
  generate(length) {
    this.#answer = BridgeMaker.makeBridge(
      length,
      BridgeRandomNumberGenerator.generate
    );
  }
  reset() {
    this.#answer = [];
  }
  addAnswer(answer) {
    this.#answer.push(answer);
  }
  currentStage(step) {
    return this.#answer.slice(0, step);
  }
  getLength() {
    return this.#answer.length;
  }
  currentAnswer(step) {
    return this.#answer[step - 1];
  }
}

module.exports = Bridge;
