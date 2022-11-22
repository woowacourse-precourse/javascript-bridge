const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');

const BRIDGE_SIZE = Object.freeze({
  min: 3,
  max: 20,
});

class Bridge {
  #bridge;

  constructor(size) {
    this.#validate(size);
    this.#bridge = makeBridge(size, generate);
  }

  #validate(size) {
    if (this.#isNumber(size) && this.#isInRange(size)) {
      return;
    }

    throw new Error('[ERROR] 다리의 길이는 3이상 20이하의 숫자여야 합니다.');
  }

  #isInRange(number) {
    return number >= BRIDGE_SIZE.min && number <= BRIDGE_SIZE.max;
  }

  #isNumber(value) {
    return typeof value === 'number';
  }

  isMovable(index, direction) {
    return this.#bridge[index] === direction;
  }

  size() {
    return this.#bridge.length;
  }
}

module.exports = Bridge;
