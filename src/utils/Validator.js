const GameCommands = require("../bridge/GameCommands");
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
}

module.exports = Validator;
