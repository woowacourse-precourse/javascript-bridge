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
      if (this.isDecimal() || !this.isAllowNumber() || this.isAllowRange())
        throw new Error(OutputView.printErrorMessage(ERROR.BRIDGE_SIZE));
    } catch {
      return ISALLOW.FALSE;
    }
    return ISALLOW.TRUE;
  }

  isDecimal() {
    return String(this.#input).length !== String(~~this.#input).length;
  }

  isAllowNumber() {
    return /^[0-9]*$/g.test(this.#input);
  }

  isAllowRange() {
    return this.#input < SIZE.MIN || this.#input > SIZE.MAX;
  }
}

module.exports = BridgeSize;
