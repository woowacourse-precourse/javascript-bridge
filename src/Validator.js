const { ERROR } = require('./utils/constant');

const bridgeSizeValidator = {
  isNumber(size) {
    return /^[1-9]/g.test(size);
  },

  isValidRange(size) {
    return 3 <= size && size <= 20;
  },

  isBridgeSizeValid(size) {
    if (!this.isNumber(size)) throw new Error(ERROR.NUMBER);

    if (!this.isValidRange(size)) throw new Error(ERROR.RANGE);
  },
};

module.exports = { bridgeSizeValidator };
