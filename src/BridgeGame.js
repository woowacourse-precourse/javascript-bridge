const { COMMAND } = require('./constants/constants');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const validator = require('./validator/validator');

class BridgeGame {
  #bridge;

  #history;

  #trial;

  constructor() {
    this.move = this.move.bind(this);
    this.result = this.result.bind(this);
    this.clear = this.clear.bind(this);
    this.over = this.over.bind(this);
    this.generateMap = this.generateMap.bind(this);
    this.#history = [];
    this.#trial = 1;
  }

  move(char) {
    this.#history.push(char);
  }

  retry(command) {
    if (command === COMMAND.RETRY) {
      this.#history = [];
      this.#trial += 1;
      return true;
    }
    return false;
  }

  result() {
    const isSuccess = this.clear() ? '성공' : '실패';
    const trial = this.#trial;

    return [isSuccess, trial];
  }

  clear() {
    return validator.isSameArr(this.#bridge, this.#history);
  }

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
