const DIRECTION = Object.freeze({
  up: 'U',
  down: 'D',
  nothing: ' ',
});

const CROSSING_RESULT = Object.freeze({
  success: 'O',
  fail: 'X',
});

const COMMAND = Object.freeze({
  retry: 'R',
  quit: 'Q',
});

const SIZE_RANGE = Object.freeze({
  minimum: 3,
  maximum: 20,
});

const RANDOM_NUMBER = Object.freeze({
  upBridge: 1,
  downBridge: 0,
});

module.exports = {
  DIRECTION,
  CROSSING_RESULT,
  SIZE_RANGE,
  COMMAND,
  RANDOM_NUMBER,
};
