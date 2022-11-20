const { SIZE, ERROR } = require("./constants/index");

const Validator = {
  checkBridgeSize(size) {
    if (size < SIZE.MIN || size > SIZE.MAX) {
      throw new Error(ERROR.INVALID_SIZE);
    }
  },
};

module.exports = Validator;
