const OutputView = require("../../View/OutputView");

const { ERROR, COMMAND, ISALLOW } = require("../../utils/constants");

class GameCommand {
  #input;

  constructor(input) {
    this.#input = input;
  }

  checkInput() {
    try {
      if (!this.isAllowOrder()) throw new Error(`${ERROR.GAMECOMMAND}`);
      return ISALLOW.TRUE;
    } catch (errorMessage) {
      OutputView.printErrorMessage(errorMessage);
      return ISALLOW.FALSE;
    }
  }

  isAllowOrder() {
    return this.#input === COMMAND.RETRY || this.#input === COMMAND.QUIT;
  }
}

module.exports = GameCommand;
