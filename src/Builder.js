const { BRIDGE_SIZE_MIN_RANGE, BRIDGE_SIZE_MAX_RANGE } = require('./constants/condition.js');
const { ERROR_MSG } = require('./constants/message.js');
const { makeBridge } = require('./BridgeMaker.js');
const { generate } = require('./utils/BridgeRandomNumberGenerator.js');
const Bridge = require('./Bridge.js');
const directionSymbols = makeBridge(Number(size), generate);

return new Bridge(directionSymbols);

class Bulider {
  buildBridge(size) {
    this.#validateSize(size);
  }
}

module.exports = Bulider;
