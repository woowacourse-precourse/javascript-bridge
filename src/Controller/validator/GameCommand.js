const OutputView = require("../../View/OutputView");

const { COMMAND, ISALLOW } = require("../../utils/constants");
const { ERROR } = require("../../utils/gameMessage");

class GameCommand {
  #input;

  constructor(input) {
    this.#input = input;
  }

  checkInput() {
    try {
      if (!this.isAllowOrder())
        throw OutputView.printErrorMessage(ERROR.GAMECOMMAND);
      return ISALLOW.TRUE;
    } catch {
      return ISALLOW.FALSE;
    }
  }

  isAllowOrder() {
    return this.#input === COMMAND.RETRY || this.#input === COMMAND.QUIT;
  }
}

module.exports = GameCommand;
