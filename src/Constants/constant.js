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

const BRIDGE = Object.freeze({
  min_length: 3,
  max_length: 20,
  crossable: 'O',
  uncrossable: 'X',
  empty_space: ' ',
});

const DIRECTION = Object.freeze({
  up: 'U',
  down: 'D',
});

module.exports = { COMMAND, RESULT, BRIDGE_PARTS, BRIDGE, DIRECTION };
