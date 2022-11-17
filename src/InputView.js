/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const { Console, Random } = require("@woowacourse/mission-utils");
const ENTER_BRIDGELENGTH = "다리의 길이를 입력해주세요.";
const ENTER_MOVING = "이동할 칸을 선택해주세요. (위: U, 아래: D)";
const ENTER_PROCEED =
  "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)";

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(ENTER_BRIDGELENGTH, (answer) => {
      console.log("입력한 다리의 길이: " + answer);
      return answer;
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(ENTER_MOVING, (answer) => {
      console.log("선택한 이동할 칸: " + answer);
      return answer;
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(ENTER_PROCEED, (answer) => {
      console.log("선택한 게임 진행 여부: " + answer);
      return answer;
    });
  },
};

module.exports = InputView;
