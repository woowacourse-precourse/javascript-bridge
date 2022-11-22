const { ERROR_MESSAGES } = require('../constants/Messages');
const { BRIDGE_GAME } = require('../constants/Game');

const validator = {
  validateSize(size) {
    if (size.length === 0) {
      throw new Error(ERROR_MESSAGES.BRIDGE_SIZE.EMPTY);
    }
    if (!(size >= BRIDGE_GAME.RANGE.START && size <= BRIDGE_GAME.RANGE.END)) {
      throw new Error(ERROR_MESSAGES.BRIDGE_SIZE.RANGE);
    }
  },

  validateBlock(block) {
    if (block.length === 0) {
      throw new Error(ERROR_MESSAGES.BLOCK.EMPTY);
    }
    if (!Object.keys(BRIDGE_GAME.BLOCK).includes(block)) {
      throw new Error(ERROR_MESSAGES.BLOCK.VALUE);
    }
  },

  validateCommand(command) {
    if (command.length === 0) {
      throw new Error(ERROR_MESSAGES.COMMAND.EMPTY);
    }
    if (!Object.keys(BRIDGE_GAME.COMMAND).includes(command)) {
      throw new Error(ERROR_MESSAGES.COMMAND.VALUE);
    }
  },
};

module.exports = validator;
