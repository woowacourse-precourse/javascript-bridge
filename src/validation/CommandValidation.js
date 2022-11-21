const { ERROR_MESSAGES } = require('../constants/Error');
const { COMMAND_TYPE } = require('../constants/Settings');

const CommandError = require('../errors/CommandError');

const CommandValidation = (command) => {
  const isWrongCommand = (command) => !Object.values(COMMAND_TYPE).includes(command);
  const checkCommand = (command) => {
    if (isWrongCommand(command)) throw new CommandError(ERROR_MESSAGES.wrongCommand);
  };
  const validate = (command) => {
    checkCommand(command);
  };

  return validate(command);
};

module.exports = CommandValidation;
