const GameCommands = require("./GameCommands");
const ErrorMessage = require("../messages/ErrorMessage");
const Directions = require("./Directions");

class Validator {
  static isInteger(input) {
    if (Number.isNaN(Number(input))) {
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

  static isValidCommand(command) {
    if (command !== GameCommands.QUIT && command !== GameCommands.RETRY) {
      throw new Error(ErrorMessage.NOT_VALID_COMMAND);
    }
  }

  static isInRange(num, min, max) {
    if (num < min || num > max) throw new Error(ErrorMessage.NOT_IN_RANGE);
  }
}

module.exports = Validator;
