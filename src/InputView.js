/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const { Console } = require("@woowacourse/mission-utils");
const ERROR_MESSAGES = require("./constants/ErrorMessages");
const BREIDGE = require("./constants/constants");

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine("QUERY", (size) => {
      this.validateBridgeSize(size);
      console.log({ size });
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

  validateBridgeSize(size) {
    size = Number(size);
    if (!Number.isInteger(size)) {
      throw new Error(ERROR_MESSAGES.NAN);
    }
    if (size < BREIDGE.MIN || size > BREIDGE.MAX) {
      throw new Error(ERROR_MESSAGES.SIZE);
    }
  },
};

module.exports = InputView;
