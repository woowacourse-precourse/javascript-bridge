const { ERROR_MESSAGE } = require('./Message');

const isNum = input => {
  const pattern = /[^0-9]/;
  if (!pattern.test(input)) return true;
  return false;
};

const isInRange = size => {
  if (size >= 3 && size <= 20) return true;
  return false;
};

const Validate = {
  validateReadBridgeSize(input) {
    if (!isNum(input)) throw new Error(ERROR_MESSAGE.BRIDGE_SIZE);
    if (!isInRange(input)) throw new Error(ERROR_MESSAGE.BRIDGE_SIZE);
  },
};

module.exports = Validate;
