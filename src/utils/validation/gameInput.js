const { COMMAND, BRIDGE } = require('../constants/game');
const MESSAGE = require('../constants/message');

const validateRetryCommand = (retryOrQuit) => {
  if (![COMMAND.RETRY, COMMAND.QUIT].includes(retryOrQuit)) {
    throw new Error(MESSAGE.ERROR.RETRY_INPUT_IS_R_OR_Q);
  }
};

const validateMoveCommand = (upOrDown) => {
  if (![COMMAND.MOVE.UP, COMMAND.MOVE.DOWN].includes(upOrDown)) {
    throw new Error(MESSAGE.ERROR.MOVING_DIRECTION_INPUT_IS_U_OR_D);
  }
};

const validateBridgeSize = (bridgeSize) => {
  if (!(bridgeSize >= BRIDGE.LENGTH.MIN && bridgeSize <= BRIDGE.LENGTH.MAX)) {
    throw new Error(MESSAGE.ERROR.BRIDGE_LENGTH_INPUT_IS_BETWEEN_THREE_AND_TWENTY);
  }
};

module.exports = { validateRetryCommand, validateMoveCommand, validateBridgeSize };
