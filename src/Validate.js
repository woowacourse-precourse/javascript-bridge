const { ERR_MESSAGE } = require("./constants/constant");

const Validate = {
  checkLength(value) {
    if (value <= 20 && value >= 3) {
      return;
    }
    throw new Error(ERR_MESSAGE.ERR_BRIDGE_LENGTH);
  },
};
module.exports = Validate;
