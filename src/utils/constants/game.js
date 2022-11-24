const BRIDGE = Object.freeze({
  LENGTH: {
    MIN: 3,
    MAX: 20,
  },
});

const COMMAND = Object.freeze({
  MOVE: {
    UP: 'U',
    DOWN: 'D',
  },
  RETRY: 'R',
  QUIT: 'Q',
});

const MAP = Object.freeze({
  LEFT_BRACKET: '[',
  RIGHT_BRACKET: ']',
  DIVIDER: '|',
  SUCCESS: ' O ',
  FAIL: ' X ',
  BLANK: '   ',
  MOVE_RESULT_ICON(isSuccess) {
    const icon = isSuccess ? 'O' : 'X';
    return ` ${icon} `;
  },
});

module.exports = { BRIDGE, COMMAND, MAP };
