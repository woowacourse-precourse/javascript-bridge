const { MIN_BRIDGE_SIZE, MAX_BRIDGE_SIZE } = require('./Command');
const { BRIDGE_SIZE_NATURAL_NUMBER, BRIDGE_SIZE_RANGE } = require('./ErrorMessage');

const ErrorHandling = {
  throwError(isInvalid, message) {},

  validateBridgeSize(size) {
    const isNotNaturalNumber = !(/^\d+$/.test(size) && Number(size));
    ErrorHandling.throwError(isNotNaturalNumber, BRIDGE_SIZE_NATURAL_NUMBER);

    size = Number(size);
    const isOutOfRange = size < MIN_BRIDGE_SIZE || size > MAX_BRIDGE_SIZE;
    ErrorHandling.throwError(isOutOfRange, BRIDGE_SIZE_RANGE);
  },
};

module.exports = ErrorHandling;
