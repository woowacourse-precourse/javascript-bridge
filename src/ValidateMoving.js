class ValidateMoving {
  constructor(moving) {
    this.moving = moving;
  }

  get moving() {
    return this._moving;
  }

  set moving(moving) {
    if (this.validate(moving) === false) throw new Error("[ERROR] 이동할 칸은 'U' 혹은 'D'여야 합니다.");
    this._moving = moving;
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