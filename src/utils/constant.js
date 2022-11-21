const DEFAULT = Object.freeze({
  ZERO: 0,
  EMPTY_ARRAY: [],
  EMPTY_STRING: "",
  ONE: 1,
  TRUE: true,
  FALSE: false,
  MIN_BRIDGE_NUM: 3,
  MAX_BRIDGE_NUM: 20,
  UP: "U",
  DOWN: "D",
  RETRY: "R",
  QUIT: "Q",
  END: "E",
  MOVE: "M",
});

const OUTPUT_VIEW_VALUE = Object.freeze({
  FIRST_EMPTY: "   ",
  FIRST_WRONG: " X ",
  FIRST_RIGHT: " O ",
  EMPTY: "|  ",
  RIGHT: "| O ",
  WRONG: "| X ",
});

const ERROR = Object.freeze({
  BRIDGE_IS_NUMBER_ERROR: "[ERROR] 숫자만 입력 가능합니다.",
  BRIDGE_RANGE_ERROR: "[ERROR] 3 ~ 20사이의 숫자만 입력 가능합니다.",
  DIRECTION_INPUT_ERROR: "[ERROR] U 또는 D만 입력 가능합니다.",
  CONTINUE_INPUT_ERROR: "[ERROR] R 또는 Q만 입력 가능합니다.",
});

module.exports = {
  DEFAULT,
  OUTPUT_VIEW_VALUE,
  ERROR,
};
