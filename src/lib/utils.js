const { MOVE_COMMAND, GAME_COMMAND } = require('../constants/Settings');
const { ERROR_MESSAGES } = require('../constants/Error');

const CommandError = require('../errors/CommandError');

const checkCommand = (command, type) => {
  const typeOfCommand = type === 'move' ? MOVE_COMMAND : GAME_COMMAND;
  let commands = Object.values(typeOfCommand);

  const isWrongCommand = (command) => !commands.includes(command);

  if (isWrongCommand(command)) throw new CommandError(ERROR_MESSAGES.wrongCommand(commands));
};

const tryCatch = async (tryfunc) => {
  while (true) {
    try {
      const result = await tryfunc();
      return result;
    } catch (error) {
      OutputView.printError(error);
    }
  }
};

module.exports = { checkCommand };
