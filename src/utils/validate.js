// const { BRIDGE_RANGE, MOVE, RETRY, ERRORS } = require('./config.js');

const BRIDGE_RANGE = {
  MIN: 3,
  MAX: 20,
};

const MOVE = {
  UP: 'U',
  DOWN: 'D',
};

const RETRY = {
  YES: 'R',
  NO: 'Q',
};

const ERRORS = {
  INVALID_BRIDGE_TYPE: '[ERROR] 다리 길이는 숫자여야 합니다.',
  INVALID_BRIDGE_RANGE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',

  INVALID_MOVE_TYPE: '[ERROR] 이동 타입은 U/D이어야 합니다.',
  INVALID_RESTART_TYPE: '[ERROR] 재시작 입력은 R/Q이어야 합니다.',
};

/**
 * 사용자로부터 받은 입력을 검증한다
 */
const validateBridgeSize = (bridgeSize) => {
  const isNumber = !isNaN(bridgeSize);
  const isInRange = +bridgeSize >= BRIDGE_RANGE.MIN && +bridgeSize <= BRIDGE_RANGE.MAX;

  if (isNumber === false) throw new Error(ERRORS.INVALID_BRIDGE_TYPE);
  if (isInRange === false) throw new Error(ERRORS.INVALID_BRIDGE_RANGE);
};

const validateMove = (move) => {
  const isMove = move === MOVE.UP || move === MOVE.DOWN;

  if (isMove === false) throw new Error(ERRORS.INVALID_MOVE_TYPE);
};

const validateRestart = (restart) => {
  const isRestart = restart === RETRY.YES || restart === RETRY.NO;

  if (isRestart === false) throw new Error(ERRORS.INVALID_RESTART_TYPE);
};

module.exports = { validateBridgeSize, validateMove, validateRestart };
