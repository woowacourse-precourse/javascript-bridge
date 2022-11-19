const { Console } = require("@woowacourse/mission-utils");
const { SIZE, ERROR } = require("../constants");

class BridgeSize {
  #input;

  constructor(input) {
    this.#input = +input;
  }

  checkInput() {
    try {
      if (this.isAllowNumber() || this.isAllowRange()) throw new Error();
      return true;
    } catch (error) {
      Console.print(ERROR.BRIDGE_SIZE);
      return false;
    }
  }

  isAllowNumber() {
    return isNaN(this.#input);
  }

  isAllowRange() {
    return this.#input < SIZE.MIN || this.#input > SIZE.MAX;
  }
}

module.exports = BridgeSize;
