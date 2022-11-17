const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');

class Bridge {
  #bridge;

  constructor() {
    this.#bridge = '';
  }

  setBridge(number) {
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
