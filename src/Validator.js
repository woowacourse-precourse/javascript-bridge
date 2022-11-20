const { SIZE_RANGE_INCLUSIVE, ERROR } = require('./Constants');

const validateType = (bridgeSize) => {
  if (!bridgeSize) {
    throw ERROR.bridgeSizeType;
  }
};

const isValidRange = (bridgeSize) =>
  bridgeSize >= SIZE_RANGE_INCLUSIVE.lower &&
  bridgeSize <= SIZE_RANGE_INCLUSIVE.upper;

const validateRange = (bridgeSize) => {
  if (!isValidRange(bridgeSize)) {
    throw ERROR.bridgeSizeRange;
  }
};

const validateBridgeSize = (bridgeSizeString) => {
  const bridgeSize = Number(bridgeSizeString);
  validateType(bridgeSize);
  validateRange(bridgeSize);
};

const validateDirection = (direction) => {
  const validDirection = /^U{1}$|^D{1}$/;
  if (!validDirection.test(direction)) {
    throw ERROR.direction;
  }
};

const validateGameCommand = (command) => {
  const validRetryCommand = /^R{1}$|^Q{1}$/;
  if (!validRetryCommand.test(command)) {
    throw ERROR.retry;
  }
};

module.exports = {
  validateBridgeSize,
  validateDirection,
  validateGameCommand,
};
