const MissionUtils = require('@woowacourse/mission-utils');
const Expect = require('./Expect');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {

  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridegame) {
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.', (size) => {
      bridegame.createMap(size);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridegame) {
    MissionUtils.Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)', (userInput) => {
      bridegame.move(userInput);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    MissionUtils.Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)', (command) => {
      bridegame.restartInput(command);
    });
  },
};

module.exports = InputView;
