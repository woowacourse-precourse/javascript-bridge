const BRIDGE = {
  UP: {
    SHAPE: "U",
    NUM: 1,
  },
  DOWN: {
    SHAPE: "D",
    NUM: 0,
  },
  GAME: {
    RETRY: "R",
    END: "Q",
  },
  SIZE: {
    MAX: 20,
    MIN: 3,
  },
};

const GAME = {
  STATUS: {
    END: 100,
    START: 101,
  },
  RESULT: {
    WIN: true,
    FAIL: false,
  },
};

module.exports = { BRIDGE, GAME };
