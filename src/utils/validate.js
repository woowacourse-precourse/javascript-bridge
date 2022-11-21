const ERROR = require('../constant/error');
const { print } = require('./util');

class Validate {
  static notNumber(input) {
    if (Number.isNaN(input)) {
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

  static notAvailablePlay(input, availablePlay) {
    if (!availablePlay.includes(input)) {
      throw new Error(ERROR.NOT_AVAILABLE_PLAY(availablePlay));
    }
  }
}

module.exports = Validate;
