const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');

class Bridge {
  #components;

  constructor() {
    this.#components = [];
  }

  componentsLength() {
    return this.#components.length;
  }

  setComponents(length) {
    this.#components = makeBridge(length, generate);
  }
}

module.exports = Bridge;
