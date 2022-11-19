const BRIDGE = {
  MIN: 3,
  MAX: 20,
};

const BRIDGE_SPACE_TYPE = ['D', 'U'];

const MOVING = {
  U: 0,
  D: 1,
};

const COMMAND = {
  R: 0,
  Q: 1,
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
Object.freeze(COMMAND);
Object.freeze(STATUS);
Object.freeze(MARKING);

module.exports = {
  BRIDGE,
  BRIDGE_SPACE_TYPE,
  MOVING,
  COMMAND,
  STATUS,
  MARKING,
};
