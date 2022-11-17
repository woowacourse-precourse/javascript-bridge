const { makeBridge } = require('./BridgeMaker');

class Bridge {
  #components;

  constructor() {
    this.#components = [];
  }

  componentsLength() {
    return this.#components;
  }

  setCompoents(length) {
    this.#components = makeBridge(length);
  }
}

module.exports = Bridge;
