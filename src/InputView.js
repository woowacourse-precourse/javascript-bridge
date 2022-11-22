const MissionUtils = require("@woowacourse/mission-utils");
const { validateRangeOfNumber } = require("./validations");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let size = 0;

    MissionUtils.Console.readLine("다리의 길이를 입력해주세요. \n", (number) => { 
      validateRangeOfNumber();
      return size = number;
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    const MOVING_CHOICE;
    MissionUtils.Console.readLine(
      "\n이동할 칸을 선택해주세요. (위: U, 아래: D) \n",
      (movekey) => {
        return MOVING_CHOICE = movekey;
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    const RETRY_OR_FINISH;

    MissionUtils.Console.readLine(
      "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q) \n",
      (endKey) => {
        return RETRY_OR_FINISH = endKey;
     });
  },
};

module.exports = InputView;
