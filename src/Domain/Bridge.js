const DomainValidator = require('../validator/DomainValidator');

class Bridge {
  #bridge;

  constructor(bridge) {
    DomainValidator.validateBridgeSize(bridge.length);
    DomainValidator.validateBridge(bridge);
    this.#bridge = bridge;
  }

  canICross(moveCount, moving) {
    DomainValidator.validateMoveCount(moveCount);
    DomainValidator.validateMoving(moving);
    DomainValidator.validateMoveCountOverBridgeSize(moveCount, this.#bridge.length);

    return this.#bridge[moveCount] === moving;
  }

  getBridgeSize() {
    return this.#bridge.length;
  }
}

module.exports = Bridge;
