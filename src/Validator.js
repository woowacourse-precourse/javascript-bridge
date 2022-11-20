const { SIZE_RANGE_INCLUSIVE, ERROR } = require('./Constants');

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
    const validDirection = /^U{1}$|^D{1}$/;
    if (!validDirection.test(direction)) {
      throw ERROR.direction;
    }
  },

  validateGameCommand(command) {
    const validRetryCommand = /^R{1}$|^Q{1}$/;
    if (!validRetryCommand.test(command)) {
      throw ERROR.retry;
    }
  },
};

module.exports = Validator;
