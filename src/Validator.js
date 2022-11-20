const { SIZE, ERROR } = require("./constants/index");

const Validator = {
  checkBridgeSizeType(size) {
    if (isNaN(size)) {
      throw new Error(ERROR.SIZE_TYPE);
    }
  },

  checkBridgeSizeRange(size) {
    if (size < SIZE.MIN || size > SIZE.MAX) {
      throw new Error(ERROR.SIZE_RANGE);
    }
  },
};

const checkBridgeSizeValid = (size) => {
  Validator.checkBridgeSizeType(size);
  Validator.checkBridgeSizeRange(size);
};

module.exports = { checkBridgeSizeValid };
