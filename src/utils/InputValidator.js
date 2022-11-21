const { ErrorMsg } = require("../constants/Constant");

const InputValidator = {
  checkBridgeSize(input) {
    if (input.length === 0) throw new Error(ErrorMsg.EMPTY);
    if (input.replace(/\d/g, "").length > 0)
      throw new Error(ErrorMsg.NOT_NUMBER);
    if (parseInt(input) < 3 || parseInt(input) > 20)
      throw new Error(ErrorMsg.OUT_OF_RANGE);
  },

  checkMove(input) {
    if (input.length === 0) throw new Error(ErrorMsg.EMPTY);
    if (input.replace(/U|D/, "").length > 0)
      throw new Error(ErrorMsg.NOT_MOVE_COMMAND);
  },

  checkRestart(input) {
    if (input.length === 0) throw new Error(ErrorMsg.EMPTY);
    if (input.replace(/R|Q/, "").length > 0)
      throw new Error(ErrorMsg.NOT_RESTART_COMMAND);
  },
};

module.exports = InputValidator;
