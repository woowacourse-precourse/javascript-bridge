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
    PLAY: 101,
    FAIL: 102,
  },
  RESULT: {
    WIN: true,
    FAIL: false,
  },
};

module.exports = { BRIDGE, GAME };
