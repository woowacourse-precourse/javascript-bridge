const OutputView = require("../../View/OutputView");

const { COMMAND, ISALLOW } = require("../../utils/constants");
const { ERROR } = require("../../utils/gameMessage");

class GameCommand {
  constructor(input) {
    this.input = input;
  }

  checkInput() {
    try {
      if (!this.isAllowOrder())
        throw new Error(OutputView.printErrorMessage(ERROR.GAMECOMMAND));
    } catch {
      return ISALLOW.FALSE;
    }
    return ISALLOW.TRUE;
  }

  isAllowOrder() {
    return this.input === COMMAND.RETRY || this.input === COMMAND.QUIT;
  }
}

module.exports = GameCommand;
