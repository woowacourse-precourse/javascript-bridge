const BridgeMaker = require('../BridgeMaker');
const { BRIDGE, ERROR } = require('../utils/constants');
const { generate } = require('../BridgeRandomNumberGenerator');

class Bridge {
  #size;
  #bridgeStructure;

  constructor(size) {
    this.#validateSize(size);
    this.#size = size;
    this.#bridgeStructure = BridgeMaker.makeBridge(size, generate);
  }

  #validateSize(size) {
    if (size < BRIDGE.MIN_SIZE || size > BRIDGE.MAX_SIZE) {
      throw new Error(ERROR.INVALID_BRIDGE_SIZE_ERROR);
    }
  }

  /**
   * 건널 수 있는 칸인지 알려주는 역할을 하는 메서드
   * @param {number} positionNumber 칸 번호
   * @param {string} moving 다리의 모양. 'U' 또는 'D'이다.
   * @return {boolean}
   */
  isAccessiblePosition(positionNumber, moving) {
    return this.#bridgeStructure[positionNumber] === moving;
  }

  isEndOfBridge(positionNumber) {
    return this.#size === positionNumber;
  }
}

module.exports = Bridge;
