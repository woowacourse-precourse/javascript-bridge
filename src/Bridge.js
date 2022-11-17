const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');

class Bridge {
  #bridgeArray;
  constructor(length) {
    this.#bridgeArray = makeBridge(length, generate);
  }

  movable(index, inputDirection) {
    return this.#bridgeArray[index] === inputDirection;
  }

  checkLength(index) {
    return index < this.#bridgeArray.length;
  }
  getbridgePart(index) {
    return this.#bridgeArray[index];
  }
}
module.exports = Bridge;
