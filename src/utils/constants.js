const SIZE = Object.freeze({
  MIN: 3,
  MAX: 20,
});

const ORDER = Object.freeze({
  DOWN: "D",
  UP: "U",
  RETRY: true,
  QUIT: false,
});

const SPACE = Object.freeze({
  D: 1,
  U: 0,
  DOWN: 0,
});

const MARK = Object.freeze({
  TRAP: "X",
});

const PASS = Object.freeze({
  TRUE: "O",
  FALSE: " ",
});

const FAIL = Object.freeze({
  true: " ",
  false: "X",
});

const COMMAND = Object.freeze({
  RETRY: "R",
  QUIT: "Q",
});

const RESULT = Object.freeze({
  true: "성공",
  false: "실패",
  SUCCESS: true,
  FAIL: false,
});

const ISALLOW = Object.freeze({
  TRUE: true,
  FALSE: false,
});

module.exports = {
  ORDER,
  SIZE,
  SPACE,
  MARK,
  PASS,
  FAIL,
  COMMAND,
  RESULT,
  ISALLOW,
};
