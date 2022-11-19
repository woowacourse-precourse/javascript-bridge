const { ERROR_MESSAGE } = require("./Constant");

const Validate = {
  validateReadBridgeSize(answer) {
    const exceptNumber = /[^0-9]/;
    if (exceptNumber.test(answer)) throw new Error(ERROR_MESSAGE.BRIDGE_SIZE);
  },
};

module.exports = Validate;
