const { INPUT_ERROR_MESSAGE } = require("./Constants");

const Validation = {
  checkNaN(value) {
    const check = /^[0-9]+$/;
    if (!check.test(value)) return true;
  },

  checkRange(value) {
    if (value < 3 || value > 20) return true;
  },

  checkBridgeSize(size) {
    if (this.checkNaN(size)) throw INPUT_ERROR_MESSAGE.NAN_ERROR;
    if (this.checkRange(parseInt(size))) throw INPUT_ERROR_MESSAGE.RANGE_ERROR;
  },

  checkDirection(direction) {
    if (!["U", "D"].includes(direction))
      throw INPUT_ERROR_MESSAGE.DIRECTION_ERROR;
  },

  checkGameCommand(command) {
    if (!["R", "Q"].includes(command)) throw INPUT_ERROR_MESSAGE.COMMAND_ERROR;
  },
};

module.exports = Validation;
