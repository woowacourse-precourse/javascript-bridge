const Validator = require('./Validator');

class BridgeValidator extends Validator {
  constructor({ bridgeSize: { min, max } }) {
    super();
    this.min = min;
    this.max = max;
  }

  isValidBridgeSize(number) {
    const size = Number(number);

    if (size < this.min || size > this.max) {
      throw new Error(`${this.ERROR_MESSAGE_HEADER} 다리 길이는 ${this.min}부터 ${this.max}사이의 숫자여야 합니다.`);
    }
  }
}

module.exports = BridgeValidator;
