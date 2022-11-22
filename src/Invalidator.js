const { BRIDGE, MAP, COMMAND } = require('./constants');

const Invalidator = {
  inValidBlank: (input) => input.includes(' '),

  inValidNumber: (input) => !Number.isNaN(Number(input)),

  inValidString: (input) => Number.isNaN(input),

  inValidSize: (size) => size < BRIDGE.MIN_SIZE || size > BRIDGE.MAX_SIZE,

  inValidMoving: (moving) => moving !== MAP.UP_SIDE_STR && moving !== MAP.DOWN_SIDE_STR,

  inValidCommand: (command) => command !== COMMAND.RETRY && command !== COMMAND.QUIT,
};

module.exports = Invalidator;
