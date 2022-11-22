const OutputView = require("../../View/OutputView");

const { SIZE, ISALLOW } = require("../../utils/constants");
const { ERROR } = require("../../utils/gameMessage");

class BridgeSize {
  #input;

  constructor(input) {
    this.#input = +input;
  }

  checkInput() {
    try {
      if (this.isAllowNumber() || this.isAllowRange())
        throw new Error(`${ERROR.BRIDGE_SIZE}`);
      return ISALLOW.TRUE;
    } catch (errorMessage) {
      OutputView.printErrorMessage(errorMessage);
      return ISALLOW.FALSE;
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
