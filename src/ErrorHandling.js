const { BRIDGE_SIZE_NATURAL_NUMBER } = require('./ErrorMessage');

const ErrorHandling = {
  throwError(isInvalid, message) {},

  validateBridgeSize(size) {
    const isNotNaturalNumber = !(/^\d+$/.test(size) && Number(size));
    ErrorHandling.throwError(isNotNaturalNumber, BRIDGE_SIZE_NATURAL_NUMBER);
  },
};

module.exports = ErrorHandling;
