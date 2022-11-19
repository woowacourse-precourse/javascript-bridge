const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("./constant");

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(actWithBridgeNumber) {
    Console.readLine(INPUT_MESSAGE.numberOfBridge, (number) => {
      actWithBridgeNumber(number);
    });
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(actWithUserStepInput) {
    Console.readLine(INPUT_MESSAGE.chooseUpOrDown, (input) => {
      actWithUserStepInput(input);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(actWithUserRetryInput) {
    Console.readLine(INPUT_MESSAGE.chooseToRetry, (input) => {
      actWithUserRetryInput(input);
    });
  },
};

module.exports = InputView;
