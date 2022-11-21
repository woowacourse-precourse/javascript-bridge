class BridgeValidator {
  constructor({ bridgeSize: { min, max } }) {
    this.min = min;
    this.max = max;
  }

  isValidBridgeSize(number) {
    const size = Number(number);

    if (size < this.min || size > this.max) {
      throw new Error('[ERROR]');
    }
  }
}

module.exports = BridgeValidator;
