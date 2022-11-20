const {
  ERROR_MESSAGE,
  BRIDGE_LENGTH_LIMIT,
  APPROPRIATE_INPUT,
} = require("./Constants");
const { NOT_APPROPRIATE_LENGTH, WRONG_MOVEMENT, WRONG_ENDING } = ERROR_MESSAGE;
const { UP, DOWN, RESTART, QUIT } = APPROPRIATE_INPUT;

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

  ending(restartOrQuit) {
    if (restartOrQuit !== RESTART && restartOrQuit !== QUIT) {
      throw new Error(WRONG_ENDING);
    }
  }
}

module.exports = Validator;
