const { BRIDGE, HOTKEY, ERROR } = require("../constants/constants");

class Validator {
  checkBridgeLengthInput(bridgeLength) {
    if (this.isNotNumber(bridgeLength)) {
      throw new Error(ERROR.notNumber);
    }
    if (this.isNotRangeOfBridgeLength(bridgeLength)) {
      throw new Error(ERROR.notRangeOfBridgeLength);
    }
  }

  checkDirectionInput(direction) {
    if (this.isNotValidDirectionInput(direction)) {
      throw new Error(ERROR.notValidDirectionInput)
    }
  }

  checkRetryInput(input) {
    if (this.isNotValidRetryInput(input)) {
      throw new Error(ERROR.notValidRetryInput)
    }
  }

  isNotNumber(num) {
    const check = /^[0-9]+$/; 
    return !check.test(num);
  }

  isNotRangeOfBridgeLength(bridgeLength) {
    return bridgeLength < BRIDGE.min || bridgeLength > BRIDGE.max; 
  }

  isNotValidDirectionInput(direction) {
    return direction !== HOTKEY.up && direction !== HOTKEY.down;
  }

  isNotValidRetryInput(input) {
    return input !== HOTKEY.retry && input !== HOTKEY.quit;
  }
}

module.exports = Validator;
