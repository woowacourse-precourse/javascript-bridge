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

  generateMap(char) {
    return this.#history
      .map((step, idx) => {
        return this.calcOX(step, char, this.#bridge[idx]);
      })
      .join('|');
  }

  calcOX(step, char, target) {
    if (step === char) {
      if (target !== step) {
        return ' X ';
      }
      return ' O ';
    }
    return '   ';
  }
}

module.exports = BridgeGame;
