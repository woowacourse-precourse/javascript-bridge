const MissionUtils = require('@woowacourse/mission-utils');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(makeBridge, func2, func3) {
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.\n', (input) => {
      try {
        makeBridge.call(this, input);
        this.readMoving(func2, func3);
      } catch (error) {
        MissionUtils.Console.print(error);
        MissionUtils.Console.close();
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(func2, func3) {
    MissionUtils.Console.readLine('\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (input) => {
      func2.call(this, input);
      this.readGameCommand(func3);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(func3) {
    MissionUtils.Console.readLine('test3\n', (input) => {
      func3.call(this, input);
      this.gameEnd();
    });
  },

  gameEnd() {
    MissionUtils.Console.close();
  },
};

module.exports = InputView;
