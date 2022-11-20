const { REGEX, BRIDGE, COMMAND } = require('./constant/Constant');

const Validator = {
  errorIfBridgeSizeInvalid(bridgeSize) {
    if (
      !REGEX.IS_NUMBER.test(bridgeSize) ||
      Number(bridgeSize) < BRIDGE.MIN_SIZE ||
      Number(bridgeSize) > BRIDGE.MAX_SIZE
    ) {
      throw Error;
    }
  },
};

module.exports = Validator;
