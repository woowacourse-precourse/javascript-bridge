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
};

const GAME = {
  STATUS: {
    END: 100,
    START: 101,
  },
};

module.exports = { BRIDGE, GAME };
