const { isCollectRange, isValidateNumber } = require('./common.js');
const { RULES, ERROR_MESSAGE } = require('../constants/index.js');
/**
 * 다리 건너기 게임의 입력 유효성을 검증하는 함수를 모아놓은 파일
 */

const isCollectBridgeLength = (input) => {
  isValidateNumber(input);
  isCollectRange(Number(input), RULES.MIN_BRIDGE_NUMBER, RULES.MAX_BRIDGE_NUMBER);
};

const isValidateMoveInput = (input) => {
  const moveInputRegex = /^[U|D]$/g;
  if (!input.match(moveInputRegex)) {
    throw new Error(ERROR_MESSAGE.INVALID_MOVE_INPUT);
  }
};

const isValidateRetryInput = (input) => {
  const retryInputRegex = /^[R|Q]$/g;
  if (!input.match(retryInputRegex)) {
    throw new Error(ERROR_MESSAGE.INVALID_RETRY_INPUT);
  }
};

module.exports = { isCollectBridgeLength, isValidateMoveInput, isValidateRetryInput };
