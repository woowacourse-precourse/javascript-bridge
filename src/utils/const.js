const BRIDGE = {
  MIN: 3,
  MAX: 20,
};

const BRIDGE_SPACE_TYPE = ['D', 'U'];

const RETRY = 'R';
const QUIT = 'Q';

const COMMAND_TYPE = [RETRY, QUIT];
const COMMAND = { RETRY, QUIT };

const MOVING = {
  U: 0,
  D: 1,
};

const STATUS = {
  CONTINUE: 0,
  SUCCESS: 1,
  FAILURE: 2,
};

const MARKING = {
  BLANK: ' ',
  CORRECT: 'O',
  WRONG: 'X',
};

Object.freeze(BRIDGE);
Object.freeze(BRIDGE_SPACE_TYPE);
Object.freeze(MOVING);
Object.freeze(COMMAND_TYPE);
Object.freeze(COMMAND);
Object.freeze(STATUS);
Object.freeze(MARKING);

module.exports = {
  BRIDGE,
  BRIDGE_SPACE_TYPE,
  MOVING,
  COMMAND_TYPE,
  COMMAND,
  STATUS,
  MARKING,
};
