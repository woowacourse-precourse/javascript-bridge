const USER_MOVEMENT = Object.freeze({
  UP: 'U',
  DOWN: 'D',
});

const VALID_MOVEMENT = Object.freeze({
  SUCCESS: 'O',
  FAIL: 'X',
  VACANT: ' ',
});

const GAME_COMMAND = Object.freeze({
  RESTART: 'R',
  QUIT: 'Q',
});

const CURRENT_MAP = Object.freeze({
  SHOW: (up, down) => `[ ${up.join(' | ')} ]\n[ ${down.join(' | ')} ]\n`,
});

module.exports = {
  USER_MOVEMENT,
  VALID_MOVEMENT,
  GAME_COMMAND,
  CURRENT_MAP,
};
