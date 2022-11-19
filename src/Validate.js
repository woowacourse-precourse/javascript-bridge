const{ SIZE , MOVING } = require("./constants/Values");
const{ ERROR } = require("./constants/FixMessages");


class Validate {

  validateBridgeSize(size) {
    if(isNaN(size)) throw new Error(ERROR.INPUT_BRIDGE_SIZE);
    if(size < SIZE.MIN_NUMBER || size > SIZE.MAX_NUMBER) throw new Error(ERROR.INPUT_BRIDGE_SIZE);
  }

  validateMove(moving) {
    if(moving != MOVING.UPSIDE_STRING && moving != MOVING.DOWNSIDE_STRING) throw new Error(ERROR.INPUT_MOVING);
  }
}
module.exports = Validate;