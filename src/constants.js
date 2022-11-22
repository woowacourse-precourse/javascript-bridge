const SETTING = Object.freeze({
  MIN_BRIDGE_SIZE: 3,
  MAX_BRIDGE_SIZE: 20,
});

const MOVING = Object.freeze({
  UP_FLOOR: 'U',
  DOWN_FLOOR: 'D',
});

const COMMAND = Object.freeze({
  RETRY: 'R',
  QUIT: 'Q',
});

const GENERATE_NUMBER = Object.freeze({
  UP_FLOOR: 1,
  DOWN_FLOOR: 0,
});

const MAP = Object.freeze({
  SUCCESS: 'O',
  FAIL: 'X',
});

const RESULT = Object.freeze({
  COMPLETE: '성공',
  FAIL: '실패',
});

module.exports = {
  SETTING,
  MOVING,
  COMMAND,
  GENERATE_NUMBER,
  MAP,
  RESULT,
};
