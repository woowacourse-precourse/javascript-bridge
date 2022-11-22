const GAME_STATUS = Object.freeze({
  PROCEEDING: 0,
  OVER: 1,
  END: 2,
});

const GAME_COMMAND = Object.freeze({
  RETRY: 'R',
  QUIT: 'Q',
});

const BRIDGE = Object.freeze({
  MIN_LENGTH: 3,
  MAX_LENGTH: 20,
  ABOVE: 'U',
  BELOW: 'D',
  BLANK: ' ',
  MOVE_SUCCESS: 'O',
  MOVE_FAIL: 'X',
  START: '[',
  END: ']',
  JOIN: ' | ',
});

module.exports = {
  GAME_STATUS,
  GAME_COMMAND,
  BRIDGE,
};
