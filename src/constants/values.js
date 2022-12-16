const REG_EXP = Object.freeze({
  ONLY_NUMBERS: /^[0-9]+$/,
});

const BRIDGE_GAME = Object.freeze({
  INPUT_U: 'U',
  INPUT_D: 'D',
  UP_BRIDGE: 'upBridge',
  DOWN_BRIDGE: 'downBridge',
  CORRECT: 'O',
  INCORRECT: 'X',
  EMPTY: ' ',
  STEP: 1,
  RESTART: 'R',
  QUIT: 'Q',
});

const GAME_STATE = Object.freeze({
  ERROR: -1,
  FAIL_STOP: -1,
  SUCCESS_STOP: 0,
  PLAYING: 1,
});

const PRINTABLE_BRIDGE = Object.freeze({
  BEGIN: '[ ',
  END: ' ]',
  SPACE_LINE: ' | ',
});

module.exports = {
  REG_EXP,
  BRIDGE_GAME,
  GAME_STATE,
  PRINTABLE_BRIDGE,
};
