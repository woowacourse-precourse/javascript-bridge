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
      if (value === COMMAND_VALUE.UP || value === COMMAND_VALUE.DOWN) {
        return value;
      }
      throw err;
    } catch (err) {
      Console.print(ERR_MESSAGE.ERR_COMMAND_KEY);
    }
  },

  checkRetryOrCloseKey(value) {
    try {
      if (value === COMMAND_VALUE.RETRY || value === COMMAND_VALUE.QUIT) {
        return value;
      }
      throw err;
    } catch (err) {
      Console.print(ERR_MESSAGE.ERR_COMMAND_KEY);
    }
  },
};
module.exports = Validate;
