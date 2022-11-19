const { ERROR_MESSAGE } = require('./constants');

function isNumber(number) {
  const notNumber = /[^0-9]/;
  return !notNumber.test(number);
}

function isOutOf3To20(number) {
  if (number < 3 || number > 20) return false;
  return true;
}

const validation = {
  bridgeLength(length) {
    if (!isNumber(length)) throw new Error(ERROR_MESSAGE.BRIDGE_LENGTH_NUMBER);
    if (!isOutOf3To20(length))
      throw new Error(ERROR_MESSAGE.BRIDGE_LENGTH_RANGE);
  },
};

module.exports = validation;
