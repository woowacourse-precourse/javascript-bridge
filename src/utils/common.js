const { ERROR_MESSAGE } = require('../constants/index.js');

const isValidateNumber = (number) => {
  const numberRegex = /^[0-9]+$/g;
  if (!number.match(numberRegex)) {
    throw new Error(ERROR_MESSAGE.NON_NUMERIC_VALUE);
  }
};

const isCollectRange = (number, min, max) => {
  if (number < min || number > max) {
    throw new Error(ERROR_MESSAGE.INVALID_RANGE(min, max));
  }
};

module.exports = { isValidateNumber, isCollectRange };
