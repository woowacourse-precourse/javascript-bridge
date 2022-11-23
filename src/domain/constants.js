const RULE = Object.freeze({
  // rule of the game
  BRIDGE: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 20,
  },
  BEHAVIOR: {
    UP: 'U',
    DOWN: 'D',
  },
  MARKER: {
    SUCCESS: 'O',
    FAILURE: 'X',
    NONE: ' ',
  },
  GAME_COMMAND: {
    RETRY: 'R',
    EXIT: 'Q',
  },
});

module.exports = RULE;
