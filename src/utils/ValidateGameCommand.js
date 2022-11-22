const { GAME_VALUES, ERROR_MESSAGES } = require("../constants/constant");

class ValidateGameCommand {
  constructor(gameCommand) {
    this.gameCommand = gameCommand;
  }

  get gameCommand() {
    return this._gameCommand;
  }

  set gameCommand(gameCommand) {
    if (this.validate(gameCommand) === false) throw new Error(ERROR_MESSAGES.gameCommand);
    this._gameCommand = gameCommand;
  }

  validate(gameCommand) {
    return (
      !this.isBlank(gameCommand) &&
      this.isCorrectCharacter(gameCommand)
    )
  }

  isBlank = (input) => !input;

  isCorrectCharacter = (input) => (
    input === GAME_VALUES.upperCharR ||
    input === GAME_VALUES.upperCharQ
  );
}

module.exports = ValidateGameCommand;
