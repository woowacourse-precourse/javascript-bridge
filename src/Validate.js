const { ERR_MESSAGE } = require("./constants/constant");

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
    if (check === "U" || check === "D") {
      return check;
    }
    throw new Error("입력에러");
  },
};
module.exports = Validate;
