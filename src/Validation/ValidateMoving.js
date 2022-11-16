const { ERROR_MSG } = require("../constants");

const ValidateMoving = (move) => {
  if (move != "U" && move != "D") {
    throw new Error(ERROR_MSG.INPUT_MOVING_ERROR);
  }
};

module.exports = ValidateMoving;
