const GameCommandException = require('../exception/GameCommandException');

class GameCommand {
  static #COMMAND = {
    retry: 'R',
    quit: 'Q',
  };

  static validate(command) {
    const { values } = Object;
    const commands = values(GameCommand.#COMMAND);
    if (!commands.includes(command)) {
      throw new GameCommandException(commands);
    }
  }

  static isRetry(command) {
    return command === GameCommand.#COMMAND.retry;
  }

  static isQuit(command) {
    return command === GameCommand.#COMMAND.quit;
  }
}

module.exports = GameCommand;
