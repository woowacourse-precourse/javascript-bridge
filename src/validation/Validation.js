const { ERROR_MESSAGE } = require("../utils/Constants");

const Validation = {
  /**
   * 플레이어가 게임 중 입력한 다리 길이 값이 형식에 어긋날 경우 예외를 발생시킵니다.
   * @param {string} playerInput - 플레이어의 입력
   */
  validateBridgeSize(input) {
    const inputSize = Number(input);
    if (!Validation.isValidSizeType(input))
      throw new Error(ERROR_MESSAGE.bridge_size_type);
    if (!Validation.isValidSizeRange(inputSize))
      throw new Error(ERROR_MESSAGE.bridge_range);
    if (!Validation.isValidSizeNumber(inputSize))
      throw new Error(ERROR_MESSAGE.bridge_size_number);
  },

  isValidSizeRange(size) {
    return 3 <= size && size <= 20;
  },

  isValidSizeNumber(size) {
    return Number.isInteger(size);
  },

  isValidSizeType(input) {
    return !isNaN(input);
  },

  /**
   * 플레이어가 게임 중 입력한 이동할 칸 값이 형식에 어긋날 경우 예외를 발생시킵니다.
   * @param {string} playerInput - 플레이어의 입력
   */
  validateMoving(input) {
    if (!this.isValidMovingType(input))
      throw new Error(ERROR_MESSAGE.moving_type);
    if (!this.isValidMovingLength(input))
      throw new Error(ERROR_MESSAGE.moving_length);
    if (!this.isValidMovingCase(input))
      throw new Error(ERROR_MESSAGE.moving_string_case);
    if (!this.isValidMoving(input)) throw new Error(ERROR_MESSAGE.moving_valid);
  },

  isValidMovingType(input) {
    const regex = /^[a-z|A-Z]+$/;
    return regex.test(input);
  },

  isValidMovingLength(input) {
    return input.length === 1;
  },

  isValidMovingCase(input) {
    return 65 <= input.charCodeAt() && input.charCodeAt() <= 90;
  },

  isValidMoving(input) {
    return input === "U" || input === "D";
  },

  /**
   * 플레이어가 게임 중 입력한 게임 명령어 값이 형식에 어긋날 경우 예외를 발생시킵니다.
   * @param {string} playerInput - 플레이어의 입력
   */
  validateGameCommand(input) {
    if (!this.isValidCommandType(input))
      throw new Error(ERROR_MESSAGE.command_type);
    if (!this.isValidCommandLength(input))
      throw new Error(ERROR_MESSAGE.command_length);
    if (!this.isValidCommandCase(input))
      throw new Error(ERROR_MESSAGE.command_string_case);
    if (!this.isValidCommand(input))
      throw new Error(ERROR_MESSAGE.command_valid);
  },

  isValidCommandType(input) {
    const regex = /^[a-z|A-Z]+$/;
    return regex.test(input);
  },

  isValidCommandLength(input) {
    return input.length === 1;
  },

  isValidCommandCase(input) {
    return 65 <= input.charCodeAt() && input.charCodeAt() <= 90;
  },

  isValidCommand(input) {
    return input === "R" || input === "Q";
  },
};

module.exports = Validation;
