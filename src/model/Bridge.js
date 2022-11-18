const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const { BRIDGE, ERROR } = require('../utils/constants');

class Bridge {
  #size;
  #bridgeStructure;

  constructor(size) {
    this.#validateSize(size);
    this.#size = +size;
    this.#bridgeStructure = BridgeMaker.makeBridge(+size, BridgeRandomNumberGenerator.generate);
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
}

module.exports = Bridge;
