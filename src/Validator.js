const { BRIDGE } = require("./constants/bridge.constants");
const { INPUT_ERR } = require("./constants/input.constants");
const InValidInputError = require("./error/InValidInputError");

const Validator = {
  moveValidate(direction) {
    if (direction !== BRIDGE.UP && direction !== BRIDGE.DOWN)
      throw new InValidInputError(INPUT_ERR.DIRECTION_ERR);
  },

  endValidate(input) {
    if (input !== "R" && input !== "Q")
      throw new InValidInputError(INPUT_ERR.CONTROL_ERR);
  },
};

module.exports = Validator;
