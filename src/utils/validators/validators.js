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
    const convertedInput = Number(input);
    if (input.length > 2)
      throw new Error(MESSAGES.EXCEPTIONS.BRIDGE.COUNT_EXCEPTION);
    if (isNaN(convertedInput) || !isInteger(convertedInput))
      throw new Error(MESSAGES.EXCEPTIONS.BRIDGE.TYPE_EXCEPTION);
    if (convertedInput < 3 || convertedInput > 20)
      throw new Error(MESSAGES.EXCEPTIONS.BRIDGE.RANGE_EXCEPTION);
    return true;
  } catch (error) {
    Console.print(error.message);
  }
};

/**
 * 이동 시 입력값의 유효성을 검사하는 함수
 * @param {string} input 이동 시 입력값
 */
const validateMoveInput = (input) => {
  try {
    if (input.length !== 1)
      throw new Error(MESSAGES.EXCEPTIONS.MOVE.LENGTH_EXCEPTION);
    if (!ALLOWED_CHAR.MOVE.includes(input))
      throw new Error(MESSAGES.EXCEPTIONS.MOVE.VALUE_EXCEPTION);
  } catch (error) {
    Console.print(error.message);
  }
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
  }
};

module.exports = {
  validateBridgeSizeInput,
  validateMoveInput,
  validateGameCommandInput,
};
