const { ERROR_MESSAGE, BRIDGE_RULE } = require('./constants');

const REGEX_NUM = Object.freeze(/^[0-9]+$/);

const isNum = (size) => {
  if (size.match(REGEX_NUM) === null) throw ERROR_MESSAGE.VALIDATION_SIZE;
};

const isInRange = (size) => {
  if (size < BRIDGE_RULE.MIN_LENGTH || size > BRIDGE_RULE.MAX_LENGTH)
    throw ERROR_MESSAGE.VALIDATION_SIZE;
};

const binaryToDirection = (binary) => {
  if (binary == 1) return (binary = BRIDGE_RULE.MOVE_UP);
  return (binary = BRIDGE_RULE.MOVE_DOWN);
};

module.exports = {
  isNum,
  isInRange,
  binaryToDirection,
};
