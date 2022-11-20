const MissionUtils = require('@woowacourse/mission-utils');
const Console = MissionUtils.Console;
const { GAME_MESSAGE } = require('../utils/constants');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(GAME_MESSAGE.BRIDGE_SIZE, answer => {
      //TODO:유효성검사 - 숫자인가? 3~20 사이인가?
      return answer;
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
