const{ SIZE , MOVING, RETRY } = require("./constants/Values");
const{ ERROR } = require("./constants/FixMessages");


class Validate {

  validateBridgeSize(size) {
    if(isNaN(size)) throw new Error(ERROR.INPUT_BRIDGE_SIZE);
    if(size < SIZE.MIN_NUMBER || size > SIZE.MAX_NUMBER) throw new Error(ERROR.INPUT_BRIDGE_SIZE);
  }

  validateMove(moving) {
    if(moving !== MOVING.UPSIDE_STRING && moving !== MOVING.DOWNSIDE_STRING) throw new Error(ERROR.INPUT_MOVING);
  }

  validateCommand(command) {
    if(command !== RETRY.REPLAY && command !== RETRY.END) throw new Error(ERROR.INPUT_RETRY);
  }
}

module.exports = Validate;