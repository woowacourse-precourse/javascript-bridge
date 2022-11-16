const { ERROR_MSG } = require("../constants");

const ValidateCommand = (cmd) => {
  if (cmd != "R" && cmd != "Q") {
    throw new Error(ERROR_MSG.INPUT_RETRY_ERROR);
  }
};

module.exports = ValidateCommand;
