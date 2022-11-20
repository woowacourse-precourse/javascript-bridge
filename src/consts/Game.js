const GAME = Object.freeze({
  BRIDGE_SIZE_START: 3,
  BRIDGE_SIZE_END: 20,
  UP: 'U',
  DOWN: 'D',
  POSSIBLE: {
    [UP]: 1,
    [DOWN]: 0,
  },
});

module.exports = GAME;
