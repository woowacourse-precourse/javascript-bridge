const BridgeGame = require("../bridge/BridgeGame");
const ErrorMessage = require("../messages/ErrorMessage");

class Validator {
  static isInteger(input) {
    if (input.match(/\D+/) || Number.isNaN(parseInt(input))) {
      throw new Error(ErrorMessage.NOT_INTEGER);
    }
  }

  static isValidDirection(direction) {
    if (
      direction !== BridgeGame.UP_DIRECTION &&
      direction !== BridgeGame.DOWN_DIRECTION
    )
      throw new Error(ErrorMessage.NOT_VALID_DIRECTION);
  }
}

module.exports = Validator;
