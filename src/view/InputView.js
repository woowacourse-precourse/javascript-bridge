const MissionUtils = require('@woowacourse/mission-utils');
const { READ_BRIDGE_SIZE, READ_MOVING, READ_GAME_COMMAND } = require('../utils/constant');
const { isBridgeSizeValid, isUserMovingInputValid } = require('../utils/validation');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    const bridgeSize = new Promise((resolve) => {
      MissionUtils.Console.readLine(READ_BRIDGE_SIZE, (answer) => {
        isBridgeSizeValid(answer);
        return resolve(answer);
      });
    });
    return bridgeSize;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    const moving = new Promise((resolve) => {
      MissionUtils.Console.readLine(READ_MOVING, (answer) => {
        isUserMovingInputValid(answer);
        return resolve(answer);
      });
    });
    return moving;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    const gameCommand = new Promise((resolve) => {
      MissionUtils.Console.readLine(READ_GAME_COMMAND, (answer) => resolve(answer));
    });
    return gameCommand;
  },
};

module.exports = InputView;
