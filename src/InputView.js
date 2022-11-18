const { Console } = require("@woowacourse/mission-utils");
const { ANNOUNCEMENT_MESSAGE } = require("./constant/Constant");
const Validation = require("./utils/Validation");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

function validateNumber(toNumberUserInput, callback) {
  try {
    Validation.isNumber(toNumberUserInput);
  } catch (e) {
    Console.print(e);
    InputView.readBridgeSize(callback);
    return;
  }
}

function validateIsBridge(toNumberUserInput, callback) {
  try {
    Validation.isBridgeLength(toNumberUserInput);
  } catch (e) {
    Console.print(e);
    InputView.readBridgeSize(callback);
    return;
  }
}

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine(ANNOUNCEMENT_MESSAGE.GET_BRIDGE, (userInput) => {
      const toNumberUserInput = Number(userInput);
      validateNumber(toNumberUserInput, callback);
      validateIsBridge(toNumberUserInput, callback);
      callback(toNumberUserInput);
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
};

module.exports = InputView;
