const OutputView = require("../../View/OutputView");

const { ORDER, ERROR, ISALLOW } = require("../../utils/constants");

class MoveSpace {
  #input;

  constructor(input) {
    this.#input = input;
  }

  checkInput() {
    try {
      if (!this.isAllowOrder()) throw new Error();
      return ISALLOW.TRUE;
    } catch (e) {
      OutputView.printError(`\n${ERROR.MOVE_ORDER}`);
      return ISALLOW.FALSE;
    }
  }

  isAllowOrder() {
    return this.#input === ORDER.UP || this.#input === ORDER.DOWN;
  }
}

module.exports = MoveSpace;
