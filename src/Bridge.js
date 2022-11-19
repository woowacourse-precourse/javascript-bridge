const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');

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
