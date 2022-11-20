const { Console } = require("@woowacourse/mission-utils");
const { ERROR } = require("./constant/constantValue");

const Validation = {
  checkBridgeLength(inputValue) {
    const number = this.checkBridgeNumber(inputValue);
    const range = this.checkBridgeRange(inputValue);

    if (number || range) {
      return true;
    }
    return false;
  },

  checkBridgeNumber(inputValue) {
    try {
      if (isNaN(inputValue)) throw new Error(`${ERROR.NUMBER}`);
    } catch (error) {
      Console.print(error.message);
      return true;
    }
  },

  checkBridgeRange(inputValue) {
    try {
      if (inputValue < 3 || inputValue > 20) throw new Error(`${ERROR.RANGE}`);
    } catch (error) {
      Console.print(error.message);
      return true;
    }
  },

  checkMovingValue(inputValue) {
    try {
      if (inputValue !== "U" && inputValue !== "D") {
        throw new Error(`${ERROR.MOVEMENT}`);
      }
    } catch (error) {
      Console.print(error.message);
      return true;
    }
  },
};

module.exports = Validation;
