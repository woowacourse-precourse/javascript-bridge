const { Console } = require("@woowacourse/mission-utils");
const { ERROR, COMMAND } = require("../constants");

class GameCommand {
  #input;

  constructor(input) {
    this.#input = input;
  }

  checkInput() {
    try {
      if (this.isAllowOrder()) throw new Error();
      return true;
    } catch (e) {
      Console.print(ERROR.GAMECOMMAND);
      return false;
    }
  }

  isAllowOrder() {
    return this.#input !== COMMAND.RETRY && this.#input !== COMMAND.QUIT;
  }
}

module.exports = GameCommand;
