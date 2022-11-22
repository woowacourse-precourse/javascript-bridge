const BRIDGE_SIZE = Object.freeze({
  min: 3,
  max: 20,
});

const COMMAND_TYPE = Object.freeze({
  up: 'U',
  down: 'D',
});

const COMMAND_MATCH_INDEX = Object.freeze({
  [COMMAND_TYPE['up']]: 0,
  [COMMAND_TYPE['down']]: 1,
});

const MOVE_TYPE = Object.freeze({
  true: 'O',
  false: 'X',
});

module.exports = { BRIDGE_SIZE, COMMAND_TYPE, COMMAND_MATCH_INDEX, MOVE_TYPE };
