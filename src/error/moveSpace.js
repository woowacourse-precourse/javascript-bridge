const { Console } = require("@woowacourse/mission-utils");
const { ORDER, ERROR } = require("../utils/constants");

class MoveSpace {
  #input;

  constructor(input) {
    this.#input = input;
  }

  checkInput() {
    try {
      if (this.isAllowOrder()) throw new Error();
      return true;
    } catch (e) {
      Console.print(ERROR.MOVE_ORDER);
      return false;
    }
  }

  isAllowOrder() {
    return this.#input !== ORDER.UP && this.#input !== ORDER.DOWN;
  }
}

module.exports = MoveSpace;
