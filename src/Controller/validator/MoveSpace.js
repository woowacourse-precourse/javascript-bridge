const OutputView = require("../../View/OutputView");

const { ORDER, ISALLOW } = require("../../utils/constants");
const { ERROR } = require("../../utils/gameMessage");

class MoveSpace {
  #input;

  constructor(input) {
    this.#input = input;
  }

  checkInput() {
    if (this.isAllowOrder()) return;
    throw OutputView.printErrorMessage(ERROR.MOVE_ORDER);
  }

  isAllowOrder() {
    return this.#input === ORDER.UP || this.#input === ORDER.DOWN;
  }
}

module.exports = MoveSpace;
