const { COMMAND } = require('./constant');
const Validator = require('./Validator');

const HandleCommand = {
  direction: (direction, nextCellDirection) => {
    Validator.directionValidityCheck(direction);

    return direction === nextCellDirection;
  },

  retry: (command) => {
    Validator.commandValidityCheck(command);

    return command === COMMAND.RETRY;
  },
};

module.exports = HandleCommand;
