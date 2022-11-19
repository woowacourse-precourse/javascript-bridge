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

  static bridgeDirection(diredtion) {
    if (diredtion !== "U" && diredtion !== "D") {
      throw new Error(`${Message.ERROR.PREFIX} ${Message.ERROR.DIRECTION}`);
    }
  }

  static restart(answer) {
    if (answer !== "R" && answer !== "Q") {
      throw new Error(`${Message.ERROR.PREFIX} ${Message.ERROR.RESTART}`);
    }
  }
}
module.exports = Validate;
