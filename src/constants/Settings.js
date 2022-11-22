const BRIDGE_SIZE = Object.freeze({
  min: 3,
  max: 20,
});

const GAME_COMMAND = Object.freeze({
  retry: 'R',
  quit: 'Q',
});

const MOVE_COMMAND = Object.freeze({
  up: 'U',
  down: 'D',
});

const COMMAND_MATCH_INDEX = Object.freeze({
  [MOVE_COMMAND['up']]: 0,
  [MOVE_COMMAND['down']]: 1,
});

const MOVE_TYPE = Object.freeze({
  true: 'O',
  false: 'X',
});

module.exports = { BRIDGE_SIZE, GAME_COMMAND, MOVE_COMMAND, COMMAND_MATCH_INDEX, MOVE_TYPE };
