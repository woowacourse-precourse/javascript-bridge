const Constant = Object.freeze({
  BRIDGE: {
    LENGTH: {
      MIN: 3,
      MAX: 20,
    },
  },
  DIRECTION: {
    UP: "U",
    DOWN: "D",
    ONE: "1",
    ZERO: "0",
    POSSIBLE: " O ",
    IMPOSSIBLE: " X ",
    EMPTY: " N ",
  },
  RETRY: {
    REPLAY : "R",
    QUIT: "Q"
  },
  GAME_RESULT: {
    WIN: "성공",
    LOSS: "실패",
    DEFAULT: 1,
  },
});

module.exports = Constant;
