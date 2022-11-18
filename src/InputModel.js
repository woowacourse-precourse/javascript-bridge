const { WRONG_INPUT_BRIDGE_SIZE, WRONG_INPUT_BRIDGE_MOVE, WRONG_INPUT_GAME_OVER } = require('./ErrorMessages');

function validateBridgeSize(input) {
  if (!(input >= 3 && input <= 20)) {
    throw new Error(WRONG_INPUT_BRIDGE_SIZE);
  }
}

function validateUserMove(input) {
  if (!(input === 'U' || input === 'D')) {
    throw new Error(WRONG_INPUT_BRIDGE_MOVE);
  }
}

function validateUserEnd(input) {
  if (!(input === 'Q' || input === 'R')) {
    throw new Error(WRONG_INPUT_GAME_OVER);
  }
}

module.exports = { validateBridgeSize, validateUserMove, validateUserEnd };
