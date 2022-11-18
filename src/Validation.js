const { Console } = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const { ERROR_MESSAGE } = require("./constants");
class Validation {
  validateBridgeLength(input) {
    if (input < 3 || input > 20 || isNaN(Number(input))) {
      throw ERROR_MESSAGE.BRIDGELENGTH_ERROR;
    }
  }
}
module.exports = Validation;
