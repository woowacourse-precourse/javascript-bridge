const MESSAGE = require('../constants/Message');

const Validate = {
  validateBridgeSize(size) {
    const validateBridgeRange = Array.from(Array(18).keys(), (index) => index + 3);
    if (size.length == 0) throw MESSAGE.ERROR.BRIDGE_SIZE_EMPTY;
    if (!validateBridgeRange.includes(Number(size))) throw MESSAGE.ERROR.BRIDGE_SIZE_RANGE;
  },

  validateReadMoving(move) {
    const validateBridgeMove = ['U', 'D'];
    if (move.length == 0) throw MESSAGE.ERROR.BRIDGE_MOVE_EMPTY;
    if (move.length != 1) throw MESSAGE.ERROR.BRIDGE_MOVE_OVER;
    if (!validateBridgeMove.includes(move)) throw MESSAGE.ERROR.BRIDGE_MOVE;
  },

  validateReadGameCommand(command) {
    const validateGameCommand = ['R', 'Q'];
    if (command.length == 0) throw MESSAGE.ERROR.BRIDGE_GAME_COMMAND_EMPTY;
    if (!validateGameCommand.includes(command)) throw MESSAGE.ERROR.BRIDGE_GAME_COMMAND;
  },
};

module.exports = Validate;
