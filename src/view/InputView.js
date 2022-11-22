const MissionUtils = require('@woowacourse/mission-utils');
const Console = MissionUtils.Console;
const Validator = require('../utils/validator');
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
      if (Validator.isValidRange(answer)) {
        return answer;
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(GAME_MESSAGE.CHOOSE),
      answer => {
        if (Validator.isValidDirection(answer)) {
          return answer;
        }
      };
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(GAME_MESSAGE.ATTEMPT, answer => {
      if (Validator.isValidCommand(answer)) {
        return answer;
      }
    });
  },
};

module.exports = InputView;
