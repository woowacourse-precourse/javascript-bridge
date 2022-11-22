const init = Object.freeze({
  TRY: 1,
  INDEX: 0,
  END_OF_INDEX: (size) => size - 1,
  INCREASE: 1,
  CURBRIDGE_LENGTH: 2,
  UP: 0,
  DOWN: 1,
});

const game = Object.freeze({
  UP_CHAR: 'U',
  DOWN_CHAR: 'D',
  CANMOVE: 'O',
  CANNOTMOVE: 'X',
  EMPTY: ' ',
});

const retry = Object.freeze({
  RETRY: 'R',
  QUIT: 'Q',
});

const result = Object.freeze({
  SUCCESS: '성공',
  FAIL: '실패',
});

module.exports = { init, game, retry, result };
