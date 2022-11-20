const { REGEX_NUM, ERROR_MESSAGE, BRIDGE_RULE } = require('./constants');
// const { consoleCloseAndThrow } = require('../utils/util');

const isNum = (size) => {
  if (size.match(REGEX_NUM) === null)
    throw new Error(ERROR_MESSAGE.VALIDATION_SIZE);
};

const isInRange = (size) => {
  if (size < BRIDGE_RULE.MIN_LENGTH || size > BRIDGE_RULE.MAX_LENGTH)
    throw new Error(ERROR_MESSAGE.VALIDATION_SIZE);
};

module.exports = {
  isNum,
  isInRange,
};
