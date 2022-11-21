const INITIAL_COUNT = 0;

const INITIAL_STATE = [];

const DIRECTION = {
  UP: 'U',
  DOWN: 'D',
};

const RESULT = {
  RIGHT: 'O',
  WRONG: 'X',
};

const BRIDGE = {
  INITIAL: '[ ',
  NO_RESULT: '  ',
  END: ']',
  NOT_END: '| ',
};

const INPUT = {
  RETRY: 'R',
  END: 'Q',
};

const IS_SUCCESS = {
  TRUE: true,
  FALSE: false,
};

module.exports = {
  INITIAL_COUNT,
  INITIAL_STATE,
  DIRECTION,
  RESULT,
  BRIDGE,
  INPUT,
  IS_SUCCESS,
};
