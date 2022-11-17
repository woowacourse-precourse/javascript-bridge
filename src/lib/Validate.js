const Message = require("./Message");
const Constant = require("./Constant");

class Validate {
  static isNumber(number) {
    if (typeof +number !== "number") {
      throw new Error(`${Message.ERROR.PREFIX} ${Message.ERROR.NUMBER}`);
    }
    if (!Number.isInteger(+number)) {
      throw new Error(`${Message.ERROR.PREFIX} ${Message.ERROR.NUMBER}`);
    }
  }

  static bridgeLength(number) {
    this.isNumber(number);
    if (+number < Constant.BRIDGE.LENGTH.MIN) {
      throw new Error(`${Message.ERROR.PREFIX} ${Message.ERROR.MINLENGT}`);
    }
    if (+number > Constant.BRIDGE.LENGTH.MAX) {
      throw new Error(`${Message.ERROR.PREFIX} ${Message.ERROR.MAXLENGT}`);
    }
  }
  static errorCatch(validate, callBack) {
    try {
      validate();
    } catch {
      callBack();
    }
  }
}
module.exports = Validate;
