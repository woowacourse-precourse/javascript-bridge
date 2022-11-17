const { BRIDGE_RANGE, MOVE, RESTART, ERRORS } = require('./config.js');

/**
 * 사용자로부터 받은 입력을 검증한다
 */
const validateBridgeSize = (bridgeSize) => {
  const isNumber = !isNaN(bridgeSize);
  const isInRange = +bridgeSize >= BRIDGE_RANGE.MIN && +bridgeSize <= BRIDGE_RANGE.MAX;

  if (isNumber === false) throw Error(ERRORS.INVALID_BRIDGE_TYPE);
  if (isInRange === false) throw Error(ERRORS.INVALID_BRIDGE_RANGE);
};

const validateMove = (move) => {
  const isMove = move === MOVE.UP || move === MOVE.DOWN;

  if (isMove === false) throw Error(ERRORS.INVALID_MOVE_TYPE);
};

const validateRestart = (restart) => {
  const isRestart = restart === RESTART.RESTART || restart === RESTART.QUIT;

  if (isRestart === false) throw Error(ERRORS.INVALID_RESTART_TYPE);
};

module.exports = { validateBridgeSize, validateMove, validateRestart };
