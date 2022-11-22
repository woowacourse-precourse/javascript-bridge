const { DIRECTION, COMMAND, SIZE_RANGE } = require('./constants');
const { ERROR_MESSAGE } = require('./message');

const Validate = {
  validateSizeRange(size) {
    if (
      size < SIZE_RANGE.minimum ||
      size > SIZE_RANGE.maximum ||
      !new RegExp('^[0-9]+$').test(size)
    ) {
      throw new Error(ERROR_MESSAGE.sizeRange);
    }
  },

  validateMovePosition(moveDirection) {
    if (moveDirection !== DIRECTION.up && moveDirection !== DIRECTION.down) {
      throw new Error(ERROR_MESSAGE.moveDirection);
    }
  },

  validateRetryOfQuit(input) {
    if (input !== COMMAND.retry && input !== COMMAND.quit) {
      throw new Error(ERROR_MESSAGE.retryOrQuitCommand);
    }
  },
};

module.exports = Validate;
