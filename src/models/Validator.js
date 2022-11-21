const { BRIDGE, HOTKEY, ERROR } = require("../constants/constants");

class Validator {
  static checkBridgeLengthInput(bridgeLength) {
    if (this.#isNotNumber(bridgeLength)) {
      throw new Error(ERROR.notNumber);
    }
    if (this.#isNotRangeOfBridgeLength(bridgeLength)) {
      throw new Error(ERROR.notRangeOfBridgeLength);
    }
  }

  static checkDirectionInput(direction) {
    if (this.#isNotValidDirectionInput(direction)) {
      throw new Error(ERROR.notValidDirectionInput)
    }
  }

  static checkRetryInput(input) {
    if (this.#isNotValidRetryInput(input)) {
      throw new Error(ERROR.notValidRetryInput)
    }
  }

  static #isNotNumber(num) {
    const check = /^[0-9]+$/; 
    return !check.test(num);
  }

  static #isNotRangeOfBridgeLength(bridgeLength) {
    return bridgeLength < BRIDGE.min || bridgeLength > BRIDGE.max; 
  }

  static #isNotValidDirectionInput(direction) {
    return direction !== HOTKEY.up && direction !== HOTKEY.down;
  }

  static #isNotValidRetryInput(input) {
    return input !== HOTKEY.retry && input !== HOTKEY.quit;
  }
}

module.exports = Validator;
