const { BRIDGE, COMMAND } = require('./Constants/contant');
const DIRECTION = require('./Constants/direction');
const { ERROR_MESSAGE } = require('./Constants/message');

class Validator {
  static chekcBridgeSizeValue(command) {
    Validator.checkInputIsNumber(command);
    Validator.checkBridgeSizeRange(command);
  }

  static checkInputIsNumber(command) {
    if (isNaN(command)) throw new Error(ERROR_MESSAGE.unexpected_input);
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

  static checkBridgeSizeRange(size) {
    if (size < BRIDGE.min_length || size > BRIDGE.max_length)
      throw Error(ERROR_MESSAGE.exceed_bridge_size);
  }

  static checkCorrectCommand(command) {
    if (command !== COMMAND.retry && command !== COMMAND.quit)
      throw Error(ERROR_MESSAGE.unexpected_input);
  }
}

module.exports = Validator;
