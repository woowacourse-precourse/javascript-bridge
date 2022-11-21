const { BRIDGE } = require('../constants/Constants');
const { bridgeLengthValidation } = require('../utils/BridgeValidation');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');

const Bridge = class {
  #bridgeLength;
  #bridgeMap;

  setBridgeLength(bridgeLength) {
    this.#bridgeLength = bridgeLength;
    this.#setBridgeMap();
  }

  #setBridgeMap() {
    this.#bridgeMap = BridgeMaker.makeBridge(
      this.#bridgeLength,
      BridgeRandomNumberGenerator.generate
    );
  }

  isMovable(moving, index) {
    return this.#bridgeMap[index] === moving;
  }

  getBridgeLength() {
    return this.#bridgeLength;
  }

  getPartialBridgeMap(index) {
    return this.#bridgeMap.slice(0, index + 1);
  }
};

module.exports = Bridge;
