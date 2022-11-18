const MissionUtils = require("@woowacourse/mission-utils");
const { checkBridgeSize, checkGameCommand, checkMoves } = require("./InputChecker");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(handler) {
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.\n", (userInput) => {
      try {
        checkBridgeSize(userInput);
        handler(userInput);
      } catch (error) {
        MissionUtils.Console.print(error);
        InputView.readBridgeSize(handler);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(handler) {
    MissionUtils.Console.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D)\n", (userInput) => {
      try {
        checkMoves(userInput);
        handler(userInput);
      } catch (error) {
        MissionUtils.Console.print(error);
        InputView.readMoving(handler);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(handler) {
    MissionUtils.Console.readLine("게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n", (userInput) => {
      try {
        checkGameCommand(userInput);
      } catch (error) {
        MissionUtils.Console.print(error);
        InputView.readGameCommand(handler);
      }
      handler(userInput);
    });
  },
};

module.exports = InputView;
