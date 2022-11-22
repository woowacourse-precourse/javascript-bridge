const OutputView = require("../../View/OutputView");

const { COMMAND, ISALLOW } = require("../../utils/constants");
const { ERROR } = require("../../utils/gameMessage");

class GameCommand {
  #input;

  constructor(input) {
    this.#input = input;
  }

  checkInput() {
    if (this.isAllowOrder()) return;
    throw OutputView.printErrorMessage(ERROR.GAMECOMMAND);
  }

  isAllowOrder() {
    return this.#input === COMMAND.RETRY || this.#input === COMMAND.QUIT;
  }
}

module.exports = GameCommand;
