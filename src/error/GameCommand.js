const { ERROR, COMMAND } = require("../utils/constants");

class GameCommand {
  #input;

  constructor(input) {
    this.#input = input;
    this.checkInput();
  }

  checkInput() {
    try {
      if (this.isAllowOrder()) throw new Error(ERROR.GAMECOMMANDO);
    } catch (e) {
      return InputView.readMoving();
    }
  }

  isAllowOrder() {
    return this.#input !== COMMAND.RETRY && this.#input !== COMMAND.QUIT;
  }
}

module.exports = GameCommand;
