const BRIDGE = {
  MIN: 3,
  MAX: 20,
};

const UPSIDE = 'U';
const DOWNSIDE = 'D';

const PATH_TYPE = [DOWNSIDE, UPSIDE];

const PATH = {
  UPSIDE: 0,
  DOWNSIDE: 1,
};

const COMMAND_TYPE = ['R', 'Q'];
const COMMAND = { RETRY: 'R', QUIT: 'Q' };

const COMMAND_NUMBER = {
  RETRY: 0,
  QUIT: 1,
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
Object.freeze(PATH_TYPE);
Object.freeze(PATH);
Object.freeze(COMMAND_TYPE);
Object.freeze(COMMAND);
Object.freeze(COMMAND_NUMBER);
Object.freeze(STATUS);
Object.freeze(MARKING);

module.exports = {
  UPSIDE,
  DOWNSIDE,
  BRIDGE,
  PATH_TYPE,
  PATH,
  COMMAND_TYPE,
  COMMAND,
  COMMAND_NUMBER,
  STATUS,
  MARKING,
};
