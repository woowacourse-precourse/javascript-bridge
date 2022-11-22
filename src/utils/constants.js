const INITIAL_COUNT = 0;

const INITIAL_STATE = [];

const SIZE = Object.freeze({
  MIN: 3,
  MAX: 20,
});

const DIRECTION = Object.freeze({
  UP: "U",
  DOWN: "D",
});

const RESULT = Object.freeze({
  RIGHT: "O",
  WRONG: "X",
});

const BRIDGE = Object.freeze({
  INITIAL: "[ ",
  NO_RESULT: "  ",
  END: "]",
  NOT_END: "| ",
});

const INPUT = Object.freeze({
  RETRY: "R",
  END: "Q",
});

const IS_SUCCESS = Object.freeze({
  TRUE: true,
  FALSE: false,
});

const SUCCESS_STRING = "성공";

const FAILURE_STRING = "실패";

module.exports = {
  INITIAL_COUNT,
  INITIAL_STATE,
  SIZE,
  DIRECTION,
  RESULT,
  BRIDGE,
  INPUT,
  IS_SUCCESS,
  SUCCESS_STRING,
  FAILURE_STRING,
};
