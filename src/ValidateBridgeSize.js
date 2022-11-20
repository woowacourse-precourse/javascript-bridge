const { GAME_VALUES } = require("./constant");

class ValidateBridgeSize {
  constructor(bridgeSize) {
    this.bridgeSize = bridgeSize;
  }

  get bridgeSize() {
    return this._bridgeSize;
  }

  set bridgeSize(bridgeSize) {
    if (this.validate(bridgeSize) === false) throw new Error("[ERROR]");
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

  isRange = (input) => (
    input >= GAME_VALUES.minBridgeSize &&
    input <= GAME_VALUES.maxBridgeSize
  );
}

module.exports = ValidateBridgeSize;