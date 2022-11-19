const{ SIZE } = require("./constants/Values");
const{ ERROR } = require("./constants/FixMessages");


class Validate {

  validateBridgeSize(size) {
    if(isNaN(size)) throw new Error();
    if(size < SIZE.MIN_NUMBER || size > SIZE.MAX_NUMBER) throw new Error(ERROR.INPUT_BRIDGE_SIZE);
  }
}
module.exports = Validate;