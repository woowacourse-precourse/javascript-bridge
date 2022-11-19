const command = require('./util/command');

const InputVaildator = {
  isVaildLength(input) {
    if (!Number.isInteger(+input)) {
      return false;
    }
    return +input > 0;
  },

  isVaildStep(input) {
    return input === command.UP || input === command.DOWN;
  },
};

module.exports = InputVaildator;
