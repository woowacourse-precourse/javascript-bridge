const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');

class Bridge {
  #bridgeArray;

  constructor(size) {
    this.#bridgeArray = makeBridge(size, generate);
  }

  checkMove(index, direction) {
    return this.#bridgeArray[index] === direction;
  }

  checkLength(index) {
    return index < this.#bridgeArray.length;
  }

  getbridgePart(index) {
    return this.#bridgeArray[index];
  }
}
module.exports = Bridge;
