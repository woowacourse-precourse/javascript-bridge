const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');

class Bridge {
  #bridge;

  constructor(size) {
    this.setBridge(size);
  }

  setBridge(size) {
    this.#bridge = makeBridge(size, generate());
  }

  isMovable(direction, attempts) {
    return this.#bridge[attempts] === direction;
  }
}

module.exports = Bridge;
