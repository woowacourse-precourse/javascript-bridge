const { ERROR_MESSAGE } = require("./constants/message");

const Validation = {
  checkBridgeLength(length) {
    this.isOnlyNumber(length);
  },

  isOnlyNumber(length) {
    if (isNaN(length)) throw new Error(ERROR_MESSAGE.NUMBER);
  },
};

module.exports = Validation;
