const {
  ERROR_MESSAGE,
  BRIDGE_LENGTH_LIMIT,
  APPROPRIATE_INPUT,
} = require("./Constants");
const { NOT_APPROPRIATE_LENGTH, WRONG_MOVEMENT } = ERROR_MESSAGE;
const { UP, DOWN } = APPROPRIATE_INPUT;

class Validator {
  bridgeLength(bridgeLength) {
    if (!BRIDGE_LENGTH_LIMIT.includes(Number(bridgeLength))) {
      throw new Error(NOT_APPROPRIATE_LENGTH);
    }
  }

  userMovement(upOrDown) {
    if (upOrDown !== UP && upOrDown !== DOWN) {
      throw new Error(WRONG_MOVEMENT);
    }
  }
}

module.exports = Validator;
