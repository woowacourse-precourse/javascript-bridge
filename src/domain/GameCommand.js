class GameCommand {
  static #COMMAND = {
    retry: 'R',
    quit: 'Q',
  };

  static validate(command) {
    const { values } = Object;
    if (!values(GameCommand.#COMMAND).includes(command)) {
      throw new Error('[ERROR] 존재하지 않는 커맨트 입니다.');
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
