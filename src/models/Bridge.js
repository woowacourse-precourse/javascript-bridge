const { makeBridge } = require('../utils/BridgeMaker');
const { generate } = require('../utils/BridgeRandomNumberGenerator');

class Bridge {
  bridgeArr;

  constructor(size) {
    this.bridgeArr = makeBridge(size, generate);
  }

  canMoveForward(index, direction) {
    return this.bridgeArr[index] === direction;
  }

  get bridgeArr() {
    return this.bridgeArr;
  }
}

module.exports = Bridge;
