const InputView = require("../InputView");
const { ORDER } = require("../utils/constants");

class MoveSpace {
  #input;

  constructor(input) {
    this.#input = input;
    this.checkInput();
  }

  checkInput() {
    try {
      if (this.isAllowOrder()) throw new Error(ERROR.MOVE_ORDER);
    } catch (e) {
      return InputView.readMoving();
    }
  }

  isAllowOrder() {
    return this.#input !== ORDER.UP && this.#input !== ORDER.DOWN;
  }
}

module.exports = MoveSpace;
