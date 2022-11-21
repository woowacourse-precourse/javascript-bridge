const ERROR = require('../constant/error');
const { print } = require('./util');

class Validate {
  static notNumber(input) {
    try {
      if (isNaN(input)) {
        throw new Error(ERROR.NOT_NUMBER);
      }
    } catch (error) {
      print(error.message);
      return false;
    }
    return true;
  }

  static notInRange(input, maximum, minimum) {
    try {
      if (input > maximum || input < minimum) {
        throw new Error(ERROR.BRIDGE_SIZE(maximum, minimum));
      }
    } catch (error) {
      print(error.message);
      return false;
    }
    return true;
  }

  static notAvailableMove(input, availableMoves) {
    try {
      if (!availableMoves.includes(input)) {
        throw new Error(ERROR.NOT_AVAILABLE_MOVE(availableMoves));
      }
    } catch (error) {
      print(error.message);
      return false;
    }
    return true;
  }

  static notAvailablePlay(input, availablePlay) {
    try {
      if (!availablePlay.includes(input)) {
        throw new Error(ERROR.NOT_AVAILABLE_PLAY(availablePlay));
      }
    } catch (error) {
      print(error.message);
      return false;
    }
    return true;
  }
}

module.exports = Validate;
