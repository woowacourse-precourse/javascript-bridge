const { SIZE_RANGE_INCLUSIVE, ERROR } = require('./Constants');

const validateBridgeSize = (bridgeSizeString) => {
  const bridgeSize = Number(bridgeSizeString);
  if (!bridgeSize) {
    throw ERROR.bridgeSizeType;
  }
  if (
    !(
      bridgeSize >= SIZE_RANGE_INCLUSIVE.lower &&
      bridgeSize <= SIZE_RANGE_INCLUSIVE.upper
    )
  ) {
    throw ERROR.bridgeSizeRange;
  }
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
