const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');

class Bridge {
  #bridge;

  constructor() {
    this.#bridge = '';
  }

  static validate(number) {
    if (Number.isNaN(number)) {
      throw new Error('[ERROR] 숫자를 입력하세요');
    }
    if (number < 3 || number > 20)
      throw new Error('[ERROR] 3이상 20이하의 수를 입력하세요');
  }

  setBridge(number) {
    this.constructor.validate(number);
    this.#bridge = makeBridge(number, generate);
  }

  getLength() {
    return this.#bridge.length;
  }

  getBridge(i) {
    return this.#bridge[i];
  }
}

module.exports = Bridge;
