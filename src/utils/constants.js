const { deepFreeze } = require('./helper');

const BRIDGE_CONSTANTS = deepFreeze({
  minimum: 3,
  maximum: 20,
});

const GAME_CONSTANTS = deepFreeze({
  upStair: 'U',
  downStair: 'D',
  retryGame: 'R',
  quitGame: 'Q',
  goPath: 'O',
  notPath: 'X',
  empty: ' ',
});

module.exports = {
  BRIDGE_CONSTANTS,
  GAME_CONSTANTS,
};
