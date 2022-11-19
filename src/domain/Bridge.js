const { BRIDGE } = require('../constants/Constants');
const { bridgeLengthValidation } = require('../utils/BridgeValidation');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');

class Bridge {
  #bridgeLength;
  #bridgeMap;

  constructor(bridgeLength) {
    this.#bridgeLength = bridgeLength;
    this.#setBridgeMap();
  }

  #setBridgeMap() {
    this.#bridgeMap = BridgeMaker.makeBridge(
      this.#bridgeLength,
      BridgeRandomNumberGenerator.generate
    );
  }

  isMovable(index, moving) {
    return this.#bridgeMap[index] === moving;
  }

  partialBridgeMap(index) {
    return this.#bridgeMap.slice(0, index);
  }
}

module.exports = Bridge;
