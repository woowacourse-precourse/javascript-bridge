const BRIDGE_RULE = Object.freeze({
  LENGTH_MIN: 3,
  LENGTH_MAX: 20,
});

const GAME_RULE = Object.freeze({
  UPSIDE: 'U',
  DOWNSIDE: 'D',
  RETRY: 'R',
  QUIT: 'Q',
});

module.exports = { BRIDGE_RULE, GAME_RULE };
