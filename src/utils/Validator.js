const BridgeGame = require("../bridge/BridgeGame");
const ErrorMessage = require("../messages/ErrorMessage");
const Directions = require("./Directions");

class Validator {
  static isInteger(input) {
    if (input.match(/\D+/) || Number.isNaN(parseInt(input))) {
      throw new Error(ErrorMessage.NOT_INTEGER);
    }
  }

  static isValidDirection(direction) {
    if (
      direction !== Directions.UP_DIRECTION &&
      direction !== Directions.DOWN_DIRECTION
    )
      throw new Error(ErrorMessage.NOT_VALID_DIRECTION);
  }
}

module.exports = Validator;
