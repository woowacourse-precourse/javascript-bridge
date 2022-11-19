const { MESSAGES } = require("../../constraints/constarints");
const isInteger = Number.isInteger;

/**
 * 다리의 길이의 입력값을 유효성 검사하는 역할을 한다.
 * @param {number} input 다리의 길이
 * @return {boolean} 입력값이 유효하면 true 반환
 */
const validateLength = (input) => {
  const convertedInput = Number(input);
  if (input.length > 2)
    throw new Error(MESSAGES.EXCEPTIONS.BRIDGE.COUNT_EXCEPTION);
  if (isNaN(convertedInput) || !isInteger(convertedInput))
    throw new Error(MESSAGES.EXCEPTIONS.BRIDGE.TYPE_EXCEPTION);
  if (convertedInput < 3 || convertedInput > 20)
    throw new Error(MESSAGES.EXCEPTIONS.BRIDGE.RANGE_EXCEPTION);
  return true;
};

module.exports = { validateLength };
