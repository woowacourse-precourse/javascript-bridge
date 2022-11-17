const { BRIDGESIZE_ERROR, BRIDGESIZE_INFO } = require('./constant');
const ThrowError = require('./ThrowError');

class BridgeSize {
  #bridgeSize;

  constructor(bridgeSize) {
    this.#bridgeSize = bridgeSize;
  }

  showValidateResult() {
    return this.#validation(this.#bridgeSize);
  }

  #validation(bridgeSize) {
    const errorMessage = this.#isNumber(bridgeSize) || this.#isNumberInRange(bridgeSize);
    const throwError = new ThrowError(BRIDGESIZE_ERROR[errorMessage]);
    return errorMessage ? throwError.happen() : bridgeSize;
  }

  #isNumber(string) {
    return /^\d+$/.test(string) ? false : 'NUMBER';
  }

  #isNumberInRange(string) {
    return Number(string) >= BRIDGESIZE_INFO.MIN && Number(string) <= BRIDGESIZE_INFO.MAX
      ? false
      : 'RANGE';
  }
}

module.exports = BridgeSize;
