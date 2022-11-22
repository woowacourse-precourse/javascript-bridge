const BRIDGE_LENGTH = Object.freeze({
  START: 3,
  END: 20,
});

const DIRECTION = Object.freeze({
  UP: "U",
  DOWN: "D",
});

const DIRECTION_MATCH = Object.freeze({
  RIGHT: "O",
  WRONG: "X",
});

const RETRY = Object.freeze({
  RETRY: "R",
  QUIT: "Q",
});

const SUCCESS_RESULT = Object.freeze({
  SUCCESS: "성공",
  FAIL: "실패",
});

module.exports = {
  BRIDGE_LENGTH,
  DIRECTION,
  DIRECTION_MATCH,
  RETRY,
  SUCCESS_RESULT,
};
