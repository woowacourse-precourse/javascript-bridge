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
  }

  // 난 정규식 썻음
  static checkBridgeSizeRange(size) {
    if (size < BRIDGE.min_length || size > BRIDGE.max_length)
      throw Error(ERROR_MESSAGE.exceed_bridge_size);
  }

  // 이것도 간단하게 줄일 수 있지 않을까 너무 돌아가는 것 같은데
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
    if (command !== COMMAND.retry && command !== COMMAND.quit)
      throw Error(ERROR_MESSAGE.unexpected_input);
  }
}

module.exports = Validator;
