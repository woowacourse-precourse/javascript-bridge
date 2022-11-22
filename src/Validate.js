const { ERR_MESSAGE, COMMAND_VALUE } = require("./constants/constant");

const Validate = {
  isNumber(value) {
    const check = isNaN(value);
    if (check) {
      throw new Error(ERR_MESSAGE.ERR_ISNUMBER);
    }
    return;
  },

  checkLength(value) {
    if (value <= 20 && value >= 3) {
      return;
    }
    throw new Error(ERR_MESSAGE.ERR_BRIDGE_LENGTH);
  },

  checkMovingKey(value) {
    const check = value.toUpperCase();
    if (check === COMMAND_VALUE.UP || check === COMMAND_VALUE.DOWN) {
      return check;
    }
    throw new Error(ERR_MESSAGE.ERR_COMMAND_KEY);
  },

  checkRetryOrCloseKey(value) {
    const check = value.toUpperCase();
    if (check === COMMAND_VALUE.RETRY || check === COMMAND_VALUE.QUIT) {
      return check;
    }
    throw new Error(ERR_MESSAGE.ERR_COMMAND_KEY);
  },
};
module.exports = Validate;
