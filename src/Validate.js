const { ErrorMsg } = require("./Constant");

const Validate = {
  bridgeSize(input) {
    if (input.replace(/\d/g, "").length > 0)
      throw new Error(ErrorMsg.NOT_NUMBER);
    if (parseInt(input) < 3 || parseInt(input) > 20)
      throw new Error(ErrorMsg.OUT_OF_RANGE);
  },

  move(input) {
    if (input.replace(/U|D/, "").length > 0)
      throw new Error(ErrorMsg.NOT_MOVE_COMMAND);
  },

  restart(input) {
    if (input.replace(/R|Q/, "").length > 0)
      throw new Error(ErrorMsg.NOT_RESTART_COMMAND);
  },
};

module.exports = Validate;
