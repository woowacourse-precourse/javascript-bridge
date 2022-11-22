// BridgeGame 클래스에서 InputView, OutputView 를 사용하지 않는다.
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const validator = require('./validator/validator');

class BridgeGame {
  #bridge;

  #history;

  #trial;

  constructor() {
    this.#history = [];
    this.#trial = 1;
  }

  move(char) {
    this.#history.push(char);
  }

  retry(command) {}

  over() {
    return validator.isSameArr(
      this.#bridge.slice(0, this.#history.length),
      this.#history
    );
  }

  generateBridge(size) {
    this.#bridge = BridgeMaker.makeBridge(
      Number(size),
      BridgeRandomNumberGenerator.generate
    );
    return this.#bridge;
  }
}

module.exports = BridgeGame;
