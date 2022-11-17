const MissionUtils = require('@woowacourse/mission-utils');
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
    return index <= this.#bridgeArray.length;
  }
}
module.exports = Bridge;
