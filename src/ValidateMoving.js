class ValidateMoving {
  constructor(moving) {
    this.moving = moving;
  }

  get moving() {
    return this._moving;
  }

  set moving(moving) {
    if (this.validate(moving) === false) throw new Error("[ERROR]");
    else this._moving = moving;
  }

  validate(moving) {
    return (
      !this.isBlank(moving) &&
      this.isCorrectCharacter(moving)
    )
  }

  isBlank = (input) => !input;

  isCorrectCharacter = (input) => (input === "U" || input === "D");
}

module.exports = ValidateMoving;