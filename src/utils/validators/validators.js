const { MESSAGES, ALLOWED_CHAR } = require("../../constraints/constarints");
const { Console } = require("@woowacourse/mission-utils");
const isInteger = Number.isInteger;

/**
 * 다리의 길이의 입력값의 유효성을 검사하는 함수
 * @param {number} input 다리의 길이
 * @return {boolean} 입력값이 유효하면 true 반환
 */
const validateBridgeSizeInput = (input) => {
  try {
    if (isNaN(+input) || !isInteger(+input))
      throw new Error(MESSAGES.EXCEPTIONS.BRIDGE.TYPE_EXCEPTION);
    if (+input < 3 || +input > 20)
      throw new Error(MESSAGES.EXCEPTIONS.BRIDGE.RANGE_EXCEPTION);
    return true;
  } catch (error) {
    Console.print(error.message);
    return Console.close();
  }
};

/**
 * 이동 시 입력값의 유효성을 검사하는 함수
 * @param {string} input 이동 시 입력값
 */
const validateMoveInput = (input, game) => {
  try {
    if (input.length !== 1) {
      game.isError = true;
      throw new Error(MESSAGES.EXCEPTIONS.MOVE.LENGTH_EXCEPTION);
    }
    if (!ALLOWED_CHAR.MOVE.includes(input)) {
      game.isError = true;
      throw new Error(MESSAGES.EXCEPTIONS.MOVE.VALUE_EXCEPTION);
    }
  } catch (error) {
    Console.print(error.message);
    return Console.close();
  }
  return true;
};

/**
 * 이동 실패시 재시작/종료 여부 입력값의 유효성을 검사하는 함수
 * @param {string} input 재시작/종료 여부의 입력값
 */
const validateGameCommandInput = (input) => {
  try {
    if (input.length !== 1)
      throw new Error(MESSAGES.EXCEPTIONS.RETRY.LENGTH_EXCEPTION);
    if (!ALLOWED_CHAR.RETRY.includes(input))
      throw new Error(MESSAGES.EXCEPTIONS.RETRY.VALUE_EXCEPTION);
  } catch (error) {
    Console.print(error.message);
    return Console.close();
  }
};

module.exports = {
  validateBridgeSizeInput,
  validateMoveInput,
  validateGameCommandInput,
};
