const { isCollectRange, isValidateNumber } = require('./common.js');
const { RULES, ERROR_MESSAGE } = require('../constants/index.js');
/**
 * 다리 건너기 게임의 입력 유효성을 검증하는 함수를 모아놓은 파일
 */

/**
 * 다리길이에 대한 입력이 유효한지 체크하는 함수
 * @param {string} input
 */
const isCollectBridgeLength = (input) => {
  isValidateNumber(input);
  isCollectRange(Number(input), RULES.MIN_BRIDGE_NUMBER, RULES.MAX_BRIDGE_NUMBER);
};

/**
 * 다리칸 선택에 대한 입력이 U 또는 D인지 체크하는 함수
 * @param {string} input
 */
const isValidateMoveInput = (input) => {
  const moveInputRegex = /^[U|D]$/g;
  if (!input.match(moveInputRegex)) {
    throw new Error(ERROR_MESSAGE.INVALID_MOVE_INPUT);
  }
};

/**
 * 재시도 또는 종료 선택에 대한 입력이 R 또는 Q인지 체크하는 함수
 * @param {string} input
 */
const isValidateRetryInput = (input) => {
  const retryInputRegex = /^[R|Q]$/g;
  if (!input.match(retryInputRegex)) {
    throw new Error(ERROR_MESSAGE.INVALID_RETRY_INPUT);
  }
};

module.exports = { isCollectBridgeLength, isValidateMoveInput, isValidateRetryInput };
