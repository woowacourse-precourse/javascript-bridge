const BRIDGE = Object.create({
  MIN_SIZE: 3,
  MAX_SIZE: 20,
});

const MOVING = Object.create({
  UPPER: 'U',
  LOWER: 'D',
});

const COMMAND = Object.create({
  RETRY: 'R',
  QUIT: 'Q',
});

const GAME_STATUS = Object.create({
  PLAYING: 'PLAYING',
  FAIL: 'FAIL',
  CLEAR: 'CLEAR',
});

const STATUS_MESSAGE = Object.create({
  [GAME_STATUS.FAIL]: '실패',
  [GAME_STATUS.CLEAR]: '성공',
});

module.exports = {
  BRIDGE,
  MOVING,
  COMMAND,
  GAME_STATUS,
  STATUS_MESSAGE,
};
