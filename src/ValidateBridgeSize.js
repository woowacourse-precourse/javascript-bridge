class ValidateBridgeSize {
  constructor(bridgeSize) {
    this.bridgeSize = bridgeSize;
  }

  get bridgeSize() {
    return this._bridgeSize;
  }

  set bridgeSize(bridgeSize) {
    if (this.validate(bridgeSize) === false) throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
    this._bridgeSize = Number(bridgeSize);
  }

  validate(bridgeSize) {
    return (
      !this.isBlank(bridgeSize) &&
      this.isNumber(bridgeSize) &&
      this.isRange(bridgeSize) &&
      Number.isInteger(Number(bridgeSize))
    )
  }

  isBlank = (input) => !input;

  isNumber = (input) => !isNaN(input);

  isRange = (input) => (input >= 3 && input <= 20);
}

module.exports = ValidateBridgeSize;