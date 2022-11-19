const { ERROR } = require('./utils/constant');

const bridgeSizeValidator = {
  isNumber(size) {
    return /^[1-9][^.]/g.test(size);
  },

  isValidRange(size) {
    return 3 <= size && size <= 20;
  },

  isBridgeSizeValid(size) {
    if (!this.isNumber(size) || !this.isValidRange(Number(size)))
      throw new Error(ERROR.BRIDGE_SIZE);
  },
};

const directionValidator = {
  isUpOrDown(direction) {
    return direction === 'U' || direction === 'D';
  },

  isDirectionValid(direction) {
    if (!this.isUpOrDown(direction)) {
      throw new Error(ERROR.DIRECTION);
    }
  },
};

module.exports = { bridgeSizeValidator, directionValidator };
