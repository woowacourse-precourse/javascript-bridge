const { Console } = require("@woowacourse/mission-utils");

const MESSAGE_GET_BRIDGE_SIZE = "다리의 길이를 입력해주세요. \n";

const ERROR_NOT_NUMBER = "[ERROR] 숫자를 입력해 주세요.";
const ERROR_OUT_OF_RANGE = "[ERROR] 3~20 사이의 숫자를 입력해 주세요.";
const ERROR_NOT_INTEGER = "[ERROR] 정수를 입력해 주세요.";

const SIZE_START = 3;
const SIZE_END = 20;

/**
 * @param {number} number
 * 숫자 타입이 아니면 예외를 발생시킨다.
 */
function validateIsNumber(number) {
  if (isNaN(number)) throw new Error(ERROR_NOT_NUMBER);
}
/**
 * @param {number} number
 * 범위 안의 숫자가 아니면 예외를 발생시킨다.
 */
function validateIsInRange(number) {
  if ((number < SIZE_START) | (number > SIZE_END)) throw new Error(ERROR_OUT_OF_RANGE);
}
/**
 * @param {number} number
 * 정수형이 아니면 예외를 발생시킨다.
 */
function validateIsInteger(number) {
  if (!Number.isInteger(number)) throw new Error(ERROR_NOT_INTEGER);
}

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    return new Promise((resolve) => {
      this.getValidBridgeSize(resolve);
    });
  },

  /**
   * 다리의 길이를 입력받고 유효한 값인지 확인한다.
   */
  getValidBridgeSize(callback) {
    Console.readLine(MESSAGE_GET_BRIDGE_SIZE, (userInput) => {
      try {
        const parsedUserInput = Number(userInput);
        this.validateBridgeSize(parsedUserInput);
        return callback(parsedUserInput);
      } catch (error) {
        Console.print(error.message);
        this.getValidBridgeSize(callback);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},

  /**
   * 입력받은 다리 길이를 검증하여 예외를 발생시킨다.
   * @param {number} size
   */
  validateBridgeSize(size) {
    validateIsNumber(size);
    validateIsInRange(size);
    validateIsInteger(size);
  },
};

module.exports = InputView;
