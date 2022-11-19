const { ERROR, INPUT_BRIDGE_REGEX } = require('./constants');

const checkBridgeMove = (move) => {
  if (move.length !== 1) {
    return false;
  }
  if (!INPUT_BRIDGE_REGEX.test(move)) {
    return false;
  }
  return true;
};

const printBridgeMoveError = (check) => {
  if (!check) {
    throw ERROR.BRIDGE_MOVE_ERROR;
  }
};

module.exports = { checkBridgeMove, printBridgeMoveError };
