const { Console } = require("@woowacourse/mission-utils");
const { ORDER, ERROR, ISALLOW } = require("../constants");

class MoveSpace {
  #input;

  constructor(input) {
    this.#input = input;
  }

  checkInput() {
    try {
      if (this.isAllowOrder()) throw new Error();
      return ISALLOW.TRUE;
    } catch (e) {
      Console.print(ERROR.MOVE_ORDER);
      return ISALLOW.FALSE;
    }
  }

  isAllowOrder() {
    return this.#input !== ORDER.UP && this.#input !== ORDER.DOWN;
  }
}

module.exports = MoveSpace;
