class BridgeSize {
  #bridgeSize;

  constructor(bridgeSize) {
    this.#bridgeSize = bridgeSize;
  }

  validation(bridgeSize) {
    const errorMessage = this.#isNumber(bridgeSize) || this.#isNumberInRange(bridgeSize);
    console.log(errorMessage);
  }

  #isNumber(string) {
    return /^\d+$/.test(string) ? false : 'NUMBER';
  }

  #isNumberInRange(string) {
    return Number(string) >= 3 && Number(string) <= 20 ? false : 'RANGE';
  }
}

module.exports = BridgeSize;
