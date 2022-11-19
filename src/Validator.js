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
  const directionRegExp = /^U{1}$|^D{1}$/;
  if (!directionRegExp.test(direction)) {
    throw ERROR.direction;
  }
};

const validateGameCommand = (command) => {
  const commandRegExp = /^R{1}$|^Q{1}$/;
  if (!commandRegExp.test(command)) {
    throw ERROR.retry;
  }
};

module.exports = {
  validateBridgeSize,
  validateDirection,
  validateGameCommand,
};
