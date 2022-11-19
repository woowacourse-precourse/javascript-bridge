const BridgeMaker = require('../BridgeMaker');
const { BRIDGE, ERROR } = require('../utils/constants');
const { generate } = require('../BridgeRandomNumberGenerator');

class Bridge {
  #size;
  #bridgeStructure;

  constructor(size) {
    this.#validateSize(size);
    this.#size = +size;
    this.#bridgeStructure = BridgeMaker.makeBridge(+size, generate);
  }

  //FIXME: 메서드 길이 10 초과
  #validateSize(size) {
    if (!/^[0-9]+$/.test(size)) {
      throw new Error(ERROR.bridge_size_error);
    }

    if (size !== String(+size)) {
      throw new Error(ERROR.bridge_size_error);
    }

    if (+size < BRIDGE.min_size || +size > BRIDGE.max_size) {
      throw new Error(ERROR.bridge_size_error);
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
}

module.exports = Bridge;
