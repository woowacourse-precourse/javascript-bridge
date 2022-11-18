const REG_EXP = Object.freeze({
  ONLY_NUMBERS: /^[0-9]+$/,
});

const BRIDGE_GAME = Object.freeze({
  INPUT_U: 'U',
  UP_BRIDGE: 'upBridge',
  DOWN_BRIDGE: 'downBridge',
  CORRECT: 'O',
  INCORRECT: 'X',
  EMPTY: ' ',
  STEP: 1,
  QUIT: 'Q',
});

const GAME_STATUS = Object.freeze({
  PLAYING: 1,
  SUCCESS_END: 0,
  FAIL_END: -1,
});

const PRINTABLE_BRIDGE = Object.freeze({
  BEGIN: '[ ',
  END: ' ]',
  SPACE_LINE: ' | ',
});

module.exports = {
  REG_EXP,
  BRIDGE_GAME,
  GAME_STATUS,
  PRINTABLE_BRIDGE,
};
