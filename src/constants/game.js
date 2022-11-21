const COMMAND = {
  MOVING: { UP: "U", DOWN: "D" },
  GAME: { RETRY: "R", QUIT: "Q" },
};

const BRIDGE = {
  MAP: {
    START: "[ ",
    END: " ]",
    DIVIDING_LINE: " | ",
  },
  SIZE: {
    MINIMUN: 3,
    MAXIMUM: 20,
  },
};

module.exports = {
  BRIDGE,
  COMMAND,
};
