const BRIDGE_SPACE_TYPE = ['D', 'U'];

const MOVING = {
  D: 1,
  U: 0,
};

const STEP_STATUS = {
  FAILURE: 0,
  SUCCESS: 1,
  NEXT: 2,
};

const MARKING = {
  BLANK: ' ',
  CORRECT: 'O',
  WRONG: 'X',
};

Object.freeze(BRIDGE_SPACE_TYPE);
Object.freeze(MOVING);
Object.freeze(STEP_STATUS);
Object.freeze(MARKING);

module.exports = { BRIDGE_SPACE_TYPE, MOVING, STEP_STATUS, MARKING };
