const OutputView = require("../../View/OutputView");
const { ERROR, COMMAND, ISALLOW } = require("../../utils/constants");

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
      OutputView.printError(`\n${ERROR.GAMECOMMAND}`);
      return ISALLOW.FALSE;
    }
  }

  isAllowOrder() {
    return this.#input !== COMMAND.RETRY && this.#input !== COMMAND.QUIT;
  }
}

module.exports = GameCommand;
