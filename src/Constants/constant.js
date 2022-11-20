const COMMAND = Object.freeze({
  retry: 'R',
  quit: 'Q',
});

const RESULT = Object.freeze({
  success: '성공',
  fail: '실패',
});

const BRIDGE_PARTS = Object.freeze({
  entrance: '[',
  exit: ']',
  pier: '|',
});

const SIGN = Object.freeze({
  O: 'O',
  X: 'X',
  empty_space: ' ',
});

const BRIDGE = Object.freeze({
  min_length: 3,
  max_length: 20,
});

const DIRECTION = Object.freeze({
  up: 'U',
  down: 'D',
});

module.exports = { COMMAND, RESULT, BRIDGE_PARTS, SIGN, BRIDGE, DIRECTION };
