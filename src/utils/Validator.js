const {
  ERROR,
  SIZE_RANGE_INCLUSIVE,
  VALID_DIRECTION,
  VALID_RETRY_COMMAND,
} = require('./Constants');

const Validator = {
  validateBridgeSize(bridgeSize) {
    this.validateType(bridgeSize);
    this.validateRange(bridgeSize);
  },

  validateType(bridgeSize) {
    if (!Number(bridgeSize)) {
      throw ERROR.bridgeSizeType;
    }
  },

  validateRange(bridgeSize) {
    if (!this.isValidRange(bridgeSize)) {
      throw ERROR.bridgeSizeRange;
    }
  },

  isValidRange(bridgeSize) {
    return (
      bridgeSize >= SIZE_RANGE_INCLUSIVE.lower &&
      bridgeSize <= SIZE_RANGE_INCLUSIVE.upper
    );
  },

  validateDirection(direction) {
    if (!VALID_DIRECTION.test(direction)) {
      throw ERROR.direction;
    }
  },

  validateGameCommand(command) {
    if (!VALID_RETRY_COMMAND.test(command)) {
      throw ERROR.retry;
    }
  },
};

module.exports = Validator;
