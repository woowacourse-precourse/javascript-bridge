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
});

module.exports = {
  REG_EXP,
  BRIDGE_GAME,
};
