const InputView = require("../InputView");
const { SIZE, ERROR } = require("../utils/constants");

class BridgeSize {
  #input;

  constructor(input) {
    this.#input = input;
    this.checkInput();
  }

  checkInput() {
    try {
      if (this.isAllowNumber() || this.isAllowRange())
        throw new Error(ERROR.BRIDGE_SIZE);
    } catch (e) {
      return InputView.readBridgeSize();
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
