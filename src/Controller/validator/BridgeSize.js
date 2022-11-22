const OutputView = require("../../View/OutputView");

const { SIZE, ISALLOW } = require("../../utils/constants");
const { ERROR } = require("../../utils/gameMessage");

class BridgeSize {
  #input;

  constructor(input) {
    this.#input = +input;
  }

  checkInput() {
    if (!this.isAllowNumber() && this.isAllowRange()) return;
    throw OutputView.printErrorMessage(ERROR.BRIDGE_SIZE);
  }

  isAllowNumber() {
    return isNaN(this.#input);
  }

  isAllowRange() {
    return this.#input >= SIZE.MIN && this.#input <= SIZE.MAX;
  }
}

module.exports = BridgeSize;
