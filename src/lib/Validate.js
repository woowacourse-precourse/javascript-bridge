const MESSAGE = require("./Message");
const CONSTANT = require("./Constant");

class Validate {
  static isNumber(number) {
    if (typeof +number !== "number") {
      throw new Error(`${MESSAGE.ERROR.PREFIX} ${MESSAGE.ERROR.NUMBER}`);
    }
    if (!Number.isInteger(+number)) {
      throw new Error(`${MESSAGE.ERROR.PREFIX} ${MESSAGE.ERROR.NUMBER}`);
    }
  }

  static bridgeLength(number) {
    this.isNumber(number);
    if (+number < CONSTANT.BRIDGE.LENGTH.MIN) {
      throw new Error(`${MESSAGE.ERROR.PREFIX} ${MESSAGE.ERROR.MINLENGT}`);
    }
    if (+number > CONSTANT.BRIDGE.LENGTH.MAX) {
      throw new Error(`${MESSAGE.ERROR.PREFIX} ${MESSAGE.ERROR.MAXLENGT}`);
    }
  }

  static bridgeDirection(diredtion) {
    if (diredtion !== "U" && diredtion !== "D") {
      throw new Error(`${MESSAGE.ERROR.PREFIX} ${MESSAGE.ERROR.DIRECTION}`);
    }
  }

  static restart(answer) {
    if (answer !== "R" && answer !== "Q") {
      throw new Error(`${MESSAGE.ERROR.PREFIX} ${MESSAGE.ERROR.RESTART}`);
    }
  }
}
module.exports = Validate;
