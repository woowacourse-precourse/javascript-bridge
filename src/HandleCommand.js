const { COMMAND } = require('./constant');
const Validator = require('./Validator');

const HandleCommand = {
  isCorrectDirection: (direction, nextCellDirection) => {
    Validator.directionValidityCheck(direction);

    return direction === nextCellDirection;
  },

  retryOrQuit: (command) => {
    Validator.commandValidityCheck(command);

    return command === COMMAND.RETRY;
  },
};

module.exports = HandleCommand;
