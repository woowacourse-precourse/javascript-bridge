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

  isValidCommand(input) {
    return input === command.GAME_RESTART || input === command.GAME_QUIT;
  },
};

module.exports = InputValidator;
