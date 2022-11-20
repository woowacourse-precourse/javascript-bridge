const { LENGTH } = require("./constants/data");
const { ERROR_MESSAGE } = require("./constants/message");

const Validation = {
  checkBridgeLength(length) {
    this.isOnlyNumber(length);
    this.isInRange(length);
  },

  isOnlyNumber(length) {
    if (isNaN(length)) throw new Error(ERROR_MESSAGE.NUMBER);
  },
  isInRange(length) {
    if (length < LENGTH.MIN || length > LENGTH.MAX)
      throw new Error(ERROR_MESSAGE.RANGE);
  },
};

module.exports = Validation;
