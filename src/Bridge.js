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

  getComponents() {
    return this.#components;
  }

  setComponents(length) {
    this.#components = makeBridge(length, generate);
  }

  getComponent(index) {
    return this.#components[index];
  }
}

module.exports = Bridge;
