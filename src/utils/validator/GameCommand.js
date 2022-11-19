const { Console } = require("@woowacourse/mission-utils");
const { ERROR, COMMAND, ISALLOW } = require("../constants");

class GameCommand {
  #input;

  constructor(input) {
    this.#input = input;
  }

  checkInput() {
    try {
      if (this.isAllowOrder()) throw new Error();
      return ISALLOW.TRUE;
    } catch (e) {
      Console.print(ERROR.GAMECOMMAND);
      return ISALLOW.FALSE;
    }
  }

  isAllowOrder() {
    return this.#input !== COMMAND.RETRY && this.#input !== COMMAND.QUIT;
  }
}

module.exports = GameCommand;
