const INPUT_VALUE = {
  UP: "U",
  DOWN: "D",
  QUIT: "Q",
  RETRY: "R",

  MAX_LENGTH: 20,
  MIN_LENGTH: 3,
};

const STATES = {
  SUCCESS: "성공",
  FAIL: "실패",

  RIGHT: "O",
  WRONG: "X",

  INITIAL_STEP: 0,
  INITIAL_ROUND: 1,
};

const DIRECTION_INDEX = {
  UPSIDE: 0,
  DOWNSIDE: 1,
};

module.exports = {
  INPUT_VALUE,
  STATES,
  DIRECTION_INDEX,
};
