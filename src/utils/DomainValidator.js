const Validator = require('./Validator');
const ERROR = require('../constants/error');

const DomainValidator = {
  validateBridgeSize(bridgeSize) {
    if (!Validator.isBridgeSize(bridgeSize)) throw new Error(ERROR.BRIDGE_SIZE);
  },

  validateBridge(bridge) {
    bridge.forEach((moving) => {
      if (!Validator.isMoving(moving)) throw new Error(ERROR.BRIDGE);
    });
  },

  validateMoving(moving) {
    if (!Validator.isMoving(moving)) throw new Error(ERROR.MOVING);
  },

  validateMoveCount(moveCount) {
    if (!Validator.isNumber(moveCount)) throw new Error(ERROR.MOVE_COUNT);
  },

  validateMoveCountOverBridgeSize(moveCount, bridgeSize) {
    if (Validator.isMoveCountOverBridgeSize(moveCount, bridgeSize))
      throw new Error(ERROR.MOVE_COUNT_OVER_BRIDGE_SIZE);
  },
};

module.exports = DomainValidator;
