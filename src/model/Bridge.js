const { BRIDGE, ERROR } = require('../utils/constants');

class Bridge {
  #size;
  #bridgeStructure;

  constructor(size) {
    this.#validateSize(+size);
    this.#size = +size;
  }

  #validateSize(size) {
    if (!/\d/.test(size)) {
      throw new Error(ERROR.bridge_size_error);
    }

    if (size < BRIDGE.min_size || size > BRIDGE.max_size) {
      throw new Error(ERROR.bridge_size_error);
    }
  }
}

module.exports = Bridge;
