const { makeBridge } = require("../BridgeMaker");
const { generate } = require("../BridgeRandomNumberGenerator");
const { BRIDGE } = require("../constants/bridge.constants");
const InValidInputError = require("../error/InValidInputError");

class Bridge {
  #bridge;

  constructor(size) {
    this.validate(size);
    this.#bridge = makeBridge(size, generate);
  }

  validate(size) {
    if (!/^[0-9]+$/.test(string)) throw new InValidInputError(BRIDGE.NO_NUM);
    if (size < 3 || size > 20) throw new InValidInputError(BRIDGE.NO_RANGE);
  }
}

module.exports = Bridge;
