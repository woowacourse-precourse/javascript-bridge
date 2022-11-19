class ValidateGameCommand {
  constructor(gameCommand) {
    this.gameCommand = gameCommand;
  }

  get gameCommand() {
    return this._gameCommand;
  }

  set gameCommand(gameCommand) {
    if (this.validate(gameCommand) === false) throw new Error("[ERROR] 재시작 혹은 종료는 'R' 혹은 'Q'여야 합니다.");
    this._gameCommand = gameCommand;
  }

  validate(gameCommand) {
    return (
      !this.isBlank(gameCommand) &&
      this.isCorrectCharacter(gameCommand)
    )
  }

  isBlank = (input) => !input;

  isCorrectCharacter = (input) => (input === "R" || input === "Q");
}

module.exports = ValidateGameCommand;