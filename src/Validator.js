const { DIRECTION, BRIDGE, COMMAND } = require('./Constants/constant');
const { ERROR_MESSAGE } = require('./Constants/message');

class Validator {
  static chekcBridgeSizeValue(command) {
    Validator.checkTypeIsNumber(command);
    Validator.checkBridgeSizeRange(command);
  }

  static checkTypeIsNumber(command) {
    if (isNaN(command)) {
      throw new Error(ERROR_MESSAGE.unexpected_input);
    }
    return true;
  }

  static checkBridgeSizeRange(size) {
    if (size < BRIDGE.min_length || size > BRIDGE.max_length) {
      throw Error(ERROR_MESSAGE.exceed_bridge_size);
    }
    return true;
  }

  static checkCorrectDirection(directions) {
    if (directions instanceof Array) {
      directions.forEach((dir) => {
        if (dir !== DIRECTION.up && dir !== DIRECTION.down) {
          throw new Error(ERROR_MESSAGE.unexpected_input);
        }
      });
    } else if (directions !== DIRECTION.up && directions !== DIRECTION.down)
      throw new Error(ERROR_MESSAGE.unexpected_input);
  }

  static checkCorrectCommand(command) {
    if (command !== COMMAND.retry && command !== COMMAND.quit) {
      throw Error(ERROR_MESSAGE.unexpected_input);
    }
    return true;
  }
}

module.exports = Validator;
