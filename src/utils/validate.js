const ERROR = require('../constant/error');

class Validate {
  static notNumber(input) {
    if (isNaN(input)) {
      throw new Error(ERROR.NOT_NUMBER);
    }
  }

  static notInRange(input, maximum, minimum) {
    if (input > maximum || input < minimum) {
      throw new Error(ERROR.BRIDGE_SIZE(maximum, minimum));
    }
  }

  static notAvailableMove(input, availableMoves) {
    if (!availableMoves.includes(input)) {
      throw new Error(ERROR.NOT_AVAILABLE_MOVE(availableMoves));
    }
  }
}

module.exports = Validate;
