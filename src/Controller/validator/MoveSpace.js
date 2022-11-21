const OutputView = require("../../View/OutputView");

const { ORDER, ERROR, ISALLOW } = require("../../utils/constants");

class MoveSpace {
  #input;

  constructor(input) {
    this.#input = input;
  }

  checkInput() {
    try {
      if (!this.isAllowOrder()) throw new Error(`${ERROR.MOVE_ORDER}`);
      return ISALLOW.TRUE;
    } catch (errorMessage) {
      OutputView.printErrorMessage(errorMessage);
      return ISALLOW.FALSE;
    }
  }

  isAllowOrder() {
    return this.#input === ORDER.UP || this.#input === ORDER.DOWN;
  }
}

module.exports = MoveSpace;
