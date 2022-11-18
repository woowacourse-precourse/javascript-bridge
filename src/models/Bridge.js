const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const BRIDGE = require('../utils/Constants');

class Bridge {
  #bridge;

  constructor(input) {
    this.validation(input);
    this.#bridge = this.makeRandomBridge(input);
  }

  checkMove(letter, index) {
    if (this.#bridge[index] === letter) {
      return [letter, true];
    }
    return [letter, false];
  }

  get bridgeLength() {
    return this.#bridge.length;
  }

  makeRandomBridge(input) {
    const bridgeGenerator = BridgeRandomNumberGenerator.generate;
    const randomBridge = BridgeMaker.makeBridge(input, bridgeGenerator);

    return randomBridge;
  }

  validation(input) {
    this.#validForm(input);
    this.#validRange(input);
  }

  #validForm(input) {
    const reg = /^[0-9]+$/;

    if (!reg.test(input)) {
      throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    }
  }

  #validRange(input) {
    if (input < BRIDGE.length.minimum || BRIDGE.length.maximum < input) {
      throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    }
  }
}

module.exports = Bridge;
