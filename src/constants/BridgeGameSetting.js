const BRIDGE_INFO = Object.freeze({
  MIN_LENGTH: 3,
  MAX_LENGTH: 20,
  RANDOM_UP: 1,
  RANDOM_DOWN: 0,
  SELECT_UP: 'U',
  SELECT_DOWN: 'D',
});

const BRIDGE_UI = Object.freeze({
  BRIDGE_START: `[ `,
  BRIDGE_END: ` ]`,
  BRIDGE_SPACE: ` | `,
  RIGHT_ANSWER: 'O',
  WRONG_ANSWER: 'X',
});

const GAME_STATUS = Object.freeze({
  GAME_RESTART: 'R',
  GAME_QUIT: 'Q',
  GAME_SUCCESS: '성공',
  GAME_FAILURE: '실패',
});

const NEW_LINE = '\n';
const ERROR_TAG = '[ERROR]';

module.exports = { BRIDGE_INFO, BRIDGE_UI, GAME_STATUS, NEW_LINE, ERROR_TAG };
