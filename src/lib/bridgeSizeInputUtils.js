const { BRIDGE_SIZE_REGEX, ERROR } = require('./constants');

const changeSizeType = (size) => {
  return parseInt(size);
};

const sizeRegexTest = (size) => {
  if (!BRIDGE_SIZE_REGEX.test(size)) {
    return false;
  }
  return true;
};

const printBridgeSizeError = (check) => {
  if (!check) {
    throw ERROR.BRIDGE_SIZE_ERROR;
  }
};

module.exports = { changeSizeType, printBridgeSizeError, sizeRegexTest };
