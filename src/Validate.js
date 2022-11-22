const { ERR_MESSAGE, COMMAND_VALUE } = require("./constants/constant");
const { Console } = require("@woowacourse/mission-utils");

const Validate = {
  isNumber(value) {
    try {
      const check = isNaN(value);
      if (check) {
        throw err;
      }
    } catch (err) {
      Console.print(ERR_MESSAGE.ERR_ISNUMBER);
    }
    return;
  },

  checkLength(value) {
    try {
      if (value <= 20 && value >= 3) {
        return;
      }
      throw err;
    } catch (err) {
      Console.print(ERR_MESSAGE.ERR_BRIDGE_LENGTH);
    }
  },

  checkMovingKey(value) {
    try {
      const check = value.toUpperCase();
      if (check === COMMAND_VALUE.UP || check === COMMAND_VALUE.DOWN) {
        return check;
      }
      throw err;
    } catch (err) {
      Console.print(ERR_MESSAGE.ERR_COMMAND_KEY);
    }
  },

  checkRetryOrCloseKey(value) {
    try {
      const check = value.toUpperCase();
      if (check === COMMAND_VALUE.RETRY || check === COMMAND_VALUE.QUIT) {
        return check;
      }
      throw err;
    } catch (err) {
      Console.print(ERR_MESSAGE.ERR_COMMAND_KEY);
    }
  },
};
module.exports = Validate;
