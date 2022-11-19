const command = require('./util/command');

const InputValidator = {
  isValidLength(input) {
    if (!Number.isInteger(+input)) {
      return false;
    }
    return +input > 0;
  },

  isValidStep(input) {
    return input === command.UP || input === command.DOWN;
  },
};

module.exports = InputValidator;
