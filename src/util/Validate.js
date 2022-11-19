const { ERROR_MESSAGE } = require("./Constant");

const Validate = {
  validateReadBridgeSize(size) {
    const exceptNumber = /[^0-9]/;
    if (exceptNumber.test(size)) throw new Error(ERROR_MESSAGE.BRIDGE_SIZE);
  },
};

module.exports = Validate;
