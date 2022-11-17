class ValidateBridgeSize {
  constructor(bridgeSize) {
    if (this.validate(bridgeSize) === false) throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
    this.bridgeSize = bridgeSize;
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

  get bridgeSize() {
    return this._bridgeSize;
  }

  set bridgeSize(bridgeSize) {
    if (this.validate === false) throw new Error("[ERROR]");
    this._bridgeSize = Number(bridgeSize);
  }
}

module.exports = ValidateBridgeSize;