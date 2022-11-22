const {
  ERROR_MESSAGE,
  BRIDGE_LENGTH_LIMIT,
  APPROPRIATE_INPUT,
} = require("./Constants");
const { NOT_APPROPRIATE_LENGTH, WRONG_MOVEMENT, WRONG_ENDING_COMMAND, BLANK } =
  ERROR_MESSAGE;
const { UP, DOWN, RESTART, QUIT } = APPROPRIATE_INPUT;

class Validator {
  bridgeLength(bridgeLength) {
    if (!BRIDGE_LENGTH_LIMIT.includes(Number(bridgeLength))) {
      throw new Error(NOT_APPROPRIATE_LENGTH);
    }
    if (String(bridgeLength) !== String(bridgeLength).replace(/ /g, "")) {
      throw new Error(BLANK);
    }
  }

  userMovement(upOrDown) {
    if (upOrDown !== upOrDown.replace(/ /g, "")) {
      throw new Error(BLANK);
    }
    if (upOrDown !== UP && upOrDown !== DOWN) {
      throw new Error(WRONG_MOVEMENT);
    }
  }

  ending(restartOrQuit) {
    if (restartOrQuit !== restartOrQuit.replace(/ /g, "")) {
      throw new Error(BLANK);
    }
    if (restartOrQuit !== RESTART && restartOrQuit !== QUIT) {
      throw new Error(WRONG_ENDING_COMMAND);
    }
  }
}

module.exports = Validator;
