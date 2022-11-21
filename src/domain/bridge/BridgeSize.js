const BridgeSizeException = require('../../exception/BridgeSizeException');

class BridgeSize {
  static #RULES = {
    min: 3,
    max: 20,
  };

  static validate(size) {
    if (size < BridgeSize.#RULES.min) {
      throw new BridgeSizeException(BridgeSize.#RULES);
    }

    if (size > BridgeSize.#RULES.max) {
      throw new BridgeSizeException(BridgeSize.#RULES);
    }
  }
}

module.exports = BridgeSize;
