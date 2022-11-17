const SIZE = require('../constant/Size');
const ERROR_MESSAGE = require('../constant/ErrorMessage');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');

const Validator = {
  validateSize(size) {
    checkRange(size);
    isNumber(size);
    isInteger(size);
    BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  },
};

const checkRange = size => {
  if (size < SIZE.RANGE.LOWER || size > SIZE.RANGE.UPPER) {
    throw new Error(ERROR_MESSAGE.RANGE);
  }
};

const isInteger = size => {
  if (size % 1 !== 0) {
    throw new Error(ERROR_MESSAGE.INTEGER);
  }
};

const isNumber = size => {
  if (size) {
    return;
  }
  throw new Error(ERROR_MESSAGE.NUMBER);
};

module.exports = Validator;
