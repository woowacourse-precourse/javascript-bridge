const MissionUtils = require("@woowacourse/mission-utils");
const OutputView = require("./OutputView");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridge, count) {
    this.readMoving(bridge, count);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge, count) {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (upDown) => {
      if (upDown == 'U') {
        upDown = 0;
      } else if (upDown == 'D') {
        upDown = 1;
      }

      OutputView.printMap(bridge, count, upDown);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
