const command = require("./utils/command");

const InputValidator = {
  isValidLength(input) {
    if (!Number.isInteger(+input)) {
      return false;
    }
    if (!(+input > 0)) {
      return false;
    }
    return 3 <= +input && +input <= 20;
  },

  isValidStep(input) {
    return input === command.UP || input === command.DOWN;
  },
};

module.exports = InputValidator;
