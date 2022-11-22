const { Console } = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { InputValidator } = require("./utils/InputValidation");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(message, callback) {
    Console.readLine(message, (size) => {
      // InputValidator.bridgeSizeValidator(size);
      callback(size);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(message, callback) {
    Console.readLine(message, (nextStep) => {
      // InputValidator.userMoveValidator(nextStep);
      callback(nextStep);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(message, callback) {
    Console.readLine(message, (retryOrEndInput) => {
      // InputValidator.retryOrEndValidator(retryOrEndInput);
      callback(retryOrEndInput);
    });
  },
};

module.exports = InputView;
